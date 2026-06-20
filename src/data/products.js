// Limras Sports — Verified Product Catalog
// Source: Limras_Sports_Catalog_v3.pdf (85 products: 62 trophies, 23 shields)

const raw = [
  ["LS-101", "Trophy", "Metal", "10\" / 11\" / 12\"", "Champion's Stroke", "Cricket"],
  ["LS-102", "Trophy", "Metal", "9\" / 11\" / 12\"", "Crystal Crest", "Classic"],
  ["LS-103", "Trophy", "Metal", "9\" / 10\" / 12\"", "Victory Urn", "Cricket"],
  ["LS-104", "Trophy", "Metal", "10\" / 11\" / 12\"", "Infinity Flame", "Classic"],
  ["LS-105", "Trophy", "Metal", "9\" / 10\" / 11\"", "Power Drive", "Cricket"],
  ["LS-106", "Trophy", "Metal", "10\" / 11\" / 12\"", "Golden Ascend", "Classic"],
  ["LS-107", "Trophy", "Metal", "9\" / 11\" / 12\"", "Celestial Rise", "Classic"],
  ["LS-108", "Trophy", "Plastic", "9\" / 10\" / 12\"", "Shuttle Cup", "Badminton"],
  ["LS-109", "Trophy", "Metal", "10\" / 11\" / 12\"", "Star Innings", "Cricket"],
  ["LS-110", "Trophy", "Metal", "9\" / 10\" / 11\"", "Comet Strike", "Cricket"],
  ["LS-111", "Trophy", "Metal", "10\" / 11\" / 12\"", "Crest of Honour", "Cricket"],
  ["LS-112", "Shield", "MDF Wood Board", "9\" / 11\" / 12\"", "Bat & Ball Shield", "Cricket"],
  ["LS-113", "Shield", "MDF Wood Board", "9\" / 10\" / 12\"", "Tricolour Shield", "Patriotic"],
  ["LS-114", "Shield", "MDF Wood Board", "10\" / 11\" / 12\"", "Ashoka Emblem Shield", "Patriotic"],
  ["LS-115", "Trophy", "Metal", "7\" / 8.5\" / 10\"", "Twin Star Award", "Classic"],
  ["LS-116", "Shield", "MDF Wood Board", "15\"", "Heritage Column Shield", "Corporate"],
  ["LS-117", "Trophy", "Metal", "9\" / 10\" / 11\"", "Triple Star Medallion", "Classic"],
  ["LS-118", "Trophy", "Metal", "12\" / 14\" / 16\"", "Silver Blade Cup", "Cricket"],
  ["LS-119", "Trophy", "Metal", "7\" / 8.5\" / 10\"", "Comet Medallion", "Classic"],
  ["LS-120", "Trophy", "Metal", "16\" / 19\" / 21\"", "Sapphire Flame Tower", "Premium"],
  ["LS-121", "Trophy", "Metal", "15.5\" / 17.5\" / 19.5\"", "Laurel Medallion Cup", "Premium"],
  ["LS-122", "Trophy", "Metal", "12\" / 14\" / 15\"", "Crystal Sentinel", "Premium"],
  ["LS-123", "Trophy", "Metal", "14\" / 16\" / 18\"", "Phoenix Flame Cup", "Premium"],
  ["LS-124", "Trophy", "Metal", "16\" / 18\" / 20\"", "Ruby Crest Tower", "Premium"],
  ["LS-125", "Trophy", "Metal", "13\" / 15\" / 17\"", "Azure Wing Cup", "Premium"],
  ["LS-126", "Trophy", "Metal", "15\" / 17\" / 19\"", "Star Pinnacle Cup", "Premium"],
  ["LS-127", "Shield", "MDF Wood Board", "10.5\" / 12\" / 13\"", "Heritage Mirror Plaque", "Corporate"],
  ["LS-128", "Trophy", "Metal", "16\" / 18\" / 20\"", "Onyx Star Tower", "Premium"],
  ["LS-129", "Shield", "MDF Wood Board", "10\" / 11\" / 12\"", "Laurel Crest Shield", "Corporate"],
  ["LS-130", "Trophy", "Metal", "10.5\" / 12.5\" / 13.5\"", "Soaring Star Figure", "Premium"],
  ["LS-131", "Shield", "MDF Wood Board", "10\" / 11\" / 12\"", "Solar Disc Shield", "Corporate"],
  ["LS-132", "Trophy", "Metal", "12\" / 13\" / 14\"", "Abstract Flame Figure", "Premium"],
  ["LS-133", "Trophy", "Metal", "10.5\" / 12.5\" / 13.5\"", "Ribbon Star Figure", "Premium"],
  ["LS-134", "Trophy", "Metal", "17\" / 19\" / 21\"", "Twin Star Tower", "Premium"],
  ["LS-135", "Trophy", "Metal", "28\" / 32\" / 36\" / 43\" / 50\" / 60\" / 70\"", "Grand Championship Cup", "Premium"],
  ["LS-136", "Trophy", "Metal", "10\" / 12\" / 14\"", "Comet Medal Tower", "Classic"],
  ["LS-137", "Trophy", "Metal", "10\" / 11\" / 12\"", "Crystal Halo Cup", "Premium"],
  ["LS-138", "Trophy", "Metal", "11\" / 12.5\" / 15\"", "Phoenix Wing Medallion", "Premium"],
  ["LS-139", "Trophy", "Metal", "10\" / 11\" / 12\"", "Engraved Vase Cup", "Premium"],
  ["LS-140", "Trophy", "Metal", "9\" / 10\" / 11\"", "Swan Curve Medallion", "Premium"],
  ["LS-141", "Trophy", "Metal", "12\" / 13\" / 14\"", "Crystal Sphere Figure", "Premium"],
  ["LS-142", "Trophy", "Metal", "12\" / 13\" / 14\"", "Lattice Cone Cup", "Premium"],
  ["LS-143", "Trophy", "Metal", "14.5\" / 16.5\" / 19.5\"", "Hammered Medallion Cup", "Premium"],
  ["LS-144", "Trophy", "Metal", "10\" / 11\" / 12\"", "Eagle Curve Trophy", "Premium"],
  ["LS-145", "Trophy", "Metal", "9\" / 10\" / 11\"", "Crescent Star Trophy", "Classic"],
  ["LS-146", "Trophy", "Metal", "23.5\" / 27.5\" / 30\"", "Grand Rosette Cup", "Premium"],
  ["LS-147", "Trophy", "Metal", "9\" / 11\" / 12\"", "Medallion Curve Cup", "Premium"],
  ["LS-148", "Trophy", "Metal", "24\" / 27\" / 30\"", "Jewelled Crown Cup", "Premium"],
  ["LS-149", "Trophy", "Metal", "10\" / 11\" / 12\"", "Rising Star Trophy", "Classic"],
  ["LS-150", "Trophy", "Metal", "27\" / 31\" / 34\"", "Grand Rosette Tower", "Premium"],
  ["LS-151", "Shield", "MDF Wood Board", "15\" / 16.5\" / 19\"", "Ornate Scroll Shield", "Corporate"],
  ["LS-152", "Shield", "MDF Wood Board", "8.75\"", "Recognition Star Plaque", "Corporate"],
  ["LS-153", "Shield", "MDF Wood Board", "9\" / 10\" / 12\"", "Royal Frame Shield", "Corporate"],
  ["LS-154", "Shield", "MDF Wood Board", "10\" / 11\" / 12\"", "Pearl Crown Shield", "Corporate"],
  ["LS-155", "Shield", "MDF Wood Board", "9\" / 10\" / 11\"", "Oval Crown Shield", "Corporate"],
  ["LS-156", "Shield", "MDF Wood Board", "10\" / 11\" / 12\"", "Handshake Oval Shield", "Corporate"],
  ["LS-157", "Shield", "MDF Wood Board", "11.5\" / 12.75\" / 14\"", "Arch Frame Shield", "Corporate"],
  ["LS-158", "Shield", "MDF Wood Board", "11\" / 12\" / 13\"", "Floret Ring Shield", "Corporate"],
  ["LS-159", "Trophy", "Metal", "6\" / 7\" / 8\"", "Classic Loving Cup", "Classic"],
  ["LS-160", "Trophy", "Metal", "9\" / 10\" / 11\"", "Wing Flame Tower", "Premium"],
  ["LS-161", "Shield", "MDF Wood Board", "13\" / 14.5\" / 16\"", "Handshake Oval Plaque", "Corporate"],
  ["LS-162", "Shield", "MDF Wood Board", "9\" / 11\" / 12\"", "Timber Accord Shield", "Corporate"],
  ["LS-163", "Shield", "MDF Wood Board", "9\" / 10\" / 12\"", "Wings Medallion Shield", "Corporate"],
  ["LS-164", "Shield", "MDF Wood Board", "10\" / 11\" / 12\"", "Twin Halo Shield", "Corporate"],
  ["LS-165", "Shield", "MDF Wood Board", "9\" / 10\" / 11\"", "Timber Crest Plaque", "Corporate"],
  ["LS-166", "Shield", "MDF Wood Board", "10\" / 11\" / 12\"", "Accord Star Shield", "Corporate"],
  ["LS-167", "Shield", "MDF Wood Board", "9\" / 11\" / 12\"", "Ashoka Pillar Shield", "Patriotic"],
  ["LS-168", "Shield", "MDF Wood Board", "9\" / 10\" / 12\"", "Sunburst Crest Shield", "Corporate"],
  ["LS-169", "Trophy", "Metal", "12\" / 13\" / 15\"", "Laurel Star Trophy", "Premium"],
  ["LS-170", "Trophy", "Metal", "14.5\" / 16.5\" / 18.5\"", "Marble Diamond Cup", "Premium"],
  ["LS-171", "Trophy", "Metal", "10\" / 11\" / 12\"", "Onyx Leaf Trophy", "Premium"],
  ["LS-172", "Trophy", "Metal", "14.5\" / 16.5\" / 18.5\"", "Marble Diamond Tower", "Premium"],
  ["LS-173", "Trophy", "Metal", "9\" / 10\" / 12\"", "Arabesque Star Cup", "Premium"],
  ["LS-174", "Trophy", "Metal", "10.5\" / 12\" / 13\"", "Striker's Arc Trophy", "Cricket"],
  ["LS-175", "Trophy", "Metal", "10\" / 12\" / 14\"", "Best Bowler Trophy", "Cricket"],
  ["LS-176", "Trophy", "Metal", "10\" / 11\" / 12\"", "Star Hook Trophy", "Premium"],
  ["LS-177", "Trophy", "Metal", "10.5\" / 12\" / 13\"", "Dynamic Striker Trophy", "Cricket"],
  ["LS-178", "Trophy", "Metal", "22\" / 25\" / 27\"", "Globe Pinnacle Cup", "Premium"],
  ["LS-179", "Trophy", "Metal", "21\" / 24\" / 27\"", "Celestial Sphere Tower", "Premium"],
  ["LS-180", "Trophy", "Metal", "10\" / 12\" / 14\"", "Best Batsman Trophy", "Cricket"],
  ["LS-181", "Trophy", "Metal", "25\" / 27\" / 30\"", "Champion Batsman Tower", "Cricket"],
  ["LS-182", "Trophy", "Metal", "9\" / 11\" / 12\"", "Hoop Dunk Trophy", "Basketball"],
  ["LS-183", "Trophy", "Metal", "22\" / 25\" / 27\"", "Eclipse Orb Tower", "Premium"],
  ["LS-184", "Trophy", "Metal", "20\" / 23\" / 26\"", "Diamond Spire Cup", "Premium"],
  ["LS-185", "Trophy", "Metal", "20\" / 24\" / 26\"", "Triple Sphere Champion Cup", "Premium"],
];

const categoryMap = {
  Cricket: "Sports Trophies",
  Classic: "School Trophies",
  Premium: "Corporate Awards",
  Corporate: "Wooden Shields",
  Patriotic: "Wooden Shields",
  Badminton: "Sports Trophies",
  Basketball: "Sports Trophies",
};

const descriptions = {
  Cricket: (name, mat) =>
    `A presentation-grade cricket trophy crafted in hand-finished ${mat.toLowerCase()}, featuring a dynamic batsman or bowler silhouette atop a tiered riser. Engineered for tournament finals, school cricket leagues, and corporate cricket cups where the trophy itself becomes part of the celebration.`,
  Classic: (name, mat) =>
    `A timeless award silhouette in polished ${mat.toLowerCase()}, designed for academic excellence, annual day functions, and milestone recognitions. Its balanced proportions and engravable centre plate make it equally suited to a classroom or a boardroom.`,
  Premium: (name, mat) =>
    `An architectural trophy in lustrous ${mat.toLowerCase()}, built across multiple height tiers for championship podiums. The sculptural form and reflective finish are designed to anchor a stage and photograph beautifully under event lighting.`,
  Corporate: (name, mat) =>
    `A boardroom-grade recognition shield in engraved ${mat.toLowerCase()}, designed for service awards, retirement honours, and partner recognitions. The generous plate area accommodates detailed citations and company branding.`,
  Patriotic: (name, mat) =>
    `A ceremonial shield finished in ${mat.toLowerCase()}, featuring national emblem detailing suited to Republic Day, Independence Day, and government recognition events.`,
  Badminton: (name, mat) =>
    `A court-ready badminton trophy in finished ${mat.toLowerCase()}, topped with a sculpted shuttlecock motif for league finals and club championships.`,
  Basketball: (name, mat) =>
    `A dynamic basketball trophy in polished ${mat.toLowerCase()}, built for tournament podiums and school sports day finals.`,
};

const usageMap = {
  Cricket: ["Cricket Tournaments", "School Sports Day", "Corporate Cricket Cups"],
  Classic: ["School Awards", "Annual Day Functions", "Academic Excellence"],
  Premium: ["Championship Finals", "Corporate Galas", "Tournament Podiums"],
  Corporate: ["Employee Recognition", "Retirement Honours", "Partner Awards"],
  Patriotic: ["Republic Day Events", "Government Recognition", "National Functions"],
  Badminton: ["Badminton Leagues", "Club Championships", "School Tournaments"],
  Basketball: ["Basketball Tournaments", "School Sports Day", "League Finals"],
};

const CLEAN_PHOTO_CODES = new Set([
  "LS-101", "LS-102", "LS-103", "LS-104", "LS-105", "LS-106", "LS-107", "LS-108", "LS-109",
  "LS-110", "LS-111", "LS-145", "LS-152", "LS-153", "LS-154", "LS-155", "LS-156", "LS-157",
  "LS-158", "LS-159", "LS-161", "LS-162", "LS-163", "LS-164", "LS-165", "LS-166", "LS-167",
  "LS-168",
]);

export const products = raw.map(([code, category, material, sizes, name, theme]) => {
  const sizeList = sizes.split(" / ").map((s) => s.trim());
  return {
    code,
    slug: code.toLowerCase(),
    name,
    category,
    displayCategory: categoryMap[theme] || "Corporate Awards",
    material,
    finish: "Premium Polish / UV Printed Plate",
    sizes: sizeList,
    theme,
    usage: usageMap[theme] || usageMap.Premium,
    description: descriptions[theme]
      ? descriptions[theme](name, material)
      : descriptions.Premium(name, material),
    image: `/images/catalog-clean/${code.toLowerCase()}.jpg`,
    customization: "Logo & Name Printing Available",
    cleanPhoto: CLEAN_PHOTO_CODES.has(code),
  };
});

// Featured selection that maps to the standalone high-res shots we have
export const heroProducts = [
  {
    code: "1113",
    slug: "sports-icons-1113",
    name: "Five Award Cricket Collection",
    category: "Shield",
    displayCategory: "Sports Trophies",
    material: "Acrylic / MDF",
    sizes: ["9\""],
    thickness: "9mm",
    description:
      "A complete five-piece cricket recognition set — Best Batsman, Man of the Match, Best Fielder, Man of the Series, and Best Bowler — finished in matte black and brushed gold for a coordinated tournament award ceremony.",
    image: "/images/products/sports-icons-1113.jpeg",
    usage: ["Cricket Tournaments", "Award Ceremonies", "League Finals"],
  },
  {
    code: "1125",
    slug: "corporate-star-1125",
    name: "Marble Star Achiever Award",
    category: "Trophy",
    displayCategory: "Corporate Awards",
    material: "Marble & Metal",
    sizes: ["11\""],
    thickness: "7mm",
    description:
      "A two-tone corporate award pairing a genuine marble base with a gold star figure and an engravable laurel-wreath plate — designed for leadership recognitions and milestone achievement ceremonies.",
    image: "/images/products/corporate-star-1125.jpeg",
    usage: ["Corporate Recognition", "Leadership Awards", "Annual Galas"],
  },
  {
    code: "1121",
    slug: "medallion-shield-1121",
    name: "Mahogany Medallion Shield",
    category: "Shield",
    displayCategory: "Wooden Shields",
    material: "Rosewood Finish",
    sizes: ["13\""],
    thickness: "17mm",
    description:
      "A statement mahogany-finish shield with a gold laurel medallion centrepiece and a dedicated three-star citation plate — built for premium retirement and service-recognition presentations.",
    image: "/images/products/medallion-shield-1121.jpeg",
    usage: ["Service Awards", "Retirement Honours", "VIP Recognition"],
  },
  {
    code: "1093",
    slug: "crown-plaque-1093",
    name: "Royal Crown Heritage Plaque",
    category: "Shield",
    displayCategory: "Wooden Shields",
    material: "Wood & Gold Foil",
    sizes: ["7.5\"", "8.5\"", "9.5\""],
    thickness: "7mm",
    description:
      "A richly detailed heritage plaque finished in gold foil over rosewood, with a royal crown crest and ornamental sunburst motif — available across three graduated sizes for tiered award sets.",
    image: "/images/products/crown-plaque-1093.jpeg",
    usage: ["Heritage Awards", "Cultural Events", "Tiered Recognition Sets"],
  },
  {
    code: "1092",
    slug: "fan-plaque-1092",
    name: "Emerald Star Fan Plaque",
    category: "Shield",
    displayCategory: "Wooden Shields",
    material: "Wood & Gold Foil",
    sizes: ["6.5\"", "7.5\"", "8.5\""],
    thickness: "7mm",
    description:
      "An emerald and gold fan-silhouette plaque with a radiant star border, designed as a graduated three-size award set for podium-style ceremonies.",
    image: "/images/products/fan-plaque-1092.jpeg",
    usage: ["Tiered Award Sets", "Cultural Events", "Felicitation Ceremonies"],
  },
  {
    code: "1122",
    slug: "lattice-black-1122",
    name: "Onyx Lattice Bookend Award",
    category: "Trophy",
    displayCategory: "Corporate Awards",
    material: "Acrylic / MDF",
    sizes: ["9.5x11\"", "11x12\"", "12x13\""],
    thickness: "11mm",
    description:
      "A sculptural black-and-gold lattice award with an Islamic geometric jali pattern, paired with a large brocade-textured citation panel — a striking centrepiece for premium corporate functions.",
    image: "/images/products/lattice-black-1122.jpeg",
    usage: ["Corporate Galas", "VIP Recognition", "Premium Ceremonies"],
  },
  {
    code: "1123",
    slug: "lattice-white-1123",
    name: "Ivory Lattice Bookend Award",
    category: "Trophy",
    displayCategory: "Corporate Awards",
    material: "Acrylic / MDF",
    sizes: ["9.5x11\"", "11x12\"", "12x13\""],
    thickness: "11mm",
    description:
      "The ivory-and-gold edition of our signature lattice award — a tiered jali-pattern silhouette beside a brocade gold citation panel, finished in pure white for a refined, contemporary presentation.",
    image: "/images/products/lattice-white-1123.jpeg",
    usage: ["Corporate Galas", "Wedding Honours", "Premium Ceremonies"],
  },
  {
    code: "1127",
    slug: "eclipse-disc-1127",
    name: "Eclipse Gold Disc Award",
    category: "Trophy",
    displayCategory: "Corporate Awards",
    material: "Acrylic / Metal",
    sizes: ["9\"", "9.5\"", "10.5\""],
    thickness: "18mm",
    description:
      "A bold matte-black disc split by a radiant gold sunburst pattern, mounted on a mirror-polished gold pedestal — a modern architectural statement piece for flagship corporate awards.",
    image: "/images/products/eclipse-disc-1127.jpeg",
    usage: ["Flagship Corporate Awards", "Leadership Recognition", "Brand Events"],
  },
];

export const categories = [
  "All",
  "School Trophies",
  "Sports Trophies",
  "Corporate Awards",
  "Wooden Shields",
];

export const allProducts = [...heroProducts, ...products];
