/*
  ============================================================
  petswap.me — DATA FILE
  ============================================================
  This file is now built from a real StarPets.gg data pull
  (823 items across pets, eggs, potions, pet wear, vehicles,
  toys, strollers, and gifts), taken on 2026-07-25.

  WHAT'S REAL VS. STILL PLACEHOLDER
  ----------------------------------
  ✔ REAL: item names, images, and base values — pulled directly
    from live StarPets listings (their $ price = our value,
    1:1, exactly as you specified).
  ✔ REAL: Neon and Mega Neon multipliers — calculated from
    actual StarPets listings that had both a base and a
    neon/mega version of the same pet (33 and 42 pets
    respectively). Neon runs ~2.0x base, Mega Neon ~3.4x base.
    That's a big correction from the earlier placeholder
    guesses of 4x and 20x — Mega Neon in particular was way
    overvalued before.
  ⚠ STILL ESTIMATED: Fly and Ride multipliers. The StarPets
    sample only had 1-2 listings with those flags active, not
    enough to calculate a reliable ratio, so these are still
    the original placeholder guesses (1.15x / 1.4x). Worth
    revisiting once we pull a bigger sample.
  ⚠ STILL A PROXY: "Demand" isn't real demand data yet — it's
    StarPets' own rarity tier (common/uncommon/rare/ultra
    rare/legendary) mapped onto our 1-5 scale as a stand-in.
    Real demand (how sought-after something is beyond price)
    should come from a second source like a trading-community
    value list, per the plan discussed earlier.
  ✘ NOT ON STARPETS: Food and Stickers aren't sold there, so
    those two categories still use small fixed placeholder
    values below — genuinely low-stakes items in real trades.

  HOW TO ADD/EDIT ITEMS
  ----------------------
  {
    id: "shadow-dragon",      // must be unique, no spaces
    name: "Shadow Dragon",    // shown to the user
    category: "pets",         // must match a key in CATEGORIES below
    value: 400,               // base value (StarPets $ price, 1:1)
    demand: 5,                // 1 (low) to 5 (high)
    image: ""                 // image URL, or "" for a placeholder tile
  }

  Only items in the "pets" category get the F / R / N / M popup.
  ============================================================
*/

const CATEGORIES = [
  { key: "all",        label: "All" },
  { key: "pets",       label: "Pets" },
  { key: "eggs",       label: "Eggs" },
  { key: "potions",    label: "Potions" },
  { key: "petwear",    label: "Pet Wear" },
  { key: "vehicles",   label: "Vehicles" },
  { key: "toys",       label: "Toys" },
  { key: "food",       label: "Food" },
  { key: "stickers",   label: "Stickers" },
  { key: "strollers",  label: "Strollers" },
  { key: "gifts",      label: "Gifts" }
];

/*
  DEMAND MULTIPLIER
  A 1-5 demand rating nudges the base value up or down.
  (Currently fed by StarPets rarity tier — see note above.)
*/
const DEMAND_MULTIPLIERS = {
  1: 0.75,
  2: 0.90,
  3: 1.00,
  4: 1.15,
  5: 1.35
};

/*
  PET VARIANT MULTIPLIERS
  Neon and Mega are now calculated from real StarPets data.
  Fly / Ride / FlyRide are still placeholders (see note above).
*/
const VARIANT_MULTIPLIERS = {
  base: 1,
  fly: 1.15,     // placeholder — not enough real fly-only listings yet
  ride: 1.15,    // placeholder — not enough real ride-only listings yet
  flyRide: 1.4,  // placeholder — only 2 real listings, too few to trust
  neon: 2.0,     // real: median of 33 pets with both base + neon listed
  mega: 3.38     // real: median of 42 pets with both base + mega listed
};

function getVariantMultiplier(flags) {
  const { fly, ride, neon, mega } = flags;
  if (mega) return VARIANT_MULTIPLIERS.mega;
  if (neon) return VARIANT_MULTIPLIERS.neon;
  if (fly && ride) return VARIANT_MULTIPLIERS.flyRide;
  if (fly) return VARIANT_MULTIPLIERS.fly;
  if (ride) return VARIANT_MULTIPLIERS.ride;
  return VARIANT_MULTIPLIERS.base;
}

/*
  ITEMS
  823 real items pulled from StarPets.gg (2026-07-20), plus a
  handful of manual Food/Stickers entries (not sold on StarPets).
*/
const ITEMS = [
  {
    "id": "pets-inmate-capuchin-monkey",
    "name": "Inmate Capuchin Monkey",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Inmate Capuchin Monkey.webp"
  },
  {
    "id": "pets-flamingo",
    "name": "Flamingo",
    "category": "pets",
    "value": 6.5921,
    "demand": 3,
    "image": "/items/Flamingo.webp"
  },
  {
    "id": "pets-general-sheepdog",
    "name": "General Sheepdog",
    "category": "pets",
    "value": 0.5336,
    "demand": 2,
    "image": "/items/General Sheepdog.webp"
  },
  {
    "id": "pets-dire-wolf",
    "name": "Dire Wolf",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Dire Wolf.webp"
  },
  {
    "id": "toys-magic-house-door",
    "name": "Magic House Door",
    "category": "toys",
    "value": 0.3767,
    "demand": 2,
    "image": "/items/Magic House Door.webp"
  },
  {
    "id": "pets-english-sheepdog",
    "name": "English Sheepdog",
    "category": "pets",
    "value": 0.5336,
    "demand": 2,
    "image": "/items/English Sheepdog.webp"
  },
  {
    "id": "pets-chimera",
    "name": "Chimera",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Chimera.webp"
  },
  {
    "id": "pets-beaver",
    "name": "Beaver",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Beaver.webp"
  },
  {
    "id": "petwear-banana-hat",
    "name": "Banana Hat",
    "category": "petwear",
    "value": 0.7534,
    "demand": 2,
    "image": "/items/Banana Hat.webp"
  },
  {
    "id": "vehicles-red-skateboard",
    "name": "Neon Red Skateboard",
    "category": "vehicles",
    "value": 0.8162,
    "demand": 1,
    "image": "/items/Neon Red Skateboard.webp"
  },
  {
    "id": "food-snowflake-potion",
    "name": "Snowflake Potion",
    "category": "food",
    "value": 2.5113,
    "demand": 2,
    "image": "/items/Snowflake Potion.webp"
  },
  {
    "id": "toys-sour-glider",
    "name": "Sour Glider",
    "category": "toys",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Sour Glider.webp"
  },
  {
    "id": "potions-bonus-bucks-potion",
    "name": "Bonus Bucks Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-enchanted-broomstick",
    "name": "Enchanted Broomstick",
    "category": "vehicles",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Enchanted Broomstick.webp"
  },
  {
    "id": "petwear-toaster-hat",
    "name": "Toaster Hat",
    "category": "petwear",
    "value": 3.9239,
    "demand": 3,
    "image": "/items/Toaster Hat.webp"
  },
  {
    "id": "pets-kelp-captain",
    "name": "Kelp Captain",
    "category": "pets",
    "value": 0.5964,
    "demand": 1,
    "image": "/items/Kelp Captain.webp"
  },
  {
    "id": "pets-slime",
    "name": "Slime",
    "category": "pets",
    "value": 1.1301,
    "demand": 2,
    "image": "/items/Slime.webp"
  },
  {
    "id": "pets-tarantula",
    "name": "Tarantula",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Tarantula.webp"
  },
  {
    "id": "vehicles-choo-choo-train",
    "name": "Choo Choo Train",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Choo Choo Train.webp"
  },
  {
    "id": "petwear-puppeteer-hand",
    "name": "Puppeteer Hand",
    "category": "petwear",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Puppeteer Hand.webp"
  },
  {
    "id": "pets-moonpine",
    "name": "Moonpine",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Moonpine.webp"
  },
  {
    "id": "pets-mr-whiskerpips",
    "name": "Mr. Whiskerpips",
    "category": "pets",
    "value": 0.4238,
    "demand": 2,
    "image": "/items/Mr. Whiskerpips.webp"
  },
  {
    "id": "pets-cockroach",
    "name": "Cockroach",
    "category": "pets",
    "value": 0.2668,
    "demand": 1,
    "image": "/items/Cockroach.webp"
  },
  {
    "id": "pets-2025-birthday-butterfly",
    "name": "2025 Birthday Butterfly",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/2025 Birthday Butterfly.webp"
  },
  {
    "id": "toys-christmas-doge-rattle",
    "name": "Christmas Doge Rattle",
    "category": "toys",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Christmas Doge Rattle.webp"
  },
  {
    "id": "pets-gold-mahi-mahi",
    "name": "Gold Mahi Mahi",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Gold Mahi Mahi.webp"
  },
  {
    "id": "petwear-founders-crown",
    "name": "Founder's Crown",
    "category": "petwear",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Founders Crown.webp"
  },
  {
    "id": "petwear-rain-boots",
    "name": "Rain Boots",
    "category": "petwear",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Rain Boots.webp"
  },
  {
    "id": "pets-groundhog",
    "name": "Groundhog",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Groundhog.webp"
  },
  {
    "id": "stickers-pet-rock-sticker",
    "name": "Pet Rock Sticker",
    "category": "stickers",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Pet Rock Sticker.webp"
  },
  {
    "id": "stickers-solaris-animated-sticker",
    "name": "Solaris Animated Sticker",
    "category": "stickers",
    "value": 0.3453,
    "demand": 2,
    "image": "/items/Solaris Animated Sticker.webp"
  },
  {
    "id": "pets-black-tiger",
    "name": "Black Tiger",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Black Tiger.webp"
  },
  {
    "id": "pets-prismatic-butterfly",
    "name": "Prismatic Butterfly",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Prismatic Butterfly.webp"
  },
  {
    "id": "petwear-eco-brown-earthwizard-hat",
    "name": "Eco Brown Earth-Wizard Hat",
    "category": "petwear",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Eco Brown Earth-Wizard Hat.webp"
  },
  {
    "id": "vehicles-ice-plane",
    "name": "Ice Plane",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Ice Plane.webp"
  },
  {
    "id": "pets-diamond-hamster",
    "name": "Diamond Hamster",
    "category": "pets",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Diamond Hamster.webp"
  },
  {
    "id": "pets-hyena",
    "name": "Hyena",
    "category": "pets",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Hyena.webp"
  },
  {
    "id": "stickers-state-fair-sticker-pack",
    "name": "State Fair Sticker Pack",
    "category": "stickers",
    "value": 0.0314,
    "demand": 1,
    "image": "/items/State Fair Sticker Pack.webp"
  },
  {
    "id": "pets-dingo",
    "name": "Dingo",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Dingo.webp"
  },
  {
    "id": "eggs-aussie-egg",
    "name": "Aussie Egg",
    "category": "eggs",
    "value": 2.0966,
    "demand": 3,
    "image": "/items/Aussie Egg.webp"
  },
  {
    "id": "petwear-personal-controller",
    "name": "Personal Controller",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Personal Controller.webp"
  },
  {
    "id": "strollers-race-car-stroller",
    "name": "Race Car Stroller",
    "category": "strollers",
    "value": 0.7675,
    "demand": 2,
    "image": "/items/Race Car Stroller.webp"
  },
  {
    "id": "petwear-spring-bunny-feet",
    "name": "Spring Bunny Feet",
    "category": "petwear",
    "value": 1.0045,
    "demand": 2,
    "image": "/items/Spring Bunny Feet.webp"
  },
  {
    "id": "pets-easter-bunny",
    "name": "Easter Bunny",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Easter Bunny.webp"
  },
  {
    "id": "pets-steppe-lion",
    "name": "Steppe Lion",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Steppe Lion.webp"
  },
  {
    "id": "strollers-sailboat-stroller",
    "name": "Sailboat Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-squid",
    "name": "Squid",
    "category": "pets",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Squid.webp"
  },
  {
    "id": "vehicles-halloween-black-ponycycle",
    "name": "Halloween Black Ponycycle",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Halloween Black Ponycycle.webp"
  },
  {
    "id": "pets-gilded-snake",
    "name": "Gilded Snake",
    "category": "pets",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Gilded Snake.webp"
  },
  {
    "id": "petwear-cherryontop",
    "name": "Cherry-On-Top",
    "category": "petwear",
    "value": 12.2425,
    "demand": 3,
    "image": "/items/Cherry-On-Top.webp"
  },
  {
    "id": "pets-jekyll-hydra",
    "name": "Jekyll Hydra",
    "category": "pets",
    "value": 19.1485,
    "demand": 3,
    "image": "/items/Jekyll Hydra.webp"
  },
  {
    "id": "vehicles-toy-rescue-helicopter",
    "name": "Toy Rescue Helicopter",
    "category": "vehicles",
    "value": 0.7534,
    "demand": 1,
    "image": "/items/Toy Rescue Helicopter.webp"
  },
  {
    "id": "eggs-diamond-egg",
    "name": "Diamond Egg",
    "category": "eggs",
    "value": 0.2293,
    "demand": 1,
    "image": "/items/Diamond Egg.webp"
  },
  {
    "id": "pets-glormy-dolphin",
    "name": "Glormy Dolphin",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Glormy Dolphin.webp"
  },
  {
    "id": "pets-many-mackerel",
    "name": "Many Mackerel",
    "category": "pets",
    "value": 2.6682,
    "demand": 2,
    "image": "/items/Many Mackerel.webp"
  },
  {
    "id": "petwear-halloween-black-axe-guitar-accessory",
    "name": "Halloween Black Axe Guitar Accessory",
    "category": "petwear",
    "value": 0.7534,
    "demand": 2,
    "image": "/items/Halloween Black Axe Guitar Accessory.webp"
  },
  {
    "id": "pets-floral-eggy",
    "name": "Floral Eggy",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Floral Eggy.webp"
  },
  {
    "id": "toys-heart-plushie",
    "name": "Heart Plushie",
    "category": "toys",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Heart Plushie.webp"
  },
  {
    "id": "stickers-long-ermine-sticker",
    "name": "Long Ermine Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Long Ermine Sticker.webp"
  },
  {
    "id": "pets-blue-butterfly",
    "name": "Blue Butterfly",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Blue Butterfly.webp"
  },
  {
    "id": "pets-wood-pigeon",
    "name": "Wood Pigeon",
    "category": "pets",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Wood Pigeon.webp"
  },
  {
    "id": "pets-magma-snail",
    "name": "Magma Snail",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Magma Snail.webp"
  },
  {
    "id": "pets-humbug",
    "name": "Humbug",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Humbug.webp"
  },
  {
    "id": "pets-christmas-spirit",
    "name": "Christmas Spirit",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Christmas Spirit.webp"
  },
  {
    "id": "pets-angus-bull",
    "name": "Angus Bull",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Angus Bull.webp"
  },
  {
    "id": "pets-gingerbread-hare",
    "name": "Gingerbread Hare",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Gingerbread Hare.webp"
  },
  {
    "id": "pets-diamond-dragon",
    "name": "Diamond Dragon",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Diamond Dragon.webp"
  },
  {
    "id": "pets-preppy-capuchin-monkey",
    "name": "Preppy Capuchin Monkey",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Preppy Capuchin Monkey.webp"
  },
  {
    "id": "vehicles-santa-copter",
    "name": "Santa Copter",
    "category": "vehicles",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Santa Copter.webp"
  },
  {
    "id": "pets-sushi-penguin",
    "name": "Sushi Penguin",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Sushi Penguin.webp"
  },
  {
    "id": "pets-arctic-hare",
    "name": "Arctic Hare",
    "category": "pets",
    "value": 0.2982,
    "demand": 1,
    "image": "/items/Arctic Hare.webp"
  },
  {
    "id": "vehicles-white-skateboard",
    "name": "White Skateboard",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/White Skateboard.webp"
  },
  {
    "id": "pets-ghost-chick",
    "name": "Ghost Chick",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Ghost Chick.webp"
  },
  {
    "id": "pets-black-chowchow",
    "name": "Black Chow-Chow",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Black Chow-Chow.webp"
  },
  {
    "id": "strollers-drone-stroller",
    "name": "Drone Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-gokart",
    "name": "GoKart",
    "category": "vehicles",
    "value": 2.5113,
    "demand": 2,
    "image": "/items/GoKart.webp"
  },
  {
    "id": "strollers-soy-sauce-stroller",
    "name": "Soy Sauce Stroller",
    "category": "strollers",
    "value": 0.11,
    "demand": 3,
    "image": ""
  },
  {
    "id": "potions-bonus-aging-potion",
    "name": "Bonus Aging Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-zombie-buffalo-plush",
    "name": "Zombie Buffalo Plush",
    "category": "toys",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Zombie Buffalo Plush.webp"
  },
  {
    "id": "toys-hotdog-stand",
    "name": "Hotdog Stand",
    "category": "toys",
    "value": 0.157,
    "demand": 2,
    "image": "/items/Hotdog Stand.webp"
  },
  {
    "id": "pets-drake",
    "name": "Drake",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Drake.webp"
  },
  {
    "id": "stickers-walrus-sticker",
    "name": "Walrus Sticker",
    "category": "stickers",
    "value": 0.0502,
    "demand": 1,
    "image": "/items/Walrus Sticker.webp"
  },
  {
    "id": "vehicles-orange-skateboard",
    "name": "Neon Orange Skateboard",
    "category": "vehicles",
    "value": 0.8162,
    "demand": 1,
    "image": "/items/Neon Orange Skateboard.webp"
  },
  {
    "id": "vehicles-hot-rod-sleigh",
    "name": "Hot Rod Sleigh",
    "category": "vehicles",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Hot Rod Sleigh.webp"
  },
  {
    "id": "petwear-alien-eyes-hat",
    "name": "Alien Eyes Hat",
    "category": "petwear",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Alien Eyes Hat.webp"
  },
  {
    "id": "pets-undead-elk",
    "name": "Undead Elk",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Undead Elk.webp"
  },
  {
    "id": "petwear-pink-hightops",
    "name": "Pink Hightops",
    "category": "petwear",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Pink Hightops.webp"
  },
  {
    "id": "petwear-clockwork-wings",
    "name": "Clockwork Wings",
    "category": "petwear",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Clockwork Wings.webp"
  },
  {
    "id": "pets-nightmare-owl",
    "name": "Nightmare Owl",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Nightmare Owl.webp"
  },
  {
    "id": "stickers-fox-sticker",
    "name": "Fox Sticker",
    "category": "stickers",
    "value": 0.0785,
    "demand": 1,
    "image": "/items/Fox Sticker.webp"
  },
  {
    "id": "toys-rose-quartz-glow-paint",
    "name": "Rose Quartz Glow Mega Neon Paint",
    "category": "toys",
    "value": 0.2511,
    "demand": 3,
    "image": "/items/Rose Quartz Glow Mega Neon Paint.webp"
  },
  {
    "id": "food-strawberry-shortcake",
    "name": "Strawberry Shortcake",
    "category": "food",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Strawberry Shortcake.webp"
  },
  {
    "id": "petwear-glamicorn-purse-pet",
    "name": "Glamicorn Purse Pet",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Glamicorn Purse Pet.webp"
  },
  {
    "id": "pets-aurora-fox",
    "name": "Aurora Fox",
    "category": "pets",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Aurora Fox.webp"
  },
  {
    "id": "pets-werewolf",
    "name": "Werewolf",
    "category": "pets",
    "value": 7.6908,
    "demand": 3,
    "image": "/items/Werewolf.webp"
  },
  {
    "id": "vehicles-adopt-me-snowboard-1",
    "name": "Adopt Me Snowboard 1",
    "category": "vehicles",
    "value": 1.1929,
    "demand": 1,
    "image": "/items/Adopt Me Snowboard 1.webp"
  },
  {
    "id": "vehicles-emperors-chariot",
    "name": "Emperor's Chariot",
    "category": "vehicles",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Emperors Chariot.webp"
  },
  {
    "id": "toys-campfire-stories-paint",
    "name": "Campfire Stories Mega Neon Paint",
    "category": "toys",
    "value": 0.2511,
    "demand": 3,
    "image": "/items/Campfire Stories Mega Neon Paint.webp"
  },
  {
    "id": "stickers-super-saru-animated-sticker",
    "name": "Super Saru Animated Sticker",
    "category": "stickers",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Super Saru Animated Sticker.webp"
  },
  {
    "id": "pets-mosquito",
    "name": "Mosquito",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Mosquito.webp"
  },
  {
    "id": "pets-frost-unicorn",
    "name": "Frost Unicorn",
    "category": "pets",
    "value": 4.5517,
    "demand": 3,
    "image": "/items/Frost Unicorn.webp"
  },
  {
    "id": "pets-ice-moth-dragon",
    "name": "Ice Moth Dragon",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Ice Moth Dragon.webp"
  },
  {
    "id": "gifts-moon-bear-box",
    "name": "Moon Bear Box",
    "category": "gifts",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Moon Bear Box.webp"
  },
  {
    "id": "stickers-blazing-lion-animated-sticker",
    "name": "Blazing Lion Animated Sticker",
    "category": "stickers",
    "value": 1.8835,
    "demand": 2,
    "image": "/items/Blazing Lion Animated Sticker.webp"
  },
  {
    "id": "pets-pirate-hermit-crab",
    "name": "Pirate Hermit Crab",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/Pirate Hermit Crab.webp"
  },
  {
    "id": "vehicles-egg-delivery-machine",
    "name": "Egg Delivery Machine",
    "category": "vehicles",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Egg Delivery Machine.webp"
  },
  {
    "id": "pets-midnight-dragon",
    "name": "Midnight Dragon",
    "category": "pets",
    "value": 1.6637,
    "demand": 2,
    "image": "/items/Midnight Dragon.webp"
  },
  {
    "id": "vehicles-bubble-car",
    "name": "Bubble Car",
    "category": "vehicles",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Bubble Car.webp"
  },
  {
    "id": "petwear-2022-birthday-cake",
    "name": "2022 Birthday Cake",
    "category": "petwear",
    "value": 8.3186,
    "demand": 3,
    "image": "/items/2022 Birthday Cake.webp"
  },
  {
    "id": "pets-shark",
    "name": "Shark",
    "category": "pets",
    "value": 0.6592,
    "demand": 2,
    "image": "/items/Shark.webp"
  },
  {
    "id": "pets-scarecrow-crow",
    "name": "Scarecrow Crow",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Scarecrow Crow.webp"
  },
  {
    "id": "vehicles-pumpkin-carriage",
    "name": "Pumpkin Carriage",
    "category": "vehicles",
    "value": 0.565,
    "demand": 1,
    "image": "/items/Pumpkin Carriage.webp"
  },
  {
    "id": "pets-penguin",
    "name": "Penguin",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Penguin.webp"
  },
  {
    "id": "pets-tree-sasquatch",
    "name": "Tree Sasquatch",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Tree Sasquatch.webp"
  },
  {
    "id": "vehicles-daisymobile",
    "name": "Daisymobile",
    "category": "vehicles",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Daisymobile.webp"
  },
  {
    "id": "pets-frog",
    "name": "Frog",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Frog.webp"
  },
  {
    "id": "toys-chinese-lantern",
    "name": "Chinese Lantern",
    "category": "toys",
    "value": 3.1391,
    "demand": 2,
    "image": "/items/Chinese Lantern.webp"
  },
  {
    "id": "pets-nautilus",
    "name": "Nautilus",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Nautilus.webp"
  },
  {
    "id": "strollers-toilet-stroller",
    "name": "Toilet Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "eggs-safari-egg",
    "name": "Safari Egg",
    "category": "eggs",
    "value": 76.65,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-ash-zebra",
    "name": "Ash Zebra",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Ash Zebra.webp"
  },
  {
    "id": "stickers-pelican-sticker",
    "name": "Pelican Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Pelican Sticker.webp"
  },
  {
    "id": "pets-shiba-inu",
    "name": "Shiba Inu",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Shiba Inu.webp"
  },
  {
    "id": "pets-mole",
    "name": "Mole",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Mole.webp"
  },
  {
    "id": "pets-monkey",
    "name": "Monkey",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Monkey.webp"
  },
  {
    "id": "pets-purple-butterfly",
    "name": "Purple Butterfly",
    "category": "pets",
    "value": 1.1929,
    "demand": 2,
    "image": "/items/Purple Butterfly.webp"
  },
  {
    "id": "pets-mermicorn",
    "name": "Mermicorn",
    "category": "pets",
    "value": 10.0451,
    "demand": 3,
    "image": "/items/Mermicorn.webp"
  },
  {
    "id": "pets-choco-penguin",
    "name": "Choco Penguin",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Choco Penguin.webp"
  },
  {
    "id": "stickers-hot-doggo-sticker",
    "name": "Hot Doggo Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Hot Doggo Sticker.webp"
  },
  {
    "id": "pets-field-mouse",
    "name": "Field Mouse",
    "category": "pets",
    "value": 2.0404,
    "demand": 2,
    "image": "/items/Field Mouse.webp"
  },
  {
    "id": "petwear-dragonfly-fairy-wings",
    "name": "Dragonfly Fairy Wings",
    "category": "petwear",
    "value": 4.7086,
    "demand": 2,
    "image": "/items/Dragonfly Fairy Wings.webp"
  },
  {
    "id": "food-golden-leaf",
    "name": "Golden Leaf",
    "category": "food",
    "value": 8.1617,
    "demand": 2,
    "image": "/items/Golden Leaf.webp"
  },
  {
    "id": "pets-clownfish",
    "name": "Clownfish",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Clownfish.webp"
  },
  {
    "id": "stickers-hamster-selfie-sticker",
    "name": "Hamster Selfie Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Hamster Selfie Sticker.webp"
  },
  {
    "id": "pets-ghost-bunny",
    "name": "Ghost Bunny",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Ghost Bunny.webp"
  },
  {
    "id": "gifts-christmas-gift",
    "name": "Christmas Gift",
    "category": "gifts",
    "value": 4.0808,
    "demand": 2,
    "image": "/items/Christmas Gift.webp"
  },
  {
    "id": "pets-peregrine-falcon",
    "name": "Peregrine Falcon",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Peregrine Falcon.webp"
  },
  {
    "id": "petwear-summer-straw-hat",
    "name": "Summer Straw Hat",
    "category": "petwear",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Summer Straw Hat.webp"
  },
  {
    "id": "pets-poison-dart-frog",
    "name": "Poison Dart Frog",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Poison Dart Frog.webp"
  },
  {
    "id": "pets-dimorphodon",
    "name": "Dimorphodon",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Dimorphodon.webp"
  },
  {
    "id": "pets-giant-black-scarab",
    "name": "Giant Black Scarab",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Giant Black Scarab.webp"
  },
  {
    "id": "petwear-golden-walrus-crown",
    "name": "Golden Walrus Crown",
    "category": "petwear",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Golden Walrus Crown.webp"
  },
  {
    "id": "pets-starfish",
    "name": "Starfish",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Starfish.webp"
  },
  {
    "id": "pets-german-shepherd",
    "name": "German Shepherd",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/German Shepherd.webp"
  },
  {
    "id": "pets-tree-frog",
    "name": "Tree Frog",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Tree Frog.webp"
  },
  {
    "id": "pets-emperor-shrimp",
    "name": "Emperor Shrimp",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Emperor Shrimp.webp"
  },
  {
    "id": "food-baked-alaska-bait",
    "name": "Baked Alaska Bait",
    "category": "food",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Baked Alaska Bait.webp"
  },
  {
    "id": "pets-black-dog",
    "name": "Black Dog",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Black Dog.webp"
  },
  {
    "id": "pets-narwhal",
    "name": "Narwhal",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Narwhal.webp"
  },
  {
    "id": "pets-punk-pony",
    "name": "Punk Pony",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Punk Pony.webp"
  },
  {
    "id": "pets-hippogriff",
    "name": "Hippogriff",
    "category": "pets",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Hippogriff.webp"
  },
  {
    "id": "vehicles-green-skateboard",
    "name": "Neon Green Skateboard",
    "category": "vehicles",
    "value": 0.8162,
    "demand": 1,
    "image": "/items/Neon Green Skateboard.webp"
  },
  {
    "id": "strollers-rocket-ship-stroller",
    "name": "Rocket Ship Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "gifts-regal-wing-chest",
    "name": "Regal Wing Chest",
    "category": "gifts",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Regal Wing Chest.webp"
  },
  {
    "id": "petwear-pink-designer-backpack",
    "name": "Pink Designer Backpack",
    "category": "petwear",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Pink Designer Backpack.webp"
  },
  {
    "id": "pets-siamese-cat",
    "name": "Siamese Cat",
    "category": "pets",
    "value": 7.5338,
    "demand": 3,
    "image": "/items/Siamese Cat.webp"
  },
  {
    "id": "pets-gecko",
    "name": "Gecko",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Gecko.webp"
  },
  {
    "id": "pets-smores-raccoon",
    "name": "S'mores Raccoon",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Smores Raccoon.webp"
  },
  {
    "id": "stickers-premium-sticker-pack",
    "name": "Premium Sticker Pack",
    "category": "stickers",
    "value": 0.2825,
    "demand": 2,
    "image": "/items/Premium Sticker Pack.webp"
  },
  {
    "id": "pets-snow-puma",
    "name": "Snow Puma",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Snow Puma.webp"
  },
  {
    "id": "pets-pelican",
    "name": "Pelican",
    "category": "pets",
    "value": 11.9286,
    "demand": 2,
    "image": "/items/Pelican.webp"
  },
  {
    "id": "vehicles-blue-skateboard",
    "name": "Blue Skateboard",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Blue Skateboard.webp"
  },
  {
    "id": "pets-black-springer-spaniel",
    "name": "Black Springer Spaniel",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Black Springer Spaniel.webp"
  },
  {
    "id": "vehicles-glass-skateboard",
    "name": "Glass Skateboard",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Glass Skateboard.webp"
  },
  {
    "id": "pets-grim-dragon",
    "name": "Grim Dragon",
    "category": "pets",
    "value": 7.8477,
    "demand": 3,
    "image": "/items/Grim Dragon.webp"
  },
  {
    "id": "pets-peach-owl",
    "name": "Peach Owl",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Peach Owl.webp"
  },
  {
    "id": "pets-llama",
    "name": "Llama",
    "category": "pets",
    "value": 0.9731,
    "demand": 2,
    "image": "/items/Llama.webp"
  },
  {
    "id": "stickers-spinning-cat-animated-sticker",
    "name": "Spinning Cat Animated Sticker",
    "category": "stickers",
    "value": 6.906,
    "demand": 2,
    "image": "/items/Spinning Cat Animated Sticker.webp"
  },
  {
    "id": "pets-indian-flying-fox",
    "name": "Indian Flying Fox",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Indian Flying Fox.webp"
  },
  {
    "id": "vehicles-gold-snowboard",
    "name": "Gold Snowboard",
    "category": "vehicles",
    "value": 3.453,
    "demand": 1,
    "image": "/items/Gold Snowboard.webp"
  },
  {
    "id": "stickers-orange-butterfly-sticker",
    "name": "Orange Butterfly Sticker",
    "category": "stickers",
    "value": 0.0942,
    "demand": 2,
    "image": "/items/Orange Butterfly Sticker.webp"
  },
  {
    "id": "pets-panda",
    "name": "Panda",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Panda.webp"
  },
  {
    "id": "toys-candyfloss-paint",
    "name": "Candyfloss Mega Neon Paint",
    "category": "toys",
    "value": 0.2825,
    "demand": 3,
    "image": "/items/Candyfloss Mega Neon Paint.webp"
  },
  {
    "id": "pets-tree-kangaroo",
    "name": "Tree Kangaroo",
    "category": "pets",
    "value": 0.9731,
    "demand": 2,
    "image": "/items/Tree Kangaroo.webp"
  },
  {
    "id": "gifts-easter-eggy-box",
    "name": "Easter Eggy Box",
    "category": "gifts",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Easter Eggy Box.webp"
  },
  {
    "id": "toys-puppy-plush",
    "name": "Puppy Plush",
    "category": "toys",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Puppy Plush.webp"
  },
  {
    "id": "eggs-pink-egg",
    "name": "Pink Egg",
    "category": "eggs",
    "value": 12.8866,
    "demand": 2,
    "image": "/items/Pink Egg.webp"
  },
  {
    "id": "pets-giant-anteater",
    "name": "Giant Anteater",
    "category": "pets",
    "value": 2.1974,
    "demand": 2,
    "image": "/items/Giant Anteater.webp"
  },
  {
    "id": "gifts-standard-capuchin-box",
    "name": "Standard Capuchin Box",
    "category": "gifts",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Standard Capuchin Box.webp"
  },
  {
    "id": "stickers-frostclaw-animated-sticker",
    "name": "Frostclaw Animated Sticker",
    "category": "stickers",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Frostclaw Animated Sticker.webp"
  },
  {
    "id": "strollers-dog-house-stroller",
    "name": "Dog House Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-eco-brown-branch-headphones",
    "name": "Eco Brown Branch Headphones",
    "category": "petwear",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Eco Brown Branch Headphones.webp"
  },
  {
    "id": "petwear-volcanic-boots",
    "name": "Volcanic Boots",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Volcanic Boots.webp"
  },
  {
    "id": "strollers-shopping-cart-stroller",
    "name": "Shopping Cart Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-ferris-wheel-hat",
    "name": "Ferris Wheel Hat",
    "category": "petwear",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Ferris Wheel Hat.webp"
  },
  {
    "id": "strollers-crystal-ball-stroller",
    "name": "Crystal Ball Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-adopt-me-boy-scooter",
    "name": "Adopt Me Boy Scooter",
    "category": "vehicles",
    "value": 0.6278,
    "demand": 1,
    "image": "/items/Adopt Me Boy Scooter.webp"
  },
  {
    "id": "pets-lava-dragon",
    "name": "Lava Dragon",
    "category": "pets",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Lava Dragon.webp"
  },
  {
    "id": "pets-raccoon",
    "name": "Raccoon",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Raccoon.webp"
  },
  {
    "id": "pets-pink-cat",
    "name": "Pink Cat",
    "category": "pets",
    "value": 2.5113,
    "demand": 2,
    "image": "/items/Pink Cat.webp"
  },
  {
    "id": "vehicles-glass-snowboard",
    "name": "Glass Snowboard",
    "category": "vehicles",
    "value": 1.5695,
    "demand": 1,
    "image": "/items/Glass Snowboard.webp"
  },
  {
    "id": "strollers-snow-globe-stroller",
    "name": "Snow Globe Stroller",
    "category": "strollers",
    "value": 0.07,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-sneak-weasel",
    "name": "Sneak Weasel",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Sneak Weasel.webp"
  },
  {
    "id": "toys-sunrise-hang-glider",
    "name": "Sunrise Hang Glider",
    "category": "toys",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Sunrise Hang Glider.webp"
  },
  {
    "id": "toys-polar-bear-plush",
    "name": "Polar Bear Plush",
    "category": "toys",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Polar Bear Plush.webp"
  },
  {
    "id": "pets-flaming-zebra",
    "name": "Flaming Zebra",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Flaming Zebra.webp"
  },
  {
    "id": "stickers-flamingo-sticker",
    "name": "Flamingo Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Flamingo Sticker.webp"
  },
  {
    "id": "eggs-cracked-egg",
    "name": "Cracked Egg",
    "category": "eggs",
    "value": 0.0252,
    "demand": 1,
    "image": "/items/Cracked Egg.webp"
  },
  {
    "id": "strollers-ice-skate-stroller",
    "name": "Ice Skate Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-elasmosaurus",
    "name": "Elasmosaurus",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Elasmosaurus.webp"
  },
  {
    "id": "petwear-unicorn-backpack",
    "name": "Unicorn Backpack",
    "category": "petwear",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Unicorn Backpack.webp"
  },
  {
    "id": "pets-chilling-spider",
    "name": "Chilling Spider",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Chilling Spider.webp"
  },
  {
    "id": "toys-tea-party-chair",
    "name": "Tea Party Chair",
    "category": "toys",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Tea Party Chair.webp"
  },
  {
    "id": "pets-black-widow",
    "name": "Black Widow",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Black Widow.webp"
  },
  {
    "id": "toys-axe-rattle",
    "name": "Axe Rattle",
    "category": "toys",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Axe Rattle.webp"
  },
  {
    "id": "pets-koi-carp",
    "name": "Koi Carp",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Koi Carp.webp"
  },
  {
    "id": "petwear-gold-circle-glasses",
    "name": "Gold Circle Glasses",
    "category": "petwear",
    "value": 0.0785,
    "demand": 2,
    "image": "/items/Gold Circle Glasses.webp"
  },
  {
    "id": "petwear-llamalush-purse-pet",
    "name": "Llamalush Purse Pet",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Llamalush Purse Pet.webp"
  },
  {
    "id": "pets-dire-stag",
    "name": "Dire Stag",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Dire Stag.webp"
  },
  {
    "id": "petwear-pirate-hat",
    "name": "Pirate Hat",
    "category": "petwear",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Pirate Hat.webp"
  },
  {
    "id": "pets-phoenix",
    "name": "Phoenix",
    "category": "pets",
    "value": 0.6592,
    "demand": 2,
    "image": "/items/Phoenix.webp"
  },
  {
    "id": "food-golden-clam",
    "name": "Golden Clam",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Golden Clam.webp"
  },
  {
    "id": "pets-tanuki",
    "name": "Tanuki",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Tanuki.webp"
  },
  {
    "id": "pets-golden-penguin",
    "name": "Golden Penguin",
    "category": "pets",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Golden Penguin.webp"
  },
  {
    "id": "vehicles-adopt-me-snowboard-2",
    "name": "Adopt Me Snowboard 2",
    "category": "vehicles",
    "value": 1.1929,
    "demand": 1,
    "image": "/items/Adopt Me Snowboard 2.webp"
  },
  {
    "id": "pets-meerkat",
    "name": "Meerkat",
    "category": "pets",
    "value": 2.0404,
    "demand": 2,
    "image": "/items/Meerkat.webp"
  },
  {
    "id": "petwear-strawberry-plushie-rider",
    "name": "Strawberry Plushie Rider",
    "category": "petwear",
    "value": 25.7406,
    "demand": 2,
    "image": "/items/Strawberry Plushie Rider.webp"
  },
  {
    "id": "food-ice-tub",
    "name": "Ice Tub",
    "category": "food",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Ice Tub.webp"
  },
  {
    "id": "pets-cocoadile",
    "name": "Cocoadile",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Cocoadile.webp"
  },
  {
    "id": "pets-irish-water-spaniel",
    "name": "Irish Water Spaniel",
    "category": "pets",
    "value": 2.8252,
    "demand": 2,
    "image": "/items/Irish Water Spaniel.webp"
  },
  {
    "id": "pets-moose-calf",
    "name": "Moose Calf",
    "category": "pets",
    "value": 1.287,
    "demand": 2,
    "image": "/items/Moose Calf.webp"
  },
  {
    "id": "food-mud-ball",
    "name": "Mud Ball",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Mud Ball.webp"
  },
  {
    "id": "strollers-rainbow-stroller",
    "name": "Rainbow Stroller",
    "category": "strollers",
    "value": 0.5053,
    "demand": 2,
    "image": "/items/Rainbow Stroller.webp"
  },
  {
    "id": "pets-leopard-cat",
    "name": "Leopard Cat",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Leopard Cat.webp"
  },
  {
    "id": "petwear-marshmallow-friend",
    "name": "Marshmallow Friend",
    "category": "petwear",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Marshmallow Friend.webp"
  },
  {
    "id": "pets-water-moon-bear",
    "name": "Water Moon Bear",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Water Moon Bear.webp"
  },
  {
    "id": "gifts-premium-gorilla-box",
    "name": "Premium Gorilla Box",
    "category": "gifts",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Premium Gorilla Box.webp"
  },
  {
    "id": "vehicles-bathtub",
    "name": "Bathtub",
    "category": "vehicles",
    "value": 2.5113,
    "demand": 2,
    "image": "/items/Bathtub.webp"
  },
  {
    "id": "strollers-plane-stroller",
    "name": "Plane Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-cow",
    "name": "Cow",
    "category": "pets",
    "value": 11.9286,
    "demand": 3,
    "image": "/items/Cow.webp"
  },
  {
    "id": "pets-apple-owl",
    "name": "Apple Owl",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Apple Owl.webp"
  },
  {
    "id": "pets-bat",
    "name": "Bat",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Bat.webp"
  },
  {
    "id": "petwear-ponytail",
    "name": "Ponytail",
    "category": "petwear",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Ponytail.webp"
  },
  {
    "id": "food-flaming-zebra-bait",
    "name": "Flaming Zebra Bait",
    "category": "food",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Flaming Zebra Bait.webp"
  },
  {
    "id": "petwear-ice-cream-cone-hat",
    "name": "Ice Cream Cone Hat",
    "category": "petwear",
    "value": 2.9821,
    "demand": 3,
    "image": "/items/Ice Cream Cone Hat.webp"
  },
  {
    "id": "pets-dodo",
    "name": "Dodo",
    "category": "pets",
    "value": 0.6592,
    "demand": 2,
    "image": "/items/Dodo.webp"
  },
  {
    "id": "pets-armadillo",
    "name": "Armadillo",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Armadillo.webp"
  },
  {
    "id": "pets-tegu",
    "name": "Tegu",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Tegu.webp"
  },
  {
    "id": "pets-honey-badger",
    "name": "Honey Badger",
    "category": "pets",
    "value": 1.6323,
    "demand": 2,
    "image": "/items/Honey Badger.webp"
  },
  {
    "id": "pets-ice-cream-hermit-crab",
    "name": "Ice Cream Hermit Crab",
    "category": "pets",
    "value": 1.0359,
    "demand": 2,
    "image": "/items/Ice Cream Hermit Crab.webp"
  },
  {
    "id": "pets-red-panda-ducky",
    "name": "Red Panda Ducky",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Red Panda Ducky.webp"
  },
  {
    "id": "pets-goat",
    "name": "Goat",
    "category": "pets",
    "value": 2.5113,
    "demand": 2,
    "image": "/items/Goat.webp"
  },
  {
    "id": "petwear-festive-scarf",
    "name": "Festive Scarf",
    "category": "petwear",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Festive Scarf.webp"
  },
  {
    "id": "pets-2022-uplift-butterfly",
    "name": "2022 Uplift Butterfly",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/2022 Uplift Butterfly.webp"
  },
  {
    "id": "pets-frostbite-cub",
    "name": "Frostbite Cub",
    "category": "pets",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Frostbite Cub.webp"
  },
  {
    "id": "vehicles-adopt-me-girl-scooter",
    "name": "Adopt Me Girl Scooter",
    "category": "vehicles",
    "value": 0.6278,
    "demand": 1,
    "image": "/items/Adopt Me Girl Scooter.webp"
  },
  {
    "id": "stickers-strawberry-shortcake-bat-dragon-sticker",
    "name": "Strawberry Shortcake Bat Dragon Sticker",
    "category": "stickers",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Strawberry Shortcake Bat Dragon Sticker.webp"
  },
  {
    "id": "strollers-froggy-stroller",
    "name": "Froggy Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-flower-monocle",
    "name": "Flower Monocle",
    "category": "petwear",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Flower Monocle.webp"
  },
  {
    "id": "pets-swordfish",
    "name": "Swordfish",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Swordfish.webp"
  },
  {
    "id": "pets-ghost-wolf",
    "name": "Ghost Wolf",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Ghost Wolf.webp"
  },
  {
    "id": "pets-maine-coon",
    "name": "Maine Coon",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Maine Coon.webp"
  },
  {
    "id": "pets-kelp-raider",
    "name": "Kelp Raider",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Kelp Raider.webp"
  },
  {
    "id": "pets-blazing-lion",
    "name": "Blazing Lion",
    "category": "pets",
    "value": 43.9474,
    "demand": 3,
    "image": "/items/Blazing Lion.webp"
  },
  {
    "id": "food-golden-plantain",
    "name": "Golden Plantain",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Golden Plantain.webp"
  },
  {
    "id": "petwear-glormy-backpack",
    "name": "Glormy Backpack",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Glormy Backpack.webp"
  },
  {
    "id": "eggs-christmas-egg",
    "name": "Christmas Egg",
    "category": "eggs",
    "value": 7.4717,
    "demand": 2,
    "image": "/items/Christmas Egg.webp"
  },
  {
    "id": "pets-space-whale",
    "name": "Space Whale",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Space Whale.webp"
  },
  {
    "id": "pets-canadian-goose",
    "name": "Canadian Goose",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Canadian Goose.webp"
  },
  {
    "id": "pets-royal-palace-spaniel",
    "name": "Royal Palace Spaniel",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Royal Palace Spaniel.webp"
  },
  {
    "id": "petwear-bat-backpack",
    "name": "Bat Backpack",
    "category": "petwear",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Bat Backpack.webp"
  },
  {
    "id": "vehicles-wood-scooter",
    "name": "Wood Scooter",
    "category": "vehicles",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Wood Scooter.webp"
  },
  {
    "id": "eggs-garden-egg",
    "name": "Garden Egg",
    "category": "eggs",
    "value": 0.0797,
    "demand": 1,
    "image": "/items/Garden Egg.webp"
  },
  {
    "id": "vehicles-micro-car",
    "name": "Micro Car",
    "category": "vehicles",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Micro Car.webp"
  },
  {
    "id": "pets-influencer-gibbon",
    "name": "Influencer Gibbon",
    "category": "pets",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Influencer Gibbon.webp"
  },
  {
    "id": "gifts-admin-abuse-box",
    "name": "Admin Abuse Box",
    "category": "gifts",
    "value": 0.0188,
    "demand": 1,
    "image": "/items/Admin Abuse Box.webp"
  },
  {
    "id": "pets-naughty-mistletroll",
    "name": "Naughty Mistletroll",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Naughty Mistletroll.webp"
  },
  {
    "id": "pets-ringmaster-gibbon",
    "name": "Ringmaster Gibbon",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Ringmaster Gibbon.webp"
  },
  {
    "id": "stickers-winter-deer-family-sticker",
    "name": "Winter Deer Family Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Winter Deer Family Sticker.webp"
  },
  {
    "id": "pets-sheeeeep",
    "name": "Sheeeeep",
    "category": "pets",
    "value": 2.1974,
    "demand": 2,
    "image": "/items/Sheeeeep.webp"
  },
  {
    "id": "pets-show-pony",
    "name": "Show Pony",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Show Pony.webp"
  },
  {
    "id": "strollers-crate-stroller",
    "name": "Crate Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-halo",
    "name": "Halo",
    "category": "petwear",
    "value": 12.5564,
    "demand": 3,
    "image": "/items/Halo.webp"
  },
  {
    "id": "petwear-strawberry-hat",
    "name": "Strawberry Hat",
    "category": "petwear",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Strawberry Hat.webp"
  },
  {
    "id": "pets-indian-leopard",
    "name": "Indian Leopard",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Indian Leopard.webp"
  },
  {
    "id": "pets-giraffe",
    "name": "Giraffe",
    "category": "pets",
    "value": 148.7932,
    "demand": 3,
    "image": "/items/Giraffe.webp"
  },
  {
    "id": "pets-giant-blue-scarab",
    "name": "Giant Blue Scarab",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Giant Blue Scarab.webp"
  },
  {
    "id": "stickers-cow-loves-this-sticker",
    "name": "Cow Loves This Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Cow Loves This Sticker.webp"
  },
  {
    "id": "vehicles-giant-snowball",
    "name": "Giant Snowball",
    "category": "vehicles",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Giant Snowball.webp"
  },
  {
    "id": "pets-kelp-hunter",
    "name": "Kelp Hunter",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Kelp Hunter.webp"
  },
  {
    "id": "pets-tasmanian-devil",
    "name": "Tasmanian Devil",
    "category": "pets",
    "value": 0.4238,
    "demand": 2,
    "image": "/items/Tasmanian Devil.webp"
  },
  {
    "id": "pets-red-cardinal",
    "name": "Red Cardinal",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Red Cardinal.webp"
  },
  {
    "id": "pets-silverback-gorilla",
    "name": "Silverback Gorilla",
    "category": "pets",
    "value": 1.444,
    "demand": 2,
    "image": "/items/Silverback Gorilla.webp"
  },
  {
    "id": "petwear-knitted-pumpkin-hat",
    "name": "Knitted Pumpkin Hat",
    "category": "petwear",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Knitted Pumpkin Hat.webp"
  },
  {
    "id": "vehicles-paint-roller-truck",
    "name": "Paint Roller Truck",
    "category": "vehicles",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Paint Roller Truck.webp"
  },
  {
    "id": "pets-arctic-dusk-dragon",
    "name": "Arctic Dusk Dragon",
    "category": "pets",
    "value": 1.2556,
    "demand": 3,
    "image": "/items/Arctic Dusk Dragon.webp"
  },
  {
    "id": "petwear-rain-cloud-hat",
    "name": "Rain Cloud Hat",
    "category": "petwear",
    "value": 5.6504,
    "demand": 3,
    "image": "/items/Rain Cloud Hat.webp"
  },
  {
    "id": "vehicles-donut-cycle",
    "name": "Donut Cycle",
    "category": "vehicles",
    "value": 0.565,
    "demand": 1,
    "image": "/items/Donut Cycle.webp"
  },
  {
    "id": "eggs-pet-egg",
    "name": "Pet Egg",
    "category": "eggs",
    "value": 0.0266,
    "demand": 1,
    "image": "/items/Pet Egg.webp"
  },
  {
    "id": "pets-nutcracker-squirrel",
    "name": "Nutcracker Squirrel",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Nutcracker Squirrel.webp"
  },
  {
    "id": "pets-ratatoskr",
    "name": "Ratatoskr",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Ratatoskr.webp"
  },
  {
    "id": "pets-arctic-tern",
    "name": "Arctic Tern",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Arctic Tern.webp"
  },
  {
    "id": "vehicles-dragonster",
    "name": "Dragonster",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Dragonster.webp"
  },
  {
    "id": "pets-pterodactyl",
    "name": "Pterodactyl",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Pterodactyl.webp"
  },
  {
    "id": "eggs-dylan",
    "name": "Dylan",
    "category": "eggs",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Dylan.webp"
  },
  {
    "id": "food-shiver-cone-bait",
    "name": "Shiver Cone Bait",
    "category": "food",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Shiver Cone Bait.webp"
  },
  {
    "id": "pets-mistletroll",
    "name": "Mistletroll",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Mistletroll.webp"
  },
  {
    "id": "stickers-squished-red-pandorama-sticker",
    "name": "Squished Red Pandorama Sticker",
    "category": "stickers",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Squished Red Pandorama Sticker.webp"
  },
  {
    "id": "pets-classic-teapot",
    "name": "Classic Teapot",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Classic Teapot.webp"
  },
  {
    "id": "strollers-tulip-stroller",
    "name": "Tulip Stroller",
    "category": "strollers",
    "value": 0.05,
    "demand": 3,
    "image": ""
  },
  {
    "id": "food-christmas-pudding-pup-bait",
    "name": "Christmas Pudding Pup Bait",
    "category": "food",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Christmas Pudding Pup Bait.webp"
  },
  {
    "id": "pets-roadrunner",
    "name": "Roadrunner",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Roadrunner.webp"
  },
  {
    "id": "petwear-volcano-hat",
    "name": "Volcano Hat",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Volcano Hat.webp"
  },
  {
    "id": "vehicles-cupcake-scooter",
    "name": "Cupcake Scooter",
    "category": "vehicles",
    "value": 0.6278,
    "demand": 1,
    "image": "/items/Cupcake Scooter.webp"
  },
  {
    "id": "pets-queen-bee",
    "name": "Queen Bee",
    "category": "pets",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Queen Bee.webp"
  },
  {
    "id": "petwear-spring-bunny-hood",
    "name": "Spring Bunny Hood",
    "category": "petwear",
    "value": 2.1974,
    "demand": 3,
    "image": "/items/Spring Bunny Hood.webp"
  },
  {
    "id": "pets-rock-pigeon",
    "name": "Rock Pigeon",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Rock Pigeon.webp"
  },
  {
    "id": "vehicles-wood-skateboard",
    "name": "Wood Skateboard",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Wood Skateboard.webp"
  },
  {
    "id": "vehicles-imagination-box",
    "name": "Imagination Box",
    "category": "vehicles",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Imagination Box.webp"
  },
  {
    "id": "pets-halloween-evil-dachshund",
    "name": "Halloween Evil Dachshund",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Halloween Evil Dachshund.webp"
  },
  {
    "id": "pets-dolphin",
    "name": "Dolphin",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Dolphin.webp"
  },
  {
    "id": "pets-owl",
    "name": "Owl",
    "category": "pets",
    "value": 79.7331,
    "demand": 3,
    "image": "/items/Owl.webp"
  },
  {
    "id": "pets-walrus",
    "name": "Walrus",
    "category": "pets",
    "value": 0.2668,
    "demand": 1,
    "image": "/items/Walrus.webp"
  },
  {
    "id": "strollers-claw-machine-stroller",
    "name": "Claw Machine Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-horse-and-carriage",
    "name": "Horse And Carriage",
    "category": "vehicles",
    "value": 2.1974,
    "demand": 2,
    "image": "/items/Horse And Carriage.webp"
  },
  {
    "id": "eggs-admin-abuse-egg",
    "name": "Admin Abuse Egg",
    "category": "eggs",
    "value": 0.0335,
    "demand": 1,
    "image": "/items/Admin Abuse Egg.webp"
  },
  {
    "id": "pets-astronaut-gorilla",
    "name": "Astronaut Gorilla",
    "category": "pets",
    "value": 0.6592,
    "demand": 2,
    "image": "/items/Astronaut Gorilla.webp"
  },
  {
    "id": "pets-toucan",
    "name": "Toucan",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Toucan.webp"
  },
  {
    "id": "pets-ranger-beaver",
    "name": "Ranger Beaver",
    "category": "pets",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Ranger Beaver.webp"
  },
  {
    "id": "pets-kitsune",
    "name": "Kitsune",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Kitsune.webp"
  },
  {
    "id": "pets-ornate-horned-frog",
    "name": "Ornate Horned Frog",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Ornate Horned Frog.webp"
  },
  {
    "id": "pets-primal-kaijunior",
    "name": "Primal Kaijunior",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Primal Kaijunior.webp"
  },
  {
    "id": "stickers-rat-sticker",
    "name": "Rat Sticker",
    "category": "stickers",
    "value": 0.0502,
    "demand": 1,
    "image": "/items/Rat Sticker.webp"
  },
  {
    "id": "pets-sabertooth",
    "name": "Sabertooth",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Sabertooth.webp"
  },
  {
    "id": "pets-mini-pig",
    "name": "Mini Pig",
    "category": "pets",
    "value": 14.1259,
    "demand": 3,
    "image": "/items/Mini Pig.webp"
  },
  {
    "id": "pets-rabbit",
    "name": "Rabbit",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Rabbit.webp"
  },
  {
    "id": "pets-seafoam-butterfly",
    "name": "Seafoam Butterfly",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Seafoam Butterfly.webp"
  },
  {
    "id": "eggs-retired-egg",
    "name": "Retired Egg",
    "category": "eggs",
    "value": 0.028,
    "demand": 1,
    "image": "/items/Retired Egg.webp"
  },
  {
    "id": "pets-african-wild-dog",
    "name": "African Wild Dog",
    "category": "pets",
    "value": 50.8534,
    "demand": 3,
    "image": "/items/African Wild Dog.webp"
  },
  {
    "id": "pets-swan",
    "name": "Swan",
    "category": "pets",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Swan.webp"
  },
  {
    "id": "pets-platypus",
    "name": "Platypus",
    "category": "pets",
    "value": 1.444,
    "demand": 2,
    "image": "/items/Platypus.webp"
  },
  {
    "id": "potions-future-sight-potion",
    "name": "Future Sight Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-2022-birthday-cupcake-shoes",
    "name": "2022 Birthday Cupcake Shoes",
    "category": "petwear",
    "value": 6.5921,
    "demand": 3,
    "image": "/items/2022 Birthday Cupcake Shoes.webp"
  },
  {
    "id": "pets-golden-rat",
    "name": "Golden Rat",
    "category": "pets",
    "value": 0.6592,
    "demand": 2,
    "image": "/items/Golden Rat.webp"
  },
  {
    "id": "vehicles-ice-queen-sleigh",
    "name": "Ice Queen Sleigh",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Ice Queen Sleigh.webp"
  },
  {
    "id": "pets-possum",
    "name": "Possum",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Possum.webp"
  },
  {
    "id": "petwear-fishbowl-hat",
    "name": "Fishbowl Hat",
    "category": "petwear",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Fishbowl Hat.webp"
  },
  {
    "id": "pets-hare",
    "name": "Hare",
    "category": "pets",
    "value": 1.3498,
    "demand": 2,
    "image": "/items/Hare.webp"
  },
  {
    "id": "stickers-jekyll-hydra-animated-sticker",
    "name": "Jekyll Hydra Animated Sticker",
    "category": "stickers",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Jekyll Hydra Animated Sticker.webp"
  },
  {
    "id": "strollers-high-heel-stroller",
    "name": "High Heel Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-puddleducks-hood",
    "name": "Puddleducks Hood",
    "category": "petwear",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Puddleducks Hood.webp"
  },
  {
    "id": "pets-cozy-mistletroll",
    "name": "Cozy Mistletroll",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Cozy Mistletroll.webp"
  },
  {
    "id": "gifts-premium-capuchin-box",
    "name": "Premium Capuchin Box",
    "category": "gifts",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Premium Capuchin Box.webp"
  },
  {
    "id": "pets-ghostly-cat",
    "name": "Ghostly Cat",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Ghostly Cat.webp"
  },
  {
    "id": "toys-chick-plush",
    "name": "Chick Plush",
    "category": "toys",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Chick Plush.webp"
  },
  {
    "id": "pets-royal-capuchin-monkey",
    "name": "Royal Capuchin Monkey",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Royal Capuchin Monkey.webp"
  },
  {
    "id": "pets-nessie",
    "name": "Nessie",
    "category": "pets",
    "value": 2.0404,
    "demand": 2,
    "image": "/items/Nessie.webp"
  },
  {
    "id": "pets-evil-unicorn",
    "name": "Evil Unicorn",
    "category": "pets",
    "value": 36.0996,
    "demand": 3,
    "image": "/items/Evil Unicorn.webp"
  },
  {
    "id": "pets-scarecrow",
    "name": "Scarecrow",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Scarecrow.webp"
  },
  {
    "id": "pets-leopard-shark",
    "name": "Leopard Shark",
    "category": "pets",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Leopard Shark.webp"
  },
  {
    "id": "pets-sunglider",
    "name": "Sunglider",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Sunglider.webp"
  },
  {
    "id": "strollers-airplane-stroller",
    "name": "Airplane Stroller",
    "category": "strollers",
    "value": 0.3,
    "demand": 3,
    "image": ""
  },
  {
    "id": "strollers-cauldron-stroller",
    "name": "Cauldron Stroller",
    "category": "strollers",
    "value": 0.3023,
    "demand": 1,
    "image": "/items/Cauldron Stroller.webp"
  },
  {
    "id": "food-apet-potion",
    "name": "Ride-A-Pet Potion",
    "category": "food",
    "value": 0.4081,
    "demand": 3,
    "image": "/items/Ride-A-Pet Potion.webp"
  },
  {
    "id": "pets-icy-porcupine",
    "name": "Icy Porcupine",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Icy Porcupine.webp"
  },
  {
    "id": "vehicles-ghost-vehicle",
    "name": "Ghost Vehicle",
    "category": "vehicles",
    "value": 11.3007,
    "demand": 2,
    "image": "/items/Ghost Vehicle.webp"
  },
  {
    "id": "pets-turtle",
    "name": "Turtle",
    "category": "pets",
    "value": 8.3186,
    "demand": 3,
    "image": "/items/Turtle.webp"
  },
  {
    "id": "pets-coyote",
    "name": "Coyote",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Coyote.webp"
  },
  {
    "id": "petwear-santa-hat",
    "name": "Santa Hat",
    "category": "petwear",
    "value": 1.0987,
    "demand": 2,
    "image": "/items/Santa Hat.webp"
  },
  {
    "id": "pets-mecha-r4bbit",
    "name": "Mecha R4BBIT",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Mecha R4BBIT.webp"
  },
  {
    "id": "petwear-sushi-skateboard",
    "name": "Sushi Skateboard",
    "category": "petwear",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Sushi Skateboard.webp"
  },
  {
    "id": "strollers-trike-stroller",
    "name": "Trike Stroller",
    "category": "strollers",
    "value": 0.1598,
    "demand": 1,
    "image": "/items/Trike Stroller.webp"
  },
  {
    "id": "vehicles-monocycle",
    "name": "Monocycle",
    "category": "vehicles",
    "value": 0.6278,
    "demand": 1,
    "image": "/items/Monocycle.webp"
  },
  {
    "id": "petwear-jetpack",
    "name": "Jetpack",
    "category": "petwear",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Jetpack.webp"
  },
  {
    "id": "pets-kookaburra",
    "name": "Kookaburra",
    "category": "pets",
    "value": 0.9731,
    "demand": 2,
    "image": "/items/Kookaburra.webp"
  },
  {
    "id": "petwear-ember-wings",
    "name": "Ember Wings",
    "category": "petwear",
    "value": 1.8835,
    "demand": 2,
    "image": "/items/Ember Wings.webp"
  },
  {
    "id": "petwear-star-sunglasses",
    "name": "Star Sunglasses",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Star Sunglasses.webp"
  },
  {
    "id": "pets-robot",
    "name": "Robot",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Robot.webp"
  },
  {
    "id": "pets-mirai-moth",
    "name": "Mirai Moth",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Mirai Moth.webp"
  },
  {
    "id": "pets-green-butterfly",
    "name": "Green Butterfly",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Green Butterfly.webp"
  },
  {
    "id": "pets-orange-betta-fish",
    "name": "Orange Betta Fish",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Orange Betta Fish.webp"
  },
  {
    "id": "vehicles-princess-carriage",
    "name": "Princess Carriage",
    "category": "vehicles",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Princess Carriage.webp"
  },
  {
    "id": "petwear-halloween-evil-barrel-backpack",
    "name": "Halloween Evil Barrel Backpack",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Halloween Evil Barrel Backpack.webp"
  },
  {
    "id": "vehicles-hot-tub-muscle-car",
    "name": "Hot Tub Muscle Car",
    "category": "vehicles",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Hot Tub Muscle Car.webp"
  },
  {
    "id": "pets-bloodhound",
    "name": "Bloodhound",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Bloodhound.webp"
  },
  {
    "id": "pets-albino-monkey",
    "name": "Albino Monkey",
    "category": "pets",
    "value": 5.4934,
    "demand": 3,
    "image": "/items/Albino Monkey.webp"
  },
  {
    "id": "strollers-lunar-stroller",
    "name": "Lunar Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-gingerbread-sleigh",
    "name": "Gingerbread Sleigh",
    "category": "vehicles",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Gingerbread Sleigh.webp"
  },
  {
    "id": "pets-sugar-axolotl",
    "name": "Sugar Axolotl",
    "category": "pets",
    "value": 2.8252,
    "demand": 2,
    "image": "/items/Sugar Axolotl.webp"
  },
  {
    "id": "pets-grinmoire",
    "name": "Grinmoire",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Grinmoire.webp"
  },
  {
    "id": "petwear-dumpling-friend-hat",
    "name": "Dumpling Friend Hat",
    "category": "petwear",
    "value": 0.3767,
    "demand": 2,
    "image": "/items/Dumpling Friend Hat.webp"
  },
  {
    "id": "vehicles-ice-snowboard",
    "name": "Ice Snowboard",
    "category": "vehicles",
    "value": 3.1391,
    "demand": 1,
    "image": "/items/Ice Snowboard.webp"
  },
  {
    "id": "pets-cabbit",
    "name": "Cabbit",
    "category": "pets",
    "value": 8.7895,
    "demand": 3,
    "image": "/items/Cabbit.webp"
  },
  {
    "id": "pets-patchy-bear",
    "name": "Patchy Bear",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Patchy Bear.webp"
  },
  {
    "id": "eggs-royal-egg",
    "name": "Royal Egg",
    "category": "eggs",
    "value": 0.0307,
    "demand": 1,
    "image": "/items/Royal Egg.webp"
  },
  {
    "id": "strollers-banana-stroller",
    "name": "Banana Stroller",
    "category": "strollers",
    "value": 0.0968,
    "demand": 1,
    "image": "/items/Banana Stroller.webp"
  },
  {
    "id": "strollers-snow-mobile-stroller",
    "name": "Snow Mobile Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-giraffe-hat",
    "name": "Giraffe Hat",
    "category": "petwear",
    "value": 12.5564,
    "demand": 2,
    "image": "/items/Giraffe Hat.webp"
  },
  {
    "id": "gifts-2d-box",
    "name": "2D Box",
    "category": "gifts",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/2D Box.webp"
  },
  {
    "id": "eggs-fossil-egg",
    "name": "Fossil Egg",
    "category": "eggs",
    "value": 0.4073,
    "demand": 2,
    "image": "/items/Fossil Egg.webp"
  },
  {
    "id": "pets-capuchin-monkey",
    "name": "Capuchin Monkey",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Capuchin Monkey.webp"
  },
  {
    "id": "toys-teddy-bear",
    "name": "Teddy Bear",
    "category": "toys",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Teddy Bear.webp"
  },
  {
    "id": "pets-frost-dragon",
    "name": "Frost Dragon",
    "category": "pets",
    "value": 100.4511,
    "demand": 3,
    "image": "/items/Frost Dragon.webp"
  },
  {
    "id": "pets-naga-dragon",
    "name": "Naga Dragon",
    "category": "pets",
    "value": 0.565,
    "demand": 1,
    "image": "/items/Naga Dragon.webp"
  },
  {
    "id": "toys-electric-tide-paint",
    "name": "Electric Tide Mega Neon Paint",
    "category": "toys",
    "value": 0.2511,
    "demand": 3,
    "image": "/items/Electric Tide Mega Neon Paint.webp"
  },
  {
    "id": "pets-toasty-red-panda",
    "name": "Toasty Red Panda",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Toasty Red Panda.webp"
  },
  {
    "id": "vehicles-ribcage-carriage",
    "name": "Ribcage Carriage",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Ribcage Carriage.webp"
  },
  {
    "id": "pets-frankenfeline",
    "name": "Frankenfeline",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Frankenfeline.webp"
  },
  {
    "id": "pets-arctic-reindeer",
    "name": "Arctic Reindeer",
    "category": "pets",
    "value": 15.6955,
    "demand": 3,
    "image": "/items/Arctic Reindeer.webp"
  },
  {
    "id": "pets-buffalo",
    "name": "Buffalo",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Buffalo.webp"
  },
  {
    "id": "pets-ruddy-duck",
    "name": "Ruddy Duck",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Ruddy Duck.webp"
  },
  {
    "id": "petwear-pink-cat-ear-headphones",
    "name": "Pink Cat Ear Headphones",
    "category": "petwear",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Pink Cat Ear Headphones.webp"
  },
  {
    "id": "toys-amethyst-skies-paint",
    "name": "Amethyst Skies Mega Neon Paint",
    "category": "toys",
    "value": 0.2511,
    "demand": 3,
    "image": "/items/Amethyst Skies Mega Neon Paint.webp"
  },
  {
    "id": "vehicles-latte-motorcycle",
    "name": "Latte Motorcycle",
    "category": "vehicles",
    "value": 0.0942,
    "demand": 1,
    "image": "/items/Latte Motorcycle.webp"
  },
  {
    "id": "pets-singularity-pisces",
    "name": "Singularity Pisces",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Singularity Pisces.webp"
  },
  {
    "id": "pets-fossa",
    "name": "Fossa",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Fossa.webp"
  },
  {
    "id": "petwear-propeller-hat",
    "name": "Propeller Hat",
    "category": "petwear",
    "value": 1.0987,
    "demand": 2,
    "image": "/items/Propeller Hat.webp"
  },
  {
    "id": "food-chocolate-drop",
    "name": "Chocolate Drop",
    "category": "food",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Chocolate Drop.webp"
  },
  {
    "id": "gifts-golden-gift",
    "name": "Golden Gift",
    "category": "gifts",
    "value": 7.8477,
    "demand": 2,
    "image": "/items/Golden Gift.webp"
  },
  {
    "id": "strollers-donut-stroller",
    "name": "Donut Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-therapy-dog",
    "name": "Therapy Dog",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Therapy Dog.webp"
  },
  {
    "id": "vehicles-royal-carriage",
    "name": "Royal Carriage",
    "category": "vehicles",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Royal Carriage.webp"
  },
  {
    "id": "strollers-princess-stroller",
    "name": "Princess Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-pink-heart-glasses",
    "name": "Pink Heart Glasses",
    "category": "petwear",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Pink Heart Glasses.webp"
  },
  {
    "id": "pets-rose-dragon",
    "name": "Rose Dragon",
    "category": "pets",
    "value": 0.9731,
    "demand": 2,
    "image": "/items/Rose Dragon.webp"
  },
  {
    "id": "eggs-river",
    "name": "River",
    "category": "eggs",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/River.webp"
  },
  {
    "id": "strollers-ice-cream-stroller",
    "name": "Ice Cream Stroller",
    "category": "strollers",
    "value": 0.3435,
    "demand": 1,
    "image": "/items/Ice Cream Stroller.webp"
  },
  {
    "id": "petwear-chocolate-chip-bat-dragon-backpack",
    "name": "Chocolate Chip Bat Dragon Backpack",
    "category": "petwear",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Chocolate Chip Bat Dragon Backpack.webp"
  },
  {
    "id": "strollers-double-stroller",
    "name": "Double Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-black-kite",
    "name": "Black Kite",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Black Kite.webp"
  },
  {
    "id": "petwear-lunar-new-year-shoes",
    "name": "Lunar New Year Shoes",
    "category": "petwear",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Lunar New Year Shoes.webp"
  },
  {
    "id": "pets-dragonfruit-fox",
    "name": "Dragonfruit Fox",
    "category": "pets",
    "value": 1.1929,
    "demand": 2,
    "image": "/items/Dragonfruit Fox.webp"
  },
  {
    "id": "pets-moon-rabbit",
    "name": "Moon Rabbit",
    "category": "pets",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Moon Rabbit.webp"
  },
  {
    "id": "petwear-blue-cat-ear-headphones",
    "name": "Blue Cat Ear Headphones",
    "category": "petwear",
    "value": 0.3453,
    "demand": 2,
    "image": "/items/Blue Cat Ear Headphones.webp"
  },
  {
    "id": "pets-capricorn",
    "name": "Capricorn",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Capricorn.webp"
  },
  {
    "id": "petwear-bready-necklace",
    "name": "Bready Necklace",
    "category": "petwear",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Bready Necklace.webp"
  },
  {
    "id": "petwear-lightbulb-hat",
    "name": "Lightbulb Hat",
    "category": "petwear",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Lightbulb Hat.webp"
  },
  {
    "id": "pets-officer-gibbon",
    "name": "Officer Gibbon",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Officer Gibbon.webp"
  },
  {
    "id": "stickers-tree-decorating-animated-sticker",
    "name": "Tree Decorating Animated Sticker",
    "category": "stickers",
    "value": 0.3767,
    "demand": 2,
    "image": "/items/Tree Decorating Animated Sticker.webp"
  },
  {
    "id": "pets-nebula-snake",
    "name": "Nebula Snake",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Nebula Snake.webp"
  },
  {
    "id": "pets-sea-skeleton-panda",
    "name": "Sea Skeleton Panda",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Sea Skeleton Panda.webp"
  },
  {
    "id": "pets-evil-chickatrice",
    "name": "Evil Chickatrice",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Evil Chickatrice.webp"
  },
  {
    "id": "pets-moonlight-moth",
    "name": "Moonlight Moth",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Moonlight Moth.webp"
  },
  {
    "id": "pets-dimension-drifter",
    "name": "Dimension Drifter",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Dimension Drifter.webp"
  },
  {
    "id": "pets-slug",
    "name": "Slug",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Slug.webp"
  },
  {
    "id": "vehicles-green-snowboard",
    "name": "Green Neon Snowboard",
    "category": "vehicles",
    "value": 2.0404,
    "demand": 2,
    "image": "/items/Green Neon Snowboard.webp"
  },
  {
    "id": "pets-brachiosaurus",
    "name": "Brachiosaurus",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Brachiosaurus.webp"
  },
  {
    "id": "pets-kirin",
    "name": "Kirin",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Kirin.webp"
  },
  {
    "id": "pets-zombie-chick",
    "name": "Zombie Chick",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Zombie Chick.webp"
  },
  {
    "id": "toys-frosty-glow-paint",
    "name": "Frosty Glow Mega Neon Paint",
    "category": "toys",
    "value": 0.2825,
    "demand": 3,
    "image": "/items/Frosty Glow Mega Neon Paint.webp"
  },
  {
    "id": "pets-quokka",
    "name": "Quokka",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Quokka.webp"
  },
  {
    "id": "pets-bunny",
    "name": "Bunny",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Bunny.webp"
  },
  {
    "id": "toys-cotton-candy-stand",
    "name": "Cotton Candy Stand",
    "category": "toys",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Cotton Candy Stand.webp"
  },
  {
    "id": "stickers-phoenix-sticker",
    "name": "Phoenix Sticker",
    "category": "stickers",
    "value": 0.157,
    "demand": 2,
    "image": "/items/Phoenix Sticker.webp"
  },
  {
    "id": "potions-polymorph-potion",
    "name": "Polymorph Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-blue-scooter",
    "name": "Blue Scooter",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Blue Scooter.webp"
  },
  {
    "id": "pets-pirate-ghost-capuchin-monkey",
    "name": "Pirate Ghost Capuchin Monkey",
    "category": "pets",
    "value": 3.9239,
    "demand": 2,
    "image": "/items/Pirate Ghost Capuchin Monkey.webp"
  },
  {
    "id": "pets-wyvern",
    "name": "Wyvern",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Wyvern.webp"
  },
  {
    "id": "petwear-venus-flytrap-hat",
    "name": "Venus Flytrap Hat",
    "category": "petwear",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Venus Flytrap Hat.webp"
  },
  {
    "id": "petwear-watermelon-backpack",
    "name": "Watermelon Backpack",
    "category": "petwear",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Watermelon Backpack.webp"
  },
  {
    "id": "toys-bunny-plush",
    "name": "Bunny Plush",
    "category": "toys",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Bunny Plush.webp"
  },
  {
    "id": "pets-winter-buck",
    "name": "Winter Buck",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Winter Buck.webp"
  },
  {
    "id": "petwear-candy-cane",
    "name": "Candy Cane (Pet Wear)",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Candy Cane (Pet Wear).webp"
  },
  {
    "id": "pets-silly-duck",
    "name": "Silly Duck",
    "category": "pets",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Silly Duck.webp"
  },
  {
    "id": "pets-greenchested-pheasant",
    "name": "Green-Chested Pheasant",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Green-Chested Pheasant.webp"
  },
  {
    "id": "food-taco",
    "name": "Taco",
    "category": "food",
    "value": 0.0942,
    "demand": 1,
    "image": "/items/Taco.webp"
  },
  {
    "id": "vehicles-ketchup-and-mustard-jetpack",
    "name": "Ketchup and Mustard Jetpack",
    "category": "vehicles",
    "value": 0.7534,
    "demand": 2,
    "image": "/items/Ketchup and Mustard Jetpack.webp"
  },
  {
    "id": "toys-reindeer-plush",
    "name": "Reindeer Plush",
    "category": "toys",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Reindeer Plush.webp"
  },
  {
    "id": "petwear-waterfall-hat",
    "name": "Waterfall Hat",
    "category": "petwear",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Waterfall Hat.webp"
  },
  {
    "id": "petwear-top-hat",
    "name": "Top Hat",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Top Hat.webp"
  },
  {
    "id": "vehicles-flower-wagon",
    "name": "Flower Wagon",
    "category": "vehicles",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Flower Wagon.webp"
  },
  {
    "id": "vehicles-unicorn-zombie-ponycycle",
    "name": "Unicorn Zombie Ponycycle",
    "category": "vehicles",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Unicorn Zombie Ponycycle.webp"
  },
  {
    "id": "pets-puffin",
    "name": "Puffin",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Puffin.webp"
  },
  {
    "id": "petwear-ice-cream-heels",
    "name": "Ice Cream Heels",
    "category": "petwear",
    "value": 0.3767,
    "demand": 2,
    "image": "/items/Ice Cream Heels.webp"
  },
  {
    "id": "pets-metal-ox",
    "name": "Metal Ox",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Metal Ox.webp"
  },
  {
    "id": "strollers-red-wagon-stroller",
    "name": "Red Wagon Stroller",
    "category": "strollers",
    "value": 0.1049,
    "demand": 1,
    "image": "/items/Red Wagon Stroller.webp"
  },
  {
    "id": "pets-manta-ray",
    "name": "Manta Ray",
    "category": "pets",
    "value": 0.2982,
    "demand": 1,
    "image": "/items/Manta Ray.webp"
  },
  {
    "id": "pets-unicorn-ducky",
    "name": "Unicorn Ducky",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Unicorn Ducky.webp"
  },
  {
    "id": "pets-robo-dog",
    "name": "Robo Dog",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Robo Dog.webp"
  },
  {
    "id": "petwear-butter-knife",
    "name": "Butter Knife",
    "category": "petwear",
    "value": 0.3767,
    "demand": 2,
    "image": "/items/Butter Knife.webp"
  },
  {
    "id": "pets-orchid-butterfly",
    "name": "Orchid Butterfly",
    "category": "pets",
    "value": 35.1579,
    "demand": 2,
    "image": "/items/Orchid Butterfly.webp"
  },
  {
    "id": "toys-pumpkin-rattle",
    "name": "Pumpkin Rattle",
    "category": "toys",
    "value": 0.6278,
    "demand": 1,
    "image": "/items/Pumpkin Rattle.webp"
  },
  {
    "id": "eggs-southeast-asia-egg",
    "name": "Southeast Asia Egg",
    "category": "eggs",
    "value": 0.3099,
    "demand": 2,
    "image": "/items/Southeast Asia Egg.webp"
  },
  {
    "id": "petwear-strawberry-cupcake-shoes",
    "name": "Strawberry Cupcake Shoes",
    "category": "petwear",
    "value": 25.7406,
    "demand": 2,
    "image": "/items/Strawberry Cupcake Shoes.webp"
  },
  {
    "id": "pets-black-marlin",
    "name": "Black Marlin",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Black Marlin.webp"
  },
  {
    "id": "petwear-music-box-hat",
    "name": "Music Box Hat",
    "category": "petwear",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Music Box Hat.webp"
  },
  {
    "id": "strollers-hot-cocoa-stroller",
    "name": "Hot Cocoa Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-temple-friend",
    "name": "Temple Friend",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Temple Friend.webp"
  },
  {
    "id": "pets-rhino-beetle",
    "name": "Rhino Beetle",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Rhino Beetle.webp"
  },
  {
    "id": "pets-evil-rock",
    "name": "Evil Rock",
    "category": "pets",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Evil Rock.webp"
  },
  {
    "id": "vehicles-suv",
    "name": "SUV",
    "category": "vehicles",
    "value": 0.157,
    "demand": 1,
    "image": "/items/SUV.webp"
  },
  {
    "id": "toys-llama-plush",
    "name": "Llama Plush",
    "category": "toys",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Llama Plush.webp"
  },
  {
    "id": "food-golden-corn",
    "name": "Golden Corn",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Golden Corn.webp"
  },
  {
    "id": "pets-woolly-mammoth",
    "name": "Woolly Mammoth",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Woolly Mammoth.webp"
  },
  {
    "id": "pets-slimingo",
    "name": "Slimingo",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Slimingo.webp"
  },
  {
    "id": "pets-irish-setter",
    "name": "Irish Setter",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Irish Setter.webp"
  },
  {
    "id": "pets-oakee",
    "name": "Oakee",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Oakee.webp"
  },
  {
    "id": "toys-cookie-dough-plush",
    "name": "Cookie Dough Plush",
    "category": "toys",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Cookie Dough Plush.webp"
  },
  {
    "id": "strollers-triple-stroller",
    "name": "Triple Stroller",
    "category": "strollers",
    "value": 0.0774,
    "demand": 1,
    "image": "/items/Triple Stroller.webp"
  },
  {
    "id": "petwear-brain-jar",
    "name": "Brain Jar",
    "category": "petwear",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Brain Jar.webp"
  },
  {
    "id": "petwear-city-hat",
    "name": "City Hat",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/City Hat.webp"
  },
  {
    "id": "eggs-jungle-egg",
    "name": "Jungle Egg",
    "category": "eggs",
    "value": 26.764,
    "demand": 2,
    "image": "/items/Jungle Egg.webp"
  },
  {
    "id": "petwear-headband",
    "name": "Headband",
    "category": "petwear",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Headband.webp"
  },
  {
    "id": "food-leaf",
    "name": "Leaf",
    "category": "food",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Leaf.webp"
  },
  {
    "id": "pets-cassowary",
    "name": "Cassowary",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Cassowary.webp"
  },
  {
    "id": "vehicles-rgb-ufo",
    "name": "RGB UFO",
    "category": "vehicles",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/RGB UFO.webp"
  },
  {
    "id": "pets-amami-rabbit",
    "name": "Amami Rabbit",
    "category": "pets",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Amami Rabbit.webp"
  },
  {
    "id": "vehicles-ice-cream-truck",
    "name": "Ice Cream Truck",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Ice Cream Truck.webp"
  },
  {
    "id": "pets-hedgehog",
    "name": "Hedgehog",
    "category": "pets",
    "value": 21.9737,
    "demand": 3,
    "image": "/items/Hedgehog.webp"
  },
  {
    "id": "pets-wild-boar",
    "name": "Wild Boar",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Wild Boar.webp"
  },
  {
    "id": "toys-ice-saber",
    "name": "Ice Saber",
    "category": "toys",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Ice Saber.webp"
  },
  {
    "id": "strollers-rgb-stroller",
    "name": "RGB Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-diamond-unicorn",
    "name": "Diamond Unicorn",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Diamond Unicorn.webp"
  },
  {
    "id": "pets-lava-wolf",
    "name": "Lava Wolf",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/Lava Wolf.webp"
  },
  {
    "id": "eggs-crystal-egg",
    "name": "Crystal Egg",
    "category": "eggs",
    "value": 0.0321,
    "demand": 2,
    "image": "/items/Crystal Egg.webp"
  },
  {
    "id": "pets-munchkin-cat",
    "name": "Munchkin Cat",
    "category": "pets",
    "value": 3.2961,
    "demand": 3,
    "image": "/items/Munchkin Cat.webp"
  },
  {
    "id": "food-goldenrod-flower",
    "name": "Goldenrod Flower",
    "category": "food",
    "value": 3.1391,
    "demand": 2,
    "image": "/items/Goldenrod Flower.webp"
  },
  {
    "id": "pets-chickatrice",
    "name": "Chickatrice",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Chickatrice.webp"
  },
  {
    "id": "pets-water-opossum",
    "name": "Water Opossum",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Water Opossum.webp"
  },
  {
    "id": "vehicles-black-cab",
    "name": "Black Cab",
    "category": "vehicles",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Black Cab.webp"
  },
  {
    "id": "petwear-witch-hat",
    "name": "Witch Hat",
    "category": "petwear",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Witch Hat.webp"
  },
  {
    "id": "petwear-rainbow-maker",
    "name": "Rainbow Maker",
    "category": "petwear",
    "value": 21.6598,
    "demand": 3,
    "image": "/items/Rainbow Maker.webp"
  },
  {
    "id": "vehicles-snow-plow",
    "name": "Snow Plow",
    "category": "vehicles",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Snow Plow.webp"
  },
  {
    "id": "pets-winged-tiger",
    "name": "Winged Tiger",
    "category": "pets",
    "value": 4.3947,
    "demand": 2,
    "image": "/items/Winged Tiger.webp"
  },
  {
    "id": "vehicles-squirrel-car",
    "name": "Squirrel Car",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Squirrel Car.webp"
  },
  {
    "id": "vehicles-lava-racer",
    "name": "Lava Racer",
    "category": "vehicles",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Lava Racer.webp"
  },
  {
    "id": "petwear-copter-hat",
    "name": "Copter Hat",
    "category": "petwear",
    "value": 0.7534,
    "demand": 2,
    "image": "/items/Copter Hat.webp"
  },
  {
    "id": "strollers-easter-egg-stroller",
    "name": "Easter Egg Stroller",
    "category": "strollers",
    "value": 0.5989,
    "demand": 2,
    "image": "/items/Easter Egg Stroller.webp"
  },
  {
    "id": "vehicles-inspector-sherbet-bus",
    "name": "Inspector Sherbet Bus",
    "category": "vehicles",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Inspector Sherbet Bus.webp"
  },
  {
    "id": "petwear-lava-lamp-hat",
    "name": "Lava Lamp Hat",
    "category": "petwear",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Lava Lamp Hat.webp"
  },
  {
    "id": "petwear-strawberry-shortcake-bow",
    "name": "Strawberry Shortcake Bow",
    "category": "petwear",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Strawberry Shortcake Bow.webp"
  },
  {
    "id": "pets-sunrise-duckling",
    "name": "Sunrise Duckling",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Sunrise Duckling.webp"
  },
  {
    "id": "petwear-mule-baskets",
    "name": "Mule Baskets",
    "category": "petwear",
    "value": 0.3767,
    "demand": 2,
    "image": "/items/Mule Baskets.webp"
  },
  {
    "id": "vehicles-yellow-taxi-cab",
    "name": "Yellow Taxi Cab",
    "category": "vehicles",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Yellow Taxi Cab.webp"
  },
  {
    "id": "petwear-tiny-wings",
    "name": "Tiny Wings",
    "category": "petwear",
    "value": 3.7669,
    "demand": 3,
    "image": "/items/Tiny Wings.webp"
  },
  {
    "id": "petwear-bat-wings",
    "name": "Bat Wings",
    "category": "petwear",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Bat Wings.webp"
  },
  {
    "id": "strollers-coconut-stroller",
    "name": "Coconut Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "eggs-blue-egg",
    "name": "Blue Egg",
    "category": "eggs",
    "value": 17.5618,
    "demand": 2,
    "image": "/items/Blue Egg.webp"
  },
  {
    "id": "pets-samoyed",
    "name": "Samoyed",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Samoyed.webp"
  },
  {
    "id": "toys-anna-rattle",
    "name": "Anna Rattle",
    "category": "toys",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Anna Rattle.webp"
  },
  {
    "id": "strollers-baby-basket-stroller",
    "name": "Baby Basket Stroller",
    "category": "strollers",
    "value": 0.6813,
    "demand": 2,
    "image": "/items/Baby Basket Stroller.webp"
  },
  {
    "id": "pets-ladybug",
    "name": "Ladybug",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Ladybug.webp"
  },
  {
    "id": "toys-teddy-skele",
    "name": "Teddy Skele",
    "category": "toys",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Teddy Skele.webp"
  },
  {
    "id": "petwear-yellow-instant-camera",
    "name": "Yellow Instant Camera",
    "category": "petwear",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Yellow Instant Camera.webp"
  },
  {
    "id": "pets-chocolate-dutch-guinea-pig",
    "name": "Chocolate Dutch Guinea Pig",
    "category": "pets",
    "value": 0.8476,
    "demand": 2,
    "image": "/items/Chocolate Dutch Guinea Pig.webp"
  },
  {
    "id": "pets-ant",
    "name": "Ant",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Ant.webp"
  },
  {
    "id": "pets-thorny-devil",
    "name": "Thorny Devil",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Thorny Devil.webp"
  },
  {
    "id": "pets-snow-monkey",
    "name": "Snow Monkey",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Snow Monkey.webp"
  },
  {
    "id": "eggs-starter-egg",
    "name": "Starter Egg",
    "category": "eggs",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "eggs-urban-egg",
    "name": "Urban Egg",
    "category": "eggs",
    "value": 0.4548,
    "demand": 2,
    "image": "/items/Urban Egg.webp"
  },
  {
    "id": "food-golden-seed-ball",
    "name": "Golden Seed Ball",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Golden Seed Ball.webp"
  },
  {
    "id": "pets-snow-leopard",
    "name": "Snow Leopard",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Snow Leopard.webp"
  },
  {
    "id": "petwear-eco-orange-pumpkin-pie-wings",
    "name": "Eco Orange Pumpkin Pie Wings",
    "category": "petwear",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Eco Orange Pumpkin Pie Wings.webp"
  },
  {
    "id": "stickers-wet-owl-sticker",
    "name": "Wet Owl Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Wet Owl Sticker.webp"
  },
  {
    "id": "pets-phantom-dragon",
    "name": "Phantom Dragon",
    "category": "pets",
    "value": 2.5113,
    "demand": 2,
    "image": "/items/Phantom Dragon.webp"
  },
  {
    "id": "pets-white-choccybunny",
    "name": "White Choccybunny",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/White Choccybunny.webp"
  },
  {
    "id": "strollers-humbug-stroller",
    "name": "Humbug Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-shetland-pony-white",
    "name": "Shetland Pony White",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Shetland Pony White.webp"
  },
  {
    "id": "vehicles-regal-roller",
    "name": "Regal Roller",
    "category": "vehicles",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Regal Roller.webp"
  },
  {
    "id": "pets-chanekeh",
    "name": "Chanekeh",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Chanekeh.webp"
  },
  {
    "id": "petwear-monkey-king-crown",
    "name": "Monkey King Crown",
    "category": "petwear",
    "value": 0.6906,
    "demand": 1,
    "image": "/items/Monkey King Crown.webp"
  },
  {
    "id": "toys-rainbow-wand",
    "name": "Rainbow Wand",
    "category": "toys",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Rainbow Wand.webp"
  },
  {
    "id": "petwear-leprechaun-hat",
    "name": "Leprechaun Hat",
    "category": "petwear",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Leprechaun Hat.webp"
  },
  {
    "id": "pets-golden-tortoise-beetle",
    "name": "Golden Tortoise Beetle",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Golden Tortoise Beetle.webp"
  },
  {
    "id": "pets-scarebear",
    "name": "Scarebear",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/Scarebear.webp"
  },
  {
    "id": "vehicles-pink-skateboard",
    "name": "Pink Skateboard",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Pink Skateboard.webp"
  },
  {
    "id": "petwear-money-hat",
    "name": "Money Hat",
    "category": "petwear",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Money Hat.webp"
  },
  {
    "id": "pets-ribbon-seal",
    "name": "Ribbon Seal",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Ribbon Seal.webp"
  },
  {
    "id": "vehicles-snowmobile",
    "name": "Snowmobile",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Snowmobile.webp"
  },
  {
    "id": "pets-firefly",
    "name": "Firefly",
    "category": "pets",
    "value": 0.565,
    "demand": 1,
    "image": "/items/Firefly.webp"
  },
  {
    "id": "petwear-bunny-ear-tiara",
    "name": "Bunny Ear Tiara",
    "category": "petwear",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Bunny Ear Tiara.webp"
  },
  {
    "id": "food-honey",
    "name": "Honey",
    "category": "food",
    "value": 0.3767,
    "demand": 2,
    "image": "/items/Honey.webp"
  },
  {
    "id": "stickers-seagull-yell-animated-sticker",
    "name": "Seagull Yell Animated Sticker",
    "category": "stickers",
    "value": 5.6504,
    "demand": 2,
    "image": "/items/Seagull Yell Animated Sticker.webp"
  },
  {
    "id": "toys-dragon-balloon",
    "name": "Dragon Balloon",
    "category": "toys",
    "value": 0.0942,
    "demand": 1,
    "image": "/items/Dragon Balloon.webp"
  },
  {
    "id": "pets-arctic-fox",
    "name": "Arctic Fox",
    "category": "pets",
    "value": 2.6682,
    "demand": 3,
    "image": "/items/Arctic Fox.webp"
  },
  {
    "id": "pets-forest-sprite",
    "name": "Forest Sprite",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Forest Sprite.webp"
  },
  {
    "id": "petwear-strawberry-clip",
    "name": "Strawberry Clip",
    "category": "petwear",
    "value": 0.2825,
    "demand": 2,
    "image": "/items/Strawberry Clip.webp"
  },
  {
    "id": "pets-kid-goat",
    "name": "Kid Goat",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Kid Goat.webp"
  },
  {
    "id": "strollers-quad-stroller",
    "name": "Quad Stroller",
    "category": "strollers",
    "value": 2.8696,
    "demand": 2,
    "image": "/items/Quad Stroller.webp"
  },
  {
    "id": "petwear-halloween-orange-pumpkin-friend-hat",
    "name": "Halloween Orange Pumpkin Friend Hat",
    "category": "petwear",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Halloween Orange Pumpkin Friend Hat.webp"
  },
  {
    "id": "eggs-mythic-egg",
    "name": "Mythic Egg",
    "category": "eggs",
    "value": 0.3043,
    "demand": 2,
    "image": "/items/Mythic Egg.webp"
  },
  {
    "id": "vehicles-doge-skateboard",
    "name": "Doge Skateboard",
    "category": "vehicles",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Doge Skateboard.webp"
  },
  {
    "id": "pets-dotted-eggy",
    "name": "Dotted Eggy",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Dotted Eggy.webp"
  },
  {
    "id": "food-burnt-bites-bait",
    "name": "Burnt Bites Bait",
    "category": "food",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Burnt Bites Bait.webp"
  },
  {
    "id": "pets-scorching-kaijunior",
    "name": "Scorching Kaijunior",
    "category": "pets",
    "value": 0.7848,
    "demand": 1,
    "image": "/items/Scorching Kaijunior.webp"
  },
  {
    "id": "petwear-bear-hood",
    "name": "Bear Hood",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Bear Hood.webp"
  },
  {
    "id": "pets-shark-puppy",
    "name": "Shark Puppy",
    "category": "pets",
    "value": 4.7086,
    "demand": 3,
    "image": "/items/Shark Puppy.webp"
  },
  {
    "id": "toys-caticorn-rattle",
    "name": "Caticorn Rattle",
    "category": "toys",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Caticorn Rattle.webp"
  },
  {
    "id": "pets-vermilion-butterfly",
    "name": "Vermilion Butterfly",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Vermilion Butterfly.webp"
  },
  {
    "id": "petwear-chicken-hat",
    "name": "Chicken Hat",
    "category": "petwear",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Chicken Hat.webp"
  },
  {
    "id": "gifts-duckling-box",
    "name": "Duckling Box",
    "category": "gifts",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Duckling Box.webp"
  },
  {
    "id": "stickers-mini-pig-sticker",
    "name": "Mini Pig Sticker",
    "category": "stickers",
    "value": 0.0942,
    "demand": 2,
    "image": "/items/Mini Pig Sticker.webp"
  },
  {
    "id": "petwear-invisible-wings",
    "name": "Invisible Wings",
    "category": "petwear",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Invisible Wings.webp"
  },
  {
    "id": "toys-tropical-surge-paint",
    "name": "Tropical Surge Mega Neon Paint",
    "category": "toys",
    "value": 0.2511,
    "demand": 3,
    "image": "/items/Tropical Surge Mega Neon Paint.webp"
  },
  {
    "id": "pets-giant-panda",
    "name": "Giant Panda",
    "category": "pets",
    "value": 54.6203,
    "demand": 3,
    "image": "/items/Giant Panda.webp"
  },
  {
    "id": "petwear-2022-birthday-party-hat",
    "name": "2022 Birthday Party Hat",
    "category": "petwear",
    "value": 9.5742,
    "demand": 3,
    "image": "/items/2022 Birthday Party Hat.webp"
  },
  {
    "id": "petwear-chimney-hat",
    "name": "Chimney Hat",
    "category": "petwear",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Chimney Hat.webp"
  },
  {
    "id": "pets-bali-starling",
    "name": "Bali Starling",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Bali Starling.webp"
  },
  {
    "id": "food-teleportation-potion",
    "name": "Teleportation Potion",
    "category": "food",
    "value": 1.0987,
    "demand": 2,
    "image": "/items/Teleportation Potion.webp"
  },
  {
    "id": "toys-marsh-plush",
    "name": "Marsh Plush",
    "category": "toys",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Marsh Plush.webp"
  },
  {
    "id": "strollers-takoyaki-stroller",
    "name": "Takoyaki Stroller",
    "category": "strollers",
    "value": 0.1,
    "demand": 3,
    "image": ""
  },
  {
    "id": "food-candy-cane",
    "name": "Candy Cane",
    "category": "food",
    "value": 7.5338,
    "demand": 2,
    "image": "/items/Candy Cane.webp"
  },
  {
    "id": "vehicles-moped",
    "name": "Moped",
    "category": "vehicles",
    "value": 0.6906,
    "demand": 1,
    "image": "/items/Moped.webp"
  },
  {
    "id": "eggs-royal-desert-egg",
    "name": "Royal Desert Egg",
    "category": "eggs",
    "value": 0.6416,
    "demand": 2,
    "image": "/items/Royal Desert Egg.webp"
  },
  {
    "id": "vehicles-gold-skateboard",
    "name": "Gold Skateboard",
    "category": "vehicles",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Gold Skateboard.webp"
  },
  {
    "id": "toys-velvet-fuchsia-paint",
    "name": "Velvet Fuchsia Mega Neon Paint",
    "category": "toys",
    "value": 0.2511,
    "demand": 3,
    "image": "/items/Velvet Fuchsia Mega Neon Paint.webp"
  },
  {
    "id": "pets-chipmunk",
    "name": "Chipmunk",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Chipmunk.webp"
  },
  {
    "id": "pets-clover-cow",
    "name": "Clover Cow",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Clover Cow.webp"
  },
  {
    "id": "petwear-mystic-wing-crown",
    "name": "Mystic Wing Crown",
    "category": "petwear",
    "value": 0.0942,
    "demand": 1,
    "image": "/items/Mystic Wing Crown.webp"
  },
  {
    "id": "petwear-festive-stocking-shoes",
    "name": "Festive Stocking Shoes",
    "category": "petwear",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Festive Stocking Shoes.webp"
  },
  {
    "id": "food-maple-leaf-treat",
    "name": "Maple Leaf Treat",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Maple Leaf Treat.webp"
  },
  {
    "id": "pets-koala",
    "name": "Koala",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Koala.webp"
  },
  {
    "id": "strollers-shipwreck-stroller",
    "name": "Shipwreck Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-fissy-skateboard",
    "name": "Fissy Skateboard",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Fissy Skateboard.webp"
  },
  {
    "id": "pets-peahen",
    "name": "Peahen",
    "category": "pets",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Peahen.webp"
  },
  {
    "id": "strollers-egg-basket-stroller",
    "name": "Egg Basket Stroller",
    "category": "strollers",
    "value": 0.12,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-witches-wand",
    "name": "Witches Wand",
    "category": "toys",
    "value": 0.6278,
    "demand": 1,
    "image": "/items/Witches Wand.webp"
  },
  {
    "id": "petwear-steampunk-clock-hat",
    "name": "Steampunk Clock Hat",
    "category": "petwear",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Steampunk Clock Hat.webp"
  },
  {
    "id": "pets-eggnog-dog",
    "name": "Eggnog Dog",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Eggnog Dog.webp"
  },
  {
    "id": "pets-lunar-ox",
    "name": "Lunar Ox",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Lunar Ox.webp"
  },
  {
    "id": "pets-singularity-beetle",
    "name": "Singularity Beetle",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Singularity Beetle.webp"
  },
  {
    "id": "pets-moonbeam-butterfly",
    "name": "Moonbeam Butterfly",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Moonbeam Butterfly.webp"
  },
  {
    "id": "pets-crocodile",
    "name": "Crocodile",
    "category": "pets",
    "value": 4.7086,
    "demand": 3,
    "image": "/items/Crocodile.webp"
  },
  {
    "id": "pets-ibis",
    "name": "Ibis",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Ibis.webp"
  },
  {
    "id": "potions-choosy-potion",
    "name": "Choosy Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-peachick",
    "name": "Peachick",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Peachick.webp"
  },
  {
    "id": "pets-shetland-pony-dark-brown",
    "name": "Shetland Pony Dark Brown",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Shetland Pony Dark Brown.webp"
  },
  {
    "id": "strollers-pumpkin-stroller",
    "name": "Pumpkin Stroller",
    "category": "strollers",
    "value": 0.1461,
    "demand": 1,
    "image": "/items/Pumpkin Stroller.webp"
  },
  {
    "id": "pets-shih-tzu",
    "name": "Shih Tzu",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Shih Tzu.webp"
  },
  {
    "id": "pets-sheepdog-ducky",
    "name": "Sheepdog Ducky",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Sheepdog Ducky.webp"
  },
  {
    "id": "vehicles-bunny-carriage",
    "name": "Bunny Carriage",
    "category": "vehicles",
    "value": 3.453,
    "demand": 2,
    "image": "/items/Bunny Carriage.webp"
  },
  {
    "id": "vehicles-flower-truck",
    "name": "Flower Truck",
    "category": "vehicles",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Flower Truck.webp"
  },
  {
    "id": "strollers-strawberry-stroller",
    "name": "Strawberry Stroller",
    "category": "strollers",
    "value": 0.1767,
    "demand": 1,
    "image": "/items/Strawberry Stroller.webp"
  },
  {
    "id": "strollers-stocking-stroller",
    "name": "Stocking Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-wing-trunk-car",
    "name": "Wing Trunk Car",
    "category": "vehicles",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Wing Trunk Car.webp"
  },
  {
    "id": "pets-sprout-snail",
    "name": "Sprout Snail",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Sprout Snail.webp"
  },
  {
    "id": "petwear-sandwich-hat",
    "name": "Sandwich Hat",
    "category": "petwear",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Sandwich Hat.webp"
  },
  {
    "id": "pets-dracula-fish",
    "name": "Dracula Fish",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Dracula Fish.webp"
  },
  {
    "id": "pets-maleo-bird",
    "name": "Maleo Bird",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Maleo Bird.webp"
  },
  {
    "id": "pets-chocolate-labrador",
    "name": "Chocolate Labrador",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Chocolate Labrador.webp"
  },
  {
    "id": "pets-mrs-whiskerpips",
    "name": "Mrs. Whiskerpips",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Mrs. Whiskerpips.webp"
  },
  {
    "id": "petwear-rotating-periscope",
    "name": "Rotating Periscope",
    "category": "petwear",
    "value": 0.0942,
    "demand": 1,
    "image": "/items/Rotating Periscope.webp"
  },
  {
    "id": "petwear-eco-brown-hiking-backpack",
    "name": "Eco Brown Hiking Backpack",
    "category": "petwear",
    "value": 0.7534,
    "demand": 2,
    "image": "/items/Eco Brown Hiking Backpack.webp"
  },
  {
    "id": "vehicles-hoverboard",
    "name": "Hoverboard",
    "category": "vehicles",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Hoverboard.webp"
  },
  {
    "id": "petwear-magic-girl-wings",
    "name": "Magic Girl Wings",
    "category": "petwear",
    "value": 8.7895,
    "demand": 2,
    "image": "/items/Magic Girl Wings.webp"
  },
  {
    "id": "pets-pangolin",
    "name": "Pangolin",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Pangolin.webp"
  },
  {
    "id": "vehicles-banana-car",
    "name": "Banana Car",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Banana Car.webp"
  },
  {
    "id": "petwear-jade-moth-wings",
    "name": "Jade Moth Wings",
    "category": "petwear",
    "value": 0.565,
    "demand": 1,
    "image": "/items/Jade Moth Wings.webp"
  },
  {
    "id": "pets-malaysian-tapir",
    "name": "Malaysian Tapir",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Malaysian Tapir.webp"
  },
  {
    "id": "pets-dugong",
    "name": "Dugong",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Dugong.webp"
  },
  {
    "id": "pets-bison",
    "name": "Bison",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Bison.webp"
  },
  {
    "id": "pets-evil-chick",
    "name": "Evil Chick",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Evil Chick.webp"
  },
  {
    "id": "petwear-grinder-hat",
    "name": "Grinder Hat",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Grinder Hat.webp"
  },
  {
    "id": "stickers-ginger-cat-sticker",
    "name": "Ginger Cat Sticker",
    "category": "stickers",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Ginger Cat Sticker.webp"
  },
  {
    "id": "toys-fall-corn-grappling-hook",
    "name": "Fall Corn Grappling Hook",
    "category": "toys",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Fall Corn Grappling Hook.webp"
  },
  {
    "id": "pets-horse",
    "name": "Horse",
    "category": "pets",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Horse.webp"
  },
  {
    "id": "petwear-ghost-kitty-backpack",
    "name": "Ghost Kitty Backpack",
    "category": "petwear",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Ghost Kitty Backpack.webp"
  },
  {
    "id": "eggs-desert-egg",
    "name": "Desert Egg",
    "category": "eggs",
    "value": 0.1899,
    "demand": 2,
    "image": "/items/Desert Egg.webp"
  },
  {
    "id": "pets-candy-cane-snail",
    "name": "Candy Cane Snail",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Candy Cane Snail.webp"
  },
  {
    "id": "pets-hamster",
    "name": "Hamster",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Hamster.webp"
  },
  {
    "id": "pets-peppermint-penguin",
    "name": "Peppermint Penguin",
    "category": "pets",
    "value": 8.9464,
    "demand": 3,
    "image": "/items/Peppermint Penguin.webp"
  },
  {
    "id": "toys-creator-rattle",
    "name": "Creator Rattle (NewFissy)",
    "category": "toys",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Creator Rattle (NewFissy).webp"
  },
  {
    "id": "pets-fire-mare",
    "name": "Fire Mare",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Fire Mare.webp"
  },
  {
    "id": "pets-storm-condor",
    "name": "Storm Condor",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Storm Condor.webp"
  },
  {
    "id": "potions-super-ageup-potion",
    "name": "Super Age-Up Potion",
    "category": "potions",
    "value": 2.89,
    "demand": 3,
    "image": ""
  },
  {
    "id": "stickers-turtle-sticker",
    "name": "Turtle Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Turtle Sticker.webp"
  },
  {
    "id": "stickers-otter-sticker",
    "name": "Otter Sticker",
    "category": "stickers",
    "value": 0.0502,
    "demand": 1,
    "image": "/items/Otter Sticker.webp"
  },
  {
    "id": "pets-chicken",
    "name": "Chicken",
    "category": "pets",
    "value": 0.6592,
    "demand": 2,
    "image": "/items/Chicken.webp"
  },
  {
    "id": "pets-tan-chowchow",
    "name": "Tan Chow-Chow",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Tan Chow-Chow.webp"
  },
  {
    "id": "pets-toxic-kaijunior",
    "name": "Toxic Kaijunior",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Toxic Kaijunior.webp"
  },
  {
    "id": "potions-busy-body-potion",
    "name": "Busy Body Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-2021-uplift-butterfly",
    "name": "2021 Uplift Butterfly",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/2021 Uplift Butterfly.webp"
  },
  {
    "id": "eggs-fool-egg",
    "name": "Fool Egg",
    "category": "eggs",
    "value": 0.408,
    "demand": 2,
    "image": "/items/Fool Egg.webp"
  },
  {
    "id": "vehicles-orange-scooter",
    "name": "Neon Orange Scooter",
    "category": "vehicles",
    "value": 0.7848,
    "demand": 1,
    "image": "/items/Neon Orange Scooter.webp"
  },
  {
    "id": "strollers-lunar-new-year-rickshaw-stroller",
    "name": "Lunar New Year Rickshaw Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-unicorn-horn",
    "name": "Unicorn Horn",
    "category": "petwear",
    "value": 7.5338,
    "demand": 3,
    "image": "/items/Unicorn Horn.webp"
  },
  {
    "id": "pets-lunar-gold-tiger",
    "name": "Lunar Gold Tiger",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Lunar Gold Tiger.webp"
  },
  {
    "id": "eggs-royal-moon-egg",
    "name": "Royal Moon Egg",
    "category": "eggs",
    "value": 0.6853,
    "demand": 2,
    "image": "/items/Royal Moon Egg.webp"
  },
  {
    "id": "pets-summer-walrus",
    "name": "Summer Walrus",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Summer Walrus.webp"
  },
  {
    "id": "vehicles-red-scooter",
    "name": "Neon Red Scooter",
    "category": "vehicles",
    "value": 0.7534,
    "demand": 1,
    "image": "/items/Neon Red Scooter.webp"
  },
  {
    "id": "pets-oryx",
    "name": "Oryx",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Oryx.webp"
  },
  {
    "id": "pets-guardian-lion",
    "name": "Guardian Lion",
    "category": "pets",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Guardian Lion.webp"
  },
  {
    "id": "pets-poodle",
    "name": "Poodle",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Poodle.webp"
  },
  {
    "id": "pets-cobra",
    "name": "Cobra",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Cobra.webp"
  },
  {
    "id": "food-golden-lettuce",
    "name": "Golden Lettuce",
    "category": "food",
    "value": 1.0987,
    "demand": 2,
    "image": "/items/Golden Lettuce.webp"
  },
  {
    "id": "eggs-wrapped-doll",
    "name": "Wrapped Doll",
    "category": "eggs",
    "value": 0.593,
    "demand": 1,
    "image": "/items/Wrapped Doll.webp"
  },
  {
    "id": "pets-glyptodon",
    "name": "Glyptodon",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Glyptodon.webp"
  },
  {
    "id": "petwear-balloon-dog",
    "name": "Balloon Dog",
    "category": "petwear",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Balloon Dog.webp"
  },
  {
    "id": "pets-diamond-mahi-mahi",
    "name": "Diamond Mahi Mahi",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Diamond Mahi Mahi.webp"
  },
  {
    "id": "stickers-fossil-sticker-pack",
    "name": "Fossil Sticker Pack",
    "category": "stickers",
    "value": 0.0188,
    "demand": 1,
    "image": "/items/Fossil Sticker Pack.webp"
  },
  {
    "id": "petwear-heart-ribbon",
    "name": "Heart Ribbon",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Heart Ribbon.webp"
  },
  {
    "id": "strollers-web-stroller",
    "name": "Web Stroller",
    "category": "strollers",
    "value": 0.2854,
    "demand": 1,
    "image": "/items/Web Stroller.webp"
  },
  {
    "id": "food-levitation-potion",
    "name": "Levitation Potion",
    "category": "food",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Levitation Potion.webp"
  },
  {
    "id": "pets-magma-moose",
    "name": "Magma Moose",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Magma Moose.webp"
  },
  {
    "id": "eggs-farm-egg",
    "name": "Farm Egg",
    "category": "eggs",
    "value": 25.9887,
    "demand": 2,
    "image": "/items/Farm Egg.webp"
  },
  {
    "id": "pets-tealwood-monster",
    "name": "Tealwood Monster",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Tealwood Monster.webp"
  },
  {
    "id": "vehicles-bethink-skateboard",
    "name": "Bethink Skateboard",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Bethink Skateboard.webp"
  },
  {
    "id": "pets-turkey",
    "name": "Turkey",
    "category": "pets",
    "value": 0.8789,
    "demand": 2,
    "image": "/items/Turkey.webp"
  },
  {
    "id": "toys-cherry-blossom-hang-glider",
    "name": "Cherry Blossom Hang Glider",
    "category": "toys",
    "value": 2.2601,
    "demand": 2,
    "image": "/items/Cherry Blossom Hang Glider.webp"
  },
  {
    "id": "pets-velociraptor",
    "name": "Velociraptor",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Velociraptor.webp"
  },
  {
    "id": "pets-ninja-monkey",
    "name": "Ninja Monkey",
    "category": "pets",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Ninja Monkey.webp"
  },
  {
    "id": "food-golden-dandelion",
    "name": "Golden Dandelion",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Golden Dandelion.webp"
  },
  {
    "id": "stickers-winter-2024-sticker-pack",
    "name": "Winter 2024 Sticker Pack",
    "category": "stickers",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Winter 2024 Sticker Pack.webp"
  },
  {
    "id": "stickers-pets-plus-sticker-pack",
    "name": "Pets Plus Sticker Pack",
    "category": "stickers",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Pets Plus Sticker Pack.webp"
  },
  {
    "id": "food-dim-sum",
    "name": "Dim Sum",
    "category": "food",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Dim Sum.webp"
  },
  {
    "id": "food-cookie",
    "name": "Cookie",
    "category": "food",
    "value": 0.3767,
    "demand": 2,
    "image": "/items/Cookie.webp"
  },
  {
    "id": "vehicles-emoji-scooter",
    "name": "Emoji Scooter",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Emoji Scooter.webp"
  },
  {
    "id": "stickers-dinner-discourse-cat-sticker",
    "name": "Dinner Discourse Cat Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Dinner Discourse Cat Sticker.webp"
  },
  {
    "id": "pets-lavender-dragon",
    "name": "Lavender Dragon",
    "category": "pets",
    "value": 0.8789,
    "demand": 2,
    "image": "/items/Lavender Dragon.webp"
  },
  {
    "id": "pets-bee",
    "name": "Bee",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Bee.webp"
  },
  {
    "id": "pets-super-saru",
    "name": "Super Saru",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Super Saru.webp"
  },
  {
    "id": "pets-black-panther",
    "name": "Black Panther",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Black Panther.webp"
  },
  {
    "id": "pets-wooly-rhino",
    "name": "Wooly Rhino",
    "category": "pets",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Wooly Rhino.webp"
  },
  {
    "id": "pets-blue-betta-fish",
    "name": "Blue Betta Fish",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Blue Betta Fish.webp"
  },
  {
    "id": "pets-strawberry-shortcake-bat-dragon",
    "name": "Strawberry Shortcake Bat Dragon",
    "category": "pets",
    "value": 10.8299,
    "demand": 3,
    "image": "/items/Strawberry Shortcake Bat Dragon.webp"
  },
  {
    "id": "pets-reindeer",
    "name": "Reindeer",
    "category": "pets",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Reindeer.webp"
  },
  {
    "id": "petwear-black-hightops",
    "name": "Black Hightops",
    "category": "petwear",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Black Hightops.webp"
  },
  {
    "id": "pets-stegosaurus",
    "name": "Stegosaurus",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Stegosaurus.webp"
  },
  {
    "id": "pets-griffin",
    "name": "Griffin",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Griffin.webp"
  },
  {
    "id": "pets-brown-bear",
    "name": "Brown Bear",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Brown Bear.webp"
  },
  {
    "id": "petwear-aestus-mane",
    "name": "Aestus Mane",
    "category": "petwear",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Aestus Mane.webp"
  },
  {
    "id": "pets-winter-doe",
    "name": "Winter Doe",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Winter Doe.webp"
  },
  {
    "id": "pets-violet-butterfly",
    "name": "Violet Butterfly",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Violet Butterfly.webp"
  },
  {
    "id": "strollers-meadow-barrow-stroller",
    "name": "Meadow Barrow Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-headless-horse",
    "name": "Headless Horse",
    "category": "pets",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Headless Horse.webp"
  },
  {
    "id": "pets-crab",
    "name": "Crab",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Crab.webp"
  },
  {
    "id": "pets-shrew",
    "name": "Shrew",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Shrew.webp"
  },
  {
    "id": "pets-wren",
    "name": "Wren",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Wren.webp"
  },
  {
    "id": "pets-burning-bunny",
    "name": "Burning Bunny",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Burning Bunny.webp"
  },
  {
    "id": "strollers-woodland-cradle-stroller",
    "name": "Woodland Cradle Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-turtle-doves",
    "name": "Turtle Doves",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Turtle Doves.webp"
  },
  {
    "id": "strollers-hatched-egg-stroller",
    "name": "Hatched Egg Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "gifts-golden-mistletoe",
    "name": "Golden Mistletoe",
    "category": "gifts",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Golden Mistletoe.webp"
  },
  {
    "id": "toys-croc-plush",
    "name": "Croc Plush",
    "category": "toys",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Croc Plush.webp"
  },
  {
    "id": "pets-oakee-wizard",
    "name": "Oakee Wizard",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Oakee Wizard.webp"
  },
  {
    "id": "petwear-goth-shoes",
    "name": "Goth Shoes",
    "category": "petwear",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Goth Shoes.webp"
  },
  {
    "id": "pets-corn-doggo",
    "name": "Corn Doggo",
    "category": "pets",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Corn Doggo.webp"
  },
  {
    "id": "pets-mongoose",
    "name": "Mongoose",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Mongoose.webp"
  },
  {
    "id": "pets-seabed-creeper",
    "name": "Seabed Creeper",
    "category": "pets",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Seabed Creeper.webp"
  },
  {
    "id": "pets-golden-albatross",
    "name": "Golden Albatross",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Golden Albatross.webp"
  },
  {
    "id": "pets-glacier-moth",
    "name": "Glacier Moth",
    "category": "pets",
    "value": 1.3498,
    "demand": 2,
    "image": "/items/Glacier Moth.webp"
  },
  {
    "id": "eggs-danger-egg",
    "name": "Danger Egg",
    "category": "eggs",
    "value": 0.4911,
    "demand": 2,
    "image": "/items/Danger Egg.webp"
  },
  {
    "id": "pets-rainbow-dragon",
    "name": "Rainbow Dragon",
    "category": "pets",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Rainbow Dragon.webp"
  },
  {
    "id": "pets-dilophosaurus",
    "name": "Dilophosaurus",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Dilophosaurus.webp"
  },
  {
    "id": "toys-turkey-plush",
    "name": "Turkey Plush",
    "category": "toys",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Turkey Plush.webp"
  },
  {
    "id": "food-diamond-lavender",
    "name": "Diamond Lavender",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Diamond Lavender.webp"
  },
  {
    "id": "petwear-duck-floatie",
    "name": "Duck Floatie",
    "category": "petwear",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Duck Floatie.webp"
  },
  {
    "id": "pets-bush-elephant",
    "name": "Bush Elephant",
    "category": "pets",
    "value": 5.9643,
    "demand": 3,
    "image": "/items/Bush Elephant.webp"
  },
  {
    "id": "pets-border-collie",
    "name": "Border Collie",
    "category": "pets",
    "value": 3.7669,
    "demand": 2,
    "image": "/items/Border Collie.webp"
  },
  {
    "id": "pets-christmas-pudding-pup",
    "name": "Christmas Pudding Pup",
    "category": "pets",
    "value": 1.6323,
    "demand": 3,
    "image": "/items/Christmas Pudding Pup.webp"
  },
  {
    "id": "pets-wolf",
    "name": "Wolf",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Wolf.webp"
  },
  {
    "id": "pets-deinonychus",
    "name": "Deinonychus",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Deinonychus.webp"
  },
  {
    "id": "petwear-chick-hat",
    "name": "Chick Hat",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Chick Hat.webp"
  },
  {
    "id": "petwear-candy-corn-hat",
    "name": "Candy Corn Hat",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Candy Corn Hat.webp"
  },
  {
    "id": "toys-throwing-pumpkin",
    "name": "Throwing Pumpkin",
    "category": "toys",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Throwing Pumpkin.webp"
  },
  {
    "id": "pets-goose",
    "name": "Goose",
    "category": "pets",
    "value": 12.2425,
    "demand": 3,
    "image": "/items/Goose.webp"
  },
  {
    "id": "vehicles-axel",
    "name": "Axel",
    "category": "vehicles",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Axel.webp"
  },
  {
    "id": "petwear-security-spotlight",
    "name": "Security Spotlight",
    "category": "petwear",
    "value": 0.0942,
    "demand": 1,
    "image": "/items/Security Spotlight.webp"
  },
  {
    "id": "petwear-firey-aura",
    "name": "Firey Aura",
    "category": "petwear",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Firey Aura.webp"
  },
  {
    "id": "pets-manekineko",
    "name": "Maneki-Neko",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Maneki-Neko.webp"
  },
  {
    "id": "pets-camel",
    "name": "Camel",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Camel.webp"
  },
  {
    "id": "toys-halloween-slime-paint",
    "name": "Halloween Slime Mega Neon Paint",
    "category": "toys",
    "value": 0.2825,
    "demand": 3,
    "image": "/items/Halloween Slime Mega Neon Paint.webp"
  },
  {
    "id": "pets-halloween-white-skeleton-dog",
    "name": "Halloween White Skeleton Dog",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Halloween White Skeleton Dog.webp"
  },
  {
    "id": "pets-musk-ox",
    "name": "Musk Ox",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Musk Ox.webp"
  },
  {
    "id": "pets-glacier-kitsune",
    "name": "Glacier Kitsune",
    "category": "pets",
    "value": 1.444,
    "demand": 2,
    "image": "/items/Glacier Kitsune.webp"
  },
  {
    "id": "toys-hot-cocoa-stand",
    "name": "Hot Cocoa Stand",
    "category": "toys",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Hot Cocoa Stand.webp"
  },
  {
    "id": "pets-quetzalcoatl",
    "name": "Quetzalcoatl",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Quetzalcoatl.webp"
  },
  {
    "id": "stickers-dalmatian-sticker",
    "name": "Dalmatian Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Dalmatian Sticker.webp"
  },
  {
    "id": "petwear-bee-hive",
    "name": "Bee Hive",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Bee Hive.webp"
  },
  {
    "id": "strollers-throne-stroller",
    "name": "Throne Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-kraken",
    "name": "Kraken",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Kraken.webp"
  },
  {
    "id": "pets-sea-slug",
    "name": "Sea Slug",
    "category": "pets",
    "value": 3.453,
    "demand": 2,
    "image": "/items/Sea Slug.webp"
  },
  {
    "id": "pets-parrot",
    "name": "Parrot",
    "category": "pets",
    "value": 63.4098,
    "demand": 3,
    "image": "/items/Parrot.webp"
  },
  {
    "id": "toys-classic-trade-stand",
    "name": "Classic Trade Stand",
    "category": "toys",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Classic Trade Stand.webp"
  },
  {
    "id": "toys-egg-rattle",
    "name": "Egg Rattle",
    "category": "toys",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Egg Rattle.webp"
  },
  {
    "id": "pets-abyssinian-cat",
    "name": "Abyssinian Cat",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Abyssinian Cat.webp"
  },
  {
    "id": "gifts-walrus-box",
    "name": "Walrus Box",
    "category": "gifts",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Walrus Box.webp"
  },
  {
    "id": "gifts-special-lunar-new-year-gift-box",
    "name": "Special Lunar New Year Gift Box",
    "category": "gifts",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Special Lunar New Year Gift Box.webp"
  },
  {
    "id": "gifts-standard-gibbon-box",
    "name": "Standard Gibbon Box",
    "category": "gifts",
    "value": 0.0942,
    "demand": 1,
    "image": "/items/Standard Gibbon Box.webp"
  },
  {
    "id": "pets-dj-snooze",
    "name": "DJ Snooze",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/DJ Snooze.webp"
  },
  {
    "id": "pets-lammergeier",
    "name": "Lammergeier",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Lammergeier.webp"
  },
  {
    "id": "toys-wing-hang-glider",
    "name": "Wing Hang Glider",
    "category": "toys",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Wing Hang Glider.webp"
  },
  {
    "id": "gifts-scarecrow-box",
    "name": "Scarecrow Box",
    "category": "gifts",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Scarecrow Box.webp"
  },
  {
    "id": "pets-balloon-unicorn",
    "name": "Balloon Unicorn",
    "category": "pets",
    "value": 54.6203,
    "demand": 3,
    "image": "/items/Balloon Unicorn.webp"
  },
  {
    "id": "toys-pumpkin",
    "name": "Pumpkin",
    "category": "toys",
    "value": 4.7086,
    "demand": 2,
    "image": "/items/Pumpkin.webp"
  },
  {
    "id": "pets-red-sand-dollar",
    "name": "Red Sand Dollar",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Red Sand Dollar.webp"
  },
  {
    "id": "pets-mechapup",
    "name": "Mechapup",
    "category": "pets",
    "value": 2.6682,
    "demand": 3,
    "image": "/items/Mechapup.webp"
  },
  {
    "id": "pets-golden-dragon",
    "name": "Golden Dragon",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Golden Dragon.webp"
  },
  {
    "id": "petwear-demon-wings",
    "name": "Demon Wings",
    "category": "petwear",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Demon Wings.webp"
  },
  {
    "id": "pets-rosy-maple-moth",
    "name": "Rosy Maple Moth",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Rosy Maple Moth.webp"
  },
  {
    "id": "food-patterns-egg",
    "name": "Patterns Egg",
    "category": "food",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Patterns Egg.webp"
  },
  {
    "id": "pets-golden-hummingbird",
    "name": "Golden Hummingbird",
    "category": "pets",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Golden Hummingbird.webp"
  },
  {
    "id": "vehicles-toxic-barrel",
    "name": "Toxic Barrel",
    "category": "vehicles",
    "value": 0.7848,
    "demand": 1,
    "image": "/items/Toxic Barrel.webp"
  },
  {
    "id": "pets-latte-kitsune",
    "name": "Latte Kitsune",
    "category": "pets",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Latte Kitsune.webp"
  },
  {
    "id": "vehicles-shadow-dragon-skateboard",
    "name": "Shadow Dragon Skateboard",
    "category": "vehicles",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Shadow Dragon Skateboard.webp"
  },
  {
    "id": "pets-piranha",
    "name": "Piranha",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Piranha.webp"
  },
  {
    "id": "pets-jumping-spider",
    "name": "Jumping Spider",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Jumping Spider.webp"
  },
  {
    "id": "eggs-pistachio",
    "name": "Pistachio",
    "category": "eggs",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Pistachio.webp"
  },
  {
    "id": "vehicles-black-skateboard",
    "name": "Black Skateboard",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Black Skateboard.webp"
  },
  {
    "id": "petwear-heart-hat",
    "name": "Heart Hat",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Heart Hat.webp"
  },
  {
    "id": "pets-trapdoor-snail",
    "name": "Trapdoor Snail",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Trapdoor Snail.webp"
  },
  {
    "id": "vehicles-heart-hoverboard",
    "name": "Heart Hoverboard",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Heart Hoverboard.webp"
  },
  {
    "id": "toys-dance-arcade-stand",
    "name": "Dance Arcade Stand",
    "category": "toys",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Dance Arcade Stand.webp"
  },
  {
    "id": "pets-dark-choccybunny",
    "name": "Dark Choccybunny",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Dark Choccybunny.webp"
  },
  {
    "id": "pets-blue-dog",
    "name": "Blue Dog",
    "category": "pets",
    "value": 4.5517,
    "demand": 2,
    "image": "/items/Blue Dog.webp"
  },
  {
    "id": "vehicles-white-snowboard",
    "name": "White Snowboard",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/White Snowboard.webp"
  },
  {
    "id": "pets-birthday-butterfly-2023",
    "name": "Birthday Butterfly 2023",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Birthday Butterfly 2023.webp"
  },
  {
    "id": "pets-alpaca",
    "name": "Alpaca",
    "category": "pets",
    "value": 5.9643,
    "demand": 3,
    "image": "/items/Alpaca.webp"
  },
  {
    "id": "vehicles-pink-snowboard",
    "name": "Pink Neon Snowboard",
    "category": "vehicles",
    "value": 2.8252,
    "demand": 2,
    "image": "/items/Pink Neon Snowboard.webp"
  },
  {
    "id": "pets-starhopper",
    "name": "Starhopper",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Starhopper.webp"
  },
  {
    "id": "stickers-koala-sticker",
    "name": "Koala Sticker",
    "category": "stickers",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Koala Sticker.webp"
  },
  {
    "id": "pets-vulture",
    "name": "Vulture",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Vulture.webp"
  },
  {
    "id": "petwear-2022-birthday-confetti-cannon",
    "name": "2022 Birthday Confetti Cannon",
    "category": "petwear",
    "value": 5.0226,
    "demand": 3,
    "image": "/items/2022 Birthday Confetti Cannon.webp"
  },
  {
    "id": "pets-lunar-tiger",
    "name": "Lunar Tiger",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Lunar Tiger.webp"
  },
  {
    "id": "gifts-standard-gorilla-box",
    "name": "Standard Gorilla Box",
    "category": "gifts",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Standard Gorilla Box.webp"
  },
  {
    "id": "petwear-pink-instant-camera",
    "name": "Pink Instant Camera",
    "category": "petwear",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Pink Instant Camera.webp"
  },
  {
    "id": "pets-magpie",
    "name": "Magpie",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Magpie.webp"
  },
  {
    "id": "strollers-pea-pod-stroller",
    "name": "Pea Pod Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "potions-preferred-potion",
    "name": "Preferred Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-parakeet",
    "name": "Parakeet",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Parakeet.webp"
  },
  {
    "id": "pets-cow-calf",
    "name": "Cow Calf",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Cow Calf.webp"
  },
  {
    "id": "toys-hugging-egg",
    "name": "Hugging Egg",
    "category": "toys",
    "value": 1.0987,
    "demand": 1,
    "image": "/items/Hugging Egg.webp"
  },
  {
    "id": "pets-scarecrow-cat",
    "name": "Scarecrow Cat",
    "category": "pets",
    "value": 0.3924,
    "demand": 2,
    "image": "/items/Scarecrow Cat.webp"
  },
  {
    "id": "vehicles-blue-snowboard",
    "name": "Blue Snowboard",
    "category": "vehicles",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Blue Snowboard.webp"
  },
  {
    "id": "petwear-ssbd-beanie",
    "name": "SSBD Beanie",
    "category": "petwear",
    "value": 12.5564,
    "demand": 2,
    "image": "/items/SSBD Beanie.webp"
  },
  {
    "id": "toys-staff-ingredient",
    "name": "Staff Ingredient",
    "category": "toys",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Staff Ingredient.webp"
  },
  {
    "id": "vehicles-convertible",
    "name": "Convertible",
    "category": "vehicles",
    "value": 0.8162,
    "demand": 1,
    "image": "/items/Convertible.webp"
  },
  {
    "id": "pets-diamond-butterfly",
    "name": "Diamond Butterfly",
    "category": "pets",
    "value": 20.718,
    "demand": 3,
    "image": "/items/Diamond Butterfly.webp"
  },
  {
    "id": "pets-frostclaw",
    "name": "Frostclaw",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Frostclaw.webp"
  },
  {
    "id": "toys-stygian-hang-glider",
    "name": "Stygian Hang Glider",
    "category": "toys",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Stygian Hang Glider.webp"
  },
  {
    "id": "strollers-kangaroo-stroller",
    "name": "Kangaroo Stroller",
    "category": "strollers",
    "value": 0.2154,
    "demand": 1,
    "image": "/items/Kangaroo Stroller.webp"
  },
  {
    "id": "pets-ghost",
    "name": "Ghost",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Ghost.webp"
  },
  {
    "id": "petwear-back-taco",
    "name": "Back Taco",
    "category": "petwear",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Back Taco.webp"
  },
  {
    "id": "strollers-elephant-stroller",
    "name": "Elephant Stroller",
    "category": "strollers",
    "value": 0.2136,
    "demand": 1,
    "image": "/items/Elephant Stroller.webp"
  },
  {
    "id": "pets-merhorse",
    "name": "Merhorse",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Merhorse.webp"
  },
  {
    "id": "petwear-leaf-hat",
    "name": "Leaf Hat",
    "category": "petwear",
    "value": 0.0942,
    "demand": 1,
    "image": "/items/Leaf Hat.webp"
  },
  {
    "id": "stickers-winged-horse-sticker",
    "name": "Winged Horse Sticker",
    "category": "stickers",
    "value": 0.157,
    "demand": 2,
    "image": "/items/Winged Horse Sticker.webp"
  },
  {
    "id": "pets-aye-aye",
    "name": "Aye Aye",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Aye Aye.webp"
  },
  {
    "id": "food-super-ageup-potion",
    "name": "Super Age-Up Potion",
    "category": "food",
    "value": 1.1615,
    "demand": 2,
    "image": "/items/Super Age-Up Potion.webp"
  },
  {
    "id": "food-golden-petunia",
    "name": "Golden Petunia",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Golden Petunia.webp"
  },
  {
    "id": "pets-milk-choccybunny",
    "name": "Milk Choccybunny",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Milk Choccybunny.webp"
  },
  {
    "id": "vehicles-black-scooter",
    "name": "Black Scooter",
    "category": "vehicles",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Black Scooter.webp"
  },
  {
    "id": "stickers-shark-puppy-sticker",
    "name": "Shark Puppy Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Shark Puppy Sticker.webp"
  },
  {
    "id": "pets-dragonfly",
    "name": "Dragonfly",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Dragonfly.webp"
  },
  {
    "id": "pets-yellow-butterfly",
    "name": "Yellow Butterfly",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Yellow Butterfly.webp"
  },
  {
    "id": "strollers-old-lump-of-log-stroller",
    "name": "Old Lump of Log Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-sandfish",
    "name": "Sandfish",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Sandfish.webp"
  },
  {
    "id": "pets-chestnut-glyptodon",
    "name": "Chestnut Glyptodon",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Chestnut Glyptodon.webp"
  },
  {
    "id": "vehicles-shadow-rider",
    "name": "Shadow Rider",
    "category": "vehicles",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Shadow Rider.webp"
  },
  {
    "id": "pets-cactus-friend",
    "name": "Cactus Friend",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Cactus Friend.webp"
  },
  {
    "id": "petwear-flying-fairy",
    "name": "Flying Fairy",
    "category": "petwear",
    "value": 0.1883,
    "demand": 2,
    "image": "/items/Flying Fairy.webp"
  },
  {
    "id": "vehicles-husky-sled",
    "name": "Husky Sled",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Husky Sled.webp"
  },
  {
    "id": "stickers-elephant-sticker",
    "name": "Elephant Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Elephant Sticker.webp"
  },
  {
    "id": "pets-black-moon-bear",
    "name": "Black Moon Bear",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Black Moon Bear.webp"
  },
  {
    "id": "pets-galapagos-sea-lion",
    "name": "Galapagos Sea Lion",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Galapagos Sea Lion.webp"
  },
  {
    "id": "toys-heart-rattle",
    "name": "Heart Rattle",
    "category": "toys",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Heart Rattle.webp"
  },
  {
    "id": "stickers-dragon-breath-animated-sticker",
    "name": "Dragon Breath Animated Sticker",
    "category": "stickers",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Dragon Breath Animated Sticker.webp"
  },
  {
    "id": "pets-prism-snake",
    "name": "Prism Snake",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Prism Snake.webp"
  },
  {
    "id": "pets-robin",
    "name": "Robin",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Robin.webp"
  },
  {
    "id": "toys-unicorn-leash",
    "name": "Unicorn Leash",
    "category": "toys",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Unicorn Leash.webp"
  },
  {
    "id": "strollers-apple-barrel-stroller",
    "name": "Apple Barrel Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "strollers-sleigh-stroller",
    "name": "Sleigh Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-highland-cow",
    "name": "Highland Cow",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Highland Cow.webp"
  },
  {
    "id": "pets-vanilla-penguin",
    "name": "Vanilla Penguin",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Vanilla Penguin.webp"
  },
  {
    "id": "pets-dango-penguins",
    "name": "Dango Penguins",
    "category": "pets",
    "value": 1.0045,
    "demand": 2,
    "image": "/items/Dango Penguins.webp"
  },
  {
    "id": "petwear-burger-boots",
    "name": "Burger Boots",
    "category": "petwear",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Burger Boots.webp"
  },
  {
    "id": "pets-donkey",
    "name": "Donkey",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Donkey.webp"
  },
  {
    "id": "pets-glormy-leo",
    "name": "Glormy Leo",
    "category": "pets",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Glormy Leo.webp"
  },
  {
    "id": "pets-puffer-fish",
    "name": "Puffer Fish",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/Puffer Fish.webp"
  },
  {
    "id": "petwear-human-feet-shoes",
    "name": "Human Feet Shoes",
    "category": "petwear",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Human Feet Shoes.webp"
  },
  {
    "id": "pets-lionfish",
    "name": "Lionfish",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Lionfish.webp"
  },
  {
    "id": "petwear-head-chef",
    "name": "Head Chef",
    "category": "petwear",
    "value": 2.5113,
    "demand": 2,
    "image": "/items/Head Chef.webp"
  },
  {
    "id": "pets-shadow-dragon",
    "name": "Shadow Dragon",
    "category": "pets",
    "value": 219.7368,
    "demand": 3,
    "image": "/items/Shadow Dragon.webp"
  },
  {
    "id": "pets-gingerbread-reindeer",
    "name": "Gingerbread Reindeer",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Gingerbread Reindeer.webp"
  },
  {
    "id": "pets-unicorn",
    "name": "Unicorn",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Unicorn.webp"
  },
  {
    "id": "pets-rooster",
    "name": "Rooster",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Rooster.webp"
  },
  {
    "id": "gifts-bat-box",
    "name": "Bat Box",
    "category": "gifts",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Bat Box.webp"
  },
  {
    "id": "vehicles-horse-cycle",
    "name": "Horse Cycle",
    "category": "vehicles",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Horse Cycle.webp"
  },
  {
    "id": "pets-rainbow-trout",
    "name": "Rainbow Trout",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Rainbow Trout.webp"
  },
  {
    "id": "pets-polar-bear",
    "name": "Polar Bear",
    "category": "pets",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Polar Bear.webp"
  },
  {
    "id": "pets-halloween-white-mummy-cat",
    "name": "Halloween White Mummy Cat",
    "category": "pets",
    "value": 0.2982,
    "demand": 1,
    "image": "/items/Halloween White Mummy Cat.webp"
  },
  {
    "id": "pets-angelfish",
    "name": "Angelfish",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Angelfish.webp"
  },
  {
    "id": "strollers-palanquin-stroller",
    "name": "Palanquin Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-ringtailed-lemur",
    "name": "Ring-Tailed Lemur",
    "category": "pets",
    "value": 1.8835,
    "demand": 2,
    "image": "/items/Ring-Tailed Lemur.webp"
  },
  {
    "id": "pets-cerberus",
    "name": "Cerberus",
    "category": "pets",
    "value": 1.1301,
    "demand": 2,
    "image": "/items/Cerberus.webp"
  },
  {
    "id": "toys-tombstone-ghostify",
    "name": "Tombstone Ghostify",
    "category": "toys",
    "value": 14.4398,
    "demand": 2,
    "image": "/items/Tombstone Ghostify.webp"
  },
  {
    "id": "food-stars-egg",
    "name": "Stars Egg",
    "category": "food",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Stars Egg.webp"
  },
  {
    "id": "toys-heart-balloon",
    "name": "Heart Balloon",
    "category": "toys",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Heart Balloon.webp"
  },
  {
    "id": "gifts-pony-box",
    "name": "Pony Box",
    "category": "gifts",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Pony Box.webp"
  },
  {
    "id": "pets-kangaroo",
    "name": "Kangaroo",
    "category": "pets",
    "value": 5.9643,
    "demand": 3,
    "image": "/items/Kangaroo.webp"
  },
  {
    "id": "pets-bauble-buddies",
    "name": "Bauble Buddies",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Bauble Buddies.webp"
  },
  {
    "id": "pets-sugar-glider",
    "name": "Sugar Glider",
    "category": "pets",
    "value": 9.1034,
    "demand": 3,
    "image": "/items/Sugar Glider.webp"
  },
  {
    "id": "stickers-vol-2-pets-plus-sticker-pack",
    "name": "Vol. 2 Pets Plus Sticker Pack",
    "category": "stickers",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Vol. 2 Pets Plus Sticker Pack.webp"
  },
  {
    "id": "pets-striped-eggy",
    "name": "Striped Eggy",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Striped Eggy.webp"
  },
  {
    "id": "vehicles-crescent-moon-car",
    "name": "Crescent Moon Car",
    "category": "vehicles",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Crescent Moon Car.webp"
  },
  {
    "id": "pets-zombie-buffalo",
    "name": "Zombie Buffalo",
    "category": "pets",
    "value": 3.2961,
    "demand": 2,
    "image": "/items/Zombie Buffalo.webp"
  },
  {
    "id": "vehicles-traveling-house",
    "name": "Traveling House",
    "category": "vehicles",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Traveling House.webp"
  },
  {
    "id": "pets-pudding-cat",
    "name": "Pudding Cat",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Pudding Cat.webp"
  },
  {
    "id": "toys-phoenix-plush",
    "name": "Phoenix Plush",
    "category": "toys",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Phoenix Plush.webp"
  },
  {
    "id": "stickers-candyfloss-chick-sticker",
    "name": "Candyfloss Chick Sticker",
    "category": "stickers",
    "value": 0.0565,
    "demand": 1,
    "image": "/items/Candyfloss Chick Sticker.webp"
  },
  {
    "id": "vehicles-rabbit-helicopter",
    "name": "Rabbit Helicopter",
    "category": "vehicles",
    "value": 0.7534,
    "demand": 1,
    "image": "/items/Rabbit Helicopter.webp"
  },
  {
    "id": "strollers-magic-moon-stroller",
    "name": "Magic Moon Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-lunar-new-year-collar",
    "name": "Lunar New Year Collar",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Lunar New Year Collar.webp"
  },
  {
    "id": "vehicles-douglas",
    "name": "Douglas",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Douglas.webp"
  },
  {
    "id": "pets-emu",
    "name": "Emu",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Emu.webp"
  },
  {
    "id": "pets-amber-butterfly",
    "name": "Amber Butterfly",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Amber Butterfly.webp"
  },
  {
    "id": "toys-flying-broomstick",
    "name": "Flying Broomstick",
    "category": "toys",
    "value": 28.2519,
    "demand": 2,
    "image": "/items/Flying Broomstick.webp"
  },
  {
    "id": "pets-orange-butterfly",
    "name": "Orange Butterfly",
    "category": "pets",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Orange Butterfly.webp"
  },
  {
    "id": "pets-blackfooted-ferret",
    "name": "Black-Footed Ferret",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Black-Footed Ferret.webp"
  },
  {
    "id": "pets-hero-gibbon",
    "name": "Hero Gibbon",
    "category": "pets",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Hero Gibbon.webp"
  },
  {
    "id": "pets-red-squirrel",
    "name": "Red Squirrel",
    "category": "pets",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Red Squirrel.webp"
  },
  {
    "id": "pets-rodeo-bull",
    "name": "Rodeo Bull",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Rodeo Bull.webp"
  },
  {
    "id": "strollers-heart-stroller",
    "name": "Heart Stroller",
    "category": "strollers",
    "value": 2.7266,
    "demand": 2,
    "image": "/items/Heart Stroller.webp"
  },
  {
    "id": "pets-tio-de-nadal",
    "name": "Tio De Nadal",
    "category": "pets",
    "value": 3.2961,
    "demand": 3,
    "image": "/items/Tio De Nadal.webp"
  },
  {
    "id": "pets-happy-clam",
    "name": "Happy Clam",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Happy Clam.webp"
  },
  {
    "id": "pets-albino-bat",
    "name": "Albino Bat",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Albino Bat.webp"
  },
  {
    "id": "pets-velocirooster",
    "name": "Velocirooster",
    "category": "pets",
    "value": 2.1974,
    "demand": 2,
    "image": "/items/Velocirooster.webp"
  },
  {
    "id": "food-snapdragon-flower",
    "name": "Snapdragon Flower",
    "category": "food",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Snapdragon Flower.webp"
  },
  {
    "id": "petwear-chick-backpack",
    "name": "Chick Backpack",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Chick Backpack.webp"
  },
  {
    "id": "pets-gorilla",
    "name": "Gorilla",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Gorilla.webp"
  },
  {
    "id": "toys-discosplosion",
    "name": "Discosplosion",
    "category": "toys",
    "value": 0.2825,
    "demand": 2,
    "image": "/items/Discosplosion.webp"
  },
  {
    "id": "pets-dalmatian",
    "name": "Dalmatian",
    "category": "pets",
    "value": 19.4624,
    "demand": 3,
    "image": "/items/Dalmatian.webp"
  },
  {
    "id": "gifts-monkey-box",
    "name": "Monkey Box",
    "category": "gifts",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Monkey Box.webp"
  },
  {
    "id": "strollers-egyptian-chariot-stroller",
    "name": "Egyptian Chariot Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-california-condor",
    "name": "California Condor",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/California Condor.webp"
  },
  {
    "id": "pets-tortuga-de-la-isla",
    "name": "Tortuga de la Isla",
    "category": "pets",
    "value": 2.5113,
    "demand": 2,
    "image": "/items/Tortuga de la Isla.webp"
  },
  {
    "id": "pets-yeti",
    "name": "Yeti",
    "category": "pets",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Yeti.webp"
  },
  {
    "id": "vehicles-snowblower-toboggan",
    "name": "Snowblower Toboggan",
    "category": "vehicles",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Snowblower Toboggan.webp"
  },
  {
    "id": "pets-frogspawn",
    "name": "Frogspawn",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Frogspawn.webp"
  },
  {
    "id": "pets-white-amazon",
    "name": "White Amazon",
    "category": "pets",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/White Amazon.webp"
  },
  {
    "id": "pets-deathstalker-scorpion",
    "name": "Deathstalker Scorpion",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Deathstalker Scorpion.webp"
  },
  {
    "id": "pets-oakee-knight",
    "name": "Oakee Knight",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Oakee Knight.webp"
  },
  {
    "id": "pets-golden-unicorn",
    "name": "Golden Unicorn",
    "category": "pets",
    "value": 0.2982,
    "demand": 1,
    "image": "/items/Golden Unicorn.webp"
  },
  {
    "id": "pets-candicorn",
    "name": "Candicorn",
    "category": "pets",
    "value": 3.61,
    "demand": 3,
    "image": "/items/Candicorn.webp"
  },
  {
    "id": "pets-crow",
    "name": "Crow",
    "category": "pets",
    "value": 56.5037,
    "demand": 3,
    "image": "/items/Crow.webp"
  },
  {
    "id": "pets-kaijunior",
    "name": "Kaijunior",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Kaijunior.webp"
  },
  {
    "id": "pets-seahorse",
    "name": "Seahorse",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Seahorse.webp"
  },
  {
    "id": "pets-triceratops",
    "name": "Triceratops",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Triceratops.webp"
  },
  {
    "id": "pets-zombie-wolf",
    "name": "Zombie Wolf",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Zombie Wolf.webp"
  },
  {
    "id": "strollers-cradle-stroller",
    "name": "Cradle Stroller",
    "category": "strollers",
    "value": 0.9532,
    "demand": 2,
    "image": "/items/Cradle Stroller.webp"
  },
  {
    "id": "pets-chick",
    "name": "Chick",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Chick.webp"
  },
  {
    "id": "pets-island-tarsier",
    "name": "Island Tarsier",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Island Tarsier.webp"
  },
  {
    "id": "pets-emperor-gorilla",
    "name": "Emperor Gorilla",
    "category": "pets",
    "value": 4.0808,
    "demand": 2,
    "image": "/items/Emperor Gorilla.webp"
  },
  {
    "id": "stickers-fairy-bat-dragon-sticker",
    "name": "Fairy Bat Dragon Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Fairy Bat Dragon Sticker.webp"
  },
  {
    "id": "pets-yule-log-dog",
    "name": "Yule Log Dog",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Yule Log Dog.webp"
  },
  {
    "id": "pets-axolotl",
    "name": "Axolotl",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Axolotl.webp"
  },
  {
    "id": "pets-warthog",
    "name": "Warthog",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Warthog.webp"
  },
  {
    "id": "pets-golden-hamster",
    "name": "Golden Hamster",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Golden Hamster.webp"
  },
  {
    "id": "pets-hummingbird",
    "name": "Hummingbird",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Hummingbird.webp"
  },
  {
    "id": "gifts-hermit-crab-box",
    "name": "Hermit Crab Box",
    "category": "gifts",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Hermit Crab Box.webp"
  },
  {
    "id": "pets-berry-cool-cube",
    "name": "Berry Cool Cube",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Berry Cool Cube.webp"
  },
  {
    "id": "pets-ermine",
    "name": "Ermine",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Ermine.webp"
  },
  {
    "id": "pets-praying-mantis",
    "name": "Praying Mantis",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Praying Mantis.webp"
  },
  {
    "id": "gifts-hare-box",
    "name": "Hare Box",
    "category": "gifts",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Hare Box.webp"
  },
  {
    "id": "pets-dragon",
    "name": "Dragon",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Dragon.webp"
  },
  {
    "id": "petwear-shadow-wings",
    "name": "Shadow Wings",
    "category": "petwear",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Shadow Wings.webp"
  },
  {
    "id": "pets-french-bulldog",
    "name": "French Bulldog",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/French Bulldog.webp"
  },
  {
    "id": "stickers-frostbite-bear-and-cub-animated-sticker",
    "name": "Frostbite Bear and Cub Animated Sticker",
    "category": "stickers",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Frostbite Bear and Cub Animated Sticker.webp"
  },
  {
    "id": "pets-rice-cake-rabbit",
    "name": "Rice Cake Rabbit",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Rice Cake Rabbit.webp"
  },
  {
    "id": "pets-scarlet-butterfly",
    "name": "Scarlet Butterfly",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Scarlet Butterfly.webp"
  },
  {
    "id": "pets-flying-fish",
    "name": "Flying Fish",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Flying Fish.webp"
  },
  {
    "id": "petwear-shadow-aura",
    "name": "Shadow Aura",
    "category": "petwear",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Shadow Aura.webp"
  },
  {
    "id": "pets-alley-cat",
    "name": "Alley Cat",
    "category": "pets",
    "value": 1.287,
    "demand": 2,
    "image": "/items/Alley Cat.webp"
  },
  {
    "id": "pets-cold-cube",
    "name": "Cold Cube",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Cold Cube.webp"
  },
  {
    "id": "pets-moonbeam-peacock",
    "name": "Moonbeam Peacock",
    "category": "pets",
    "value": 4.3947,
    "demand": 2,
    "image": "/items/Moonbeam Peacock.webp"
  },
  {
    "id": "petwear-elf-hat",
    "name": "Elf Hat",
    "category": "petwear",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Elf Hat.webp"
  },
  {
    "id": "potions-secret-talent-potion",
    "name": "Secret Talent Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-pomeranian",
    "name": "Pomeranian",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Pomeranian.webp"
  },
  {
    "id": "eggs-woodland-egg",
    "name": "Woodland Egg",
    "category": "eggs",
    "value": 0.3436,
    "demand": 2,
    "image": "/items/Woodland Egg.webp"
  },
  {
    "id": "pets-red-panda",
    "name": "Red Panda",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Red Panda.webp"
  },
  {
    "id": "stickers-african-painted-dog-sticker",
    "name": "African Painted Dog Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/African Painted Dog Sticker.webp"
  },
  {
    "id": "pets-salamander",
    "name": "Salamander",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Salamander.webp"
  },
  {
    "id": "gifts-wolf-box",
    "name": "Wolf Box",
    "category": "gifts",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Wolf Box.webp"
  },
  {
    "id": "pets-blackchested-pheasant",
    "name": "Black-Chested Pheasant",
    "category": "pets",
    "value": 4.3947,
    "demand": 2,
    "image": "/items/Black-Chested Pheasant.webp"
  },
  {
    "id": "food-heart-potion",
    "name": "Heart Potion",
    "category": "food",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Heart Potion.webp"
  },
  {
    "id": "pets-mochi-meow",
    "name": "Mochi Meow",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Mochi Meow.webp"
  },
  {
    "id": "pets-business-monkey",
    "name": "Business Monkey",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Business Monkey.webp"
  },
  {
    "id": "petwear-black-designer-backpack",
    "name": "Black Designer Backpack",
    "category": "petwear",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Black Designer Backpack.webp"
  },
  {
    "id": "pets-clementine-owl",
    "name": "Clementine Owl",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Clementine Owl.webp"
  },
  {
    "id": "petwear-hero-mask",
    "name": "Hero Mask",
    "category": "petwear",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Hero Mask.webp"
  },
  {
    "id": "pets-corgi",
    "name": "Corgi",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Corgi.webp"
  },
  {
    "id": "pets-goldhorn",
    "name": "Goldhorn",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Goldhorn.webp"
  },
  {
    "id": "vehicles-cupids-coupe",
    "name": "Cupid's Coupe",
    "category": "vehicles",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Cupids Coupe.webp"
  },
  {
    "id": "strollers-half-egg-stroller",
    "name": "Half Egg Stroller",
    "category": "strollers",
    "value": 0.5877,
    "demand": 2,
    "image": "/items/Half Egg Stroller.webp"
  },
  {
    "id": "pets-bunny-swirl",
    "name": "Bunny Swirl",
    "category": "pets",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Bunny Swirl.webp"
  },
  {
    "id": "pets-rhino",
    "name": "Rhino",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Rhino.webp"
  },
  {
    "id": "stickers-frog-sticker",
    "name": "Frog Sticker",
    "category": "stickers",
    "value": 0.0502,
    "demand": 1,
    "image": "/items/Frog Sticker.webp"
  },
  {
    "id": "food-golden-goldfish",
    "name": "Golden Goldfish",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Golden Goldfish.webp"
  },
  {
    "id": "pets-fanghorn-tortoise",
    "name": "Fanghorn Tortoise",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Fanghorn Tortoise.webp"
  },
  {
    "id": "eggs-christmas-future-egg",
    "name": "Christmas Future Egg",
    "category": "eggs",
    "value": 0.2392,
    "demand": 2,
    "image": "/items/Christmas Future Egg.webp"
  },
  {
    "id": "pets-snowy-mammoth",
    "name": "Snowy Mammoth",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Snowy Mammoth.webp"
  },
  {
    "id": "pets-ice-cube",
    "name": "Ice Cube",
    "category": "pets",
    "value": 0.2982,
    "demand": 1,
    "image": "/items/Ice Cube.webp"
  },
  {
    "id": "strollers-halloween-black-witch-hat-stroller",
    "name": "Halloween Black Witch Hat Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-green-amazon",
    "name": "Green Amazon",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Green Amazon.webp"
  },
  {
    "id": "vehicles-dolphin-cruiser",
    "name": "Dolphin Cruiser",
    "category": "vehicles",
    "value": 0.0942,
    "demand": 1,
    "image": "/items/Dolphin Cruiser.webp"
  },
  {
    "id": "pets-sakura-spirit",
    "name": "Sakura Spirit",
    "category": "pets",
    "value": 2.1974,
    "demand": 3,
    "image": "/items/Sakura Spirit.webp"
  },
  {
    "id": "pets-snorgle",
    "name": "Snorgle",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Snorgle.webp"
  },
  {
    "id": "pets-trihorned-treehopper",
    "name": "Tri-horned Treehopper",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Tri-horned Treehopper.webp"
  },
  {
    "id": "gifts-halloween-chick-box",
    "name": "Halloween Chick Box",
    "category": "gifts",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Halloween Chick Box.webp"
  },
  {
    "id": "pets-otter",
    "name": "Otter",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Otter.webp"
  },
  {
    "id": "pets-frostbite-bear",
    "name": "Frostbite Bear",
    "category": "pets",
    "value": 5.6504,
    "demand": 3,
    "image": "/items/Frostbite Bear.webp"
  },
  {
    "id": "pets-grave-owl",
    "name": "Grave Owl",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Grave Owl.webp"
  },
  {
    "id": "strollers-teacup-stroller",
    "name": "Teacup Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "strollers-flower-cart-stroller",
    "name": "Flower Cart Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-bird-of-paradise",
    "name": "Bird of Paradise",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Bird of Paradise.webp"
  },
  {
    "id": "pets-wildfire-hawk",
    "name": "Wildfire Hawk",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Wildfire Hawk.webp"
  },
  {
    "id": "petwear-rubber-ducks",
    "name": "Rubber Ducks",
    "category": "petwear",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Rubber Ducks.webp"
  },
  {
    "id": "food-fire-horse-apple",
    "name": "Fire Horse Apple",
    "category": "food",
    "value": 0.0126,
    "demand": 1,
    "image": "/items/Fire Horse Apple.webp"
  },
  {
    "id": "gifts-lunar-tiger-box",
    "name": "Lunar Tiger Box",
    "category": "gifts",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Lunar Tiger Box.webp"
  },
  {
    "id": "pets-hopbop",
    "name": "Hopbop",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Hopbop.webp"
  },
  {
    "id": "petwear-natures-crown",
    "name": "Nature's Crown",
    "category": "petwear",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Natures Crown.webp"
  },
  {
    "id": "pets-tortoiseshell-guinea-pig",
    "name": "Tortoiseshell Guinea Pig",
    "category": "pets",
    "value": 9.7312,
    "demand": 3,
    "image": "/items/Tortoiseshell Guinea Pig.webp"
  },
  {
    "id": "toys-celebration-firework-launcher",
    "name": "Celebration Firework Launcher",
    "category": "toys",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Celebration Firework Launcher.webp"
  },
  {
    "id": "toys-santa-throne",
    "name": "Santa Throne",
    "category": "toys",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Santa Throne.webp"
  },
  {
    "id": "strollers-catapult-stroller",
    "name": "Catapult Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-snow-cone-stand",
    "name": "Snow Cone Stand",
    "category": "toys",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Snow Cone Stand.webp"
  },
  {
    "id": "pets-hawk",
    "name": "Hawk",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Hawk.webp"
  },
  {
    "id": "strollers-fall-wheelbarrow-stroller",
    "name": "Fall Wheelbarrow Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "eggs-moon-egg",
    "name": "Moon Egg",
    "category": "eggs",
    "value": 0.0572,
    "demand": 1,
    "image": "/items/Moon Egg.webp"
  },
  {
    "id": "petwear-buttoned-ushanka",
    "name": "Buttoned Ushanka",
    "category": "petwear",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Buttoned Ushanka.webp"
  },
  {
    "id": "pets-pumpkin-friend",
    "name": "Pumpkin Friend",
    "category": "pets",
    "value": 0.4238,
    "demand": 2,
    "image": "/items/Pumpkin Friend.webp"
  },
  {
    "id": "pets-firefighter-gibbon",
    "name": "Firefighter Gibbon",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Firefighter Gibbon.webp"
  },
  {
    "id": "vehicles-gummy-biplane",
    "name": "Gummy Biplane",
    "category": "vehicles",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Gummy Biplane.webp"
  },
  {
    "id": "pets-komodo-dragon",
    "name": "Komodo Dragon",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Komodo Dragon.webp"
  },
  {
    "id": "pets-evil-basilisk",
    "name": "Evil Basilisk",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Evil Basilisk.webp"
  },
  {
    "id": "pets-villain-gibbon",
    "name": "Villain Gibbon",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Villain Gibbon.webp"
  },
  {
    "id": "petwear-rain-hat",
    "name": "Rain Hat",
    "category": "petwear",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Rain Hat.webp"
  },
  {
    "id": "pets-white-sand-dollar",
    "name": "White Sand Dollar",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/White Sand Dollar.webp"
  },
  {
    "id": "toys-panda-pal",
    "name": "Panda Pal",
    "category": "toys",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Panda Pal.webp"
  },
  {
    "id": "petwear-sailor-cap",
    "name": "Sailor Cap",
    "category": "petwear",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Sailor Cap.webp"
  },
  {
    "id": "pets-golden-chowchow",
    "name": "Golden Chow-Chow",
    "category": "pets",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Golden Chow-Chow.webp"
  },
  {
    "id": "toys-skeleton-winged-glider",
    "name": "Skeleton Winged Glider",
    "category": "toys",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Skeleton Winged Glider.webp"
  },
  {
    "id": "pets-ram",
    "name": "Ram",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Ram.webp"
  },
  {
    "id": "strollers-reindeer-stroller",
    "name": "Reindeer Stroller",
    "category": "strollers",
    "value": 0.1186,
    "demand": 1,
    "image": "/items/Reindeer Stroller.webp"
  },
  {
    "id": "stickers-cow-sticker",
    "name": "Cow Sticker",
    "category": "stickers",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Cow Sticker.webp"
  },
  {
    "id": "petwear-strawberry-shortcake-bat-dragon-backpack",
    "name": "Strawberry Shortcake Bat Dragon Backpack",
    "category": "petwear",
    "value": 2.6682,
    "demand": 2,
    "image": "/items/Strawberry Shortcake Bat Dragon Backpack.webp"
  },
  {
    "id": "pets-leviathan",
    "name": "Leviathan",
    "category": "pets",
    "value": 0.722,
    "demand": 2,
    "image": "/items/Leviathan.webp"
  },
  {
    "id": "toys-money-rattle",
    "name": "Money Rattle",
    "category": "toys",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Money Rattle.webp"
  },
  {
    "id": "pets-st-bernard",
    "name": "St Bernard",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/St Bernard.webp"
  },
  {
    "id": "pets-owlbear",
    "name": "Owlbear",
    "category": "pets",
    "value": 2.0404,
    "demand": 2,
    "image": "/items/Owlbear.webp"
  },
  {
    "id": "pets-brown-springer-spaniel",
    "name": "Brown Springer Spaniel",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Brown Springer Spaniel.webp"
  },
  {
    "id": "pets-winter-fawn",
    "name": "Winter Fawn",
    "category": "pets",
    "value": 0.2668,
    "demand": 1,
    "image": "/items/Winter Fawn.webp"
  },
  {
    "id": "pets-2d-doggy",
    "name": "2D Doggy",
    "category": "pets",
    "value": 2.9821,
    "demand": 2,
    "image": "/items/2D Doggy.webp"
  },
  {
    "id": "pets-lunar-white-tiger",
    "name": "Lunar White Tiger",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Lunar White Tiger.webp"
  },
  {
    "id": "toys-octopus-plush",
    "name": "Octopus Plush",
    "category": "toys",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Octopus Plush.webp"
  },
  {
    "id": "eggs-ocean-egg",
    "name": "Ocean Egg",
    "category": "eggs",
    "value": 0.3211,
    "demand": 2,
    "image": "/items/Ocean Egg.webp"
  },
  {
    "id": "pets-flaming-fox",
    "name": "Flaming Fox",
    "category": "pets",
    "value": 1.0045,
    "demand": 2,
    "image": "/items/Flaming Fox.webp"
  },
  {
    "id": "pets-zodiac-minion-chick",
    "name": "Zodiac Minion Chick",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Zodiac Minion Chick.webp"
  },
  {
    "id": "vehicles-duck-scooter",
    "name": "Duck Scooter",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Duck Scooter.webp"
  },
  {
    "id": "pets-frozen-penguin",
    "name": "Frozen Penguin",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Frozen Penguin.webp"
  },
  {
    "id": "pets-jiggly-jerboa",
    "name": "Jiggly Jerboa",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Jiggly Jerboa.webp"
  },
  {
    "id": "pets-mushroom-friend",
    "name": "Mushroom Friend",
    "category": "pets",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Mushroom Friend.webp"
  },
  {
    "id": "vehicles-fidget-skateboard",
    "name": "Fidget Skateboard",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Fidget Skateboard.webp"
  },
  {
    "id": "pets-bakeneko",
    "name": "Bakeneko",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Bakeneko.webp"
  },
  {
    "id": "stickers-mermicorn-animated-sticker",
    "name": "Mermicorn Animated Sticker",
    "category": "stickers",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Mermicorn Animated Sticker.webp"
  },
  {
    "id": "pets-beluga-whale",
    "name": "Beluga Whale",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Beluga Whale.webp"
  },
  {
    "id": "petwear-santas-bow",
    "name": "Santa's Bow",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Santas Bow.webp"
  },
  {
    "id": "eggs-japan-egg",
    "name": "Japan Egg",
    "category": "eggs",
    "value": 0.2068,
    "demand": 2,
    "image": "/items/Japan Egg.webp"
  },
  {
    "id": "pets-orca",
    "name": "Orca",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Orca.webp"
  },
  {
    "id": "pets-dracula-parrot",
    "name": "Dracula Parrot",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Dracula Parrot.webp"
  },
  {
    "id": "strollers-pirate-captain-stroller",
    "name": "Pirate Captain Stroller",
    "category": "strollers",
    "value": 0.13,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-blue-ringed-octopus",
    "name": "Blue Ringed Octopus",
    "category": "pets",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Blue Ringed Octopus.webp"
  },
  {
    "id": "pets-urchin",
    "name": "Urchin",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Urchin.webp"
  },
  {
    "id": "pets-black-rhino",
    "name": "Black Rhino",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Black Rhino.webp"
  },
  {
    "id": "pets-bald-eagle",
    "name": "Bald Eagle",
    "category": "pets",
    "value": 3.2961,
    "demand": 3,
    "image": "/items/Bald Eagle.webp"
  },
  {
    "id": "pets-capybara",
    "name": "Capybara",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/Capybara.webp"
  },
  {
    "id": "pets-bluebottle",
    "name": "Bluebottle Fly",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Bluebottle Fly.webp"
  },
  {
    "id": "pets-strawberry-shortcake-ducky",
    "name": "Strawberry Shortcake Ducky",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Strawberry Shortcake Ducky.webp"
  },
  {
    "id": "strollers-balloon-stroller",
    "name": "Balloon Stroller",
    "category": "strollers",
    "value": 0.1767,
    "demand": 1,
    "image": "/items/Balloon Stroller.webp"
  },
  {
    "id": "pets-mouse",
    "name": "Mouse",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Mouse.webp"
  },
  {
    "id": "pets-borhyaena-gigantica",
    "name": "Borhyaena Gigantica",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Borhyaena Gigantica.webp"
  },
  {
    "id": "pets-old-king-coal",
    "name": "Old King Coal",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Old King Coal.webp"
  },
  {
    "id": "pets-puptune",
    "name": "Puptune",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Puptune.webp"
  },
  {
    "id": "pets-giant-gold-scarab",
    "name": "Giant Gold Scarab",
    "category": "pets",
    "value": 1.4126,
    "demand": 2,
    "image": "/items/Giant Gold Scarab.webp"
  },
  {
    "id": "pets-love-bird",
    "name": "Love Bird",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Love Bird.webp"
  },
  {
    "id": "pets-skelerex",
    "name": "Skele-Rex",
    "category": "pets",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Skele-Rex.webp"
  },
  {
    "id": "stickers-mochi-meow-tumble-animated-sticker",
    "name": "Mochi Meow Tumble Animated Sticker",
    "category": "stickers",
    "value": 0.3453,
    "demand": 2,
    "image": "/items/Mochi Meow Tumble Animated Sticker.webp"
  },
  {
    "id": "petwear-eaten-donut",
    "name": "Eaten Donut",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Eaten Donut.webp"
  },
  {
    "id": "pets-badger",
    "name": "Badger",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Badger.webp"
  },
  {
    "id": "food-sugar-skull-potion",
    "name": "Sugar Skull Potion",
    "category": "food",
    "value": 1.0987,
    "demand": 2,
    "image": "/items/Sugar Skull Potion.webp"
  },
  {
    "id": "vehicles-roblox-snowboard",
    "name": "Roblox Snowboard",
    "category": "vehicles",
    "value": 3.1391,
    "demand": 1,
    "image": "/items/Roblox Snowboard.webp"
  },
  {
    "id": "pets-zebra",
    "name": "Zebra",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Zebra.webp"
  },
  {
    "id": "vehicles-shooting-star-board",
    "name": "Shooting Star Board",
    "category": "vehicles",
    "value": 2.0404,
    "demand": 2,
    "image": "/items/Shooting Star Board.webp"
  },
  {
    "id": "pets-mini-schnauzer",
    "name": "Mini Schnauzer",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/Mini Schnauzer.webp"
  },
  {
    "id": "pets-woodpecker",
    "name": "Woodpecker",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Woodpecker.webp"
  },
  {
    "id": "petwear-gold-tiara",
    "name": "Gold Tiara",
    "category": "petwear",
    "value": 0.0942,
    "demand": 2,
    "image": "/items/Gold Tiara.webp"
  },
  {
    "id": "pets-puma",
    "name": "Puma",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Puma.webp"
  },
  {
    "id": "pets-glormy-hound",
    "name": "Glormy Hound",
    "category": "pets",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Glormy Hound.webp"
  },
  {
    "id": "potions-home-potion",
    "name": "Home Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-marabou-stork",
    "name": "Marabou Stork",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Marabou Stork.webp"
  },
  {
    "id": "pets-garden-snake",
    "name": "Garden Snake",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Garden Snake.webp"
  },
  {
    "id": "pets-candy-hare",
    "name": "Candy Hare",
    "category": "pets",
    "value": 0.8789,
    "demand": 2,
    "image": "/items/Candy Hare.webp"
  },
  {
    "id": "pets-golden-walrus",
    "name": "Golden Walrus",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Golden Walrus.webp"
  },
  {
    "id": "pets-lynx",
    "name": "Lynx",
    "category": "pets",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Lynx.webp"
  },
  {
    "id": "potions-potion",
    "name": "Fly Potion",
    "category": "potions",
    "value": 0.85,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-pilot-gull",
    "name": "Pilot Gull",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Pilot Gull.webp"
  },
  {
    "id": "pets-rattlesnake",
    "name": "Rattlesnake",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Rattlesnake.webp"
  },
  {
    "id": "vehicles-super-jetpack",
    "name": "Super Jetpack",
    "category": "vehicles",
    "value": 10.0451,
    "demand": 2,
    "image": "/items/Super Jetpack.webp"
  },
  {
    "id": "stickers-bat-dragon-sticker",
    "name": "Bat Dragon Sticker",
    "category": "stickers",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Bat Dragon Sticker.webp"
  },
  {
    "id": "pets-cuddly-candle",
    "name": "Cuddly Candle",
    "category": "pets",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Cuddly Candle.webp"
  },
  {
    "id": "strollers-spikey-chariot-stroller",
    "name": "Spikey Chariot Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-ostrich",
    "name": "Ostrich",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Ostrich.webp"
  },
  {
    "id": "food-chocolate-twist",
    "name": "Chocolate Twist",
    "category": "food",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Chocolate Twist.webp"
  },
  {
    "id": "vehicles-dogmobile",
    "name": "Dogmobile",
    "category": "vehicles",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Dogmobile.webp"
  },
  {
    "id": "vehicles-headless-horsemans-biplane",
    "name": "Headless Horseman's Biplane",
    "category": "vehicles",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Headless Horsemans Biplane.webp"
  },
  {
    "id": "pets-kakapo",
    "name": "Kakapo",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Kakapo.webp"
  },
  {
    "id": "toys-cat-plush",
    "name": "Cat Plush",
    "category": "toys",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Cat Plush.webp"
  },
  {
    "id": "food-chocolate-egg",
    "name": "Chocolate Egg",
    "category": "food",
    "value": 1.0987,
    "demand": 2,
    "image": "/items/Chocolate Egg.webp"
  },
  {
    "id": "pets-strawberry-penguin",
    "name": "Strawberry Penguin",
    "category": "pets",
    "value": 2.0404,
    "demand": 2,
    "image": "/items/Strawberry Penguin.webp"
  },
  {
    "id": "pets-basilisk",
    "name": "Basilisk",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Basilisk.webp"
  },
  {
    "id": "pets-bullfrog",
    "name": "Bullfrog",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Bullfrog.webp"
  },
  {
    "id": "pets-royal-corgi",
    "name": "Royal Corgi",
    "category": "pets",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Royal Corgi.webp"
  },
  {
    "id": "pets-bandicoot",
    "name": "Bandicoot",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Bandicoot.webp"
  },
  {
    "id": "vehicles-flying-cloud",
    "name": "Flying Cloud",
    "category": "vehicles",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Flying Cloud.webp"
  },
  {
    "id": "vehicles-snow-snowboard",
    "name": "Snow Snowboard",
    "category": "vehicles",
    "value": 3.453,
    "demand": 1,
    "image": "/items/Snow Snowboard.webp"
  },
  {
    "id": "stickers-balloon-unicorn-sticker",
    "name": "Balloon Unicorn Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Balloon Unicorn Sticker.webp"
  },
  {
    "id": "pets-royal-mistletroll",
    "name": "Royal Mistletroll",
    "category": "pets",
    "value": 4.2378,
    "demand": 3,
    "image": "/items/Royal Mistletroll.webp"
  },
  {
    "id": "pets-angler-fish",
    "name": "Angler Fish",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Angler Fish.webp"
  },
  {
    "id": "food-golden-wheat",
    "name": "Golden Wheat",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Golden Wheat.webp"
  },
  {
    "id": "pets-fire-foal",
    "name": "Fire Foal",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Fire Foal.webp"
  },
  {
    "id": "vehicles-festive-deliveries-sleigh",
    "name": "Festive Deliveries Sleigh",
    "category": "vehicles",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Festive Deliveries Sleigh.webp"
  },
  {
    "id": "petwear-golden-hair",
    "name": "Golden Hair",
    "category": "petwear",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Golden Hair.webp"
  },
  {
    "id": "pets-diamond-ladybug",
    "name": "Diamond Ladybug",
    "category": "pets",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Diamond Ladybug.webp"
  },
  {
    "id": "pets-dancing-dragon",
    "name": "Dancing Dragon",
    "category": "pets",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Dancing Dragon.webp"
  },
  {
    "id": "eggs-golden-egg",
    "name": "Golden Egg",
    "category": "eggs",
    "value": 0.1765,
    "demand": 1,
    "image": "/items/Golden Egg.webp"
  },
  {
    "id": "pets-ancient-dragon",
    "name": "Ancient Dragon",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Ancient Dragon.webp"
  },
  {
    "id": "stickers-well-actually-walrus-sticker",
    "name": "Well, Actually Walrus Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Well, Actually Walrus Sticker.webp"
  },
  {
    "id": "pets-chocolate-chowchow",
    "name": "Chocolate Chow-Chow",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Chocolate Chow-Chow.webp"
  },
  {
    "id": "pets-river-otter",
    "name": "River Otter",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/River Otter.webp"
  },
  {
    "id": "pets-snowball-pug",
    "name": "Snowball Pug",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Snowball Pug.webp"
  },
  {
    "id": "petwear-cowboy-saddle",
    "name": "Cowboy Saddle",
    "category": "petwear",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Cowboy Saddle.webp"
  },
  {
    "id": "pets-banded-palm-civet",
    "name": "Banded Palm Civet",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Banded Palm Civet.webp"
  },
  {
    "id": "pets-red-crowned-crane",
    "name": "Red Crowned Crane",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Red Crowned Crane.webp"
  },
  {
    "id": "pets-frost-fury",
    "name": "Frost Fury",
    "category": "pets",
    "value": 2.0404,
    "demand": 2,
    "image": "/items/Frost Fury.webp"
  },
  {
    "id": "toys-easter-bunny-plush",
    "name": "Easter Bunny Plush",
    "category": "toys",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Easter Bunny Plush.webp"
  },
  {
    "id": "food-ash-zebra-bait",
    "name": "Ash Zebra Bait",
    "category": "food",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Ash Zebra Bait.webp"
  },
  {
    "id": "pets-gecko-ducky",
    "name": "Gecko Ducky",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Gecko Ducky.webp"
  },
  {
    "id": "pets-cuteacabra",
    "name": "Cute-A-Cabra",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Cute-A-Cabra.webp"
  },
  {
    "id": "vehicles-orange-snowboard",
    "name": "Orange Neon Snowboard",
    "category": "vehicles",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Orange Neon Snowboard.webp"
  },
  {
    "id": "pets-hermit-crab",
    "name": "Hermit Crab",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Hermit Crab.webp"
  },
  {
    "id": "pets-golden-king-penguin",
    "name": "Golden King Penguin",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Golden King Penguin.webp"
  },
  {
    "id": "pets-stingray",
    "name": "Stingray",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Stingray.webp"
  },
  {
    "id": "vehicles-doge-scooter",
    "name": "Doge Scooter",
    "category": "vehicles",
    "value": 0.6278,
    "demand": 1,
    "image": "/items/Doge Scooter.webp"
  },
  {
    "id": "pets-ox",
    "name": "Ox",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Ox.webp"
  },
  {
    "id": "food-subzero-popsicle-bait",
    "name": "Subzero Popsicle Bait",
    "category": "food",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Subzero Popsicle Bait.webp"
  },
  {
    "id": "pets-diamond-griffin",
    "name": "Diamond Griffin",
    "category": "pets",
    "value": 0.2982,
    "demand": 1,
    "image": "/items/Diamond Griffin.webp"
  },
  {
    "id": "pets-yellowlipped-sea-krait",
    "name": "Yellow-Lipped Sea Krait",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Yellow-Lipped Sea Krait.webp"
  },
  {
    "id": "strollers-ufo-stroller",
    "name": "UFO Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-spider-crab",
    "name": "Spider Crab",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Spider Crab.webp"
  },
  {
    "id": "pets-eggnog-hare",
    "name": "Eggnog Hare",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Eggnog Hare.webp"
  },
  {
    "id": "pets-cupid-dragon",
    "name": "Cupid Dragon",
    "category": "pets",
    "value": 2.1974,
    "demand": 2,
    "image": "/items/Cupid Dragon.webp"
  },
  {
    "id": "pets-fennec-fox",
    "name": "Fennec Fox",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Fennec Fox.webp"
  },
  {
    "id": "pets-burger-bear",
    "name": "Burger Bear",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Burger Bear.webp"
  },
  {
    "id": "stickers-panda-sticker",
    "name": "Panda Sticker",
    "category": "stickers",
    "value": 0.0942,
    "demand": 2,
    "image": "/items/Panda Sticker.webp"
  },
  {
    "id": "eggs-basic-egg",
    "name": "Basic Egg",
    "category": "eggs",
    "value": 0.0252,
    "demand": 1,
    "image": "/items/Basic Egg.webp"
  },
  {
    "id": "petwear-science-hat",
    "name": "Science Hat",
    "category": "petwear",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Science Hat.webp"
  },
  {
    "id": "stickers-parrot-sticker",
    "name": "Parrot Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Parrot Sticker.webp"
  },
  {
    "id": "strollers-car-stroller",
    "name": "Car Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-satellite-spinner",
    "name": "Satellite Spinner",
    "category": "petwear",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Satellite Spinner.webp"
  },
  {
    "id": "pets-gummy-guana",
    "name": "Gummy Guana",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Gummy Guana.webp"
  },
  {
    "id": "petwear-ghost-hat",
    "name": "Ghost Hat",
    "category": "petwear",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Ghost Hat.webp"
  },
  {
    "id": "petwear-pancake-stack",
    "name": "Pancake Stack",
    "category": "petwear",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Pancake Stack.webp"
  },
  {
    "id": "pets-alicorn",
    "name": "Alicorn",
    "category": "pets",
    "value": 0.2668,
    "demand": 1,
    "image": "/items/Alicorn.webp"
  },
  {
    "id": "pets-ice-wolf",
    "name": "Ice Wolf",
    "category": "pets",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Ice Wolf.webp"
  },
  {
    "id": "pets-kiwi",
    "name": "Kiwi",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Kiwi.webp"
  },
  {
    "id": "pets-caelum-cervi",
    "name": "Caelum Cervi",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Caelum Cervi.webp"
  },
  {
    "id": "pets-pupcake",
    "name": "Pupcake",
    "category": "pets",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Pupcake.webp"
  },
  {
    "id": "strollers-unicorn-stroller",
    "name": "Unicorn Stroller",
    "category": "strollers",
    "value": 0.8226,
    "demand": 2,
    "image": "/items/Unicorn Stroller.webp"
  },
  {
    "id": "stickers-pig-sticker",
    "name": "Pig Sticker",
    "category": "stickers",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Pig Sticker.webp"
  },
  {
    "id": "pets-trex",
    "name": "T-Rex",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/T-Rex.webp"
  },
  {
    "id": "strollers-potion-stroller",
    "name": "Potion Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-halloween-golden-mummy-cat",
    "name": "Halloween Golden Mummy Cat",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Halloween Golden Mummy Cat.webp"
  },
  {
    "id": "stickers-shiba-inu-sticker",
    "name": "Shiba Inu Sticker",
    "category": "stickers",
    "value": 0.0502,
    "demand": 1,
    "image": "/items/Shiba Inu Sticker.webp"
  },
  {
    "id": "pets-tasmanian-tiger",
    "name": "Tasmanian Tiger",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Tasmanian Tiger.webp"
  },
  {
    "id": "petwear-energy-aura-feet",
    "name": "Energy Aura Feet",
    "category": "petwear",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Energy Aura Feet.webp"
  },
  {
    "id": "pets-golden-ladybug",
    "name": "Golden Ladybug",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Golden Ladybug.webp"
  },
  {
    "id": "strollers-floating-hand-stroller",
    "name": "Floating Hand Stroller",
    "category": "strollers",
    "value": 0.6527,
    "demand": 2,
    "image": "/items/Floating Hand Stroller.webp"
  },
  {
    "id": "pets-harp-seal",
    "name": "Harp Seal",
    "category": "pets",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Harp Seal.webp"
  },
  {
    "id": "pets-pretty-pony",
    "name": "Pretty Pony",
    "category": "pets",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Pretty Pony.webp"
  },
  {
    "id": "pets-seagull",
    "name": "Seagull",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Seagull.webp"
  },
  {
    "id": "petwear-cotton-candy-hat",
    "name": "Cotton Candy Hat",
    "category": "petwear",
    "value": 0.3767,
    "demand": 2,
    "image": "/items/Cotton Candy Hat.webp"
  },
  {
    "id": "pets-aestus",
    "name": "Aestus",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Aestus.webp"
  },
  {
    "id": "vehicles-fossil-paw-helicopter",
    "name": "Fossil Paw Helicopter",
    "category": "vehicles",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Fossil Paw Helicopter.webp"
  },
  {
    "id": "pets-happy-duckling",
    "name": "Happy Duckling",
    "category": "pets",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/Happy Duckling.webp"
  },
  {
    "id": "petwear-dancing-tube-hat",
    "name": "Dancing Tube Hat",
    "category": "petwear",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Dancing Tube Hat.webp"
  },
  {
    "id": "pets-tarsier",
    "name": "Tarsier",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Tarsier.webp"
  },
  {
    "id": "pets-haetae",
    "name": "Haetae",
    "category": "pets",
    "value": 38.9248,
    "demand": 3,
    "image": "/items/Haetae.webp"
  },
  {
    "id": "pets-mule",
    "name": "Mule",
    "category": "pets",
    "value": 0.722,
    "demand": 2,
    "image": "/items/Mule.webp"
  },
  {
    "id": "pets-lamb",
    "name": "Lamb",
    "category": "pets",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Lamb.webp"
  },
  {
    "id": "pets-mahi-mahi",
    "name": "Mahi Mahi",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Mahi Mahi.webp"
  },
  {
    "id": "strollers-droplet-stroller",
    "name": "Droplet Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-toy-monkey",
    "name": "Toy Monkey",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/Toy Monkey.webp"
  },
  {
    "id": "pets-scarecrow-horse",
    "name": "Scarecrow Horse",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Scarecrow Horse.webp"
  },
  {
    "id": "pets-starmite",
    "name": "Starmite",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Starmite.webp"
  },
  {
    "id": "pets-angus-cow",
    "name": "Angus Cow",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Angus Cow.webp"
  },
  {
    "id": "petwear-pink-butterfly-wings",
    "name": "Pink Butterfly Wings",
    "category": "petwear",
    "value": 0.157,
    "demand": 2,
    "image": "/items/Pink Butterfly Wings.webp"
  },
  {
    "id": "pets-mexican-wolf",
    "name": "Mexican Wolf",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Mexican Wolf.webp"
  },
  {
    "id": "vehicles-ice-scooter",
    "name": "Ice Scooter",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Ice Scooter.webp"
  },
  {
    "id": "pets-lobster",
    "name": "Lobster",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Lobster.webp"
  },
  {
    "id": "vehicles-green-scooter",
    "name": "Neon Green Scooter",
    "category": "vehicles",
    "value": 0.7534,
    "demand": 1,
    "image": "/items/Neon Green Scooter.webp"
  },
  {
    "id": "stickers-shadow-dragon-animated-sticker",
    "name": "Shadow Dragon Animated Sticker",
    "category": "stickers",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Shadow Dragon Animated Sticker.webp"
  },
  {
    "id": "pets-halloween-white-ghost-dragon",
    "name": "Halloween White Ghost Dragon",
    "category": "pets",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Halloween White Ghost Dragon.webp"
  },
  {
    "id": "strollers-popsicle-stroller",
    "name": "Popsicle Stroller",
    "category": "strollers",
    "value": 0.2379,
    "demand": 1,
    "image": "/items/Popsicle Stroller.webp"
  },
  {
    "id": "pets-binturong",
    "name": "Binturong",
    "category": "pets",
    "value": 0.5336,
    "demand": 2,
    "image": "/items/Binturong.webp"
  },
  {
    "id": "strollers-french-fries-stroller",
    "name": "French Fries Stroller",
    "category": "strollers",
    "value": 0.2517,
    "demand": 1,
    "image": "/items/French Fries Stroller.webp"
  },
  {
    "id": "food-chocolate",
    "name": "Chocolate",
    "category": "food",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Chocolate.webp"
  },
  {
    "id": "vehicles-glass-scooter",
    "name": "Glass Scooter",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Glass Scooter.webp"
  },
  {
    "id": "vehicles-black-snowboard",
    "name": "Black Snowboard",
    "category": "vehicles",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Black Snowboard.webp"
  },
  {
    "id": "vehicles-rgb-monster-truck",
    "name": "RGB Monster Truck",
    "category": "vehicles",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/RGB Monster Truck.webp"
  },
  {
    "id": "strollers-bunny-stroller",
    "name": "Bunny Stroller",
    "category": "strollers",
    "value": 0.642,
    "demand": 2,
    "image": "/items/Bunny Stroller.webp"
  },
  {
    "id": "pets-sweetheart-rat",
    "name": "Sweetheart Rat",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Sweetheart Rat.webp"
  },
  {
    "id": "pets-birthday-butterfly-2024",
    "name": "Birthday Butterfly 2024",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Birthday Butterfly 2024.webp"
  },
  {
    "id": "pets-red-dutch-guinea-pig",
    "name": "Red Dutch Guinea Pig",
    "category": "pets",
    "value": 3.453,
    "demand": 3,
    "image": "/items/Red Dutch Guinea Pig.webp"
  },
  {
    "id": "pets-golden-jaguar",
    "name": "Golden Jaguar",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Golden Jaguar.webp"
  },
  {
    "id": "eggs-aztec-egg",
    "name": "Aztec Egg",
    "category": "eggs",
    "value": 0.0321,
    "demand": 1,
    "image": "/items/Aztec Egg.webp"
  },
  {
    "id": "petwear-heart-lock-necklace",
    "name": "Heart Lock Necklace",
    "category": "petwear",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Heart Lock Necklace.webp"
  },
  {
    "id": "pets-shiver-wolf",
    "name": "Shiver Wolf",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Shiver Wolf.webp"
  },
  {
    "id": "pets-golden-griffin",
    "name": "Golden Griffin",
    "category": "pets",
    "value": 0.2668,
    "demand": 1,
    "image": "/items/Golden Griffin.webp"
  },
  {
    "id": "petwear-chef-hat",
    "name": "Chef Hat",
    "category": "petwear",
    "value": 0.7534,
    "demand": 2,
    "image": "/items/Chef Hat.webp"
  },
  {
    "id": "pets-pineapple-owl",
    "name": "Pineapple Owl",
    "category": "pets",
    "value": 1.3498,
    "demand": 2,
    "image": "/items/Pineapple Owl.webp"
  },
  {
    "id": "pets-candyfloss-chick",
    "name": "Candyfloss Chick",
    "category": "pets",
    "value": 6.5921,
    "demand": 3,
    "image": "/items/Candyfloss Chick.webp"
  },
  {
    "id": "petwear-aviator-hat",
    "name": "Aviator Hat",
    "category": "petwear",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Aviator Hat.webp"
  },
  {
    "id": "stickers-fire-dimension-sticker-pack",
    "name": "Fire Dimension Sticker Pack",
    "category": "stickers",
    "value": 0.022,
    "demand": 1,
    "image": "/items/Fire Dimension Sticker Pack.webp"
  },
  {
    "id": "pets-black-macaque",
    "name": "Black Macaque",
    "category": "pets",
    "value": 0.4238,
    "demand": 2,
    "image": "/items/Black Macaque.webp"
  },
  {
    "id": "toys-tea-party-set",
    "name": "Tea Party Set",
    "category": "toys",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Tea Party Set.webp"
  },
  {
    "id": "pets-husky",
    "name": "Husky",
    "category": "pets",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Husky.webp"
  },
  {
    "id": "strollers-tractor-stroller",
    "name": "Tractor Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-thinking-hat",
    "name": "Thinking Hat",
    "category": "petwear",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Thinking Hat.webp"
  },
  {
    "id": "petwear-kraken-hat",
    "name": "Kraken Hat",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Kraken Hat.webp"
  },
  {
    "id": "pets-eel",
    "name": "Eel",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Eel.webp"
  },
  {
    "id": "toys-unicorn-plush",
    "name": "Unicorn Plush",
    "category": "toys",
    "value": 1.0987,
    "demand": 2,
    "image": "/items/Unicorn Plush.webp"
  },
  {
    "id": "vehicles-lavender-teapot-carriage",
    "name": "Lavender Teapot Carriage",
    "category": "vehicles",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Lavender Teapot Carriage.webp"
  },
  {
    "id": "pets-gingerbread-mouse",
    "name": "Gingerbread Mouse",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Gingerbread Mouse.webp"
  },
  {
    "id": "pets-sado-mole",
    "name": "Sado Mole",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Sado Mole.webp"
  },
  {
    "id": "pets-blossom-snake",
    "name": "Blossom Snake",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Blossom Snake.webp"
  },
  {
    "id": "pets-toy-poodle",
    "name": "Toy Poodle",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Toy Poodle.webp"
  },
  {
    "id": "food-golden-bone",
    "name": "Golden Bone",
    "category": "food",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/Golden Bone.webp"
  },
  {
    "id": "pets-brownchested-pheasant",
    "name": "Brown-Chested Pheasant",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Brown-Chested Pheasant.webp"
  },
  {
    "id": "pets-gaelic-fae",
    "name": "Gaelic Fae",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Gaelic Fae.webp"
  },
  {
    "id": "petwear-fishbone-badge",
    "name": "Fishbone Badge",
    "category": "petwear",
    "value": 0.1883,
    "demand": 2,
    "image": "/items/Fishbone Badge.webp"
  },
  {
    "id": "strollers-vampire-stroller",
    "name": "Vampire Stroller",
    "category": "strollers",
    "value": 1.9106,
    "demand": 2,
    "image": "/items/Vampire Stroller.webp"
  },
  {
    "id": "pets-undead-jousting-horse",
    "name": "Undead Jousting Horse",
    "category": "pets",
    "value": 19.4624,
    "demand": 3,
    "image": "/items/Undead Jousting Horse.webp"
  },
  {
    "id": "strollers-magic-carpet-stroller",
    "name": "Magic Carpet Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-weevil",
    "name": "Weevil",
    "category": "pets",
    "value": 0.2668,
    "demand": 1,
    "image": "/items/Weevil.webp"
  },
  {
    "id": "pets-merry-mistletroll",
    "name": "Merry Mistletroll",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Merry Mistletroll.webp"
  },
  {
    "id": "potions-goofy-potion",
    "name": "Goofy Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-lunar-moon-bear",
    "name": "Lunar Moon Bear",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Lunar Moon Bear.webp"
  },
  {
    "id": "vehicles-santas-sleigh",
    "name": "Santa's Sleigh",
    "category": "vehicles",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Santas Sleigh.webp"
  },
  {
    "id": "vehicles-royal-crown-carriage",
    "name": "Royal Crown Carriage",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Royal Crown Carriage.webp"
  },
  {
    "id": "pets-gargoyle",
    "name": "Gargoyle",
    "category": "pets",
    "value": 0.565,
    "demand": 1,
    "image": "/items/Gargoyle.webp"
  },
  {
    "id": "pets-diamond-king-penguin",
    "name": "Diamond King Penguin",
    "category": "pets",
    "value": 0.722,
    "demand": 2,
    "image": "/items/Diamond King Penguin.webp"
  },
  {
    "id": "petwear-angel-wings",
    "name": "Angel Wings",
    "category": "petwear",
    "value": 11.3007,
    "demand": 3,
    "image": "/items/Angel Wings.webp"
  },
  {
    "id": "vehicles-white-scooter",
    "name": "White Scooter",
    "category": "vehicles",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/White Scooter.webp"
  },
  {
    "id": "pets-waffle-wyrm",
    "name": "Waffle Wyrm",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Waffle Wyrm.webp"
  },
  {
    "id": "pets-partridge",
    "name": "Partridge",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Partridge.webp"
  },
  {
    "id": "pets-ocelot",
    "name": "Ocelot",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Ocelot.webp"
  },
  {
    "id": "strollers-duck-stroller",
    "name": "Duck Stroller",
    "category": "strollers",
    "value": 0.9307,
    "demand": 2,
    "image": "/items/Duck Stroller.webp"
  },
  {
    "id": "pets-hydra",
    "name": "Hydra",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Hydra.webp"
  },
  {
    "id": "pets-shetland-pony-light-brown",
    "name": "Shetland Pony Light Brown",
    "category": "pets",
    "value": 0.565,
    "demand": 1,
    "image": "/items/Shetland Pony Light Brown.webp"
  },
  {
    "id": "pets-clubtail-dragonfly",
    "name": "Clubtail Dragonfly",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Clubtail Dragonfly.webp"
  },
  {
    "id": "pets-muskrat",
    "name": "Muskrat",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Muskrat.webp"
  },
  {
    "id": "pets-king-penguin",
    "name": "King Penguin",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/King Penguin.webp"
  },
  {
    "id": "gifts-ox-box",
    "name": "Ox Box",
    "category": "gifts",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Ox Box.webp"
  },
  {
    "id": "petwear-2022-birthday-5-badge",
    "name": "2022 Birthday 5 Badge",
    "category": "petwear",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/2022 Birthday 5 Badge.webp"
  },
  {
    "id": "vehicles-candy-snowmobile",
    "name": "Candy Snowmobile",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Candy Snowmobile.webp"
  },
  {
    "id": "pets-rock",
    "name": "Rock",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Rock.webp"
  },
  {
    "id": "pets-winged-horse",
    "name": "Winged Horse",
    "category": "pets",
    "value": 0.5336,
    "demand": 2,
    "image": "/items/Winged Horse.webp"
  },
  {
    "id": "vehicles-pink-scooter",
    "name": "Pink Scooter",
    "category": "vehicles",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Pink Scooter.webp"
  },
  {
    "id": "pets-fleur-de-ice",
    "name": "Fleur De Ice",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Fleur De Ice.webp"
  },
  {
    "id": "pets-water-rabbit",
    "name": "Water Rabbit",
    "category": "pets",
    "value": 0.5336,
    "demand": 2,
    "image": "/items/Water Rabbit.webp"
  },
  {
    "id": "pets-kage-crow",
    "name": "Kage Crow",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Kage Crow.webp"
  },
  {
    "id": "pets-shadow-dragon-ducky",
    "name": "Shadow Dragon Ducky",
    "category": "pets",
    "value": 0.4238,
    "demand": 2,
    "image": "/items/Shadow Dragon Ducky.webp"
  },
  {
    "id": "stickers-pretty-please-snowball-sticker",
    "name": "Pretty Please Snowball Sticker",
    "category": "stickers",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Pretty Please Snowball Sticker.webp"
  },
  {
    "id": "vehicles-rocket-sled",
    "name": "Rocket Sled",
    "category": "vehicles",
    "value": 8.7895,
    "demand": 2,
    "image": "/items/Rocket Sled.webp"
  },
  {
    "id": "pets-blue-whale",
    "name": "Blue Whale",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Blue Whale.webp"
  },
  {
    "id": "pets-pine-marten",
    "name": "Pine Marten",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Pine Marten.webp"
  },
  {
    "id": "pets-red-fox",
    "name": "Red Fox",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Red Fox.webp"
  },
  {
    "id": "stickers-cherry-blossom-tree-sticker",
    "name": "Cherry Blossom Tree Sticker",
    "category": "stickers",
    "value": 0.0157,
    "demand": 1,
    "image": "/items/Cherry Blossom Tree Sticker.webp"
  },
  {
    "id": "pets-castle-hermit-crab",
    "name": "Castle Hermit Crab",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Castle Hermit Crab.webp"
  },
  {
    "id": "pets-flower-power-duckling",
    "name": "Flower Power Duckling",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Flower Power Duckling.webp"
  },
  {
    "id": "pets-stygian-owl",
    "name": "Stygian Owl",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Stygian Owl.webp"
  },
  {
    "id": "petwear-jeffs-nametag",
    "name": "Jeff's Nametag",
    "category": "petwear",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Jeffs Nametag.webp"
  },
  {
    "id": "pets-diamond-amazon",
    "name": "Diamond Amazon",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Diamond Amazon.webp"
  },
  {
    "id": "pets-baku",
    "name": "Baku",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Baku.webp"
  },
  {
    "id": "vehicles-hovertible",
    "name": "Hovertible",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Hovertible.webp"
  },
  {
    "id": "pets-monkey-king",
    "name": "Monkey King",
    "category": "pets",
    "value": 9.4173,
    "demand": 2,
    "image": "/items/Monkey King.webp"
  },
  {
    "id": "pets-lion-cub",
    "name": "Lion Cub",
    "category": "pets",
    "value": 2.6682,
    "demand": 2,
    "image": "/items/Lion Cub.webp"
  },
  {
    "id": "pets-volcanic-rhino",
    "name": "Volcanic Rhino",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Volcanic Rhino.webp"
  },
  {
    "id": "vehicles-giant-cheetah-mount",
    "name": "Giant Cheetah Mount",
    "category": "vehicles",
    "value": 4.7086,
    "demand": 2,
    "image": "/items/Giant Cheetah Mount.webp"
  },
  {
    "id": "pets-ginger-cat",
    "name": "Ginger Cat",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Ginger Cat.webp"
  },
  {
    "id": "pets-feesh",
    "name": "Feesh",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Feesh.webp"
  },
  {
    "id": "petwear-sack-of-cash",
    "name": "Sack of Cash",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Sack of Cash.webp"
  },
  {
    "id": "gifts-premium-gibbon-box",
    "name": "Premium Gibbon Box",
    "category": "gifts",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Premium Gibbon Box.webp"
  },
  {
    "id": "pets-ehecatl",
    "name": "Ehecatl",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Ehecatl.webp"
  },
  {
    "id": "food-broken-egg",
    "name": "Broken Egg",
    "category": "food",
    "value": 0.8162,
    "demand": 1,
    "image": "/items/Broken Egg.webp"
  },
  {
    "id": "pets-australian-kelpie",
    "name": "Australian Kelpie",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Australian Kelpie.webp"
  },
  {
    "id": "pets-goldfish",
    "name": "Goldfish",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Goldfish.webp"
  },
  {
    "id": "pets-fairy-bat-dragon",
    "name": "Fairy Bat Dragon",
    "category": "pets",
    "value": 4.7086,
    "demand": 3,
    "image": "/items/Fairy Bat Dragon.webp"
  },
  {
    "id": "pets-lion",
    "name": "Lion",
    "category": "pets",
    "value": 4.7086,
    "demand": 3,
    "image": "/items/Lion.webp"
  },
  {
    "id": "pets-vampire-dragon",
    "name": "Vampire Dragon",
    "category": "pets",
    "value": 3.1391,
    "demand": 3,
    "image": "/items/Vampire Dragon.webp"
  },
  {
    "id": "food-stripes-egg",
    "name": "Stripes Egg",
    "category": "food",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Stripes Egg.webp"
  },
  {
    "id": "pets-majestic-pony",
    "name": "Majestic Pony",
    "category": "pets",
    "value": 1.0359,
    "demand": 2,
    "image": "/items/Majestic Pony.webp"
  },
  {
    "id": "toys-candy-flare-paint",
    "name": "Candy Flare Mega Neon Paint",
    "category": "toys",
    "value": 0.2511,
    "demand": 3,
    "image": "/items/Candy Flare Mega Neon Paint.webp"
  },
  {
    "id": "stickers-sasquatch-sticker",
    "name": "Sasquatch Sticker",
    "category": "stickers",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Sasquatch Sticker.webp"
  },
  {
    "id": "pets-gibbon",
    "name": "Gibbon",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Gibbon.webp"
  },
  {
    "id": "vehicles-rose-petal-carriage",
    "name": "Rose Petal Carriage",
    "category": "vehicles",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Rose Petal Carriage.webp"
  },
  {
    "id": "pets-sloth",
    "name": "Sloth",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Sloth.webp"
  },
  {
    "id": "pets-kappakid",
    "name": "Kappakid",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Kappakid.webp"
  },
  {
    "id": "petwear-gold-fairy-crown",
    "name": "Gold Fairy Crown",
    "category": "petwear",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Gold Fairy Crown.webp"
  },
  {
    "id": "pets-criosphinx",
    "name": "Criosphinx",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Criosphinx.webp"
  },
  {
    "id": "pets-purrowl",
    "name": "Purrowl",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Purrowl.webp"
  },
  {
    "id": "pets-chocolate-chip-bat-dragon",
    "name": "Chocolate Chip Bat Dragon",
    "category": "pets",
    "value": 9.7312,
    "demand": 3,
    "image": "/items/Chocolate Chip Bat Dragon.webp"
  },
  {
    "id": "pets-hot-doggo",
    "name": "Hot Doggo",
    "category": "pets",
    "value": 12.8703,
    "demand": 3,
    "image": "/items/Hot Doggo.webp"
  },
  {
    "id": "pets-tawny-frogmouth",
    "name": "Tawny Frogmouth",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Tawny Frogmouth.webp"
  },
  {
    "id": "gifts-pet-handler-pro-certificate",
    "name": "Pet Handler Pro Certificate",
    "category": "gifts",
    "value": 0.7534,
    "demand": 3,
    "image": "/items/Pet Handler Pro Certificate.webp"
  },
  {
    "id": "petwear-blue-butterfly-wings",
    "name": "Blue Butterfly Wings",
    "category": "petwear",
    "value": 0.5023,
    "demand": 2,
    "image": "/items/Blue Butterfly Wings.webp"
  },
  {
    "id": "pets-jousting-horse",
    "name": "Jousting Horse",
    "category": "pets",
    "value": 1.444,
    "demand": 2,
    "image": "/items/Jousting Horse.webp"
  },
  {
    "id": "petwear-2022-birthday-party-horn",
    "name": "2022 Birthday Party Horn",
    "category": "petwear",
    "value": 4.8656,
    "demand": 3,
    "image": "/items/2022 Birthday Party Horn.webp"
  },
  {
    "id": "pets-princess-capuchin-monkey",
    "name": "Princess Capuchin Monkey",
    "category": "pets",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Princess Capuchin Monkey.webp"
  },
  {
    "id": "petwear-tutu",
    "name": "Tutu",
    "category": "petwear",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Tutu.webp"
  },
  {
    "id": "pets-onza",
    "name": "Onza",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Onza.webp"
  },
  {
    "id": "toys-paint-sealer",
    "name": "Paint Sealer",
    "category": "toys",
    "value": 0.0439,
    "demand": 2,
    "image": "/items/Paint Sealer.webp"
  },
  {
    "id": "pets-cherub-chipmunk",
    "name": "Cherub Chipmunk",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Cherub Chipmunk.webp"
  },
  {
    "id": "pets-ghost-dog",
    "name": "Ghost Dog",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Ghost Dog.webp"
  },
  {
    "id": "strollers-pelican-stroller",
    "name": "Pelican Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "stickers-space-whale-sticker",
    "name": "Space Whale Sticker",
    "category": "stickers",
    "value": 0.157,
    "demand": 2,
    "image": "/items/Space Whale Sticker.webp"
  },
  {
    "id": "stickers-halloween-2024-sticker-pack",
    "name": "Halloween 2024 Sticker Pack",
    "category": "stickers",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Halloween 2024 Sticker Pack.webp"
  },
  {
    "id": "pets-albino-gorilla",
    "name": "Albino Gorilla",
    "category": "pets",
    "value": 0.9417,
    "demand": 2,
    "image": "/items/Albino Gorilla.webp"
  },
  {
    "id": "stickers-cherry-blossom-flower-sticker",
    "name": "Cherry Blossom Flower Sticker",
    "category": "stickers",
    "value": 0.0157,
    "demand": 1,
    "image": "/items/Cherry Blossom Flower Sticker.webp"
  },
  {
    "id": "pets-octopus",
    "name": "Octopus",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Octopus.webp"
  },
  {
    "id": "pets-peacock",
    "name": "Peacock",
    "category": "pets",
    "value": 0.565,
    "demand": 2,
    "image": "/items/Peacock.webp"
  },
  {
    "id": "pets-ibex",
    "name": "Ibex",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Ibex.webp"
  },
  {
    "id": "pets-ankylosaurus",
    "name": "Ankylosaurus",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Ankylosaurus.webp"
  },
  {
    "id": "pets-great-pyrenees",
    "name": "Great Pyrenees",
    "category": "pets",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Great Pyrenees.webp"
  },
  {
    "id": "strollers-wheelbarrow-stroller",
    "name": "Wheelbarrow Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-police-cap",
    "name": "Police Cap",
    "category": "petwear",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Police Cap.webp"
  },
  {
    "id": "pets-albatross",
    "name": "Albatross",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Albatross.webp"
  },
  {
    "id": "pets-priceless-shrimp",
    "name": "Priceless Shrimp",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Priceless Shrimp.webp"
  },
  {
    "id": "pets-frost-phoenix",
    "name": "Frost Phoenix",
    "category": "pets",
    "value": 0.6906,
    "demand": 2,
    "image": "/items/Frost Phoenix.webp"
  },
  {
    "id": "toys-lemonade-stand",
    "name": "Lemonade Stand",
    "category": "toys",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Lemonade Stand.webp"
  },
  {
    "id": "vehicles-crabby-cruiser",
    "name": "Crabby Cruiser",
    "category": "vehicles",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Crabby Cruiser.webp"
  },
  {
    "id": "pets-angus-calf",
    "name": "Angus Calf",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Angus Calf.webp"
  },
  {
    "id": "pets-rat",
    "name": "Rat",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Rat.webp"
  },
  {
    "id": "pets-billy-goat",
    "name": "Billy Goat",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Billy Goat.webp"
  },
  {
    "id": "toys-strawberry-toast-flying-disc",
    "name": "Strawberry Toast Flying Disc",
    "category": "toys",
    "value": 0.1256,
    "demand": 1,
    "image": "/items/Strawberry Toast Flying Disc.webp"
  },
  {
    "id": "pets-diamond-albatross",
    "name": "Diamond Albatross",
    "category": "pets",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Diamond Albatross.webp"
  },
  {
    "id": "stickers-kitsune-sticker",
    "name": "Kitsune Sticker",
    "category": "stickers",
    "value": 0.157,
    "demand": 2,
    "image": "/items/Kitsune Sticker.webp"
  },
  {
    "id": "vehicles-dragon-train",
    "name": "Dragon Train",
    "category": "vehicles",
    "value": 1.5695,
    "demand": 1,
    "image": "/items/Dragon Train.webp"
  },
  {
    "id": "pets-pig",
    "name": "Pig",
    "category": "pets",
    "value": 2.9821,
    "demand": 3,
    "image": "/items/Pig.webp"
  },
  {
    "id": "toys-homeing-rocket",
    "name": "Homeing Rocket",
    "category": "toys",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Homeing Rocket.webp"
  },
  {
    "id": "strollers-snowman-stroller",
    "name": "Snowman Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-halloween-white-skull-hat",
    "name": "Halloween White Skull Hat",
    "category": "petwear",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Halloween White Skull Hat.webp"
  },
  {
    "id": "pets-2d-kitty",
    "name": "2D Kitty",
    "category": "pets",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/2D Kitty.webp"
  },
  {
    "id": "pets-mecha-meow",
    "name": "Mecha Meow",
    "category": "pets",
    "value": 0.4395,
    "demand": 1,
    "image": "/items/Mecha Meow.webp"
  },
  {
    "id": "pets-caterpillar",
    "name": "Caterpillar",
    "category": "pets",
    "value": 6.4351,
    "demand": 3,
    "image": "/items/Caterpillar.webp"
  },
  {
    "id": "petwear-bewitched-hat",
    "name": "Bewitched Hat",
    "category": "petwear",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Bewitched Hat.webp"
  },
  {
    "id": "pets-fallow-deer",
    "name": "Fallow Deer",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Fallow Deer.webp"
  },
  {
    "id": "stickers-wailing-mr-whiskerpips-sticker",
    "name": "Wailing Mr. Whiskerpips Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Wailing Mr. Whiskerpips Sticker.webp"
  },
  {
    "id": "pets-kelp-crewmate",
    "name": "Kelp Crewmate",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Kelp Crewmate.webp"
  },
  {
    "id": "pets-dirty-ducky",
    "name": "Dirty Ducky",
    "category": "pets",
    "value": 0.3139,
    "demand": 2,
    "image": "/items/Dirty Ducky.webp"
  },
  {
    "id": "pets-emberlight",
    "name": "Emberlight",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Emberlight.webp"
  },
  {
    "id": "petwear-gold-crown",
    "name": "Gold Crown",
    "category": "petwear",
    "value": 1.5695,
    "demand": 2,
    "image": "/items/Gold Crown.webp"
  },
  {
    "id": "toys-netzooka",
    "name": "Netzooka",
    "category": "toys",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Netzooka.webp"
  },
  {
    "id": "pets-spinosaurus",
    "name": "Spinosaurus",
    "category": "pets",
    "value": 0.5964,
    "demand": 2,
    "image": "/items/Spinosaurus.webp"
  },
  {
    "id": "pets-snowball-pet",
    "name": "Snowball Pet",
    "category": "pets",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Snowball Pet.webp"
  },
  {
    "id": "pets-glyptodon-ducky",
    "name": "Glyptodon Ducky",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Glyptodon Ducky.webp"
  },
  {
    "id": "vehicles-tiffany",
    "name": "Tiffany",
    "category": "vehicles",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Tiffany.webp"
  },
  {
    "id": "pets-snow-cat",
    "name": "Snow Cat",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Snow Cat.webp"
  },
  {
    "id": "pets-ice-golem",
    "name": "Ice Golem",
    "category": "pets",
    "value": 0.7848,
    "demand": 2,
    "image": "/items/Ice Golem.webp"
  },
  {
    "id": "pets-japanese-snow-fairy",
    "name": "Japanese Snow Fairy",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Japanese Snow Fairy.webp"
  },
  {
    "id": "strollers-campers-wheelbarrow-stroller",
    "name": "Camper's Wheelbarrow Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-candy-cannon",
    "name": "Candy Cannon",
    "category": "toys",
    "value": 72.1992,
    "demand": 3,
    "image": "/items/Candy Cannon.webp"
  },
  {
    "id": "petwear-icey-aura",
    "name": "Icey Aura",
    "category": "petwear",
    "value": 0.7534,
    "demand": 2,
    "image": "/items/Icey Aura.webp"
  },
  {
    "id": "strollers-pizza-stroller",
    "name": "Pizza Stroller",
    "category": "strollers",
    "value": 0.3041,
    "demand": 1,
    "image": "/items/Pizza Stroller.webp"
  },
  {
    "id": "strollers-egg-stroller",
    "name": "Egg Stroller",
    "category": "strollers",
    "value": 20.31,
    "demand": 3,
    "image": ""
  },
  {
    "id": "eggs-royal-aztec-egg",
    "name": "Royal Aztec Egg",
    "category": "eggs",
    "value": 0.4173,
    "demand": 2,
    "image": "/items/Royal Aztec Egg.webp"
  },
  {
    "id": "pets-skelebat",
    "name": "Skelebat",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Skelebat.webp"
  },
  {
    "id": "strollers-cannon-stroller",
    "name": "Cannon Stroller",
    "category": "strollers",
    "value": 0.1598,
    "demand": 1,
    "image": "/items/Cannon Stroller.webp"
  },
  {
    "id": "pets-diamond-hummingbird",
    "name": "Diamond Hummingbird",
    "category": "pets",
    "value": 1.0045,
    "demand": 2,
    "image": "/items/Diamond Hummingbird.webp"
  },
  {
    "id": "pets-elephant",
    "name": "Elephant",
    "category": "pets",
    "value": 5.4934,
    "demand": 3,
    "image": "/items/Elephant.webp"
  },
  {
    "id": "petwear-nest-of-eggs",
    "name": "Nest of Eggs",
    "category": "petwear",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Nest of Eggs.webp"
  },
  {
    "id": "pets-karate-gorilla",
    "name": "Karate Gorilla",
    "category": "pets",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Karate Gorilla.webp"
  },
  {
    "id": "eggs-easter-2020-egg",
    "name": "Easter 2020 Egg",
    "category": "eggs",
    "value": 0.7033,
    "demand": 2,
    "image": "/items/Easter 2020 Egg.webp"
  },
  {
    "id": "pets-irish-elk",
    "name": "Irish Elk",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Irish Elk.webp"
  },
  {
    "id": "petwear-spring-bunny-nose",
    "name": "Spring Bunny Nose",
    "category": "petwear",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Spring Bunny Nose.webp"
  },
  {
    "id": "pets-orangutan",
    "name": "Orangutan",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Orangutan.webp"
  },
  {
    "id": "petwear-2022-birthday-confetti-drape",
    "name": "2022 Birthday Confetti Drape",
    "category": "petwear",
    "value": 0.7534,
    "demand": 2,
    "image": "/items/2022 Birthday Confetti Drape.webp"
  },
  {
    "id": "pets-halloween-blue-scorpion",
    "name": "Halloween Blue Scorpion",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Halloween Blue Scorpion.webp"
  },
  {
    "id": "petwear-heart-bow",
    "name": "Heart Bow",
    "category": "petwear",
    "value": 0.1883,
    "demand": 2,
    "image": "/items/Heart Bow.webp"
  },
  {
    "id": "pets-glormy-crab",
    "name": "Glormy Crab",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Glormy Crab.webp"
  },
  {
    "id": "eggs-zodiac-minion-egg",
    "name": "Zodiac Minion Egg",
    "category": "eggs",
    "value": 0.1099,
    "demand": 1,
    "image": "/items/Zodiac Minion Egg.webp"
  },
  {
    "id": "food-winter-deer-bait",
    "name": "Winter Deer Bait",
    "category": "food",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Winter Deer Bait.webp"
  },
  {
    "id": "petwear-giraffe-backpack",
    "name": "Giraffe Backpack",
    "category": "petwear",
    "value": 19.1485,
    "demand": 2,
    "image": "/items/Giraffe Backpack.webp"
  },
  {
    "id": "vehicles-street-drifter",
    "name": "Street Drifter",
    "category": "vehicles",
    "value": 0.5023,
    "demand": 1,
    "image": "/items/Street Drifter.webp"
  },
  {
    "id": "pets-pink-betta-fish",
    "name": "Pink Betta Fish",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Pink Betta Fish.webp"
  },
  {
    "id": "petwear-white-designer-backpack",
    "name": "White Designer Backpack",
    "category": "petwear",
    "value": 0.4081,
    "demand": 2,
    "image": "/items/White Designer Backpack.webp"
  },
  {
    "id": "gifts-halloween-mummy-cat-box",
    "name": "Halloween Mummy Cat Box",
    "category": "gifts",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Halloween Mummy Cat Box.webp"
  },
  {
    "id": "toys-elephant-plush",
    "name": "Elephant Plush",
    "category": "toys",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Elephant Plush.webp"
  },
  {
    "id": "gifts-rat-box",
    "name": "Rat Box",
    "category": "gifts",
    "value": 2.8252,
    "demand": 2,
    "image": "/items/Rat Box.webp"
  },
  {
    "id": "pets-gila-monster",
    "name": "Gila Monster",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Gila Monster.webp"
  },
  {
    "id": "potions-sugar-skull-potion",
    "name": "Sugar Skull Potion",
    "category": "potions",
    "value": 1.12,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-sea-turtle",
    "name": "Sea Turtle",
    "category": "pets",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Sea Turtle.webp"
  },
  {
    "id": "pets-snow-owl",
    "name": "Snow Owl",
    "category": "pets",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/Snow Owl.webp"
  },
  {
    "id": "strollers-flower-stroller",
    "name": "Flower Stroller",
    "category": "strollers",
    "value": 0.2892,
    "demand": 1,
    "image": "/items/Flower Stroller.webp"
  },
  {
    "id": "pets-gumball-caterpillar",
    "name": "Gumball Caterpillar",
    "category": "pets",
    "value": 0.204,
    "demand": 1,
    "image": "/items/Gumball Caterpillar.webp"
  },
  {
    "id": "pets-snowman",
    "name": "Snowman",
    "category": "pets",
    "value": 0.3139,
    "demand": 1,
    "image": "/items/Snowman.webp"
  },
  {
    "id": "pets-sasquatch",
    "name": "Sasquatch",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Sasquatch.webp"
  },
  {
    "id": "vehicles-hovercar",
    "name": "Hovercar",
    "category": "vehicles",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Hovercar.webp"
  },
  {
    "id": "pets-blue-jay",
    "name": "Blue Jay",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Blue Jay.webp"
  },
  {
    "id": "pets-kitty-bat",
    "name": "Kitty Bat",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Kitty Bat.webp"
  },
  {
    "id": "pets-zeopod",
    "name": "Zeopod",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Zeopod.webp"
  },
  {
    "id": "pets-nurse-shark",
    "name": "Nurse Shark",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Nurse Shark.webp"
  },
  {
    "id": "vehicles-prince-carriage",
    "name": "Prince Carriage",
    "category": "vehicles",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Prince Carriage.webp"
  },
  {
    "id": "pets-chameleon",
    "name": "Chameleon",
    "category": "pets",
    "value": 0.4709,
    "demand": 1,
    "image": "/items/Chameleon.webp"
  },
  {
    "id": "pets-fire-stallion",
    "name": "Fire Stallion",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Fire Stallion.webp"
  },
  {
    "id": "toys-christmas-cat-rattle",
    "name": "Christmas Cat Rattle",
    "category": "toys",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Christmas Cat Rattle.webp"
  },
  {
    "id": "pets-hippo",
    "name": "Hippo",
    "category": "pets",
    "value": 0.4238,
    "demand": 1,
    "image": "/items/Hippo.webp"
  },
  {
    "id": "pets-hammerhead-shark",
    "name": "Hammerhead Shark",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Hammerhead Shark.webp"
  },
  {
    "id": "strollers-santas-helper-stroller",
    "name": "Santa's Helper Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-summer-walrus-sunhat",
    "name": "Summer Walrus Sunhat",
    "category": "petwear",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Summer Walrus Sunhat.webp"
  },
  {
    "id": "toys-glider",
    "name": "Glider",
    "category": "toys",
    "value": 0.8162,
    "demand": 2,
    "image": "/items/Glider.webp"
  },
  {
    "id": "toys-slimingo-feather-teleporter",
    "name": "Slimingo Feather Teleporter",
    "category": "toys",
    "value": 0.1256,
    "demand": 2,
    "image": "/items/Slimingo Feather Teleporter.webp"
  },
  {
    "id": "strollers-flip-phone-stroller",
    "name": "Flip Phone Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-coconut-friend",
    "name": "Coconut Friend",
    "category": "pets",
    "value": 0.4081,
    "demand": 1,
    "image": "/items/Coconut Friend.webp"
  },
  {
    "id": "pets-solaris",
    "name": "Solaris",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Solaris.webp"
  },
  {
    "id": "pets-longhorn-cow",
    "name": "Longhorn Cow",
    "category": "pets",
    "value": 0.3924,
    "demand": 1,
    "image": "/items/Longhorn Cow.webp"
  },
  {
    "id": "pets-sea-angel",
    "name": "Sea Angel",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Sea Angel.webp"
  },
  {
    "id": "pets-dog",
    "name": "Dog",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Dog.webp"
  },
  {
    "id": "strollers-iced-cake-stroller",
    "name": "Iced Cake Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-burger-bun-hat",
    "name": "Burger Bun Hat",
    "category": "petwear",
    "value": 0.1883,
    "demand": 2,
    "image": "/items/Burger Bun Hat.webp"
  },
  {
    "id": "gifts-1000-bucks-silk-bag",
    "name": "1000 Bucks Silk Bag",
    "category": "gifts",
    "value": 0.4395,
    "demand": 2,
    "image": "/items/1000 Bucks Silk Bag.webp"
  },
  {
    "id": "pets-cheetah",
    "name": "Cheetah",
    "category": "pets",
    "value": 0.9731,
    "demand": 2,
    "image": "/items/Cheetah.webp"
  },
  {
    "id": "petwear-mandarins-hat",
    "name": "Mandarin's Hat",
    "category": "petwear",
    "value": 0.2511,
    "demand": 2,
    "image": "/items/Mandarins Hat.webp"
  },
  {
    "id": "pets-cryptid",
    "name": "Cryptid",
    "category": "pets",
    "value": 43.6335,
    "demand": 3,
    "image": "/items/Cryptid.webp"
  },
  {
    "id": "strollers-hover-stroller",
    "name": "Hover Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "strollers-big-leaf-stroller",
    "name": "Big Leaf Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-monomoped",
    "name": "Mono-Moped",
    "category": "vehicles",
    "value": 1.8835,
    "demand": 2,
    "image": "/items/Mono-Moped.webp"
  },
  {
    "id": "toys-banana-plush",
    "name": "Banana Plush",
    "category": "toys",
    "value": 0.157,
    "demand": 1,
    "image": "/items/Banana Plush.webp"
  },
  {
    "id": "pets-subzero-scorpion",
    "name": "Subzero Scorpion",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Subzero Scorpion.webp"
  },
  {
    "id": "stickers-poodle-sticker",
    "name": "Poodle Sticker",
    "category": "stickers",
    "value": 0.0628,
    "demand": 1,
    "image": "/items/Poodle Sticker.webp"
  },
  {
    "id": "pets-jellyfish",
    "name": "Jellyfish",
    "category": "pets",
    "value": 3.2961,
    "demand": 2,
    "image": "/items/Jellyfish.webp"
  },
  {
    "id": "pets-momma-moose",
    "name": "Momma Moose",
    "category": "pets",
    "value": 0.3453,
    "demand": 1,
    "image": "/items/Momma Moose.webp"
  },
  {
    "id": "pets-king-bee",
    "name": "King Bee",
    "category": "pets",
    "value": 0.4709,
    "demand": 2,
    "image": "/items/King Bee.webp"
  },
  {
    "id": "eggs-endangered-egg",
    "name": "Endangered Egg",
    "category": "eggs",
    "value": 0.028,
    "demand": 1,
    "image": "/items/Endangered Egg.webp"
  },
  {
    "id": "pets-chef-gorilla",
    "name": "Chef Gorilla",
    "category": "pets",
    "value": 0.6278,
    "demand": 2,
    "image": "/items/Chef Gorilla.webp"
  },
  {
    "id": "vehicles-cloud-car",
    "name": "Cloud Car",
    "category": "vehicles",
    "value": 10.6729,
    "demand": 2,
    "image": "/items/Cloud Car.webp"
  },
  {
    "id": "pets-skunk",
    "name": "Skunk",
    "category": "pets",
    "value": 0.3767,
    "demand": 1,
    "image": "/items/Skunk.webp"
  },
  {
    "id": "vehicles-gyrocopter",
    "name": "Gyrocopter",
    "category": "vehicles",
    "value": 0.7848,
    "demand": 1,
    "image": "/items/Gyrocopter.webp"
  },
  {
    "id": "pets-wolpertinger",
    "name": "Wolpertinger",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Wolpertinger.webp"
  },
  {
    "id": "pets-liger",
    "name": "Liger",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Liger.webp"
  },
  {
    "id": "stickers-peppermint-penguin-sticker",
    "name": "Peppermint Penguin Sticker",
    "category": "stickers",
    "value": 0.0942,
    "demand": 2,
    "image": "/items/Peppermint Penguin Sticker.webp"
  },
  {
    "id": "vehicles-unicorn-cycle",
    "name": "Unicorn Cycle",
    "category": "vehicles",
    "value": 1.2556,
    "demand": 2,
    "image": "/items/Unicorn Cycle.webp"
  },
  {
    "id": "pets-ground-sloth",
    "name": "Ground Sloth",
    "category": "pets",
    "value": 0.2354,
    "demand": 1,
    "image": "/items/Ground Sloth.webp"
  },
  {
    "id": "stickers-round-fallow-deer-sticker",
    "name": "Round Fallow Deer Sticker",
    "category": "stickers",
    "value": 0.2197,
    "demand": 2,
    "image": "/items/Round Fallow Deer Sticker.webp"
  },
  {
    "id": "pets-persian-cat",
    "name": "Persian Cat",
    "category": "pets",
    "value": 0.2825,
    "demand": 1,
    "image": "/items/Persian Cat.webp"
  },
  {
    "id": "pets-rubber-ducky",
    "name": "Rubber Ducky",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Rubber Ducky.webp"
  },
  {
    "id": "pets-halloween-black-mummy-cat",
    "name": "Halloween Black Mummy Cat",
    "category": "pets",
    "value": 0.2511,
    "demand": 1,
    "image": "/items/Halloween Black Mummy Cat.webp"
  },
  {
    "id": "pets-papa-moose",
    "name": "Papa Moose",
    "category": "pets",
    "value": 1.7265,
    "demand": 2,
    "image": "/items/Papa Moose.webp"
  },
  {
    "id": "pets-cat",
    "name": "Cat",
    "category": "pets",
    "value": 0.1883,
    "demand": 1,
    "image": "/items/Cat.webp"
  }
];
