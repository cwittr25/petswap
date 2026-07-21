# PetSwap value pipeline

Scrapes StarPets (45%), AMVGG (35%), and Elvebredd (20%), blends them by
percentile rank, and writes the result into `data.js`.

## Confirmed tonight (2026-07-21)
- AMVGG: static HTML, scraper is real and should work as-is.
- StarPets: JS-only. Scraper uses Playwright + a generic "any item link"
  scanner since I couldn't inspect real selectors from my sandbox. Will
  likely need one round of tightening after you see real output.
- Elvebredd: real site is elvebredd.com (NOT elvebredd.online, which is
  an unrelated content-farm site with fabricated-looking values -- don't
  scrape that one). Also JS-only, and I have zero confirmed URL/selector
  info for it. Needs the DevTools pass described in scrape_elvebredd.py
  before it'll reliably return anything.

## Setup
1. Copy `scripts/` and `.github/workflows/update-values.yml` into your repo,
   alongside your existing `data.js`.
2. Repo Settings -> Actions -> General -> Workflow permissions ->
   "Read and write permissions" (needed so the Action can commit data.js).
3. Test locally first (see below) before relying on the scheduled run.

## Testing locally
```
cd scripts
pip install -r requirements.txt
playwright install --with-deps chromium
python scrape_amvgg.py       # should just work
python scrape_starpets.py    # check scraped_starpets.json, tighten selectors if empty/wrong
python scrape_elvebredd.py   # needs the DevTools API URL first, see top of file
cp ../data.js .
python blend.py
cp data.js ../data.js
```

## The DevTools step (StarPets + Elvebredd)
Open the site -> F12 -> Network tab -> filter "Fetch/XHR" -> browse a
category page -> look for a request returning JSON with item
names/prices. That URL, dropped into the relevant scraper, replaces the
generic browser-scanning approach with a direct API call: faster, more
reliable, and much less likely to break when the site's HTML changes.
Send me the URL (and a sample response) once you have it and I'll wire
it in.

## Weighting & blending
See the top-of-file comments in `blend.py` for why this uses percentile
ranks instead of averaging raw numbers (StarPets $ vs AMVGG/Elvebredd
points aren't the same unit).
