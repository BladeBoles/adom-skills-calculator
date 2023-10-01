const raceObjects = [
  {
    name: 'Human',
    skills: ['Climbing', 'Food Preservation', 'Haggling', 'Swimming'],
    notes: 'none'
  },
  {
    name: 'Troll',
    skills: [
      'Athletics',
      'Bridge Building',
      'Climbing',
      'Food Preservation',
      'Gemology',
      'Mining'
    ],
    notes: 'none'
  },
  {
    name: 'High Elf',
    skills: ['Climbing', 'Dodge', 'Listening', 'Literacy', 'Stealth'],
    notes: 'none'
  },
  {
    name: 'Gray Elf',
    skills: ['Climbing', 'Dodge', 'Listening', 'Literacy', 'Stealth'],
    notes: 'none'
  },
  {
    name: 'Dark Elf',
    skills: ['Alertness', 'Climbing', 'Find Weakness', 'Stealth'],
    notes: 'none'
  },
  {
    name: 'Dwarf',
    skills: ['Climbing', 'Detect Traps', 'Metallurgy', 'Mining', 'Smithing'],
    notes: 'none'
  },
  {
    name: 'Gnome',
    skills: [
      'Climbing',
      'Gemology',
      'Listening',
      'Mining',
      'Pick Pockets',
      'Ventriloquism'
    ],
    notes: 'none'
  },
  {
    name: 'Hurthling',
    skills: ['Archery', 'Cooking', 'Food Preservation', 'Gardening', 'Stealth'],
    notes: 'none'
  },
  {
    name: 'Orc',
    skills: ['Backstabbing', 'Find Weakness', 'Metallurgy', 'Mining'],
    notes: 'none'
  },
  {
    name: 'Drakeling',
    skills: ['Alertness', 'Food Preservation', 'Music', 'Swimming'],
    notes: 'none'
  },
  {
    name: 'Mist Elf',
    skills: ['Alertness', 'Concentration', 'Dodge', 'Literacy', 'Necromancy'],
    notes: 'none'
  },
  {
    name: 'Ratling',
    skills: ['Appraising', 'Detect Item Status', 'Survival', 'Swimming'],
    notes: 'none'
  }
]
const playableRaces = [
  'Dark Elf',
  'Drakeling',
  'Dwarf',
  'Gnome',
  'Gray Elf',
  'High Elf',
  'Human',
  'Hurthling',
  'Mist Elf',
  'Orc',
  'Ratling',
  'Troll'
]

const playableProfessions = [
  'Archer',
  'Assassin',
  'Barbarian',
  'Bard',
  'Beastfighter',
  'Chaos Knight',
  'Druid',
  'Duelist',
  'Elementalist',
  'Farmer',
  'Fighter',
  'Healer',
  'Merchant',
  'Mindcrafter',
  'Monk',
  'Necromancer',
  'Paladin',
  'Priest',
  'Ranger',
  'Thief',
  'Weaponsmith',
  'Wizard'
]
const skillsList = [
  {
    name: 'Alchemy',
    description: 'Allowsbrewingpotionsusingafixedlistofrecipes',
    races: [],
    professions: ['Assassin', 'Merchant', 'Necromancer', 'Wizard'],
    inGame: false
  },
  {
    name: 'Alertness',
    description: 'Givesachancetoevadecombatmagicandtrap',
    races: ['Dark Elf', 'Drakeling', 'Mist Elf'],
    professions: [
      'Archer',
      'Assassin',
      'Duelist',
      'Healer',
      'Monk',
      'Ranger',
      'Thief'
    ],
    inGame: false
  },
  {
    name: 'Appraising',
    description: 'Performsitemqualityevaluation',
    races: ['Ratling'],
    professions: ['Merchant', 'Necromancer', 'Thief', 'Weaponsmith'],
    inGame: false
  },
  {
    name: 'Archery',
    description: 'Grantsmissileattackbonuses',
    races: ['Hurthling'],
    professions: ['Archer', 'Assassin', ' Farmer', 'Fighter', 'Ranger'],
    inGame: false
  },
  {
    name: 'Athletics',
    description: 'Grantsspeedbonus,helpsphysicalAttributestraining',
    races: ['Troll'],
    professions: [
      'Barbarian',
      'Beastfighter',
      'Chaos Knight',
      'Duelist',
      'Fighter',
      'Monk',
      'Paladin',
      'Ranger',
      'Weaponsmith'
    ],
    inGame: false
  },
  {
    name: 'Backstabbing',
    description: 'Grantsachancetoinflictbonusdamageonunawareopponents',
    races: ['Orc'],
    professions: ['Assassin', 'Chaos Knight', ' Thief'],
    inGame: true
  },
  {
    name: 'Bridge Building',
    description: 'Allowsbuildingbridges',
    races: ['Troll'],
    professions: ['Farmer'],
    inGame: true
  },
  // {
  //   name: 'Climbing',
  //   description:
  //     'Grantsachancetoclimboutofpits;prerequisitetoentertheRift',
  //   races: ['All'],
  //   professions: ['All'],
  //   inGame: false
  // },
  {
    name: 'Concentration',
    description: 'IncreasesPPregenerationrate;improvesspelllearningprocess',
    races: ['Mist Elf'],
    professions: [
      'Archer',
      'Druid',
      'Duelist',
      'Elementalist',
      'Healer',
      'Mindcrafter',
      'Monk',
      'Necromancer',
      'Paladin',
      'Priest',
      'Weaponsmith',
      'Wizard'
    ],
    inGame: false
  },
  {
    name: 'Cooking',
    description: 'Allowscookingcorpses',
    races: ['Hurthling'],
    professions: ['Healer', 'Farmer'],
    inGame: false
  },
  // {
  //   name: 'Courage',
  //   description: 'Reducesto-hitpenaltieswhenfightingwithmultipleenemies',
  //   races: ['None'],
  //   professions: ['None'],
  //   inGame: true
  // },
  {
    name: 'Detect Item Status',
    description: 'GivesachancetoautomaticallyidentifyB/U/Cstatusofanitem',
    races: ['Ratling'],
    professions: ['Merchant', 'Priest'],
    inGame: false
  },
  {
    name: 'Detect Traps',
    description: 'Givesachancetofindtrapspassively/onthespecifiedlocation',
    races: ['Dwarf'],
    professions: ['Assassin', 'Thief', 'Weaponsmith'],
    inGame: true
  },
  {
    name: 'Disarm Traps',
    description: 'Allowsdisarmingtraps',
    races: ['None'],
    professions: ['Thief'],
    inGame: true
  },
  {
    name: 'Dodge',
    description: 'GrantsDVbonus,grantsasmallchancetoavoidcombatmagic',
    races: ['High Elf', 'Gray Elf', 'Mist Elf'],
    professions: [
      'Archer',
      'Assassin',
      'Barbarian',
      'Beastfighter',
      'Chaos Knight',
      'Duelist',
      'Fighter',
      'Monk',
      'Paladin',
      'Ranger'
    ],
    inGame: false
  },
  {
    name: 'Find Weakness',
    description: 'Grantsachancetoinflictacriticalhit',
    races: ['Dark Elf', 'Orc'],
    professions: [
      'Assassin',
      'Chaos Knight',
      'Duelist',
      'Fighter',
      'Healer',
      'Monk',
      'Necromancer',
      'Weaponsmith'
    ],
    inGame: false
  },
  // {
  //   name: 'First Aid',
  //   description: 'CanbeusedtorestorerecentlylostHP',
  //   races: ['All'],
  //   professions: ['All'],
  //   inGame: false
  // },
  {
    name: 'Fletchery',
    description: 'Allowscreatingammunitionusingfletcherysets',
    races: ['None'],
    professions: ['Archer', 'Farmer'],
    inGame: false
  },
  {
    name: 'Food Preservation',
    description:
      'Increasesthechancetogeneratecorpses,helpspreservecorpseslonger',
    races: ['Drakeling', 'Human', 'Hurthling', 'Troll'],
    professions: ['Farmer', 'Necromancer', 'Ranger'],
    inGame: false
  },
  {
    name: 'Gardening',
    description:
      'Allowsplantingherbbushesandgatheringherbseedsfromblossomingbushes',
    races: ['Hurthling'],
    professions: ['Druid', 'Farmer'],
    inGame: true
  },
  {
    name: 'Gemology',
    description:
      'Grantsachancetogenerateandautomaticallyidentifygemsfromdigging',
    races: ['Gnome', 'Troll'],
    professions: ['Elementalist', 'Merchant', 'Mindcrafter'],
    inGame: false
  },
  // {
  //   name: 'Haggling',
  //   description: 'Canbeusedtohagglewithshopkeepers',
  //   races: ['All'],
  //   professions: ['All'],
  //   inGame: false
  // },
  {
    name: 'Healing',
    description: 'PassivelyrestoresHP',
    races: ['None'],
    professions: [
      'Beastfighter',
      'Druid',
      'Duelist',
      'Elementalist',
      'Healer',
      'Monk',
      'Paladin',
      'Priest',
      'Ranger',
      'Wizard'
    ],
    inGame: true
  },
  {
    name: 'Herbalism',
    description: 'Improvesthequality(B/U/Cstatus)ofcollectedherbs',
    races: ['None'],
    professions: [
      'Barbarian',
      'Beastfighter',
      'Druid',
      'Farmer',
      'Healer',
      'Merchant',
      'Mindcrafter',
      'Necromancer',
      'Priest',
      'Ranger',
      'Wizard'
    ],
    inGame: true
  },
  {
    name: 'Law',
    description: 'ProvidesmessageswhenthePCperformslawful/chaoticacts',
    races: ['None'],
    professions: ['Duelist', 'Paladin'],
    inGame: true
  },
  // {
  //   name: 'Listening',
  //   description:
  //     'Increasesthechanceofreceivingaudiblemessages(e.g.poolorriversounds)',
  //   races: ['All'],
  //   professions: ['All'],
  //   inGame: false
  // },
  {
    name: 'Literacy',
    description: 'Allowsreadingscrolls,spellbooksandinscriptionsongraves',
    races: ['High Elf', 'Gray Elf', 'Mist Elf', 'Learning > 9'],
    professions: [
      'Druid',
      'Elementalist',
      'Healer',
      'Merchant',
      'Mindcrafter',
      'Monk',
      'Necromancer',
      'Paladin',
      'Priest',
      'Wizard',
      'Learning > 9'
    ],
    inGame: true
  },
  {
    name: 'Metallurgy',
    description: 'Canbeusedtoidentifyitemmaterialifitismetallic',
    races: ['Dwarf', ' Orc'],
    professions: ['Elementalist', 'Fighter', 'Merchant', 'Weaponsmith'],
    inGame: false
  },
  {
    name: 'Mining',
    description: 'Reducesdiggingtime;increasesthechancetogenerateore',
    races: ['Dwarf', 'Gnome', 'Orc', 'Troll'],
    professions: ['None'],
    inGame: false
  },
  {
    name: 'Music',
    description: 'Allowsplayingmusicalinstrumentstotameanimals',
    races: ['Drakeling'],
    professions: ['Bard', 'Mindcrafter', ' Priest'],
    inGame: false
  },
  {
    name: 'Necromancy',
    description: 'Canbeusedtocreateundeadslaves',
    races: ['Mist Elf'],
    professions: ['Necromancer'],
    inGame: false
  },
  {
    name: 'Pick Locks',
    description: 'Allowstheuseofthievespickstoopenlockeddoors',
    races: ['None'],
    professions: ['Assassin', 'Thief'],
    inGame: true
  },
  {
    name: 'Pick Pockets',
    description: 'Canbeusedtostealfromhumanoidenemies',
    races: ['Gnome'],
    professions: ['Merchant', 'Thief'],
    inGame: true
  },
  {
    name: 'Smithing',
    description: 'Canbeappliedtouseaforgetoimprovemetallicitems',
    races: ['Dwarf'],
    professions: ['Farmer', 'Weaponsmith'],
    inGame: true
  },
  {
    name: 'Stealth',
    description: 'Grantsachancetonotbedetectedbymonsters/NPCs',
    races: [
      'Dark Elf',
      ' Gray Elf',
      'High Elf',
      'Hurthling',
      ' Mist Elf',
      'Ratling'
    ],
    professions: [
      'Archer',
      'Assassin',
      ' Barbarian',
      'Beastfighter',
      'Farmer',
      'Fighter',
      'Mindcrafter',
      'Monk',
      'Necromancer',
      'Paladin',
      'Thief',
      'Wizard'
    ],
    inGame: true
  },
  {
    name: 'Survival',
    description: 'Canbeusedtofindfoodinthewilderness',
    races: ['RatlingorbornunderFalcon'],
    professions: [
      'Barbarian',
      'Beastfighter',
      'Druid',
      'Farmer',
      'Merchant',
      'Ranger(oranycharacterbornunderFalcon)'
    ],
    inGame: false
  },
  {
    name: 'Swimming',
    description: 'Reducesdrowningdamage',
    races: ['Drakeling', 'Human', 'Ratling'],
    professions: [
      'Barbarian',
      'Beastfighter',
      'Druid',
      'Elementalist',
      'Fighter',
      'Paladin',
      'Ranger'
    ],
    inGame: true
  },
  {
    name: 'Tactics',
    description: 'Increasestacticsbonusesanddecreasespenalties',
    races: ['None'],
    professions: ['None'],
    inGame: true
  },
  {
    name: 'Two Weapon Combat',
    description: 'Decreasesto-hitandenergycostpenaltieswhiledual-wielding',
    races: ['None'],
    professions: [
      'Assassin',
      'Barbarian',
      'Chaos Knight',
      'Fighter',
      'Paladin',
      'Ranger'
    ],
    inGame: true
  },
  {
    name: 'Ventriloquism',
    description: 'Canbeusedtoconfusemonstersforseveralturns',
    races: ['Gnome'],
    professions: ['Wizard'],
    inGame: false
  },
  {
    name: 'Woodcraft',
    description:
      'Decreasesthetimetocutdowntrees,increasescriticalhitchanceagainstplantmonsters',
    races: ['None'],
    professions: ['Barbarian', 'Druid', 'Farmer', 'Ranger'],
    inGame: false
  }
]

// const allCombinationsFormula = () => {
//   let allCombosArray = []
//   playableRaces.forEach(race => {
//     playableProfessions.forEach(playableProfession => {
//       allCombosArray.push({
//         race,
//         playableProfession,
//         skills: [],
//         doubleSkills: []
//       })
//     })
//   })

//   skillsList.forEach(skill => {
//     allCombosArray.forEach(combo => {
//       if (
//         skill.races.includes(combo.race) &&
//         skill.professions.includes(combo.playableProfession)
//       ) {
//         return combo.doubleSkills.push(skill.name)
//       }

//       if (
//         skill.races.includes(combo.race) ||
//         skill.professions.includes(combo.playableProfession)
//       ) {
//         return combo.skills.push(skill.name)
//       }
//     })
//   })

//   return allCombosArray
// }

export {
  raceObjects,
  playableRaces,
  playableProfessions,
  skillsList
}
