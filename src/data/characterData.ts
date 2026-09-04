import { CharacterClassType, FantasyCharacter } from '../types';

export const FIRST_NAMES = [
  'Alden', 'Aeloria', 'Bram', 'Cassian', 'Darian', 'Elowen', 'Faelan',
  'Garrick', 'Hael', 'Ilyana', 'Jarek', 'Kaelen', 'Lyra', 'Mirela',
  'Nyx', 'Orion', 'Paige', 'Quinn', 'Roland', 'Seraphina', 'Theron',
  'Urien', 'Valeria', 'Wynne', 'Xanthos', 'Yvaine', 'Zephyr', 'Morgrim',
  'Gwyneira', 'Thorgar', 'Astrid', 'Finnian', 'Kaelith', 'Balthazar',
  'Drakos', 'Sable', 'Vesper', 'Branoc', 'Isolde', 'Lorcan', 'Maeve',
  'Cedric', 'Thalia', 'Rory', 'Rowan', 'Torin', 'Kallista', 'Alastor'
];

export const SURNAMES = [
  'Emberveil', 'Silverthorn', 'Shadowstride', 'Ironbreaker', 'Stormcaller',
  'Nightshade', 'Frostfang', 'Deepdelver', 'Starweaver', 'Sunblade',
  'Ravenshade', 'Bloodthorn', 'Mistwhisper', 'Duskbane', 'Oakenheart',
  'Wyrmslayer', 'Gloomveil', 'Runecrest', 'Dawnchaser', 'Stoneguard',
  'Swiftwind', 'Hollowglen', 'Winterborne', 'Flameborne', 'Grimhold',
  'Ashenvale', 'Blackwood', 'Moonshadow', 'Ironfist', 'Goldmane'
];

export const CLASS_PROFILES: Record<
  CharacterClassType,
  {
    titles: string[];
    flavor: string;
    weapons: string[];
    origins: string[];
    badgeColor: {
      bg: string;
      border: string;
      text: string;
      accent: string;
      glow: string;
    };
    iconName: string;
    baseStats: { might: number; agility: number; intellect: number; spirit: number };
  }
> = {
  Warrior: {
    titles: [
      'The Unyielding Bulwark',
      'Blade of the Vanguard',
      'Iron Champion',
      'Colossus of the North',
      'Breaker of Siege-Lines'
    ],
    flavor: 'Tempered in the fires of endless battle, standing as an impenetrable wall between companions and catastrophe.',
    weapons: ['Runed Greathammer', 'Heavy Bastard Sword', 'Forged Tower Shield & Spear', 'Twin Broadaxes'],
    origins: ['The Ashen Bastion', 'Highland Stronghold of Doran', 'Fortress of the Iron March', 'Stormcrag Peaks'],
    badgeColor: {
      bg: 'bg-amber-950/40',
      border: 'border-amber-600/40',
      text: 'text-amber-300',
      accent: 'bg-amber-500',
      glow: 'shadow-amber-500/20'
    },
    iconName: 'Swords',
    baseStats: { might: 18, agility: 12, intellect: 8, spirit: 11 }
  },
  Mage: {
    titles: [
      'Weaver of the Arcane Weave',
      'Master of Starlight',
      'Chronocaster of Oros',
      'Keeper of the Forgotten Grimoire',
      'Scholar of Prismatic Fire'
    ],
    flavor: 'Channels raw cosmic and elemental energies to bend reality, conjure blazing storms, and unravel primordial mysteries.',
    weapons: ['Astral Crystal Staff', 'Tome of Prismatic Seals', 'Spire Spellblade', 'Celestial Orrery Orb'],
    origins: ['The Floating Citadel of Aethel', 'Great Archives of Oros', 'Sunken Observatory', 'Glass Spire of Valis'],
    badgeColor: {
      bg: 'bg-cyan-950/40',
      border: 'border-cyan-500/40',
      text: 'text-cyan-300',
      accent: 'bg-cyan-500',
      glow: 'shadow-cyan-500/20'
    },
    iconName: 'Wand2',
    baseStats: { might: 7, agility: 10, intellect: 19, spirit: 14 }
  },
  Rogue: {
    titles: [
      'Ghost of the Gilded Alley',
      'Shadow of the Obsidian Ring',
      'Silent Blade of Dusk',
      'The Whispering Dagger',
      'Phantom of the High Guild'
    ],
    flavor: 'Moves unseen through the deepest shadows, striking with lethal precision before vanishing into the midnight fog.',
    weapons: ['Serrated Shadowdaggers', 'Concealed Spring-Blades', 'Blackglass Hand-Crossbow', 'Venom-Tipped Stiletto'],
    origins: ['Undercity of Ravenholme', 'Guild of Whispers', 'The Sunless Docks', 'Shrouded Reach'],
    badgeColor: {
      bg: 'bg-emerald-950/40',
      border: 'border-emerald-500/40',
      text: 'text-emerald-300',
      accent: 'bg-emerald-500',
      glow: 'shadow-emerald-500/20'
    },
    iconName: 'Zap',
    baseStats: { might: 11, agility: 19, intellect: 13, spirit: 9 }
  },
  Paladin: {
    titles: [
      'Vindicator of the Silver Flame',
      'Shield of the Radiant Dawn',
      'Hand of Sacred Justice',
      'Oathkeeper of the Sun',
      'Paragon of the High Templars'
    ],
    flavor: 'Bound by sacred unbreakable oaths, smiting creeping darkness with blinding radiance while shielding the innocent.',
    weapons: ['Sunforged Greatsword', 'Blessed Tower Shield & Mace', 'Radiant Halberd', 'Hammer of the Justiciar'],
    origins: ['The Radiant Sanctum', 'Cathedral of the Dawnspire', 'Order of the Silver Chalice', 'Luminous Watch'],
    badgeColor: {
      bg: 'bg-yellow-950/40',
      border: 'border-yellow-500/40',
      text: 'text-yellow-300',
      accent: 'bg-yellow-400',
      glow: 'shadow-yellow-500/20'
    },
    iconName: 'ShieldCheck',
    baseStats: { might: 16, agility: 9, intellect: 11, spirit: 17 }
  },
  Ranger: {
    titles: [
      'Ghost of the Whispering Woods',
      'Warden of the Primal Frontier',
      'Hawkeye of the Crags',
      'The Emerald Stalker',
      'Guardian of the Silent Tracks'
    ],
    flavor: 'At one with the untamed wilderness, tracking quarry over treacherous peaks and unleashing devastating volleys from afar.',
    weapons: ['Yew Longbow of the Canopy', 'Twin Curved Hunting Knives', 'Composite Recurve Bow', 'Fletched Greatbow'],
    origins: ['Deep Sylvan Glade', 'Frostpeak Timberlands', 'Mistwood Expanse', 'Verdant Reach'],
    badgeColor: {
      bg: 'bg-lime-950/40',
      border: 'border-lime-500/40',
      text: 'text-lime-300',
      accent: 'bg-lime-500',
      glow: 'shadow-lime-500/20'
    },
    iconName: 'Compass',
    baseStats: { might: 13, agility: 18, intellect: 11, spirit: 12 }
  },
  Cleric: {
    titles: [
      'Beacon of Sacred Grace',
      'Voice of the High Heavens',
      'Restorer of Broken Spirits',
      'Shepherd of the Lost',
      'Keeper of the Eternal Shrine'
    ],
    flavor: 'A devout conduit of celestial grace, mending mortal wounds and casting out malevolent horrors with consecrated words.',
    weapons: ['Sanctified Warflail', 'Censer of Cleansing Light', 'Silver Reliquary Staff', 'Dawn Anointed Scepter'],
    origins: ['Temple of the Seven Embers', 'The Solitary Cloister', 'Shrine of Eternal Waters', 'Celestial Terrace'],
    badgeColor: {
      bg: 'bg-rose-950/40',
      border: 'border-rose-500/40',
      text: 'text-rose-300',
      accent: 'bg-rose-500',
      glow: 'shadow-rose-500/20'
    },
    iconName: 'Sparkles',
    baseStats: { might: 12, agility: 8, intellect: 14, spirit: 19 }
  },
  Bard: {
    titles: [
      'Maestro of the Gilded Court',
      'Balladeer of the Fallen Kings',
      'Weaver of Whispered Lore',
      'Virtuoso of the Silver String',
      'Jester of the High Thorns'
    ],
    flavor: 'Weaves melody, illusion, and ancient sagas into mesmerizing magic, inspiring courage and disorienting adversaries.',
    weapons: ['Starwood Lute & Rapier', 'Enchanted Flute of Charms', 'Gilded Dueling Foil', 'Bells of Twilight'],
    origins: ['Academy of Lyric Arts', 'Traveling Troupe of Sol', 'Gilded Opera of Mirand', 'The Whispering Tavern'],
    badgeColor: {
      bg: 'bg-purple-950/40',
      border: 'border-purple-500/40',
      text: 'text-purple-300',
      accent: 'bg-purple-500',
      glow: 'shadow-purple-500/20'
    },
    iconName: 'Music',
    baseStats: { might: 9, agility: 15, intellect: 15, spirit: 15 }
  },
  Druid: {
    titles: [
      'Speaker for the Primordial Wilds',
      'Guardian of the Ancient Grove',
      'Warden of the Bloodroot',
      'Spirit of the Great Forest',
      'Keeper of the Moonwell'
    ],
    flavor: 'Attuned to the raw cycle of earth and seasons, commanding roots, lightning, and shapeshifting into apex beasts.',
    weapons: ['Gnarled Ironwood Staff', 'Obsidian Scythe', 'Claws of the Apex Beast', 'Totemic Antler Club'],
    origins: ['Elder Grove of Yggdras', 'Sunken Bog of Elders', 'Whispering Canopy', 'Root of the World'],
    badgeColor: {
      bg: 'bg-teal-950/40',
      border: 'border-teal-500/40',
      text: 'text-teal-300',
      accent: 'bg-teal-500',
      glow: 'shadow-teal-500/20'
    },
    iconName: 'Leaf',
    baseStats: { might: 13, agility: 12, intellect: 14, spirit: 18 }
  },
  Warlock: {
    titles: [
      'Harbinger of the Void Pact',
      'Soulbinder of Nether Realms',
      'Disciple of the Eldritch Deep',
      'The Stygian Occultist',
      'Whisperer of the Outer Gate'
    ],
    flavor: 'Bound by a forbidden bargain with ancient entities of the outer stars, commanding eldritch curses and soulfire.',
    weapons: ['Eldritch Eye Focus', 'Tome of Inverted Seals', 'Spine of the Void Drake', 'Athame of Black Glass'],
    origins: ['Sunken Vault of Xol', 'Chasm of Whispering Stars', 'Ruins of the Abyssal Pact', 'The Black Sanctum'],
    badgeColor: {
      bg: 'bg-indigo-950/40',
      border: 'border-indigo-500/40',
      text: 'text-indigo-300',
      accent: 'bg-indigo-500',
      glow: 'shadow-indigo-500/20'
    },
    iconName: 'Flame',
    baseStats: { might: 8, agility: 11, intellect: 18, spirit: 16 }
  },
  Monk: {
    titles: [
      'Disciple of the Flowing River',
      'Master of the Iron Palm',
      'Windwalker of the High Peaks',
      'Ascetic of the Quiet Mind',
      'Strike of the Crane'
    ],
    flavor: 'Harnesses internal ki through focused contemplation, unleashing lightning flurries and defying gravity with effortless poise.',
    weapons: ['Polished Bo Staff', 'Wrappings of Ascended Ki', 'Twin Iron Nunchaku', 'Bare Fists of the Tiger'],
    origins: ['High Cloud Monastery', 'Valley of the Silent Falls', 'Temple of the Four Winds', 'Serene Summit'],
    badgeColor: {
      bg: 'bg-orange-950/40',
      border: 'border-orange-500/40',
      text: 'text-orange-300',
      accent: 'bg-orange-500',
      glow: 'shadow-orange-500/20'
    },
    iconName: 'Target',
    baseStats: { might: 14, agility: 18, intellect: 11, spirit: 16 }
  }
};

export const ALL_CLASSES: CharacterClassType[] = [
  'Warrior',
  'Mage',
  'Rogue',
  'Paladin',
  'Ranger',
  'Cleric',
  'Bard',
  'Druid',
  'Warlock',
  'Monk'
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomStatVariation(base: number): number {
  const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
  return Math.max(5, Math.min(20, base + delta));
}

export const CLASS_COMBAT_STATS: Record<
  CharacterClassType,
  { health: [number, number]; mana: [number, number]; strength: [number, number] }
> = {
  Warrior: { health: [450, 580], mana: [60, 130], strength: [75, 98] },
  Mage: { health: [190, 290], mana: [480, 680], strength: [18, 36] },
  Rogue: { health: [260, 360], mana: [150, 260], strength: [50, 72] },
  Paladin: { health: [420, 540], mana: [240, 380], strength: [70, 92] },
  Ranger: { health: [300, 410], mana: [180, 300], strength: [55, 78] },
  Cleric: { health: [320, 440], mana: [380, 560], strength: [42, 65] },
  Bard: { health: [270, 380], mana: [320, 490], strength: [38, 62] },
  Druid: { health: [340, 460], mana: [340, 520], strength: [52, 74] },
  Warlock: { health: [250, 350], mana: [460, 640], strength: [30, 52] },
  Monk: { health: [350, 470], mana: [220, 350], strength: [66, 88] },
};

export function generateRandomCharacter(previousId?: string): FantasyCharacter {
  const firstName = getRandomItem(FIRST_NAMES);
  const surname = getRandomItem(SURNAMES);
  const fullName = `${firstName} ${surname}`;

  const characterClass = getRandomItem(ALL_CLASSES);
  const profile = CLASS_PROFILES[characterClass];

  const title = getRandomItem(profile.titles);
  const weapon = getRandomItem(profile.weapons);
  const origin = getRandomItem(profile.origins);

  const combatRange = CLASS_COMBAT_STATS[characterClass] || {
    health: [300, 450],
    mana: [200, 400],
    strength: [40, 70],
  };

  const health = Math.floor(Math.random() * (combatRange.health[1] - combatRange.health[0] + 1)) + combatRange.health[0];
  const mana = Math.floor(Math.random() * (combatRange.mana[1] - combatRange.mana[0] + 1)) + combatRange.mana[0];
  const strength = Math.floor(Math.random() * (combatRange.strength[1] - combatRange.strength[0] + 1)) + combatRange.strength[0];

  const stats = {
    health,
    mana,
    strength,
    might: getRandomStatVariation(profile.baseStats.might),
    agility: getRandomStatVariation(profile.baseStats.agility),
    intellect: getRandomStatVariation(profile.baseStats.intellect),
    spirit: getRandomStatVariation(profile.baseStats.spirit)
  };

  return {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    name: fullName,
    className: characterClass,
    title,
    flavor: profile.flavor,
    primaryWeapon: weapon,
    origin,
    badgeColor: profile.badgeColor,
    iconName: profile.iconName,
    stats,
    generatedAt: Date.now()
  };
}
