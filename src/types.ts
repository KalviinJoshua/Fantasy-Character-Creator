export type CharacterClassType =
  | 'Warrior'
  | 'Mage'
  | 'Rogue'
  | 'Paladin'
  | 'Ranger'
  | 'Cleric'
  | 'Bard'
  | 'Druid'
  | 'Warlock'
  | 'Monk';

export interface CharacterStats {
  health: number;
  mana: number;
  strength: number;
  might: number;
  agility: number;
  intellect: number;
  spirit: number;
}

export interface CharacterPortraitData {
  variant: number;
  styleName: string;
  gearTitle: string;
  paletteTheme: string;
  renderedUrl?: string;
  seed: number;
  generatedAt: number;
}

export interface FantasyCharacter {
  id: string;
  name: string;
  className: CharacterClassType;
  title: string;
  flavor: string;
  primaryWeapon: string;
  origin: string;
  badgeColor: {
    bg: string;
    border: string;
    text: string;
    accent: string;
    glow: string;
  };
  iconName: string;
  stats: CharacterStats;
  portrait?: CharacterPortraitData;
  backstory?: string;
  isCustomBackstory?: boolean;
  generatedAt: number;
}
