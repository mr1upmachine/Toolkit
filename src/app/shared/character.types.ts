export interface ICharacter {
  name: string;
  height?: number;
  weight?: number;
}

export interface ICharacterMeta {
  metadataCards: string[];
  metadataGameSystem: string;
}

export type ICharacterFb = ICharacter & ICharacterMeta;

export interface IDnD5eCharacter extends ICharacter, ICharacterMeta {
  ac: number;
  alignment?: EDnd5eAlignment;
  class: EDnd5eClass;
  deathSaves: {
    success: number;
    failure: number;
  };
  exp: number;
  gold: {
    total: number;
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
  };
  hitDice: string;
  hp: {
    current: number;
    max: number;
    temp: number;
  };
  inspiration: boolean;
  level: number;
  proficiencyBonus: number;
  race: EDnD5eRace;
  savingThrows: IDnd5eStats;
  speed: number;
  stats: IDnd5eStats;
}

export interface IDnd5eStats {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export enum EDnd5eAlignment {
  LawfulGood,
  NeutralGood,
  ChaoticGood,
  LawfulNeutral,
  TrueNeutral,
  ChaoticNeutral,
  LawfulEvil,
  NeutralEvil,
  ChaoticEvil
}

export enum EDnd5eClass {
  Barbarian,
  Bard,
  Cleric,
  Druid,
  Fighter,
  Monk,
  Paladin,
  Ranger,
  Rogue,
  Sorcerer,
  Warlock,
  Wizard
}

export enum EDnD5eRace {
  Aarakocra,
  Aasimar,
  Aetherborn,
  Aven,
  Bugbear,
  Centaur,
  Changeling,
  Dragonborn,
  Dwarf,
  Elf,
  Firbolg,
  Genasi,
  Gith,
  Gnome,
  Goblin,
  Goliath,
  HalfElf,
  HalfOrc,
  Halfling,
  Hobgoblin,
  Human,
  Kalashtar,
  Kenku,
  Khenra,
  Kobold,
  Kor,
  Lizardfolk,
  Loxodon,
  Merfolk,
  Minotaur,
  Naga,
  Orc,
  Revenant,
  Shifter,
  SimicHybrid,
  Siren,
  Tabaxi,
  TheAbomination,
  Tiefling,
  Tortle,
  Triton,
  Vampire,
  Vedalken,
  Viashino,
  Warforged,
  YuanTiPureblood
}

export enum EDnD5eSkills {
  Acrobatics,
  AnimalHandling,
  Arcana,
  Athletics,
  Deception,
  History,
  Insight,
  Intimidation,
  Investigation,
  Medicine,
  Nature,
  Perception,
  Performance,
  Persuasion,
  Religion,
  SleightOfHand,
  Stealth,
  Survival
}
