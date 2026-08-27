/*
  ============================================================
  petswap.me — DATA FILE
  ============================================================
  This file is now built from a real StarPets.gg data pull
  (823 items across pets, eggs, potions, pet wear, vehicles,
  toys, strollers, and gifts), taken on 2026-08-27.

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
    "id": "stickers-fairy-bat-dragon-sticker",
    "name": "Fairy Bat Dragon Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Fairy%20Bat%20Dragon%20Sticker.webp"
  },
  {
    "id": "pets-crocodile",
    "name": "Crocodile",
    "category": "pets",
    "value": 3.9942,
    "demand": 3,
    "image": "/items/Crocodile.webp"
  },
  {
    "id": "petwear-shadow-aura",
    "name": "Shadow Aura",
    "category": "petwear",
    "value": 0.5669,
    "demand": 2,
    "image": "/items/Shadow%20Aura.webp"
  },
  {
    "id": "pets-peacock",
    "name": "Peacock",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Peacock.webp"
  },
  {
    "id": "vehicles-ribcage-carriage",
    "name": "Ribcage Carriage",
    "category": "vehicles",
    "value": 0.1239,
    "demand": 1,
    "image": "/items/Ribcage%20Carriage.webp"
  },
  {
    "id": "stickers-panda-sticker",
    "name": "Panda Sticker",
    "category": "stickers",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Panda%20Sticker.webp"
  },
  {
    "id": "petwear-energy-wings",
    "name": "Energy Wings",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Energy%20Wings.webp"
  },
  {
    "id": "vehicles-white-snowboard",
    "name": "White Snowboard",
    "category": "vehicles",
    "value": 1.6203,
    "demand": 1,
    "image": "/items/White%20Snowboard.webp"
  },
  {
    "id": "pets-english-sheepdog",
    "name": "English Sheepdog",
    "category": "pets",
    "value": 0.4381,
    "demand": 2,
    "image": "/items/English%20Sheepdog.webp"
  },
  {
    "id": "pets-dodo",
    "name": "Dodo",
    "category": "pets",
    "value": 0.5412,
    "demand": 2,
    "image": "/items/Dodo.webp"
  },
  {
    "id": "pets-eel",
    "name": "Eel",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Eel.webp"
  },
  {
    "id": "pets-flaming-zebra",
    "name": "Flaming Zebra",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Flaming%20Zebra.webp"
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
    "id": "strollers-coconut-stroller",
    "name": "Coconut Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "strollers-heart-stroller",
    "name": "Heart Stroller",
    "category": "strollers",
    "value": 3.0959,
    "demand": 2,
    "image": "/items/Heart%20Stroller.webp"
  },
  {
    "id": "pets-black-panther",
    "name": "Black Panther",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Black%20Panther.webp"
  },
  {
    "id": "petwear-rain-hat",
    "name": "Rain Hat",
    "category": "petwear",
    "value": 0.2577,
    "demand": 2,
    "image": "/items/Rain%20Hat.webp"
  },
  {
    "id": "pets-emperor-gorilla",
    "name": "Emperor Gorilla",
    "category": "pets",
    "value": 7.6019,
    "demand": 3,
    "image": "/items/Emperor%20Gorilla.webp"
  },
  {
    "id": "toys-llama-plush",
    "name": "Llama Plush",
    "category": "toys",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Llama%20Plush.webp"
  },
  {
    "id": "gifts-standard-chest",
    "name": "Standard Chest",
    "category": "gifts",
    "value": 0.04,
    "demand": 3,
    "image": ""
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
    "id": "stickers-kitsune-sticker",
    "name": "Kitsune Sticker",
    "category": "stickers",
    "value": 0.1288,
    "demand": 2,
    "image": "/items/Kitsune%20Sticker.webp"
  },
  {
    "id": "potions-sugar-skull-potion",
    "name": "Sugar Skull Potion",
    "category": "potions",
    "value": 1.17,
    "demand": 3,
    "image": ""
  },
  {
    "id": "gifts-duckling-box",
    "name": "Duckling Box",
    "category": "gifts",
    "value": 0.6641,
    "demand": 2,
    "image": "/items/Duckling%20Box.webp"
  },
  {
    "id": "pets-tasmanian-devil",
    "name": "Tasmanian Devil",
    "category": "pets",
    "value": 0.3479,
    "demand": 2,
    "image": "/items/Tasmanian%20Devil.webp"
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
    "id": "pets-general-sheepdog",
    "name": "General Sheepdog",
    "category": "pets",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/General%20Sheepdog.webp"
  },
  {
    "id": "pets-donkey",
    "name": "Donkey",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Donkey.webp"
  },
  {
    "id": "stickers-hot-doggo-sticker",
    "name": "Hot Doggo Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Hot%20Doggo%20Sticker.webp"
  },
  {
    "id": "vehicles-plant-powered-roller-skates",
    "name": "Plant Powered Roller Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-wren",
    "name": "Wren",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Wren.webp"
  },
  {
    "id": "pets-birthday-butterfly-2024",
    "name": "Birthday Butterfly 2024",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Birthday%20Butterfly%202024.webp"
  },
  {
    "id": "petwear-marshmallow-friend",
    "name": "Marshmallow Friend",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Marshmallow%20Friend.webp"
  },
  {
    "id": "pets-phantom-dragon",
    "name": "Phantom Dragon",
    "category": "pets",
    "value": 2.9635,
    "demand": 2,
    "image": "/items/Phantom%20Dragon.webp"
  },
  {
    "id": "eggs-pink-egg",
    "name": "Pink Egg",
    "category": "eggs",
    "value": 11.1237,
    "demand": 2,
    "image": "/items/Pink%20Egg.webp"
  },
  {
    "id": "eggs-dylan",
    "name": "Dylan",
    "category": "eggs",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Dylan.webp"
  },
  {
    "id": "toys-puppy-plush",
    "name": "Puppy Plush",
    "category": "toys",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Puppy%20Plush.webp"
  },
  {
    "id": "vehicles-celestial-carrier",
    "name": "Celestial Carrier",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-chihuahua",
    "name": "Chihuahua",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Chihuahua.webp"
  },
  {
    "id": "food-patterns-egg",
    "name": "Patterns Egg",
    "category": "food",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Patterns%20Egg.webp"
  },
  {
    "id": "potions-grow-potion",
    "name": "Grow Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-pine-marten",
    "name": "Pine Marten",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Pine%20Marten.webp"
  },
  {
    "id": "pets-eggnog-dog",
    "name": "Eggnog Dog",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Eggnog%20Dog.webp"
  },
  {
    "id": "pets-glormy-hound",
    "name": "Glormy Hound",
    "category": "pets",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Glormy%20Hound.webp"
  },
  {
    "id": "pets-ankylosaurus",
    "name": "Ankylosaurus",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Ankylosaurus.webp"
  },
  {
    "id": "pets-shetland-pony-light-brown",
    "name": "Shetland Pony Light Brown",
    "category": "pets",
    "value": 0.4638,
    "demand": 1,
    "image": "/items/Shetland%20Pony%20Light%20Brown.webp"
  },
  {
    "id": "pets-dingo",
    "name": "Dingo",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Dingo.webp"
  },
  {
    "id": "pets-halloween-white-ghost-dragon",
    "name": "Halloween White Ghost Dragon",
    "category": "pets",
    "value": 1.9327,
    "demand": 2,
    "image": "/items/Halloween%20White%20Ghost%20Dragon.webp"
  },
  {
    "id": "pets-guardian-lion",
    "name": "Guardian Lion",
    "category": "pets",
    "value": 0.4123,
    "demand": 1,
    "image": "/items/Guardian%20Lion.webp"
  },
  {
    "id": "pets-snow-cat",
    "name": "Snow Cat",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Snow%20Cat.webp"
  },
  {
    "id": "toys-campfire-stories-paint",
    "name": "Campfire Stories Mega Neon Paint",
    "category": "toys",
    "value": 0.2062,
    "demand": 3,
    "image": "/items/Campfire%20Stories%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "pets-violet-friend",
    "name": "Violet Friend",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Violet%20Friend.webp"
  },
  {
    "id": "stickers-long-ermine-sticker",
    "name": "Long Ermine Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Long%20Ermine%20Sticker.webp"
  },
  {
    "id": "petwear-llamalush-purse-pet",
    "name": "Llamalush Purse Pet",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Llamalush%20Purse%20Pet.webp"
  },
  {
    "id": "pets-arctic-hare",
    "name": "Arctic Hare",
    "category": "pets",
    "value": 0.2448,
    "demand": 1,
    "image": "/items/Arctic%20Hare.webp"
  },
  {
    "id": "stickers-pets-plus-sticker-pack",
    "name": "Pets Plus Sticker Pack",
    "category": "stickers",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/Pets%20Plus%20Sticker%20Pack.webp"
  },
  {
    "id": "petwear-halloween-white-skull-hat",
    "name": "Halloween White Skull Hat",
    "category": "petwear",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Halloween%20White%20Skull%20Hat.webp"
  },
  {
    "id": "petwear-puddleducks-hood",
    "name": "Puddleducks Hood",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Puddleducks%20Hood.webp"
  },
  {
    "id": "gifts-premium-capuchin-box",
    "name": "Premium Capuchin Box",
    "category": "gifts",
    "value": 1.1705,
    "demand": 2,
    "image": "/items/Premium%20Capuchin%20Box.webp"
  },
  {
    "id": "vehicles-dolphin-cruiser",
    "name": "Dolphin Cruiser",
    "category": "vehicles",
    "value": 0.0563,
    "demand": 1,
    "image": "/items/Dolphin%20Cruiser.webp"
  },
  {
    "id": "pets-glacier-kitsune",
    "name": "Glacier Kitsune",
    "category": "pets",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Glacier%20Kitsune.webp"
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
    "id": "petwear-monkey-king-crown",
    "name": "Monkey King Crown",
    "category": "petwear",
    "value": 0.5669,
    "demand": 2,
    "image": "/items/Monkey%20King%20Crown.webp"
  },
  {
    "id": "vehicles-camper-van",
    "name": "Camper Van",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-money-rattle",
    "name": "Money Rattle",
    "category": "toys",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Money%20Rattle.webp"
  },
  {
    "id": "food-flaming-zebra-bait",
    "name": "Flaming Zebra Bait",
    "category": "food",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Flaming%20Zebra%20Bait.webp"
  },
  {
    "id": "strollers-kangaroo-stroller",
    "name": "Kangaroo Stroller",
    "category": "strollers",
    "value": 0.1972,
    "demand": 1,
    "image": "/items/Kangaroo%20Stroller.webp"
  },
  {
    "id": "petwear-viking-helmet",
    "name": "Viking Helmet",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Viking%20Helmet.webp"
  },
  {
    "id": "pets-pink-cat",
    "name": "Pink Cat",
    "category": "pets",
    "value": 2.0615,
    "demand": 2,
    "image": "/items/Pink%20Cat.webp"
  },
  {
    "id": "petwear-fishbowl-hat",
    "name": "Fishbowl Hat",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Fishbowl%20Hat.webp"
  },
  {
    "id": "vehicles-convertible",
    "name": "Convertible",
    "category": "vehicles",
    "value": 1.0412,
    "demand": 1,
    "image": "/items/Convertible.webp"
  },
  {
    "id": "pets-pilot-gull",
    "name": "Pilot Gull",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Pilot%20Gull.webp"
  },
  {
    "id": "vehicles-snow-snowboard",
    "name": "Snow Snowboard",
    "category": "vehicles",
    "value": 5.1214,
    "demand": 1,
    "image": "/items/Snow%20Snowboard.webp"
  },
  {
    "id": "pets-rodeo-bull",
    "name": "Rodeo Bull",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Rodeo%20Bull.webp"
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
    "id": "pets-yule-log-dog",
    "name": "Yule Log Dog",
    "category": "pets",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Yule%20Log%20Dog.webp"
  },
  {
    "id": "pets-velociraptor",
    "name": "Velociraptor",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Velociraptor.webp"
  },
  {
    "id": "petwear-fantastical-wings",
    "name": "Fantastical Wings",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Fantastical%20Wings.webp"
  },
  {
    "id": "vehicles-micro-car",
    "name": "Micro Car",
    "category": "vehicles",
    "value": 0.0676,
    "demand": 1,
    "image": "/items/Micro%20Car.webp"
  },
  {
    "id": "vehicles-fissy-skateboard",
    "name": "Fissy Skateboard",
    "category": "vehicles",
    "value": 0.2366,
    "demand": 1,
    "image": "/items/Fissy%20Skateboard.webp"
  },
  {
    "id": "pets-halloween-evil-dachshund",
    "name": "Halloween Evil Dachshund",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Halloween%20Evil%20Dachshund.webp"
  },
  {
    "id": "petwear-white-designer-backpack",
    "name": "White Designer Backpack",
    "category": "petwear",
    "value": 0.335,
    "demand": 2,
    "image": "/items/White%20Designer%20Backpack.webp"
  },
  {
    "id": "pets-mushroom-friend",
    "name": "Mushroom Friend",
    "category": "pets",
    "value": 0.4123,
    "demand": 1,
    "image": "/items/Mushroom%20Friend.webp"
  },
  {
    "id": "pets-weevil",
    "name": "Weevil",
    "category": "pets",
    "value": 0.219,
    "demand": 1,
    "image": "/items/Weevil.webp"
  },
  {
    "id": "petwear-summer-walrus-sunhat",
    "name": "Summer Walrus Sunhat",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Summer%20Walrus%20Sunhat.webp"
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
    "id": "pets-golden-penguin",
    "name": "Golden Penguin",
    "category": "pets",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Golden%20Penguin.webp"
  },
  {
    "id": "pets-persian-cat",
    "name": "Persian Cat",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Persian%20Cat.webp"
  },
  {
    "id": "strollers-rainbow-stroller",
    "name": "Rainbow Stroller",
    "category": "strollers",
    "value": 0.4505,
    "demand": 2,
    "image": "/items/Rainbow%20Stroller.webp"
  },
  {
    "id": "toys-ice-saber",
    "name": "Ice Saber",
    "category": "toys",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Ice%20Saber.webp"
  },
  {
    "id": "gifts-christmas-gift",
    "name": "Christmas Gift",
    "category": "gifts",
    "value": 4.4975,
    "demand": 2,
    "image": "/items/Christmas%20Gift.webp"
  },
  {
    "id": "vehicles-candy-snowmobile",
    "name": "Candy Snowmobile",
    "category": "vehicles",
    "value": 0.107,
    "demand": 1,
    "image": "/items/Candy%20Snowmobile.webp"
  },
  {
    "id": "toys-celebration-firework-launcher",
    "name": "Celebration Firework Launcher",
    "category": "toys",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Celebration%20Firework%20Launcher.webp"
  },
  {
    "id": "toys-heart-plushie",
    "name": "Heart Plushie",
    "category": "toys",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Heart%20Plushie.webp"
  },
  {
    "id": "pets-albatross",
    "name": "Albatross",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Albatross.webp"
  },
  {
    "id": "pets-irish-setter",
    "name": "Irish Setter",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Irish%20Setter.webp"
  },
  {
    "id": "vehicles-bathtub",
    "name": "Bathtub",
    "category": "vehicles",
    "value": 2.2688,
    "demand": 2,
    "image": "/items/Bathtub.webp"
  },
  {
    "id": "pets-owl",
    "name": "Owl",
    "category": "pets",
    "value": 68.2885,
    "demand": 3,
    "image": "/items/Owl.webp"
  },
  {
    "id": "pets-starfish",
    "name": "Starfish",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Starfish.webp"
  },
  {
    "id": "gifts-monkey-box",
    "name": "Monkey Box",
    "category": "gifts",
    "value": 1.1313,
    "demand": 2,
    "image": "/items/Monkey%20Box.webp"
  },
  {
    "id": "pets-triceratops",
    "name": "Triceratops",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Triceratops.webp"
  },
  {
    "id": "stickers-ginger-cat-sticker",
    "name": "Ginger Cat Sticker",
    "category": "stickers",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Ginger%20Cat%20Sticker.webp"
  },
  {
    "id": "pets-bald-eagle",
    "name": "Bald Eagle",
    "category": "pets",
    "value": 3.4788,
    "demand": 2,
    "image": "/items/Bald%20Eagle.webp"
  },
  {
    "id": "strollers-red-wagon-stroller",
    "name": "Red Wagon Stroller",
    "category": "strollers",
    "value": 0.0901,
    "demand": 1,
    "image": "/items/Red%20Wagon%20Stroller.webp"
  },
  {
    "id": "vehicles-tiffany",
    "name": "Tiffany",
    "category": "vehicles",
    "value": 0.2533,
    "demand": 1,
    "image": "/items/Tiffany.webp"
  },
  {
    "id": "pets-hopbop",
    "name": "Hopbop",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Hopbop.webp"
  },
  {
    "id": "pets-drake",
    "name": "Drake",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Drake.webp"
  },
  {
    "id": "pets-dancing-dragon",
    "name": "Dancing Dragon",
    "category": "pets",
    "value": 1.1854,
    "demand": 2,
    "image": "/items/Dancing%20Dragon.webp"
  },
  {
    "id": "pets-lamb",
    "name": "Lamb",
    "category": "pets",
    "value": 0.67,
    "demand": 2,
    "image": "/items/Lamb.webp"
  },
  {
    "id": "vehicles-lavender-teapot-carriage",
    "name": "Lavender Teapot Carriage",
    "category": "vehicles",
    "value": 0.2308,
    "demand": 1,
    "image": "/items/Lavender%20Teapot%20Carriage.webp"
  },
  {
    "id": "pets-emu",
    "name": "Emu",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Emu.webp"
  },
  {
    "id": "pets-2025-birthday-butterfly",
    "name": "2025 Birthday Butterfly",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/2025%20Birthday%20Butterfly.webp"
  },
  {
    "id": "stickers-sasquatch-sticker",
    "name": "Sasquatch Sticker",
    "category": "stickers",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Sasquatch%20Sticker.webp"
  },
  {
    "id": "petwear-gold-tiara",
    "name": "Gold Tiara",
    "category": "petwear",
    "value": 0.0773,
    "demand": 2,
    "image": "/items/Gold%20Tiara.webp"
  },
  {
    "id": "pets-red-squirrel",
    "name": "Red Squirrel",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Red%20Squirrel.webp"
  },
  {
    "id": "vehicles-traveling-house",
    "name": "Traveling House",
    "category": "vehicles",
    "value": 0.2421,
    "demand": 1,
    "image": "/items/Traveling%20House.webp"
  },
  {
    "id": "pets-bison",
    "name": "Bison",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Bison.webp"
  },
  {
    "id": "pets-royal-mistletroll",
    "name": "Royal Mistletroll",
    "category": "pets",
    "value": 5.4115,
    "demand": 3,
    "image": "/items/Royal%20Mistletroll.webp"
  },
  {
    "id": "vehicles-rgb-monster-truck",
    "name": "RGB Monster Truck",
    "category": "vehicles",
    "value": 0.0676,
    "demand": 1,
    "image": "/items/RGB%20Monster%20Truck.webp"
  },
  {
    "id": "pets-fennec-fox",
    "name": "Fennec Fox",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Fennec%20Fox.webp"
  },
  {
    "id": "stickers-african-painted-dog-sticker",
    "name": "African Painted Dog Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/African%20Painted%20Dog%20Sticker.webp"
  },
  {
    "id": "pets-lion",
    "name": "Lion",
    "category": "pets",
    "value": 3.9942,
    "demand": 3,
    "image": "/items/Lion.webp"
  },
  {
    "id": "petwear-bready-necklace",
    "name": "Bready Necklace",
    "category": "petwear",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Bready%20Necklace.webp"
  },
  {
    "id": "pets-maine-coon",
    "name": "Maine Coon",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Maine%20Coon.webp"
  },
  {
    "id": "petwear-halloween-evil-barrel-backpack",
    "name": "Halloween Evil Barrel Backpack",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Halloween%20Evil%20Barrel%20Backpack.webp"
  },
  {
    "id": "petwear-cat-backpack",
    "name": "Cat Backpack",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Cat%20Backpack.webp"
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
    "id": "pets-naga-dragon",
    "name": "Naga Dragon",
    "category": "pets",
    "value": 0.4638,
    "demand": 1,
    "image": "/items/Naga%20Dragon.webp"
  },
  {
    "id": "pets-zombie-buffalo",
    "name": "Zombie Buffalo",
    "category": "pets",
    "value": 3.6077,
    "demand": 2,
    "image": "/items/Zombie%20Buffalo.webp"
  },
  {
    "id": "stickers-cherry-blossom-flower-sticker",
    "name": "Cherry Blossom Flower Sticker",
    "category": "stickers",
    "value": 0.0129,
    "demand": 1,
    "image": "/items/Cherry%20Blossom%20Flower%20Sticker.webp"
  },
  {
    "id": "toys-candy-flare-paint",
    "name": "Candy Flare Mega Neon Paint",
    "category": "toys",
    "value": 0.2062,
    "demand": 3,
    "image": "/items/Candy%20Flare%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "pets-mini-pig",
    "name": "Mini Pig",
    "category": "pets",
    "value": 12.1115,
    "demand": 3,
    "image": "/items/Mini%20Pig.webp"
  },
  {
    "id": "stickers-candyfloss-chick-sticker",
    "name": "Candyfloss Chick Sticker",
    "category": "stickers",
    "value": 0.0464,
    "demand": 1,
    "image": "/items/Candyfloss%20Chick%20Sticker.webp"
  },
  {
    "id": "petwear-queen-bee-slippers",
    "name": "Queen Bee Slippers",
    "category": "petwear",
    "value": 19.3269,
    "demand": 2,
    "image": "/items/Queen%20Bee%20Slippers.webp"
  },
  {
    "id": "pets-beaver",
    "name": "Beaver",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Beaver.webp"
  },
  {
    "id": "pets-walrus",
    "name": "Walrus",
    "category": "pets",
    "value": 0.219,
    "demand": 1,
    "image": "/items/Walrus.webp"
  },
  {
    "id": "petwear-hero-mask",
    "name": "Hero Mask",
    "category": "petwear",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Hero%20Mask.webp"
  },
  {
    "id": "vehicles-regal-roller",
    "name": "Regal Roller",
    "category": "vehicles",
    "value": 0.276,
    "demand": 1,
    "image": "/items/Regal%20Roller.webp"
  },
  {
    "id": "pets-papa-moose",
    "name": "Papa Moose",
    "category": "pets",
    "value": 1.9327,
    "demand": 2,
    "image": "/items/Papa%20Moose.webp"
  },
  {
    "id": "petwear-tiny-wings",
    "name": "Tiny Wings",
    "category": "petwear",
    "value": 3.2212,
    "demand": 3,
    "image": "/items/Tiny%20Wings.webp"
  },
  {
    "id": "pets-black-macaque",
    "name": "Black Macaque",
    "category": "pets",
    "value": 0.3479,
    "demand": 2,
    "image": "/items/Black%20Macaque.webp"
  },
  {
    "id": "petwear-gold-crown",
    "name": "Gold Crown",
    "category": "petwear",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Gold%20Crown.webp"
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
    "id": "pets-red-sand-dollar",
    "name": "Red Sand Dollar",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Red%20Sand%20Dollar.webp"
  },
  {
    "id": "petwear-chick-hat",
    "name": "Chick Hat",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Chick%20Hat.webp"
  },
  {
    "id": "pets-purrowl",
    "name": "Purrowl",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Purrowl.webp"
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
    "id": "pets-tree-sasquatch",
    "name": "Tree Sasquatch",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Tree%20Sasquatch.webp"
  },
  {
    "id": "vehicles-icebreaker-ship",
    "name": "Icebreaker Ship",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-water-opossum",
    "name": "Water Opossum",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Water%20Opossum.webp"
  },
  {
    "id": "toys-flying-broomstick",
    "name": "Flying Broomstick",
    "category": "toys",
    "value": 24.7385,
    "demand": 2,
    "image": "/items/Flying%20Broomstick.webp"
  },
  {
    "id": "pets-mr-whiskerpips",
    "name": "Mr. Whiskerpips",
    "category": "pets",
    "value": 0.3479,
    "demand": 2,
    "image": "/items/Mr.%20Whiskerpips.webp"
  },
  {
    "id": "pets-candicorn",
    "name": "Candicorn",
    "category": "pets",
    "value": 2.9635,
    "demand": 2,
    "image": "/items/Candicorn.webp"
  },
  {
    "id": "pets-poison-dart-frog",
    "name": "Poison Dart Frog",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Poison%20Dart%20Frog.webp"
  },
  {
    "id": "petwear-bear-hood",
    "name": "Bear Hood",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Bear%20Hood.webp"
  },
  {
    "id": "vehicles-tiny-convertible",
    "name": "Tiny Convertible",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-butterfly-roller-skates",
    "name": "Butterfly Roller Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-2d-kitty",
    "name": "2D Kitty",
    "category": "pets",
    "value": 0.67,
    "demand": 2,
    "image": "/items/2D%20Kitty.webp"
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
    "id": "pets-purple-butterfly",
    "name": "Purple Butterfly",
    "category": "pets",
    "value": 1.1081,
    "demand": 2,
    "image": "/items/Purple%20Butterfly.webp"
  },
  {
    "id": "petwear-magic-girl-wings",
    "name": "Magic Girl Wings",
    "category": "petwear",
    "value": 7.2154,
    "demand": 2,
    "image": "/items/Magic%20Girl%20Wings.webp"
  },
  {
    "id": "pets-chick",
    "name": "Chick",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Chick.webp"
  },
  {
    "id": "pets-dark-choccybunny",
    "name": "Dark Choccybunny",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Dark%20Choccybunny.webp"
  },
  {
    "id": "pets-icy-porcupine",
    "name": "Icy Porcupine",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Icy%20Porcupine.webp"
  },
  {
    "id": "strollers-baby-basket-stroller",
    "name": "Baby Basket Stroller",
    "category": "strollers",
    "value": 0.6983,
    "demand": 2,
    "image": "/items/Baby%20Basket%20Stroller.webp"
  },
  {
    "id": "eggs-pet-egg",
    "name": "Pet Egg",
    "category": "eggs",
    "value": 0.0259,
    "demand": 1,
    "image": "/items/Pet%20Egg.webp"
  },
  {
    "id": "pets-dilophosaurus",
    "name": "Dilophosaurus",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Dilophosaurus.webp"
  },
  {
    "id": "pets-hero-gibbon",
    "name": "Hero Gibbon",
    "category": "pets",
    "value": 2.7058,
    "demand": 2,
    "image": "/items/Hero%20Gibbon.webp"
  },
  {
    "id": "petwear-bat-wings",
    "name": "Bat Wings",
    "category": "petwear",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Bat%20Wings.webp"
  },
  {
    "id": "pets-sushi-penguin",
    "name": "Sushi Penguin",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Sushi%20Penguin.webp"
  },
  {
    "id": "pets-arctic-fox",
    "name": "Arctic Fox",
    "category": "pets",
    "value": 2.3192,
    "demand": 3,
    "image": "/items/Arctic%20Fox.webp"
  },
  {
    "id": "pets-squid",
    "name": "Squid",
    "category": "pets",
    "value": 0.4123,
    "demand": 1,
    "image": "/items/Squid.webp"
  },
  {
    "id": "pets-raccoon",
    "name": "Raccoon",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Raccoon.webp"
  },
  {
    "id": "petwear-leprechaun-hat",
    "name": "Leprechaun Hat",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Leprechaun%20Hat.webp"
  },
  {
    "id": "vehicles-car",
    "name": "Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-shark-puppy",
    "name": "Shark Puppy",
    "category": "pets",
    "value": 3.8654,
    "demand": 2,
    "image": "/items/Shark%20Puppy.webp"
  },
  {
    "id": "pets-gecko",
    "name": "Gecko",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Gecko.webp"
  },
  {
    "id": "pets-stegosaurus",
    "name": "Stegosaurus",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Stegosaurus.webp"
  },
  {
    "id": "pets-praying-mantis",
    "name": "Praying Mantis",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Praying%20Mantis.webp"
  },
  {
    "id": "strollers-cauldron-stroller",
    "name": "Cauldron Stroller",
    "category": "strollers",
    "value": 0.2422,
    "demand": 1,
    "image": "/items/Cauldron%20Stroller.webp"
  },
  {
    "id": "pets-yeti",
    "name": "Yeti",
    "category": "pets",
    "value": 0.4123,
    "demand": 2,
    "image": "/items/Yeti.webp"
  },
  {
    "id": "vehicles-red-skateboard",
    "name": "Neon Red Skateboard",
    "category": "vehicles",
    "value": 0.715,
    "demand": 1,
    "image": "/items/Neon%20Red%20Skateboard.webp"
  },
  {
    "id": "toys-hugging-egg",
    "name": "Hugging Egg",
    "category": "toys",
    "value": 0.9019,
    "demand": 1,
    "image": "/items/Hugging%20Egg.webp"
  },
  {
    "id": "pets-galapagos-sea-lion",
    "name": "Galapagos Sea Lion",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Galapagos%20Sea%20Lion.webp"
  },
  {
    "id": "pets-zeopod",
    "name": "Zeopod",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Zeopod.webp"
  },
  {
    "id": "petwear-sandwich-hat",
    "name": "Sandwich Hat",
    "category": "petwear",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Sandwich%20Hat.webp"
  },
  {
    "id": "petwear-pink-instant-camera",
    "name": "Pink Instant Camera",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Pink%20Instant%20Camera.webp"
  },
  {
    "id": "toys-magic-house-door",
    "name": "Magic House Door",
    "category": "toys",
    "value": 0.3092,
    "demand": 2,
    "image": "/items/Magic%20House%20Door.webp"
  },
  {
    "id": "pets-lunar-white-tiger",
    "name": "Lunar White Tiger",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Lunar%20White%20Tiger.webp"
  },
  {
    "id": "petwear-dancing-tube-hat",
    "name": "Dancing Tube Hat",
    "category": "petwear",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Dancing%20Tube%20Hat.webp"
  },
  {
    "id": "strollers-easter-egg-stroller",
    "name": "Easter Egg Stroller",
    "category": "strollers",
    "value": 0.5181,
    "demand": 2,
    "image": "/items/Easter%20Egg%20Stroller.webp"
  },
  {
    "id": "pets-munchkin-cat",
    "name": "Munchkin Cat",
    "category": "pets",
    "value": 2.9635,
    "demand": 3,
    "image": "/items/Munchkin%20Cat.webp"
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
    "id": "stickers-phoenix-sticker",
    "name": "Phoenix Sticker",
    "category": "stickers",
    "value": 0.1288,
    "demand": 2,
    "image": "/items/Phoenix%20Sticker.webp"
  },
  {
    "id": "gifts-massive-gift",
    "name": "Massive Gift",
    "category": "gifts",
    "value": 0.04,
    "demand": 3,
    "image": ""
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
    "id": "potions-polymorph-potion",
    "name": "Polymorph Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "eggs-retired-egg",
    "name": "Retired Egg",
    "category": "eggs",
    "value": 0.027,
    "demand": 1,
    "image": "/items/Retired%20Egg.webp"
  },
  {
    "id": "vehicles-sports-bike",
    "name": "Sports Bike",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-eyepatch",
    "name": "Eyepatch",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Eyepatch.webp"
  },
  {
    "id": "pets-prismatic-butterfly",
    "name": "Prismatic Butterfly",
    "category": "pets",
    "value": 0.5927,
    "demand": 2,
    "image": "/items/Prismatic%20Butterfly.webp"
  },
  {
    "id": "pets-mexican-wolf",
    "name": "Mexican Wolf",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Mexican%20Wolf.webp"
  },
  {
    "id": "potions-super-ageup-potion",
    "name": "Super Age-Up Potion",
    "category": "potions",
    "value": 2.8,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-mechapup",
    "name": "Mechapup",
    "category": "pets",
    "value": 5.025,
    "demand": 3,
    "image": "/items/Mechapup.webp"
  },
  {
    "id": "pets-indian-leopard",
    "name": "Indian Leopard",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Indian%20Leopard.webp"
  },
  {
    "id": "pets-black-moon-bear",
    "name": "Black Moon Bear",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Black%20Moon%20Bear.webp"
  },
  {
    "id": "pets-siamese-cat",
    "name": "Siamese Cat",
    "category": "pets",
    "value": 6.4423,
    "demand": 3,
    "image": "/items/Siamese%20Cat.webp"
  },
  {
    "id": "vehicles-gingerbread-stunt-plane",
    "name": "Gingerbread Stunt Plane",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-personal-cannon-launcher",
    "name": "Personal Cannon Launcher",
    "category": "vehicles",
    "value": 0.27,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-pink-skateboard",
    "name": "Pink Skateboard",
    "category": "vehicles",
    "value": 0.7822,
    "demand": 1,
    "image": "/items/Pink%20Skateboard.webp"
  },
  {
    "id": "pets-royal-palace-spaniel",
    "name": "Royal Palace Spaniel",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Royal%20Palace%20Spaniel.webp"
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
    "id": "food-broken-egg",
    "name": "Broken Egg",
    "category": "food",
    "value": 0.67,
    "demand": 1,
    "image": "/items/Broken%20Egg.webp"
  },
  {
    "id": "vehicles-princess-carriage",
    "name": "Princess Carriage",
    "category": "vehicles",
    "value": 0.2421,
    "demand": 1,
    "image": "/items/Princess%20Carriage.webp"
  },
  {
    "id": "pets-firefighter-gibbon",
    "name": "Firefighter Gibbon",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Firefighter%20Gibbon.webp"
  },
  {
    "id": "food-golden-lettuce",
    "name": "Golden Lettuce",
    "category": "food",
    "value": 0.9019,
    "demand": 2,
    "image": "/items/Golden%20Lettuce.webp"
  },
  {
    "id": "pets-pupcake",
    "name": "Pupcake",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Pupcake.webp"
  },
  {
    "id": "eggs-aussie-egg",
    "name": "Aussie Egg",
    "category": "eggs",
    "value": 1.852,
    "demand": 3,
    "image": "/items/Aussie%20Egg.webp"
  },
  {
    "id": "pets-panda",
    "name": "Panda",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Panda.webp"
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
    "id": "pets-armadillo",
    "name": "Armadillo",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Armadillo.webp"
  },
  {
    "id": "petwear-city-hat",
    "name": "City Hat",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/City%20Hat.webp"
  },
  {
    "id": "petwear-halloween-orange-pumpkin-friend-hat",
    "name": "Halloween Orange Pumpkin Friend Hat",
    "category": "petwear",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Halloween%20Orange%20Pumpkin%20Friend%20Hat.webp"
  },
  {
    "id": "toys-cherry-blossom-hang-glider",
    "name": "Cherry Blossom Hang Glider",
    "category": "toys",
    "value": 1.8554,
    "demand": 2,
    "image": "/items/Cherry%20Blossom%20Hang%20Glider.webp"
  },
  {
    "id": "pets-oryx",
    "name": "Oryx",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Oryx.webp"
  },
  {
    "id": "pets-tarsier",
    "name": "Tarsier",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Tarsier.webp"
  },
  {
    "id": "pets-striped-eggy",
    "name": "Striped Eggy",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Striped%20Eggy.webp"
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
    "id": "petwear-ghost-kitty-backpack",
    "name": "Ghost Kitty Backpack",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Ghost%20Kitty%20Backpack.webp"
  },
  {
    "id": "vehicles-donut-unicycle",
    "name": "Donut Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-aestus",
    "name": "Aestus",
    "category": "pets",
    "value": 1.5462,
    "demand": 2,
    "image": "/items/Aestus.webp"
  },
  {
    "id": "pets-dracula-parrot",
    "name": "Dracula Parrot",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Dracula%20Parrot.webp"
  },
  {
    "id": "pets-undead-jousting-horse",
    "name": "Undead Jousting Horse",
    "category": "pets",
    "value": 19.0692,
    "demand": 3,
    "image": "/items/Undead%20Jousting%20Horse.webp"
  },
  {
    "id": "pets-ermine",
    "name": "Ermine",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Ermine.webp"
  },
  {
    "id": "pets-happy-duckling",
    "name": "Happy Duckling",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Happy%20Duckling.webp"
  },
  {
    "id": "pets-amami-rabbit",
    "name": "Amami Rabbit",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Amami%20Rabbit.webp"
  },
  {
    "id": "vehicles-banana-car",
    "name": "Banana Car",
    "category": "vehicles",
    "value": 0.0901,
    "demand": 1,
    "image": "/items/Banana%20Car.webp"
  },
  {
    "id": "pets-snow-puma",
    "name": "Snow Puma",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Snow%20Puma.webp"
  },
  {
    "id": "pets-queen-bee",
    "name": "Queen Bee",
    "category": "pets",
    "value": 0.8504,
    "demand": 2,
    "image": "/items/Queen%20Bee.webp"
  },
  {
    "id": "toys-discosplosion",
    "name": "Discosplosion",
    "category": "toys",
    "value": 0.2319,
    "demand": 2,
    "image": "/items/Discosplosion.webp"
  },
  {
    "id": "pets-dango-penguins",
    "name": "Dango Penguins",
    "category": "pets",
    "value": 0.8504,
    "demand": 2,
    "image": "/items/Dango%20Penguins.webp"
  },
  {
    "id": "vehicles-toy-delivery-truck",
    "name": "Toy Delivery Truck",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-hoverboard",
    "name": "Hoverboard",
    "category": "vehicles",
    "value": 0.1521,
    "demand": 1,
    "image": "/items/Hoverboard.webp"
  },
  {
    "id": "pets-glormy-crab",
    "name": "Glormy Crab",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Glormy%20Crab.webp"
  },
  {
    "id": "gifts-standard-wing-chest",
    "name": "Standard Wing Chest",
    "category": "gifts",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-tundra-exploration-machine",
    "name": "Tundra Exploration Machine",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-wizard-caravan",
    "name": "Wizard Caravan",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-golden-rat",
    "name": "Golden Rat",
    "category": "pets",
    "value": 0.5412,
    "demand": 2,
    "image": "/items/Golden%20Rat.webp"
  },
  {
    "id": "pets-rhino",
    "name": "Rhino",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Rhino.webp"
  },
  {
    "id": "pets-toy-monkey",
    "name": "Toy Monkey",
    "category": "pets",
    "value": 0.4896,
    "demand": 2,
    "image": "/items/Toy%20Monkey.webp"
  },
  {
    "id": "vehicles-modern-unicycle",
    "name": "Modern Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-frostbite-bear",
    "name": "Frostbite Bear",
    "category": "pets",
    "value": 11.0808,
    "demand": 2,
    "image": "/items/Frostbite%20Bear.webp"
  },
  {
    "id": "pets-rubber-ducky",
    "name": "Rubber Ducky",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Rubber%20Ducky.webp"
  },
  {
    "id": "petwear-banana-hat",
    "name": "Banana Hat",
    "category": "petwear",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Banana%20Hat.webp"
  },
  {
    "id": "pets-dog",
    "name": "Dog",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Dog.webp"
  },
  {
    "id": "petwear-eco-brown-branch-headphones",
    "name": "Eco Brown Branch Headphones",
    "category": "petwear",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Eco%20Brown%20Branch%20Headphones.webp"
  },
  {
    "id": "pets-corgi",
    "name": "Corgi",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Corgi.webp"
  },
  {
    "id": "petwear-volcanic-boots",
    "name": "Volcanic Boots",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Volcanic%20Boots.webp"
  },
  {
    "id": "vehicles-waffle-wagon",
    "name": "Waffle Wagon",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "strollers-pumpkin-stroller",
    "name": "Pumpkin Stroller",
    "category": "strollers",
    "value": 0.1633,
    "demand": 1,
    "image": "/items/Pumpkin%20Stroller.webp"
  },
  {
    "id": "petwear-unicorn-horn",
    "name": "Unicorn Horn",
    "category": "petwear",
    "value": 6.4423,
    "demand": 3,
    "image": "/items/Unicorn%20Horn.webp"
  },
  {
    "id": "pets-diamond-griffin",
    "name": "Diamond Griffin",
    "category": "pets",
    "value": 0.2448,
    "demand": 1,
    "image": "/items/Diamond%20Griffin.webp"
  },
  {
    "id": "petwear-festive-antlers",
    "name": "Festive Antlers",
    "category": "petwear",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Festive%20Antlers.webp"
  },
  {
    "id": "petwear-ghost-hat",
    "name": "Ghost Hat",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Ghost%20Hat.webp"
  },
  {
    "id": "pets-shih-tzu",
    "name": "Shih Tzu",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Shih%20Tzu.webp"
  },
  {
    "id": "pets-marabou-stork",
    "name": "Marabou Stork",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Marabou%20Stork.webp"
  },
  {
    "id": "gifts-wolf-box",
    "name": "Wolf Box",
    "category": "gifts",
    "value": 0.5572,
    "demand": 2,
    "image": "/items/Wolf%20Box.webp"
  },
  {
    "id": "pets-halloween-black-mummy-cat",
    "name": "Halloween Black Mummy Cat",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Halloween%20Black%20Mummy%20Cat.webp"
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
    "id": "strollers-balloon-stroller",
    "name": "Balloon Stroller",
    "category": "strollers",
    "value": 0.1352,
    "demand": 1,
    "image": "/items/Balloon%20Stroller.webp"
  },
  {
    "id": "strollers-elephant-stroller",
    "name": "Elephant Stroller",
    "category": "strollers",
    "value": 0.1633,
    "demand": 1,
    "image": "/items/Elephant%20Stroller.webp"
  },
  {
    "id": "pets-sunrise-duckling",
    "name": "Sunrise Duckling",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Sunrise%20Duckling.webp"
  },
  {
    "id": "pets-dj-snooze",
    "name": "DJ Snooze",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/DJ%20Snooze.webp"
  },
  {
    "id": "petwear-corndog-mustache",
    "name": "Corndog Mustache",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Corndog%20Mustache.webp"
  },
  {
    "id": "pets-island-tarsier",
    "name": "Island Tarsier",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Island%20Tarsier.webp"
  },
  {
    "id": "pets-leopard-shark",
    "name": "Leopard Shark",
    "category": "pets",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Leopard%20Shark.webp"
  },
  {
    "id": "pets-villain-gibbon",
    "name": "Villain Gibbon",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Villain%20Gibbon.webp"
  },
  {
    "id": "pets-mouse",
    "name": "Mouse",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Mouse.webp"
  },
  {
    "id": "pets-orange-betta-fish",
    "name": "Orange Betta Fish",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Orange%20Betta%20Fish.webp"
  },
  {
    "id": "toys-snow-cone-stand",
    "name": "Snow Cone Stand",
    "category": "toys",
    "value": 0.2577,
    "demand": 2,
    "image": "/items/Snow%20Cone%20Stand.webp"
  },
  {
    "id": "pets-liger",
    "name": "Liger",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Liger.webp"
  },
  {
    "id": "strollers-triple-stroller",
    "name": "Triple Stroller",
    "category": "strollers",
    "value": 0.0676,
    "demand": 1,
    "image": "/items/Triple%20Stroller.webp"
  },
  {
    "id": "pets-french-bulldog",
    "name": "French Bulldog",
    "category": "pets",
    "value": 0.4896,
    "demand": 2,
    "image": "/items/French%20Bulldog.webp"
  },
  {
    "id": "stickers-mermicorn-animated-sticker",
    "name": "Mermicorn Animated Sticker",
    "category": "stickers",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Mermicorn%20Animated%20Sticker.webp"
  },
  {
    "id": "petwear-clockwork-wings",
    "name": "Clockwork Wings",
    "category": "petwear",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Clockwork%20Wings.webp"
  },
  {
    "id": "pets-red-panda-ducky",
    "name": "Red Panda Ducky",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Red%20Panda%20Ducky.webp"
  },
  {
    "id": "pets-fire-foal",
    "name": "Fire Foal",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Fire%20Foal.webp"
  },
  {
    "id": "pets-hammerhead-shark",
    "name": "Hammerhead Shark",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Hammerhead%20Shark.webp"
  },
  {
    "id": "eggs-moon-egg",
    "name": "Moon Egg",
    "category": "eggs",
    "value": 0.0428,
    "demand": 1,
    "image": "/items/Moon%20Egg.webp"
  },
  {
    "id": "pets-lava-wolf",
    "name": "Lava Wolf",
    "category": "pets",
    "value": 0.5927,
    "demand": 2,
    "image": "/items/Lava%20Wolf.webp"
  },
  {
    "id": "gifts-halloween-chick-box",
    "name": "Halloween Chick Box",
    "category": "gifts",
    "value": 0.1633,
    "demand": 1,
    "image": "/items/Halloween%20Chick%20Box.webp"
  },
  {
    "id": "pets-gingerbread-mouse",
    "name": "Gingerbread Mouse",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Gingerbread%20Mouse.webp"
  },
  {
    "id": "pets-frost-phoenix",
    "name": "Frost Phoenix",
    "category": "pets",
    "value": 0.8246,
    "demand": 2,
    "image": "/items/Frost%20Phoenix.webp"
  },
  {
    "id": "vehicles-horse-cycle",
    "name": "Horse Cycle",
    "category": "vehicles",
    "value": 2.2847,
    "demand": 2,
    "image": "/items/Horse%20Cycle.webp"
  },
  {
    "id": "vehicles-unicycle",
    "name": "Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-corsair-cruiser",
    "name": "Corsair Cruiser",
    "category": "vehicles",
    "value": 0.05,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-cerberus",
    "name": "Cerberus",
    "category": "pets",
    "value": 1.34,
    "demand": 3,
    "image": "/items/Cerberus.webp"
  },
  {
    "id": "pets-cryptid",
    "name": "Cryptid",
    "category": "pets",
    "value": 37.6231,
    "demand": 3,
    "image": "/items/Cryptid.webp"
  },
  {
    "id": "pets-gold-mahi-mahi",
    "name": "Gold Mahi Mahi",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Gold%20Mahi%20Mahi.webp"
  },
  {
    "id": "pets-winter-doe",
    "name": "Winter Doe",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Winter%20Doe.webp"
  },
  {
    "id": "stickers-strawberry-shortcake-bat-dragon-sticker",
    "name": "Strawberry Shortcake Bat Dragon Sticker",
    "category": "stickers",
    "value": 0.2577,
    "demand": 2,
    "image": "/items/Strawberry%20Shortcake%20Bat%20Dragon%20Sticker.webp"
  },
  {
    "id": "petwear-firey-aura",
    "name": "Firey Aura",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Firey%20Aura.webp"
  },
  {
    "id": "toys-netzooka",
    "name": "Netzooka",
    "category": "toys",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Netzooka.webp"
  },
  {
    "id": "pets-japanese-snow-fairy",
    "name": "Japanese Snow Fairy",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Japanese%20Snow%20Fairy.webp"
  },
  {
    "id": "stickers-parrot-sticker",
    "name": "Parrot Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Parrot%20Sticker.webp"
  },
  {
    "id": "pets-mirai-moth",
    "name": "Mirai Moth",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Mirai%20Moth.webp"
  },
  {
    "id": "pets-chocolate-labrador",
    "name": "Chocolate Labrador",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Chocolate%20Labrador.webp"
  },
  {
    "id": "pets-super-saru",
    "name": "Super Saru",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Super%20Saru.webp"
  },
  {
    "id": "stickers-hamster-selfie-sticker",
    "name": "Hamster Selfie Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Hamster%20Selfie%20Sticker.webp"
  },
  {
    "id": "pets-woodpecker",
    "name": "Woodpecker",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Woodpecker.webp"
  },
  {
    "id": "vehicles-adopt-me-snowboard-1",
    "name": "Adopt Me Snowboard 1",
    "category": "vehicles",
    "value": 1.154,
    "demand": 1,
    "image": "/items/Adopt%20Me%20Snowboard%201.webp"
  },
  {
    "id": "vehicles-giant-cheetah-mount",
    "name": "Giant Cheetah Mount",
    "category": "vehicles",
    "value": 5.7017,
    "demand": 2,
    "image": "/items/Giant%20Cheetah%20Mount.webp"
  },
  {
    "id": "petwear-2022-birthday-cupcake-shoes",
    "name": "2022 Birthday Cupcake Shoes",
    "category": "petwear",
    "value": 5.7981,
    "demand": 3,
    "image": "/items/2022%20Birthday%20Cupcake%20Shoes.webp"
  },
  {
    "id": "pets-lava-dragon",
    "name": "Lava Dragon",
    "category": "pets",
    "value": 1.675,
    "demand": 2,
    "image": "/items/Lava%20Dragon.webp"
  },
  {
    "id": "pets-otter",
    "name": "Otter",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Otter.webp"
  },
  {
    "id": "stickers-winter-deer-family-sticker",
    "name": "Winter Deer Family Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Winter%20Deer%20Family%20Sticker.webp"
  },
  {
    "id": "toys-egg-rattle",
    "name": "Egg Rattle",
    "category": "toys",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Egg%20Rattle.webp"
  },
  {
    "id": "pets-halloween-blue-scorpion",
    "name": "Halloween Blue Scorpion",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Halloween%20Blue%20Scorpion.webp"
  },
  {
    "id": "pets-glormy-dolphin",
    "name": "Glormy Dolphin",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Glormy%20Dolphin.webp"
  },
  {
    "id": "strollers-web-stroller",
    "name": "Web Stroller",
    "category": "strollers",
    "value": 1.6316,
    "demand": 1,
    "image": "/items/Web%20Stroller.webp"
  },
  {
    "id": "pets-black-kite",
    "name": "Black Kite",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Black%20Kite.webp"
  },
  {
    "id": "pets-kookaburra",
    "name": "Kookaburra",
    "category": "pets",
    "value": 0.9535,
    "demand": 2,
    "image": "/items/Kookaburra.webp"
  },
  {
    "id": "pets-urchin",
    "name": "Urchin",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Urchin.webp"
  },
  {
    "id": "vehicles-lava-racer",
    "name": "Lava Racer",
    "category": "vehicles",
    "value": 0.1746,
    "demand": 1,
    "image": "/items/Lava%20Racer.webp"
  },
  {
    "id": "petwear-chef-hat",
    "name": "Chef Hat",
    "category": "petwear",
    "value": 0.6185,
    "demand": 2,
    "image": "/items/Chef%20Hat.webp"
  },
  {
    "id": "pets-officer-gibbon",
    "name": "Officer Gibbon",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Officer%20Gibbon.webp"
  },
  {
    "id": "vehicles-ancient-unicycle",
    "name": "Ancient Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-rat",
    "name": "Rat",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Rat.webp"
  },
  {
    "id": "pets-blue-ringed-octopus",
    "name": "Blue Ringed Octopus",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Blue%20Ringed%20Octopus.webp"
  },
  {
    "id": "pets-blackchested-pheasant",
    "name": "Black-Chested Pheasant",
    "category": "pets",
    "value": 4.5096,
    "demand": 2,
    "image": "/items/Black-Chested%20Pheasant.webp"
  },
  {
    "id": "pets-nightmare-owl",
    "name": "Nightmare Owl",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Nightmare%20Owl.webp"
  },
  {
    "id": "petwear-kraken-hat",
    "name": "Kraken Hat",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Kraken%20Hat.webp"
  },
  {
    "id": "pets-mochi-meow",
    "name": "Mochi Meow",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Mochi%20Meow.webp"
  },
  {
    "id": "petwear-halo",
    "name": "Halo",
    "category": "petwear",
    "value": 11.0808,
    "demand": 3,
    "image": "/items/Halo.webp"
  },
  {
    "id": "vehicles-santa-copter",
    "name": "Santa Copter",
    "category": "vehicles",
    "value": 0.1409,
    "demand": 1,
    "image": "/items/Santa%20Copter.webp"
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
    "id": "pets-ghost-dog",
    "name": "Ghost Dog",
    "category": "pets",
    "value": 0.5927,
    "demand": 3,
    "image": "/items/Ghost%20Dog.webp"
  },
  {
    "id": "pets-strawberry-tortle",
    "name": "Strawberry Tortle",
    "category": "pets",
    "value": 8.2462,
    "demand": 2,
    "image": "/items/Strawberry%20Tortle.webp"
  },
  {
    "id": "pets-dire-stag",
    "name": "Dire Stag",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Dire%20Stag.webp"
  },
  {
    "id": "gifts-admin-abuse-box",
    "name": "Admin Abuse Box",
    "category": "gifts",
    "value": 0.0293,
    "demand": 1,
    "image": "/items/Admin%20Abuse%20Box.webp"
  },
  {
    "id": "pets-diamond-albatross",
    "name": "Diamond Albatross",
    "category": "pets",
    "value": 1.675,
    "demand": 2,
    "image": "/items/Diamond%20Albatross.webp"
  },
  {
    "id": "stickers-winter-2024-sticker-pack",
    "name": "Winter 2024 Sticker Pack",
    "category": "stickers",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Winter%202024%20Sticker%20Pack.webp"
  },
  {
    "id": "toys-christmas-doge-rattle",
    "name": "Christmas Doge Rattle",
    "category": "toys",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Christmas%20Doge%20Rattle.webp"
  },
  {
    "id": "stickers-squished-red-pandorama-sticker",
    "name": "Squished Red Pandorama Sticker",
    "category": "stickers",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Squished%20Red%20Pandorama%20Sticker.webp"
  },
  {
    "id": "petwear-thinking-hat",
    "name": "Thinking Hat",
    "category": "petwear",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Thinking%20Hat.webp"
  },
  {
    "id": "toys-slimingo-feather-teleporter",
    "name": "Slimingo Feather Teleporter",
    "category": "toys",
    "value": 0.1031,
    "demand": 2,
    "image": "/items/Slimingo%20Feather%20Teleporter.webp"
  },
  {
    "id": "pets-red-dutch-guinea-pig",
    "name": "Red Dutch Guinea Pig",
    "category": "pets",
    "value": 2.5769,
    "demand": 2,
    "image": "/items/Red%20Dutch%20Guinea%20Pig.webp"
  },
  {
    "id": "stickers-elephant-sticker",
    "name": "Elephant Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Elephant%20Sticker.webp"
  },
  {
    "id": "pets-flaming-fox",
    "name": "Flaming Fox",
    "category": "pets",
    "value": 0.8246,
    "demand": 2,
    "image": "/items/Flaming%20Fox.webp"
  },
  {
    "id": "pets-basilisk",
    "name": "Basilisk",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Basilisk.webp"
  },
  {
    "id": "vehicles-firework-cycle",
    "name": "Firework Cycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-mistletroll",
    "name": "Mistletroll",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Mistletroll.webp"
  },
  {
    "id": "petwear-balloon-dog",
    "name": "Balloon Dog",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Balloon%20Dog.webp"
  },
  {
    "id": "food-golden-wheat",
    "name": "Golden Wheat",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Golden%20Wheat.webp"
  },
  {
    "id": "pets-ghost-bunny",
    "name": "Ghost Bunny",
    "category": "pets",
    "value": 0.6442,
    "demand": 3,
    "image": "/items/Ghost%20Bunny.webp"
  },
  {
    "id": "pets-frostclaw",
    "name": "Frostclaw",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Frostclaw.webp"
  },
  {
    "id": "pets-merhorse",
    "name": "Merhorse",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Merhorse.webp"
  },
  {
    "id": "toys-tropical-surge-paint",
    "name": "Tropical Surge Mega Neon Paint",
    "category": "toys",
    "value": 0.2062,
    "demand": 3,
    "image": "/items/Tropical%20Surge%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "food-maple-leaf-treat",
    "name": "Maple Leaf Treat",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Maple%20Leaf%20Treat.webp"
  },
  {
    "id": "pets-maleo-bird",
    "name": "Maleo Bird",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Maleo%20Bird.webp"
  },
  {
    "id": "pets-jiggly-jerboa",
    "name": "Jiggly Jerboa",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Jiggly%20Jerboa.webp"
  },
  {
    "id": "toys-teddy-bear",
    "name": "Teddy Bear",
    "category": "toys",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Teddy%20Bear.webp"
  },
  {
    "id": "petwear-blue-cat-ear-headphones",
    "name": "Blue Cat Ear Headphones",
    "category": "petwear",
    "value": 0.2835,
    "demand": 2,
    "image": "/items/Blue%20Cat%20Ear%20Headphones.webp"
  },
  {
    "id": "gifts-rat-box",
    "name": "Rat Box",
    "category": "gifts",
    "value": 4.924,
    "demand": 2,
    "image": "/items/Rat%20Box.webp"
  },
  {
    "id": "pets-frost-unicorn",
    "name": "Frost Unicorn",
    "category": "pets",
    "value": 4.5096,
    "demand": 3,
    "image": "/items/Frost%20Unicorn.webp"
  },
  {
    "id": "toys-strawberry-toast-flying-disc",
    "name": "Strawberry Toast Flying Disc",
    "category": "toys",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Strawberry%20Toast%20Flying%20Disc.webp"
  },
  {
    "id": "food-chocolate-twist",
    "name": "Chocolate Twist",
    "category": "food",
    "value": 0.5669,
    "demand": 2,
    "image": "/items/Chocolate%20Twist.webp"
  },
  {
    "id": "stickers-poodle-sticker",
    "name": "Poodle Sticker",
    "category": "stickers",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Poodle%20Sticker.webp"
  },
  {
    "id": "vehicles-classic-helicopter",
    "name": "Classic Helicopter",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-sakura-scythe",
    "name": "Sakura Scythe",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Sakura%20Scythe.webp"
  },
  {
    "id": "pets-vulture",
    "name": "Vulture",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Vulture.webp"
  },
  {
    "id": "pets-gargoyle",
    "name": "Gargoyle",
    "category": "pets",
    "value": 0.4638,
    "demand": 1,
    "image": "/items/Gargoyle.webp"
  },
  {
    "id": "toys-classic-trade-stand",
    "name": "Classic Trade Stand",
    "category": "toys",
    "value": 0.2577,
    "demand": 2,
    "image": "/items/Classic%20Trade%20Stand.webp"
  },
  {
    "id": "stickers-rat-sticker",
    "name": "Rat Sticker",
    "category": "stickers",
    "value": 0.0412,
    "demand": 1,
    "image": "/items/Rat%20Sticker.webp"
  },
  {
    "id": "pets-goldhorn",
    "name": "Goldhorn",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Goldhorn.webp"
  },
  {
    "id": "stickers-frostclaw-animated-sticker",
    "name": "Frostclaw Animated Sticker",
    "category": "stickers",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Frostclaw%20Animated%20Sticker.webp"
  },
  {
    "id": "vehicles-santas-sleigh",
    "name": "Santa's Sleigh",
    "category": "vehicles",
    "value": 0.1633,
    "demand": 1,
    "image": "/items/Santas%20Sleigh.webp"
  },
  {
    "id": "vehicles-glass-snowboard",
    "name": "Glass Snowboard",
    "category": "vehicles",
    "value": 1.1656,
    "demand": 1,
    "image": "/items/Glass%20Snowboard.webp"
  },
  {
    "id": "strollers-trike-stroller",
    "name": "Trike Stroller",
    "category": "strollers",
    "value": 0.1352,
    "demand": 1,
    "image": "/items/Trike%20Stroller.webp"
  },
  {
    "id": "vehicles-dragonster",
    "name": "Dragonster",
    "category": "vehicles",
    "value": 0.1183,
    "demand": 1,
    "image": "/items/Dragonster.webp"
  },
  {
    "id": "petwear-candy-corn-hat",
    "name": "Candy Corn Hat",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Candy%20Corn%20Hat.webp"
  },
  {
    "id": "pets-ghost",
    "name": "Ghost",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Ghost.webp"
  },
  {
    "id": "gifts-spider-box",
    "name": "Spider Box",
    "category": "gifts",
    "value": 0.11,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-happy-clam",
    "name": "Happy Clam",
    "category": "pets",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Happy%20Clam.webp"
  },
  {
    "id": "vehicles-circus-ball-unicycle",
    "name": "Circus Ball Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-bandicoot",
    "name": "Bandicoot",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Bandicoot.webp"
  },
  {
    "id": "vehicles-speedboat",
    "name": "Speedboat",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-pirate-hat-friend",
    "name": "Pirate Hat & Friend",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Pirate%20Hat%20%26%20Friend.webp"
  },
  {
    "id": "vehicles-emperors-chariot",
    "name": "Emperor's Chariot",
    "category": "vehicles",
    "value": 0.1521,
    "demand": 1,
    "image": "/items/Emperors%20Chariot.webp"
  },
  {
    "id": "pets-punk-pony",
    "name": "Punk Pony",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Punk%20Pony.webp"
  },
  {
    "id": "pets-zebra",
    "name": "Zebra",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Zebra.webp"
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
    "id": "pets-silly-duck",
    "name": "Silly Duck",
    "category": "pets",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Silly%20Duck.webp"
  },
  {
    "id": "pets-leviathan",
    "name": "Leviathan",
    "category": "pets",
    "value": 0.8246,
    "demand": 2,
    "image": "/items/Leviathan.webp"
  },
  {
    "id": "pets-frogspawn",
    "name": "Frogspawn",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Frogspawn.webp"
  },
  {
    "id": "eggs-southeast-asia-egg",
    "name": "Southeast Asia Egg",
    "category": "eggs",
    "value": 0.2533,
    "demand": 2,
    "image": "/items/Southeast%20Asia%20Egg.webp"
  },
  {
    "id": "strollers-french-fries-stroller",
    "name": "French Fries Stroller",
    "category": "strollers",
    "value": 0.1691,
    "demand": 1,
    "image": "/items/French%20Fries%20Stroller.webp"
  },
  {
    "id": "petwear-energy-aura-feet",
    "name": "Energy Aura Feet",
    "category": "petwear",
    "value": 0.2577,
    "demand": 2,
    "image": "/items/Energy%20Aura%20Feet.webp"
  },
  {
    "id": "petwear-strawberry-hat",
    "name": "Strawberry Hat",
    "category": "petwear",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Strawberry%20Hat.webp"
  },
  {
    "id": "toys-cookie-dough-plush",
    "name": "Cookie Dough Plush",
    "category": "toys",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Cookie%20Dough%20Plush.webp"
  },
  {
    "id": "vehicles-cloud-car",
    "name": "Cloud Car",
    "category": "vehicles",
    "value": 8.7615,
    "demand": 2,
    "image": "/items/Cloud%20Car.webp"
  },
  {
    "id": "petwear-nest-of-eggs",
    "name": "Nest of Eggs",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Nest%20of%20Eggs.webp"
  },
  {
    "id": "pets-narwhal",
    "name": "Narwhal",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Narwhal.webp"
  },
  {
    "id": "gifts-premium-gorilla-box",
    "name": "Premium Gorilla Box",
    "category": "gifts",
    "value": 1.6881,
    "demand": 2,
    "image": "/items/Premium%20Gorilla%20Box.webp"
  },
  {
    "id": "food-dim-sum",
    "name": "Dim Sum",
    "category": "food",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Dim%20Sum.webp"
  },
  {
    "id": "stickers-fire-dimension-sticker-pack",
    "name": "Fire Dimension Sticker Pack",
    "category": "stickers",
    "value": 0.018,
    "demand": 1,
    "image": "/items/Fire%20Dimension%20Sticker%20Pack.webp"
  },
  {
    "id": "pets-cozy-mistletroll",
    "name": "Cozy Mistletroll",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Cozy%20Mistletroll.webp"
  },
  {
    "id": "pets-sasquatch",
    "name": "Sasquatch",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Sasquatch.webp"
  },
  {
    "id": "stickers-dinner-discourse-cat-sticker",
    "name": "Dinner Discourse Cat Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Dinner%20Discourse%20Cat%20Sticker.webp"
  },
  {
    "id": "strollers-flower-stroller",
    "name": "Flower Stroller",
    "category": "strollers",
    "value": 0.2252,
    "demand": 1,
    "image": "/items/Flower%20Stroller.webp"
  },
  {
    "id": "vehicles-unicorn-zombie-ponycycle",
    "name": "Unicorn Zombie Ponycycle",
    "category": "vehicles",
    "value": 0.152,
    "demand": 1,
    "image": "/items/Unicorn%20Zombie%20Ponycycle.webp"
  },
  {
    "id": "gifts-regal-wing-chest",
    "name": "Regal Wing Chest",
    "category": "gifts",
    "value": 0.5234,
    "demand": 2,
    "image": "/items/Regal%20Wing%20Chest.webp"
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
    "id": "vehicles-gold-snowboard",
    "name": "Gold Snowboard",
    "category": "vehicles",
    "value": 2.7251,
    "demand": 1,
    "image": "/items/Gold%20Snowboard.webp"
  },
  {
    "id": "pets-frost-dragon",
    "name": "Frost Dragon",
    "category": "pets",
    "value": 87.6154,
    "demand": 3,
    "image": "/items/Frost%20Dragon.webp"
  },
  {
    "id": "pets-pangolin",
    "name": "Pangolin",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Pangolin.webp"
  },
  {
    "id": "vehicles-candy-camper",
    "name": "Candy Camper",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-cobra",
    "name": "Cobra",
    "category": "pets",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Cobra.webp"
  },
  {
    "id": "petwear-buzzing-honeypot-hat",
    "name": "Buzzing Honeypot Hat",
    "category": "petwear",
    "value": 37.6231,
    "demand": 2,
    "image": "/items/Buzzing%20Honeypot%20Hat.webp"
  },
  {
    "id": "pets-sheepdog-ducky",
    "name": "Sheepdog Ducky",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Sheepdog%20Ducky.webp"
  },
  {
    "id": "pets-longhorn-cow",
    "name": "Longhorn Cow",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Longhorn%20Cow.webp"
  },
  {
    "id": "vehicles-snowblower-toboggan",
    "name": "Snowblower Toboggan",
    "category": "vehicles",
    "value": 0.124,
    "demand": 1,
    "image": "/items/Snowblower%20Toboggan.webp"
  },
  {
    "id": "pets-meerkat",
    "name": "Meerkat",
    "category": "pets",
    "value": 1.675,
    "demand": 2,
    "image": "/items/Meerkat.webp"
  },
  {
    "id": "eggs-jungle-egg",
    "name": "Jungle Egg",
    "category": "eggs",
    "value": 25.3725,
    "demand": 2,
    "image": "/items/Jungle%20Egg.webp"
  },
  {
    "id": "pets-lunar-tiger",
    "name": "Lunar Tiger",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Lunar%20Tiger.webp"
  },
  {
    "id": "gifts-kelp-raider-box",
    "name": "Kelp Raider Box",
    "category": "gifts",
    "value": 0.13,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-alpaca",
    "name": "Alpaca",
    "category": "pets",
    "value": 6.0558,
    "demand": 3,
    "image": "/items/Alpaca.webp"
  },
  {
    "id": "pets-ginger-cat",
    "name": "Ginger Cat",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Ginger%20Cat.webp"
  },
  {
    "id": "gifts-standard-gibbon-box",
    "name": "Standard Gibbon Box",
    "category": "gifts",
    "value": 0.0788,
    "demand": 1,
    "image": "/items/Standard%20Gibbon%20Box.webp"
  },
  {
    "id": "pets-wyvern",
    "name": "Wyvern",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Wyvern.webp"
  },
  {
    "id": "strollers-airplane-stroller",
    "name": "Airplane Stroller",
    "category": "strollers",
    "value": 0.16,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-chicken-hat",
    "name": "Chicken Hat",
    "category": "petwear",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Chicken%20Hat.webp"
  },
  {
    "id": "petwear-red-yellow-beads",
    "name": "Red & Yellow Beads",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Red%20%26%20Yellow%20Beads.webp"
  },
  {
    "id": "toys-zombie-buffalo-plush",
    "name": "Zombie Buffalo Plush",
    "category": "toys",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Zombie%20Buffalo%20Plush.webp"
  },
  {
    "id": "pets-candy-hare",
    "name": "Candy Hare",
    "category": "pets",
    "value": 0.7215,
    "demand": 2,
    "image": "/items/Candy%20Hare.webp"
  },
  {
    "id": "petwear-human-feet-shoes",
    "name": "Human Feet Shoes",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Human%20Feet%20Shoes.webp"
  },
  {
    "id": "petwear-ferris-wheel-hat",
    "name": "Ferris Wheel Hat",
    "category": "petwear",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Ferris%20Wheel%20Hat.webp"
  },
  {
    "id": "eggs-ocean-egg",
    "name": "Ocean Egg",
    "category": "eggs",
    "value": 0.2645,
    "demand": 2,
    "image": "/items/Ocean%20Egg.webp"
  },
  {
    "id": "pets-starhopper",
    "name": "Starhopper",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Starhopper.webp"
  },
  {
    "id": "pets-diamond-mahi-mahi",
    "name": "Diamond Mahi Mahi",
    "category": "pets",
    "value": 0.219,
    "demand": 1,
    "image": "/items/Diamond%20Mahi%20Mahi.webp"
  },
  {
    "id": "pets-sugar-axolotl",
    "name": "Sugar Axolotl",
    "category": "pets",
    "value": 4.2519,
    "demand": 3,
    "image": "/items/Sugar%20Axolotl.webp"
  },
  {
    "id": "strollers-bunny-stroller",
    "name": "Bunny Stroller",
    "category": "strollers",
    "value": 0.5464,
    "demand": 2,
    "image": "/items/Bunny%20Stroller.webp"
  },
  {
    "id": "vehicles-crescent-moon-car",
    "name": "Crescent Moon Car",
    "category": "vehicles",
    "value": 1.6887,
    "demand": 2,
    "image": "/items/Crescent%20Moon%20Car.webp"
  },
  {
    "id": "gifts-aberdeen-angus-box",
    "name": "Aberdeen Angus Box",
    "category": "gifts",
    "value": 0.09,
    "demand": 3,
    "image": ""
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
    "id": "strollers-floating-hand-stroller",
    "name": "Floating Hand Stroller",
    "category": "strollers",
    "value": 0.9062,
    "demand": 2,
    "image": "/items/Floating%20Hand%20Stroller.webp"
  },
  {
    "id": "petwear-glormy-backpack",
    "name": "Glormy Backpack",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Glormy%20Backpack.webp"
  },
  {
    "id": "eggs-endangered-egg",
    "name": "Endangered Egg",
    "category": "eggs",
    "value": 0.027,
    "demand": 1,
    "image": "/items/Endangered%20Egg.webp"
  },
  {
    "id": "pets-giant-black-scarab",
    "name": "Giant Black Scarab",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Giant%20Black%20Scarab.webp"
  },
  {
    "id": "vehicles-trireme",
    "name": "Trireme",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-winter-fawn",
    "name": "Winter Fawn",
    "category": "pets",
    "value": 0.219,
    "demand": 1,
    "image": "/items/Winter%20Fawn.webp"
  },
  {
    "id": "pets-shetland-pony-dark-brown",
    "name": "Shetland Pony Dark Brown",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Shetland%20Pony%20Dark%20Brown.webp"
  },
  {
    "id": "pets-royal-corgi",
    "name": "Royal Corgi",
    "category": "pets",
    "value": 0.6958,
    "demand": 2,
    "image": "/items/Royal%20Corgi.webp"
  },
  {
    "id": "pets-gorilla",
    "name": "Gorilla",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Gorilla.webp"
  },
  {
    "id": "food-apet-potion",
    "name": "Ride-A-Pet Potion",
    "category": "food",
    "value": 0.335,
    "demand": 3,
    "image": "/items/Ride-A-Pet%20Potion.webp"
  },
  {
    "id": "petwear-yellow-designer-backpack",
    "name": "Yellow Designer Backpack",
    "category": "petwear",
    "value": 0.0206,
    "demand": 1,
    "image": "/items/Yellow%20Designer%20Backpack.webp"
  },
  {
    "id": "pets-badger",
    "name": "Badger",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Badger.webp"
  },
  {
    "id": "pets-phoenix",
    "name": "Phoenix",
    "category": "pets",
    "value": 0.5412,
    "demand": 2,
    "image": "/items/Phoenix.webp"
  },
  {
    "id": "pets-sugar-glider",
    "name": "Sugar Glider",
    "category": "pets",
    "value": 7.8596,
    "demand": 3,
    "image": "/items/Sugar%20Glider.webp"
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
    "id": "pets-golden-griffin",
    "name": "Golden Griffin",
    "category": "pets",
    "value": 0.219,
    "demand": 1,
    "image": "/items/Golden%20Griffin.webp"
  },
  {
    "id": "pets-solaris",
    "name": "Solaris",
    "category": "pets",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Solaris.webp"
  },
  {
    "id": "pets-golden-dragon",
    "name": "Golden Dragon",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Golden%20Dragon.webp"
  },
  {
    "id": "petwear-hive-backpack",
    "name": "Hive Backpack",
    "category": "petwear",
    "value": 18.5538,
    "demand": 2,
    "image": "/items/Hive%20Backpack.webp"
  },
  {
    "id": "petwear-alien-eyes-hat",
    "name": "Alien Eyes Hat",
    "category": "petwear",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Alien%20Eyes%20Hat.webp"
  },
  {
    "id": "pets-diamond-unicorn",
    "name": "Diamond Unicorn",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Diamond%20Unicorn.webp"
  },
  {
    "id": "food-stars-egg",
    "name": "Stars Egg",
    "category": "food",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Stars%20Egg.webp"
  },
  {
    "id": "gifts-premium-monkey-box",
    "name": "Premium Monkey Box",
    "category": "gifts",
    "value": 16.53,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-axolotl",
    "name": "Axolotl",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Axolotl.webp"
  },
  {
    "id": "pets-scarecrow",
    "name": "Scarecrow",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Scarecrow.webp"
  },
  {
    "id": "vehicles-dapper-friend-carrier",
    "name": "Dapper Friend Carrier",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-creator-rattle",
    "name": "Creator Rattle (NewFissy)",
    "category": "toys",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Creator%20Rattle%20(NewFissy).webp"
  },
  {
    "id": "petwear-lava-lamp-hat",
    "name": "Lava Lamp Hat",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Lava%20Lamp%20Hat.webp"
  },
  {
    "id": "toys-sunrise-hang-glider",
    "name": "Sunrise Hang Glider",
    "category": "toys",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Sunrise%20Hang%20Glider.webp"
  },
  {
    "id": "pets-honey-badger",
    "name": "Honey Badger",
    "category": "pets",
    "value": 1.8038,
    "demand": 2,
    "image": "/items/Honey%20Badger.webp"
  },
  {
    "id": "eggs-diamond-egg",
    "name": "Diamond Egg",
    "category": "eggs",
    "value": 0.2195,
    "demand": 1,
    "image": "/items/Diamond%20Egg.webp"
  },
  {
    "id": "pets-st-bernard",
    "name": "St Bernard",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/St%20Bernard.webp"
  },
  {
    "id": "pets-singularity-beetle",
    "name": "Singularity Beetle",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Singularity%20Beetle.webp"
  },
  {
    "id": "stickers-jekyll-hydra-animated-sticker",
    "name": "Jekyll Hydra Animated Sticker",
    "category": "stickers",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Jekyll%20Hydra%20Animated%20Sticker.webp"
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
    "id": "vehicles-family-car",
    "name": "Family Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-wing-trunk-car",
    "name": "Wing Trunk Car",
    "category": "vehicles",
    "value": 0.2533,
    "demand": 1,
    "image": "/items/Wing%20Trunk%20Car.webp"
  },
  {
    "id": "strollers-duck-stroller",
    "name": "Duck Stroller",
    "category": "strollers",
    "value": 0.8615,
    "demand": 2,
    "image": "/items/Duck%20Stroller.webp"
  },
  {
    "id": "food-leaf",
    "name": "Leaf",
    "category": "food",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Leaf.webp"
  },
  {
    "id": "eggs-japan-egg",
    "name": "Japan Egg",
    "category": "eggs",
    "value": 0.1857,
    "demand": 2,
    "image": "/items/Japan%20Egg.webp"
  },
  {
    "id": "potions-big-head-potion",
    "name": "Big Head Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-standard-roller-skates",
    "name": "Standard Roller Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "gifts-standard-capuchin-box",
    "name": "Standard Capuchin Box",
    "category": "gifts",
    "value": 0.1351,
    "demand": 1,
    "image": "/items/Standard%20Capuchin%20Box.webp"
  },
  {
    "id": "pets-jekyll-hydra",
    "name": "Jekyll Hydra",
    "category": "pets",
    "value": 17.7808,
    "demand": 3,
    "image": "/items/Jekyll%20Hydra.webp"
  },
  {
    "id": "stickers-pig-sticker",
    "name": "Pig Sticker",
    "category": "stickers",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Pig%20Sticker.webp"
  },
  {
    "id": "vehicles-offroader",
    "name": "Offroader",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-angus-bull",
    "name": "Angus Bull",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Angus%20Bull.webp"
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
    "id": "pets-tio-de-nadal",
    "name": "Tio De Nadal",
    "category": "pets",
    "value": 5.4115,
    "demand": 2,
    "image": "/items/Tio%20De%20Nadal.webp"
  },
  {
    "id": "vehicles-daisymobile",
    "name": "Daisymobile",
    "category": "vehicles",
    "value": 0.5402,
    "demand": 2,
    "image": "/items/Daisymobile.webp"
  },
  {
    "id": "eggs-cracked-egg",
    "name": "Cracked Egg",
    "category": "eggs",
    "value": 0.0248,
    "demand": 1,
    "image": "/items/Cracked%20Egg.webp"
  },
  {
    "id": "vehicles-pizza-unicycle",
    "name": "Pizza Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-hedgehog",
    "name": "Hedgehog",
    "category": "pets",
    "value": 19.0692,
    "demand": 3,
    "image": "/items/Hedgehog.webp"
  },
  {
    "id": "pets-monkey-king",
    "name": "Monkey King",
    "category": "pets",
    "value": 10.3077,
    "demand": 2,
    "image": "/items/Monkey%20King.webp"
  },
  {
    "id": "pets-beluga-whale",
    "name": "Beluga Whale",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Beluga%20Whale.webp"
  },
  {
    "id": "gifts-big-gift",
    "name": "Big Gift",
    "category": "gifts",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-brown-bear",
    "name": "Brown Bear",
    "category": "pets",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Brown%20Bear.webp"
  },
  {
    "id": "pets-glyptodon",
    "name": "Glyptodon",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Glyptodon.webp"
  },
  {
    "id": "pets-king-penguin",
    "name": "King Penguin",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/King%20Penguin.webp"
  },
  {
    "id": "pets-mosquito",
    "name": "Mosquito",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Mosquito.webp"
  },
  {
    "id": "pets-cassowary",
    "name": "Cassowary",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Cassowary.webp"
  },
  {
    "id": "petwear-purple-heart-glasses",
    "name": "Purple Heart Glasses",
    "category": "petwear",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Purple%20Heart%20Glasses.webp"
  },
  {
    "id": "pets-diamond-hamster",
    "name": "Diamond Hamster",
    "category": "pets",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Diamond%20Hamster.webp"
  },
  {
    "id": "pets-2021-uplift-butterfly",
    "name": "2021 Uplift Butterfly",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/2021%20Uplift%20Butterfly.webp"
  },
  {
    "id": "vehicles-tandem-bicycle",
    "name": "Tandem Bicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-phoenix-plush",
    "name": "Phoenix Plush",
    "category": "toys",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Phoenix%20Plush.webp"
  },
  {
    "id": "pets-white-choccybunny",
    "name": "White Choccybunny",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/White%20Choccybunny.webp"
  },
  {
    "id": "stickers-pelican-sticker",
    "name": "Pelican Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Pelican%20Sticker.webp"
  },
  {
    "id": "pets-dragonfruit-fox",
    "name": "Dragonfruit Fox",
    "category": "pets",
    "value": 1.0823,
    "demand": 2,
    "image": "/items/Dragonfruit%20Fox.webp"
  },
  {
    "id": "pets-oakee",
    "name": "Oakee",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Oakee.webp"
  },
  {
    "id": "pets-puffin",
    "name": "Puffin",
    "category": "pets",
    "value": 1.5977,
    "demand": 2,
    "image": "/items/Puffin.webp"
  },
  {
    "id": "vehicles-hovertible",
    "name": "Hovertible",
    "category": "vehicles",
    "value": 0.0901,
    "demand": 1,
    "image": "/items/Hovertible.webp"
  },
  {
    "id": "pets-arctic-dusk-dragon",
    "name": "Arctic Dusk Dragon",
    "category": "pets",
    "value": 1.2369,
    "demand": 2,
    "image": "/items/Arctic%20Dusk%20Dragon.webp"
  },
  {
    "id": "vehicles-keyboard-skateboard",
    "name": "Keyboard Skateboard",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "gifts-small-gift",
    "name": "Small Gift",
    "category": "gifts",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "eggs-aztec-egg",
    "name": "Aztec Egg",
    "category": "eggs",
    "value": 0.0304,
    "demand": 1,
    "image": "/items/Aztec%20Egg.webp"
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
    "id": "pets-moon-rabbit",
    "name": "Moon Rabbit",
    "category": "pets",
    "value": 0.4123,
    "demand": 2,
    "image": "/items/Moon%20Rabbit.webp"
  },
  {
    "id": "petwear-santa-hat",
    "name": "Santa Hat",
    "category": "petwear",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Santa%20Hat.webp"
  },
  {
    "id": "pets-inmate-capuchin-monkey",
    "name": "Inmate Capuchin Monkey",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Inmate%20Capuchin%20Monkey.webp"
  },
  {
    "id": "petwear-police-cap",
    "name": "Police Cap",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Police%20Cap.webp"
  },
  {
    "id": "petwear-elf-shoes",
    "name": "Elf Shoes",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Elf%20Shoes.webp"
  },
  {
    "id": "vehicles-cupcake-scooter",
    "name": "Cupcake Scooter",
    "category": "vehicles",
    "value": 0.2986,
    "demand": 1,
    "image": "/items/Cupcake%20Scooter.webp"
  },
  {
    "id": "pets-tortuga-de-la-isla",
    "name": "Tortuga de la Isla",
    "category": "pets",
    "value": 2.0615,
    "demand": 2,
    "image": "/items/Tortuga%20de%20la%20Isla.webp"
  },
  {
    "id": "stickers-tree-decorating-animated-sticker",
    "name": "Tree Decorating Animated Sticker",
    "category": "stickers",
    "value": 0.3092,
    "demand": 2,
    "image": "/items/Tree%20Decorating%20Animated%20Sticker.webp"
  },
  {
    "id": "pets-tanuki",
    "name": "Tanuki",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Tanuki.webp"
  },
  {
    "id": "pets-skunk",
    "name": "Skunk",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Skunk.webp"
  },
  {
    "id": "strollers-half-egg-stroller",
    "name": "Half Egg Stroller",
    "category": "strollers",
    "value": 0.5181,
    "demand": 2,
    "image": "/items/Half%20Egg%20Stroller.webp"
  },
  {
    "id": "strollers-tulip-stroller",
    "name": "Tulip Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "stickers-frostbite-bear-and-cub-animated-sticker",
    "name": "Frostbite Bear and Cub Animated Sticker",
    "category": "stickers",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Frostbite%20Bear%20and%20Cub%20Animated%20Sticker.webp"
  },
  {
    "id": "pets-cheetah",
    "name": "Cheetah",
    "category": "pets",
    "value": 0.7988,
    "demand": 2,
    "image": "/items/Cheetah.webp"
  },
  {
    "id": "petwear-rainbow-maker",
    "name": "Rainbow Maker",
    "category": "petwear",
    "value": 18.8115,
    "demand": 3,
    "image": "/items/Rainbow%20Maker.webp"
  },
  {
    "id": "toys-unicorn-leash",
    "name": "Unicorn Leash",
    "category": "toys",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Unicorn%20Leash.webp"
  },
  {
    "id": "pets-princess-capuchin-monkey",
    "name": "Princess Capuchin Monkey",
    "category": "pets",
    "value": 0.4123,
    "demand": 1,
    "image": "/items/Princess%20Capuchin%20Monkey.webp"
  },
  {
    "id": "vehicles-camping-van",
    "name": "Camping Van",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-snowmobile",
    "name": "Snowmobile",
    "category": "vehicles",
    "value": 0.1803,
    "demand": 1,
    "image": "/items/Snowmobile.webp"
  },
  {
    "id": "gifts-halloween-mummy-cat-box",
    "name": "Halloween Mummy Cat Box",
    "category": "gifts",
    "value": 0.2308,
    "demand": 1,
    "image": "/items/Halloween%20Mummy%20Cat%20Box.webp"
  },
  {
    "id": "petwear-watermelon-backpack",
    "name": "Watermelon Backpack",
    "category": "petwear",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Watermelon%20Backpack.webp"
  },
  {
    "id": "stickers-premium-sticker-pack",
    "name": "Premium Sticker Pack",
    "category": "stickers",
    "value": 0.2319,
    "demand": 2,
    "image": "/items/Premium%20Sticker%20Pack.webp"
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
    "id": "pets-snorgle",
    "name": "Snorgle",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Snorgle.webp"
  },
  {
    "id": "petwear-2022-birthday-party-horn",
    "name": "2022 Birthday Party Horn",
    "category": "petwear",
    "value": 4.2519,
    "demand": 3,
    "image": "/items/2022%20Birthday%20Party%20Horn.webp"
  },
  {
    "id": "pets-black-rhino",
    "name": "Black Rhino",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Black%20Rhino.webp"
  },
  {
    "id": "pets-lavender-dragon",
    "name": "Lavender Dragon",
    "category": "pets",
    "value": 0.7988,
    "demand": 2,
    "image": "/items/Lavender%20Dragon.webp"
  },
  {
    "id": "pets-rock",
    "name": "Rock",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Rock.webp"
  },
  {
    "id": "petwear-butter-knife",
    "name": "Butter Knife",
    "category": "petwear",
    "value": 0.3092,
    "demand": 2,
    "image": "/items/Butter%20Knife.webp"
  },
  {
    "id": "pets-tegu",
    "name": "Tegu",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Tegu.webp"
  },
  {
    "id": "pets-cocoadile",
    "name": "Cocoadile",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Cocoadile.webp"
  },
  {
    "id": "petwear-shadow-wings",
    "name": "Shadow Wings",
    "category": "petwear",
    "value": 1.0308,
    "demand": 2,
    "image": "/items/Shadow%20Wings.webp"
  },
  {
    "id": "toys-electric-tide-paint",
    "name": "Electric Tide Mega Neon Paint",
    "category": "toys",
    "value": 0.2062,
    "demand": 3,
    "image": "/items/Electric%20Tide%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "pets-chestnut-glyptodon",
    "name": "Chestnut Glyptodon",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Chestnut%20Glyptodon.webp"
  },
  {
    "id": "gifts-lunar-new-year-gift-box",
    "name": "Lunar New Year Gift Box",
    "category": "gifts",
    "value": 0.33,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-albino-monkey",
    "name": "Albino Monkey",
    "category": "pets",
    "value": 4.7673,
    "demand": 3,
    "image": "/items/Albino%20Monkey.webp"
  },
  {
    "id": "pets-kelp-hunter",
    "name": "Kelp Hunter",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Kelp%20Hunter.webp"
  },
  {
    "id": "pets-koi-carp",
    "name": "Koi Carp",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Koi%20Carp.webp"
  },
  {
    "id": "pets-albino-gorilla",
    "name": "Albino Gorilla",
    "category": "pets",
    "value": 0.8246,
    "demand": 2,
    "image": "/items/Albino%20Gorilla.webp"
  },
  {
    "id": "stickers-super-saru-animated-sticker",
    "name": "Super Saru Animated Sticker",
    "category": "stickers",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Super%20Saru%20Animated%20Sticker.webp"
  },
  {
    "id": "pets-bunny-swirl",
    "name": "Bunny Swirl",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Bunny%20Swirl.webp"
  },
  {
    "id": "vehicles-tractor",
    "name": "Tractor",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-dragon",
    "name": "Dragon",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Dragon.webp"
  },
  {
    "id": "pets-wood-pigeon",
    "name": "Wood Pigeon",
    "category": "pets",
    "value": 0.7988,
    "demand": 2,
    "image": "/items/Wood%20Pigeon.webp"
  },
  {
    "id": "strollers-snow-globe-stroller",
    "name": "Snow Globe Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-rose-petal-carriage",
    "name": "Rose Petal Carriage",
    "category": "vehicles",
    "value": 0.9172,
    "demand": 2,
    "image": "/items/Rose%20Petal%20Carriage.webp"
  },
  {
    "id": "petwear-2022-birthday-5-badge",
    "name": "2022 Birthday 5 Badge",
    "category": "petwear",
    "value": 0.3092,
    "demand": 2,
    "image": "/items/2022%20Birthday%205%20Badge.webp"
  },
  {
    "id": "pets-snowman",
    "name": "Snowman",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Snowman.webp"
  },
  {
    "id": "eggs-urban-egg",
    "name": "Urban Egg",
    "category": "eggs",
    "value": 0.4221,
    "demand": 2,
    "image": "/items/Urban%20Egg.webp"
  },
  {
    "id": "petwear-invisible-wings",
    "name": "Invisible Wings",
    "category": "petwear",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Invisible%20Wings.webp"
  },
  {
    "id": "pets-hummingbird",
    "name": "Hummingbird",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Hummingbird.webp"
  },
  {
    "id": "pets-turkey",
    "name": "Turkey",
    "category": "pets",
    "value": 0.7215,
    "demand": 2,
    "image": "/items/Turkey.webp"
  },
  {
    "id": "gifts-2d-box",
    "name": "2D Box",
    "category": "gifts",
    "value": 0.0844,
    "demand": 1,
    "image": "/items/2D%20Box.webp"
  },
  {
    "id": "petwear-pink-cat-ear-headphones",
    "name": "Pink Cat Ear Headphones",
    "category": "petwear",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Pink%20Cat%20Ear%20Headphones.webp"
  },
  {
    "id": "vehicles-glass-skateboard",
    "name": "Glass Skateboard",
    "category": "vehicles",
    "value": 0.1859,
    "demand": 1,
    "image": "/items/Glass%20Skateboard.webp"
  },
  {
    "id": "pets-hyena",
    "name": "Hyena",
    "category": "pets",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Hyena.webp"
  },
  {
    "id": "stickers-fox-sticker",
    "name": "Fox Sticker",
    "category": "stickers",
    "value": 0.0644,
    "demand": 1,
    "image": "/items/Fox%20Sticker.webp"
  },
  {
    "id": "food-honey",
    "name": "Honey",
    "category": "food",
    "value": 0.2319,
    "demand": 2,
    "image": "/items/Honey.webp"
  },
  {
    "id": "pets-sabertooth",
    "name": "Sabertooth",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Sabertooth.webp"
  },
  {
    "id": "vehicles-red-scooter",
    "name": "Neon Red Scooter",
    "category": "vehicles",
    "value": 0.4956,
    "demand": 1,
    "image": "/items/Neon%20Red%20Scooter.webp"
  },
  {
    "id": "pets-pink-betta-fish",
    "name": "Pink Betta Fish",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Pink%20Betta%20Fish.webp"
  },
  {
    "id": "toys-sour-glider",
    "name": "Sour Glider",
    "category": "toys",
    "value": 0.1031,
    "demand": 2,
    "image": "/items/Sour%20Glider.webp"
  },
  {
    "id": "toys-axe-rattle",
    "name": "Axe Rattle",
    "category": "toys",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Axe%20Rattle.webp"
  },
  {
    "id": "pets-ibex",
    "name": "Ibex",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Ibex.webp"
  },
  {
    "id": "vehicles-landsailer",
    "name": "Landsailer",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "stickers-flamingo-sticker",
    "name": "Flamingo Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Flamingo%20Sticker.webp"
  },
  {
    "id": "vehicles-hot-air-balloon",
    "name": "Hot Air Balloon",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-flower-truck",
    "name": "Flower Truck",
    "category": "vehicles",
    "value": 1.6097,
    "demand": 2,
    "image": "/items/Flower%20Truck.webp"
  },
  {
    "id": "vehicles-egg-delivery-machine",
    "name": "Egg Delivery Machine",
    "category": "vehicles",
    "value": 0.1296,
    "demand": 1,
    "image": "/items/Egg%20Delivery%20Machine.webp"
  },
  {
    "id": "potions-small-sip-potion",
    "name": "Small Sip Potion",
    "category": "potions",
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
    "id": "gifts-regal-chest",
    "name": "Regal Chest",
    "category": "gifts",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-teddy-skele",
    "name": "Teddy Skele",
    "category": "toys",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Teddy%20Skele.webp"
  },
  {
    "id": "petwear-eco-brown-earthwizard-hat",
    "name": "Eco Brown Earth-Wizard Hat",
    "category": "petwear",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Eco%20Brown%20Earth-Wizard%20Hat.webp"
  },
  {
    "id": "pets-ninja-monkey",
    "name": "Ninja Monkey",
    "category": "pets",
    "value": 0.67,
    "demand": 2,
    "image": "/items/Ninja%20Monkey.webp"
  },
  {
    "id": "food-golden-bone",
    "name": "Golden Bone",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Golden%20Bone.webp"
  },
  {
    "id": "pets-banded-palm-civet",
    "name": "Banded Palm Civet",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Banded%20Palm%20Civet.webp"
  },
  {
    "id": "pets-angus-calf",
    "name": "Angus Calf",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Angus%20Calf.webp"
  },
  {
    "id": "petwear-cowboy-saddle",
    "name": "Cowboy Saddle",
    "category": "petwear",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Cowboy%20Saddle.webp"
  },
  {
    "id": "pets-sea-slug",
    "name": "Sea Slug",
    "category": "pets",
    "value": 2.9635,
    "demand": 2,
    "image": "/items/Sea%20Slug.webp"
  },
  {
    "id": "strollers-unicorn-stroller",
    "name": "Unicorn Stroller",
    "category": "strollers",
    "value": 0.7938,
    "demand": 2,
    "image": "/items/Unicorn%20Stroller.webp"
  },
  {
    "id": "toys-stygian-hang-glider",
    "name": "Stygian Hang Glider",
    "category": "toys",
    "value": 0.1031,
    "demand": 2,
    "image": "/items/Stygian%20Hang%20Glider.webp"
  },
  {
    "id": "petwear-steampunk-clock-hat",
    "name": "Steampunk Clock Hat",
    "category": "petwear",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Steampunk%20Clock%20Hat.webp"
  },
  {
    "id": "vehicles-snow-plow",
    "name": "Snow Plow",
    "category": "vehicles",
    "value": 0.0676,
    "demand": 1,
    "image": "/items/Snow%20Plow.webp"
  },
  {
    "id": "petwear-spring-bunny-feet",
    "name": "Spring Bunny Feet",
    "category": "petwear",
    "value": 0.8246,
    "demand": 2,
    "image": "/items/Spring%20Bunny%20Feet.webp"
  },
  {
    "id": "pets-orangutan",
    "name": "Orangutan",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Orangutan.webp"
  },
  {
    "id": "food-golden-seed-ball",
    "name": "Golden Seed Ball",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Golden%20Seed%20Ball.webp"
  },
  {
    "id": "pets-berry-cool-cube",
    "name": "Berry Cool Cube",
    "category": "pets",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Berry%20Cool%20Cube.webp"
  },
  {
    "id": "pets-hippo",
    "name": "Hippo",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Hippo.webp"
  },
  {
    "id": "pets-cabbit",
    "name": "Cabbit",
    "category": "pets",
    "value": 7.7308,
    "demand": 3,
    "image": "/items/Cabbit.webp"
  },
  {
    "id": "pets-ash-zebra",
    "name": "Ash Zebra",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Ash%20Zebra.webp"
  },
  {
    "id": "petwear-sailor-cap",
    "name": "Sailor Cap",
    "category": "petwear",
    "value": 0.67,
    "demand": 2,
    "image": "/items/Sailor%20Cap.webp"
  },
  {
    "id": "pets-penguin",
    "name": "Penguin",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Penguin.webp"
  },
  {
    "id": "pets-winged-horse",
    "name": "Winged Horse",
    "category": "pets",
    "value": 0.4381,
    "demand": 2,
    "image": "/items/Winged%20Horse.webp"
  },
  {
    "id": "pets-golden-hamster",
    "name": "Golden Hamster",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Golden%20Hamster.webp"
  },
  {
    "id": "gifts-bat-box",
    "name": "Bat Box",
    "category": "gifts",
    "value": 0.681,
    "demand": 2,
    "image": "/items/Bat%20Box.webp"
  },
  {
    "id": "pets-milk-choccybunny",
    "name": "Milk Choccybunny",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Milk%20Choccybunny.webp"
  },
  {
    "id": "pets-burger-bear",
    "name": "Burger Bear",
    "category": "pets",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/Burger%20Bear.webp"
  },
  {
    "id": "food-golden-corn",
    "name": "Golden Corn",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Golden%20Corn.webp"
  },
  {
    "id": "pets-shark",
    "name": "Shark",
    "category": "pets",
    "value": 0.5412,
    "demand": 2,
    "image": "/items/Shark.webp"
  },
  {
    "id": "pets-diamond-amazon",
    "name": "Diamond Amazon",
    "category": "pets",
    "value": 1.9327,
    "demand": 2,
    "image": "/items/Diamond%20Amazon.webp"
  },
  {
    "id": "pets-bat",
    "name": "Bat",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Bat.webp"
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
    "id": "pets-coconut-friend",
    "name": "Coconut Friend",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Coconut%20Friend.webp"
  },
  {
    "id": "pets-yellow-butterfly",
    "name": "Yellow Butterfly",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Yellow%20Butterfly.webp"
  },
  {
    "id": "toys-chinese-lantern",
    "name": "Chinese Lantern",
    "category": "toys",
    "value": 2.5769,
    "demand": 2,
    "image": "/items/Chinese%20Lantern.webp"
  },
  {
    "id": "vehicles-classic-american-car",
    "name": "Classic American Car",
    "category": "vehicles",
    "value": 0.27,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-magma-moose",
    "name": "Magma Moose",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Magma%20Moose.webp"
  },
  {
    "id": "petwear-satellite-spinner",
    "name": "Satellite Spinner",
    "category": "petwear",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Satellite%20Spinner.webp"
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
    "id": "petwear-ember-wings",
    "name": "Ember Wings",
    "category": "petwear",
    "value": 1.5462,
    "demand": 2,
    "image": "/items/Ember%20Wings.webp"
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
    "id": "pets-gilded-snake",
    "name": "Gilded Snake",
    "category": "pets",
    "value": 0.4123,
    "demand": 1,
    "image": "/items/Gilded%20Snake.webp"
  },
  {
    "id": "pets-orchid-butterfly",
    "name": "Orchid Butterfly",
    "category": "pets",
    "value": 29.3769,
    "demand": 3,
    "image": "/items/Orchid%20Butterfly.webp"
  },
  {
    "id": "pets-prism-snake",
    "name": "Prism Snake",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Prism%20Snake.webp"
  },
  {
    "id": "petwear-ssbd-sunnies",
    "name": "SSBD Sunnies",
    "category": "petwear",
    "value": 41.2308,
    "demand": 2,
    "image": "/items/SSBD%20Sunnies.webp"
  },
  {
    "id": "petwear-dragonfly-fairy-wings",
    "name": "Dragonfly Fairy Wings",
    "category": "petwear",
    "value": 3.8654,
    "demand": 2,
    "image": "/items/Dragonfly%20Fairy%20Wings.webp"
  },
  {
    "id": "pets-ranger-beaver",
    "name": "Ranger Beaver",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Ranger%20Beaver.webp"
  },
  {
    "id": "pets-malaysian-tapir",
    "name": "Malaysian Tapir",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Malaysian%20Tapir.webp"
  },
  {
    "id": "pets-latte-kitsune",
    "name": "Latte Kitsune",
    "category": "pets",
    "value": 0.6958,
    "demand": 2,
    "image": "/items/Latte%20Kitsune.webp"
  },
  {
    "id": "petwear-cotton-candy-hat",
    "name": "Cotton Candy Hat",
    "category": "petwear",
    "value": 0.3092,
    "demand": 2,
    "image": "/items/Cotton%20Candy%20Hat.webp"
  },
  {
    "id": "vehicles-moped",
    "name": "Moped",
    "category": "vehicles",
    "value": 0.5687,
    "demand": 1,
    "image": "/items/Moped.webp"
  },
  {
    "id": "stickers-mochi-meow-tumble-animated-sticker",
    "name": "Mochi Meow Tumble Animated Sticker",
    "category": "stickers",
    "value": 0.2835,
    "demand": 2,
    "image": "/items/Mochi%20Meow%20Tumble%20Animated%20Sticker.webp"
  },
  {
    "id": "pets-mongoose",
    "name": "Mongoose",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Mongoose.webp"
  },
  {
    "id": "petwear-heart-ribbon",
    "name": "Heart Ribbon",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Heart%20Ribbon.webp"
  },
  {
    "id": "pets-chanekeh",
    "name": "Chanekeh",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Chanekeh.webp"
  },
  {
    "id": "pets-pirate-ghost-capuchin-monkey",
    "name": "Pirate Ghost Capuchin Monkey",
    "category": "pets",
    "value": 6.8288,
    "demand": 3,
    "image": "/items/Pirate%20Ghost%20Capuchin%20Monkey.webp"
  },
  {
    "id": "pets-orca",
    "name": "Orca",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Orca.webp"
  },
  {
    "id": "pets-border-collie",
    "name": "Border Collie",
    "category": "pets",
    "value": 3.0923,
    "demand": 2,
    "image": "/items/Border%20Collie.webp"
  },
  {
    "id": "pets-dalmatian",
    "name": "Dalmatian",
    "category": "pets",
    "value": 17.0077,
    "demand": 3,
    "image": "/items/Dalmatian.webp"
  },
  {
    "id": "vehicles-monomoped",
    "name": "Mono-Moped",
    "category": "vehicles",
    "value": 1.2783,
    "demand": 2,
    "image": "/items/Mono-Moped.webp"
  },
  {
    "id": "pets-mini-schnauzer",
    "name": "Mini Schnauzer",
    "category": "pets",
    "value": 0.4896,
    "demand": 2,
    "image": "/items/Mini%20Schnauzer.webp"
  },
  {
    "id": "eggs-safari-egg",
    "name": "Safari Egg",
    "category": "eggs",
    "value": 64.73,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-ancient-dragon",
    "name": "Ancient Dragon",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Ancient%20Dragon.webp"
  },
  {
    "id": "pets-evil-basilisk",
    "name": "Evil Basilisk",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Evil%20Basilisk.webp"
  },
  {
    "id": "pets-winged-tiger",
    "name": "Winged Tiger",
    "category": "pets",
    "value": 4.5096,
    "demand": 3,
    "image": "/items/Winged%20Tiger.webp"
  },
  {
    "id": "pets-ram",
    "name": "Ram",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Ram.webp"
  },
  {
    "id": "pets-eggnog-hare",
    "name": "Eggnog Hare",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Eggnog%20Hare.webp"
  },
  {
    "id": "pets-pomeranian",
    "name": "Pomeranian",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Pomeranian.webp"
  },
  {
    "id": "pets-onza",
    "name": "Onza",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Onza.webp"
  },
  {
    "id": "pets-blue-dog",
    "name": "Blue Dog",
    "category": "pets",
    "value": 3.8654,
    "demand": 3,
    "image": "/items/Blue%20Dog.webp"
  },
  {
    "id": "pets-ox",
    "name": "Ox",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Ox.webp"
  },
  {
    "id": "vehicles-hovercar",
    "name": "Hovercar",
    "category": "vehicles",
    "value": 0.0901,
    "demand": 1,
    "image": "/items/Hovercar.webp"
  },
  {
    "id": "petwear-glamicorn-purse-pet",
    "name": "Glamicorn Purse Pet",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Glamicorn%20Purse%20Pet.webp"
  },
  {
    "id": "petwear-giraffe-backpack",
    "name": "Giraffe Backpack",
    "category": "petwear",
    "value": 19.5846,
    "demand": 2,
    "image": "/items/Giraffe%20Backpack.webp"
  },
  {
    "id": "vehicles-douglas",
    "name": "Douglas",
    "category": "vehicles",
    "value": 0.1408,
    "demand": 1,
    "image": "/items/Douglas.webp"
  },
  {
    "id": "pets-kelp-raider",
    "name": "Kelp Raider",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Kelp%20Raider.webp"
  },
  {
    "id": "pets-cuddly-candle",
    "name": "Cuddly Candle",
    "category": "pets",
    "value": 0.4123,
    "demand": 1,
    "image": "/items/Cuddly%20Candle.webp"
  },
  {
    "id": "pets-alicorn",
    "name": "Alicorn",
    "category": "pets",
    "value": 0.219,
    "demand": 1,
    "image": "/items/Alicorn.webp"
  },
  {
    "id": "petwear-festive-stocking-shoes",
    "name": "Festive Stocking Shoes",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Festive%20Stocking%20Shoes.webp"
  },
  {
    "id": "pets-rock-pigeon",
    "name": "Rock Pigeon",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Rock%20Pigeon.webp"
  },
  {
    "id": "vehicles-sled",
    "name": "Sled",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-therapy-dog",
    "name": "Therapy Dog",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Therapy%20Dog.webp"
  },
  {
    "id": "pets-tortoiseshell-guinea-pig",
    "name": "Tortoiseshell Guinea Pig",
    "category": "pets",
    "value": 7.0865,
    "demand": 2,
    "image": "/items/Tortoiseshell%20Guinea%20Pig.webp"
  },
  {
    "id": "stickers-shark-puppy-sticker",
    "name": "Shark Puppy Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Shark%20Puppy%20Sticker.webp"
  },
  {
    "id": "pets-golden-walrus",
    "name": "Golden Walrus",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Golden%20Walrus.webp"
  },
  {
    "id": "pets-chameleon",
    "name": "Chameleon",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Chameleon.webp"
  },
  {
    "id": "pets-king-bee",
    "name": "King Bee",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/King%20Bee.webp"
  },
  {
    "id": "pets-elasmosaurus",
    "name": "Elasmosaurus",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Elasmosaurus.webp"
  },
  {
    "id": "pets-angler-fish",
    "name": "Angler Fish",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Angler%20Fish.webp"
  },
  {
    "id": "toys-santa-throne",
    "name": "Santa Throne",
    "category": "toys",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Santa%20Throne.webp"
  },
  {
    "id": "pets-chickatrice",
    "name": "Chickatrice",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Chickatrice.webp"
  },
  {
    "id": "pets-sea-skeleton-panda",
    "name": "Sea Skeleton Panda",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Sea%20Skeleton%20Panda.webp"
  },
  {
    "id": "pets-vermilion-butterfly",
    "name": "Vermilion Butterfly",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Vermilion%20Butterfly.webp"
  },
  {
    "id": "vehicles-glass-scooter",
    "name": "Glass Scooter",
    "category": "vehicles",
    "value": 0.1859,
    "demand": 1,
    "image": "/items/Glass%20Scooter.webp"
  },
  {
    "id": "strollers-cannon-stroller",
    "name": "Cannon Stroller",
    "category": "strollers",
    "value": 0.1409,
    "demand": 1,
    "image": "/items/Cannon%20Stroller.webp"
  },
  {
    "id": "pets-gingerbread-reindeer",
    "name": "Gingerbread Reindeer",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Gingerbread%20Reindeer.webp"
  },
  {
    "id": "vehicles-green-scooter",
    "name": "Neon Green Scooter",
    "category": "vehicles",
    "value": 0.5968,
    "demand": 1,
    "image": "/items/Neon%20Green%20Scooter.webp"
  },
  {
    "id": "pets-vampire-dragon",
    "name": "Vampire Dragon",
    "category": "pets",
    "value": 3.6077,
    "demand": 3,
    "image": "/items/Vampire%20Dragon.webp"
  },
  {
    "id": "pets-indian-flying-fox",
    "name": "Indian Flying Fox",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Indian%20Flying%20Fox.webp"
  },
  {
    "id": "pets-stygian-owl",
    "name": "Stygian Owl",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Stygian%20Owl.webp"
  },
  {
    "id": "stickers-wailing-mr-whiskerpips-sticker",
    "name": "Wailing Mr. Whiskerpips Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Wailing%20Mr.%20Whiskerpips%20Sticker.webp"
  },
  {
    "id": "petwear-aviator-hat",
    "name": "Aviator Hat",
    "category": "petwear",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Aviator%20Hat.webp"
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
    "id": "pets-majestic-pony",
    "name": "Majestic Pony",
    "category": "pets",
    "value": 0.8504,
    "demand": 2,
    "image": "/items/Majestic%20Pony.webp"
  },
  {
    "id": "vehicles-racing-monoplane",
    "name": "Racing Monoplane",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-gaelic-fae",
    "name": "Gaelic Fae",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Gaelic%20Fae.webp"
  },
  {
    "id": "pets-lunar-ox",
    "name": "Lunar Ox",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Lunar%20Ox.webp"
  },
  {
    "id": "pets-arctic-reindeer",
    "name": "Arctic Reindeer",
    "category": "pets",
    "value": 13.9154,
    "demand": 3,
    "image": "/items/Arctic%20Reindeer.webp"
  },
  {
    "id": "stickers-blazing-lion-animated-sticker",
    "name": "Blazing Lion Animated Sticker",
    "category": "stickers",
    "value": 2.0615,
    "demand": 2,
    "image": "/items/Blazing%20Lion%20Animated%20Sticker.webp"
  },
  {
    "id": "pets-velocirooster",
    "name": "Velocirooster",
    "category": "pets",
    "value": 4.3808,
    "demand": 2,
    "image": "/items/Velocirooster.webp"
  },
  {
    "id": "pets-burning-bunny",
    "name": "Burning Bunny",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Burning%20Bunny.webp"
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
    "id": "pets-frankenfeline",
    "name": "Frankenfeline",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Frankenfeline.webp"
  },
  {
    "id": "pets-giant-panda",
    "name": "Giant Panda",
    "category": "pets",
    "value": 63.9077,
    "demand": 3,
    "image": "/items/Giant%20Panda.webp"
  },
  {
    "id": "pets-tarantula",
    "name": "Tarantula",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Tarantula.webp"
  },
  {
    "id": "pets-clownfish",
    "name": "Clownfish",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Clownfish.webp"
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
    "id": "pets-tree-frog",
    "name": "Tree Frog",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Tree%20Frog.webp"
  },
  {
    "id": "vehicles-rabbit-helicopter",
    "name": "Rabbit Helicopter",
    "category": "vehicles",
    "value": 0.5462,
    "demand": 1,
    "image": "/items/Rabbit%20Helicopter.webp"
  },
  {
    "id": "pets-deinonychus",
    "name": "Deinonychus",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Deinonychus.webp"
  },
  {
    "id": "pets-canadian-goose",
    "name": "Canadian Goose",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Canadian%20Goose.webp"
  },
  {
    "id": "petwear-2022-birthday-party-hat",
    "name": "2022 Birthday Party Hat",
    "category": "petwear",
    "value": 8.2462,
    "demand": 3,
    "image": "/items/2022%20Birthday%20Party%20Hat.webp"
  },
  {
    "id": "vehicles-bunny-carriage",
    "name": "Bunny Carriage",
    "category": "vehicles",
    "value": 4.8233,
    "demand": 2,
    "image": "/items/Bunny%20Carriage.webp"
  },
  {
    "id": "pets-chilling-spider",
    "name": "Chilling Spider",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Chilling%20Spider.webp"
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
    "id": "petwear-flower-aura",
    "name": "Flower Aura",
    "category": "petwear",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Flower%20Aura.webp"
  },
  {
    "id": "toys-fall-corn-grappling-hook",
    "name": "Fall Corn Grappling Hook",
    "category": "toys",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Fall%20Corn%20Grappling%20Hook.webp"
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
    "id": "pets-storm-condor",
    "name": "Storm Condor",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Storm%20Condor.webp"
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
    "id": "vehicles-flying-cloud",
    "name": "Flying Cloud",
    "category": "vehicles",
    "value": 0.7824,
    "demand": 2,
    "image": "/items/Flying%20Cloud.webp"
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
    "id": "vehicles-dino-truck",
    "name": "Dino Truck",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-shetland-pony-white",
    "name": "Shetland Pony White",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Shetland%20Pony%20White.webp"
  },
  {
    "id": "pets-moonbeam-butterfly",
    "name": "Moonbeam Butterfly",
    "category": "pets",
    "value": 0.67,
    "demand": 2,
    "image": "/items/Moonbeam%20Butterfly.webp"
  },
  {
    "id": "petwear-black-designer-backpack",
    "name": "Black Designer Backpack",
    "category": "petwear",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Black%20Designer%20Backpack.webp"
  },
  {
    "id": "pets-caterpillar",
    "name": "Caterpillar",
    "category": "pets",
    "value": 5.6692,
    "demand": 3,
    "image": "/items/Caterpillar.webp"
  },
  {
    "id": "pets-astronaut-gorilla",
    "name": "Astronaut Gorilla",
    "category": "pets",
    "value": 0.5927,
    "demand": 2,
    "image": "/items/Astronaut%20Gorilla.webp"
  },
  {
    "id": "vehicles-halloween-black-ponycycle",
    "name": "Halloween Black Ponycycle",
    "category": "vehicles",
    "value": 0.2534,
    "demand": 1,
    "image": "/items/Halloween%20Black%20Ponycycle.webp"
  },
  {
    "id": "vehicles-melon-skateboard",
    "name": "Melon Skateboard",
    "category": "vehicles",
    "value": 0.16,
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
    "id": "pets-wildfire-hawk",
    "name": "Wildfire Hawk",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Wildfire%20Hawk.webp"
  },
  {
    "id": "petwear-toaster-hat",
    "name": "Toaster Hat",
    "category": "petwear",
    "value": 3.35,
    "demand": 3,
    "image": "/items/Toaster%20Hat.webp"
  },
  {
    "id": "petwear-ruff",
    "name": "Ruff",
    "category": "petwear",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Ruff.webp"
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
    "id": "pets-christmas-spirit",
    "name": "Christmas Spirit",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Christmas%20Spirit.webp"
  },
  {
    "id": "potions-antigravity-potion",
    "name": "Anti-gravity Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-spider-crab",
    "name": "Spider Crab",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Spider%20Crab.webp"
  },
  {
    "id": "strollers-reindeer-stroller",
    "name": "Reindeer Stroller",
    "category": "strollers",
    "value": 0.1014,
    "demand": 1,
    "image": "/items/Reindeer%20Stroller.webp"
  },
  {
    "id": "pets-rose-dragon",
    "name": "Rose Dragon",
    "category": "pets",
    "value": 1.1081,
    "demand": 2,
    "image": "/items/Rose%20Dragon.webp"
  },
  {
    "id": "pets-dimension-drifter",
    "name": "Dimension Drifter",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Dimension%20Drifter.webp"
  },
  {
    "id": "vehicles-hovercraft",
    "name": "Hovercraft",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "strollers-egg-basket-stroller",
    "name": "Egg Basket Stroller",
    "category": "strollers",
    "value": 0.05,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-green-skateboard",
    "name": "Neon Green Skateboard",
    "category": "vehicles",
    "value": 0.67,
    "demand": 1,
    "image": "/items/Neon%20Green%20Skateboard.webp"
  },
  {
    "id": "stickers-bat-dragon-sticker",
    "name": "Bat Dragon Sticker",
    "category": "stickers",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Bat%20Dragon%20Sticker.webp"
  },
  {
    "id": "vehicles-prince-carriage",
    "name": "Prince Carriage",
    "category": "vehicles",
    "value": 0.1127,
    "demand": 1,
    "image": "/items/Prince%20Carriage.webp"
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
    "id": "petwear-rain-boots",
    "name": "Rain Boots",
    "category": "petwear",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Rain%20Boots.webp"
  },
  {
    "id": "stickers-cow-loves-this-sticker",
    "name": "Cow Loves This Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Cow%20Loves%20This%20Sticker.webp"
  },
  {
    "id": "strollers-pirate-captain-stroller",
    "name": "Pirate Captain Stroller",
    "category": "strollers",
    "value": 0.05,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-frozen-penguin",
    "name": "Frozen Penguin",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Frozen%20Penguin.webp"
  },
  {
    "id": "pets-black-dog",
    "name": "Black Dog",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Black%20Dog.webp"
  },
  {
    "id": "pets-diamond-butterfly",
    "name": "Diamond Butterfly",
    "category": "pets",
    "value": 18.5538,
    "demand": 3,
    "image": "/items/Diamond%20Butterfly.webp"
  },
  {
    "id": "vehicles-futuristic-unicycle",
    "name": "Futuristic Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-pudding-cat",
    "name": "Pudding Cat",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Pudding%20Cat.webp"
  },
  {
    "id": "pets-quokka",
    "name": "Quokka",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Quokka.webp"
  },
  {
    "id": "stickers-seagull-yell-animated-sticker",
    "name": "Seagull Yell Animated Sticker",
    "category": "stickers",
    "value": 5.1538,
    "demand": 2,
    "image": "/items/Seagull%20Yell%20Animated%20Sticker.webp"
  },
  {
    "id": "pets-kitsune",
    "name": "Kitsune",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Kitsune.webp"
  },
  {
    "id": "pets-tasmanian-tiger",
    "name": "Tasmanian Tiger",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Tasmanian%20Tiger.webp"
  },
  {
    "id": "pets-ant",
    "name": "Ant",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Ant.webp"
  },
  {
    "id": "toys-throwing-pumpkin",
    "name": "Throwing Pumpkin",
    "category": "toys",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Throwing%20Pumpkin.webp"
  },
  {
    "id": "pets-aurora-fox",
    "name": "Aurora Fox",
    "category": "pets",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Aurora%20Fox.webp"
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
    "id": "pets-space-whale",
    "name": "Space Whale",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Space%20Whale.webp"
  },
  {
    "id": "pets-snowy-mammoth",
    "name": "Snowy Mammoth",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Snowy%20Mammoth.webp"
  },
  {
    "id": "eggs-river",
    "name": "River",
    "category": "eggs",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/River.webp"
  },
  {
    "id": "vehicles-festive-deliveries-sleigh",
    "name": "Festive Deliveries Sleigh",
    "category": "vehicles",
    "value": 0.1352,
    "demand": 2,
    "image": "/items/Festive%20Deliveries%20Sleigh.webp"
  },
  {
    "id": "toys-pumpkin-rattle",
    "name": "Pumpkin Rattle",
    "category": "toys",
    "value": 0.5154,
    "demand": 1,
    "image": "/items/Pumpkin%20Rattle.webp"
  },
  {
    "id": "pets-merry-mistletroll",
    "name": "Merry Mistletroll",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Merry%20Mistletroll.webp"
  },
  {
    "id": "vehicles-shadow-rider",
    "name": "Shadow Rider",
    "category": "vehicles",
    "value": 0.2759,
    "demand": 1,
    "image": "/items/Shadow%20Rider.webp"
  },
  {
    "id": "pets-tealwood-monster",
    "name": "Tealwood Monster",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Tealwood%20Monster.webp"
  },
  {
    "id": "vehicles-strawberry-shortcake-unicycle",
    "name": "Strawberry Shortcake Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-latte-motorcycle",
    "name": "Latte Motorcycle",
    "category": "vehicles",
    "value": 0.0563,
    "demand": 1,
    "image": "/items/Latte%20Motorcycle.webp"
  },
  {
    "id": "pets-strawberry-shortcake-ducky",
    "name": "Strawberry Shortcake Ducky",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Strawberry%20Shortcake%20Ducky.webp"
  },
  {
    "id": "toys-polar-bear-plush",
    "name": "Polar Bear Plush",
    "category": "toys",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Polar%20Bear%20Plush.webp"
  },
  {
    "id": "pets-bloodhound",
    "name": "Bloodhound",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Bloodhound.webp"
  },
  {
    "id": "pets-waffle-wyrm",
    "name": "Waffle Wyrm",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Waffle%20Wyrm.webp"
  },
  {
    "id": "gifts-walrus-box",
    "name": "Walrus Box",
    "category": "gifts",
    "value": 0.3322,
    "demand": 2,
    "image": "/items/Walrus%20Box.webp"
  },
  {
    "id": "pets-caelum-cervi",
    "name": "Caelum Cervi",
    "category": "pets",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Caelum%20Cervi.webp"
  },
  {
    "id": "potions-hyperspeed-potion",
    "name": "Hyperspeed Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-glyptodon-ducky",
    "name": "Glyptodon Ducky",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Glyptodon%20Ducky.webp"
  },
  {
    "id": "pets-cat",
    "name": "Cat",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Cat.webp"
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
    "id": "pets-mecha-r4bbit",
    "name": "Mecha R4BBIT",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Mecha%20R4BBIT.webp"
  },
  {
    "id": "petwear-gold-fairy-crown",
    "name": "Gold Fairy Crown",
    "category": "petwear",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Gold%20Fairy%20Crown.webp"
  },
  {
    "id": "eggs-blue-egg",
    "name": "Blue Egg",
    "category": "eggs",
    "value": 15.5698,
    "demand": 2,
    "image": "/items/Blue%20Egg.webp"
  },
  {
    "id": "pets-moonbeam-peacock",
    "name": "Moonbeam Peacock",
    "category": "pets",
    "value": 5.1538,
    "demand": 2,
    "image": "/items/Moonbeam%20Peacock.webp"
  },
  {
    "id": "pets-fire-stallion",
    "name": "Fire Stallion",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Fire%20Stallion.webp"
  },
  {
    "id": "petwear-rotating-periscope",
    "name": "Rotating Periscope",
    "category": "petwear",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Rotating%20Periscope.webp"
  },
  {
    "id": "vehicles-gingerbread-sleigh",
    "name": "Gingerbread Sleigh",
    "category": "vehicles",
    "value": 0.276,
    "demand": 2,
    "image": "/items/Gingerbread%20Sleigh.webp"
  },
  {
    "id": "pets-aye-aye",
    "name": "Aye Aye",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Aye%20Aye.webp"
  },
  {
    "id": "strollers-quad-stroller",
    "name": "Quad Stroller",
    "category": "strollers",
    "value": 2.573,
    "demand": 2,
    "image": "/items/Quad%20Stroller.webp"
  },
  {
    "id": "pets-ornate-horned-frog",
    "name": "Ornate Horned Frog",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Ornate%20Horned%20Frog.webp"
  },
  {
    "id": "vehicles-stocked-santa-sleigh",
    "name": "Stocked Santa Sleigh",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-green-butterfly",
    "name": "Green Butterfly",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Green%20Butterfly.webp"
  },
  {
    "id": "pets-owlbear",
    "name": "Owlbear",
    "category": "pets",
    "value": 1.5462,
    "demand": 2,
    "image": "/items/Owlbear.webp"
  },
  {
    "id": "vehicles-white-scooter",
    "name": "White Scooter",
    "category": "vehicles",
    "value": 0.3603,
    "demand": 1,
    "image": "/items/White%20Scooter.webp"
  },
  {
    "id": "vehicles-airboat",
    "name": "Airboat",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-floral-eggy",
    "name": "Floral Eggy",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Floral%20Eggy.webp"
  },
  {
    "id": "stickers-dalmatian-sticker",
    "name": "Dalmatian Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Dalmatian%20Sticker.webp"
  },
  {
    "id": "vehicles-canine-cruiser",
    "name": "Canine Cruiser",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-heart-bow",
    "name": "Heart Bow",
    "category": "petwear",
    "value": 0.1546,
    "demand": 2,
    "image": "/items/Heart%20Bow.webp"
  },
  {
    "id": "pets-black-tiger",
    "name": "Black Tiger",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Black%20Tiger.webp"
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
    "id": "petwear-heart-hat",
    "name": "Heart Hat",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Heart%20Hat.webp"
  },
  {
    "id": "toys-witches-wand",
    "name": "Witches Wand",
    "category": "toys",
    "value": 0.5154,
    "demand": 1,
    "image": "/items/Witches%20Wand.webp"
  },
  {
    "id": "eggs-crystal-egg",
    "name": "Crystal Egg",
    "category": "eggs",
    "value": 0.0315,
    "demand": 2,
    "image": "/items/Crystal%20Egg.webp"
  },
  {
    "id": "vehicles-suv",
    "name": "SUV",
    "category": "vehicles",
    "value": 0.0789,
    "demand": 1,
    "image": "/items/SUV.webp"
  },
  {
    "id": "gifts-special-lunar-new-year-gift-box",
    "name": "Special Lunar New Year Gift Box",
    "category": "gifts",
    "value": 0.3264,
    "demand": 1,
    "image": "/items/Special%20Lunar%20New%20Year%20Gift%20Box.webp"
  },
  {
    "id": "pets-chicken",
    "name": "Chicken",
    "category": "pets",
    "value": 0.5412,
    "demand": 2,
    "image": "/items/Chicken.webp"
  },
  {
    "id": "pets-rice-cake-rabbit",
    "name": "Rice Cake Rabbit",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Rice%20Cake%20Rabbit.webp"
  },
  {
    "id": "toys-panda-pal",
    "name": "Panda Pal",
    "category": "toys",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Panda%20Pal.webp"
  },
  {
    "id": "pets-feesh",
    "name": "Feesh",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Feesh.webp"
  },
  {
    "id": "pets-scarecrow-cat",
    "name": "Scarecrow Cat",
    "category": "pets",
    "value": 0.3221,
    "demand": 2,
    "image": "/items/Scarecrow%20Cat.webp"
  },
  {
    "id": "petwear-demon-wings",
    "name": "Demon Wings",
    "category": "petwear",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Demon%20Wings.webp"
  },
  {
    "id": "pets-rosy-maple-moth",
    "name": "Rosy Maple Moth",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Rosy%20Maple%20Moth.webp"
  },
  {
    "id": "pets-giant-blue-scarab",
    "name": "Giant Blue Scarab",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Giant%20Blue%20Scarab.webp"
  },
  {
    "id": "pets-shrew",
    "name": "Shrew",
    "category": "pets",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Shrew.webp"
  },
  {
    "id": "toys-bunny-plush",
    "name": "Bunny Plush",
    "category": "toys",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Bunny%20Plush.webp"
  },
  {
    "id": "toys-staff-ingredient",
    "name": "Staff Ingredient",
    "category": "toys",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Staff%20Ingredient.webp"
  },
  {
    "id": "pets-balloon-unicorn",
    "name": "Balloon Unicorn",
    "category": "pets",
    "value": 46.9,
    "demand": 3,
    "image": "/items/Balloon%20Unicorn.webp"
  },
  {
    "id": "toys-frosty-glow-paint",
    "name": "Frosty Glow Mega Neon Paint",
    "category": "toys",
    "value": 0.2319,
    "demand": 3,
    "image": "/items/Frosty%20Glow%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "pets-stingray",
    "name": "Stingray",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Stingray.webp"
  },
  {
    "id": "vehicles-orange-scooter",
    "name": "Neon Orange Scooter",
    "category": "vehicles",
    "value": 0.4731,
    "demand": 1,
    "image": "/items/Neon%20Orange%20Scooter.webp"
  },
  {
    "id": "vehicles-lunar-muscle-car",
    "name": "Lunar Muscle Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-rhino-beetle",
    "name": "Rhino Beetle",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Rhino%20Beetle.webp"
  },
  {
    "id": "pets-kakapo",
    "name": "Kakapo",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Kakapo.webp"
  },
  {
    "id": "pets-red-crowned-crane",
    "name": "Red Crowned Crane",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Red%20Crowned%20Crane.webp"
  },
  {
    "id": "stickers-solaris-animated-sticker",
    "name": "Solaris Animated Sticker",
    "category": "stickers",
    "value": 0.2835,
    "demand": 2,
    "image": "/items/Solaris%20Animated%20Sticker.webp"
  },
  {
    "id": "strollers-vampire-stroller",
    "name": "Vampire Stroller",
    "category": "strollers",
    "value": 1.4185,
    "demand": 2,
    "image": "/items/Vampire%20Stroller.webp"
  },
  {
    "id": "pets-forest-sprite",
    "name": "Forest Sprite",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Forest%20Sprite.webp"
  },
  {
    "id": "petwear-venus-flytrap-hat",
    "name": "Venus Flytrap Hat",
    "category": "petwear",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Venus%20Flytrap%20Hat.webp"
  },
  {
    "id": "vehicles-motorbike",
    "name": "Motorbike",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-subzero-scorpion",
    "name": "Subzero Scorpion",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Subzero%20Scorpion.webp"
  },
  {
    "id": "vehicles-festive-ice-skates",
    "name": "Festive Ice Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-cookie-unicycle",
    "name": "Cookie Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-binturong",
    "name": "Binturong",
    "category": "pets",
    "value": 0.4381,
    "demand": 2,
    "image": "/items/Binturong.webp"
  },
  {
    "id": "petwear-bee-hive",
    "name": "Bee Hive",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Bee%20Hive.webp"
  },
  {
    "id": "petwear-bewitched-hat",
    "name": "Bewitched Hat",
    "category": "petwear",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Bewitched%20Hat.webp"
  },
  {
    "id": "vehicles-monocycle",
    "name": "Monocycle",
    "category": "vehicles",
    "value": 0.3999,
    "demand": 1,
    "image": "/items/Monocycle.webp"
  },
  {
    "id": "vehicles-beach-buggy",
    "name": "Beach Buggy",
    "category": "vehicles",
    "value": 0.11,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-candyfloss-paint",
    "name": "Candyfloss Mega Neon Paint",
    "category": "toys",
    "value": 0.2319,
    "demand": 3,
    "image": "/items/Candyfloss%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "vehicles-heart-hoverboard",
    "name": "Heart Hoverboard",
    "category": "vehicles",
    "value": 0.0901,
    "demand": 1,
    "image": "/items/Heart%20Hoverboard.webp"
  },
  {
    "id": "toys-wing-hang-glider",
    "name": "Wing Hang Glider",
    "category": "toys",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Wing%20Hang%20Glider.webp"
  },
  {
    "id": "vehicles-enchanted-broomstick",
    "name": "Enchanted Broomstick",
    "category": "vehicles",
    "value": 1.0412,
    "demand": 2,
    "image": "/items/Enchanted%20Broomstick.webp"
  },
  {
    "id": "pets-evil-rock",
    "name": "Evil Rock",
    "category": "pets",
    "value": 0.4123,
    "demand": 2,
    "image": "/items/Evil%20Rock.webp"
  },
  {
    "id": "pets-seagull",
    "name": "Seagull",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Seagull.webp"
  },
  {
    "id": "pets-hare",
    "name": "Hare",
    "category": "pets",
    "value": 1.1081,
    "demand": 2,
    "image": "/items/Hare.webp"
  },
  {
    "id": "pets-classic-teapot",
    "name": "Classic Teapot",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Classic%20Teapot.webp"
  },
  {
    "id": "pets-christmas-pudding-pup",
    "name": "Christmas Pudding Pup",
    "category": "pets",
    "value": 2.0615,
    "demand": 3,
    "image": "/items/Christmas%20Pudding%20Pup.webp"
  },
  {
    "id": "pets-robot",
    "name": "Robot",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Robot.webp"
  },
  {
    "id": "vehicles-time-travelers-clock",
    "name": "Time Traveler's Clock",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-trusty-sled",
    "name": "Trusty Sled",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-field-mouse",
    "name": "Field Mouse",
    "category": "pets",
    "value": 1.675,
    "demand": 2,
    "image": "/items/Field%20Mouse.webp"
  },
  {
    "id": "petwear-winter-bow-wings",
    "name": "Winter Bow Wings",
    "category": "petwear",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Winter%20Bow%20Wings.webp"
  },
  {
    "id": "pets-black-chowchow",
    "name": "Black Chow-Chow",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Black%20Chow-Chow.webp"
  },
  {
    "id": "pets-diamond-dragon",
    "name": "Diamond Dragon",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Diamond%20Dragon.webp"
  },
  {
    "id": "petwear-witch-hat",
    "name": "Witch Hat",
    "category": "petwear",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Witch%20Hat.webp"
  },
  {
    "id": "pets-reindeer",
    "name": "Reindeer",
    "category": "pets",
    "value": 0.4123,
    "demand": 2,
    "image": "/items/Reindeer.webp"
  },
  {
    "id": "petwear-cutlass",
    "name": "Cutlass",
    "category": "petwear",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Cutlass.webp"
  },
  {
    "id": "vehicles-magical-girl-car",
    "name": "Magical Girl Car",
    "category": "vehicles",
    "value": 0.11,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-classic-airplane",
    "name": "Classic Airplane",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-bunny",
    "name": "Bunny",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Bunny.webp"
  },
  {
    "id": "pets-lion-cub",
    "name": "Lion Cub",
    "category": "pets",
    "value": 2.1904,
    "demand": 2,
    "image": "/items/Lion%20Cub.webp"
  },
  {
    "id": "pets-rattlesnake",
    "name": "Rattlesnake",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Rattlesnake.webp"
  },
  {
    "id": "pets-clover-cow",
    "name": "Clover Cow",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Clover%20Cow.webp"
  },
  {
    "id": "gifts-pet-handler-pro-certificate",
    "name": "Pet Handler Pro Certificate",
    "category": "gifts",
    "value": 0.6185,
    "demand": 3,
    "image": "/items/Pet%20Handler%20Pro%20Certificate.webp"
  },
  {
    "id": "pets-hawk",
    "name": "Hawk",
    "category": "pets",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Hawk.webp"
  },
  {
    "id": "vehicles-inspector-sherbet-bus",
    "name": "Inspector Sherbet Bus",
    "category": "vehicles",
    "value": 0.0789,
    "demand": 1,
    "image": "/items/Inspector%20Sherbet%20Bus.webp"
  },
  {
    "id": "pets-golden-chowchow",
    "name": "Golden Chow-Chow",
    "category": "pets",
    "value": 0.7215,
    "demand": 2,
    "image": "/items/Golden%20Chow-Chow.webp"
  },
  {
    "id": "eggs-mythic-egg",
    "name": "Mythic Egg",
    "category": "eggs",
    "value": 0.2533,
    "demand": 2,
    "image": "/items/Mythic%20Egg.webp"
  },
  {
    "id": "vehicles-donut-cycle",
    "name": "Donut Cycle",
    "category": "vehicles",
    "value": 0.2929,
    "demand": 1,
    "image": "/items/Donut%20Cycle.webp"
  },
  {
    "id": "food-chocolate-egg",
    "name": "Chocolate Egg",
    "category": "food",
    "value": 0.9019,
    "demand": 2,
    "image": "/items/Chocolate%20Egg.webp"
  },
  {
    "id": "petwear-love-letter",
    "name": "Love Letter",
    "category": "petwear",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Love%20Letter.webp"
  },
  {
    "id": "stickers-dragon-breath-animated-sticker",
    "name": "Dragon Breath Animated Sticker",
    "category": "stickers",
    "value": 0.5669,
    "demand": 2,
    "image": "/items/Dragon%20Breath%20Animated%20Sticker.webp"
  },
  {
    "id": "pets-piranha",
    "name": "Piranha",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Piranha.webp"
  },
  {
    "id": "vehicles-powerbike",
    "name": "Powerbike",
    "category": "vehicles",
    "value": 0.38,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-california-condor",
    "name": "California Condor",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/California%20Condor.webp"
  },
  {
    "id": "toys-croc-plush",
    "name": "Croc Plush",
    "category": "toys",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Croc%20Plush.webp"
  },
  {
    "id": "toys-glider",
    "name": "Glider",
    "category": "toys",
    "value": 0.67,
    "demand": 2,
    "image": "/items/Glider.webp"
  },
  {
    "id": "vehicles-soapy-skates",
    "name": "Soapy Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-ketchup-and-mustard-jetpack",
    "name": "Ketchup and Mustard Jetpack",
    "category": "vehicles",
    "value": 0.76,
    "demand": 2,
    "image": "/items/Ketchup%20and%20Mustard%20Jetpack.webp"
  },
  {
    "id": "vehicles-doge-scooter",
    "name": "Doge Scooter",
    "category": "vehicles",
    "value": 0.2986,
    "demand": 1,
    "image": "/items/Doge%20Scooter.webp"
  },
  {
    "id": "vehicles-husky-sled",
    "name": "Husky Sled",
    "category": "vehicles",
    "value": 0.2422,
    "demand": 1,
    "image": "/items/Husky%20Sled.webp"
  },
  {
    "id": "petwear-ssbd-beanie",
    "name": "SSBD Beanie",
    "category": "petwear",
    "value": 11.5962,
    "demand": 2,
    "image": "/items/SSBD%20Beanie.webp"
  },
  {
    "id": "vehicles-wood-scooter",
    "name": "Wood Scooter",
    "category": "vehicles",
    "value": 0.1634,
    "demand": 1,
    "image": "/items/Wood%20Scooter.webp"
  },
  {
    "id": "stickers-halloween-2024-sticker-pack",
    "name": "Halloween 2024 Sticker Pack",
    "category": "stickers",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Halloween%202024%20Sticker%20Pack.webp"
  },
  {
    "id": "vehicles-classic-boat",
    "name": "Classic Boat",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-sea-turtle",
    "name": "Sea Turtle",
    "category": "pets",
    "value": 0.219,
    "demand": 1,
    "image": "/items/Sea%20Turtle.webp"
  },
  {
    "id": "stickers-orange-butterfly-sticker",
    "name": "Orange Butterfly Sticker",
    "category": "stickers",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Orange%20Butterfly%20Sticker.webp"
  },
  {
    "id": "stickers-koala-sticker",
    "name": "Koala Sticker",
    "category": "stickers",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Koala%20Sticker.webp"
  },
  {
    "id": "pets-kirin",
    "name": "Kirin",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Kirin.webp"
  },
  {
    "id": "pets-steppe-lion",
    "name": "Steppe Lion",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Steppe%20Lion.webp"
  },
  {
    "id": "vehicles-street-drifter",
    "name": "Street Drifter",
    "category": "vehicles",
    "value": 0.2366,
    "demand": 1,
    "image": "/items/Street%20Drifter.webp"
  },
  {
    "id": "pets-cupid-dragon",
    "name": "Cupid Dragon",
    "category": "pets",
    "value": 2.1904,
    "demand": 2,
    "image": "/items/Cupid%20Dragon.webp"
  },
  {
    "id": "pets-evil-chickatrice",
    "name": "Evil Chickatrice",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Evil%20Chickatrice.webp"
  },
  {
    "id": "pets-rooster",
    "name": "Rooster",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Rooster.webp"
  },
  {
    "id": "pets-fossa",
    "name": "Fossa",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Fossa.webp"
  },
  {
    "id": "petwear-ponytail",
    "name": "Ponytail",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Ponytail.webp"
  },
  {
    "id": "petwear-burger-bun-hat",
    "name": "Burger Bun Hat",
    "category": "petwear",
    "value": 0.1546,
    "demand": 2,
    "image": "/items/Burger%20Bun%20Hat.webp"
  },
  {
    "id": "vehicles-galactic-hoverboard",
    "name": "Galactic Hoverboard",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-ice-plane",
    "name": "Ice Plane",
    "category": "vehicles",
    "value": 0.1972,
    "demand": 1,
    "image": "/items/Ice%20Plane.webp"
  },
  {
    "id": "strollers-ice-cream-stroller",
    "name": "Ice Cream Stroller",
    "category": "strollers",
    "value": 0.2929,
    "demand": 1,
    "image": "/items/Ice%20Cream%20Stroller.webp"
  },
  {
    "id": "vehicles-summer-spectacle",
    "name": "Summer Spectacle",
    "category": "vehicles",
    "value": 0.26,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-elephant",
    "name": "Elephant",
    "category": "pets",
    "value": 4.7673,
    "demand": 3,
    "image": "/items/Elephant.webp"
  },
  {
    "id": "vehicles-bubble-car",
    "name": "Bubble Car",
    "category": "vehicles",
    "value": 0.1296,
    "demand": 1,
    "image": "/items/Bubble%20Car.webp"
  },
  {
    "id": "pets-bluebottle",
    "name": "Bluebottle Fly",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Bluebottle%20Fly.webp"
  },
  {
    "id": "vehicles-ice-queen-sleigh",
    "name": "Ice Queen Sleigh",
    "category": "vehicles",
    "value": 0.0901,
    "demand": 1,
    "image": "/items/Ice%20Queen%20Sleigh.webp"
  },
  {
    "id": "pets-sunflower-friend",
    "name": "Sunflower Friend",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Sunflower%20Friend.webp"
  },
  {
    "id": "pets-spinosaurus",
    "name": "Spinosaurus",
    "category": "pets",
    "value": 0.4896,
    "demand": 2,
    "image": "/items/Spinosaurus.webp"
  },
  {
    "id": "potions-big-brew-potion",
    "name": "Big Brew Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-waterfall-hat",
    "name": "Waterfall Hat",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Waterfall%20Hat.webp"
  },
  {
    "id": "vehicles-clown-unicycle",
    "name": "Clown Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "eggs-admin-abuse-egg",
    "name": "Admin Abuse Egg",
    "category": "eggs",
    "value": 0.0315,
    "demand": 2,
    "image": "/items/Admin%20Abuse%20Egg.webp"
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
    "id": "pets-pumpkin-friend",
    "name": "Pumpkin Friend",
    "category": "pets",
    "value": 0.3479,
    "demand": 2,
    "image": "/items/Pumpkin%20Friend.webp"
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
    "id": "stickers-frog-sticker",
    "name": "Frog Sticker",
    "category": "stickers",
    "value": 0.0412,
    "demand": 1,
    "image": "/items/Frog%20Sticker.webp"
  },
  {
    "id": "pets-pterodactyl",
    "name": "Pterodactyl",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Pterodactyl.webp"
  },
  {
    "id": "vehicles-choo-choo-train",
    "name": "Choo Choo Train",
    "category": "vehicles",
    "value": 0.107,
    "demand": 1,
    "image": "/items/Choo%20Choo%20Train.webp"
  },
  {
    "id": "petwear-heart-lock-necklace",
    "name": "Heart Lock Necklace",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Heart%20Lock%20Necklace.webp"
  },
  {
    "id": "vehicles-horse-and-carriage",
    "name": "Horse And Carriage",
    "category": "vehicles",
    "value": 3.0167,
    "demand": 2,
    "image": "/items/Horse%20And%20Carriage.webp"
  },
  {
    "id": "pets-sneak-weasel",
    "name": "Sneak Weasel",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Sneak%20Weasel.webp"
  },
  {
    "id": "vehicles-open-top-speeder",
    "name": "Open Top Speeder",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-strawberry-plushie-rider",
    "name": "Strawberry Plushie Rider",
    "category": "petwear",
    "value": 29.6346,
    "demand": 2,
    "image": "/items/Strawberry%20Plushie%20Rider.webp"
  },
  {
    "id": "vehicles-sunshine-chariot",
    "name": "Sunshine Chariot",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-brachiosaurus",
    "name": "Brachiosaurus",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Brachiosaurus.webp"
  },
  {
    "id": "pets-sunglider",
    "name": "Sunglider",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Sunglider.webp"
  },
  {
    "id": "vehicles-dogmobile",
    "name": "Dogmobile",
    "category": "vehicles",
    "value": 1.6205,
    "demand": 2,
    "image": "/items/Dogmobile.webp"
  },
  {
    "id": "vehicles-rift-rider",
    "name": "Rift Rider",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-security-spotlight",
    "name": "Security Spotlight",
    "category": "petwear",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Security%20Spotlight.webp"
  },
  {
    "id": "potions-translucent-tea-potion",
    "name": "Translucent Tea Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-nessie",
    "name": "Nessie",
    "category": "pets",
    "value": 1.675,
    "demand": 2,
    "image": "/items/Nessie.webp"
  },
  {
    "id": "gifts-standard-gorilla-box",
    "name": "Standard Gorilla Box",
    "category": "gifts",
    "value": 0.1126,
    "demand": 1,
    "image": "/items/Standard%20Gorilla%20Box.webp"
  },
  {
    "id": "toys-velvet-fuchsia-paint",
    "name": "Velvet Fuchsia Mega Neon Paint",
    "category": "toys",
    "value": 0.2062,
    "demand": 3,
    "image": "/items/Velvet%20Fuchsia%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "pets-moonlight-moth",
    "name": "Moonlight Moth",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Moonlight%20Moth.webp"
  },
  {
    "id": "vehicles-planetary-core-car",
    "name": "Planetary Core Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "gifts-hermit-crab-box",
    "name": "Hermit Crab Box",
    "category": "gifts",
    "value": 0.5797,
    "demand": 2,
    "image": "/items/Hermit%20Crab%20Box.webp"
  },
  {
    "id": "pets-snowball-pug",
    "name": "Snowball Pug",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Snowball%20Pug.webp"
  },
  {
    "id": "petwear-lightbulb-hat",
    "name": "Lightbulb Hat",
    "category": "petwear",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Lightbulb%20Hat.webp"
  },
  {
    "id": "petwear-chick-backpack",
    "name": "Chick Backpack",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Chick%20Backpack.webp"
  },
  {
    "id": "pets-ostrich",
    "name": "Ostrich",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Ostrich.webp"
  },
  {
    "id": "petwear-elf-bandana",
    "name": "Elf Bandana",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Elf%20Bandana.webp"
  },
  {
    "id": "petwear-mystic-wing-crown",
    "name": "Mystic Wing Crown",
    "category": "petwear",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Mystic%20Wing%20Crown.webp"
  },
  {
    "id": "pets-scorching-kaijunior",
    "name": "Scorching Kaijunior",
    "category": "pets",
    "value": 1.1854,
    "demand": 2,
    "image": "/items/Scorching%20Kaijunior.webp"
  },
  {
    "id": "vehicles-gyrocopter",
    "name": "Gyrocopter",
    "category": "vehicles",
    "value": 0.5125,
    "demand": 1,
    "image": "/items/Gyrocopter.webp"
  },
  {
    "id": "petwear-white-chef-hat",
    "name": "White Chef Hat",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/White%20Chef%20Hat.webp"
  },
  {
    "id": "vehicles-orchid-racer",
    "name": "Orchid Racer",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-spring-bunny-hood",
    "name": "Spring Bunny Hood",
    "category": "petwear",
    "value": 1.8038,
    "demand": 3,
    "image": "/items/Spring%20Bunny%20Hood.webp"
  },
  {
    "id": "petwear-back-taco",
    "name": "Back Taco",
    "category": "petwear",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Back%20Taco.webp"
  },
  {
    "id": "pets-flamingo",
    "name": "Flamingo",
    "category": "pets",
    "value": 5.4115,
    "demand": 3,
    "image": "/items/Flamingo.webp"
  },
  {
    "id": "pets-puffer-fish",
    "name": "Puffer Fish",
    "category": "pets",
    "value": 0.4896,
    "demand": 2,
    "image": "/items/Puffer%20Fish.webp"
  },
  {
    "id": "toys-paint-sealer",
    "name": "Paint Sealer",
    "category": "toys",
    "value": 0.0361,
    "demand": 2,
    "image": "/items/Paint%20Sealer.webp"
  },
  {
    "id": "petwear-aestus-mane",
    "name": "Aestus Mane",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Aestus%20Mane.webp"
  },
  {
    "id": "pets-white-sand-dollar",
    "name": "White Sand Dollar",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/White%20Sand%20Dollar.webp"
  },
  {
    "id": "petwear-duck-floatie",
    "name": "Duck Floatie",
    "category": "petwear",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Duck%20Floatie.webp"
  },
  {
    "id": "toys-dance-arcade-stand",
    "name": "Dance Arcade Stand",
    "category": "toys",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Dance%20Arcade%20Stand.webp"
  },
  {
    "id": "pets-giant-anteater",
    "name": "Giant Anteater",
    "category": "pets",
    "value": 2.0615,
    "demand": 2,
    "image": "/items/Giant%20Anteater.webp"
  },
  {
    "id": "pets-water-rabbit",
    "name": "Water Rabbit",
    "category": "pets",
    "value": 0.4381,
    "demand": 2,
    "image": "/items/Water%20Rabbit.webp"
  },
  {
    "id": "vehicles-laser-disco-skates",
    "name": "Laser Disco Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-axel",
    "name": "Axel",
    "category": "vehicles",
    "value": 0.1915,
    "demand": 1,
    "image": "/items/Axel.webp"
  },
  {
    "id": "vehicles-muscle-car",
    "name": "Muscle Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-slime",
    "name": "Slime",
    "category": "pets",
    "value": 1.34,
    "demand": 3,
    "image": "/items/Slime.webp"
  },
  {
    "id": "pets-manta-ray",
    "name": "Manta Ray",
    "category": "pets",
    "value": 0.2448,
    "demand": 1,
    "image": "/items/Manta%20Ray.webp"
  },
  {
    "id": "petwear-pancake-stack",
    "name": "Pancake Stack",
    "category": "petwear",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Pancake%20Stack.webp"
  },
  {
    "id": "pets-smores-raccoon",
    "name": "S'mores Raccoon",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Smores%20Raccoon.webp"
  },
  {
    "id": "pets-scarebear",
    "name": "Scarebear",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Scarebear.webp"
  },
  {
    "id": "pets-brownchested-pheasant",
    "name": "Brown-Chested Pheasant",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Brown-Chested%20Pheasant.webp"
  },
  {
    "id": "petwear-bunny-ear-tiara",
    "name": "Bunny Ear Tiara",
    "category": "petwear",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Bunny%20Ear%20Tiara.webp"
  },
  {
    "id": "vehicles-party-surfboard",
    "name": "Party Surfboard",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-turtle-doves",
    "name": "Turtle Doves",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Turtle%20Doves.webp"
  },
  {
    "id": "pets-nurse-shark",
    "name": "Nurse Shark",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Nurse%20Shark.webp"
  },
  {
    "id": "pets-jousting-horse",
    "name": "Jousting Horse",
    "category": "pets",
    "value": 2.7058,
    "demand": 3,
    "image": "/items/Jousting%20Horse.webp"
  },
  {
    "id": "eggs-wrapped-doll",
    "name": "Wrapped Doll",
    "category": "eggs",
    "value": 0.4052,
    "demand": 1,
    "image": "/items/Wrapped%20Doll.webp"
  },
  {
    "id": "pets-strawberry-shortcake-bat-dragon",
    "name": "Strawberry Shortcake Bat Dragon",
    "category": "pets",
    "value": 9.4058,
    "demand": 3,
    "image": "/items/Strawberry%20Shortcake%20Bat%20Dragon.webp"
  },
  {
    "id": "pets-jumping-spider",
    "name": "Jumping Spider",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Jumping%20Spider.webp"
  },
  {
    "id": "petwear-pink-designer-backpack",
    "name": "Pink Designer Backpack",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Pink%20Designer%20Backpack.webp"
  },
  {
    "id": "pets-ehecatl",
    "name": "Ehecatl",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Ehecatl.webp"
  },
  {
    "id": "vehicles-surfboard",
    "name": "Surfboard",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-modern-jetpack",
    "name": "Modern Jetpack",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Modern%20Jetpack.webp"
  },
  {
    "id": "petwear-picnic-basket",
    "name": "Picnic Basket",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Picnic%20Basket.webp"
  },
  {
    "id": "pets-goat",
    "name": "Goat",
    "category": "pets",
    "value": 2.1904,
    "demand": 2,
    "image": "/items/Goat.webp"
  },
  {
    "id": "vehicles-white-skateboard",
    "name": "White Skateboard",
    "category": "vehicles",
    "value": 0.5572,
    "demand": 1,
    "image": "/items/White%20Skateboard.webp"
  },
  {
    "id": "petwear-sack-of-cash",
    "name": "Sack of Cash",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Sack%20of%20Cash.webp"
  },
  {
    "id": "pets-karate-gorilla",
    "name": "Karate Gorilla",
    "category": "pets",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/Karate%20Gorilla.webp"
  },
  {
    "id": "pets-giraffe",
    "name": "Giraffe",
    "category": "pets",
    "value": 129.3615,
    "demand": 3,
    "image": "/items/Giraffe.webp"
  },
  {
    "id": "pets-kelp-captain",
    "name": "Kelp Captain",
    "category": "pets",
    "value": 1.1081,
    "demand": 2,
    "image": "/items/Kelp%20Captain.webp"
  },
  {
    "id": "pets-ibis",
    "name": "Ibis",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Ibis.webp"
  },
  {
    "id": "toys-turkey-plush",
    "name": "Turkey Plush",
    "category": "toys",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Turkey%20Plush.webp"
  },
  {
    "id": "pets-halloween-white-mummy-cat",
    "name": "Halloween White Mummy Cat",
    "category": "pets",
    "value": 0.2448,
    "demand": 1,
    "image": "/items/Halloween%20White%20Mummy%20Cat.webp"
  },
  {
    "id": "stickers-round-fallow-deer-sticker",
    "name": "Round Fallow Deer Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Round%20Fallow%20Deer%20Sticker.webp"
  },
  {
    "id": "vehicles-black-skateboard",
    "name": "Black Skateboard",
    "category": "vehicles",
    "value": 1.4009,
    "demand": 1,
    "image": "/items/Black%20Skateboard.webp"
  },
  {
    "id": "pets-preppy-capuchin-monkey",
    "name": "Preppy Capuchin Monkey",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Preppy%20Capuchin%20Monkey.webp"
  },
  {
    "id": "stickers-jimothy",
    "name": "Jimothy",
    "category": "stickers",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Jimothy.webp"
  },
  {
    "id": "pets-quetzalcoatl",
    "name": "Quetzalcoatl",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Quetzalcoatl.webp"
  },
  {
    "id": "vehicles-starter-bike",
    "name": "Starter Bike",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-peregrine-falcon",
    "name": "Peregrine Falcon",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Peregrine%20Falcon.webp"
  },
  {
    "id": "pets-shiba-inu",
    "name": "Shiba Inu",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Shiba%20Inu.webp"
  },
  {
    "id": "food-golden-dandelion",
    "name": "Golden Dandelion",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Golden%20Dandelion.webp"
  },
  {
    "id": "food-mud-ball",
    "name": "Mud Ball",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Mud%20Ball.webp"
  },
  {
    "id": "pets-toxic-kaijunior",
    "name": "Toxic Kaijunior",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Toxic%20Kaijunior.webp"
  },
  {
    "id": "petwear-snow-cloud-wings",
    "name": "Snow Cloud Wings",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Snow%20Cloud%20Wings.webp"
  },
  {
    "id": "pets-salamander",
    "name": "Salamander",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Salamander.webp"
  },
  {
    "id": "vehicles-harvest-truck",
    "name": "Harvest Truck",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-goose",
    "name": "Goose",
    "category": "pets",
    "value": 10.5654,
    "demand": 3,
    "image": "/items/Goose.webp"
  },
  {
    "id": "vehicles-dirt-bike-unicycle",
    "name": "Dirt Bike Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "stickers-otter-sticker",
    "name": "Otter Sticker",
    "category": "stickers",
    "value": 0.0412,
    "demand": 1,
    "image": "/items/Otter%20Sticker.webp"
  },
  {
    "id": "pets-shadow-dragon",
    "name": "Shadow Dragon",
    "category": "pets",
    "value": 189.4038,
    "demand": 3,
    "image": "/items/Shadow%20Dragon.webp"
  },
  {
    "id": "pets-scarlet-butterfly",
    "name": "Scarlet Butterfly",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Scarlet%20Butterfly.webp"
  },
  {
    "id": "pets-business-monkey",
    "name": "Business Monkey",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Business%20Monkey.webp"
  },
  {
    "id": "vehicles-gokart",
    "name": "GoKart",
    "category": "vehicles",
    "value": 2.19,
    "demand": 2,
    "image": "/items/GoKart.webp"
  },
  {
    "id": "pets-ghostly-cat",
    "name": "Ghostly Cat",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Ghostly%20Cat.webp"
  },
  {
    "id": "pets-pirate-hermit-crab",
    "name": "Pirate Hermit Crab",
    "category": "pets",
    "value": 0.4896,
    "demand": 2,
    "image": "/items/Pirate%20Hermit%20Crab.webp"
  },
  {
    "id": "petwear-2022-birthday-confetti-cannon",
    "name": "2022 Birthday Confetti Cannon",
    "category": "petwear",
    "value": 4.2519,
    "demand": 3,
    "image": "/items/2022%20Birthday%20Confetti%20Cannon.webp"
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
    "id": "pets-snow-monkey",
    "name": "Snow Monkey",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Snow%20Monkey.webp"
  },
  {
    "id": "petwear-cheesecake-hat",
    "name": "Cheesecake Hat",
    "category": "petwear",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Cheesecake%20Hat.webp"
  },
  {
    "id": "pets-leopard-cat",
    "name": "Leopard Cat",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Leopard%20Cat.webp"
  },
  {
    "id": "pets-capybara",
    "name": "Capybara",
    "category": "pets",
    "value": 0.4896,
    "demand": 2,
    "image": "/items/Capybara.webp"
  },
  {
    "id": "petwear-ice-cream-heels",
    "name": "Ice Cream Heels",
    "category": "petwear",
    "value": 0.3092,
    "demand": 2,
    "image": "/items/Ice%20Cream%20Heels.webp"
  },
  {
    "id": "petwear-strawberry-clip",
    "name": "Strawberry Clip",
    "category": "petwear",
    "value": 0.2319,
    "demand": 2,
    "image": "/items/Strawberry%20Clip.webp"
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
    "id": "pets-emberlight",
    "name": "Emberlight",
    "category": "pets",
    "value": 0.5412,
    "demand": 2,
    "image": "/items/Emberlight.webp"
  },
  {
    "id": "stickers-well-actually-walrus-sticker",
    "name": "Well, Actually Walrus Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Well%2C%20Actually%20Walrus%20Sticker.webp"
  },
  {
    "id": "pets-kangaroo",
    "name": "Kangaroo",
    "category": "pets",
    "value": 5.4115,
    "demand": 3,
    "image": "/items/Kangaroo.webp"
  },
  {
    "id": "pets-skelebat",
    "name": "Skelebat",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Skelebat.webp"
  },
  {
    "id": "pets-toasty-red-panda",
    "name": "Toasty Red Panda",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Toasty%20Red%20Panda.webp"
  },
  {
    "id": "petwear-black-hightops",
    "name": "Black Hightops",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Black%20Hightops.webp"
  },
  {
    "id": "pets-summer-walrus",
    "name": "Summer Walrus",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Summer%20Walrus.webp"
  },
  {
    "id": "pets-trihorned-treehopper",
    "name": "Tri-horned Treehopper",
    "category": "pets",
    "value": 4.7673,
    "demand": 2,
    "image": "/items/Tri-horned%20Treehopper.webp"
  },
  {
    "id": "stickers-mini-pig-sticker",
    "name": "Mini Pig Sticker",
    "category": "stickers",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Mini%20Pig%20Sticker.webp"
  },
  {
    "id": "pets-frost-fury",
    "name": "Frost Fury",
    "category": "pets",
    "value": 1.8038,
    "demand": 2,
    "image": "/items/Frost%20Fury.webp"
  },
  {
    "id": "pets-peachick",
    "name": "Peachick",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Peachick.webp"
  },
  {
    "id": "petwear-candy-cane",
    "name": "Candy Cane (Pet Wear)",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Candy%20Cane%20(Pet%20Wear).webp"
  },
  {
    "id": "pets-ribbon-seal",
    "name": "Ribbon Seal",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Ribbon%20Seal.webp"
  },
  {
    "id": "pets-emperor-shrimp",
    "name": "Emperor Shrimp",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Emperor%20Shrimp.webp"
  },
  {
    "id": "vehicles-standard-unicycle",
    "name": "Standard Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-gingerbread-hare",
    "name": "Gingerbread Hare",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Gingerbread%20Hare.webp"
  },
  {
    "id": "vehicles-charons-boat",
    "name": "Charon's Boat",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-octopus-plush",
    "name": "Octopus Plush",
    "category": "toys",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Octopus%20Plush.webp"
  },
  {
    "id": "toys-banana-plush",
    "name": "Banana Plush",
    "category": "toys",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Banana%20Plush.webp"
  },
  {
    "id": "vehicles-bicycle",
    "name": "Bicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-humbug",
    "name": "Humbug",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Humbug.webp"
  },
  {
    "id": "petwear-rubber-ducks",
    "name": "Rubber Ducks",
    "category": "petwear",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Rubber%20Ducks.webp"
  },
  {
    "id": "food-sugar-skull-potion",
    "name": "Sugar Skull Potion",
    "category": "food",
    "value": 0.9019,
    "demand": 2,
    "image": "/items/Sugar%20Skull%20Potion.webp"
  },
  {
    "id": "vehicles-roller-skates",
    "name": "Roller Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-wolpertinger",
    "name": "Wolpertinger",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Wolpertinger.webp"
  },
  {
    "id": "toys-rainbow-wand",
    "name": "Rainbow Wand",
    "category": "toys",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Rainbow%20Wand.webp"
  },
  {
    "id": "food-fire-horse-apple",
    "name": "Fire Horse Apple",
    "category": "food",
    "value": 0.0103,
    "demand": 1,
    "image": "/items/Fire%20Horse%20Apple.webp"
  },
  {
    "id": "food-golden-petunia",
    "name": "Golden Petunia",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Golden%20Petunia.webp"
  },
  {
    "id": "pets-ringmaster-gibbon",
    "name": "Ringmaster Gibbon",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Ringmaster%20Gibbon.webp"
  },
  {
    "id": "pets-grim-dragon",
    "name": "Grim Dragon",
    "category": "pets",
    "value": 7.9885,
    "demand": 3,
    "image": "/items/Grim%20Dragon.webp"
  },
  {
    "id": "vehicles-toxic-barrel",
    "name": "Toxic Barrel",
    "category": "vehicles",
    "value": 0.355,
    "demand": 1,
    "image": "/items/Toxic%20Barrel.webp"
  },
  {
    "id": "pets-bullfrog",
    "name": "Bullfrog",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Bullfrog.webp"
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
    "id": "toys-tombstone-ghostify",
    "name": "Tombstone Ghostify",
    "category": "toys",
    "value": 12.8846,
    "demand": 2,
    "image": "/items/Tombstone%20Ghostify.webp"
  },
  {
    "id": "eggs-golden-egg",
    "name": "Golden Egg",
    "category": "eggs",
    "value": 0.1654,
    "demand": 1,
    "image": "/items/Golden%20Egg.webp"
  },
  {
    "id": "toys-cotton-candy-stand",
    "name": "Cotton Candy Stand",
    "category": "toys",
    "value": 0.2577,
    "demand": 2,
    "image": "/items/Cotton%20Candy%20Stand.webp"
  },
  {
    "id": "pets-corn-doggo",
    "name": "Corn Doggo",
    "category": "pets",
    "value": 0.67,
    "demand": 2,
    "image": "/items/Corn%20Doggo.webp"
  },
  {
    "id": "pets-possum",
    "name": "Possum",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Possum.webp"
  },
  {
    "id": "pets-ladybug",
    "name": "Ladybug",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Ladybug.webp"
  },
  {
    "id": "vehicles-squirrel-car",
    "name": "Squirrel Car",
    "category": "vehicles",
    "value": 0.0901,
    "demand": 1,
    "image": "/items/Squirrel%20Car.webp"
  },
  {
    "id": "pets-shadow-dragon-ducky",
    "name": "Shadow Dragon Ducky",
    "category": "pets",
    "value": 0.3479,
    "demand": 2,
    "image": "/items/Shadow%20Dragon%20Ducky.webp"
  },
  {
    "id": "petwear-festive-beard",
    "name": "Festive Beard",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Festive%20Beard.webp"
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
    "id": "pets-goldfish",
    "name": "Goldfish",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Goldfish.webp"
  },
  {
    "id": "petwear-copter-hat",
    "name": "Copter Hat",
    "category": "petwear",
    "value": 0.6185,
    "demand": 2,
    "image": "/items/Copter%20Hat.webp"
  },
  {
    "id": "vehicles-rocket-racer",
    "name": "Rocket Racer",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-chimney-hat",
    "name": "Chimney Hat",
    "category": "petwear",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Chimney%20Hat.webp"
  },
  {
    "id": "pets-momma-moose",
    "name": "Momma Moose",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Momma%20Moose.webp"
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
    "id": "pets-greenchested-pheasant",
    "name": "Green-Chested Pheasant",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Green-Chested%20Pheasant.webp"
  },
  {
    "id": "vehicles-blue-scooter",
    "name": "Blue Scooter",
    "category": "vehicles",
    "value": 0.3659,
    "demand": 1,
    "image": "/items/Blue%20Scooter.webp"
  },
  {
    "id": "vehicles-ice-scooter",
    "name": "Ice Scooter",
    "category": "vehicles",
    "value": 0.1916,
    "demand": 1,
    "image": "/items/Ice%20Scooter.webp"
  },
  {
    "id": "food-baked-alaska-bait",
    "name": "Baked Alaska Bait",
    "category": "food",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Baked%20Alaska%20Bait.webp"
  },
  {
    "id": "food-teleportation-potion",
    "name": "Teleportation Potion",
    "category": "food",
    "value": 0.7731,
    "demand": 1,
    "image": "/items/Teleportation%20Potion.webp"
  },
  {
    "id": "pets-toy-poodle",
    "name": "Toy Poodle",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Toy%20Poodle.webp"
  },
  {
    "id": "pets-dragonfly",
    "name": "Dragonfly",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Dragonfly.webp"
  },
  {
    "id": "vehicles-black-cab",
    "name": "Black Cab",
    "category": "vehicles",
    "value": 0.1014,
    "demand": 1,
    "image": "/items/Black%20Cab.webp"
  },
  {
    "id": "stickers-space-whale-sticker",
    "name": "Space Whale Sticker",
    "category": "stickers",
    "value": 0.1288,
    "demand": 2,
    "image": "/items/Space%20Whale%20Sticker.webp"
  },
  {
    "id": "gifts-ox-box",
    "name": "Ox Box",
    "category": "gifts",
    "value": 0.107,
    "demand": 1,
    "image": "/items/Ox%20Box.webp"
  },
  {
    "id": "petwear-gold-circle-glasses",
    "name": "Gold Circle Glasses",
    "category": "petwear",
    "value": 0.0644,
    "demand": 2,
    "image": "/items/Gold%20Circle%20Glasses.webp"
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
    "id": "strollers-iced-cake-stroller",
    "name": "Iced Cake Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "food-cookie",
    "name": "Cookie",
    "category": "food",
    "value": 0.3092,
    "demand": 2,
    "image": "/items/Cookie.webp"
  },
  {
    "id": "eggs-royal-desert-egg",
    "name": "Royal Desert Egg",
    "category": "eggs",
    "value": 0.5516,
    "demand": 2,
    "image": "/items/Royal%20Desert%20Egg.webp"
  },
  {
    "id": "pets-haetae",
    "name": "Haetae",
    "category": "pets",
    "value": 34.0154,
    "demand": 3,
    "image": "/items/Haetae.webp"
  },
  {
    "id": "food-ice-tub",
    "name": "Ice Tub",
    "category": "food",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Ice%20Tub.webp"
  },
  {
    "id": "pets-coyote",
    "name": "Coyote",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Coyote.webp"
  },
  {
    "id": "vehicles-bike",
    "name": "Bike",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "stickers-turtle-sticker",
    "name": "Turtle Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Turtle%20Sticker.webp"
  },
  {
    "id": "toys-marsh-plush",
    "name": "Marsh Plush",
    "category": "toys",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Marsh%20Plush.webp"
  },
  {
    "id": "vehicles-festive-wagon",
    "name": "Festive Wagon",
    "category": "vehicles",
    "value": 0.0901,
    "demand": 1,
    "image": "/items/Festive%20Wagon.webp"
  },
  {
    "id": "pets-wild-boar",
    "name": "Wild Boar",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Wild%20Boar.webp"
  },
  {
    "id": "pets-muskrat",
    "name": "Muskrat",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Muskrat.webp"
  },
  {
    "id": "petwear-goth-shoes",
    "name": "Goth Shoes",
    "category": "petwear",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Goth%20Shoes.webp"
  },
  {
    "id": "pets-silverback-gorilla",
    "name": "Silverback Gorilla",
    "category": "pets",
    "value": 6.9577,
    "demand": 2,
    "image": "/items/Silverback%20Gorilla.webp"
  },
  {
    "id": "pets-hot-doggo",
    "name": "Hot Doggo",
    "category": "pets",
    "value": 11.0808,
    "demand": 3,
    "image": "/items/Hot%20Doggo.webp"
  },
  {
    "id": "petwear-tutu",
    "name": "Tutu",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Tutu.webp"
  },
  {
    "id": "petwear-leaf-hat",
    "name": "Leaf Hat",
    "category": "petwear",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Leaf%20Hat.webp"
  },
  {
    "id": "pets-camel",
    "name": "Camel",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Camel.webp"
  },
  {
    "id": "pets-fleur-de-ice",
    "name": "Fleur De Ice",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Fleur%20De%20Ice.webp"
  },
  {
    "id": "petwear-strawberry-shortcake-bat-dragon-backpack",
    "name": "Strawberry Shortcake Bat Dragon Backpack",
    "category": "petwear",
    "value": 2.1904,
    "demand": 2,
    "image": "/items/Strawberry%20Shortcake%20Bat%20Dragon%20Backpack.webp"
  },
  {
    "id": "pets-glacier-moth",
    "name": "Glacier Moth",
    "category": "pets",
    "value": 1.8038,
    "demand": 2,
    "image": "/items/Glacier%20Moth.webp"
  },
  {
    "id": "pets-lunar-moon-bear",
    "name": "Lunar Moon Bear",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Lunar%20Moon%20Bear.webp"
  },
  {
    "id": "vehicles-pink-scooter",
    "name": "Pink Scooter",
    "category": "vehicles",
    "value": 1.6259,
    "demand": 1,
    "image": "/items/Pink%20Scooter.webp"
  },
  {
    "id": "pets-primal-kaijunior",
    "name": "Primal Kaijunior",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Primal%20Kaijunior.webp"
  },
  {
    "id": "vehicles-prehistoric-car",
    "name": "Prehistoric Car",
    "category": "vehicles",
    "value": 0.1,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-garden-snake",
    "name": "Garden Snake",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Garden%20Snake.webp"
  },
  {
    "id": "pets-ice-wolf",
    "name": "Ice Wolf",
    "category": "pets",
    "value": 0.8246,
    "demand": 2,
    "image": "/items/Ice%20Wolf.webp"
  },
  {
    "id": "pets-oakee-knight",
    "name": "Oakee Knight",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Oakee%20Knight.webp"
  },
  {
    "id": "petwear-ice-cream-cone-hat",
    "name": "Ice Cream Cone Hat",
    "category": "petwear",
    "value": 2.4481,
    "demand": 3,
    "image": "/items/Ice%20Cream%20Cone%20Hat.webp"
  },
  {
    "id": "petwear-eco-orange-pumpkin-pie-wings",
    "name": "Eco Orange Pumpkin Pie Wings",
    "category": "petwear",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Eco%20Orange%20Pumpkin%20Pie%20Wings.webp"
  },
  {
    "id": "petwear-cheese-hat",
    "name": "Cheese Hat",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Cheese%20Hat.webp"
  },
  {
    "id": "pets-evil-chick",
    "name": "Evil Chick",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Evil%20Chick.webp"
  },
  {
    "id": "pets-cuteacabra",
    "name": "Cute-A-Cabra",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Cute-A-Cabra.webp"
  },
  {
    "id": "strollers-takoyaki-stroller",
    "name": "Takoyaki Stroller",
    "category": "strollers",
    "value": 0.13,
    "demand": 3,
    "image": ""
  },
  {
    "id": "gifts-1000-bucks-silk-bag",
    "name": "1000 Bucks Silk Bag",
    "category": "gifts",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/1000%20Bucks%20Silk%20Bag.webp"
  },
  {
    "id": "pets-midnight-dragon",
    "name": "Midnight Dragon",
    "category": "pets",
    "value": 2.3192,
    "demand": 2,
    "image": "/items/Midnight%20Dragon.webp"
  },
  {
    "id": "pets-robin",
    "name": "Robin",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Robin.webp"
  },
  {
    "id": "petwear-chocolate-chip-bat-dragon-backpack",
    "name": "Chocolate Chip Bat Dragon Backpack",
    "category": "petwear",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Chocolate%20Chip%20Bat%20Dragon%20Backpack.webp"
  },
  {
    "id": "eggs-easter-2020-egg",
    "name": "Easter 2020 Egg",
    "category": "eggs",
    "value": 0.6587,
    "demand": 2,
    "image": "/items/Easter%202020%20Egg.webp"
  },
  {
    "id": "gifts-moon-bear-box",
    "name": "Moon Bear Box",
    "category": "gifts",
    "value": 0.1914,
    "demand": 1,
    "image": "/items/Moon%20Bear%20Box.webp"
  },
  {
    "id": "vehicles-skates",
    "name": "Neon Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "gifts-lunar-tiger-box",
    "name": "Lunar Tiger Box",
    "category": "gifts",
    "value": 0.1126,
    "demand": 1,
    "image": "/items/Lunar%20Tiger%20Box.webp"
  },
  {
    "id": "pets-kitty-bat",
    "name": "Kitty Bat",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Kitty%20Bat.webp"
  },
  {
    "id": "pets-lionfish",
    "name": "Lionfish",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Lionfish.webp"
  },
  {
    "id": "pets-black-marlin",
    "name": "Black Marlin",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Black%20Marlin.webp"
  },
  {
    "id": "pets-hippogriff",
    "name": "Hippogriff",
    "category": "pets",
    "value": 0.4123,
    "demand": 1,
    "image": "/items/Hippogriff.webp"
  },
  {
    "id": "petwear-2022-birthday-confetti-drape",
    "name": "2022 Birthday Confetti Drape",
    "category": "petwear",
    "value": 0.5669,
    "demand": 2,
    "image": "/items/2022%20Birthday%20Confetti%20Drape.webp"
  },
  {
    "id": "vehicles-fossil-paw-helicopter",
    "name": "Fossil Paw Helicopter",
    "category": "vehicles",
    "value": 0.1352,
    "demand": 1,
    "image": "/items/Fossil%20Paw%20Helicopter.webp"
  },
  {
    "id": "pets-crab",
    "name": "Crab",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Crab.webp"
  },
  {
    "id": "petwear-yellow-instant-camera",
    "name": "Yellow Instant Camera",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Yellow%20Instant%20Camera.webp"
  },
  {
    "id": "pets-rainbow-dragon",
    "name": "Rainbow Dragon",
    "category": "pets",
    "value": 0.6958,
    "demand": 2,
    "image": "/items/Rainbow%20Dragon.webp"
  },
  {
    "id": "eggs-royal-aztec-egg",
    "name": "Royal Aztec Egg",
    "category": "eggs",
    "value": 0.4053,
    "demand": 2,
    "image": "/items/Royal%20Aztec%20Egg.webp"
  },
  {
    "id": "petwear-purple-green-beads",
    "name": "Purple & Green Beads",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Purple%20%26%20Green%20Beads.webp"
  },
  {
    "id": "pets-sakura-spirit",
    "name": "Sakura Spirit",
    "category": "pets",
    "value": 1.8296,
    "demand": 2,
    "image": "/items/Sakura%20Spirit.webp"
  },
  {
    "id": "toys-homeing-rocket",
    "name": "Homeing Rocket",
    "category": "toys",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Homeing%20Rocket.webp"
  },
  {
    "id": "pets-diamond-king-penguin",
    "name": "Diamond King Penguin",
    "category": "pets",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Diamond%20King%20Penguin.webp"
  },
  {
    "id": "vehicles-rocket-sled",
    "name": "Rocket Sled",
    "category": "vehicles",
    "value": 7.7524,
    "demand": 2,
    "image": "/items/Rocket%20Sled.webp"
  },
  {
    "id": "vehicles-yellow-taxi-cab",
    "name": "Yellow Taxi Cab",
    "category": "vehicles",
    "value": 0.1183,
    "demand": 1,
    "image": "/items/Yellow%20Taxi%20Cab.webp"
  },
  {
    "id": "pets-pretty-pony",
    "name": "Pretty Pony",
    "category": "pets",
    "value": 0.4123,
    "demand": 2,
    "image": "/items/Pretty%20Pony.webp"
  },
  {
    "id": "petwear-strawberry-cupcake-shoes",
    "name": "Strawberry Cupcake Shoes",
    "category": "petwear",
    "value": 45.0962,
    "demand": 2,
    "image": "/items/Strawberry%20Cupcake%20Shoes.webp"
  },
  {
    "id": "pets-poodle",
    "name": "Poodle",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Poodle.webp"
  },
  {
    "id": "food-diamond-lavender",
    "name": "Diamond Lavender",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Diamond%20Lavender.webp"
  },
  {
    "id": "petwear-flower-monocle",
    "name": "Flower Monocle",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Flower%20Monocle.webp"
  },
  {
    "id": "vehicles-motorcycle",
    "name": "Motorcycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-sea-angel",
    "name": "Sea Angel",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Sea%20Angel.webp"
  },
  {
    "id": "pets-griffin",
    "name": "Griffin",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Griffin.webp"
  },
  {
    "id": "petwear-flying-fairy",
    "name": "Flying Fairy",
    "category": "petwear",
    "value": 0.1546,
    "demand": 2,
    "image": "/items/Flying%20Fairy.webp"
  },
  {
    "id": "vehicles-bee-shuttle",
    "name": "Bee Shuttle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-pig",
    "name": "Pig",
    "category": "pets",
    "value": 2.7058,
    "demand": 3,
    "image": "/items/Pig.webp"
  },
  {
    "id": "pets-kiwi",
    "name": "Kiwi",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Kiwi.webp"
  },
  {
    "id": "pets-temple-friend",
    "name": "Temple Friend",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Temple%20Friend.webp"
  },
  {
    "id": "pets-blue-betta-fish",
    "name": "Blue Betta Fish",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Blue%20Betta%20Fish.webp"
  },
  {
    "id": "eggs-farm-egg",
    "name": "Farm Egg",
    "category": "eggs",
    "value": 25.1471,
    "demand": 2,
    "image": "/items/Farm%20Egg.webp"
  },
  {
    "id": "pets-cake-friend",
    "name": "Cake Friend",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Cake%20Friend.webp"
  },
  {
    "id": "petwear-jade-moth-wings",
    "name": "Jade Moth Wings",
    "category": "petwear",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Jade%20Moth%20Wings.webp"
  },
  {
    "id": "pets-trex",
    "name": "T-Rex",
    "category": "pets",
    "value": 0.4896,
    "demand": 2,
    "image": "/items/T-Rex.webp"
  },
  {
    "id": "petwear-strawberry-shortcake-bow",
    "name": "Strawberry Shortcake Bow",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Strawberry%20Shortcake%20Bow.webp"
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
    "id": "vehicles-blue-snowboard",
    "name": "Blue Snowboard",
    "category": "vehicles",
    "value": 10.5471,
    "demand": 1,
    "image": "/items/Blue%20Snowboard.webp"
  },
  {
    "id": "petwear-burger-boots",
    "name": "Burger Boots",
    "category": "petwear",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Burger%20Boots.webp"
  },
  {
    "id": "pets-puma",
    "name": "Puma",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Puma.webp"
  },
  {
    "id": "vehicles-rocket-skates",
    "name": "Rocket Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-lemonade-stand",
    "name": "Lemonade Stand",
    "category": "toys",
    "value": 0.1031,
    "demand": 2,
    "image": "/items/Lemonade%20Stand.webp"
  },
  {
    "id": "pets-mole",
    "name": "Mole",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Mole.webp"
  },
  {
    "id": "pets-hermit-crab",
    "name": "Hermit Crab",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Hermit%20Crab.webp"
  },
  {
    "id": "gifts-pony-box",
    "name": "Pony Box",
    "category": "gifts",
    "value": 0.2533,
    "demand": 2,
    "image": "/items/Pony%20Box.webp"
  },
  {
    "id": "pets-sloth",
    "name": "Sloth",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Sloth.webp"
  },
  {
    "id": "pets-horse",
    "name": "Horse",
    "category": "pets",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Horse.webp"
  },
  {
    "id": "vehicles-emoji-scooter",
    "name": "Emoji Scooter",
    "category": "vehicles",
    "value": 0.2591,
    "demand": 1,
    "image": "/items/Emoji%20Scooter.webp"
  },
  {
    "id": "pets-headless-horse",
    "name": "Headless Horse",
    "category": "pets",
    "value": 0.4381,
    "demand": 2,
    "image": "/items/Headless%20Horse.webp"
  },
  {
    "id": "vehicles-bethink-skateboard",
    "name": "Bethink Skateboard",
    "category": "vehicles",
    "value": 0.3772,
    "demand": 1,
    "image": "/items/Bethink%20Skateboard.webp"
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
    "id": "strollers-sleigh-stroller",
    "name": "Sleigh Stroller",
    "category": "strollers",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "food-heart-potion",
    "name": "Heart Potion",
    "category": "food",
    "value": 1.0308,
    "demand": 2,
    "image": "/items/Heart%20Potion.webp"
  },
  {
    "id": "petwear-natures-crown",
    "name": "Nature's Crown",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Natures%20Crown.webp"
  },
  {
    "id": "vehicles-adopt-me-girl-scooter",
    "name": "Adopt Me Girl Scooter",
    "category": "vehicles",
    "value": 0.518,
    "demand": 1,
    "image": "/items/Adopt%20Me%20Girl%20Scooter.webp"
  },
  {
    "id": "vehicles-strawberry-shortcake-skates",
    "name": "Strawberry Shortcake Skates",
    "category": "vehicles",
    "value": 0.07,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-kage-crow",
    "name": "Kage Crow",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Kage%20Crow.webp"
  },
  {
    "id": "gifts-premium-gibbon-box",
    "name": "Premium Gibbon Box",
    "category": "gifts",
    "value": 0.8948,
    "demand": 2,
    "image": "/items/Premium%20Gibbon%20Box.webp"
  },
  {
    "id": "pets-dimorphodon",
    "name": "Dimorphodon",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Dimorphodon.webp"
  },
  {
    "id": "gifts-choccybunny-box",
    "name": "Choccybunny Box",
    "category": "gifts",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-cold-cube",
    "name": "Cold Cube",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Cold%20Cube.webp"
  },
  {
    "id": "stickers-peppermint-penguin-sticker",
    "name": "Peppermint Penguin Sticker",
    "category": "stickers",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Peppermint%20Penguin%20Sticker.webp"
  },
  {
    "id": "petwear-puppeteer-hand",
    "name": "Puppeteer Hand",
    "category": "petwear",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Puppeteer%20Hand.webp"
  },
  {
    "id": "petwear-mandarins-hat",
    "name": "Mandarin's Hat",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Mandarins%20Hat.webp"
  },
  {
    "id": "vehicles-robo-unicycle",
    "name": "Robo Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-toy-rescue-helicopter",
    "name": "Toy Rescue Helicopter",
    "category": "vehicles",
    "value": 0.3268,
    "demand": 1,
    "image": "/items/Toy%20Rescue%20Helicopter.webp"
  },
  {
    "id": "pets-black-springer-spaniel",
    "name": "Black Springer Spaniel",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Black%20Springer%20Spaniel.webp"
  },
  {
    "id": "stickers-cow-sticker",
    "name": "Cow Sticker",
    "category": "stickers",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Cow%20Sticker.webp"
  },
  {
    "id": "vehicles-glyptodon-van",
    "name": "Glyptodon Van",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "food-chocolate-drop",
    "name": "Chocolate Drop",
    "category": "food",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Chocolate%20Drop.webp"
  },
  {
    "id": "toys-heart-rattle",
    "name": "Heart Rattle",
    "category": "toys",
    "value": 1.0308,
    "demand": 2,
    "image": "/items/Heart%20Rattle.webp"
  },
  {
    "id": "petwear-brain-jar",
    "name": "Brain Jar",
    "category": "petwear",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Brain%20Jar.webp"
  },
  {
    "id": "petwear-lunar-new-year-shoes",
    "name": "Lunar New Year Shoes",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Lunar%20New%20Year%20Shoes.webp"
  },
  {
    "id": "pets-gecko-ducky",
    "name": "Gecko Ducky",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Gecko%20Ducky.webp"
  },
  {
    "id": "vehicles-blue-rider",
    "name": "Blue Rider",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-tree-kangaroo",
    "name": "Tree Kangaroo",
    "category": "pets",
    "value": 0.7988,
    "demand": 2,
    "image": "/items/Tree%20Kangaroo.webp"
  },
  {
    "id": "pets-nautilus",
    "name": "Nautilus",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Nautilus.webp"
  },
  {
    "id": "petwear-unicorn-backpack",
    "name": "Unicorn Backpack",
    "category": "petwear",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Unicorn%20Backpack.webp"
  },
  {
    "id": "toys-caticorn-rattle",
    "name": "Caticorn Rattle",
    "category": "toys",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Caticorn%20Rattle.webp"
  },
  {
    "id": "vehicles-super-jetpack",
    "name": "Super Jetpack",
    "category": "vehicles",
    "value": 7.9221,
    "demand": 2,
    "image": "/items/Super%20Jetpack.webp"
  },
  {
    "id": "food-super-ageup-potion",
    "name": "Super Age-Up Potion",
    "category": "food",
    "value": 0.9535,
    "demand": 2,
    "image": "/items/Super%20Age-Up%20Potion.webp"
  },
  {
    "id": "pets-candy-cane-snail",
    "name": "Candy Cane Snail",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Candy%20Cane%20Snail.webp"
  },
  {
    "id": "pets-cactus-friend",
    "name": "Cactus Friend",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Cactus%20Friend.webp"
  },
  {
    "id": "strollers-popsicle-stroller",
    "name": "Popsicle Stroller",
    "category": "strollers",
    "value": 0.1972,
    "demand": 1,
    "image": "/items/Popsicle%20Stroller.webp"
  },
  {
    "id": "petwear-buttoned-ushanka",
    "name": "Buttoned Ushanka",
    "category": "petwear",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Buttoned%20Ushanka.webp"
  },
  {
    "id": "eggs-royal-egg",
    "name": "Royal Egg",
    "category": "eggs",
    "value": 0.0293,
    "demand": 1,
    "image": "/items/Royal%20Egg.webp"
  },
  {
    "id": "vehicles-bat-face-roller-skates",
    "name": "Bat Face Roller Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-top-hat",
    "name": "Top Hat",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Top%20Hat.webp"
  },
  {
    "id": "pets-sado-mole",
    "name": "Sado Mole",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Sado%20Mole.webp"
  },
  {
    "id": "pets-cherub-chipmunk",
    "name": "Cherub Chipmunk",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Cherub%20Chipmunk.webp"
  },
  {
    "id": "petwear-cupcake-sprinkle-wings",
    "name": "Cupcake Sprinkle Wings",
    "category": "petwear",
    "value": 0.2835,
    "demand": 2,
    "image": "/items/Cupcake%20Sprinkle%20Wings.webp"
  },
  {
    "id": "pets-zodiac-minion-chick",
    "name": "Zodiac Minion Chick",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Zodiac%20Minion%20Chick.webp"
  },
  {
    "id": "pets-snow-leopard",
    "name": "Snow Leopard",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Snow%20Leopard.webp"
  },
  {
    "id": "pets-dirty-ducky",
    "name": "Dirty Ducky",
    "category": "pets",
    "value": 0.2448,
    "demand": 1,
    "image": "/items/Dirty%20Ducky.webp"
  },
  {
    "id": "pets-nutcracker-squirrel",
    "name": "Nutcracker Squirrel",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Nutcracker%20Squirrel.webp"
  },
  {
    "id": "stickers-fossil-sticker-pack",
    "name": "Fossil Sticker Pack",
    "category": "stickers",
    "value": 0.0155,
    "demand": 1,
    "image": "/items/Fossil%20Sticker%20Pack.webp"
  },
  {
    "id": "stickers-vol-2-pets-plus-sticker-pack",
    "name": "Vol. 2 Pets Plus Sticker Pack",
    "category": "stickers",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Vol.%202%20Pets%20Plus%20Sticker%20Pack.webp"
  },
  {
    "id": "pets-clementine-owl",
    "name": "Clementine Owl",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Clementine%20Owl.webp"
  },
  {
    "id": "pets-nebula-snake",
    "name": "Nebula Snake",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Nebula%20Snake.webp"
  },
  {
    "id": "pets-chef-gorilla",
    "name": "Chef Gorilla",
    "category": "pets",
    "value": 0.5669,
    "demand": 2,
    "image": "/items/Chef%20Gorilla.webp"
  },
  {
    "id": "food-snapdragon-flower",
    "name": "Snapdragon Flower",
    "category": "food",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Snapdragon%20Flower.webp"
  },
  {
    "id": "pets-gibbon",
    "name": "Gibbon",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Gibbon.webp"
  },
  {
    "id": "toys-reindeer-plush",
    "name": "Reindeer Plush",
    "category": "toys",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Reindeer%20Plush.webp"
  },
  {
    "id": "pets-old-king-coal",
    "name": "Old King Coal",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Old%20King%20Coal.webp"
  },
  {
    "id": "vehicles-water-scooter",
    "name": "Water Scooter",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-llama",
    "name": "Llama",
    "category": "pets",
    "value": 0.7988,
    "demand": 2,
    "image": "/items/Llama.webp"
  },
  {
    "id": "petwear-pink-hightops",
    "name": "Pink Hightops",
    "category": "petwear",
    "value": 0.1031,
    "demand": 2,
    "image": "/items/Pink%20Hightops.webp"
  },
  {
    "id": "pets-kiwi-kiwi",
    "name": "Kiwi Kiwi",
    "category": "pets",
    "value": 1.1081,
    "demand": 2,
    "image": "/items/Kiwi%20Kiwi.webp"
  },
  {
    "id": "vehicles-doge-skateboard",
    "name": "Doge Skateboard",
    "category": "vehicles",
    "value": 0.7035,
    "demand": 1,
    "image": "/items/Doge%20Skateboard.webp"
  },
  {
    "id": "pets-platypus",
    "name": "Platypus",
    "category": "pets",
    "value": 1.1854,
    "demand": 2,
    "image": "/items/Platypus.webp"
  },
  {
    "id": "pets-great-pyrenees",
    "name": "Great Pyrenees",
    "category": "pets",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/Great%20Pyrenees.webp"
  },
  {
    "id": "eggs-garden-egg",
    "name": "Garden Egg",
    "category": "eggs",
    "value": 0.0878,
    "demand": 1,
    "image": "/items/Garden%20Egg.webp"
  },
  {
    "id": "pets-groundhog",
    "name": "Groundhog",
    "category": "pets",
    "value": 1.5462,
    "demand": 2,
    "image": "/items/Groundhog.webp"
  },
  {
    "id": "pets-polar-bear",
    "name": "Polar Bear",
    "category": "pets",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Polar%20Bear.webp"
  },
  {
    "id": "pets-sprout-snail",
    "name": "Sprout Snail",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Sprout%20Snail.webp"
  },
  {
    "id": "vehicles-festive-wreath-cruiser",
    "name": "Festive Wreath Cruiser",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-mule",
    "name": "Mule",
    "category": "pets",
    "value": 0.5927,
    "demand": 2,
    "image": "/items/Mule.webp"
  },
  {
    "id": "vehicles-royal-carriage",
    "name": "Royal Carriage",
    "category": "vehicles",
    "value": 0.1408,
    "demand": 1,
    "image": "/items/Royal%20Carriage.webp"
  },
  {
    "id": "pets-chimera",
    "name": "Chimera",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Chimera.webp"
  },
  {
    "id": "pets-manekineko",
    "name": "Maneki-Neko",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Maneki-Neko.webp"
  },
  {
    "id": "vehicles-giant-snowball",
    "name": "Giant Snowball",
    "category": "vehicles",
    "value": 0.1521,
    "demand": 1,
    "image": "/items/Giant%20Snowball.webp"
  },
  {
    "id": "petwear-angel-wings",
    "name": "Angel Wings",
    "category": "petwear",
    "value": 9.6635,
    "demand": 3,
    "image": "/items/Angel%20Wings.webp"
  },
  {
    "id": "pets-german-shepherd",
    "name": "German Shepherd",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/German%20Shepherd.webp"
  },
  {
    "id": "gifts-kaijunior-box",
    "name": "Kaijunior Box",
    "category": "gifts",
    "value": 0.27,
    "demand": 3,
    "image": ""
  },
  {
    "id": "stickers-pet-rock-sticker",
    "name": "Pet Rock Sticker",
    "category": "stickers",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Pet%20Rock%20Sticker.webp"
  },
  {
    "id": "vehicles-blue-skateboard",
    "name": "Blue Skateboard",
    "category": "vehicles",
    "value": 0.7372,
    "demand": 1,
    "image": "/items/Blue%20Skateboard.webp"
  },
  {
    "id": "petwear-star-sunglasses",
    "name": "Star Sunglasses",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Star%20Sunglasses.webp"
  },
  {
    "id": "pets-capricorn",
    "name": "Capricorn",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Capricorn.webp"
  },
  {
    "id": "vehicles-orbital-roller-skates",
    "name": "Orbital Roller Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-rainbow-trail-magic-carpet",
    "name": "Rainbow Trail Magic Carpet",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
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
    "id": "pets-2d-doggy",
    "name": "2D Doggy",
    "category": "pets",
    "value": 2.1904,
    "demand": 2,
    "image": "/items/2D%20Doggy.webp"
  },
  {
    "id": "pets-ground-sloth",
    "name": "Ground Sloth",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Ground%20Sloth.webp"
  },
  {
    "id": "toys-dragon-balloon",
    "name": "Dragon Balloon",
    "category": "toys",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Dragon%20Balloon.webp"
  },
  {
    "id": "vehicles-throwing-knife-target",
    "name": "Throwing Knife Target",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-ruddy-duck-waddler",
    "name": "Ruddy Duck Waddler",
    "category": "vehicles",
    "value": 0.07,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-river-otter",
    "name": "River Otter",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/River%20Otter.webp"
  },
  {
    "id": "pets-baku",
    "name": "Baku",
    "category": "pets",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Baku.webp"
  },
  {
    "id": "pets-brown-springer-spaniel",
    "name": "Brown Springer Spaniel",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Brown%20Springer%20Spaniel.webp"
  },
  {
    "id": "pets-lynx",
    "name": "Lynx",
    "category": "pets",
    "value": 0.4123,
    "demand": 2,
    "image": "/items/Lynx.webp"
  },
  {
    "id": "pets-halloween-white-skeleton-dog",
    "name": "Halloween White Skeleton Dog",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Halloween%20White%20Skeleton%20Dog.webp"
  },
  {
    "id": "vehicles-snow-globetrotter",
    "name": "Snow Globetrotter",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-three-egg-basket",
    "name": "Three Egg Basket",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Three%20Egg%20Basket.webp"
  },
  {
    "id": "pets-golden-unicorn",
    "name": "Golden Unicorn",
    "category": "pets",
    "value": 0.2448,
    "demand": 1,
    "image": "/items/Golden%20Unicorn.webp"
  },
  {
    "id": "pets-mrs-whiskerpips",
    "name": "Mrs. Whiskerpips",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Mrs.%20Whiskerpips.webp"
  },
  {
    "id": "eggs-fossil-egg",
    "name": "Fossil Egg",
    "category": "eggs",
    "value": 0.394,
    "demand": 2,
    "image": "/items/Fossil%20Egg.webp"
  },
  {
    "id": "stickers-pretty-please-snowball-sticker",
    "name": "Pretty Please Snowball Sticker",
    "category": "stickers",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Pretty%20Please%20Snowball%20Sticker.webp"
  },
  {
    "id": "petwear-golden-hair",
    "name": "Golden Hair",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Golden%20Hair.webp"
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
    "id": "pets-kid-goat",
    "name": "Kid Goat",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Kid%20Goat.webp"
  },
  {
    "id": "vehicles-black-scooter",
    "name": "Black Scooter",
    "category": "vehicles",
    "value": 56.5319,
    "demand": 2,
    "image": "/items/Black%20Scooter.webp"
  },
  {
    "id": "petwear-cherryontop",
    "name": "Cherry-On-Top",
    "category": "petwear",
    "value": 10.1788,
    "demand": 3,
    "image": "/items/Cherry-On-Top.webp"
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
    "id": "pets-ratatoskr",
    "name": "Ratatoskr",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Ratatoskr.webp"
  },
  {
    "id": "petwear-unfortunate-eyelashes",
    "name": "Unfortunate Eyelashes",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Unfortunate%20Eyelashes.webp"
  },
  {
    "id": "pets-puptune",
    "name": "Puptune",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Puptune.webp"
  },
  {
    "id": "petwear-blue-butterfly-wings",
    "name": "Blue Butterfly Wings",
    "category": "petwear",
    "value": 0.4123,
    "demand": 2,
    "image": "/items/Blue%20Butterfly%20Wings.webp"
  },
  {
    "id": "pets-snowball-pet",
    "name": "Snowball Pet",
    "category": "pets",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/Snowball%20Pet.webp"
  },
  {
    "id": "vehicles-multibike",
    "name": "Multi-Bike",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-borhyaena-gigantica",
    "name": "Borhyaena Gigantica",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Borhyaena%20Gigantica.webp"
  },
  {
    "id": "pets-tuxedo-cat",
    "name": "Tuxedo Cat",
    "category": "pets",
    "value": 0.7215,
    "demand": 2,
    "image": "/items/Tuxedo%20Cat.webp"
  },
  {
    "id": "toys-amethyst-skies-paint",
    "name": "Amethyst Skies Mega Neon Paint",
    "category": "toys",
    "value": 0.2062,
    "demand": 3,
    "image": "/items/Amethyst%20Skies%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "pets-golden-albatross",
    "name": "Golden Albatross",
    "category": "pets",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Golden%20Albatross.webp"
  },
  {
    "id": "toys-elephant-plush",
    "name": "Elephant Plush",
    "category": "toys",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Elephant%20Plush.webp"
  },
  {
    "id": "eggs-woodland-egg",
    "name": "Woodland Egg",
    "category": "eggs",
    "value": 0.3658,
    "demand": 2,
    "image": "/items/Woodland%20Egg.webp"
  },
  {
    "id": "pets-swordfish",
    "name": "Swordfish",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Swordfish.webp"
  },
  {
    "id": "vehicles-cupids-coupe",
    "name": "Cupid's Coupe",
    "category": "vehicles",
    "value": 0.4448,
    "demand": 1,
    "image": "/items/Cupids%20Coupe.webp"
  },
  {
    "id": "strollers-banana-stroller",
    "name": "Banana Stroller",
    "category": "strollers",
    "value": 0.0789,
    "demand": 1,
    "image": "/items/Banana%20Stroller.webp"
  },
  {
    "id": "petwear-pirate-hat",
    "name": "Pirate Hat",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Pirate%20Hat.webp"
  },
  {
    "id": "petwear-festive-scarf",
    "name": "Festive Scarf",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Festive%20Scarf.webp"
  },
  {
    "id": "pets-slimingo",
    "name": "Slimingo",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Slimingo.webp"
  },
  {
    "id": "pets-cockroach",
    "name": "Cockroach",
    "category": "pets",
    "value": 0.219,
    "demand": 1,
    "image": "/items/Cockroach.webp"
  },
  {
    "id": "petwear-rain-cloud-hat",
    "name": "Rain Cloud Hat",
    "category": "petwear",
    "value": 4.7673,
    "demand": 3,
    "image": "/items/Rain%20Cloud%20Hat.webp"
  },
  {
    "id": "eggs-danger-egg",
    "name": "Danger Egg",
    "category": "eggs",
    "value": 0.4222,
    "demand": 2,
    "image": "/items/Danger%20Egg.webp"
  },
  {
    "id": "pets-parrot",
    "name": "Parrot",
    "category": "pets",
    "value": 54.3731,
    "demand": 3,
    "image": "/items/Parrot.webp"
  },
  {
    "id": "toys-hot-cocoa-stand",
    "name": "Hot Cocoa Stand",
    "category": "toys",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/Hot%20Cocoa%20Stand.webp"
  },
  {
    "id": "petwear-summer-straw-hat",
    "name": "Summer Straw Hat",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Summer%20Straw%20Hat.webp"
  },
  {
    "id": "pets-gummy-guana",
    "name": "Gummy Guana",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Gummy%20Guana.webp"
  },
  {
    "id": "toys-chick-plush",
    "name": "Chick Plush",
    "category": "toys",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Chick%20Plush.webp"
  },
  {
    "id": "vehicles-old-sail-boat",
    "name": "Old Sail Boat",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-paint-roller-truck",
    "name": "Paint Roller Truck",
    "category": "vehicles",
    "value": 0.2139,
    "demand": 1,
    "image": "/items/Paint%20Roller%20Truck.webp"
  },
  {
    "id": "pets-magpie",
    "name": "Magpie",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Magpie.webp"
  },
  {
    "id": "vehicles-chairlift",
    "name": "Chairlift",
    "category": "vehicles",
    "value": 0.17,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-wood-skateboard",
    "name": "Wood Skateboard",
    "category": "vehicles",
    "value": 0.1859,
    "demand": 1,
    "image": "/items/Wood%20Skateboard.webp"
  },
  {
    "id": "pets-water-moon-bear",
    "name": "Water Moon Bear",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Water%20Moon%20Bear.webp"
  },
  {
    "id": "vehicles-postie-van",
    "name": "Postie Van",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-skeleton-winged-glider",
    "name": "Skeleton Winged Glider",
    "category": "toys",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Skeleton%20Winged%20Glider.webp"
  },
  {
    "id": "stickers-cherry-blossom-tree-sticker",
    "name": "Cherry Blossom Tree Sticker",
    "category": "stickers",
    "value": 0.0129,
    "demand": 1,
    "image": "/items/Cherry%20Blossom%20Tree%20Sticker.webp"
  },
  {
    "id": "potions-potion",
    "name": "Fly Potion",
    "category": "potions",
    "value": 0.75,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-toucan",
    "name": "Toucan",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Toucan.webp"
  },
  {
    "id": "pets-tan-chowchow",
    "name": "Tan Chow-Chow",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Tan%20Chow-Chow.webp"
  },
  {
    "id": "pets-pelican",
    "name": "Pelican",
    "category": "pets",
    "value": 10.3077,
    "demand": 2,
    "image": "/items/Pelican.webp"
  },
  {
    "id": "pets-scarecrow-crow",
    "name": "Scarecrow Crow",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Scarecrow%20Crow.webp"
  },
  {
    "id": "vehicles-gummy-biplane",
    "name": "Gummy Biplane",
    "category": "vehicles",
    "value": 0.0676,
    "demand": 1,
    "image": "/items/Gummy%20Biplane.webp"
  },
  {
    "id": "pets-halloween-golden-mummy-cat",
    "name": "Halloween Golden Mummy Cat",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Halloween%20Golden%20Mummy%20Cat.webp"
  },
  {
    "id": "vehicles-festive-deliveries-present-truck",
    "name": "Festive Deliveries Present Truck",
    "category": "vehicles",
    "value": 0.09,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-crabby-cruiser",
    "name": "Crabby Cruiser",
    "category": "vehicles",
    "value": 0.4616,
    "demand": 1,
    "image": "/items/Crabby%20Cruiser.webp"
  },
  {
    "id": "pets-komodo-dragon",
    "name": "Komodo Dragon",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Komodo%20Dragon.webp"
  },
  {
    "id": "vehicles-solarpunk-skates",
    "name": "Solarpunk Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-mule-baskets",
    "name": "Mule Baskets",
    "category": "petwear",
    "value": 0.3092,
    "demand": 2,
    "image": "/items/Mule%20Baskets.webp"
  },
  {
    "id": "petwear-pink-heart-glasses",
    "name": "Pink Heart Glasses",
    "category": "petwear",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Pink%20Heart%20Glasses.webp"
  },
  {
    "id": "pets-monkey",
    "name": "Monkey",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Monkey.webp"
  },
  {
    "id": "vehicles-royal-crown-carriage",
    "name": "Royal Crown Carriage",
    "category": "vehicles",
    "value": 0.2309,
    "demand": 1,
    "image": "/items/Royal%20Crown%20Carriage.webp"
  },
  {
    "id": "pets-giant-gold-scarab",
    "name": "Giant Gold Scarab",
    "category": "pets",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Giant%20Gold%20Scarab.webp"
  },
  {
    "id": "pets-wolf",
    "name": "Wolf",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Wolf.webp"
  },
  {
    "id": "pets-arctic-tern",
    "name": "Arctic Tern",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Arctic%20Tern.webp"
  },
  {
    "id": "pets-diamond-ladybug",
    "name": "Diamond Ladybug",
    "category": "pets",
    "value": 0.5669,
    "demand": 2,
    "image": "/items/Diamond%20Ladybug.webp"
  },
  {
    "id": "pets-2026-birthday-butterfly",
    "name": "2026 Birthday Butterfly",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/2026%20Birthday%20Butterfly.webp"
  },
  {
    "id": "pets-woolly-mammoth",
    "name": "Woolly Mammoth",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Woolly%20Mammoth.webp"
  },
  {
    "id": "vehicles-medieval-wagon",
    "name": "Medieval Wagon",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-ghost-vehicle",
    "name": "Ghost Vehicle",
    "category": "vehicles",
    "value": 13.4979,
    "demand": 2,
    "image": "/items/Ghost%20Vehicle.webp"
  },
  {
    "id": "petwear-personal-controller",
    "name": "Personal Controller",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Personal%20Controller.webp"
  },
  {
    "id": "petwear-halloween-black-axe-guitar-accessory",
    "name": "Halloween Black Axe Guitar Accessory",
    "category": "petwear",
    "value": 0.6185,
    "demand": 2,
    "image": "/items/Halloween%20Black%20Axe%20Guitar%20Accessory.webp"
  },
  {
    "id": "pets-sandfish",
    "name": "Sandfish",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Sandfish.webp"
  },
  {
    "id": "food-goldenrod-flower",
    "name": "Goldenrod Flower",
    "category": "food",
    "value": 2.5769,
    "demand": 2,
    "image": "/items/Goldenrod%20Flower.webp"
  },
  {
    "id": "pets-seabed-creeper",
    "name": "Seabed Creeper",
    "category": "pets",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/Seabed%20Creeper.webp"
  },
  {
    "id": "pets-volcanic-rhino",
    "name": "Volcanic Rhino",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Volcanic%20Rhino.webp"
  },
  {
    "id": "toys-candy-cannon",
    "name": "Candy Cannon",
    "category": "toys",
    "value": 72.1538,
    "demand": 2,
    "image": "/items/Candy%20Cannon.webp"
  },
  {
    "id": "petwear-bat-backpack",
    "name": "Bat Backpack",
    "category": "petwear",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Bat%20Backpack.webp"
  },
  {
    "id": "petwear-giraffe-hat",
    "name": "Giraffe Hat",
    "category": "petwear",
    "value": 12.6269,
    "demand": 2,
    "image": "/items/Giraffe%20Hat.webp"
  },
  {
    "id": "pets-golden-tortoise-beetle",
    "name": "Golden Tortoise Beetle",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Golden%20Tortoise%20Beetle.webp"
  },
  {
    "id": "petwear-pink-butterfly-wings",
    "name": "Pink Butterfly Wings",
    "category": "petwear",
    "value": 0.1288,
    "demand": 2,
    "image": "/items/Pink%20Butterfly%20Wings.webp"
  },
  {
    "id": "vehicles-duck-scooter",
    "name": "Duck Scooter",
    "category": "vehicles",
    "value": 0.2197,
    "demand": 1,
    "image": "/items/Duck%20Scooter.webp"
  },
  {
    "id": "pets-show-pony",
    "name": "Show Pony",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Show%20Pony.webp"
  },
  {
    "id": "pets-musk-ox",
    "name": "Musk Ox",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Musk%20Ox.webp"
  },
  {
    "id": "stickers-wet-owl-sticker",
    "name": "Wet Owl Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Wet%20Owl%20Sticker.webp"
  },
  {
    "id": "pets-sheeeeep",
    "name": "Sheeeeep",
    "category": "pets",
    "value": 1.8038,
    "demand": 2,
    "image": "/items/Sheeeeep.webp"
  },
  {
    "id": "pets-alley-cat",
    "name": "Alley Cat",
    "category": "pets",
    "value": 1.0565,
    "demand": 2,
    "image": "/items/Alley%20Cat.webp"
  },
  {
    "id": "pets-dire-wolf",
    "name": "Dire Wolf",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Dire%20Wolf.webp"
  },
  {
    "id": "pets-criosphinx",
    "name": "Criosphinx",
    "category": "pets",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Criosphinx.webp"
  },
  {
    "id": "pets-kaijunior",
    "name": "Kaijunior",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Kaijunior.webp"
  },
  {
    "id": "pets-evil-unicorn",
    "name": "Evil Unicorn",
    "category": "pets",
    "value": 30.6654,
    "demand": 3,
    "image": "/items/Evil%20Unicorn.webp"
  },
  {
    "id": "pets-flying-fish",
    "name": "Flying Fish",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Flying%20Fish.webp"
  },
  {
    "id": "petwear-jetpack",
    "name": "Jetpack",
    "category": "petwear",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Jetpack.webp"
  },
  {
    "id": "pets-lunar-gold-tiger",
    "name": "Lunar Gold Tiger",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Lunar%20Gold%20Tiger.webp"
  },
  {
    "id": "eggs-fool-egg",
    "name": "Fool Egg",
    "category": "eggs",
    "value": 0.4277,
    "demand": 2,
    "image": "/items/Fool%20Egg.webp"
  },
  {
    "id": "pets-ice-moth-dragon",
    "name": "Ice Moth Dragon",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Ice%20Moth%20Dragon.webp"
  },
  {
    "id": "pets-vanilla-penguin",
    "name": "Vanilla Penguin",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Vanilla%20Penguin.webp"
  },
  {
    "id": "pets-koala",
    "name": "Koala",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Koala.webp"
  },
  {
    "id": "pets-ruddy-duck",
    "name": "Ruddy Duck",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Ruddy%20Duck.webp"
  },
  {
    "id": "pets-ghost-wolf",
    "name": "Ghost Wolf",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Ghost%20Wolf.webp"
  },
  {
    "id": "pets-frostbite-cub",
    "name": "Frostbite Cub",
    "category": "pets",
    "value": 0.3608,
    "demand": 2,
    "image": "/items/Frostbite%20Cub.webp"
  },
  {
    "id": "vehicles-magical-princess-unicycle",
    "name": "Magical Princess Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "toys-tea-party-set",
    "name": "Tea Party Set",
    "category": "toys",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Tea%20Party%20Set.webp"
  },
  {
    "id": "pets-undead-elk",
    "name": "Undead Elk",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Undead%20Elk.webp"
  },
  {
    "id": "pets-grinmoire",
    "name": "Grinmoire",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Grinmoire.webp"
  },
  {
    "id": "vehicles-orange-snowboard",
    "name": "Orange Neon Snowboard",
    "category": "vehicles",
    "value": 0.7716,
    "demand": 2,
    "image": "/items/Orange%20Neon%20Snowboard.webp"
  },
  {
    "id": "toys-christmas-cat-rattle",
    "name": "Christmas Cat Rattle",
    "category": "toys",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Christmas%20Cat%20Rattle.webp"
  },
  {
    "id": "pets-swan",
    "name": "Swan",
    "category": "pets",
    "value": 0.67,
    "demand": 2,
    "image": "/items/Swan.webp"
  },
  {
    "id": "petwear-headband",
    "name": "Headband",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Headband.webp"
  },
  {
    "id": "vehicles-haunted-wagon",
    "name": "Haunted Wagon",
    "category": "vehicles",
    "value": 0.05,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-limo",
    "name": "Limo",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-spring-bunny-nose",
    "name": "Spring Bunny Nose",
    "category": "petwear",
    "value": 1.0308,
    "demand": 2,
    "image": "/items/Spring%20Bunny%20Nose.webp"
  },
  {
    "id": "pets-werewolf",
    "name": "Werewolf",
    "category": "pets",
    "value": 7.4731,
    "demand": 3,
    "image": "/items/Werewolf.webp"
  },
  {
    "id": "eggs-zodiac-minion-egg",
    "name": "Zodiac Minion Egg",
    "category": "eggs",
    "value": 0.107,
    "demand": 1,
    "image": "/items/Zodiac%20Minion%20Egg.webp"
  },
  {
    "id": "petwear-respectful-mustache",
    "name": "Respectful Mustache",
    "category": "petwear",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Respectful%20Mustache.webp"
  },
  {
    "id": "eggs-desert-egg",
    "name": "Desert Egg",
    "category": "eggs",
    "value": 0.2082,
    "demand": 2,
    "image": "/items/Desert%20Egg.webp"
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
    "id": "pets-slug",
    "name": "Slug",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Slug.webp"
  },
  {
    "id": "pets-blazing-lion",
    "name": "Blazing Lion",
    "category": "pets",
    "value": 55.4038,
    "demand": 3,
    "image": "/items/Blazing%20Lion.webp"
  },
  {
    "id": "pets-zombie-wolf",
    "name": "Zombie Wolf",
    "category": "pets",
    "value": 0.6958,
    "demand": 3,
    "image": "/items/Zombie%20Wolf.webp"
  },
  {
    "id": "vehicles-pumpkin-carriage",
    "name": "Pumpkin Carriage",
    "category": "vehicles",
    "value": 0.8611,
    "demand": 1,
    "image": "/items/Pumpkin%20Carriage.webp"
  },
  {
    "id": "toys-unicorn-plush",
    "name": "Unicorn Plush",
    "category": "toys",
    "value": 0.9019,
    "demand": 2,
    "image": "/items/Unicorn%20Plush.webp"
  },
  {
    "id": "vehicles-daisy-unicycle",
    "name": "Daisy Unicycle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-billy-goat",
    "name": "Billy Goat",
    "category": "pets",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Billy%20Goat.webp"
  },
  {
    "id": "vehicles-adopt-me-boy-scooter",
    "name": "Adopt Me Boy Scooter",
    "category": "vehicles",
    "value": 0.3155,
    "demand": 1,
    "image": "/items/Adopt%20Me%20Boy%20Scooter.webp"
  },
  {
    "id": "pets-thorny-devil",
    "name": "Thorny Devil",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Thorny%20Devil.webp"
  },
  {
    "id": "strollers-cradle-stroller",
    "name": "Cradle Stroller",
    "category": "strollers",
    "value": 0.9515,
    "demand": 2,
    "image": "/items/Cradle%20Stroller.webp"
  },
  {
    "id": "pets-husky",
    "name": "Husky",
    "category": "pets",
    "value": 0.67,
    "demand": 2,
    "image": "/items/Husky.webp"
  },
  {
    "id": "vehicles-imagination-box",
    "name": "Imagination Box",
    "category": "vehicles",
    "value": 0.0789,
    "demand": 1,
    "image": "/items/Imagination%20Box.webp"
  },
  {
    "id": "petwear-founders-crown",
    "name": "Founder's Crown",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Founders%20Crown.webp"
  },
  {
    "id": "pets-ice-golem",
    "name": "Ice Golem",
    "category": "pets",
    "value": 1.1854,
    "demand": 2,
    "image": "/items/Ice%20Golem.webp"
  },
  {
    "id": "pets-oakee-wizard",
    "name": "Oakee Wizard",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Oakee%20Wizard.webp"
  },
  {
    "id": "strollers-race-car-stroller",
    "name": "Race Car Stroller",
    "category": "strollers",
    "value": 0.8221,
    "demand": 2,
    "image": "/items/Race%20Car%20Stroller.webp"
  },
  {
    "id": "pets-golden-ladybug",
    "name": "Golden Ladybug",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Golden%20Ladybug.webp"
  },
  {
    "id": "vehicles-cloud",
    "name": "Cloud",
    "category": "vehicles",
    "value": 10.53,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-science-hat",
    "name": "Science Hat",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Science%20Hat.webp"
  },
  {
    "id": "pets-bali-starling",
    "name": "Bali Starling",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Bali%20Starling.webp"
  },
  {
    "id": "vehicles-roblox-snowboard",
    "name": "Roblox Snowboard",
    "category": "vehicles",
    "value": 3.2762,
    "demand": 1,
    "image": "/items/Roblox%20Snowboard.webp"
  },
  {
    "id": "pets-wooly-rhino",
    "name": "Wooly Rhino",
    "category": "pets",
    "value": 0.5927,
    "demand": 2,
    "image": "/items/Wooly%20Rhino.webp"
  },
  {
    "id": "pets-bauble-buddies",
    "name": "Bauble Buddies",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Bauble%20Buddies.webp"
  },
  {
    "id": "pets-blossom-snake",
    "name": "Blossom Snake",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Blossom%20Snake.webp"
  },
  {
    "id": "pets-green-amazon",
    "name": "Green Amazon",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Green%20Amazon.webp"
  },
  {
    "id": "pets-easter-bunny",
    "name": "Easter Bunny",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Easter%20Bunny.webp"
  },
  {
    "id": "pets-cow-calf",
    "name": "Cow Calf",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Cow%20Calf.webp"
  },
  {
    "id": "toys-rose-quartz-glow-paint",
    "name": "Rose Quartz Glow Mega Neon Paint",
    "category": "toys",
    "value": 0.2062,
    "demand": 3,
    "image": "/items/Rose%20Quartz%20Glow%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "pets-black-widow",
    "name": "Black Widow",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Black%20Widow.webp"
  },
  {
    "id": "pets-dotted-eggy",
    "name": "Dotted Eggy",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Dotted%20Eggy.webp"
  },
  {
    "id": "vehicles-unicorn-cycle",
    "name": "Unicorn Cycle",
    "category": "vehicles",
    "value": 1.6547,
    "demand": 2,
    "image": "/items/Unicorn%20Cycle.webp"
  },
  {
    "id": "vehicles-personal-sheepdog-car",
    "name": "Personal Sheepdog Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-african-wild-dog",
    "name": "African Wild Dog",
    "category": "pets",
    "value": 43.8077,
    "demand": 3,
    "image": "/items/African%20Wild%20Dog.webp"
  },
  {
    "id": "pets-ice-cube",
    "name": "Ice Cube",
    "category": "pets",
    "value": 0.2448,
    "demand": 1,
    "image": "/items/Ice%20Cube.webp"
  },
  {
    "id": "pets-rabbit",
    "name": "Rabbit",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Rabbit.webp"
  },
  {
    "id": "pets-magma-snail",
    "name": "Magma Snail",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Magma%20Snail.webp"
  },
  {
    "id": "pets-bakeneko",
    "name": "Bakeneko",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Bakeneko.webp"
  },
  {
    "id": "eggs-christmas-egg",
    "name": "Christmas Egg",
    "category": "eggs",
    "value": 6.6704,
    "demand": 2,
    "image": "/items/Christmas%20Egg.webp"
  },
  {
    "id": "petwear-easter-egg-friends",
    "name": "Easter Egg Friends",
    "category": "petwear",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Easter%20Egg%20Friends.webp"
  },
  {
    "id": "food-snowflake-potion",
    "name": "Snowflake Potion",
    "category": "food",
    "value": 2.0615,
    "demand": 2,
    "image": "/items/Snowflake%20Potion.webp"
  },
  {
    "id": "food-subzero-popsicle-bait",
    "name": "Subzero Popsicle Bait",
    "category": "food",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Subzero%20Popsicle%20Bait.webp"
  },
  {
    "id": "vehicles-witchs-caravan",
    "name": "Witch's Caravan",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-moonpine",
    "name": "Moonpine",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Moonpine.webp"
  },
  {
    "id": "pets-bush-elephant",
    "name": "Bush Elephant",
    "category": "pets",
    "value": 6.3135,
    "demand": 3,
    "image": "/items/Bush%20Elephant.webp"
  },
  {
    "id": "toys-halloween-slime-paint",
    "name": "Halloween Slime Mega Neon Paint",
    "category": "toys",
    "value": 0.2319,
    "demand": 3,
    "image": "/items/Halloween%20Slime%20Mega%20Neon%20Paint.webp"
  },
  {
    "id": "petwear-santas-bow",
    "name": "Santa's Bow",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Santas%20Bow.webp"
  },
  {
    "id": "vehicles-spinning-teacup-vehicle",
    "name": "Spinning Teacup Vehicle",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-golden-hummingbird",
    "name": "Golden Hummingbird",
    "category": "pets",
    "value": 0.4123,
    "demand": 1,
    "image": "/items/Golden%20Hummingbird.webp"
  },
  {
    "id": "vehicles-adopt-me-snowboard-2",
    "name": "Adopt Me Snowboard 2",
    "category": "vehicles",
    "value": 0.7097,
    "demand": 1,
    "image": "/items/Adopt%20Me%20Snowboard%202.webp"
  },
  {
    "id": "food-golden-leaf",
    "name": "Golden Leaf",
    "category": "food",
    "value": 6.7,
    "demand": 2,
    "image": "/items/Golden%20Leaf.webp"
  },
  {
    "id": "pets-candyfloss-chick",
    "name": "Candyfloss Chick",
    "category": "pets",
    "value": 5.7981,
    "demand": 3,
    "image": "/items/Candyfloss%20Chick.webp"
  },
  {
    "id": "petwear-dumpling-friend-hat",
    "name": "Dumpling Friend Hat",
    "category": "petwear",
    "value": 0.3092,
    "demand": 2,
    "image": "/items/Dumpling%20Friend%20Hat.webp"
  },
  {
    "id": "petwear-shark-swimcap",
    "name": "Shark Swimcap",
    "category": "petwear",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Shark%20Swimcap.webp"
  },
  {
    "id": "pets-kappakid",
    "name": "Kappakid",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Kappakid.webp"
  },
  {
    "id": "toys-pumpkin",
    "name": "Pumpkin",
    "category": "toys",
    "value": 3.8654,
    "demand": 2,
    "image": "/items/Pumpkin.webp"
  },
  {
    "id": "petwear-lunar-new-year-collar",
    "name": "Lunar New Year Collar",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Lunar%20New%20Year%20Collar.webp"
  },
  {
    "id": "food-winter-deer-bait",
    "name": "Winter Deer Bait",
    "category": "food",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Winter%20Deer%20Bait.webp"
  },
  {
    "id": "pets-mahi-mahi",
    "name": "Mahi Mahi",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Mahi%20Mahi.webp"
  },
  {
    "id": "pets-castle-hermit-crab",
    "name": "Castle Hermit Crab",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Castle%20Hermit%20Crab.webp"
  },
  {
    "id": "vehicles-gold-scooter",
    "name": "Gold Scooter",
    "category": "vehicles",
    "value": 0.11,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-bumper-car",
    "name": "Bumper Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-chocolate-chip-bat-dragon",
    "name": "Chocolate Chip Bat Dragon",
    "category": "pets",
    "value": 9.1481,
    "demand": 3,
    "image": "/items/Chocolate%20Chip%20Bat%20Dragon.webp"
  },
  {
    "id": "pets-ocelot",
    "name": "Ocelot",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Ocelot.webp"
  },
  {
    "id": "pets-peahen",
    "name": "Peahen",
    "category": "pets",
    "value": 0.5669,
    "demand": 2,
    "image": "/items/Peahen.webp"
  },
  {
    "id": "pets-priceless-shrimp",
    "name": "Priceless Shrimp",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Priceless%20Shrimp.webp"
  },
  {
    "id": "pets-albino-bat",
    "name": "Albino Bat",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Albino%20Bat.webp"
  },
  {
    "id": "pets-choco-penguin",
    "name": "Choco Penguin",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Choco%20Penguin.webp"
  },
  {
    "id": "pets-chocolate-dutch-guinea-pig",
    "name": "Chocolate Dutch Guinea Pig",
    "category": "pets",
    "value": 0.6958,
    "demand": 2,
    "image": "/items/Chocolate%20Dutch%20Guinea%20Pig.webp"
  },
  {
    "id": "pets-gila-monster",
    "name": "Gila Monster",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Gila%20Monster.webp"
  },
  {
    "id": "petwear-grinder-hat",
    "name": "Grinder Hat",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Grinder%20Hat.webp"
  },
  {
    "id": "pets-robo-dog",
    "name": "Robo Dog",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Robo%20Dog.webp"
  },
  {
    "id": "pets-metal-ox",
    "name": "Metal Ox",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Metal%20Ox.webp"
  },
  {
    "id": "vehicles-galleon",
    "name": "Galleon",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-kelp-crewmate",
    "name": "Kelp Crewmate",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Kelp%20Crewmate.webp"
  },
  {
    "id": "petwear-music-box-hat",
    "name": "Music Box Hat",
    "category": "petwear",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Music%20Box%20Hat.webp"
  },
  {
    "id": "pets-blue-jay",
    "name": "Blue Jay",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Blue%20Jay.webp"
  },
  {
    "id": "pets-white-amazon",
    "name": "White Amazon",
    "category": "pets",
    "value": 0.4123,
    "demand": 2,
    "image": "/items/White%20Amazon.webp"
  },
  {
    "id": "food-christmas-pudding-pup-bait",
    "name": "Christmas Pudding Pup Bait",
    "category": "food",
    "value": 1.5462,
    "demand": 2,
    "image": "/items/Christmas%20Pudding%20Pup%20Bait.webp"
  },
  {
    "id": "pets-firefly",
    "name": "Firefly",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Firefly.webp"
  },
  {
    "id": "stickers-state-fair-sticker-pack",
    "name": "State Fair Sticker Pack",
    "category": "stickers",
    "value": 0.0258,
    "demand": 1,
    "image": "/items/State%20Fair%20Sticker%20Pack.webp"
  },
  {
    "id": "vehicles-orange-skateboard",
    "name": "Neon Orange Skateboard",
    "category": "vehicles",
    "value": 0.805,
    "demand": 1,
    "image": "/items/Neon%20Orange%20Skateboard.webp"
  },
  {
    "id": "pets-shiver-wolf",
    "name": "Shiver Wolf",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Shiver%20Wolf.webp"
  },
  {
    "id": "pets-buffalo",
    "name": "Buffalo",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Buffalo.webp"
  },
  {
    "id": "pets-ringtailed-lemur",
    "name": "Ring-Tailed Lemur",
    "category": "pets",
    "value": 1.5977,
    "demand": 2,
    "image": "/items/Ring-Tailed%20Lemur.webp"
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
    "id": "food-strawberry-shortcake",
    "name": "Strawberry Shortcake",
    "category": "food",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Strawberry%20Shortcake.webp"
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
    "id": "pets-fallow-deer",
    "name": "Fallow Deer",
    "category": "pets",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Fallow%20Deer.webp"
  },
  {
    "id": "pets-2022-uplift-butterfly",
    "name": "2022 Uplift Butterfly",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/2022%20Uplift%20Butterfly.webp"
  },
  {
    "id": "food-burnt-bites-bait",
    "name": "Burnt Bites Bait",
    "category": "food",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Burnt%20Bites%20Bait.webp"
  },
  {
    "id": "pets-skelerex",
    "name": "Skele-Rex",
    "category": "pets",
    "value": 0.9535,
    "demand": 2,
    "image": "/items/Skele-Rex.webp"
  },
  {
    "id": "vehicles-ice-snowboard",
    "name": "Ice Snowboard",
    "category": "vehicles",
    "value": 2.4774,
    "demand": 1,
    "image": "/items/Ice%20Snowboard.webp"
  },
  {
    "id": "pets-mermicorn",
    "name": "Mermicorn",
    "category": "pets",
    "value": 7.9885,
    "demand": 2,
    "image": "/items/Mermicorn.webp"
  },
  {
    "id": "pets-dolphin",
    "name": "Dolphin",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Dolphin.webp"
  },
  {
    "id": "vehicles-circus-ball-skates",
    "name": "Circus Ball Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-hot-rod-sleigh",
    "name": "Hot Rod Sleigh",
    "category": "vehicles",
    "value": 0.0676,
    "demand": 1,
    "image": "/items/Hot%20Rod%20Sleigh.webp"
  },
  {
    "id": "pets-zombie-chick",
    "name": "Zombie Chick",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Zombie%20Chick.webp"
  },
  {
    "id": "pets-deathstalker-scorpion",
    "name": "Deathstalker Scorpion",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Deathstalker%20Scorpion.webp"
  },
  {
    "id": "pets-trapdoor-snail",
    "name": "Trapdoor Snail",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Trapdoor%20Snail.webp"
  },
  {
    "id": "petwear-aztec-crown",
    "name": "Aztec Crown",
    "category": "petwear",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Aztec%20Crown.webp"
  },
  {
    "id": "pets-angus-cow",
    "name": "Angus Cow",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Angus%20Cow.webp"
  },
  {
    "id": "vehicles-fidget-skateboard",
    "name": "Fidget Skateboard",
    "category": "vehicles",
    "value": 0.2366,
    "demand": 1,
    "image": "/items/Fidget%20Skateboard.webp"
  },
  {
    "id": "stickers-shadow-dragon-animated-sticker",
    "name": "Shadow Dragon Animated Sticker",
    "category": "stickers",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/Shadow%20Dragon%20Animated%20Sticker.webp"
  },
  {
    "id": "pets-warthog",
    "name": "Warthog",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Warthog.webp"
  },
  {
    "id": "pets-roadrunner",
    "name": "Roadrunner",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Roadrunner.webp"
  },
  {
    "id": "pets-cow",
    "name": "Cow",
    "category": "pets",
    "value": 10.3077,
    "demand": 3,
    "image": "/items/Cow.webp"
  },
  {
    "id": "food-chocolate",
    "name": "Chocolate",
    "category": "food",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Chocolate.webp"
  },
  {
    "id": "vehicles-street-racer",
    "name": "Street Racer",
    "category": "vehicles",
    "value": 0.41,
    "demand": 3,
    "image": ""
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
    "id": "pets-bird-of-paradise",
    "name": "Bird of Paradise",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Bird%20of%20Paradise.webp"
  },
  {
    "id": "petwear-head-chef",
    "name": "Head Chef",
    "category": "petwear",
    "value": 2.0615,
    "demand": 2,
    "image": "/items/Head%20Chef.webp"
  },
  {
    "id": "pets-apple-owl",
    "name": "Apple Owl",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Apple%20Owl.webp"
  },
  {
    "id": "toys-easter-bunny-plush",
    "name": "Easter Bunny Plush",
    "category": "toys",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Easter%20Bunny%20Plush.webp"
  },
  {
    "id": "vehicles-black-snowboard",
    "name": "Black Snowboard",
    "category": "vehicles",
    "value": 0.1634,
    "demand": 1,
    "image": "/items/Black%20Snowboard.webp"
  },
  {
    "id": "pets-frog",
    "name": "Frog",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Frog.webp"
  },
  {
    "id": "pets-samoyed",
    "name": "Samoyed",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Samoyed.webp"
  },
  {
    "id": "gifts-golden-gift",
    "name": "Golden Gift",
    "category": "gifts",
    "value": 8.736,
    "demand": 2,
    "image": "/items/Golden%20Gift.webp"
  },
  {
    "id": "food-ash-zebra-bait",
    "name": "Ash Zebra Bait",
    "category": "food",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Ash%20Zebra%20Bait.webp"
  },
  {
    "id": "pets-fire-mare",
    "name": "Fire Mare",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Fire%20Mare.webp"
  },
  {
    "id": "pets-irish-water-spaniel",
    "name": "Irish Water Spaniel",
    "category": "pets",
    "value": 2.7058,
    "demand": 2,
    "image": "/items/Irish%20Water%20Spaniel.webp"
  },
  {
    "id": "pets-rainbow-trout",
    "name": "Rainbow Trout",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Rainbow%20Trout.webp"
  },
  {
    "id": "pets-pineapple-owl",
    "name": "Pineapple Owl",
    "category": "pets",
    "value": 1.1081,
    "demand": 2,
    "image": "/items/Pineapple%20Owl.webp"
  },
  {
    "id": "pets-irish-elk",
    "name": "Irish Elk",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Irish%20Elk.webp"
  },
  {
    "id": "petwear-flower-beret",
    "name": "Flower Beret",
    "category": "petwear",
    "value": 0.2577,
    "demand": 2,
    "image": "/items/Flower%20Beret.webp"
  },
  {
    "id": "pets-seafoam-butterfly",
    "name": "Seafoam Butterfly",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Seafoam%20Butterfly.webp"
  },
  {
    "id": "vehicles-winged-skates",
    "name": "Winged Skates",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-glormy-leo",
    "name": "Glormy Leo",
    "category": "pets",
    "value": 1.4173,
    "demand": 2,
    "image": "/items/Glormy%20Leo.webp"
  },
  {
    "id": "petwear-volcano-hat",
    "name": "Volcano Hat",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Volcano%20Hat.webp"
  },
  {
    "id": "petwear-money-hat",
    "name": "Money Hat",
    "category": "petwear",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Money%20Hat.webp"
  },
  {
    "id": "pets-hamster",
    "name": "Hamster",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Hamster.webp"
  },
  {
    "id": "petwear-golden-walrus-crown",
    "name": "Golden Walrus Crown",
    "category": "petwear",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Golden%20Walrus%20Crown.webp"
  },
  {
    "id": "pets-orange-butterfly",
    "name": "Orange Butterfly",
    "category": "pets",
    "value": 0.4123,
    "demand": 2,
    "image": "/items/Orange%20Butterfly.webp"
  },
  {
    "id": "stickers-winged-horse-sticker",
    "name": "Winged Horse Sticker",
    "category": "stickers",
    "value": 0.1288,
    "demand": 2,
    "image": "/items/Winged%20Horse%20Sticker.webp"
  },
  {
    "id": "petwear-fishbone-badge",
    "name": "Fishbone Badge",
    "category": "petwear",
    "value": 0.1546,
    "demand": 2,
    "image": "/items/Fishbone%20Badge.webp"
  },
  {
    "id": "eggs-christmas-future-egg",
    "name": "Christmas Future Egg",
    "category": "eggs",
    "value": 0.2252,
    "demand": 2,
    "image": "/items/Christmas%20Future%20Egg.webp"
  },
  {
    "id": "vehicles-rgb-ufo",
    "name": "RGB UFO",
    "category": "vehicles",
    "value": 0.0845,
    "demand": 1,
    "image": "/items/RGB%20UFO.webp"
  },
  {
    "id": "vehicles-green-snowboard",
    "name": "Green Neon Snowboard",
    "category": "vehicles",
    "value": 5.7784,
    "demand": 2,
    "image": "/items/Green%20Neon%20Snowboard.webp"
  },
  {
    "id": "pets-love-bird",
    "name": "Love Bird",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Love%20Bird.webp"
  },
  {
    "id": "gifts-scarecrow-box",
    "name": "Scarecrow Box",
    "category": "gifts",
    "value": 0.3096,
    "demand": 2,
    "image": "/items/Scarecrow%20Box.webp"
  },
  {
    "id": "vehicles-zamboni",
    "name": "Zamboni",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-midnight-wings",
    "name": "Midnight Wings",
    "category": "petwear",
    "value": 0.2062,
    "demand": 2,
    "image": "/items/Midnight%20Wings.webp"
  },
  {
    "id": "food-levitation-potion",
    "name": "Levitation Potion",
    "category": "food",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Levitation%20Potion.webp"
  },
  {
    "id": "pets-flower-power-duckling",
    "name": "Flower Power Duckling",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Flower%20Power%20Duckling.webp"
  },
  {
    "id": "pets-angelfish",
    "name": "Angelfish",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Angelfish.webp"
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
    "id": "pets-blue-butterfly",
    "name": "Blue Butterfly",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Blue%20Butterfly.webp"
  },
  {
    "id": "pets-dugong",
    "name": "Dugong",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Dugong.webp"
  },
  {
    "id": "vehicles-gold-skateboard",
    "name": "Gold Skateboard",
    "category": "vehicles",
    "value": 0.3491,
    "demand": 1,
    "image": "/items/Gold%20Skateboard.webp"
  },
  {
    "id": "strollers-egg-stroller",
    "name": "Egg Stroller",
    "category": "strollers",
    "value": 16.0,
    "demand": 3,
    "image": ""
  },
  {
    "id": "vehicles-human-bubble",
    "name": "Human Bubble",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "eggs-basic-egg",
    "name": "Basic Egg",
    "category": "eggs",
    "value": 0.0248,
    "demand": 1,
    "image": "/items/Basic%20Egg.webp"
  },
  {
    "id": "pets-many-mackerel",
    "name": "Many Mackerel",
    "category": "pets",
    "value": 2.1904,
    "demand": 2,
    "image": "/items/Many%20Mackerel.webp"
  },
  {
    "id": "pets-australian-kelpie",
    "name": "Australian Kelpie",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Australian%20Kelpie.webp"
  },
  {
    "id": "vehicles-headless-horsemans-biplane",
    "name": "Headless Horseman's Biplane",
    "category": "vehicles",
    "value": 0.1577,
    "demand": 1,
    "image": "/items/Headless%20Horsemans%20Biplane.webp"
  },
  {
    "id": "pets-red-fox",
    "name": "Red Fox",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Red%20Fox.webp"
  },
  {
    "id": "pets-lammergeier",
    "name": "Lammergeier",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Lammergeier.webp"
  },
  {
    "id": "pets-influencer-gibbon",
    "name": "Influencer Gibbon",
    "category": "pets",
    "value": 0.4638,
    "demand": 1,
    "image": "/items/Influencer%20Gibbon.webp"
  },
  {
    "id": "pets-seahorse",
    "name": "Seahorse",
    "category": "pets",
    "value": 0.2577,
    "demand": 1,
    "image": "/items/Seahorse.webp"
  },
  {
    "id": "gifts-hare-box",
    "name": "Hare Box",
    "category": "gifts",
    "value": 0.3997,
    "demand": 2,
    "image": "/items/Hare%20Box.webp"
  },
  {
    "id": "potions-cure-all-potion",
    "name": "Cure All Potion",
    "category": "potions",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-harp-seal",
    "name": "Harp Seal",
    "category": "pets",
    "value": 0.5669,
    "demand": 2,
    "image": "/items/Harp%20Seal.webp"
  },
  {
    "id": "toys-hotdog-stand",
    "name": "Hotdog Stand",
    "category": "toys",
    "value": 0.1288,
    "demand": 2,
    "image": "/items/Hotdog%20Stand.webp"
  },
  {
    "id": "pets-ghost-chick",
    "name": "Ghost Chick",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Ghost%20Chick.webp"
  },
  {
    "id": "pets-gumball-caterpillar",
    "name": "Gumball Caterpillar",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Gumball%20Caterpillar.webp"
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
    "id": "gifts-easter-eggy-box",
    "name": "Easter Eggy Box",
    "category": "gifts",
    "value": 0.1971,
    "demand": 1,
    "image": "/items/Easter%20Eggy%20Box.webp"
  },
  {
    "id": "stickers-balloon-unicorn-sticker",
    "name": "Balloon Unicorn Sticker",
    "category": "stickers",
    "value": 0.1804,
    "demand": 2,
    "image": "/items/Balloon%20Unicorn%20Sticker.webp"
  },
  {
    "id": "food-shiver-cone-bait",
    "name": "Shiver Cone Bait",
    "category": "food",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Shiver%20Cone%20Bait.webp"
  },
  {
    "id": "pets-snow-owl",
    "name": "Snow Owl",
    "category": "pets",
    "value": 0.3865,
    "demand": 2,
    "image": "/items/Snow%20Owl.webp"
  },
  {
    "id": "petwear-jeffs-nametag",
    "name": "Jeff's Nametag",
    "category": "petwear",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Jeffs%20Nametag.webp"
  },
  {
    "id": "pets-mecha-meow",
    "name": "Mecha Meow",
    "category": "pets",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Mecha%20Meow.webp"
  },
  {
    "id": "pets-peach-owl",
    "name": "Peach Owl",
    "category": "pets",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Peach%20Owl.webp"
  },
  {
    "id": "pets-chocolate-chowchow",
    "name": "Chocolate Chow-Chow",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Chocolate%20Chow-Chow.webp"
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
    "id": "food-candy-cane",
    "name": "Candy Cane",
    "category": "food",
    "value": 6.1846,
    "demand": 2,
    "image": "/items/Candy%20Cane.webp"
  },
  {
    "id": "toys-cat-plush",
    "name": "Cat Plush",
    "category": "toys",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Cat%20Plush.webp"
  },
  {
    "id": "pets-winter-buck",
    "name": "Winter Buck",
    "category": "pets",
    "value": 0.3608,
    "demand": 1,
    "image": "/items/Winter%20Buck.webp"
  },
  {
    "id": "petwear-elf-hat",
    "name": "Elf Hat",
    "category": "petwear",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Elf%20Hat.webp"
  },
  {
    "id": "strollers-soy-sauce-stroller",
    "name": "Soy Sauce Stroller",
    "category": "strollers",
    "value": 0.12,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-blue-whale",
    "name": "Blue Whale",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Blue%20Whale.webp"
  },
  {
    "id": "pets-clubtail-dragonfly",
    "name": "Clubtail Dragonfly",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Clubtail%20Dragonfly.webp"
  },
  {
    "id": "pets-crow",
    "name": "Crow",
    "category": "pets",
    "value": 48.7038,
    "demand": 3,
    "image": "/items/Crow.webp"
  },
  {
    "id": "pets-abyssinian-cat",
    "name": "Abyssinian Cat",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Abyssinian%20Cat.webp"
  },
  {
    "id": "pets-scarecrow-horse",
    "name": "Scarecrow Horse",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Scarecrow%20Horse.webp"
  },
  {
    "id": "vehicles-hot-tub-muscle-car",
    "name": "Hot Tub Muscle Car",
    "category": "vehicles",
    "value": 0.58,
    "demand": 2,
    "image": "/items/Hot%20Tub%20Muscle%20Car.webp"
  },
  {
    "id": "petwear-festive-light-crown",
    "name": "Festive Light Crown",
    "category": "petwear",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Festive%20Light%20Crown.webp"
  },
  {
    "id": "petwear-2022-birthday-cake",
    "name": "2022 Birthday Cake",
    "category": "petwear",
    "value": 7.2154,
    "demand": 3,
    "image": "/items/2022%20Birthday%20Cake.webp"
  },
  {
    "id": "pets-fanghorn-tortoise",
    "name": "Fanghorn Tortoise",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Fanghorn%20Tortoise.webp"
  },
  {
    "id": "pets-kraken",
    "name": "Kraken",
    "category": "pets",
    "value": 0.335,
    "demand": 1,
    "image": "/items/Kraken.webp"
  },
  {
    "id": "toys-tea-party-chair",
    "name": "Tea Party Chair",
    "category": "toys",
    "value": 0.7731,
    "demand": 2,
    "image": "/items/Tea%20Party%20Chair.webp"
  },
  {
    "id": "vehicles-dragon-train",
    "name": "Dragon Train",
    "category": "vehicles",
    "value": 1.4918,
    "demand": 1,
    "image": "/items/Dragon%20Train.webp"
  },
  {
    "id": "stickers-walrus-sticker",
    "name": "Walrus Sticker",
    "category": "stickers",
    "value": 0.0412,
    "demand": 1,
    "image": "/items/Walrus%20Sticker.webp"
  },
  {
    "id": "vehicles-pink-snowboard",
    "name": "Pink Neon Snowboard",
    "category": "vehicles",
    "value": 3.0678,
    "demand": 2,
    "image": "/items/Pink%20Neon%20Snowboard.webp"
  },
  {
    "id": "petwear-sakura-wings",
    "name": "Sakura Wings",
    "category": "petwear",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Sakura%20Wings.webp"
  },
  {
    "id": "pets-grave-owl",
    "name": "Grave Owl",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Grave%20Owl.webp"
  },
  {
    "id": "toys-heart-balloon",
    "name": "Heart Balloon",
    "category": "toys",
    "value": 0.1288,
    "demand": 1,
    "image": "/items/Heart%20Balloon.webp"
  },
  {
    "id": "pets-dracula-fish",
    "name": "Dracula Fish",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Dracula%20Fish.webp"
  },
  {
    "id": "pets-yellowlipped-sea-krait",
    "name": "Yellow-Lipped Sea Krait",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Yellow-Lipped%20Sea%20Krait.webp"
  },
  {
    "id": "pets-strawberry-penguin",
    "name": "Strawberry Penguin",
    "category": "pets",
    "value": 2.1904,
    "demand": 2,
    "image": "/items/Strawberry%20Penguin.webp"
  },
  {
    "id": "pets-diamond-hummingbird",
    "name": "Diamond Hummingbird",
    "category": "pets",
    "value": 1.2885,
    "demand": 2,
    "image": "/items/Diamond%20Hummingbird.webp"
  },
  {
    "id": "pets-tawny-frogmouth",
    "name": "Tawny Frogmouth",
    "category": "pets",
    "value": 0.1933,
    "demand": 1,
    "image": "/items/Tawny%20Frogmouth.webp"
  },
  {
    "id": "pets-unicorn",
    "name": "Unicorn",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Unicorn.webp"
  },
  {
    "id": "petwear-sushi-skateboard",
    "name": "Sushi Skateboard",
    "category": "petwear",
    "value": 0.67,
    "demand": 2,
    "image": "/items/Sushi%20Skateboard.webp"
  },
  {
    "id": "food-stripes-egg",
    "name": "Stripes Egg",
    "category": "food",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Stripes%20Egg.webp"
  },
  {
    "id": "pets-highland-cow",
    "name": "Highland Cow",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Highland%20Cow.webp"
  },
  {
    "id": "pets-golden-jaguar",
    "name": "Golden Jaguar",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Golden%20Jaguar.webp"
  },
  {
    "id": "pets-sweetheart-rat",
    "name": "Sweetheart Rat",
    "category": "pets",
    "value": 0.3092,
    "demand": 1,
    "image": "/items/Sweetheart%20Rat.webp"
  },
  {
    "id": "stickers-spinning-cat-animated-sticker",
    "name": "Spinning Cat Animated Sticker",
    "category": "stickers",
    "value": 6.1846,
    "demand": 2,
    "image": "/items/Spinning%20Cat%20Animated%20Sticker.webp"
  },
  {
    "id": "petwear-knitted-pumpkin-hat",
    "name": "Knitted Pumpkin Hat",
    "category": "petwear",
    "value": 0.0515,
    "demand": 1,
    "image": "/items/Knitted%20Pumpkin%20Hat.webp"
  },
  {
    "id": "petwear-icey-aura",
    "name": "Icey Aura",
    "category": "petwear",
    "value": 0.5154,
    "demand": 2,
    "image": "/items/Icey%20Aura.webp"
  },
  {
    "id": "pets-red-cardinal",
    "name": "Red Cardinal",
    "category": "pets",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Red%20Cardinal.webp"
  },
  {
    "id": "vehicles-soccer-car",
    "name": "Soccer Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-turtle",
    "name": "Turtle",
    "category": "pets",
    "value": 7.2154,
    "demand": 3,
    "image": "/items/Turtle.webp"
  },
  {
    "id": "pets-hydra",
    "name": "Hydra",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Hydra.webp"
  },
  {
    "id": "food-golden-clam",
    "name": "Golden Clam",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Golden%20Clam.webp"
  },
  {
    "id": "strollers-strawberry-stroller",
    "name": "Strawberry Stroller",
    "category": "strollers",
    "value": 0.1521,
    "demand": 1,
    "image": "/items/Strawberry%20Stroller.webp"
  },
  {
    "id": "pets-lobster",
    "name": "Lobster",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Lobster.webp"
  },
  {
    "id": "vehicles-motorized-sofa",
    "name": "Motorized Sofa",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "food-taco",
    "name": "Taco",
    "category": "food",
    "value": 0.0773,
    "demand": 1,
    "image": "/items/Taco.webp"
  },
  {
    "id": "toys-anna-rattle",
    "name": "Anna Rattle",
    "category": "toys",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Anna%20Rattle.webp"
  },
  {
    "id": "pets-octopus",
    "name": "Octopus",
    "category": "pets",
    "value": 0.4638,
    "demand": 2,
    "image": "/items/Octopus.webp"
  },
  {
    "id": "vehicles-ice-cream-truck",
    "name": "Ice Cream Truck",
    "category": "vehicles",
    "value": 0.2647,
    "demand": 2,
    "image": "/items/Ice%20Cream%20Truck.webp"
  },
  {
    "id": "pets-naughty-mistletroll",
    "name": "Naughty Mistletroll",
    "category": "pets",
    "value": 0.6442,
    "demand": 2,
    "image": "/items/Naughty%20Mistletroll.webp"
  },
  {
    "id": "pets-royal-capuchin-monkey",
    "name": "Royal Capuchin Monkey",
    "category": "pets",
    "value": 0.4123,
    "demand": 1,
    "image": "/items/Royal%20Capuchin%20Monkey.webp"
  },
  {
    "id": "petwear-propeller-hat",
    "name": "Propeller Hat",
    "category": "petwear",
    "value": 0.9019,
    "demand": 2,
    "image": "/items/Propeller%20Hat.webp"
  },
  {
    "id": "pets-blackfooted-ferret",
    "name": "Black-Footed Ferret",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Black-Footed%20Ferret.webp"
  },
  {
    "id": "vehicles-beachgoer",
    "name": "Beachgoer",
    "category": "vehicles",
    "value": 0.07,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-birthday-butterfly-2023",
    "name": "Birthday Butterfly 2023",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Birthday%20Butterfly%202023.webp"
  },
  {
    "id": "vehicles-offroad-car",
    "name": "Off-Road Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-fairy-bat-dragon",
    "name": "Fairy Bat Dragon",
    "category": "pets",
    "value": 4.7673,
    "demand": 3,
    "image": "/items/Fairy%20Bat%20Dragon.webp"
  },
  {
    "id": "vehicles-shadow-dragon-skateboard",
    "name": "Shadow Dragon Skateboard",
    "category": "vehicles",
    "value": 0.1014,
    "demand": 1,
    "image": "/items/Shadow%20Dragon%20Skateboard.webp"
  },
  {
    "id": "eggs-royal-moon-egg",
    "name": "Royal Moon Egg",
    "category": "eggs",
    "value": 0.6305,
    "demand": 2,
    "image": "/items/Royal%20Moon%20Egg.webp"
  },
  {
    "id": "pets-starmite",
    "name": "Starmite",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Starmite.webp"
  },
  {
    "id": "pets-capuchin-monkey",
    "name": "Capuchin Monkey",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Capuchin%20Monkey.webp"
  },
  {
    "id": "pets-parakeet",
    "name": "Parakeet",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Parakeet.webp"
  },
  {
    "id": "pets-violet-butterfly",
    "name": "Violet Butterfly",
    "category": "pets",
    "value": 0.7988,
    "demand": 2,
    "image": "/items/Violet%20Butterfly.webp"
  },
  {
    "id": "pets-singularity-pisces",
    "name": "Singularity Pisces",
    "category": "pets",
    "value": 0.2835,
    "demand": 1,
    "image": "/items/Singularity%20Pisces.webp"
  },
  {
    "id": "pets-bee",
    "name": "Bee",
    "category": "pets",
    "value": 0.2319,
    "demand": 1,
    "image": "/items/Bee.webp"
  },
  {
    "id": "pets-unicorn-ducky",
    "name": "Unicorn Ducky",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Unicorn%20Ducky.webp"
  },
  {
    "id": "food-golden-plantain",
    "name": "Golden Plantain",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Golden%20Plantain.webp"
  },
  {
    "id": "stickers-shiba-inu-sticker",
    "name": "Shiba Inu Sticker",
    "category": "stickers",
    "value": 0.0412,
    "demand": 1,
    "image": "/items/Shiba%20Inu%20Sticker.webp"
  },
  {
    "id": "gifts-rgb-reward-box",
    "name": "RGB Reward Box",
    "category": "gifts",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "petwear-eaten-donut",
    "name": "Eaten Donut",
    "category": "petwear",
    "value": 0.1031,
    "demand": 1,
    "image": "/items/Eaten%20Donut.webp"
  },
  {
    "id": "gifts-golden-mistletoe",
    "name": "Golden Mistletoe",
    "category": "gifts",
    "value": 1.0308,
    "demand": 2,
    "image": "/items/Golden%20Mistletoe.webp"
  },
  {
    "id": "pets-ice-cream-hermit-crab",
    "name": "Ice Cream Hermit Crab",
    "category": "pets",
    "value": 0.8504,
    "demand": 2,
    "image": "/items/Ice%20Cream%20Hermit%20Crab.webp"
  },
  {
    "id": "pets-red-panda",
    "name": "Red Panda",
    "category": "pets",
    "value": 0.1675,
    "demand": 1,
    "image": "/items/Red%20Panda.webp"
  },
  {
    "id": "vehicles-unstable-triangle-car",
    "name": "Unstable Triangle Car",
    "category": "vehicles",
    "value": 0.07,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-peppermint-penguin",
    "name": "Peppermint Penguin",
    "category": "pets",
    "value": 7.7308,
    "demand": 3,
    "image": "/items/Peppermint%20Penguin.webp"
  },
  {
    "id": "pets-partridge",
    "name": "Partridge",
    "category": "pets",
    "value": 0.3221,
    "demand": 1,
    "image": "/items/Partridge.webp"
  },
  {
    "id": "pets-chipmunk",
    "name": "Chipmunk",
    "category": "pets",
    "value": 0.3479,
    "demand": 1,
    "image": "/items/Chipmunk.webp"
  },
  {
    "id": "pets-moose-calf",
    "name": "Moose Calf",
    "category": "pets",
    "value": 1.1081,
    "demand": 2,
    "image": "/items/Moose%20Calf.webp"
  },
  {
    "id": "vehicles-shooting-star-board",
    "name": "Shooting Star Board",
    "category": "vehicles",
    "value": 2.3078,
    "demand": 2,
    "image": "/items/Shooting%20Star%20Board.webp"
  },
  {
    "id": "eggs-pistachio",
    "name": "Pistachio",
    "category": "eggs",
    "value": 0.2062,
    "demand": 1,
    "image": "/items/Pistachio.webp"
  },
  {
    "id": "vehicles-pirate-row-boat",
    "name": "Pirate Row Boat",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-golden-king-penguin",
    "name": "Golden King Penguin",
    "category": "pets",
    "value": 0.3865,
    "demand": 1,
    "image": "/items/Golden%20King%20Penguin.webp"
  },
  {
    "id": "food-golden-goldfish",
    "name": "Golden Goldfish",
    "category": "food",
    "value": 0.335,
    "demand": 2,
    "image": "/items/Golden%20Goldfish.webp"
  },
  {
    "id": "vehicles-flower-wagon",
    "name": "Flower Wagon",
    "category": "vehicles",
    "value": 0.1633,
    "demand": 1,
    "image": "/items/Flower%20Wagon.webp"
  },
  {
    "id": "petwear-eco-brown-hiking-backpack",
    "name": "Eco Brown Hiking Backpack",
    "category": "petwear",
    "value": 0.6185,
    "demand": 2,
    "image": "/items/Eco%20Brown%20Hiking%20Backpack.webp"
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
    "id": "strollers-pizza-stroller",
    "name": "Pizza Stroller",
    "category": "strollers",
    "value": 0.2535,
    "demand": 1,
    "image": "/items/Pizza%20Stroller.webp"
  },
  {
    "id": "pets-jellyfish",
    "name": "Jellyfish",
    "category": "pets",
    "value": 2.8346,
    "demand": 2,
    "image": "/items/Jellyfish.webp"
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
    "id": "pets-patchy-bear",
    "name": "Patchy Bear",
    "category": "pets",
    "value": 0.1546,
    "demand": 1,
    "image": "/items/Patchy%20Bear.webp"
  },
  {
    "id": "vehicles-smores-stroller",
    "name": "S'mores Stroller",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  },
  {
    "id": "pets-amber-butterfly",
    "name": "Amber Butterfly",
    "category": "pets",
    "value": 0.1804,
    "demand": 1,
    "image": "/items/Amber%20Butterfly.webp"
  },
  {
    "id": "vehicles-clown-car",
    "name": "Clown Car",
    "category": "vehicles",
    "value": 0.04,
    "demand": 3,
    "image": ""
  }
];
