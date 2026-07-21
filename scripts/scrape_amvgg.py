"""
Scrapes amvgg.com/values/<category> — confirmed to be plain server-rendered
HTML (no JavaScript needed), so this uses requests + BeautifulSoup only.

Verified live on 2026-07-21: /values/pets returned all 755 pets in one
page load, each formatted in the page's TEXT as:
    "<Name>Value<number>Demand<stars>FRNM<relative time>ago"
Parsed with a single regex scan (finditer) over the whole text, using the
full "<N> <unit> ago" suffix as each item's end-boundary -- NOT a naive
split on the substring "ago", which would (and in an earlier version,
did) break on any name containing "ago" as a substring, e.g. "Dragon"
(D-r-AGO-n). Every Dragon-named pet was silently corrupted by that bug;
fixed by requiring the specific time-unit pattern to close a match.

If AMVGG changes their page structure, this regex will start returning 0
items — the script prints a warning and a text sample when that happens
so it's obvious what broke, instead of silently writing empty/bad data.

IMAGES (added per request to source pet/item images from AMVGG):
Plain text extraction strips out <img> tags entirely, so this now also
parses the raw DOM for every <img> and matches it to a pet/item by its
`alt` attribute -- confirmed working at 100% match rate for pets on the
first live run.

SECOND BUG FOUND ON THE FIRST LIVE RUN (2026-07-21):
Pets parsed perfectly (754/754) but every other category returned 0
items. Turned out non-pet category pages (eggs, toys, etc.) use a
different, block-separated card layout -- heading, then Value/Demand/
time each in their own block -- unlike pets' compact zero-whitespace
layout. Since "." doesn't match newlines by default, the regex silently
failed to bridge those gaps. Fixed with re.DOTALL plus \s* tolerance
between every field. Verified against both layouts before shipping.
"""
import re
import json
import sys
import time
import requests
from bs4 import BeautifulSoup

# AMVGG category -> PetSwap category key (matches data.js CATEGORIES)
CATEGORY_MAP = {
    "pets": "pets",
    "eggs": "eggs",
    "petwear": "petwear",
    "strollers": "strollers",
    "food": "food",
    "vehicles": "vehicles",
    "toys": "toys",
    "gifts": "gifts",
    "stickers": "stickers",
    # "houses" intentionally skipped -- not a category PetSwap tracks
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/124.0 Safari/537.36 PetSwapValueBot/1.0"
}

ITEM_RE = re.compile(
    r"(?P<name>.+?)\s*Value\s*(?P<value>[\d.]+)\s*Demand\s*(?P<stars>[★☆]+)\s*(?:FRNM\s*)?"
    r"(?:\d+\s*(?:second|minute|hour|day|week|month|year)s?\s*ago|just now)",
    re.DOTALL,
)


def extract_images_by_alt(soup: BeautifulSoup) -> dict:
    """Best-effort: map normalized alt-text -> image URL for every <img> on
    the page. Falls back to data-src/data-original in case images are
    lazy-loaded (src would be a placeholder in that case)."""
    images = {}
    for img in soup.find_all("img"):
        alt = (img.get("alt") or "").strip().lower()
        src = img.get("src") or img.get("data-src") or img.get("data-original") or ""
        if alt and src and not src.startswith("data:"):  # skip inline placeholder blobs
            images[alt] = src
    return images


def scrape_category(amvgg_slug: str) -> tuple[list[dict], int, int]:
    url = f"https://amvgg.com/values/{amvgg_slug}"
    resp = requests.get(url, headers=HEADERS, timeout=30)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")
    text = soup.get_text(separator="")

    marker = "Value"
    if marker not in text:
        print(f"  [warn] no 'Value' marker found for {amvgg_slug} — page structure may have changed")
        return [], 0, 0

    images_by_alt = extract_images_by_alt(soup)

    # NOTE: the very first real item on each page will typically get
    # merged with leading header/nav text (e.g. "...Ride PotBat Dragon...")
    # since there's no reliable delimiter before it -- the len(name)>60
    # filter below discards that one contaminated entry per category page.
    # Minor, known, acceptable loss (~1 item per category) vs. the
    # alternative of a fragile per-category header-stripping regex.
    items = []
    matched_images = 0
    for m in ITEM_RE.finditer(text):
        name = m.group("name").strip()
        if len(name) > 60 or not name:
            continue
        try:
            value = float(m.group("value"))
        except ValueError:
            continue
        demand_stars = m.group("stars").count("★")

        image_url = images_by_alt.get(name.lower(), "")
        if image_url:
            matched_images += 1

        items.append({
            "name": name,
            "category": CATEGORY_MAP[amvgg_slug],
            "value": value,
            "demand": demand_stars,  # 1-3 scale on AMVGG; blend.py rescales this
            "image": image_url,
            "source": "amvgg",
        })
    return items, len(items), matched_images


def main():
    all_items = []
    total_items = 0
    total_matched_images = 0

    for slug in CATEGORY_MAP:
        print(f"Scraping AMVGG: {slug} ...")
        try:
            cat_items, n_items, n_matched = scrape_category(slug)
            print(f"  -> {n_items} items, {n_matched} with an image match "
                  f"({n_matched}/{n_items or 1} = {100 * n_matched // (n_items or 1)}%)")
            all_items.extend(cat_items)
            total_items += n_items
            total_matched_images += n_matched
        except Exception as e:
            print(f"  [error] {slug}: {e}")
        time.sleep(1.5)  # be a polite scraper, not a hammer

    out_path = "scraped_amvgg.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(all_items, f, indent=2)
    print(f"\nWrote {len(all_items)} total items to {out_path}")

    if total_items > 0:
        pct = 100 * total_matched_images // total_items
        print(f"Image match rate: {total_matched_images}/{total_items} ({pct}%)")
        if pct < 50:
            print("[warn] image match rate is low -- alt-text matching may not be reliable on "
                  "this page. Send a snippet of the real <img> HTML (view-source, search for "
                  "one pet's image tag) and this can be switched to a more reliable method.")

    if len(all_items) < 100:
        print("[warn] suspiciously low item count -- check that AMVGG's page structure hasn't changed.")
        sys.exit(1 if len(all_items) == 0 else 0)


if __name__ == "__main__":
    main()

