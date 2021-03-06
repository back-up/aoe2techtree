let json = JSON.stringify(require('../data/civs_breakdown.json'));

const replacer = [
{var: "UNIQUE_UNIT", str: "UNIQUE UNIT"},
{var: "ELITE_UNIQUE_UNIT", str: "ELITE UNIQUE UNIT"},
{var: "UNIQUE_TECH_1", str: "UNIQUE TECH 1"},
{var: "UNIQUE_TECH_2", str: "UNIQUE TECH 2"},
{var: "MONK_PREFIX_MESO", str: "meso_"},
{var: "MONK_PREFIX_AFRICAN", str: "african_"},
{var: "MONK_PREFIX_ASIAN", str: "asian_"},
{var: "MONK_PREFIX_GENERIC", str: ""},
{var: "EAGLE_SCOUT", str: "Eagle Scout"},
{var: "EAGLE_WARRIOR", str: "Eagle Warrior"},
{var: "ELITE_EAGLE_WARRIOR", str: "Elite Eagle Warrior"},
{var: "BATTLE_ELEPHANT", str: "Battle Elephant"},
{var: "STEPPE_LANCER", str: "Steppe Lancer"},
{var: "ELITE_BATTLE_ELEPHANT", str: "Elite Battle Elephant"},
{var: "ELITE_STEPPE_LANCER", str: "Elite Steppe Lancer"},
{var: "KREPOST", str: "Krepost"},
{var: "FEITORIA", str: "Feitoria"},
{var: "MONK", str: "Monk"},
{var: "CAVALRY_ARCHER", str: "Cavalry Archer"},
{var: "HEAVY_CAV_ARCHER", str: "Heavy Cav Archer"},
{var: "PARTHIAN_TACTICS", str: "Parthian Tactics"},
{var: "STABLE", str: "Stable"},
{var: "SCALE_BARDING_ARMOR", str: "Scale Barding Armor"},
{var: "CHAIN_BARDING_ARMOR", str: "Chain Barding Armor"},
{var: "PLATE_BARDING_ARMOR", str: "Plate Barding Armor"},
{var: "ARCHERY_RANGE", str: "Archery Range"},
{var: "ARCHER", str: "Archer"},
{var: "SKIRMISHER", str: "Skirmisher"},
{var: "CROSSBOWMAN", str: "Crossbowman"},
{var: "ELITE_SKIRMISHER", str: "Elite Skirmisher"},
{var: "SLINGER", str: "Slinger"},
{var: "GENITOUR", str: "Genitour"},
{var: "THUMB_RING", str: "Thumb Ring"},
{var: "ARBALESTER", str: "Arbalester"},
{var: "IMPERIAL_SKIRMISHER", str: "Imperial Skirmisher"},
{var: "HAND_CANNONEER", str: "Hand Cannoneer"},
{var: "ELITE_GENITOUR", str: "Elite Genitour"},
{var: "BARRACKS", str: "Barracks"},
{var: "MILITIA", str: "Militia"},
{var: "MAN_AT_ARMS", str: "Man-at-Arms"},
{var: "SPEARMAN", str: "Spearman"},
{var: "SUPPLIES", str: "Supplies"},
{var: "LONG_SWORDSMAN", str: "Long Swordsman"},
{var: "PIKEMAN", str: "Pikeman"},
{var: "SQUIRES", str: "Squires"},
{var: "ARSON", str: "Arson"},
{var: "TWO_HANDED_SWORDSMAN", str: "Two-Handed Swordsman"},
{var: "CHAMPION", str: "Champion"},
{var: "HALBERDIER", str: "Halberdier"},
{var: "CONDOTTIERO", str: "Condottiero"},
{var: "SCOUT_CAVALRY", str: "Scout Cavalry"},
{var: "BLOODLINES", str: "Bloodlines"},
{var: "LIGHT_CAVALRY", str: "Light Cavalry"},
{var: "KNIGHT", str: "Knight"},
{var: "CAMEL_RIDER", str: "Camel Rider"},
{var: "HUSBANDRY", str: "Husbandry"},
{var: "HUSSAR", str: "Hussar"},
{var: "CAVALIER", str: "Cavalier"},
{var: "HEAVY_CAMEL_RIDER", str: "Heavy Camel Rider"},
{var: "IMPERIAL_CAMEL_RIDER", str: "Imperial Camel Rider"},
{var: "PALADIN", str: "Paladin"},
{var: "WONDER", str: "Wonder"},
{var: "DOCK", str: "Dock"},
{var: "FISHING_SHIP", str: "Fishing Ship"},
{var: "TRANSPORT_SHIP", str: "Transport Ship"},
{var: "FIRE_GALLEY", str: "Fire Galley"},
{var: "TRADE_COG", str: "Trade Cog"},
{var: "DEMOLITION_RAFT", str: "Demolition Raft"},
{var: "GALLEY", str: "Galley"},
{var: "FIRE_SHIP", str: "Fire Ship"},
{var: "GILLNETS", str: "Gillnets"},
{var: "DEMOLITION_SHIP", str: "Demolition Ship"},
{var: "WAR_GALLEY", str: "War Galley"},
{var: "TURTLE_SHIP", str: "Turtle Ship"},
{var: "LONGBOAT", str: "Longboat"},
{var: "CARAVEL", str: "Caravel"},
{var: "CAREENING", str: "Careening"},
{var: "FAST_FIRE_SHIP", str: "Fast Fire Ship"},
{var: "CANNON_GALLEON", str: "Cannon Galleon"},
{var: "HEAVY_DEMO_SHIP", str: "Heavy Demo Ship"},
{var: "GALLEON", str: "Galleon"},
{var: "ELITE_TURTLE_SHIP", str: "Elite Turtle Ship"},
{var: "ELITE_LONGBOAT", str: "Elite Longboat"},
{var: "ELITE_CARAVEL", str: "Elite Caravel"},
{var: "ELITE_CANNON_GALLEON", str: "Elite Cannon Galleon"},
{var: "DRY_DOCK", str: "Dry Dock"},
{var: "SHIPWRIGHT", str: "Shipwright"},
{var: "FISH_TRAP", str: "Fish Trap"},
{var: "OUTPOST", str: "Outpost"},
{var: "WATCH_TOWER", str: "Watch Tower"},
{var: "GUARD_TOWER", str: "Guard Tower"},
{var: "KEEP", str: "Keep"},
{var: "BOMBARD_TOWER", str: "Bombard Tower"},
{var: "PALISADE_WALL", str: "Palisade Wall"},
{var: "PALISADE_GATE", str: "Palisade Gate"},
{var: "GATE", str: "Gate"},
{var: "STONE_WALL", str: "Stone Wall"},
{var: "FORTIFIED_WALL", str: "Fortified Wall"},
{var: "MONASTERY", str: "Monastery"},
{var: "MISSIONARY", str: "Missionary"},
{var: "REDEMPTION", str: "Redemption"},
{var: "FERVOR", str: "Fervor"},
{var: "SANCTITY", str: "Sanctity"},
{var: "ATONEMENT", str: "Atonement"},
{var: "HERBAL_MEDICINE", str: "Herbal Medicine"},
{var: "HERESY", str: "Heresy"},
{var: "BLOCK_PRINTING", str: "Block Printing"},
{var: "ILLUMINATION", str: "Illumination"},
{var: "FAITH", str: "Faith"},
{var: "THEOCRACY", str: "Theocracy"},
{var: "CASTLE", str: "Castle"},
{var: "PETARD", str: "Petard"},
{var: "TREBUCHET", str: "Trebuchet"},
{var: "HOARDINGS", str: "Hoardings"},
{var: "SAPPERS", str: "Sappers"},
{var: "CONSCRIPTION", str: "Conscription"},
{var: "SPIES_TREASON", str: "Spies/Treason"},
{var: "HOUSE", str: "House"},
{var: "TOWN_CENTER", str: "Town Center"},
{var: "VILLAGER", str: "Villager"},
{var: "FEUDAL_AGE", str: "Feudal Age"},
{var: "LOOM", str: "Loom"},
{var: "TOWN_WATCH", str: "Town Watch"},
{var: "CASTLE_AGE", str: "Castle Age"},
{var: "WHEELBARROW", str: "Wheelbarrow"},
{var: "TOWN_PATROL", str: "Town Patrol"},
{var: "IMPERIAL_AGE", str: "Imperial Age"},
{var: "HAND_CART", str: "Hand Cart"},
{var: "SIEGE_WORKSHOP", str: "Siege Workshop"},
{var: "MANGONEL", str: "Mangonel"},
{var: "BATTERING_RAM", str: "Battering Ram"},
{var: "SCORPION", str: "Scorpion"},
{var: "SIEGE_TOWER", str: "Siege Tower"},
{var: "ONAGER", str: "Onager"},
{var: "CAPPED_RAM", str: "Capped Ram"},
{var: "HEAVY_SCORPION", str: "Heavy Scorpion"},
{var: "BOMBARD_CANNON", str: "Bombard Cannon"},
{var: "SIEGE_ONAGER", str: "Siege Onager"},
{var: "SIEGE_RAM", str: "Siege Ram"},
{var: "BLACKSMITH", str: "Blacksmith"},
{var: "PADDED_ARCHER_ARMOR", str: "Padded Archer Armor"},
{var: "FLETCHING", str: "Fletching"},
{var: "FORGING", str: "Forging"},
{var: "SCALE_MAIL_ARMOR", str: "Scale Mail Armor"},
{var: "LEATHER_ARCHER_ARMOR", str: "Leather Archer Armor"},
{var: "BODKIN_ARROW", str: "Bodkin Arrow"},
{var: "IRON_CASTING", str: "Iron Casting"},
{var: "CHAIN_MAIL_ARMOR", str: "Chain Mail Armor"},
{var: "RING_ARCHER_ARMOR", str: "Ring Archer Armor"},
{var: "BRACER", str: "Bracer"},
{var: "BLAST_FURNACE", str: "Blast Furnace"},
{var: "PLATE_MAIL_ARMOR", str: "Plate Mail Armor"},
{var: "UNIVERSITY", str: "University"},
{var: "MASONRY", str: "Masonry"},
{var: "BALLISTICS", str: "Ballistics"},
{var: "HEATED_SHOT", str: "Heated Shot"},
{var: "MURDER_HOLES", str: "Murder Holes"},
{var: "TREADMILL_CRANE", str: "Treadmill Crane"},
{var: "ARCHITECTURE", str: "Architecture"},
{var: "CHEMISTRY", str: "Chemistry"},
{var: "SIEGE_ENGINEERS", str: "Siege Engineers"},
{var: "ARROWSLITS", str: "Arrowslits"},
{var: "MINING_CAMP", str: "Mining Camp"},
{var: "STONE_MINING", str: "Stone Mining"},
{var: "GOLD_MINING", str: "Gold Mining"},
{var: "STONE_SHAFT_MINING", str: "Stone Shaft Mining"},
{var: "GOLD_SHAFT_MINING", str: "Gold Shaft Mining"},
{var: "LUMBER_CAMP", str: "Lumber Camp"},
{var: "DOUBLE_BIT_AXE", str: "Double-Bit Axe"},
{var: "BOW_SAW", str: "Bow Saw"},
{var: "TWO_MAN_SAW", str: "Two-Man Saw"},
{var: "MARKET", str: "Market"},
{var: "TRADE_CART", str: "Trade Cart"},
{var: "COINAGE", str: "Coinage"},
{var: "CARAVAN", str: "Caravan"},
{var: "BANKING", str: "Banking"},
{var: "GUILDS", str: "Guilds"},
{var: "MILL", str: "Mill"},
{var: "HORSE_COLLAR", str: "Horse Collar"},
{var: "HEAVY_PLOW", str: "Heavy Plow"},
{var: "CROP_ROTATION", str: "Crop Rotation"},
{var: "FARM", str: "Farm"},
{var: "JAGUAR_WARRIOR", str: "Jaguar Warrior"},
{var: "ELITE_JAGUAR_WARRIOR", str: "Elite Jaguar Warrior"},
{var: "ATLATL", str: "Atlatl"},
{var: "GARLAND_WARS", str: "Garland Wars"},
{var: "CAMEL_ARCHER", str: "Camel Archer"},
{var: "ELITE_CAMEL_ARCHER", str: "Elite Camel Archer"},
{var: "KASBAH", str: "Kasbah"},
{var: "MAGHRABI_CAMELS", str: "Maghrabi Camels"},
{var: "LONGBOWMAN", str: "Longbowman"},
{var: "ELITE_LONGBOWMAN", str: "Elite Longbowman"},
{var: "YEOMEN", str: "Yeomen"},
{var: "WARWOLF", str: "Warwolf"},
{var: "KONNIK", str: "Konnik"},
{var: "ELITE_KONNIK", str: "Elite Konnik"},
{var: "STIRRUPS", str: "Stirrups"},
{var: "BAGAINS", str: "Bagains"},
{var: "ARAMBAI", str: "Arambai"},
{var: "ELITE_ARAMBAI", str: "Elite Arambai"},
{var: "HOWDAH", str: "Howdah"},
{var: "MANIPUR_CAVALRY", str: "Manipur Cavalry"},
{var: "CATAPHRACT", str: "Cataphract"},
{var: "ELITE_CATAPHRACT", str: "Elite Cataphract"},
{var: "GREEK_FIRE", str: "Greek Fire"},
{var: "LOGISTICA", str: "Logistica"},
{var: "WOAD_RAIDER", str: "Woad Raider"},
{var: "ELITE_WOAD_RAIDER", str: "Elite Woad Raider"},
{var: "STRONGHOLD", str: "Stronghold"},
{var: "FUROR_CELTICA", str: "Furor Celtica"},
{var: "CHU_KO_NU", str: "Chu Ko Nu"},
{var: "ELITE_CHU_KO_NU", str: "Elite Chu Ko Nu"},
{var: "GREAT_WALL", str: "Great Wall"},
{var: "ROCKETRY", str: "Rocketry"},
{var: "KIPCHAK", str: "Kipchak"},
{var: "ELITE_KIPCHAK", str: "Elite Kipchak"},
{var: "STEPPE_HUSBANDRY", str: "Steppe Husbandry"},
{var: "CUMAN_MERCENARIES", str: "Cuman Mercenaries"},
{var: "SHOTEL_WARRIOR", str: "Shotel Warrior"},
{var: "ELITE_SHOTEL_WARRIOR", str: "Elite Shotel Warrior"},
{var: "ROYAL_HEIRS", str: "Royal Heirs"},
{var: "TORSION_ENGINES", str: "Torsion Engines"},
{var: "THROWING_AXEMAN", str: "Throwing Axeman"},
{var: "ELITE_THROWING_AXEMAN", str: "Elite Throwing Axeman"},
{var: "CHIVALRY", str: "Chivalry"},
{var: "BEARDED_AXE", str: "Bearded Axe"},
{var: "HUSKARL", str: "Huskarl"},
{var: "ELITE_HUSKARL", str: "Elite Huskarl"},
{var: "ANARCHY", str: "Anarchy"},
{var: "PERFUSION", str: "Perfusion"},
{var: "TARKAN", str: "Tarkan"},
{var: "ELITE_TARKAN", str: "Elite Tarkan"},
{var: "MARAUDERS", str: "Marauders"},
{var: "ATHEISM", str: "Atheism"},
{var: "KAMAYUK", str: "Kamayuk"},
{var: "ELITE_KAMAYUK", str: "Elite Kamayuk"},
{var: "ANDEAN_SLING", str: "Andean Sling"},
{var: "COURIERS", str: "Couriers"},
{var: "ELEPHANT_ARCHER", str: "Elephant Archer"},
{var: "ELITE_ELEPHANT_ARCHER", str: "Elite Elephant Archer"},
{var: "SULTANS", str: "Sultans"},
{var: "SHATAGNI", str: "Shatagni"},
{var: "GENOESE_CROSSBOWMAN", str: "Genoese Crossbowman"},
{var: "ELITE_GENOESE_CROSSBOWMAN", str: "Elite Genoese Crossbowman"},
{var: "PAVISE", str: "Pavise"},
{var: "SILK_ROAD", str: "Silk Road"},
{var: "SAMURAI", str: "Samurai"},
{var: "ELITE_SAMURAI", str: "Elite Samurai"},
{var: "YASAMA", str: "Yasama"},
{var: "KATAPARUTO", str: "Kataparuto"},
{var: "BALLISTA_ELEPHANT", str: "Ballista Elephant"},
{var: "ELITE_BALLISTA_ELEPHANT", str: "Elite Ballista Elephant"},
{var: "TUSK_SWORDS", str: "Tusk Swords"},
{var: "DOUBLE_CROSSBOW", str: "Double Crossbow"},
{var: "WAR_WAGON", str: "War Wagon"},
{var: "ELITE_WAR_WAGON", str: "Elite War Wagon"},
{var: "PANOKSEON", str: "Panokseon"},
{var: "SHINKICHON", str: "Shinkichon"},
{var: "LEITIS", str: "Leitis"},
{var: "ELITE_LEITIS", str: "Elite Leitis"},
{var: "HILL_FORTS", str: "Hill Forts"},
{var: "TOWER_SHIELDS", str: "Tower Shields"},
{var: "MAGYAR_HUSZAR", str: "Magyar Huszar"},
{var: "ELITE_MAGYAR_HUSZAR", str: "Elite Magyar Huszar"},
{var: "MERCENARIES", str: "Corvinian Army"},
{var: "RECURVE_BOW", str: "Recurve Bow"},
{var: "KARAMBIT_WARRIOR", str: "Karambit Warrior"},
{var: "ELITE_KARAMBIT_WARRIOR", str: "Elite Karambit Warrior"},
{var: "THALASSOCRACY", str: "Thalassocracy"},
{var: "FORCED_LEVY", str: "Forced Levy"},
{var: "GBETO", str: "Gbeto"},
{var: "ELITE_GBETO", str: "Elite Gbeto"},
{var: "TIGUI", str: "Tigui"},
{var: "FARIMBA", str: "Farimba"},
{var: "PLUMED_ARCHER", str: "Plumed Archer"},
{var: "ELITE_PLUMED_ARCHER", str: "Elite Plumed Archer"},
{var: "OBSIDIAN_ARROWS", str: "Obsidian Arrows"},
{var: "EL_DORADO", str: "El Dorado"},
{var: "MANGUDAI", str: "Mangudai"},
{var: "ELITE_MANGUDAI", str: "Elite Mangudai"},
{var: "NOMADS", str: "Nomads"},
{var: "DRILL", str: "Drill"},
{var: "WAR_ELEPHANT", str: "War Elephant"},
{var: "ELITE_WAR_ELEPHANT", str: "Elite War Elephant"},
{var: "KAMANDARAN", str: "Kamandaran"},
{var: "MAHOUTS", str: "Mahouts"},
{var: "ORGAN_GUN", str: "Organ Gun"},
{var: "ELITE_ORGAN_GUN", str: "Elite Organ Gun"},
{var: "CARRACK", str: "Carrack"},
{var: "ARQUEBUS", str: "Arquebus"},
{var: "MAMELUKE", str: "Mameluke"},
{var: "ELITE_MAMELUKE", str: "Elite Mameluke"},
{var: "MADRASAH", str: "Madrasah"},
{var: "ZEALOTRY", str: "Zealotry"},
{var: "BOYAR", str: "Boyar"},
{var: "ELITE_BOYAR", str: "Elite Boyar"},
{var: "ORTHODOXY", str: "Orthodoxy"},
{var: "DRUZHINA", str: "Druzhina"},
{var: "CONQUISTADOR", str: "Conquistador"},
{var: "ELITE_CONQUISTADOR", str: "Elite Conquistador"},
{var: "INQUISITION", str: "Inquisition"},
{var: "SUPREMACY", str: "Supremacy"},
{var: "KESHIK", str: "Keshik"},
{var: "ELITE_KESHIK", str: "Elite Keshik"},
{var: "SILK_ARMOR", str: "Silk Armor"},
{var: "TIMURID_SIEGECRAFT", str: "Timurid Siegecraft"},
{var: "TEUTONIC_KNIGHT", str: "Teutonic Knight"},
{var: "ELITE_TEUTONIC_KNIGHT", str: "Elite Teutonic Knight"},
{var: "IRONCLAD", str: "Ironclad"},
{var: "CRENELLATIONS", str: "Crenellations"},
{var: "JANISSARY", str: "Janissary"},
{var: "ELITE_JANISSARY", str: "Elite Janissary"},
{var: "SIPAHI", str: "Sipahi"},
{var: "ARTILLERY", str: "Artillery"},
{var: "RATTAN_ARCHER", str: "Rattan Archer"},
{var: "ELITE_RATTAN_ARCHER", str: "Elite Rattan Archer"},
{var: "CHATRAS", str: "Chatras"},
{var: "PAPER_MONEY", str: "Paper Money"},
{var: "BERSERK", str: "Berserk"},
{var: "ELITE_BERSERK", str: "Elite Berserk"},
{var: "CHIEFTAINS", str: "Chieftains"},
{var: "BERSERKERGANG", str: "Berserkergang"},
];

for (let s of replacer) {
  let r = RegExp(`"${s.str}"`, 'g');
  json = json.replace(r, s.var);
}

json = json.replace(/"/g,'');


// lets do some regex
console.log(json);