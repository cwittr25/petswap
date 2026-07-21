/*
  ============================================================
  petswap.me — DATA FILE
  ============================================================
  This file is now built from a real StarPets.gg data pull
  (823 items across pets, eggs, potions, pet wear, vehicles,
  toys, strollers, and gifts), taken on 2026-07-21.

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
    "id": "pets-swordfish",
    "name": "Swordfish",
    "category": "pets",
    "value": 99.6043,
    "demand": 1,
    "image": "/items/Swordfish.webp"
  },
  {
    "id": "pets-green-amazon",
    "name": "Green Amazon",
    "category": "pets",
    "value": 448.8728,
    "demand": 1,
    "image": "/items/Green Amazon.webp"
  },
  {
    "id": "pets-glormy-crab",
    "name": "Glormy Crab",
    "category": "pets",
    "value": 375.8319,
    "demand": 1,
    "image": "/items/Glormy Crab.webp"
  },
  {
    "id": "pets-burger-bear",
    "name": "Burger Bear",
    "category": "pets",
    "value": 702.5241,
    "demand": 2,
    "image": "/items/Burger Bear.webp"
  },
  {
    "id": "pets-seahorse",
    "name": "Seahorse",
    "category": "pets",
    "value": 355.9116,
    "demand": 1,
    "image": "/items/Seahorse.webp"
  },
  {
    "id": "pets-blue-dog",
    "name": "Blue Dog",
    "category": "pets",
    "value": 934.9272,
    "demand": 2,
    "image": "/items/Blue Dog.webp"
  },
  {
    "id": "pets-koi-carp",
    "name": "Koi Carp",
    "category": "pets",
    "value": 563.0823,
    "demand": 1,
    "image": "/items/Koi Carp.webp"
  },
  {
    "id": "pets-dirty-ducky",
    "name": "Dirty Ducky",
    "category": "pets",
    "value": 332.0073,
    "demand": 2,
    "image": "/items/Dirty Ducky.webp"
  },
  {
    "id": "pets-dragonfly",
    "name": "Dragonfly",
    "category": "pets",
    "value": 188.5815,
    "demand": 1,
    "image": "/items/Dragonfly.webp"
  },
  {
    "id": "pets-jekyll-hydra",
    "name": "Jekyll Hydra",
    "category": "pets",
    "value": 976.0957,
    "demand": 3,
    "image": "/items/Jekyll Hydra.webp"
  },
  {
    "id": "pets-bunny-swirl",
    "name": "Bunny Swirl",
    "category": "pets",
    "value": 618.859,
    "demand": 2,
    "image": "/items/Bunny Swirl.webp"
  },
  {
    "id": "pets-cactus-friend",
    "name": "Cactus Friend",
    "category": "pets",
    "value": 717.1323,
    "demand": 2,
    "image": "/items/Cactus Friend.webp"
  },
  {
    "id": "pets-albino-monkey",
    "name": "Albino Monkey",
    "category": "pets",
    "value": 941.5672,
    "demand": 3,
    "image": "/items/Albino Monkey.webp"
  },
  {
    "id": "pets-kid-goat",
    "name": "Kid Goat",
    "category": "pets",
    "value": 162.0211,
    "demand": 1,
    "image": "/items/Kid Goat.webp"
  },
  {
    "id": "pets-white-amazon",
    "name": "White Amazon",
    "category": "pets",
    "value": 667.9957,
    "demand": 2,
    "image": "/items/White Amazon.webp"
  },
  {
    "id": "pets-red-crowned-crane",
    "name": "Red Crowned Crane",
    "category": "pets",
    "value": 330.6793,
    "demand": 1,
    "image": "/items/Red Crowned Crane.webp"
  },
  {
    "id": "pets-rainbow-dragon",
    "name": "Rainbow Dragon",
    "category": "pets",
    "value": 788.8453,
    "demand": 2,
    "image": "/items/Rainbow Dragon.webp"
  },
  {
    "id": "pets-dracula-fish",
    "name": "Dracula Fish",
    "category": "pets",
    "value": 301.4629,
    "demand": 1,
    "image": "/items/Dracula Fish.webp"
  },
  {
    "id": "pets-chocolate-chowchow",
    "name": "Chocolate Chow-Chow",
    "category": "pets",
    "value": 645.4194,
    "demand": 1,
    "image": "/items/Chocolate Chow-Chow.webp"
  },
  {
    "id": "pets-emperor-gorilla",
    "name": "Emperor Gorilla",
    "category": "pets",
    "value": 928.2871,
    "demand": 2,
    "image": "/items/Emperor Gorilla.webp"
  },
  {
    "id": "pets-scarecrow-cat",
    "name": "Scarecrow Cat",
    "category": "pets",
    "value": 478.0892,
    "demand": 2,
    "image": "/items/Scarecrow Cat.webp"
  },
  {
    "id": "pets-black-springer-spaniel",
    "name": "Black Springer Spaniel",
    "category": "pets",
    "value": 715.8043,
    "demand": 2,
    "image": "/items/Black Springer Spaniel.webp"
  },
  {
    "id": "pets-kirin",
    "name": "Kirin",
    "category": "pets",
    "value": 272.2465,
    "demand": 1,
    "image": "/items/Kirin.webp"
  },
  {
    "id": "pets-unicorn",
    "name": "Unicorn",
    "category": "pets",
    "value": 693.228,
    "demand": 2,
    "image": "/items/Unicorn.webp"
  },
  {
    "id": "pets-wyvern",
    "name": "Wyvern",
    "category": "pets",
    "value": 426.2965,
    "demand": 1,
    "image": "/items/Wyvern.webp"
  },
  {
    "id": "pets-scarecrow",
    "name": "Scarecrow",
    "category": "pets",
    "value": 223.1099,
    "demand": 1,
    "image": "/items/Scarecrow.webp"
  },
  {
    "id": "pets-cold-cube",
    "name": "Cold Cube",
    "category": "pets",
    "value": 328.0233,
    "demand": 1,
    "image": "/items/Cold Cube.webp"
  },
  {
    "id": "pets-stygian-owl",
    "name": "Stygian Owl",
    "category": "pets",
    "value": 18.5952,
    "demand": 1,
    "image": "/items/Stygian Owl.webp"
  },
  {
    "id": "pets-pelican",
    "name": "Pelican",
    "category": "pets",
    "value": 969.4556,
    "demand": 2,
    "image": "/items/Pelican.webp"
  },
  {
    "id": "pets-ghost-dog",
    "name": "Ghost Dog",
    "category": "pets",
    "value": 713.1483,
    "demand": 2,
    "image": "/items/Ghost Dog.webp"
  },
  {
    "id": "pets-tealwood-monster",
    "name": "Tealwood Monster",
    "category": "pets",
    "value": 110.2284,
    "demand": 1,
    "image": "/items/Tealwood Monster.webp"
  },
  {
    "id": "pets-fennec-fox",
    "name": "Fennec Fox",
    "category": "pets",
    "value": 65.0758,
    "demand": 1,
    "image": "/items/Fennec Fox.webp"
  },
  {
    "id": "pets-ermine",
    "name": "Ermine",
    "category": "pets",
    "value": 357.2396,
    "demand": 1,
    "image": "/items/Ermine.webp"
  },
  {
    "id": "pets-praying-mantis",
    "name": "Praying Mantis",
    "category": "pets",
    "value": 475.4332,
    "demand": 1,
    "image": "/items/Praying Mantis.webp"
  },
  {
    "id": "pets-ocelot",
    "name": "Ocelot",
    "category": "pets",
    "value": 92.9642,
    "demand": 1,
    "image": "/items/Ocelot.webp"
  },
  {
    "id": "pets-fallow-deer",
    "name": "Fallow Deer",
    "category": "pets",
    "value": 879.1504,
    "demand": 2,
    "image": "/items/Fallow Deer.webp"
  },
  {
    "id": "pets-blue-whale",
    "name": "Blue Whale",
    "category": "pets",
    "value": 112.8845,
    "demand": 1,
    "image": "/items/Blue Whale.webp"
  },
  {
    "id": "pets-quokka",
    "name": "Quokka",
    "category": "pets",
    "value": 573.7065,
    "demand": 1,
    "image": "/items/Quokka.webp"
  },
  {
    "id": "pets-mistletroll",
    "name": "Mistletroll",
    "category": "pets",
    "value": 256.3103,
    "demand": 1,
    "image": "/items/Mistletroll.webp"
  },
  {
    "id": "pets-mouse",
    "name": "Mouse",
    "category": "pets",
    "value": 0.003,
    "demand": 1,
    "image": "/items/Mouse.webp"
  },
  {
    "id": "pets-hummingbird",
    "name": "Hummingbird",
    "category": "pets",
    "value": 467.4651,
    "demand": 1,
    "image": "/items/Hummingbird.webp"
  },
  {
    "id": "pets-unicorn-ducky",
    "name": "Unicorn Ducky",
    "category": "pets",
    "value": 37.1875,
    "demand": 1,
    "image": "/items/Unicorn Ducky.webp"
  },
  {
    "id": "pets-toxic-kaijunior",
    "name": "Toxic Kaijunior",
    "category": "pets",
    "value": 288.1827,
    "demand": 1,
    "image": "/items/Toxic Kaijunior.webp"
  },
  {
    "id": "pets-dracula-parrot",
    "name": "Dracula Parrot",
    "category": "pets",
    "value": 488.7134,
    "demand": 1,
    "image": "/items/Dracula Parrot.webp"
  },
  {
    "id": "pets-nebula-snake",
    "name": "Nebula Snake",
    "category": "pets",
    "value": 390.4401,
    "demand": 1,
    "image": "/items/Nebula Snake.webp"
  },
  {
    "id": "pets-merry-mistletroll",
    "name": "Merry Mistletroll",
    "category": "pets",
    "value": 529.8819,
    "demand": 1,
    "image": "/items/Merry Mistletroll.webp"
  },
  {
    "id": "pets-blackchested-pheasant",
    "name": "Black-Chested Pheasant",
    "category": "pets",
    "value": 929.6151,
    "demand": 2,
    "image": "/items/Black-Chested Pheasant.webp"
  },
  {
    "id": "pets-jousting-horse",
    "name": "Jousting Horse",
    "category": "pets",
    "value": 844.622,
    "demand": 2,
    "image": "/items/Jousting Horse.webp"
  },
  {
    "id": "pets-amber-butterfly",
    "name": "Amber Butterfly",
    "category": "pets",
    "value": 115.5405,
    "demand": 1,
    "image": "/items/Amber Butterfly.webp"
  },
  {
    "id": "pets-sweetheart-rat",
    "name": "Sweetheart Rat",
    "category": "pets",
    "value": 456.8409,
    "demand": 1,
    "image": "/items/Sweetheart Rat.webp"
  },
  {
    "id": "pets-slime",
    "name": "Slime",
    "category": "pets",
    "value": 832.6698,
    "demand": 2,
    "image": "/items/Slime.webp"
  },
  {
    "id": "pets-frankenfeline",
    "name": "Frankenfeline",
    "category": "pets",
    "value": 120.8526,
    "demand": 1,
    "image": "/items/Frankenfeline.webp"
  },
  {
    "id": "pets-mrs-whiskerpips",
    "name": "Mrs. Whiskerpips",
    "category": "pets",
    "value": 192.5655,
    "demand": 1,
    "image": "/items/Mrs. Whiskerpips.webp"
  },
  {
    "id": "pets-flower-power-duckling",
    "name": "Flower Power Duckling",
    "category": "pets",
    "value": 569.7224,
    "demand": 1,
    "image": "/items/Flower Power Duckling.webp"
  },
  {
    "id": "pets-bush-elephant",
    "name": "Bush Elephant",
    "category": "pets",
    "value": 944.2233,
    "demand": 3,
    "image": "/items/Bush Elephant.webp"
  },
  {
    "id": "pets-black-macaque",
    "name": "Black Macaque",
    "category": "pets",
    "value": 572.3784,
    "demand": 2,
    "image": "/items/Black Macaque.webp"
  },
  {
    "id": "pets-cow-calf",
    "name": "Cow Calf",
    "category": "pets",
    "value": 576.3625,
    "demand": 1,
    "image": "/items/Cow Calf.webp"
  },
  {
    "id": "pets-white-sand-dollar",
    "name": "White Sand Dollar",
    "category": "pets",
    "value": 707.8362,
    "demand": 2,
    "image": "/items/White Sand Dollar.webp"
  },
  {
    "id": "pets-mirai-moth",
    "name": "Mirai Moth",
    "category": "pets",
    "value": 513.9457,
    "demand": 1,
    "image": "/items/Mirai Moth.webp"
  },
  {
    "id": "pets-persian-cat",
    "name": "Persian Cat",
    "category": "pets",
    "value": 300.1349,
    "demand": 1,
    "image": "/items/Persian Cat.webp"
  },
  {
    "id": "pets-diamond-butterfly",
    "name": "Diamond Butterfly",
    "category": "pets",
    "value": 980.0797,
    "demand": 3,
    "image": "/items/Diamond Butterfly.webp"
  },
  {
    "id": "pets-french-bulldog",
    "name": "French Bulldog",
    "category": "pets",
    "value": 742.3647,
    "demand": 2,
    "image": "/items/French Bulldog.webp"
  },
  {
    "id": "pets-munchkin-cat",
    "name": "Munchkin Cat",
    "category": "pets",
    "value": 917.6629,
    "demand": 3,
    "image": "/items/Munchkin Cat.webp"
  },
  {
    "id": "pets-alicorn",
    "name": "Alicorn",
    "category": "pets",
    "value": 241.7021,
    "demand": 1,
    "image": "/items/Alicorn.webp"
  },
  {
    "id": "pets-tarantula",
    "name": "Tarantula",
    "category": "pets",
    "value": 220.4539,
    "demand": 1,
    "image": "/items/Tarantula.webp"
  },
  {
    "id": "pets-storm-condor",
    "name": "Storm Condor",
    "category": "pets",
    "value": 35.8595,
    "demand": 1,
    "image": "/items/Storm Condor.webp"
  },
  {
    "id": "pets-black-rhino",
    "name": "Black Rhino",
    "category": "pets",
    "value": 67.7319,
    "demand": 1,
    "image": "/items/Black Rhino.webp"
  },
  {
    "id": "pets-space-whale",
    "name": "Space Whale",
    "category": "pets",
    "value": 590.9707,
    "demand": 1,
    "image": "/items/Space Whale.webp"
  },
  {
    "id": "pets-phoenix",
    "name": "Phoenix",
    "category": "pets",
    "value": 764.9409,
    "demand": 2,
    "image": "/items/Phoenix.webp"
  },
  {
    "id": "pets-arctic-hare",
    "name": "Arctic Hare",
    "category": "pets",
    "value": 308.103,
    "demand": 1,
    "image": "/items/Arctic Hare.webp"
  },
  {
    "id": "pets-gecko-ducky",
    "name": "Gecko Ducky",
    "category": "pets",
    "value": 29.2194,
    "demand": 1,
    "image": "/items/Gecko Ducky.webp"
  },
  {
    "id": "pets-billy-goat",
    "name": "Billy Goat",
    "category": "pets",
    "value": 608.2349,
    "demand": 1,
    "image": "/items/Billy Goat.webp"
  },
  {
    "id": "pets-kraken",
    "name": "Kraken",
    "category": "pets",
    "value": 544.4901,
    "demand": 1,
    "image": "/items/Kraken.webp"
  },
  {
    "id": "pets-castle-hermit-crab",
    "name": "Castle Hermit Crab",
    "category": "pets",
    "value": 589.6427,
    "demand": 1,
    "image": "/items/Castle Hermit Crab.webp"
  },
  {
    "id": "pets-sunrise-duckling",
    "name": "Sunrise Duckling",
    "category": "pets",
    "value": 637.4513,
    "demand": 1,
    "image": "/items/Sunrise Duckling.webp"
  },
  {
    "id": "pets-wren",
    "name": "Wren",
    "category": "pets",
    "value": 155.381,
    "demand": 1,
    "image": "/items/Wren.webp"
  },
  {
    "id": "pets-rattlesnake",
    "name": "Rattlesnake",
    "category": "pets",
    "value": 227.094,
    "demand": 1,
    "image": "/items/Rattlesnake.webp"
  },
  {
    "id": "pets-ribbon-seal",
    "name": "Ribbon Seal",
    "category": "pets",
    "value": 51.7957,
    "demand": 1,
    "image": "/items/Ribbon Seal.webp"
  },
  {
    "id": "pets-diamond-unicorn",
    "name": "Diamond Unicorn",
    "category": "pets",
    "value": 424.9685,
    "demand": 1,
    "image": "/items/Diamond Unicorn.webp"
  },
  {
    "id": "pets-moose-calf",
    "name": "Moose Calf",
    "category": "pets",
    "value": 839.3099,
    "demand": 2,
    "image": "/items/Moose Calf.webp"
  },
  {
    "id": "pets-queen-bee",
    "name": "Queen Bee",
    "category": "pets",
    "value": 794.1573,
    "demand": 2,
    "image": "/items/Queen Bee.webp"
  },
  {
    "id": "pets-great-pyrenees",
    "name": "Great Pyrenees",
    "category": "pets",
    "value": 638.7793,
    "demand": 2,
    "image": "/items/Great Pyrenees.webp"
  },
  {
    "id": "pets-goat",
    "name": "Goat",
    "category": "pets",
    "value": 900.3987,
    "demand": 2,
    "image": "/items/Goat.webp"
  },
  {
    "id": "pets-onza",
    "name": "Onza",
    "category": "pets",
    "value": 163.3491,
    "demand": 1,
    "image": "/items/Onza.webp"
  },
  {
    "id": "pets-pink-betta-fish",
    "name": "Pink Betta Fish",
    "category": "pets",
    "value": 548.4741,
    "demand": 1,
    "image": "/items/Pink Betta Fish.webp"
  },
  {
    "id": "pets-albatross",
    "name": "Albatross",
    "category": "pets",
    "value": 463.481,
    "demand": 1,
    "image": "/items/Albatross.webp"
  },
  {
    "id": "pets-evil-unicorn",
    "name": "Evil Unicorn",
    "category": "pets",
    "value": 984.0638,
    "demand": 3,
    "image": "/items/Evil Unicorn.webp"
  },
  {
    "id": "pets-basilisk",
    "name": "Basilisk",
    "category": "pets",
    "value": 382.472,
    "demand": 1,
    "image": "/items/Basilisk.webp"
  },
  {
    "id": "pets-golden-dragon",
    "name": "Golden Dragon",
    "category": "pets",
    "value": 254.9823,
    "demand": 1,
    "image": "/items/Golden Dragon.webp"
  },
  {
    "id": "pets-lavender-dragon",
    "name": "Lavender Dragon",
    "category": "pets",
    "value": 807.4375,
    "demand": 2,
    "image": "/items/Lavender Dragon.webp"
  },
  {
    "id": "pets-frost-unicorn",
    "name": "Frost Unicorn",
    "category": "pets",
    "value": 930.9431,
    "demand": 2,
    "image": "/items/Frost Unicorn.webp"
  },
  {
    "id": "pets-preppy-capuchin-monkey",
    "name": "Preppy Capuchin Monkey",
    "category": "pets",
    "value": 486.0573,
    "demand": 1,
    "image": "/items/Preppy Capuchin Monkey.webp"
  },
  {
    "id": "pets-hammerhead-shark",
    "name": "Hammerhead Shark",
    "category": "pets",
    "value": 203.1896,
    "demand": 1,
    "image": "/items/Hammerhead Shark.webp"
  },
  {
    "id": "pets-ladybug",
    "name": "Ladybug",
    "category": "pets",
    "value": 339.9754,
    "demand": 1,
    "image": "/items/Ladybug.webp"
  },
  {
    "id": "pets-ghostly-cat",
    "name": "Ghostly Cat",
    "category": "pets",
    "value": 310.759,
    "demand": 1,
    "image": "/items/Ghostly Cat.webp"
  },
  {
    "id": "pets-dugong",
    "name": "Dugong",
    "category": "pets",
    "value": 273.5746,
    "demand": 1,
    "image": "/items/Dugong.webp"
  },
  {
    "id": "pets-white-choccybunny",
    "name": "White Choccybunny",
    "category": "pets",
    "value": 82.3401,
    "demand": 1,
    "image": "/items/White Choccybunny.webp"
  },
  {
    "id": "pets-black-marlin",
    "name": "Black Marlin",
    "category": "pets",
    "value": 358.5677,
    "demand": 1,
    "image": "/items/Black Marlin.webp"
  },
  {
    "id": "pets-nurse-shark",
    "name": "Nurse Shark",
    "category": "pets",
    "value": 30.5474,
    "demand": 1,
    "image": "/items/Nurse Shark.webp"
  },
  {
    "id": "pets-cuddly-candle",
    "name": "Cuddly Candle",
    "category": "pets",
    "value": 673.3078,
    "demand": 1,
    "image": "/items/Cuddly Candle.webp"
  },
  {
    "id": "pets-giraffe",
    "name": "Giraffe",
    "category": "pets",
    "value": 998.672,
    "demand": 3,
    "image": "/items/Giraffe.webp"
  },
  {
    "id": "pets-diamond-hamster",
    "name": "Diamond Hamster",
    "category": "pets",
    "value": 815.4056,
    "demand": 2,
    "image": "/items/Diamond Hamster.webp"
  },
  {
    "id": "pets-chocolate-dutch-guinea-pig",
    "name": "Chocolate Dutch Guinea Pig",
    "category": "pets",
    "value": 806.1095,
    "demand": 2,
    "image": "/items/Chocolate Dutch Guinea Pig.webp"
  },
  {
    "id": "pets-pine-marten",
    "name": "Pine Marten",
    "category": "pets",
    "value": 401.0642,
    "demand": 1,
    "image": "/items/Pine Marten.webp"
  },
  {
    "id": "pets-punk-pony",
    "name": "Punk Pony",
    "category": "pets",
    "value": 479.4172,
    "demand": 1,
    "image": "/items/Punk Pony.webp"
  },
  {
    "id": "pets-cuteacabra",
    "name": "Cute-A-Cabra",
    "category": "pets",
    "value": 333.3353,
    "demand": 1,
    "image": "/items/Cute-A-Cabra.webp"
  },
  {
    "id": "pets-undead-elk",
    "name": "Undead Elk",
    "category": "pets",
    "value": 334.6634,
    "demand": 1,
    "image": "/items/Undead Elk.webp"
  },
  {
    "id": "pets-robot",
    "name": "Robot",
    "category": "pets",
    "value": 100.9323,
    "demand": 1,
    "image": "/items/Robot.webp"
  },
  {
    "id": "pets-penguin",
    "name": "Penguin",
    "category": "pets",
    "value": 391.7681,
    "demand": 1,
    "image": "/items/Penguin.webp"
  },
  {
    "id": "pets-gorilla",
    "name": "Gorilla",
    "category": "pets",
    "value": 232.406,
    "demand": 1,
    "image": "/items/Gorilla.webp"
  },
  {
    "id": "pets-mr-whiskerpips",
    "name": "Mr. Whiskerpips",
    "category": "pets",
    "value": 597.6108,
    "demand": 2,
    "image": "/items/Mr. Whiskerpips.webp"
  },
  {
    "id": "pets-galapagos-sea-lion",
    "name": "Galapagos Sea Lion",
    "category": "pets",
    "value": 84.9961,
    "demand": 1,
    "image": "/items/Galapagos Sea Lion.webp"
  },
  {
    "id": "pets-irish-water-spaniel",
    "name": "Irish Water Spaniel",
    "category": "pets",
    "value": 909.6948,
    "demand": 2,
    "image": "/items/Irish Water Spaniel.webp"
  },
  {
    "id": "pets-magpie",
    "name": "Magpie",
    "category": "pets",
    "value": 53.1237,
    "demand": 1,
    "image": "/items/Magpie.webp"
  },
  {
    "id": "pets-wild-boar",
    "name": "Wild Boar",
    "category": "pets",
    "value": 722.4444,
    "demand": 2,
    "image": "/items/Wild Boar.webp"
  },
  {
    "id": "pets-komodo-dragon",
    "name": "Komodo Dragon",
    "category": "pets",
    "value": 470.1211,
    "demand": 1,
    "image": "/items/Komodo Dragon.webp"
  },
  {
    "id": "pets-tasmanian-tiger",
    "name": "Tasmanian Tiger",
    "category": "pets",
    "value": 180.6133,
    "demand": 1,
    "image": "/items/Tasmanian Tiger.webp"
  },
  {
    "id": "pets-squid",
    "name": "Squid",
    "category": "pets",
    "value": 662.6836,
    "demand": 1,
    "image": "/items/Squid.webp"
  },
  {
    "id": "pets-jumping-spider",
    "name": "Jumping Spider",
    "category": "pets",
    "value": 122.1806,
    "demand": 1,
    "image": "/items/Jumping Spider.webp"
  },
  {
    "id": "pets-giant-black-scarab",
    "name": "Giant Black Scarab",
    "category": "pets",
    "value": 466.1371,
    "demand": 1,
    "image": "/items/Giant Black Scarab.webp"
  },
  {
    "id": "pets-samoyed",
    "name": "Samoyed",
    "category": "pets",
    "value": 114.2125,
    "demand": 1,
    "image": "/items/Samoyed.webp"
  },
  {
    "id": "pets-hawk",
    "name": "Hawk",
    "category": "pets",
    "value": 622.8431,
    "demand": 1,
    "image": "/items/Hawk.webp"
  },
  {
    "id": "pets-vanilla-penguin",
    "name": "Vanilla Penguin",
    "category": "pets",
    "value": 756.9728,
    "demand": 2,
    "image": "/items/Vanilla Penguin.webp"
  },
  {
    "id": "pets-kookaburra",
    "name": "Kookaburra",
    "category": "pets",
    "value": 819.3897,
    "demand": 2,
    "image": "/items/Kookaburra.webp"
  },
  {
    "id": "pets-giant-gold-scarab",
    "name": "Giant Gold Scarab",
    "category": "pets",
    "value": 849.934,
    "demand": 2,
    "image": "/items/Giant Gold Scarab.webp"
  },
  {
    "id": "pets-prism-snake",
    "name": "Prism Snake",
    "category": "pets",
    "value": 419.6565,
    "demand": 1,
    "image": "/items/Prism Snake.webp"
  },
  {
    "id": "pets-crocodile",
    "name": "Crocodile",
    "category": "pets",
    "value": 937.5832,
    "demand": 3,
    "image": "/items/Crocodile.webp"
  },
  {
    "id": "pets-tree-frog",
    "name": "Tree Frog",
    "category": "pets",
    "value": 19.9233,
    "demand": 1,
    "image": "/items/Tree Frog.webp"
  },
  {
    "id": "pets-ankylosaurus",
    "name": "Ankylosaurus",
    "category": "pets",
    "value": 367.8638,
    "demand": 1,
    "image": "/items/Ankylosaurus.webp"
  },
  {
    "id": "pets-blackfooted-ferret",
    "name": "Black-Footed Ferret",
    "category": "pets",
    "value": 23.9073,
    "demand": 1,
    "image": "/items/Black-Footed Ferret.webp"
  },
  {
    "id": "pets-english-sheepdog",
    "name": "English Sheepdog",
    "category": "pets",
    "value": 685.2599,
    "demand": 2,
    "image": "/items/English Sheepdog.webp"
  },
  {
    "id": "pets-orange-butterfly",
    "name": "Orange Butterfly",
    "category": "pets",
    "value": 661.3556,
    "demand": 2,
    "image": "/items/Orange Butterfly.webp"
  },
  {
    "id": "pets-pirate-hermit-crab",
    "name": "Pirate Hermit Crab",
    "category": "pets",
    "value": 733.0685,
    "demand": 2,
    "image": "/items/Pirate Hermit Crab.webp"
  },
  {
    "id": "pets-frog",
    "name": "Frog",
    "category": "pets",
    "value": 505.9776,
    "demand": 1,
    "image": "/items/Frog.webp"
  },
  {
    "id": "pets-primal-kaijunior",
    "name": "Primal Kaijunior",
    "category": "pets",
    "value": 552.4582,
    "demand": 1,
    "image": "/items/Primal Kaijunior.webp"
  },
  {
    "id": "pets-zombie-chick",
    "name": "Zombie Chick",
    "category": "pets",
    "value": 326.6952,
    "demand": 1,
    "image": "/items/Zombie Chick.webp"
  },
  {
    "id": "pets-happy-clam",
    "name": "Happy Clam",
    "category": "pets",
    "value": 873.8384,
    "demand": 2,
    "image": "/items/Happy Clam.webp"
  },
  {
    "id": "pets-seafoam-butterfly",
    "name": "Seafoam Butterfly",
    "category": "pets",
    "value": 476.7612,
    "demand": 1,
    "image": "/items/Seafoam Butterfly.webp"
  },
  {
    "id": "pets-momma-moose",
    "name": "Momma Moose",
    "category": "pets",
    "value": 398.4082,
    "demand": 1,
    "image": "/items/Momma Moose.webp"
  },
  {
    "id": "pets-shrew",
    "name": "Shrew",
    "category": "pets",
    "value": 872.5103,
    "demand": 2,
    "image": "/items/Shrew.webp"
  },
  {
    "id": "pets-mecha-meow",
    "name": "Mecha Meow",
    "category": "pets",
    "value": 629.4832,
    "demand": 1,
    "image": "/items/Mecha Meow.webp"
  },
  {
    "id": "pets-albino-bat",
    "name": "Albino Bat",
    "category": "pets",
    "value": 564.4103,
    "demand": 1,
    "image": "/items/Albino Bat.webp"
  },
  {
    "id": "pets-golden-hamster",
    "name": "Golden Hamster",
    "category": "pets",
    "value": 653.3875,
    "demand": 1,
    "image": "/items/Golden Hamster.webp"
  },
  {
    "id": "pets-mushroom-friend",
    "name": "Mushroom Friend",
    "category": "pets",
    "value": 675.9638,
    "demand": 1,
    "image": "/items/Mushroom Friend.webp"
  },
  {
    "id": "pets-brownchested-pheasant",
    "name": "Brown-Chested Pheasant",
    "category": "pets",
    "value": 472.7771,
    "demand": 1,
    "image": "/items/Brown-Chested Pheasant.webp"
  },
  {
    "id": "pets-halloween-white-mummy-cat",
    "name": "Halloween White Mummy Cat",
    "category": "pets",
    "value": 305.447,
    "demand": 1,
    "image": "/items/Halloween White Mummy Cat.webp"
  },
  {
    "id": "pets-snowball-pug",
    "name": "Snowball Pug",
    "category": "pets",
    "value": 471.4491,
    "demand": 1,
    "image": "/items/Snowball Pug.webp"
  },
  {
    "id": "pets-lionfish",
    "name": "Lionfish",
    "category": "pets",
    "value": 278.8866,
    "demand": 1,
    "image": "/items/Lionfish.webp"
  },
  {
    "id": "pets-caelum-cervi",
    "name": "Caelum Cervi",
    "category": "pets",
    "value": 864.5422,
    "demand": 2,
    "image": "/items/Caelum Cervi.webp"
  },
  {
    "id": "pets-naga-dragon",
    "name": "Naga Dragon",
    "category": "pets",
    "value": 709.1642,
    "demand": 1,
    "image": "/items/Naga Dragon.webp"
  },
  {
    "id": "pets-grave-owl",
    "name": "Grave Owl",
    "category": "pets",
    "value": 381.144,
    "demand": 1,
    "image": "/items/Grave Owl.webp"
  },
  {
    "id": "pets-gingerbread-hare",
    "name": "Gingerbread Hare",
    "category": "pets",
    "value": 353.2556,
    "demand": 1,
    "image": "/items/Gingerbread Hare.webp"
  },
  {
    "id": "pets-candy-hare",
    "name": "Candy Hare",
    "category": "pets",
    "value": 808.7655,
    "demand": 2,
    "image": "/items/Candy Hare.webp"
  },
  {
    "id": "pets-cozy-mistletroll",
    "name": "Cozy Mistletroll",
    "category": "pets",
    "value": 314.7431,
    "demand": 1,
    "image": "/items/Cozy Mistletroll.webp"
  },
  {
    "id": "pets-salamander",
    "name": "Salamander",
    "category": "pets",
    "value": 410.3603,
    "demand": 1,
    "image": "/items/Salamander.webp"
  },
  {
    "id": "pets-peahen",
    "name": "Peahen",
    "category": "pets",
    "value": 779.5491,
    "demand": 2,
    "image": "/items/Peahen.webp"
  },
  {
    "id": "pets-fire-stallion",
    "name": "Fire Stallion",
    "category": "pets",
    "value": 293.4948,
    "demand": 1,
    "image": "/items/Fire Stallion.webp"
  },
  {
    "id": "pets-honey-badger",
    "name": "Honey Badger",
    "category": "pets",
    "value": 861.8862,
    "demand": 2,
    "image": "/items/Honey Badger.webp"
  },
  {
    "id": "pets-kelp-crewmate",
    "name": "Kelp Crewmate",
    "category": "pets",
    "value": 204.5177,
    "demand": 1,
    "image": "/items/Kelp Crewmate.webp"
  },
  {
    "id": "pets-capricorn",
    "name": "Capricorn",
    "category": "pets",
    "value": 727.7565,
    "demand": 2,
    "image": "/items/Capricorn.webp"
  },
  {
    "id": "pets-shiver-wolf",
    "name": "Shiver Wolf",
    "category": "pets",
    "value": 580.3465,
    "demand": 1,
    "image": "/items/Shiver Wolf.webp"
  },
  {
    "id": "pets-river-otter",
    "name": "River Otter",
    "category": "pets",
    "value": 14.6112,
    "demand": 1,
    "image": "/items/River Otter.webp"
  },
  {
    "id": "pets-roadrunner",
    "name": "Roadrunner",
    "category": "pets",
    "value": 423.6405,
    "demand": 1,
    "image": "/items/Roadrunner.webp"
  },
  {
    "id": "pets-guardian-lion",
    "name": "Guardian Lion",
    "category": "pets",
    "value": 671.9797,
    "demand": 1,
    "image": "/items/Guardian Lion.webp"
  },
  {
    "id": "pets-majestic-pony",
    "name": "Majestic Pony",
    "category": "pets",
    "value": 830.0138,
    "demand": 2,
    "image": "/items/Majestic Pony.webp"
  },
  {
    "id": "pets-hot-doggo",
    "name": "Hot Doggo",
    "category": "pets",
    "value": 972.1116,
    "demand": 3,
    "image": "/items/Hot Doggo.webp"
  },
  {
    "id": "pets-turkey",
    "name": "Turkey",
    "category": "pets",
    "value": 810.0935,
    "demand": 2,
    "image": "/items/Turkey.webp"
  },
  {
    "id": "pets-hero-gibbon",
    "name": "Hero Gibbon",
    "category": "pets",
    "value": 798.1414,
    "demand": 2,
    "image": "/items/Hero Gibbon.webp"
  },
  {
    "id": "pets-ice-golem",
    "name": "Ice Golem",
    "category": "pets",
    "value": 786.1892,
    "demand": 2,
    "image": "/items/Ice Golem.webp"
  },
  {
    "id": "pets-emberlight",
    "name": "Emberlight",
    "category": "pets",
    "value": 561.7543,
    "demand": 1,
    "image": "/items/Emberlight.webp"
  },
  {
    "id": "pets-ruddy-duck",
    "name": "Ruddy Duck",
    "category": "pets",
    "value": 5.3151,
    "demand": 1,
    "image": "/items/Ruddy Duck.webp"
  },
  {
    "id": "pets-black-chowchow",
    "name": "Black Chow-Chow",
    "category": "pets",
    "value": 650.7315,
    "demand": 1,
    "image": "/items/Black Chow-Chow.webp"
  },
  {
    "id": "pets-weevil",
    "name": "Weevil",
    "category": "pets",
    "value": 243.0302,
    "demand": 1,
    "image": "/items/Weevil.webp"
  },
  {
    "id": "pets-singularity-beetle",
    "name": "Singularity Beetle",
    "category": "pets",
    "value": 370.5198,
    "demand": 1,
    "image": "/items/Singularity Beetle.webp"
  },
  {
    "id": "pets-ram",
    "name": "Ram",
    "category": "pets",
    "value": 758.3009,
    "demand": 2,
    "image": "/items/Ram.webp"
  },
  {
    "id": "pets-chocolate-labrador",
    "name": "Chocolate Labrador",
    "category": "pets",
    "value": 87.6521,
    "demand": 1,
    "image": "/items/Chocolate Labrador.webp"
  },
  {
    "id": "pets-gumball-caterpillar",
    "name": "Gumball Caterpillar",
    "category": "pets",
    "value": 95.6202,
    "demand": 1,
    "image": "/items/Gumball Caterpillar.webp"
  },
  {
    "id": "pets-bee",
    "name": "Bee",
    "category": "pets",
    "value": 261.6224,
    "demand": 1,
    "image": "/items/Bee.webp"
  },
  {
    "id": "pets-dragonfruit-fox",
    "name": "Dragonfruit Fox",
    "category": "pets",
    "value": 840.6379,
    "demand": 2,
    "image": "/items/Dragonfruit Fox.webp"
  },
  {
    "id": "pets-dango-penguins",
    "name": "Dango Penguins",
    "category": "pets",
    "value": 824.7017,
    "demand": 2,
    "image": "/items/Dango Penguins.webp"
  },
  {
    "id": "pets-elephant",
    "name": "Elephant",
    "category": "pets",
    "value": 942.8953,
    "demand": 3,
    "image": "/items/Elephant.webp"
  },
  {
    "id": "pets-axolotl",
    "name": "Axolotl",
    "category": "pets",
    "value": 701.1961,
    "demand": 2,
    "image": "/items/Axolotl.webp"
  },
  {
    "id": "pets-lunar-tiger",
    "name": "Lunar Tiger",
    "category": "pets",
    "value": 143.4289,
    "demand": 1,
    "image": "/items/Lunar Tiger.webp"
  },
  {
    "id": "pets-rat",
    "name": "Rat",
    "category": "pets",
    "value": 213.8138,
    "demand": 1,
    "image": "/items/Rat.webp"
  },
  {
    "id": "pets-owl",
    "name": "Owl",
    "category": "pets",
    "value": 996.0159,
    "demand": 3,
    "image": "/items/Owl.webp"
  },
  {
    "id": "pets-2021-uplift-butterfly",
    "name": "2021 Uplift Butterfly",
    "category": "pets",
    "value": 436.9207,
    "demand": 1,
    "image": "/items/2021 Uplift Butterfly.webp"
  },
  {
    "id": "pets-sakura-spirit",
    "name": "Sakura Spirit",
    "category": "pets",
    "value": 881.8065,
    "demand": 2,
    "image": "/items/Sakura Spirit.webp"
  },
  {
    "id": "pets-waffle-wyrm",
    "name": "Waffle Wyrm",
    "category": "pets",
    "value": 124.8366,
    "demand": 1,
    "image": "/items/Waffle Wyrm.webp"
  },
  {
    "id": "pets-temple-friend",
    "name": "Temple Friend",
    "category": "pets",
    "value": 349.2715,
    "demand": 1,
    "image": "/items/Temple Friend.webp"
  },
  {
    "id": "pets-chameleon",
    "name": "Chameleon",
    "category": "pets",
    "value": 656.0435,
    "demand": 1,
    "image": "/items/Chameleon.webp"
  },
  {
    "id": "pets-sea-turtle",
    "name": "Sea Turtle",
    "category": "pets",
    "value": 116.8685,
    "demand": 1,
    "image": "/items/Sea Turtle.webp"
  },
  {
    "id": "pets-red-fox",
    "name": "Red Fox",
    "category": "pets",
    "value": 320.0552,
    "demand": 1,
    "image": "/items/Red Fox.webp"
  },
  {
    "id": "pets-malaysian-tapir",
    "name": "Malaysian Tapir",
    "category": "pets",
    "value": 422.3125,
    "demand": 1,
    "image": "/items/Malaysian Tapir.webp"
  },
  {
    "id": "pets-triceratops",
    "name": "Triceratops",
    "category": "pets",
    "value": 262.9504,
    "demand": 1,
    "image": "/items/Triceratops.webp"
  },
  {
    "id": "pets-african-wild-dog",
    "name": "African Wild Dog",
    "category": "pets",
    "value": 989.3759,
    "demand": 3,
    "image": "/items/African Wild Dog.webp"
  },
  {
    "id": "pets-poison-dart-frog",
    "name": "Poison Dart Frog",
    "category": "pets",
    "value": 286.8547,
    "demand": 1,
    "image": "/items/Poison Dart Frog.webp"
  },
  {
    "id": "pets-villain-gibbon",
    "name": "Villain Gibbon",
    "category": "pets",
    "value": 540.506,
    "demand": 1,
    "image": "/items/Villain Gibbon.webp"
  },
  {
    "id": "pets-frostbite-cub",
    "name": "Frostbite Cub",
    "category": "pets",
    "value": 626.8271,
    "demand": 2,
    "image": "/items/Frostbite Cub.webp"
  },
  {
    "id": "pets-cheetah",
    "name": "Cheetah",
    "category": "pets",
    "value": 816.7336,
    "demand": 2,
    "image": "/items/Cheetah.webp"
  },
  {
    "id": "pets-many-mackerel",
    "name": "Many Mackerel",
    "category": "pets",
    "value": 907.0388,
    "demand": 2,
    "image": "/items/Many Mackerel.webp"
  },
  {
    "id": "pets-sushi-penguin",
    "name": "Sushi Penguin",
    "category": "pets",
    "value": 755.6448,
    "demand": 2,
    "image": "/items/Sushi Penguin.webp"
  },
  {
    "id": "pets-royal-mistletroll",
    "name": "Royal Mistletroll",
    "category": "pets",
    "value": 913.6789,
    "demand": 2,
    "image": "/items/Royal Mistletroll.webp"
  },
  {
    "id": "pets-glormy-hound",
    "name": "Glormy Hound",
    "category": "pets",
    "value": 812.7496,
    "demand": 2,
    "image": "/items/Glormy Hound.webp"
  },
  {
    "id": "pets-chimera",
    "name": "Chimera",
    "category": "pets",
    "value": 594.9547,
    "demand": 1,
    "image": "/items/Chimera.webp"
  },
  {
    "id": "pets-metal-ox",
    "name": "Metal Ox",
    "category": "pets",
    "value": 455.5129,
    "demand": 1,
    "image": "/items/Metal Ox.webp"
  },
  {
    "id": "pets-sabertooth",
    "name": "Sabertooth",
    "category": "pets",
    "value": 405.0483,
    "demand": 1,
    "image": "/items/Sabertooth.webp"
  },
  {
    "id": "pets-pilot-gull",
    "name": "Pilot Gull",
    "category": "pets",
    "value": 26.5633,
    "demand": 1,
    "image": "/items/Pilot Gull.webp"
  },
  {
    "id": "pets-hamster",
    "name": "Hamster",
    "category": "pets",
    "value": 446.2168,
    "demand": 1,
    "image": "/items/Hamster.webp"
  },
  {
    "id": "pets-silverback-gorilla",
    "name": "Silverback Gorilla",
    "category": "pets",
    "value": 851.2621,
    "demand": 2,
    "image": "/items/Silverback Gorilla.webp"
  },
  {
    "id": "pets-choco-penguin",
    "name": "Choco Penguin",
    "category": "pets",
    "value": 432.9366,
    "demand": 1,
    "image": "/items/Choco Penguin.webp"
  },
  {
    "id": "pets-arctic-dusk-dragon",
    "name": "Arctic Dusk Dragon",
    "category": "pets",
    "value": 826.0297,
    "demand": 2,
    "image": "/items/Arctic Dusk Dragon.webp"
  },
  {
    "id": "pets-border-collie",
    "name": "Border Collie",
    "category": "pets",
    "value": 925.631,
    "demand": 2,
    "image": "/items/Border Collie.webp"
  },
  {
    "id": "pets-robo-dog",
    "name": "Robo Dog",
    "category": "pets",
    "value": 636.1233,
    "demand": 1,
    "image": "/items/Robo Dog.webp"
  },
  {
    "id": "pets-mermicorn",
    "name": "Mermicorn",
    "category": "pets",
    "value": 965.4716,
    "demand": 3,
    "image": "/items/Mermicorn.webp"
  },
  {
    "id": "pets-husky",
    "name": "Husky",
    "category": "pets",
    "value": 799.4694,
    "demand": 2,
    "image": "/items/Husky.webp"
  },
  {
    "id": "pets-coyote",
    "name": "Coyote",
    "category": "pets",
    "value": 413.0164,
    "demand": 1,
    "image": "/items/Coyote.webp"
  },
  {
    "id": "pets-warthog",
    "name": "Warthog",
    "category": "pets",
    "value": 341.3034,
    "demand": 1,
    "image": "/items/Warthog.webp"
  },
  {
    "id": "pets-candy-cane-snail",
    "name": "Candy Cane Snail",
    "category": "pets",
    "value": 519.2578,
    "demand": 1,
    "image": "/items/Candy Cane Snail.webp"
  },
  {
    "id": "pets-tawny-frogmouth",
    "name": "Tawny Frogmouth",
    "category": "pets",
    "value": 176.6293,
    "demand": 1,
    "image": "/items/Tawny Frogmouth.webp"
  },
  {
    "id": "pets-tortuga-de-la-isla",
    "name": "Tortuga de la Isla",
    "category": "pets",
    "value": 899.0707,
    "demand": 2,
    "image": "/items/Tortuga de la Isla.webp"
  },
  {
    "id": "pets-starhopper",
    "name": "Starhopper",
    "category": "pets",
    "value": 417.0004,
    "demand": 1,
    "image": "/items/Starhopper.webp"
  },
  {
    "id": "pets-ghost",
    "name": "Ghost",
    "category": "pets",
    "value": 231.078,
    "demand": 1,
    "image": "/items/Ghost.webp"
  },
  {
    "id": "pets-poodle",
    "name": "Poodle",
    "category": "pets",
    "value": 50.4677,
    "demand": 1,
    "image": "/items/Poodle.webp"
  },
  {
    "id": "pets-indian-flying-fox",
    "name": "Indian Flying Fox",
    "category": "pets",
    "value": 555.1142,
    "demand": 1,
    "image": "/items/Indian Flying Fox.webp"
  },
  {
    "id": "pets-wolpertinger",
    "name": "Wolpertinger",
    "category": "pets",
    "value": 185.9254,
    "demand": 1,
    "image": "/items/Wolpertinger.webp"
  },
  {
    "id": "pets-halloween-blue-scorpion",
    "name": "Halloween Blue Scorpion",
    "category": "pets",
    "value": 225.7659,
    "demand": 1,
    "image": "/items/Halloween Blue Scorpion.webp"
  },
  {
    "id": "pets-emperor-shrimp",
    "name": "Emperor Shrimp",
    "category": "pets",
    "value": 235.0621,
    "demand": 1,
    "image": "/items/Emperor Shrimp.webp"
  },
  {
    "id": "pets-fairy-bat-dragon",
    "name": "Fairy Bat Dragon",
    "category": "pets",
    "value": 936.2552,
    "demand": 3,
    "image": "/items/Fairy Bat Dragon.webp"
  },
  {
    "id": "pets-gummy-guana",
    "name": "Gummy Guana",
    "category": "pets",
    "value": 73.0439,
    "demand": 1,
    "image": "/items/Gummy Guana.webp"
  },
  {
    "id": "pets-lava-wolf",
    "name": "Lava Wolf",
    "category": "pets",
    "value": 737.0526,
    "demand": 2,
    "image": "/items/Lava Wolf.webp"
  },
  {
    "id": "pets-hedgehog",
    "name": "Hedgehog",
    "category": "pets",
    "value": 981.4078,
    "demand": 3,
    "image": "/items/Hedgehog.webp"
  },
  {
    "id": "pets-cocoadile",
    "name": "Cocoadile",
    "category": "pets",
    "value": 74.372,
    "demand": 1,
    "image": "/items/Cocoadile.webp"
  },
  {
    "id": "pets-polar-bear",
    "name": "Polar Bear",
    "category": "pets",
    "value": 859.2302,
    "demand": 2,
    "image": "/items/Polar Bear.webp"
  },
  {
    "id": "pets-giant-anteater",
    "name": "Giant Anteater",
    "category": "pets",
    "value": 895.0866,
    "demand": 2,
    "image": "/items/Giant Anteater.webp"
  },
  {
    "id": "pets-puffer-fish",
    "name": "Puffer Fish",
    "category": "pets",
    "value": 741.0366,
    "demand": 2,
    "image": "/items/Puffer Fish.webp"
  },
  {
    "id": "pets-borhyaena-gigantica",
    "name": "Borhyaena Gigantica",
    "category": "pets",
    "value": 140.7728,
    "demand": 1,
    "image": "/items/Borhyaena Gigantica.webp"
  },
  {
    "id": "pets-corn-doggo",
    "name": "Corn Doggo",
    "category": "pets",
    "value": 803.4534,
    "demand": 2,
    "image": "/items/Corn Doggo.webp"
  },
  {
    "id": "pets-clover-cow",
    "name": "Clover Cow",
    "category": "pets",
    "value": 460.825,
    "demand": 1,
    "image": "/items/Clover Cow.webp"
  },
  {
    "id": "pets-musk-ox",
    "name": "Musk Ox",
    "category": "pets",
    "value": 592.2987,
    "demand": 1,
    "image": "/items/Musk Ox.webp"
  },
  {
    "id": "pets-highland-cow",
    "name": "Highland Cow",
    "category": "pets",
    "value": 596.2828,
    "demand": 1,
    "image": "/items/Highland Cow.webp"
  },
  {
    "id": "pets-crow",
    "name": "Crow",
    "category": "pets",
    "value": 993.3599,
    "demand": 3,
    "image": "/items/Crow.webp"
  },
  {
    "id": "pets-zeopod",
    "name": "Zeopod",
    "category": "pets",
    "value": 209.8297,
    "demand": 1,
    "image": "/items/Zeopod.webp"
  },
  {
    "id": "pets-golden-ladybug",
    "name": "Golden Ladybug",
    "category": "pets",
    "value": 632.1392,
    "demand": 1,
    "image": "/items/Golden Ladybug.webp"
  },
  {
    "id": "pets-turtle-doves",
    "name": "Turtle Doves",
    "category": "pets",
    "value": 132.8047,
    "demand": 1,
    "image": "/items/Turtle Doves.webp"
  },
  {
    "id": "pets-orca",
    "name": "Orca",
    "category": "pets",
    "value": 217.7978,
    "demand": 1,
    "image": "/items/Orca.webp"
  },
  {
    "id": "pets-orange-betta-fish",
    "name": "Orange Betta Fish",
    "category": "pets",
    "value": 284.1987,
    "demand": 1,
    "image": "/items/Orange Betta Fish.webp"
  },
  {
    "id": "pets-meerkat",
    "name": "Meerkat",
    "category": "pets",
    "value": 883.1345,
    "demand": 2,
    "image": "/items/Meerkat.webp"
  },
  {
    "id": "pets-gingerbread-reindeer",
    "name": "Gingerbread Reindeer",
    "category": "pets",
    "value": 415.6724,
    "demand": 1,
    "image": "/items/Gingerbread Reindeer.webp"
  },
  {
    "id": "pets-diamond-albatross",
    "name": "Diamond Albatross",
    "category": "pets",
    "value": 836.6539,
    "demand": 2,
    "image": "/items/Diamond Albatross.webp"
  },
  {
    "id": "pets-lunar-white-tiger",
    "name": "Lunar White Tiger",
    "category": "pets",
    "value": 317.3991,
    "demand": 1,
    "image": "/items/Lunar White Tiger.webp"
  },
  {
    "id": "pets-deinonychus",
    "name": "Deinonychus",
    "category": "pets",
    "value": 403.7202,
    "demand": 1,
    "image": "/items/Deinonychus.webp"
  },
  {
    "id": "pets-brown-springer-spaniel",
    "name": "Brown Springer Spaniel",
    "category": "pets",
    "value": 705.1802,
    "demand": 2,
    "image": "/items/Brown Springer Spaniel.webp"
  },
  {
    "id": "pets-starfish",
    "name": "Starfish",
    "category": "pets",
    "value": 123.5086,
    "demand": 1,
    "image": "/items/Starfish.webp"
  },
  {
    "id": "pets-aurora-fox",
    "name": "Aurora Fox",
    "category": "pets",
    "value": 848.606,
    "demand": 2,
    "image": "/items/Aurora Fox.webp"
  },
  {
    "id": "pets-ghost-chick",
    "name": "Ghost Chick",
    "category": "pets",
    "value": 389.1121,
    "demand": 1,
    "image": "/items/Ghost Chick.webp"
  },
  {
    "id": "pets-manta-ray",
    "name": "Manta Ray",
    "category": "pets",
    "value": 302.7909,
    "demand": 1,
    "image": "/items/Manta Ray.webp"
  },
  {
    "id": "pets-priceless-shrimp",
    "name": "Priceless Shrimp",
    "category": "pets",
    "value": 527.2259,
    "demand": 1,
    "image": "/items/Priceless Shrimp.webp"
  },
  {
    "id": "pets-2025-birthday-butterfly",
    "name": "2025 Birthday Butterfly",
    "category": "pets",
    "value": 167.3332,
    "demand": 1,
    "image": "/items/2025 Birthday Butterfly.webp"
  },
  {
    "id": "pets-fleur-de-ice",
    "name": "Fleur De Ice",
    "category": "pets",
    "value": 531.2099,
    "demand": 1,
    "image": "/items/Fleur De Ice.webp"
  },
  {
    "id": "pets-show-pony",
    "name": "Show Pony",
    "category": "pets",
    "value": 211.1577,
    "demand": 1,
    "image": "/items/Show Pony.webp"
  },
  {
    "id": "pets-smores-raccoon",
    "name": "S'mores Raccoon",
    "category": "pets",
    "value": 774.2371,
    "demand": 2,
    "image": "/items/Smores Raccoon.webp"
  },
  {
    "id": "pets-woodpecker",
    "name": "Woodpecker",
    "category": "pets",
    "value": 258.9664,
    "demand": 1,
    "image": "/items/Woodpecker.webp"
  },
  {
    "id": "pets-ginger-cat",
    "name": "Ginger Cat",
    "category": "pets",
    "value": 151.397,
    "demand": 1,
    "image": "/items/Ginger Cat.webp"
  },
  {
    "id": "pets-toy-monkey",
    "name": "Toy Monkey",
    "category": "pets",
    "value": 739.7086,
    "demand": 2,
    "image": "/items/Toy Monkey.webp"
  },
  {
    "id": "pets-dragon",
    "name": "Dragon",
    "category": "pets",
    "value": 193.8935,
    "demand": 1,
    "image": "/items/Dragon.webp"
  },
  {
    "id": "pets-grinmoire",
    "name": "Grinmoire",
    "category": "pets",
    "value": 34.5314,
    "demand": 1,
    "image": "/items/Grinmoire.webp"
  },
  {
    "id": "pets-birthday-butterfly-2023",
    "name": "Birthday Butterfly 2023",
    "category": "pets",
    "value": 276.2306,
    "demand": 1,
    "image": "/items/Birthday Butterfly 2023.webp"
  },
  {
    "id": "pets-sea-slug",
    "name": "Sea Slug",
    "category": "pets",
    "value": 920.319,
    "demand": 2,
    "image": "/items/Sea Slug.webp"
  },
  {
    "id": "pets-oakee-wizard",
    "name": "Oakee Wizard",
    "category": "pets",
    "value": 118.1965,
    "demand": 1,
    "image": "/items/Oakee Wizard.webp"
  },
  {
    "id": "pets-mini-pig",
    "name": "Mini Pig",
    "category": "pets",
    "value": 973.4397,
    "demand": 3,
    "image": "/items/Mini Pig.webp"
  },
  {
    "id": "pets-forest-sprite",
    "name": "Forest Sprite",
    "category": "pets",
    "value": 3.9871,
    "demand": 1,
    "image": "/items/Forest Sprite.webp"
  },
  {
    "id": "pets-merhorse",
    "name": "Merhorse",
    "category": "pets",
    "value": 365.2077,
    "demand": 1,
    "image": "/items/Merhorse.webp"
  },
  {
    "id": "pets-seagull",
    "name": "Seagull",
    "category": "pets",
    "value": 491.3694,
    "demand": 1,
    "image": "/items/Seagull.webp"
  },
  {
    "id": "pets-influencer-gibbon",
    "name": "Influencer Gibbon",
    "category": "pets",
    "value": 658.6996,
    "demand": 1,
    "image": "/items/Influencer Gibbon.webp"
  },
  {
    "id": "pets-bullfrog",
    "name": "Bullfrog",
    "category": "pets",
    "value": 127.4927,
    "demand": 1,
    "image": "/items/Bullfrog.webp"
  },
  {
    "id": "pets-glacier-moth",
    "name": "Glacier Moth",
    "category": "pets",
    "value": 845.95,
    "demand": 2,
    "image": "/items/Glacier Moth.webp"
  },
  {
    "id": "pets-reindeer",
    "name": "Reindeer",
    "category": "pets",
    "value": 669.3237,
    "demand": 2,
    "image": "/items/Reindeer.webp"
  },
  {
    "id": "pets-capuchin-monkey",
    "name": "Capuchin Monkey",
    "category": "pets",
    "value": 160.6931,
    "demand": 1,
    "image": "/items/Capuchin Monkey.webp"
  },
  {
    "id": "pets-lion-cub",
    "name": "Lion Cub",
    "category": "pets",
    "value": 908.3668,
    "demand": 2,
    "image": "/items/Lion Cub.webp"
  },
  {
    "id": "pets-scorching-kaijunior",
    "name": "Scorching Kaijunior",
    "category": "pets",
    "value": 792.8293,
    "demand": 1,
    "image": "/items/Scorching Kaijunior.webp"
  },
  {
    "id": "pets-pirate-ghost-capuchin-monkey",
    "name": "Pirate Ghost Capuchin Monkey",
    "category": "pets",
    "value": 932.2711,
    "demand": 3,
    "image": "/items/Pirate Ghost Capuchin Monkey.webp"
  },
  {
    "id": "pets-trihorned-treehopper",
    "name": "Tri-horned Treehopper",
    "category": "pets",
    "value": 867.1983,
    "demand": 2,
    "image": "/items/Tri-horned Treehopper.webp"
  },
  {
    "id": "pets-dotted-eggy",
    "name": "Dotted Eggy",
    "category": "pets",
    "value": 189.9095,
    "demand": 1,
    "image": "/items/Dotted Eggy.webp"
  },
  {
    "id": "pets-oakee",
    "name": "Oakee",
    "category": "pets",
    "value": 21.2513,
    "demand": 1,
    "image": "/items/Oakee.webp"
  },
  {
    "id": "pets-ranger-beaver",
    "name": "Ranger Beaver",
    "category": "pets",
    "value": 625.4991,
    "demand": 2,
    "image": "/items/Ranger Beaver.webp"
  },
  {
    "id": "pets-blue-ringed-octopus",
    "name": "Blue Ringed Octopus",
    "category": "pets",
    "value": 617.531,
    "demand": 2,
    "image": "/items/Blue Ringed Octopus.webp"
  },
  {
    "id": "pets-eggnog-dog",
    "name": "Eggnog Dog",
    "category": "pets",
    "value": 559.0983,
    "demand": 1,
    "image": "/items/Eggnog Dog.webp"
  },
  {
    "id": "pets-moonlight-moth",
    "name": "Moonlight Moth",
    "category": "pets",
    "value": 520.5858,
    "demand": 1,
    "image": "/items/Moonlight Moth.webp"
  },
  {
    "id": "pets-rose-dragon",
    "name": "Rose Dragon",
    "category": "pets",
    "value": 820.7177,
    "demand": 2,
    "image": "/items/Rose Dragon.webp"
  },
  {
    "id": "pets-sheeeeep",
    "name": "Sheeeeep",
    "category": "pets",
    "value": 891.1026,
    "demand": 2,
    "image": "/items/Sheeeeep.webp"
  },
  {
    "id": "pets-moon-rabbit",
    "name": "Moon Rabbit",
    "category": "pets",
    "value": 677.2918,
    "demand": 2,
    "image": "/items/Moon Rabbit.webp"
  },
  {
    "id": "pets-bloodhound",
    "name": "Bloodhound",
    "category": "pets",
    "value": 324.0392,
    "demand": 1,
    "image": "/items/Bloodhound.webp"
  },
  {
    "id": "pets-sneak-weasel",
    "name": "Sneak Weasel",
    "category": "pets",
    "value": 39.8435,
    "demand": 1,
    "image": "/items/Sneak Weasel.webp"
  },
  {
    "id": "pets-hermit-crab",
    "name": "Hermit Crab",
    "category": "pets",
    "value": 229.75,
    "demand": 1,
    "image": "/items/Hermit Crab.webp"
  },
  {
    "id": "pets-baku",
    "name": "Baku",
    "category": "pets",
    "value": 612.219,
    "demand": 1,
    "image": "/items/Baku.webp"
  },
  {
    "id": "pets-halloween-white-ghost-dragon",
    "name": "Halloween White Ghost Dragon",
    "category": "pets",
    "value": 856.5741,
    "demand": 2,
    "image": "/items/Halloween White Ghost Dragon.webp"
  },
  {
    "id": "pets-golden-rat",
    "name": "Golden Rat",
    "category": "pets",
    "value": 768.925,
    "demand": 2,
    "image": "/items/Golden Rat.webp"
  },
  {
    "id": "pets-water-rabbit",
    "name": "Water Rabbit",
    "category": "pets",
    "value": 681.2759,
    "demand": 2,
    "image": "/items/Water Rabbit.webp"
  },
  {
    "id": "pets-horse",
    "name": "Horse",
    "category": "pets",
    "value": 547.1461,
    "demand": 2,
    "image": "/items/Horse.webp"
  },
  {
    "id": "pets-king-penguin",
    "name": "King Penguin",
    "category": "pets",
    "value": 512.6177,
    "demand": 1,
    "image": "/items/King Penguin.webp"
  },
  {
    "id": "pets-golden-jaguar",
    "name": "Golden Jaguar",
    "category": "pets",
    "value": 602.9228,
    "demand": 1,
    "image": "/items/Golden Jaguar.webp"
  },
  {
    "id": "pets-leopard-shark",
    "name": "Leopard Shark",
    "category": "pets",
    "value": 787.5172,
    "demand": 2,
    "image": "/items/Leopard Shark.webp"
  },
  {
    "id": "pets-frost-phoenix",
    "name": "Frost Phoenix",
    "category": "pets",
    "value": 771.581,
    "demand": 2,
    "image": "/items/Frost Phoenix.webp"
  },
  {
    "id": "pets-nutcracker-squirrel",
    "name": "Nutcracker Squirrel",
    "category": "pets",
    "value": 325.3672,
    "demand": 1,
    "image": "/items/Nutcracker Squirrel.webp"
  },
  {
    "id": "pets-drake",
    "name": "Drake",
    "category": "pets",
    "value": 695.884,
    "demand": 2,
    "image": "/items/Drake.webp"
  },
  {
    "id": "pets-snowman",
    "name": "Snowman",
    "category": "pets",
    "value": 345.2875,
    "demand": 1,
    "image": "/items/Snowman.webp"
  },
  {
    "id": "pets-officer-gibbon",
    "name": "Officer Gibbon",
    "category": "pets",
    "value": 346.6155,
    "demand": 1,
    "image": "/items/Officer Gibbon.webp"
  },
  {
    "id": "pets-toucan",
    "name": "Toucan",
    "category": "pets",
    "value": 159.3651,
    "demand": 1,
    "image": "/items/Toucan.webp"
  },
  {
    "id": "pets-wildfire-hawk",
    "name": "Wildfire Hawk",
    "category": "pets",
    "value": 385.128,
    "demand": 1,
    "image": "/items/Wildfire Hawk.webp"
  },
  {
    "id": "pets-ox",
    "name": "Ox",
    "category": "pets",
    "value": 139.4448,
    "demand": 1,
    "image": "/items/Ox.webp"
  },
  {
    "id": "pets-lunar-gold-tiger",
    "name": "Lunar Gold Tiger",
    "category": "pets",
    "value": 490.0414,
    "demand": 1,
    "image": "/items/Lunar Gold Tiger.webp"
  },
  {
    "id": "pets-caterpillar",
    "name": "Caterpillar",
    "category": "pets",
    "value": 949.5353,
    "demand": 3,
    "image": "/items/Caterpillar.webp"
  },
  {
    "id": "pets-blazing-lion",
    "name": "Blazing Lion",
    "category": "pets",
    "value": 986.7198,
    "demand": 3,
    "image": "/items/Blazing Lion.webp"
  },
  {
    "id": "pets-ibis",
    "name": "Ibis",
    "category": "pets",
    "value": 290.8388,
    "demand": 1,
    "image": "/items/Ibis.webp"
  },
  {
    "id": "pets-cupid-dragon",
    "name": "Cupid Dragon",
    "category": "pets",
    "value": 893.7586,
    "demand": 2,
    "image": "/items/Cupid Dragon.webp"
  },
  {
    "id": "pets-tio-de-nadal",
    "name": "Tio De Nadal",
    "category": "pets",
    "value": 903.0547,
    "demand": 2,
    "image": "/items/Tio De Nadal.webp"
  },
  {
    "id": "pets-gila-monster",
    "name": "Gila Monster",
    "category": "pets",
    "value": 239.0461,
    "demand": 1,
    "image": "/items/Gila Monster.webp"
  },
  {
    "id": "pets-wood-pigeon",
    "name": "Wood Pigeon",
    "category": "pets",
    "value": 811.4215,
    "demand": 2,
    "image": "/items/Wood Pigeon.webp"
  },
  {
    "id": "pets-diamond-amazon",
    "name": "Diamond Amazon",
    "category": "pets",
    "value": 875.1664,
    "demand": 2,
    "image": "/items/Diamond Amazon.webp"
  },
  {
    "id": "pets-cabbit",
    "name": "Cabbit",
    "category": "pets",
    "value": 958.8315,
    "demand": 3,
    "image": "/items/Cabbit.webp"
  },
  {
    "id": "pets-cherub-chipmunk",
    "name": "Cherub Chipmunk",
    "category": "pets",
    "value": 94.2922,
    "demand": 1,
    "image": "/items/Cherub Chipmunk.webp"
  },
  {
    "id": "pets-vulture",
    "name": "Vulture",
    "category": "pets",
    "value": 411.6884,
    "demand": 1,
    "image": "/items/Vulture.webp"
  },
  {
    "id": "pets-goldhorn",
    "name": "Goldhorn",
    "category": "pets",
    "value": 746.3487,
    "demand": 2,
    "image": "/items/Goldhorn.webp"
  },
  {
    "id": "pets-midnight-dragon",
    "name": "Midnight Dragon",
    "category": "pets",
    "value": 865.8703,
    "demand": 2,
    "image": "/items/Midnight Dragon.webp"
  },
  {
    "id": "pets-chicken",
    "name": "Chicken",
    "category": "pets",
    "value": 763.6129,
    "demand": 2,
    "image": "/items/Chicken.webp"
  },
  {
    "id": "pets-shark",
    "name": "Shark",
    "category": "pets",
    "value": 762.2849,
    "demand": 2,
    "image": "/items/Shark.webp"
  },
  {
    "id": "pets-skelebat",
    "name": "Skelebat",
    "category": "pets",
    "value": 260.2944,
    "demand": 1,
    "image": "/items/Skelebat.webp"
  },
  {
    "id": "pets-ratatoskr",
    "name": "Ratatoskr",
    "category": "pets",
    "value": 136.7888,
    "demand": 1,
    "image": "/items/Ratatoskr.webp"
  },
  {
    "id": "pets-toy-poodle",
    "name": "Toy Poodle",
    "category": "pets",
    "value": 504.6496,
    "demand": 1,
    "image": "/items/Toy Poodle.webp"
  },
  {
    "id": "pets-astronaut-gorilla",
    "name": "Astronaut Gorilla",
    "category": "pets",
    "value": 767.597,
    "demand": 2,
    "image": "/items/Astronaut Gorilla.webp"
  },
  {
    "id": "pets-dimension-drifter",
    "name": "Dimension Drifter",
    "category": "pets",
    "value": 541.834,
    "demand": 1,
    "image": "/items/Dimension Drifter.webp"
  },
  {
    "id": "pets-rodeo-bull",
    "name": "Rodeo Bull",
    "category": "pets",
    "value": 233.734,
    "demand": 1,
    "image": "/items/Rodeo Bull.webp"
  },
  {
    "id": "pets-chanekeh",
    "name": "Chanekeh",
    "category": "pets",
    "value": 98.2763,
    "demand": 1,
    "image": "/items/Chanekeh.webp"
  },
  {
    "id": "pets-green-butterfly",
    "name": "Green Butterfly",
    "category": "pets",
    "value": 750.3328,
    "demand": 2,
    "image": "/items/Green Butterfly.webp"
  },
  {
    "id": "pets-rosy-maple-moth",
    "name": "Rosy Maple Moth",
    "category": "pets",
    "value": 524.5698,
    "demand": 1,
    "image": "/items/Rosy Maple Moth.webp"
  },
  {
    "id": "pets-purrowl",
    "name": "Purrowl",
    "category": "pets",
    "value": 103.5883,
    "demand": 1,
    "image": "/items/Purrowl.webp"
  },
  {
    "id": "pets-black-dog",
    "name": "Black Dog",
    "category": "pets",
    "value": 269.5905,
    "demand": 1,
    "image": "/items/Black Dog.webp"
  },
  {
    "id": "pets-cat",
    "name": "Cat",
    "category": "pets",
    "value": 49.1396,
    "demand": 1,
    "image": "/items/Cat.webp"
  },
  {
    "id": "pets-royal-corgi",
    "name": "Royal Corgi",
    "category": "pets",
    "value": 772.909,
    "demand": 2,
    "image": "/items/Royal Corgi.webp"
  },
  {
    "id": "pets-robin",
    "name": "Robin",
    "category": "pets",
    "value": 369.1918,
    "demand": 1,
    "image": "/items/Robin.webp"
  },
  {
    "id": "pets-angelfish",
    "name": "Angelfish",
    "category": "pets",
    "value": 183.2694,
    "demand": 1,
    "image": "/items/Angelfish.webp"
  },
  {
    "id": "pets-rainbow-trout",
    "name": "Rainbow Trout",
    "category": "pets",
    "value": 15.9392,
    "demand": 1,
    "image": "/items/Rainbow Trout.webp"
  },
  {
    "id": "pets-lamb",
    "name": "Lamb",
    "category": "pets",
    "value": 796.8134,
    "demand": 2,
    "image": "/items/Lamb.webp"
  },
  {
    "id": "pets-pudding-cat",
    "name": "Pudding Cat",
    "category": "pets",
    "value": 537.85,
    "demand": 1,
    "image": "/items/Pudding Cat.webp"
  },
  {
    "id": "pets-candyfloss-chick",
    "name": "Candyfloss Chick",
    "category": "pets",
    "value": 948.2073,
    "demand": 3,
    "image": "/items/Candyfloss Chick.webp"
  },
  {
    "id": "pets-nightmare-owl",
    "name": "Nightmare Owl",
    "category": "pets",
    "value": 492.6974,
    "demand": 1,
    "image": "/items/Nightmare Owl.webp"
  },
  {
    "id": "pets-ibex",
    "name": "Ibex",
    "category": "pets",
    "value": 347.9435,
    "demand": 1,
    "image": "/items/Ibex.webp"
  },
  {
    "id": "pets-shark-puppy",
    "name": "Shark Puppy",
    "category": "pets",
    "value": 938.9112,
    "demand": 3,
    "image": "/items/Shark Puppy.webp"
  },
  {
    "id": "pets-winged-horse",
    "name": "Winged Horse",
    "category": "pets",
    "value": 682.6039,
    "demand": 2,
    "image": "/items/Winged Horse.webp"
  },
  {
    "id": "pets-cow",
    "name": "Cow",
    "category": "pets",
    "value": 968.1276,
    "demand": 3,
    "image": "/items/Cow.webp"
  },
  {
    "id": "pets-lobster",
    "name": "Lobster",
    "category": "pets",
    "value": 438.2487,
    "demand": 1,
    "image": "/items/Lobster.webp"
  },
  {
    "id": "pets-pretty-pony",
    "name": "Pretty Pony",
    "category": "pets",
    "value": 670.6517,
    "demand": 2,
    "image": "/items/Pretty Pony.webp"
  },
  {
    "id": "pets-mole",
    "name": "Mole",
    "category": "pets",
    "value": 173.9733,
    "demand": 1,
    "image": "/items/Mole.webp"
  },
  {
    "id": "pets-evil-chick",
    "name": "Evil Chick",
    "category": "pets",
    "value": 521.9138,
    "demand": 1,
    "image": "/items/Evil Chick.webp"
  },
  {
    "id": "pets-fire-foal",
    "name": "Fire Foal",
    "category": "pets",
    "value": 91.6362,
    "demand": 1,
    "image": "/items/Fire Foal.webp"
  },
  {
    "id": "pets-snowy-mammoth",
    "name": "Snowy Mammoth",
    "category": "pets",
    "value": 201.8616,
    "demand": 1,
    "image": "/items/Snowy Mammoth.webp"
  },
  {
    "id": "pets-solaris",
    "name": "Solaris",
    "category": "pets",
    "value": 876.4944,
    "demand": 2,
    "image": "/items/Solaris.webp"
  },
  {
    "id": "pets-cassowary",
    "name": "Cassowary",
    "category": "pets",
    "value": 482.0733,
    "demand": 1,
    "image": "/items/Cassowary.webp"
  },
  {
    "id": "pets-fire-mare",
    "name": "Fire Mare",
    "category": "pets",
    "value": 454.1849,
    "demand": 1,
    "image": "/items/Fire Mare.webp"
  },
  {
    "id": "pets-sandfish",
    "name": "Sandfish",
    "category": "pets",
    "value": 150.069,
    "demand": 1,
    "image": "/items/Sandfish.webp"
  },
  {
    "id": "pets-golden-walrus",
    "name": "Golden Walrus",
    "category": "pets",
    "value": 691.9,
    "demand": 2,
    "image": "/items/Golden Walrus.webp"
  },
  {
    "id": "pets-ghost-wolf",
    "name": "Ghost Wolf",
    "category": "pets",
    "value": 148.7409,
    "demand": 1,
    "image": "/items/Ghost Wolf.webp"
  },
  {
    "id": "pets-sugar-glider",
    "name": "Sugar Glider",
    "category": "pets",
    "value": 960.1595,
    "demand": 3,
    "image": "/items/Sugar Glider.webp"
  },
  {
    "id": "pets-peppermint-penguin",
    "name": "Peppermint Penguin",
    "category": "pets",
    "value": 957.5034,
    "demand": 3,
    "image": "/items/Peppermint Penguin.webp"
  },
  {
    "id": "pets-snow-puma",
    "name": "Snow Puma",
    "category": "pets",
    "value": 42.4996,
    "demand": 1,
    "image": "/items/Snow Puma.webp"
  },
  {
    "id": "pets-lava-dragon",
    "name": "Lava Dragon",
    "category": "pets",
    "value": 857.9022,
    "demand": 2,
    "image": "/items/Lava Dragon.webp"
  },
  {
    "id": "pets-kelp-hunter",
    "name": "Kelp Hunter",
    "category": "pets",
    "value": 393.0961,
    "demand": 1,
    "image": "/items/Kelp Hunter.webp"
  },
  {
    "id": "pets-lunar-ox",
    "name": "Lunar Ox",
    "category": "pets",
    "value": 264.2784,
    "demand": 1,
    "image": "/items/Lunar Ox.webp"
  },
  {
    "id": "pets-angler-fish",
    "name": "Angler Fish",
    "category": "pets",
    "value": 156.709,
    "demand": 1,
    "image": "/items/Angler Fish.webp"
  },
  {
    "id": "pets-buffalo",
    "name": "Buffalo",
    "category": "pets",
    "value": 41.1715,
    "demand": 1,
    "image": "/items/Buffalo.webp"
  },
  {
    "id": "pets-winged-tiger",
    "name": "Winged Tiger",
    "category": "pets",
    "value": 933.5991,
    "demand": 2,
    "image": "/items/Winged Tiger.webp"
  },
  {
    "id": "pets-firefly",
    "name": "Firefly",
    "category": "pets",
    "value": 706.5082,
    "demand": 1,
    "image": "/items/Firefly.webp"
  },
  {
    "id": "pets-frost-dragon",
    "name": "Frost Dragon",
    "category": "pets",
    "value": 997.344,
    "demand": 3,
    "image": "/items/Frost Dragon.webp"
  },
  {
    "id": "pets-black-tiger",
    "name": "Black Tiger",
    "category": "pets",
    "value": 77.028,
    "demand": 1,
    "image": "/items/Black Tiger.webp"
  },
  {
    "id": "pets-karate-gorilla",
    "name": "Karate Gorilla",
    "category": "pets",
    "value": 648.0754,
    "demand": 2,
    "image": "/items/Karate Gorilla.webp"
  },
  {
    "id": "pets-thorny-devil",
    "name": "Thorny Devil",
    "category": "pets",
    "value": 253.6543,
    "demand": 1,
    "image": "/items/Thorny Devil.webp"
  },
  {
    "id": "pets-moonbeam-peacock",
    "name": "Moonbeam Peacock",
    "category": "pets",
    "value": 926.9591,
    "demand": 2,
    "image": "/items/Moonbeam Peacock.webp"
  },
  {
    "id": "pets-oakee-knight",
    "name": "Oakee Knight",
    "category": "pets",
    "value": 27.8914,
    "demand": 1,
    "image": "/items/Oakee Knight.webp"
  },
  {
    "id": "pets-golden-hummingbird",
    "name": "Golden Hummingbird",
    "category": "pets",
    "value": 678.6198,
    "demand": 1,
    "image": "/items/Golden Hummingbird.webp"
  },
  {
    "id": "pets-parrot",
    "name": "Parrot",
    "category": "pets",
    "value": 994.6879,
    "demand": 3,
    "image": "/items/Parrot.webp"
  },
  {
    "id": "pets-rhino",
    "name": "Rhino",
    "category": "pets",
    "value": 686.5879,
    "demand": 2,
    "image": "/items/Rhino.webp"
  },
  {
    "id": "pets-kappakid",
    "name": "Kappakid",
    "category": "pets",
    "value": 397.0802,
    "demand": 1,
    "image": "/items/Kappakid.webp"
  },
  {
    "id": "pets-spider-crab",
    "name": "Spider Crab",
    "category": "pets",
    "value": 434.2646,
    "demand": 1,
    "image": "/items/Spider Crab.webp"
  },
  {
    "id": "pets-peregrine-falcon",
    "name": "Peregrine Falcon",
    "category": "pets",
    "value": 409.0323,
    "demand": 1,
    "image": "/items/Peregrine Falcon.webp"
  },
  {
    "id": "pets-haetae",
    "name": "Haetae",
    "category": "pets",
    "value": 985.3918,
    "demand": 3,
    "image": "/items/Haetae.webp"
  },
  {
    "id": "pets-field-mouse",
    "name": "Field Mouse",
    "category": "pets",
    "value": 887.1185,
    "demand": 2,
    "image": "/items/Field Mouse.webp"
  },
  {
    "id": "pets-liger",
    "name": "Liger",
    "category": "pets",
    "value": 280.2146,
    "demand": 1,
    "image": "/items/Liger.webp"
  },
  {
    "id": "pets-chocolate-chip-bat-dragon",
    "name": "Chocolate Chip Bat Dragon",
    "category": "pets",
    "value": 964.1435,
    "demand": 3,
    "image": "/items/Chocolate Chip Bat Dragon.webp"
  },
  {
    "id": "pets-golden-albatross",
    "name": "Golden Albatross",
    "category": "pets",
    "value": 614.875,
    "demand": 1,
    "image": "/items/Golden Albatross.webp"
  },
  {
    "id": "pets-quetzalcoatl",
    "name": "Quetzalcoatl",
    "category": "pets",
    "value": 313.4151,
    "demand": 1,
    "image": "/items/Quetzalcoatl.webp"
  },
  {
    "id": "pets-canadian-goose",
    "name": "Canadian Goose",
    "category": "pets",
    "value": 535.194,
    "demand": 1,
    "image": "/items/Canadian Goose.webp"
  },
  {
    "id": "pets-slimingo",
    "name": "Slimingo",
    "category": "pets",
    "value": 549.8021,
    "demand": 1,
    "image": "/items/Slimingo.webp"
  },
  {
    "id": "pets-firefighter-gibbon",
    "name": "Firefighter Gibbon",
    "category": "pets",
    "value": 321.3832,
    "demand": 1,
    "image": "/items/Firefighter Gibbon.webp"
  },
  {
    "id": "pets-frogspawn",
    "name": "Frogspawn",
    "category": "pets",
    "value": 265.6065,
    "demand": 1,
    "image": "/items/Frogspawn.webp"
  },
  {
    "id": "pets-frostbite-bear",
    "name": "Frostbite Bear",
    "category": "pets",
    "value": 916.3349,
    "demand": 3,
    "image": "/items/Frostbite Bear.webp"
  },
  {
    "id": "pets-ghost-bunny",
    "name": "Ghost Bunny",
    "category": "pets",
    "value": 721.1164,
    "demand": 2,
    "image": "/items/Ghost Bunny.webp"
  },
  {
    "id": "pets-muskrat",
    "name": "Muskrat",
    "category": "pets",
    "value": 55.7797,
    "demand": 1,
    "image": "/items/Muskrat.webp"
  },
  {
    "id": "pets-narwhal",
    "name": "Narwhal",
    "category": "pets",
    "value": 363.8797,
    "demand": 1,
    "image": "/items/Narwhal.webp"
  },
  {
    "id": "pets-tan-chowchow",
    "name": "Tan Chow-Chow",
    "category": "pets",
    "value": 420.9845,
    "demand": 1,
    "image": "/items/Tan Chow-Chow.webp"
  },
  {
    "id": "pets-mule",
    "name": "Mule",
    "category": "pets",
    "value": 782.2052,
    "demand": 2,
    "image": "/items/Mule.webp"
  },
  {
    "id": "pets-pomeranian",
    "name": "Pomeranian",
    "category": "pets",
    "value": 240.3741,
    "demand": 1,
    "image": "/items/Pomeranian.webp"
  },
  {
    "id": "pets-siamese-cat",
    "name": "Siamese Cat",
    "category": "pets",
    "value": 952.1914,
    "demand": 3,
    "image": "/items/Siamese Cat.webp"
  },
  {
    "id": "pets-singularity-pisces",
    "name": "Singularity Pisces",
    "category": "pets",
    "value": 394.4241,
    "demand": 1,
    "image": "/items/Singularity Pisces.webp"
  },
  {
    "id": "pets-ornate-horned-frog",
    "name": "Ornate Horned Frog",
    "category": "pets",
    "value": 427.6246,
    "demand": 1,
    "image": "/items/Ornate Horned Frog.webp"
  },
  {
    "id": "pets-goldfish",
    "name": "Goldfish",
    "category": "pets",
    "value": 474.1052,
    "demand": 1,
    "image": "/items/Goldfish.webp"
  },
  {
    "id": "pets-evil-basilisk",
    "name": "Evil Basilisk",
    "category": "pets",
    "value": 556.4422,
    "demand": 1,
    "image": "/items/Evil Basilisk.webp"
  },
  {
    "id": "pets-vampire-dragon",
    "name": "Vampire Dragon",
    "category": "pets",
    "value": 915.0069,
    "demand": 3,
    "image": "/items/Vampire Dragon.webp"
  },
  {
    "id": "pets-platypus",
    "name": "Platypus",
    "category": "pets",
    "value": 855.2461,
    "demand": 2,
    "image": "/items/Platypus.webp"
  },
  {
    "id": "pets-spinosaurus",
    "name": "Spinosaurus",
    "category": "pets",
    "value": 734.3965,
    "demand": 2,
    "image": "/items/Spinosaurus.webp"
  },
  {
    "id": "pets-moonbeam-butterfly",
    "name": "Moonbeam Butterfly",
    "category": "pets",
    "value": 759.6289,
    "demand": 2,
    "image": "/items/Moonbeam Butterfly.webp"
  },
  {
    "id": "pets-gingerbread-mouse",
    "name": "Gingerbread Mouse",
    "category": "pets",
    "value": 362.5517,
    "demand": 1,
    "image": "/items/Gingerbread Mouse.webp"
  },
  {
    "id": "pets-ostrich",
    "name": "Ostrich",
    "category": "pets",
    "value": 487.3853,
    "demand": 1,
    "image": "/items/Ostrich.webp"
  },
  {
    "id": "pets-scarebear",
    "name": "Scarebear",
    "category": "pets",
    "value": 730.4125,
    "demand": 2,
    "image": "/items/Scarebear.webp"
  },
  {
    "id": "pets-snow-owl",
    "name": "Snow Owl",
    "category": "pets",
    "value": 649.4034,
    "demand": 2,
    "image": "/items/Snow Owl.webp"
  },
  {
    "id": "pets-puptune",
    "name": "Puptune",
    "category": "pets",
    "value": 462.153,
    "demand": 1,
    "image": "/items/Puptune.webp"
  },
  {
    "id": "pets-scarecrow-crow",
    "name": "Scarecrow Crow",
    "category": "pets",
    "value": 584.3306,
    "demand": 1,
    "image": "/items/Scarecrow Crow.webp"
  },
  {
    "id": "pets-bakeneko",
    "name": "Bakeneko",
    "category": "pets",
    "value": 138.1168,
    "demand": 1,
    "image": "/items/Bakeneko.webp"
  },
  {
    "id": "pets-blossom-snake",
    "name": "Blossom Snake",
    "category": "pets",
    "value": 386.456,
    "demand": 1,
    "image": "/items/Blossom Snake.webp"
  },
  {
    "id": "pets-scarecrow-horse",
    "name": "Scarecrow Horse",
    "category": "pets",
    "value": 257.6383,
    "demand": 1,
    "image": "/items/Scarecrow Horse.webp"
  },
  {
    "id": "pets-dilophosaurus",
    "name": "Dilophosaurus",
    "category": "pets",
    "value": 359.8957,
    "demand": 1,
    "image": "/items/Dilophosaurus.webp"
  },
  {
    "id": "pets-peach-owl",
    "name": "Peach Owl",
    "category": "pets",
    "value": 754.3168,
    "demand": 2,
    "image": "/items/Peach Owl.webp"
  },
  {
    "id": "pets-giant-blue-scarab",
    "name": "Giant Blue Scarab",
    "category": "pets",
    "value": 585.6586,
    "demand": 1,
    "image": "/items/Giant Blue Scarab.webp"
  },
  {
    "id": "pets-bunny",
    "name": "Bunny",
    "category": "pets",
    "value": 88.9802,
    "demand": 1,
    "image": "/items/Bunny.webp"
  },
  {
    "id": "pets-parakeet",
    "name": "Parakeet",
    "category": "pets",
    "value": 58.4358,
    "demand": 1,
    "image": "/items/Parakeet.webp"
  },
  {
    "id": "pets-angus-bull",
    "name": "Angus Bull",
    "category": "pets",
    "value": 464.809,
    "demand": 1,
    "image": "/items/Angus Bull.webp"
  },
  {
    "id": "pets-snow-cat",
    "name": "Snow Cat",
    "category": "pets",
    "value": 7.9711,
    "demand": 1,
    "image": "/items/Snow Cat.webp"
  },
  {
    "id": "pets-dimorphodon",
    "name": "Dimorphodon",
    "category": "pets",
    "value": 640.1073,
    "demand": 1,
    "image": "/items/Dimorphodon.webp"
  },
  {
    "id": "pets-mecha-r4bbit",
    "name": "Mecha R4BBIT",
    "category": "pets",
    "value": 343.9595,
    "demand": 1,
    "image": "/items/Mecha R4BBIT.webp"
  },
  {
    "id": "pets-bluebottle",
    "name": "Bluebottle Fly",
    "category": "pets",
    "value": 130.1487,
    "demand": 1,
    "image": "/items/Bluebottle Fly.webp"
  },
  {
    "id": "pets-badger",
    "name": "Badger",
    "category": "pets",
    "value": 134.1327,
    "demand": 1,
    "image": "/items/Badger.webp"
  },
  {
    "id": "pets-2022-uplift-butterfly",
    "name": "2022 Uplift Butterfly",
    "category": "pets",
    "value": 329.3513,
    "demand": 1,
    "image": "/items/2022 Uplift Butterfly.webp"
  },
  {
    "id": "pets-kitsune",
    "name": "Kitsune",
    "category": "pets",
    "value": 577.6905,
    "demand": 1,
    "image": "/items/Kitsune.webp"
  },
  {
    "id": "pets-trapdoor-snail",
    "name": "Trapdoor Snail",
    "category": "pets",
    "value": 402.3922,
    "demand": 1,
    "image": "/items/Trapdoor Snail.webp"
  },
  {
    "id": "pets-bird-of-paradise",
    "name": "Bird of Paradise",
    "category": "pets",
    "value": 430.2806,
    "demand": 1,
    "image": "/items/Bird of Paradise.webp"
  },
  {
    "id": "pets-sea-angel",
    "name": "Sea Angel",
    "category": "pets",
    "value": 383.8,
    "demand": 1,
    "image": "/items/Sea Angel.webp"
  },
  {
    "id": "pets-raccoon",
    "name": "Raccoon",
    "category": "pets",
    "value": 439.5767,
    "demand": 1,
    "image": "/items/Raccoon.webp"
  },
  {
    "id": "pets-super-saru",
    "name": "Super Saru",
    "category": "pets",
    "value": 613.547,
    "demand": 1,
    "image": "/items/Super Saru.webp"
  },
  {
    "id": "pets-seabed-creeper",
    "name": "Seabed Creeper",
    "category": "pets",
    "value": 634.7953,
    "demand": 2,
    "image": "/items/Seabed Creeper.webp"
  },
  {
    "id": "pets-german-shepherd",
    "name": "German Shepherd",
    "category": "pets",
    "value": 689.244,
    "demand": 2,
    "image": "/items/German Shepherd.webp"
  },
  {
    "id": "pets-nautilus",
    "name": "Nautilus",
    "category": "pets",
    "value": 575.0345,
    "demand": 1,
    "image": "/items/Nautilus.webp"
  },
  {
    "id": "pets-tortoiseshell-guinea-pig",
    "name": "Tortoiseshell Guinea Pig",
    "category": "pets",
    "value": 961.4875,
    "demand": 3,
    "image": "/items/Tortoiseshell Guinea Pig.webp"
  },
  {
    "id": "pets-christmas-spirit",
    "name": "Christmas Spirit",
    "category": "pets",
    "value": 377.1599,
    "demand": 1,
    "image": "/items/Christmas Spirit.webp"
  },
  {
    "id": "pets-armadillo",
    "name": "Armadillo",
    "category": "pets",
    "value": 154.053,
    "demand": 1,
    "image": "/items/Armadillo.webp"
  },
  {
    "id": "pets-papa-moose",
    "name": "Papa Moose",
    "category": "pets",
    "value": 871.1823,
    "demand": 2,
    "image": "/items/Papa Moose.webp"
  },
  {
    "id": "pets-jellyfish",
    "name": "Jellyfish",
    "category": "pets",
    "value": 921.647,
    "demand": 2,
    "image": "/items/Jellyfish.webp"
  },
  {
    "id": "pets-arctic-reindeer",
    "name": "Arctic Reindeer",
    "category": "pets",
    "value": 974.7677,
    "demand": 3,
    "image": "/items/Arctic Reindeer.webp"
  },
  {
    "id": "pets-strawberry-penguin",
    "name": "Strawberry Penguin",
    "category": "pets",
    "value": 884.4625,
    "demand": 2,
    "image": "/items/Strawberry Penguin.webp"
  },
  {
    "id": "pets-black-panther",
    "name": "Black Panther",
    "category": "pets",
    "value": 723.7724,
    "demand": 2,
    "image": "/items/Black Panther.webp"
  },
  {
    "id": "pets-pterodactyl",
    "name": "Pterodactyl",
    "category": "pets",
    "value": 338.6474,
    "demand": 1,
    "image": "/items/Pterodactyl.webp"
  },
  {
    "id": "pets-owlbear",
    "name": "Owlbear",
    "category": "pets",
    "value": 885.7905,
    "demand": 2,
    "image": "/items/Owlbear.webp"
  },
  {
    "id": "pets-red-cardinal",
    "name": "Red Cardinal",
    "category": "pets",
    "value": 215.1418,
    "demand": 1,
    "image": "/items/Red Cardinal.webp"
  },
  {
    "id": "pets-shetland-pony-dark-brown",
    "name": "Shetland Pony Dark Brown",
    "category": "pets",
    "value": 221.7819,
    "demand": 1,
    "image": "/items/Shetland Pony Dark Brown.webp"
  },
  {
    "id": "pets-water-opossum",
    "name": "Water Opossum",
    "category": "pets",
    "value": 107.5724,
    "demand": 1,
    "image": "/items/Water Opossum.webp"
  },
  {
    "id": "pets-irish-elk",
    "name": "Irish Elk",
    "category": "pets",
    "value": 545.8181,
    "demand": 1,
    "image": "/items/Irish Elk.webp"
  },
  {
    "id": "pets-golden-chowchow",
    "name": "Golden Chow-Chow",
    "category": "pets",
    "value": 795.4853,
    "demand": 2,
    "image": "/items/Golden Chow-Chow.webp"
  },
  {
    "id": "pets-tanuki",
    "name": "Tanuki",
    "category": "pets",
    "value": 443.5608,
    "demand": 1,
    "image": "/items/Tanuki.webp"
  },
  {
    "id": "pets-sunglider",
    "name": "Sunglider",
    "category": "pets",
    "value": 525.8978,
    "demand": 1,
    "image": "/items/Sunglider.webp"
  },
  {
    "id": "pets-longhorn-cow",
    "name": "Longhorn Cow",
    "category": "pets",
    "value": 511.2896,
    "demand": 1,
    "image": "/items/Longhorn Cow.webp"
  },
  {
    "id": "pets-partridge",
    "name": "Partridge",
    "category": "pets",
    "value": 508.6336,
    "demand": 1,
    "image": "/items/Partridge.webp"
  },
  {
    "id": "pets-jiggly-jerboa",
    "name": "Jiggly Jerboa",
    "category": "pets",
    "value": 71.7159,
    "demand": 1,
    "image": "/items/Jiggly Jerboa.webp"
  },
  {
    "id": "pets-sasquatch",
    "name": "Sasquatch",
    "category": "pets",
    "value": 435.5927,
    "demand": 1,
    "image": "/items/Sasquatch.webp"
  },
  {
    "id": "pets-winter-fawn",
    "name": "Winter Fawn",
    "category": "pets",
    "value": 248.3422,
    "demand": 1,
    "image": "/items/Winter Fawn.webp"
  },
  {
    "id": "pets-purple-butterfly",
    "name": "Purple Butterfly",
    "category": "pets",
    "value": 833.9978,
    "demand": 2,
    "image": "/items/Purple Butterfly.webp"
  },
  {
    "id": "pets-tree-kangaroo",
    "name": "Tree Kangaroo",
    "category": "pets",
    "value": 823.3737,
    "demand": 2,
    "image": "/items/Tree Kangaroo.webp"
  },
  {
    "id": "pets-walrus",
    "name": "Walrus",
    "category": "pets",
    "value": 244.3582,
    "demand": 1,
    "image": "/items/Walrus.webp"
  },
  {
    "id": "pets-angus-calf",
    "name": "Angus Calf",
    "category": "pets",
    "value": 128.8207,
    "demand": 1,
    "image": "/items/Angus Calf.webp"
  },
  {
    "id": "pets-love-bird",
    "name": "Love Bird",
    "category": "pets",
    "value": 442.2327,
    "demand": 1,
    "image": "/items/Love Bird.webp"
  },
  {
    "id": "pets-puffin",
    "name": "Puffin",
    "category": "pets",
    "value": 863.2142,
    "demand": 2,
    "image": "/items/Puffin.webp"
  },
  {
    "id": "pets-skunk",
    "name": "Skunk",
    "category": "pets",
    "value": 458.169,
    "demand": 1,
    "image": "/items/Skunk.webp"
  },
  {
    "id": "pets-kitty-bat",
    "name": "Kitty Bat",
    "category": "pets",
    "value": 557.7703,
    "demand": 1,
    "image": "/items/Kitty Bat.webp"
  },
  {
    "id": "pets-pangolin",
    "name": "Pangolin",
    "category": "pets",
    "value": 79.684,
    "demand": 1,
    "image": "/items/Pangolin.webp"
  },
  {
    "id": "pets-sado-mole",
    "name": "Sado Mole",
    "category": "pets",
    "value": 166.0052,
    "demand": 1,
    "image": "/items/Sado Mole.webp"
  },
  {
    "id": "pets-gilded-snake",
    "name": "Gilded Snake",
    "category": "pets",
    "value": 674.6358,
    "demand": 1,
    "image": "/items/Gilded Snake.webp"
  },
  {
    "id": "pets-tasmanian-devil",
    "name": "Tasmanian Devil",
    "category": "pets",
    "value": 579.0185,
    "demand": 2,
    "image": "/items/Tasmanian Devil.webp"
  },
  {
    "id": "pets-rock",
    "name": "Rock",
    "category": "pets",
    "value": 354.5836,
    "demand": 1,
    "image": "/items/Rock.webp"
  },
  {
    "id": "pets-christmas-pudding-pup",
    "name": "Christmas Pudding Pup",
    "category": "pets",
    "value": 852.5901,
    "demand": 2,
    "image": "/items/Christmas Pudding Pup.webp"
  },
  {
    "id": "pets-kelp-raider",
    "name": "Kelp Raider",
    "category": "pets",
    "value": 297.4789,
    "demand": 1,
    "image": "/items/Kelp Raider.webp"
  },
  {
    "id": "pets-patchy-bear",
    "name": "Patchy Bear",
    "category": "pets",
    "value": 78.356,
    "demand": 1,
    "image": "/items/Patchy Bear.webp"
  },
  {
    "id": "pets-tegu",
    "name": "Tegu",
    "category": "pets",
    "value": 62.4198,
    "demand": 1,
    "image": "/items/Tegu.webp"
  },
  {
    "id": "pets-ice-cream-hermit-crab",
    "name": "Ice Cream Hermit Crab",
    "category": "pets",
    "value": 828.6858,
    "demand": 2,
    "image": "/items/Ice Cream Hermit Crab.webp"
  },
  {
    "id": "pets-ice-cube",
    "name": "Ice Cube",
    "category": "pets",
    "value": 309.431,
    "demand": 1,
    "image": "/items/Ice Cube.webp"
  },
  {
    "id": "pets-princess-capuchin-monkey",
    "name": "Princess Capuchin Monkey",
    "category": "pets",
    "value": 664.0116,
    "demand": 1,
    "image": "/items/Princess Capuchin Monkey.webp"
  },
  {
    "id": "pets-angus-cow",
    "name": "Angus Cow",
    "category": "pets",
    "value": 47.8116,
    "demand": 1,
    "image": "/items/Angus Cow.webp"
  },
  {
    "id": "pets-moonpine",
    "name": "Moonpine",
    "category": "pets",
    "value": 224.4379,
    "demand": 1,
    "image": "/items/Moonpine.webp"
  },
  {
    "id": "pets-magma-moose",
    "name": "Magma Moose",
    "category": "pets",
    "value": 452.8569,
    "demand": 1,
    "image": "/items/Magma Moose.webp"
  },
  {
    "id": "pets-koala",
    "name": "Koala",
    "category": "pets",
    "value": 523.2418,
    "demand": 1,
    "image": "/items/Koala.webp"
  },
  {
    "id": "pets-piranha",
    "name": "Piranha",
    "category": "pets",
    "value": 144.7569,
    "demand": 1,
    "image": "/items/Piranha.webp"
  },
  {
    "id": "pets-chipmunk",
    "name": "Chipmunk",
    "category": "pets",
    "value": 600.2668,
    "demand": 1,
    "image": "/items/Chipmunk.webp"
  },
  {
    "id": "pets-humbug",
    "name": "Humbug",
    "category": "pets",
    "value": 38.5155,
    "demand": 1,
    "image": "/items/Humbug.webp"
  },
  {
    "id": "pets-cobra",
    "name": "Cobra",
    "category": "pets",
    "value": 620.1871,
    "demand": 1,
    "image": "/items/Cobra.webp"
  },
  {
    "id": "pets-berry-cool-cube",
    "name": "Berry Cool Cube",
    "category": "pets",
    "value": 628.1552,
    "demand": 1,
    "image": "/items/Berry Cool Cube.webp"
  },
  {
    "id": "pets-chickatrice",
    "name": "Chickatrice",
    "category": "pets",
    "value": 249.6702,
    "demand": 1,
    "image": "/items/Chickatrice.webp"
  },
  {
    "id": "pets-winter-buck",
    "name": "Winter Buck",
    "category": "pets",
    "value": 616.203,
    "demand": 1,
    "image": "/items/Winter Buck.webp"
  },
  {
    "id": "pets-dodo",
    "name": "Dodo",
    "category": "pets",
    "value": 766.269,
    "demand": 2,
    "image": "/items/Dodo.webp"
  },
  {
    "id": "pets-royal-capuchin-monkey",
    "name": "Royal Capuchin Monkey",
    "category": "pets",
    "value": 646.7474,
    "demand": 1,
    "image": "/items/Royal Capuchin Monkey.webp"
  },
  {
    "id": "pets-milk-choccybunny",
    "name": "Milk Choccybunny",
    "category": "pets",
    "value": 69.0599,
    "demand": 1,
    "image": "/items/Milk Choccybunny.webp"
  },
  {
    "id": "pets-hare",
    "name": "Hare",
    "category": "pets",
    "value": 847.278,
    "demand": 2,
    "image": "/items/Hare.webp"
  },
  {
    "id": "pets-velociraptor",
    "name": "Velociraptor",
    "category": "pets",
    "value": 172.6452,
    "demand": 1,
    "image": "/items/Velociraptor.webp"
  },
  {
    "id": "pets-arctic-tern",
    "name": "Arctic Tern",
    "category": "pets",
    "value": 270.9185,
    "demand": 1,
    "image": "/items/Arctic Tern.webp"
  },
  {
    "id": "pets-hippo",
    "name": "Hippo",
    "category": "pets",
    "value": 571.0504,
    "demand": 1,
    "image": "/items/Hippo.webp"
  },
  {
    "id": "pets-arctic-fox",
    "name": "Arctic Fox",
    "category": "pets",
    "value": 897.7427,
    "demand": 3,
    "image": "/items/Arctic Fox.webp"
  },
  {
    "id": "pets-steppe-lion",
    "name": "Steppe Lion",
    "category": "pets",
    "value": 379.8159,
    "demand": 1,
    "image": "/items/Steppe Lion.webp"
  },
  {
    "id": "pets-banded-palm-civet",
    "name": "Banded Palm Civet",
    "category": "pets",
    "value": 236.3901,
    "demand": 1,
    "image": "/items/Banded Palm Civet.webp"
  },
  {
    "id": "pets-california-condor",
    "name": "California Condor",
    "category": "pets",
    "value": 86.3241,
    "demand": 1,
    "image": "/items/California Condor.webp"
  },
  {
    "id": "pets-flamingo",
    "name": "Flamingo",
    "category": "pets",
    "value": 950.8634,
    "demand": 3,
    "image": "/items/Flamingo.webp"
  },
  {
    "id": "pets-prismatic-butterfly",
    "name": "Prismatic Butterfly",
    "category": "pets",
    "value": 752.9888,
    "demand": 2,
    "image": "/items/Prismatic Butterfly.webp"
  },
  {
    "id": "pets-business-monkey",
    "name": "Business Monkey",
    "category": "pets",
    "value": 687.9159,
    "demand": 2,
    "image": "/items/Business Monkey.webp"
  },
  {
    "id": "pets-clownfish",
    "name": "Clownfish",
    "category": "pets",
    "value": 509.9616,
    "demand": 1,
    "image": "/items/Clownfish.webp"
  },
  {
    "id": "pets-diamond-king-penguin",
    "name": "Diamond King Penguin",
    "category": "pets",
    "value": 783.5332,
    "demand": 2,
    "image": "/items/Diamond King Penguin.webp"
  },
  {
    "id": "pets-zombie-wolf",
    "name": "Zombie Wolf",
    "category": "pets",
    "value": 710.4922,
    "demand": 2,
    "image": "/items/Zombie Wolf.webp"
  },
  {
    "id": "pets-volcanic-rhino",
    "name": "Volcanic Rhino",
    "category": "pets",
    "value": 703.8522,
    "demand": 2,
    "image": "/items/Volcanic Rhino.webp"
  },
  {
    "id": "pets-lynx",
    "name": "Lynx",
    "category": "pets",
    "value": 660.0276,
    "demand": 2,
    "image": "/items/Lynx.webp"
  },
  {
    "id": "pets-aestus",
    "name": "Aestus",
    "category": "pets",
    "value": 877.8224,
    "demand": 2,
    "image": "/items/Aestus.webp"
  },
  {
    "id": "pets-coconut-friend",
    "name": "Coconut Friend",
    "category": "pets",
    "value": 533.8659,
    "demand": 1,
    "image": "/items/Coconut Friend.webp"
  },
  {
    "id": "pets-ehecatl",
    "name": "Ehecatl",
    "category": "pets",
    "value": 142.1008,
    "demand": 1,
    "image": "/items/Ehecatl.webp"
  },
  {
    "id": "pets-lammergeier",
    "name": "Lammergeier",
    "category": "pets",
    "value": 316.0711,
    "demand": 1,
    "image": "/items/Lammergeier.webp"
  },
  {
    "id": "pets-subzero-scorpion",
    "name": "Subzero Scorpion",
    "category": "pets",
    "value": 387.784,
    "demand": 1,
    "image": "/items/Subzero Scorpion.webp"
  },
  {
    "id": "pets-chick",
    "name": "Chick",
    "category": "pets",
    "value": 483.4013,
    "demand": 1,
    "image": "/items/Chick.webp"
  },
  {
    "id": "pets-goose",
    "name": "Goose",
    "category": "pets",
    "value": 970.7836,
    "demand": 3,
    "image": "/items/Goose.webp"
  },
  {
    "id": "pets-hopbop",
    "name": "Hopbop",
    "category": "pets",
    "value": 119.5246,
    "demand": 1,
    "image": "/items/Hopbop.webp"
  },
  {
    "id": "pets-werewolf",
    "name": "Werewolf",
    "category": "pets",
    "value": 953.5194,
    "demand": 3,
    "image": "/items/Werewolf.webp"
  },
  {
    "id": "pets-rubber-ducky",
    "name": "Rubber Ducky",
    "category": "pets",
    "value": 2.659,
    "demand": 1,
    "image": "/items/Rubber Ducky.webp"
  },
  {
    "id": "pets-flaming-fox",
    "name": "Flaming Fox",
    "category": "pets",
    "value": 822.0457,
    "demand": 2,
    "image": "/items/Flaming Fox.webp"
  },
  {
    "id": "pets-wolf",
    "name": "Wolf",
    "category": "pets",
    "value": 503.3215,
    "demand": 1,
    "image": "/items/Wolf.webp"
  },
  {
    "id": "pets-yellow-butterfly",
    "name": "Yellow Butterfly",
    "category": "pets",
    "value": 335.9914,
    "demand": 1,
    "image": "/items/Yellow Butterfly.webp"
  },
  {
    "id": "pets-summer-walrus",
    "name": "Summer Walrus",
    "category": "pets",
    "value": 500.6655,
    "demand": 1,
    "image": "/items/Summer Walrus.webp"
  },
  {
    "id": "pets-easter-bunny",
    "name": "Easter Bunny",
    "category": "pets",
    "value": 282.8707,
    "demand": 1,
    "image": "/items/Easter Bunny.webp"
  },
  {
    "id": "pets-diamond-mahi-mahi",
    "name": "Diamond Mahi Mahi",
    "category": "pets",
    "value": 195.2215,
    "demand": 1,
    "image": "/items/Diamond Mahi Mahi.webp"
  },
  {
    "id": "pets-oryx",
    "name": "Oryx",
    "category": "pets",
    "value": 294.8228,
    "demand": 1,
    "image": "/items/Oryx.webp"
  },
  {
    "id": "pets-harp-seal",
    "name": "Harp Seal",
    "category": "pets",
    "value": 778.2211,
    "demand": 2,
    "image": "/items/Harp Seal.webp"
  },
  {
    "id": "pets-golden-penguin",
    "name": "Golden Penguin",
    "category": "pets",
    "value": 784.8612,
    "demand": 2,
    "image": "/items/Golden Penguin.webp"
  },
  {
    "id": "pets-starmite",
    "name": "Starmite",
    "category": "pets",
    "value": 296.1508,
    "demand": 1,
    "image": "/items/Starmite.webp"
  },
  {
    "id": "pets-shadow-dragon-ducky",
    "name": "Shadow Dragon Ducky",
    "category": "pets",
    "value": 598.9388,
    "demand": 2,
    "image": "/items/Shadow Dragon Ducky.webp"
  },
  {
    "id": "pets-shiba-inu",
    "name": "Shiba Inu",
    "category": "pets",
    "value": 102.2603,
    "demand": 1,
    "image": "/items/Shiba Inu.webp"
  },
  {
    "id": "pets-brown-bear",
    "name": "Brown Bear",
    "category": "pets",
    "value": 868.5263,
    "demand": 2,
    "image": "/items/Brown Bear.webp"
  },
  {
    "id": "pets-scarlet-butterfly",
    "name": "Scarlet Butterfly",
    "category": "pets",
    "value": 499.3375,
    "demand": 1,
    "image": "/items/Scarlet Butterfly.webp"
  },
  {
    "id": "pets-mini-schnauzer",
    "name": "Mini Schnauzer",
    "category": "pets",
    "value": 735.7246,
    "demand": 2,
    "image": "/items/Mini Schnauzer.webp"
  },
  {
    "id": "pets-blue-betta-fish",
    "name": "Blue Betta Fish",
    "category": "pets",
    "value": 652.0595,
    "demand": 1,
    "image": "/items/Blue Betta Fish.webp"
  },
  {
    "id": "pets-apple-owl",
    "name": "Apple Owl",
    "category": "pets",
    "value": 745.0207,
    "demand": 2,
    "image": "/items/Apple Owl.webp"
  },
  {
    "id": "pets-frozen-penguin",
    "name": "Frozen Penguin",
    "category": "pets",
    "value": 205.8457,
    "demand": 1,
    "image": "/items/Frozen Penguin.webp"
  },
  {
    "id": "pets-yeti",
    "name": "Yeti",
    "category": "pets",
    "value": 665.3396,
    "demand": 2,
    "image": "/items/Yeti.webp"
  },
  {
    "id": "pets-water-moon-bear",
    "name": "Water Moon Bear",
    "category": "pets",
    "value": 496.6815,
    "demand": 1,
    "image": "/items/Water Moon Bear.webp"
  },
  {
    "id": "pets-classic-teapot",
    "name": "Classic Teapot",
    "category": "pets",
    "value": 207.1737,
    "demand": 1,
    "image": "/items/Classic Teapot.webp"
  },
  {
    "id": "pets-kakapo",
    "name": "Kakapo",
    "category": "pets",
    "value": 83.6681,
    "demand": 1,
    "image": "/items/Kakapo.webp"
  },
  {
    "id": "pets-swan",
    "name": "Swan",
    "category": "pets",
    "value": 800.7974,
    "demand": 2,
    "image": "/items/Swan.webp"
  },
  {
    "id": "pets-red-dutch-guinea-pig",
    "name": "Red Dutch Guinea Pig",
    "category": "pets",
    "value": 918.9909,
    "demand": 2,
    "image": "/items/Red Dutch Guinea Pig.webp"
  },
  {
    "id": "pets-naughty-mistletroll",
    "name": "Naughty Mistletroll",
    "category": "pets",
    "value": 760.9569,
    "demand": 2,
    "image": "/items/Naughty Mistletroll.webp"
  },
  {
    "id": "pets-gaelic-fae",
    "name": "Gaelic Fae",
    "category": "pets",
    "value": 714.4763,
    "demand": 2,
    "image": "/items/Gaelic Fae.webp"
  },
  {
    "id": "pets-halloween-black-mummy-cat",
    "name": "Halloween Black Mummy Cat",
    "category": "pets",
    "value": 228.422,
    "demand": 1,
    "image": "/items/Halloween Black Mummy Cat.webp"
  },
  {
    "id": "pets-black-kite",
    "name": "Black Kite",
    "category": "pets",
    "value": 337.3194,
    "demand": 1,
    "image": "/items/Black Kite.webp"
  },
  {
    "id": "pets-turtle",
    "name": "Turtle",
    "category": "pets",
    "value": 956.1754,
    "demand": 3,
    "image": "/items/Turtle.webp"
  },
  {
    "id": "pets-diamond-dragon",
    "name": "Diamond Dragon",
    "category": "pets",
    "value": 351.9276,
    "demand": 1,
    "image": "/items/Diamond Dragon.webp"
  },
  {
    "id": "pets-nessie",
    "name": "Nessie",
    "category": "pets",
    "value": 888.4465,
    "demand": 2,
    "image": "/items/Nessie.webp"
  },
  {
    "id": "pets-shadow-dragon",
    "name": "Shadow Dragon",
    "category": "pets",
    "value": 1000.0,
    "demand": 3,
    "image": "/items/Shadow Dragon.webp"
  },
  {
    "id": "pets-phantom-dragon",
    "name": "Phantom Dragon",
    "category": "pets",
    "value": 904.3828,
    "demand": 2,
    "image": "/items/Phantom Dragon.webp"
  },
  {
    "id": "pets-rice-cake-rabbit",
    "name": "Rice Cake Rabbit",
    "category": "pets",
    "value": 450.2009,
    "demand": 1,
    "image": "/items/Rice Cake Rabbit.webp"
  },
  {
    "id": "pets-pig",
    "name": "Pig",
    "category": "pets",
    "value": 912.3509,
    "demand": 3,
    "image": "/items/Pig.webp"
  },
  {
    "id": "pets-pineapple-owl",
    "name": "Pineapple Owl",
    "category": "pets",
    "value": 843.294,
    "demand": 2,
    "image": "/items/Pineapple Owl.webp"
  },
  {
    "id": "pets-happy-duckling",
    "name": "Happy Duckling",
    "category": "pets",
    "value": 610.8909,
    "demand": 2,
    "image": "/items/Happy Duckling.webp"
  },
  {
    "id": "pets-tree-sasquatch",
    "name": "Tree Sasquatch",
    "category": "pets",
    "value": 108.9004,
    "demand": 1,
    "image": "/items/Tree Sasquatch.webp"
  },
  {
    "id": "pets-maine-coon",
    "name": "Maine Coon",
    "category": "pets",
    "value": 318.7271,
    "demand": 1,
    "image": "/items/Maine Coon.webp"
  },
  {
    "id": "pets-otter",
    "name": "Otter",
    "category": "pets",
    "value": 75.7,
    "demand": 1,
    "image": "/items/Otter.webp"
  },
  {
    "id": "pets-leopard-cat",
    "name": "Leopard Cat",
    "category": "pets",
    "value": 528.5539,
    "demand": 1,
    "image": "/items/Leopard Cat.webp"
  },
  {
    "id": "pets-woolly-mammoth",
    "name": "Woolly Mammoth",
    "category": "pets",
    "value": 342.6315,
    "demand": 1,
    "image": "/items/Woolly Mammoth.webp"
  },
  {
    "id": "pets-capybara",
    "name": "Capybara",
    "category": "pets",
    "value": 731.7405,
    "demand": 2,
    "image": "/items/Capybara.webp"
  },
  {
    "id": "pets-halloween-evil-dachshund",
    "name": "Halloween Evil Dachshund",
    "category": "pets",
    "value": 517.9297,
    "demand": 1,
    "image": "/items/Halloween Evil Dachshund.webp"
  },
  {
    "id": "pets-old-king-coal",
    "name": "Old King Coal",
    "category": "pets",
    "value": 268.2625,
    "demand": 1,
    "image": "/items/Old King Coal.webp"
  },
  {
    "id": "pets-ninja-monkey",
    "name": "Ninja Monkey",
    "category": "pets",
    "value": 790.1733,
    "demand": 2,
    "image": "/items/Ninja Monkey.webp"
  },
  {
    "id": "pets-beaver",
    "name": "Beaver",
    "category": "pets",
    "value": 90.3082,
    "demand": 1,
    "image": "/items/Beaver.webp"
  },
  {
    "id": "pets-evil-rock",
    "name": "Evil Rock",
    "category": "pets",
    "value": 657.3715,
    "demand": 2,
    "image": "/items/Evil Rock.webp"
  },
  {
    "id": "pets-emu",
    "name": "Emu",
    "category": "pets",
    "value": 350.5996,
    "demand": 1,
    "image": "/items/Emu.webp"
  },
  {
    "id": "pets-dire-stag",
    "name": "Dire Stag",
    "category": "pets",
    "value": 749.0047,
    "demand": 2,
    "image": "/items/Dire Stag.webp"
  },
  {
    "id": "pets-undead-jousting-horse",
    "name": "Undead Jousting Horse",
    "category": "pets",
    "value": 978.7517,
    "demand": 3,
    "image": "/items/Undead Jousting Horse.webp"
  },
  {
    "id": "pets-tarsier",
    "name": "Tarsier",
    "category": "pets",
    "value": 583.0026,
    "demand": 1,
    "image": "/items/Tarsier.webp"
  },
  {
    "id": "pets-gibbon",
    "name": "Gibbon",
    "category": "pets",
    "value": 152.725,
    "demand": 1,
    "image": "/items/Gibbon.webp"
  },
  {
    "id": "pets-velocirooster",
    "name": "Velocirooster",
    "category": "pets",
    "value": 892.4306,
    "demand": 2,
    "image": "/items/Velocirooster.webp"
  },
  {
    "id": "pets-red-sand-dollar",
    "name": "Red Sand Dollar",
    "category": "pets",
    "value": 725.1004,
    "demand": 2,
    "image": "/items/Red Sand Dollar.webp"
  },
  {
    "id": "pets-camel",
    "name": "Camel",
    "category": "pets",
    "value": 57.1077,
    "demand": 1,
    "image": "/items/Camel.webp"
  },
  {
    "id": "pets-mechapup",
    "name": "Mechapup",
    "category": "pets",
    "value": 901.7267,
    "demand": 2,
    "image": "/items/Mechapup.webp"
  },
  {
    "id": "pets-rock-pigeon",
    "name": "Rock Pigeon",
    "category": "pets",
    "value": 361.2237,
    "demand": 1,
    "image": "/items/Rock Pigeon.webp"
  },
  {
    "id": "pets-criosphinx",
    "name": "Criosphinx",
    "category": "pets",
    "value": 606.9069,
    "demand": 1,
    "image": "/items/Criosphinx.webp"
  },
  {
    "id": "pets-flying-fish",
    "name": "Flying Fish",
    "category": "pets",
    "value": 104.9164,
    "demand": 1,
    "image": "/items/Flying Fish.webp"
  },
  {
    "id": "pets-ant",
    "name": "Ant",
    "category": "pets",
    "value": 22.5793,
    "demand": 1,
    "image": "/items/Ant.webp"
  },
  {
    "id": "pets-bandicoot",
    "name": "Bandicoot",
    "category": "pets",
    "value": 147.4129,
    "demand": 1,
    "image": "/items/Bandicoot.webp"
  },
  {
    "id": "pets-clementine-owl",
    "name": "Clementine Owl",
    "category": "pets",
    "value": 414.3444,
    "demand": 1,
    "image": "/items/Clementine Owl.webp"
  },
  {
    "id": "pets-golden-unicorn",
    "name": "Golden Unicorn",
    "category": "pets",
    "value": 306.775,
    "demand": 1,
    "image": "/items/Golden Unicorn.webp"
  },
  {
    "id": "pets-maleo-bird",
    "name": "Maleo Bird",
    "category": "pets",
    "value": 169.9892,
    "demand": 1,
    "image": "/items/Maleo Bird.webp"
  },
  {
    "id": "pets-aye-aye",
    "name": "Aye Aye",
    "category": "pets",
    "value": 63.7478,
    "demand": 1,
    "image": "/items/Aye Aye.webp"
  },
  {
    "id": "pets-icy-porcupine",
    "name": "Icy Porcupine",
    "category": "pets",
    "value": 197.8776,
    "demand": 1,
    "image": "/items/Icy Porcupine.webp"
  },
  {
    "id": "pets-marabou-stork",
    "name": "Marabou Stork",
    "category": "pets",
    "value": 281.5427,
    "demand": 1,
    "image": "/items/Marabou Stork.webp"
  },
  {
    "id": "pets-urchin",
    "name": "Urchin",
    "category": "pets",
    "value": 289.5108,
    "demand": 1,
    "image": "/items/Urchin.webp"
  },
  {
    "id": "pets-black-moon-bear",
    "name": "Black Moon Bear",
    "category": "pets",
    "value": 219.1258,
    "demand": 1,
    "image": "/items/Black Moon Bear.webp"
  },
  {
    "id": "pets-strawberry-shortcake-ducky",
    "name": "Strawberry Shortcake Ducky",
    "category": "pets",
    "value": 451.5289,
    "demand": 1,
    "image": "/items/Strawberry Shortcake Ducky.webp"
  },
  {
    "id": "pets-evil-chickatrice",
    "name": "Evil Chickatrice",
    "category": "pets",
    "value": 539.178,
    "demand": 1,
    "image": "/items/Evil Chickatrice.webp"
  },
  {
    "id": "pets-eggnog-hare",
    "name": "Eggnog Hare",
    "category": "pets",
    "value": 395.7521,
    "demand": 1,
    "image": "/items/Eggnog Hare.webp"
  },
  {
    "id": "pets-mochi-meow",
    "name": "Mochi Meow",
    "category": "pets",
    "value": 126.1646,
    "demand": 1,
    "image": "/items/Mochi Meow.webp"
  },
  {
    "id": "pets-gargoyle",
    "name": "Gargoyle",
    "category": "pets",
    "value": 694.556,
    "demand": 1,
    "image": "/items/Gargoyle.webp"
  },
  {
    "id": "pets-shetland-pony-white",
    "name": "Shetland Pony White",
    "category": "pets",
    "value": 399.7362,
    "demand": 1,
    "image": "/items/Shetland Pony White.webp"
  },
  {
    "id": "pets-kiwi",
    "name": "Kiwi",
    "category": "pets",
    "value": 726.4284,
    "demand": 2,
    "image": "/items/Kiwi.webp"
  },
  {
    "id": "pets-snowball-pet",
    "name": "Snowball Pet",
    "category": "pets",
    "value": 641.4353,
    "demand": 2,
    "image": "/items/Snowball Pet.webp"
  },
  {
    "id": "pets-snow-monkey",
    "name": "Snow Monkey",
    "category": "pets",
    "value": 751.6608,
    "demand": 2,
    "image": "/items/Snow Monkey.webp"
  },
  {
    "id": "pets-burning-bunny",
    "name": "Burning Bunny",
    "category": "pets",
    "value": 515.2737,
    "demand": 1,
    "image": "/items/Burning Bunny.webp"
  },
  {
    "id": "pets-dingo",
    "name": "Dingo",
    "category": "pets",
    "value": 187.2534,
    "demand": 1,
    "image": "/items/Dingo.webp"
  },
  {
    "id": "pets-inmate-capuchin-monkey",
    "name": "Inmate Capuchin Monkey",
    "category": "pets",
    "value": 494.0254,
    "demand": 1,
    "image": "/items/Inmate Capuchin Monkey.webp"
  },
  {
    "id": "pets-puma",
    "name": "Puma",
    "category": "pets",
    "value": 59.7638,
    "demand": 1,
    "image": "/items/Puma.webp"
  },
  {
    "id": "pets-rhino-beetle",
    "name": "Rhino Beetle",
    "category": "pets",
    "value": 200.5336,
    "demand": 1,
    "image": "/items/Rhino Beetle.webp"
  },
  {
    "id": "pets-donkey",
    "name": "Donkey",
    "category": "pets",
    "value": 45.1556,
    "demand": 1,
    "image": "/items/Donkey.webp"
  },
  {
    "id": "pets-glyptodon-ducky",
    "name": "Glyptodon Ducky",
    "category": "pets",
    "value": 25.2353,
    "demand": 1,
    "image": "/items/Glyptodon Ducky.webp"
  },
  {
    "id": "pets-bald-eagle",
    "name": "Bald Eagle",
    "category": "pets",
    "value": 905.7108,
    "demand": 2,
    "image": "/items/Bald Eagle.webp"
  },
  {
    "id": "pets-pumpkin-friend",
    "name": "Pumpkin Friend",
    "category": "pets",
    "value": 593.6267,
    "demand": 2,
    "image": "/items/Pumpkin Friend.webp"
  },
  {
    "id": "pets-possum",
    "name": "Possum",
    "category": "pets",
    "value": 373.1759,
    "demand": 1,
    "image": "/items/Possum.webp"
  },
  {
    "id": "pets-gold-mahi-mahi",
    "name": "Gold Mahi Mahi",
    "category": "pets",
    "value": 1.331,
    "demand": 1,
    "image": "/items/Gold Mahi Mahi.webp"
  },
  {
    "id": "pets-halloween-golden-mummy-cat",
    "name": "Halloween Golden Mummy Cat",
    "category": "pets",
    "value": 551.1302,
    "demand": 1,
    "image": "/items/Halloween Golden Mummy Cat.webp"
  },
  {
    "id": "pets-therapy-dog",
    "name": "Therapy Dog",
    "category": "pets",
    "value": 480.7452,
    "demand": 1,
    "image": "/items/Therapy Dog.webp"
  },
  {
    "id": "pets-feesh",
    "name": "Feesh",
    "category": "pets",
    "value": 516.6017,
    "demand": 1,
    "image": "/items/Feesh.webp"
  },
  {
    "id": "pets-kelp-captain",
    "name": "Kelp Captain",
    "category": "pets",
    "value": 738.3806,
    "demand": 1,
    "image": "/items/Kelp Captain.webp"
  },
  {
    "id": "pets-island-tarsier",
    "name": "Island Tarsier",
    "category": "pets",
    "value": 135.4608,
    "demand": 1,
    "image": "/items/Island Tarsier.webp"
  },
  {
    "id": "pets-mahi-mahi",
    "name": "Mahi Mahi",
    "category": "pets",
    "value": 9.2991,
    "demand": 1,
    "image": "/items/Mahi Mahi.webp"
  },
  {
    "id": "pets-zombie-buffalo",
    "name": "Zombie Buffalo",
    "category": "pets",
    "value": 922.975,
    "demand": 2,
    "image": "/items/Zombie Buffalo.webp"
  },
  {
    "id": "pets-greenchested-pheasant",
    "name": "Green-Chested Pheasant",
    "category": "pets",
    "value": 633.4672,
    "demand": 1,
    "image": "/items/Green-Chested Pheasant.webp"
  },
  {
    "id": "pets-clubtail-dragonfly",
    "name": "Clubtail Dragonfly",
    "category": "pets",
    "value": 17.2672,
    "demand": 1,
    "image": "/items/Clubtail Dragonfly.webp"
  },
  {
    "id": "pets-sea-skeleton-panda",
    "name": "Sea Skeleton Panda",
    "category": "pets",
    "value": 196.5496,
    "demand": 1,
    "image": "/items/Sea Skeleton Panda.webp"
  },
  {
    "id": "pets-black-widow",
    "name": "Black Widow",
    "category": "pets",
    "value": 690.572,
    "demand": 2,
    "image": "/items/Black Widow.webp"
  },
  {
    "id": "pets-glyptodon",
    "name": "Glyptodon",
    "category": "pets",
    "value": 495.3534,
    "demand": 1,
    "image": "/items/Glyptodon.webp"
  },
  {
    "id": "pets-rabbit",
    "name": "Rabbit",
    "category": "pets",
    "value": 61.0918,
    "demand": 1,
    "image": "/items/Rabbit.webp"
  },
  {
    "id": "pets-diamond-ladybug",
    "name": "Diamond Ladybug",
    "category": "pets",
    "value": 775.5651,
    "demand": 2,
    "image": "/items/Diamond Ladybug.webp"
  },
  {
    "id": "pets-yule-log-dog",
    "name": "Yule Log Dog",
    "category": "pets",
    "value": 747.6767,
    "demand": 2,
    "image": "/items/Yule Log Dog.webp"
  },
  {
    "id": "pets-latte-kitsune",
    "name": "Latte Kitsune",
    "category": "pets",
    "value": 804.7815,
    "demand": 2,
    "image": "/items/Latte Kitsune.webp"
  },
  {
    "id": "pets-vermilion-butterfly",
    "name": "Vermilion Butterfly",
    "category": "pets",
    "value": 536.522,
    "demand": 1,
    "image": "/items/Vermilion Butterfly.webp"
  },
  {
    "id": "pets-stegosaurus",
    "name": "Stegosaurus",
    "category": "pets",
    "value": 266.9345,
    "demand": 1,
    "image": "/items/Stegosaurus.webp"
  },
  {
    "id": "pets-stingray",
    "name": "Stingray",
    "category": "pets",
    "value": 168.6612,
    "demand": 1,
    "image": "/items/Stingray.webp"
  },
  {
    "id": "pets-japanese-snow-fairy",
    "name": "Japanese Snow Fairy",
    "category": "pets",
    "value": 43.8276,
    "demand": 1,
    "image": "/items/Japanese Snow Fairy.webp"
  },
  {
    "id": "pets-dancing-dragon",
    "name": "Dancing Dragon",
    "category": "pets",
    "value": 837.9819,
    "demand": 2,
    "image": "/items/Dancing Dragon.webp"
  },
  {
    "id": "pets-fossa",
    "name": "Fossa",
    "category": "pets",
    "value": 199.2056,
    "demand": 1,
    "image": "/items/Fossa.webp"
  },
  {
    "id": "pets-albino-gorilla",
    "name": "Albino Gorilla",
    "category": "pets",
    "value": 814.0776,
    "demand": 2,
    "image": "/items/Albino Gorilla.webp"
  },
  {
    "id": "pets-crab",
    "name": "Crab",
    "category": "pets",
    "value": 237.7181,
    "demand": 1,
    "image": "/items/Crab.webp"
  },
  {
    "id": "pets-alley-cat",
    "name": "Alley Cat",
    "category": "pets",
    "value": 841.9659,
    "demand": 2,
    "image": "/items/Alley Cat.webp"
  },
  {
    "id": "pets-red-squirrel",
    "name": "Red Squirrel",
    "category": "pets",
    "value": 624.1711,
    "demand": 2,
    "image": "/items/Red Squirrel.webp"
  },
  {
    "id": "pets-bali-starling",
    "name": "Bali Starling",
    "category": "pets",
    "value": 158.0371,
    "demand": 1,
    "image": "/items/Bali Starling.webp"
  },
  {
    "id": "pets-giant-panda",
    "name": "Giant Panda",
    "category": "pets",
    "value": 990.7039,
    "demand": 3,
    "image": "/items/Giant Panda.webp"
  },
  {
    "id": "pets-ash-zebra",
    "name": "Ash Zebra",
    "category": "pets",
    "value": 604.2509,
    "demand": 1,
    "image": "/items/Ash Zebra.webp"
  },
  {
    "id": "pets-cockroach",
    "name": "Cockroach",
    "category": "pets",
    "value": 245.6862,
    "demand": 1,
    "image": "/items/Cockroach.webp"
  },
  {
    "id": "pets-blue-butterfly",
    "name": "Blue Butterfly",
    "category": "pets",
    "value": 111.5565,
    "demand": 1,
    "image": "/items/Blue Butterfly.webp"
  },
  {
    "id": "pets-sloth",
    "name": "Sloth",
    "category": "pets",
    "value": 459.497,
    "demand": 1,
    "image": "/items/Sloth.webp"
  },
  {
    "id": "pets-amami-rabbit",
    "name": "Amami Rabbit",
    "category": "pets",
    "value": 621.5151,
    "demand": 2,
    "image": "/items/Amami Rabbit.webp"
  },
  {
    "id": "pets-shih-tzu",
    "name": "Shih Tzu",
    "category": "pets",
    "value": 54.4517,
    "demand": 1,
    "image": "/items/Shih Tzu.webp"
  },
  {
    "id": "pets-glormy-leo",
    "name": "Glormy Leo",
    "category": "pets",
    "value": 835.3259,
    "demand": 2,
    "image": "/items/Glormy Leo.webp"
  },
  {
    "id": "pets-deathstalker-scorpion",
    "name": "Deathstalker Scorpion",
    "category": "pets",
    "value": 428.9526,
    "demand": 1,
    "image": "/items/Deathstalker Scorpion.webp"
  },
  {
    "id": "pets-cerberus",
    "name": "Cerberus",
    "category": "pets",
    "value": 831.3418,
    "demand": 3,
    "image": "/items/Cerberus.webp"
  },
  {
    "id": "pets-dire-wolf",
    "name": "Dire Wolf",
    "category": "pets",
    "value": 212.4858,
    "demand": 1,
    "image": "/items/Dire Wolf.webp"
  },
  {
    "id": "pets-glacier-kitsune",
    "name": "Glacier Kitsune",
    "category": "pets",
    "value": 853.9181,
    "demand": 2,
    "image": "/items/Glacier Kitsune.webp"
  },
  {
    "id": "pets-wooly-rhino",
    "name": "Wooly Rhino",
    "category": "pets",
    "value": 679.9478,
    "demand": 2,
    "image": "/items/Wooly Rhino.webp"
  },
  {
    "id": "pets-slug",
    "name": "Slug",
    "category": "pets",
    "value": 292.1668,
    "demand": 1,
    "image": "/items/Slug.webp"
  },
  {
    "id": "pets-bison",
    "name": "Bison",
    "category": "pets",
    "value": 33.2034,
    "demand": 1,
    "image": "/items/Bison.webp"
  },
  {
    "id": "pets-shetland-pony-light-brown",
    "name": "Shetland Pony Light Brown",
    "category": "pets",
    "value": 697.2121,
    "demand": 1,
    "image": "/items/Shetland Pony Light Brown.webp"
  },
  {
    "id": "pets-sheepdog-ducky",
    "name": "Sheepdog Ducky",
    "category": "pets",
    "value": 11.9552,
    "demand": 1,
    "image": "/items/Sheepdog Ducky.webp"
  },
  {
    "id": "pets-skelerex",
    "name": "Skele-Rex",
    "category": "pets",
    "value": 770.253,
    "demand": 2,
    "image": "/items/Skele-Rex.webp"
  },
  {
    "id": "pets-manekineko",
    "name": "Maneki-Neko",
    "category": "pets",
    "value": 642.7634,
    "demand": 1,
    "image": "/items/Maneki-Neko.webp"
  },
  {
    "id": "pets-griffin",
    "name": "Griffin",
    "category": "pets",
    "value": 567.0664,
    "demand": 1,
    "image": "/items/Griffin.webp"
  },
  {
    "id": "pets-rooster",
    "name": "Rooster",
    "category": "pets",
    "value": 484.7293,
    "demand": 1,
    "image": "/items/Rooster.webp"
  },
  {
    "id": "pets-dalmatian",
    "name": "Dalmatian",
    "category": "pets",
    "value": 977.4237,
    "demand": 3,
    "image": "/items/Dalmatian.webp"
  },
  {
    "id": "pets-yellowlipped-sea-krait",
    "name": "Yellow-Lipped Sea Krait",
    "category": "pets",
    "value": 216.4698,
    "demand": 1,
    "image": "/items/Yellow-Lipped Sea Krait.webp"
  },
  {
    "id": "pets-grim-dragon",
    "name": "Grim Dragon",
    "category": "pets",
    "value": 954.8474,
    "demand": 3,
    "image": "/items/Grim Dragon.webp"
  },
  {
    "id": "pets-ringtailed-lemur",
    "name": "Ring-Tailed Lemur",
    "category": "pets",
    "value": 880.4784,
    "demand": 2,
    "image": "/items/Ring-Tailed Lemur.webp"
  },
  {
    "id": "pets-llama",
    "name": "Llama",
    "category": "pets",
    "value": 818.0616,
    "demand": 2,
    "image": "/items/Llama.webp"
  },
  {
    "id": "pets-flaming-zebra",
    "name": "Flaming Zebra",
    "category": "pets",
    "value": 601.5948,
    "demand": 1,
    "image": "/items/Flaming Zebra.webp"
  },
  {
    "id": "pets-diamond-hummingbird",
    "name": "Diamond Hummingbird",
    "category": "pets",
    "value": 827.3578,
    "demand": 2,
    "image": "/items/Diamond Hummingbird.webp"
  },
  {
    "id": "pets-pupcake",
    "name": "Pupcake",
    "category": "pets",
    "value": 609.5629,
    "demand": 2,
    "image": "/items/Pupcake.webp"
  },
  {
    "id": "pets-elasmosaurus",
    "name": "Elasmosaurus",
    "category": "pets",
    "value": 553.7862,
    "demand": 1,
    "image": "/items/Elasmosaurus.webp"
  },
  {
    "id": "pets-balloon-unicorn",
    "name": "Balloon Unicorn",
    "category": "pets",
    "value": 992.0319,
    "demand": 3,
    "image": "/items/Balloon Unicorn.webp"
  },
  {
    "id": "pets-headless-horse",
    "name": "Headless Horse",
    "category": "pets",
    "value": 630.8112,
    "demand": 2,
    "image": "/items/Headless Horse.webp"
  },
  {
    "id": "pets-dolphin",
    "name": "Dolphin",
    "category": "pets",
    "value": 298.8069,
    "demand": 1,
    "image": "/items/Dolphin.webp"
  },
  {
    "id": "pets-binturong",
    "name": "Binturong",
    "category": "pets",
    "value": 683.9319,
    "demand": 2,
    "image": "/items/Binturong.webp"
  },
  {
    "id": "pets-hyena",
    "name": "Hyena",
    "category": "pets",
    "value": 860.5582,
    "demand": 2,
    "image": "/items/Hyena.webp"
  },
  {
    "id": "pets-zodiac-minion-chick",
    "name": "Zodiac Minion Chick",
    "category": "pets",
    "value": 468.7931,
    "demand": 1,
    "image": "/items/Zodiac Minion Chick.webp"
  },
  {
    "id": "pets-panda",
    "name": "Panda",
    "category": "pets",
    "value": 699.8681,
    "demand": 2,
    "image": "/items/Panda.webp"
  },
  {
    "id": "pets-glormy-dolphin",
    "name": "Glormy Dolphin",
    "category": "pets",
    "value": 581.6746,
    "demand": 1,
    "image": "/items/Glormy Dolphin.webp"
  },
  {
    "id": "pets-hydra",
    "name": "Hydra",
    "category": "pets",
    "value": 378.4879,
    "demand": 1,
    "image": "/items/Hydra.webp"
  },
  {
    "id": "pets-bat",
    "name": "Bat",
    "category": "pets",
    "value": 146.0849,
    "demand": 1,
    "image": "/items/Bat.webp"
  },
  {
    "id": "pets-diamond-griffin",
    "name": "Diamond Griffin",
    "category": "pets",
    "value": 304.119,
    "demand": 1,
    "image": "/items/Diamond Griffin.webp"
  },
  {
    "id": "pets-magma-snail",
    "name": "Magma Snail",
    "category": "pets",
    "value": 431.6086,
    "demand": 1,
    "image": "/items/Magma Snail.webp"
  },
  {
    "id": "pets-dark-choccybunny",
    "name": "Dark Choccybunny",
    "category": "pets",
    "value": 179.2853,
    "demand": 1,
    "image": "/items/Dark Choccybunny.webp"
  },
  {
    "id": "pets-dog",
    "name": "Dog",
    "category": "pets",
    "value": 70.3879,
    "demand": 1,
    "image": "/items/Dog.webp"
  },
  {
    "id": "pets-blue-jay",
    "name": "Blue Jay",
    "category": "pets",
    "value": 285.5267,
    "demand": 1,
    "image": "/items/Blue Jay.webp"
  },
  {
    "id": "pets-ice-wolf",
    "name": "Ice Wolf",
    "category": "pets",
    "value": 776.8931,
    "demand": 2,
    "image": "/items/Ice Wolf.webp"
  },
  {
    "id": "pets-ice-moth-dragon",
    "name": "Ice Moth Dragon",
    "category": "pets",
    "value": 565.7384,
    "demand": 1,
    "image": "/items/Ice Moth Dragon.webp"
  },
  {
    "id": "pets-toasty-red-panda",
    "name": "Toasty Red Panda",
    "category": "pets",
    "value": 568.3944,
    "demand": 1,
    "image": "/items/Toasty Red Panda.webp"
  },
  {
    "id": "pets-frost-fury",
    "name": "Frost Fury",
    "category": "pets",
    "value": 889.7746,
    "demand": 2,
    "image": "/items/Frost Fury.webp"
  },
  {
    "id": "pets-sprout-snail",
    "name": "Sprout Snail",
    "category": "pets",
    "value": 498.0095,
    "demand": 1,
    "image": "/items/Sprout Snail.webp"
  },
  {
    "id": "pets-peacock",
    "name": "Peacock",
    "category": "pets",
    "value": 718.4603,
    "demand": 2,
    "image": "/items/Peacock.webp"
  },
  {
    "id": "pets-garden-snake",
    "name": "Garden Snake",
    "category": "pets",
    "value": 171.3172,
    "demand": 1,
    "image": "/items/Garden Snake.webp"
  },
  {
    "id": "pets-floral-eggy",
    "name": "Floral Eggy",
    "category": "pets",
    "value": 252.3263,
    "demand": 1,
    "image": "/items/Floral Eggy.webp"
  },
  {
    "id": "pets-chef-gorilla",
    "name": "Chef Gorilla",
    "category": "pets",
    "value": 743.6927,
    "demand": 2,
    "image": "/items/Chef Gorilla.webp"
  },
  {
    "id": "pets-snorgle",
    "name": "Snorgle",
    "category": "pets",
    "value": 164.6771,
    "demand": 1,
    "image": "/items/Snorgle.webp"
  },
  {
    "id": "pets-mosquito",
    "name": "Mosquito",
    "category": "pets",
    "value": 131.4767,
    "demand": 1,
    "image": "/items/Mosquito.webp"
  },
  {
    "id": "pets-violet-butterfly",
    "name": "Violet Butterfly",
    "category": "pets",
    "value": 719.7884,
    "demand": 2,
    "image": "/items/Violet Butterfly.webp"
  },
  {
    "id": "pets-st-bernard",
    "name": "St Bernard",
    "category": "pets",
    "value": 501.9935,
    "demand": 1,
    "image": "/items/St Bernard.webp"
  },
  {
    "id": "pets-hippogriff",
    "name": "Hippogriff",
    "category": "pets",
    "value": 666.6677,
    "demand": 1,
    "image": "/items/Hippogriff.webp"
  },
  {
    "id": "pets-lion",
    "name": "Lion",
    "category": "pets",
    "value": 940.2392,
    "demand": 3,
    "image": "/items/Lion.webp"
  },
  {
    "id": "pets-chestnut-glyptodon",
    "name": "Chestnut Glyptodon",
    "category": "pets",
    "value": 10.6271,
    "demand": 1,
    "image": "/items/Chestnut Glyptodon.webp"
  },
  {
    "id": "pets-ancient-dragon",
    "name": "Ancient Dragon",
    "category": "pets",
    "value": 184.5974,
    "demand": 1,
    "image": "/items/Ancient Dragon.webp"
  },
  {
    "id": "pets-groundhog",
    "name": "Groundhog",
    "category": "pets",
    "value": 869.8543,
    "demand": 2,
    "image": "/items/Groundhog.webp"
  },
  {
    "id": "pets-golden-king-penguin",
    "name": "Golden King Penguin",
    "category": "pets",
    "value": 644.0914,
    "demand": 1,
    "image": "/items/Golden King Penguin.webp"
  },
  {
    "id": "pets-candicorn",
    "name": "Candicorn",
    "category": "pets",
    "value": 924.303,
    "demand": 3,
    "image": "/items/Candicorn.webp"
  },
  {
    "id": "pets-kangaroo",
    "name": "Kangaroo",
    "category": "pets",
    "value": 946.8793,
    "demand": 3,
    "image": "/items/Kangaroo.webp"
  },
  {
    "id": "pets-monkey-king",
    "name": "Monkey King",
    "category": "pets",
    "value": 962.8155,
    "demand": 2,
    "image": "/items/Monkey King.webp"
  },
  {
    "id": "pets-red-panda",
    "name": "Red Panda",
    "category": "pets",
    "value": 106.2444,
    "demand": 1,
    "image": "/items/Red Panda.webp"
  },
  {
    "id": "pets-brachiosaurus",
    "name": "Brachiosaurus",
    "category": "pets",
    "value": 177.9573,
    "demand": 1,
    "image": "/items/Brachiosaurus.webp"
  },
  {
    "id": "pets-cryptid",
    "name": "Cryptid",
    "category": "pets",
    "value": 988.0478,
    "demand": 3,
    "image": "/items/Cryptid.webp"
  },
  {
    "id": "pets-golden-tortoise-beetle",
    "name": "Golden Tortoise Beetle",
    "category": "pets",
    "value": 560.4263,
    "demand": 1,
    "image": "/items/Golden Tortoise Beetle.webp"
  },
  {
    "id": "pets-king-bee",
    "name": "King Bee",
    "category": "pets",
    "value": 654.7155,
    "demand": 2,
    "image": "/items/King Bee.webp"
  },
  {
    "id": "pets-sugar-axolotl",
    "name": "Sugar Axolotl",
    "category": "pets",
    "value": 911.0228,
    "demand": 2,
    "image": "/items/Sugar Axolotl.webp"
  },
  {
    "id": "pets-frostclaw",
    "name": "Frostclaw",
    "category": "pets",
    "value": 532.5379,
    "demand": 1,
    "image": "/items/Frostclaw.webp"
  },
  {
    "id": "pets-royal-palace-spaniel",
    "name": "Royal Palace Spaniel",
    "category": "pets",
    "value": 605.5789,
    "demand": 1,
    "image": "/items/Royal Palace Spaniel.webp"
  },
  {
    "id": "pets-dj-snooze",
    "name": "DJ Snooze",
    "category": "pets",
    "value": 274.9026,
    "demand": 1,
    "image": "/items/DJ Snooze.webp"
  },
  {
    "id": "pets-abyssinian-cat",
    "name": "Abyssinian Cat",
    "category": "pets",
    "value": 46.4836,
    "demand": 1,
    "image": "/items/Abyssinian Cat.webp"
  },
  {
    "id": "pets-ground-sloth",
    "name": "Ground Sloth",
    "category": "pets",
    "value": 175.3013,
    "demand": 1,
    "image": "/items/Ground Sloth.webp"
  },
  {
    "id": "pets-strawberry-shortcake-bat-dragon",
    "name": "Strawberry Shortcake Bat Dragon",
    "category": "pets",
    "value": 966.7996,
    "demand": 3,
    "image": "/items/Strawberry Shortcake Bat Dragon.webp"
  },
  {
    "id": "pets-2d-kitty",
    "name": "2D Kitty",
    "category": "pets",
    "value": 802.1254,
    "demand": 2,
    "image": "/items/2D Kitty.webp"
  },
  {
    "id": "pets-octopus",
    "name": "Octopus",
    "category": "pets",
    "value": 711.8203,
    "demand": 2,
    "image": "/items/Octopus.webp"
  },
  {
    "id": "pets-alpaca",
    "name": "Alpaca",
    "category": "pets",
    "value": 945.5513,
    "demand": 3,
    "image": "/items/Alpaca.webp"
  },
  {
    "id": "pets-orchid-butterfly",
    "name": "Orchid Butterfly",
    "category": "pets",
    "value": 982.7358,
    "demand": 2,
    "image": "/items/Orchid Butterfly.webp"
  },
  {
    "id": "pets-kage-crow",
    "name": "Kage Crow",
    "category": "pets",
    "value": 440.9047,
    "demand": 1,
    "image": "/items/Kage Crow.webp"
  },
  {
    "id": "pets-fanghorn-tortoise",
    "name": "Fanghorn Tortoise",
    "category": "pets",
    "value": 407.7043,
    "demand": 1,
    "image": "/items/Fanghorn Tortoise.webp"
  },
  {
    "id": "pets-striped-eggy",
    "name": "Striped Eggy",
    "category": "pets",
    "value": 543.1621,
    "demand": 1,
    "image": "/items/Striped Eggy.webp"
  },
  {
    "id": "pets-gecko",
    "name": "Gecko",
    "category": "pets",
    "value": 586.9866,
    "demand": 1,
    "image": "/items/Gecko.webp"
  },
  {
    "id": "pets-winter-doe",
    "name": "Winter Doe",
    "category": "pets",
    "value": 371.8478,
    "demand": 1,
    "image": "/items/Winter Doe.webp"
  },
  {
    "id": "pets-birthday-butterfly-2024",
    "name": "Birthday Butterfly 2024",
    "category": "pets",
    "value": 191.2375,
    "demand": 1,
    "image": "/items/Birthday Butterfly 2024.webp"
  },
  {
    "id": "pets-trex",
    "name": "T-Rex",
    "category": "pets",
    "value": 729.0845,
    "demand": 2,
    "image": "/items/T-Rex.webp"
  },
  {
    "id": "pets-beluga-whale",
    "name": "Beluga Whale",
    "category": "pets",
    "value": 181.9414,
    "demand": 1,
    "image": "/items/Beluga Whale.webp"
  },
  {
    "id": "pets-monkey",
    "name": "Monkey",
    "category": "pets",
    "value": 277.5586,
    "demand": 1,
    "image": "/items/Monkey.webp"
  },
  {
    "id": "pets-bauble-buddies",
    "name": "Bauble Buddies",
    "category": "pets",
    "value": 444.8888,
    "demand": 1,
    "image": "/items/Bauble Buddies.webp"
  },
  {
    "id": "pets-halloween-white-skeleton-dog",
    "name": "Halloween White Skeleton Dog",
    "category": "pets",
    "value": 507.3056,
    "demand": 1,
    "image": "/items/Halloween White Skeleton Dog.webp"
  },
  {
    "id": "pets-orangutan",
    "name": "Orangutan",
    "category": "pets",
    "value": 66.4039,
    "demand": 1,
    "image": "/items/Orangutan.webp"
  },
  {
    "id": "pets-silly-duck",
    "name": "Silly Duck",
    "category": "pets",
    "value": 791.5013,
    "demand": 2,
    "image": "/items/Silly Duck.webp"
  },
  {
    "id": "pets-peachick",
    "name": "Peachick",
    "category": "pets",
    "value": 447.5448,
    "demand": 1,
    "image": "/items/Peachick.webp"
  },
  {
    "id": "pets-mongoose",
    "name": "Mongoose",
    "category": "pets",
    "value": 418.3284,
    "demand": 1,
    "image": "/items/Mongoose.webp"
  },
  {
    "id": "pets-ringmaster-gibbon",
    "name": "Ringmaster Gibbon",
    "category": "pets",
    "value": 366.5358,
    "demand": 1,
    "image": "/items/Ringmaster Gibbon.webp"
  },
  {
    "id": "pets-golden-griffin",
    "name": "Golden Griffin",
    "category": "pets",
    "value": 247.0142,
    "demand": 1,
    "image": "/items/Golden Griffin.webp"
  },
  {
    "id": "pets-kaijunior",
    "name": "Kaijunior",
    "category": "pets",
    "value": 208.5017,
    "demand": 1,
    "image": "/items/Kaijunior.webp"
  },
  {
    "id": "pets-mexican-wolf",
    "name": "Mexican Wolf",
    "category": "pets",
    "value": 81.0121,
    "demand": 1,
    "image": "/items/Mexican Wolf.webp"
  },
  {
    "id": "pets-australian-kelpie",
    "name": "Australian Kelpie",
    "category": "pets",
    "value": 374.5039,
    "demand": 1,
    "image": "/items/Australian Kelpie.webp"
  },
  {
    "id": "pets-indian-leopard",
    "name": "Indian Leopard",
    "category": "pets",
    "value": 322.7112,
    "demand": 1,
    "image": "/items/Indian Leopard.webp"
  },
  {
    "id": "pets-snow-leopard",
    "name": "Snow Leopard",
    "category": "pets",
    "value": 406.3763,
    "demand": 1,
    "image": "/items/Snow Leopard.webp"
  },
  {
    "id": "pets-general-sheepdog",
    "name": "General Sheepdog",
    "category": "pets",
    "value": 698.5401,
    "demand": 2,
    "image": "/items/General Sheepdog.webp"
  },
  {
    "id": "pets-lunar-moon-bear",
    "name": "Lunar Moon Bear",
    "category": "pets",
    "value": 588.3146,
    "demand": 1,
    "image": "/items/Lunar Moon Bear.webp"
  },
  {
    "id": "pets-zebra",
    "name": "Zebra",
    "category": "pets",
    "value": 6.6431,
    "demand": 1,
    "image": "/items/Zebra.webp"
  },
  {
    "id": "pets-chilling-spider",
    "name": "Chilling Spider",
    "category": "pets",
    "value": 250.9983,
    "demand": 1,
    "image": "/items/Chilling Spider.webp"
  },
  {
    "id": "pets-irish-setter",
    "name": "Irish Setter",
    "category": "pets",
    "value": 13.2832,
    "demand": 1,
    "image": "/items/Irish Setter.webp"
  },
  {
    "id": "pets-red-panda-ducky",
    "name": "Red Panda Ducky",
    "category": "pets",
    "value": 31.8754,
    "demand": 1,
    "image": "/items/Red Panda Ducky.webp"
  },
  {
    "id": "pets-eel",
    "name": "Eel",
    "category": "pets",
    "value": 312.0871,
    "demand": 1,
    "image": "/items/Eel.webp"
  },
  {
    "id": "pets-leviathan",
    "name": "Leviathan",
    "category": "pets",
    "value": 780.8772,
    "demand": 2,
    "image": "/items/Leviathan.webp"
  },
  {
    "id": "pets-pink-cat",
    "name": "Pink Cat",
    "category": "pets",
    "value": 896.4147,
    "demand": 2,
    "image": "/items/Pink Cat.webp"
  },
  {
    "id": "pets-corgi",
    "name": "Corgi",
    "category": "pets",
    "value": 96.9483,
    "demand": 1,
    "image": "/items/Corgi.webp"
  }
];
