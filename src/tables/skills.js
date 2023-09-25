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

const playableClasses = [
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
    classes: ['Assassin', 'Merchant', 'Necromancer', 'Wizard'],
    inGame: false
  },
  {
    name: 'Alertness',
    description: 'Givesachancetoevadecombatmagicandtrap',
    races: ['Dark Elf', 'Drakeling', 'Mist Elf'],
    classes: [
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
    classes: ['Merchant', 'Necromancer', 'Thief', 'Weaponsmith'],
    inGame: false
  },
  {
    name: 'Archery',
    description: 'Grantsmissileattackbonuses',
    races: ['Hurthling'],
    classes: ['Archer', 'Assassin', ' Farmer', 'Fighter', 'Ranger'],
    inGame: false
  },
  {
    name: 'Athletics',
    description: 'Grantsspeedbonus,helpsphysicalAttributestraining',
    races: ['Troll'],
    classes: [
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
    classes: ['Assassin', 'Chaos Knight', ' Thief'],
    inGame: true
  },
  {
    name: 'Bridge Building',
    description: 'Allowsbuildingbridges',
    races: ['Troll'],
    classes: ['Farmer'],
    inGame: true
  },
  // {
  //   name: 'Climbing',
  //   description:
  //     'Grantsachancetoclimboutofpits;prerequisitetoentertheRift',
  //   races: ['All'],
  //   classes: ['All'],
  //   inGame: false
  // },
  {
    name: 'Concentration',
    description: 'IncreasesPPregenerationrate;improvesspelllearningprocess',
    races: ['Mist Elf'],
    classes: [
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
    classes: ['Healer', 'Farmer'],
    inGame: false
  },
  // {
  //   name: 'Courage',
  //   description: 'Reducesto-hitpenaltieswhenfightingwithmultipleenemies',
  //   races: ['None'],
  //   classes: ['None'],
  //   inGame: true
  // },
  {
    name: 'Detect Item Status',
    description: 'GivesachancetoautomaticallyidentifyB/U/Cstatusofanitem',
    races: ['Ratling'],
    classes: ['Merchant', 'Priest'],
    inGame: false
  },
  {
    name: 'Detect Traps',
    description: 'Givesachancetofindtrapspassively/onthespecifiedlocation',
    races: ['Dwarf'],
    classes: ['Assassin', 'Thief', 'Weaponsmith'],
    inGame: true
  },
  {
    name: 'Disarm Traps',
    description: 'Allowsdisarmingtraps',
    races: ['None'],
    classes: ['Thief'],
    inGame: true
  },
  {
    name: 'Dodge',
    description: 'GrantsDVbonus,grantsasmallchancetoavoidcombatmagic',
    races: ['High Elf', 'Gray Elf', 'Mist Elf'],
    classes: [
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
    classes: [
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
  //   classes: ['All'],
  //   inGame: false
  // },
  {
    name: 'Fletchery',
    description: 'Allowscreatingammunitionusingfletcherysets',
    races: ['None'],
    classes: ['Archer', 'Farmer'],
    inGame: false
  },
  {
    name: 'Food Preservation',
    description:
      'Increasesthechancetogeneratecorpses,helpspreservecorpseslonger',
    races: ['Drakeling', 'Human', 'Hurthling', 'Troll'],
    classes: ['Farmer', 'Necromancer', 'Ranger'],
    inGame: false
  },
  {
    name: 'Gardening',
    description:
      'Allowsplantingherbbushesandgatheringherbseedsfromblossomingbushes',
    races: ['Hurthling'],
    classes: ['Druid', 'Farmer'],
    inGame: true
  },
  {
    name: 'Gemology',
    description:
      'Grantsachancetogenerateandautomaticallyidentifygemsfromdigging',
    races: ['Gnome', 'Troll'],
    classes: ['Elementalist', 'Merchant', 'Mindcrafter'],
    inGame: false
  },
  // {
  //   name: 'Haggling',
  //   description: 'Canbeusedtohagglewithshopkeepers',
  //   races: ['All'],
  //   classes: ['All'],
  //   inGame: false
  // },
  {
    name: 'Healing',
    description: 'PassivelyrestoresHP',
    races: ['None'],
    classes: [
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
    classes: [
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
    classes: ['Duelist', 'Paladin'],
    inGame: true
  },
  // {
  //   name: 'Listening',
  //   description:
  //     'Increasesthechanceofreceivingaudiblemessages(e.g.poolorriversounds)',
  //   races: ['All'],
  //   classes: ['All'],
  //   inGame: false
  // },
  {
    name: 'Literacy',
    description: 'Allowsreadingscrolls,spellbooksandinscriptionsongraves',
    races: ['High Elf', 'Gray Elf', 'Mist Elf', 'Learning > 9'],
    classes: [
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
    classes: ['Elementalist', 'Fighter', 'Merchant', 'Weaponsmith'],
    inGame: false
  },
  {
    name: 'Mining',
    description: 'Reducesdiggingtime;increasesthechancetogenerateore',
    races: ['Dwarf', 'Gnome', 'Orc', 'Troll'],
    classes: ['None'],
    inGame: false
  },
  {
    name: 'Music',
    description: 'Allowsplayingmusicalinstrumentstotameanimals',
    races: ['Drakeling'],
    classes: ['Bard', 'Mindcrafter', ' Priest'],
    inGame: false
  },
  {
    name: 'Necromancy',
    description: 'Canbeusedtocreateundeadslaves',
    races: ['Mist Elf'],
    classes: ['Necromancer'],
    inGame: false
  },
  {
    name: 'Pick Locks',
    description: 'Allowstheuseofthievespickstoopenlockeddoors',
    races: ['None'],
    classes: ['Assassin', 'Thief'],
    inGame: true
  },
  {
    name: 'Pick Pockets',
    description: 'Canbeusedtostealfromhumanoidenemies',
    races: ['Gnome'],
    classes: ['Merchant', 'Thief'],
    inGame: true
  },
  {
    name: 'Smithing',
    description: 'Canbeappliedtouseaforgetoimprovemetallicitems',
    races: ['Dwarf'],
    classes: ['Farmer', 'Weaponsmith'],
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
    classes: [
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
    classes: [
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
    classes: [
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
    classes: ['None'],
    inGame: true
  },
  {
    name: 'Two Weapon Combat',
    description: 'Decreasesto-hitandenergycostpenaltieswhiledual-wielding',
    races: ['None'],
    classes: [
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
    classes: ['Wizard'],
    inGame: false
  },
  {
    name: 'Woodcraft',
    description:
      'Decreasesthetimetocutdowntrees,increasescriticalhitchanceagainstplantmonsters',
    races: ['None'],
    classes: ['Barbarian', 'Druid', 'Farmer', 'Ranger'],
    inGame: false
  }
]

// const allCombinationsFormula = () => {
//   let allCombosArray = []
//   playableRaces.forEach(race => {
//     playableClasses.forEach(playableClass => {
//       allCombosArray.push({
//         race,
//         playableClass,
//         skills: [],
//         doubleSkills: []
//       })
//     })
//   })

//   skillsList.forEach(skill => {
//     allCombosArray.forEach(combo => {
//       if (
//         skill.races.includes(combo.race) &&
//         skill.classes.includes(combo.playableClass)
//       ) {
//         return combo.doubleSkills.push(skill.name)
//       }

//       if (
//         skill.races.includes(combo.race) ||
//         skill.classes.includes(combo.playableClass)
//       ) {
//         return combo.skills.push(skill.name)
//       }
//     })
//   })

//   return allCombosArray
// }

const allCombinations = [{ race: 'Dark Elf', playableClass: 'Archer', skills: ['Archery', 'Concentration', 'Dodge', 'Find Weakness', 'Fletchery'], doubleSkills: ['Alertness', 'Stealth'] }, { race: 'Dark Elf', playableClass: 'Assassin', skills: ['Alchemy', 'Archery', 'Backstabbing', 'Detect Traps', 'Dodge', 'Pick Locks', 'Two Weapon Combat'], doubleSkills: ['Alertness', 'Find Weakness', 'Stealth'] }, { race: 'Dark Elf', playableClass: 'Barbarian', skills: ['Alertness', 'Athletics', 'Dodge', 'Find Weakness', 'Herbalism', 'Stealth', 'Survival', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: [] }, { race: 'Dark Elf', playableClass: 'Bard', skills: ['Alertness', 'Find Weakness', 'Music', 'Stealth'], doubleSkills: [] }, { race: 'Dark Elf', playableClass: 'Beastfighter', skills: ['Alertness', 'Athletics', 'Dodge', 'Find Weakness', 'Healing', 'Herbalism', 'Survival', 'Swimming'], doubleSkills: ['Stealth'] }, { race: 'Dark Elf', playableClass: 'Chaos Knight', skills: ['Alertness', 'Athletics', 'Backstabbing', 'Dodge', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Find Weakness'] }, { race: 'Dark Elf', playableClass: 'Druid', skills: ['Alertness', 'Concentration', 'Find Weakness', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Stealth', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: [] }, { race: 'Dark Elf', playableClass: 'Duelist', skills: ['Athletics', 'Concentration', 'Dodge', 'Healing', 'Law', 'Stealth'], doubleSkills: ['Alertness', 'Find Weakness'] }, { race: 'Dark Elf', playableClass: 'Elementalist', skills: ['Alertness', 'Concentration', 'Find Weakness', 'Gemology', 'Healing', 'Literacy', 'Metallurgy', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Dark Elf', playableClass: 'Farmer', skills: ['Alertness', 'Bridge Building', 'Cooking', 'Find Weakness', 'Fletchery', 'Food Preservation', 'Gardening', 'Herbalism', 'Smithing', 'Survival', 'Woodcraft'], doubleSkills: ['Stealth'] }, { race: 'Dark Elf', playableClass: 'Fighter', skills: ['Alertness', 'Archery', 'Athletics', 'Dodge', 'Metallurgy', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Find Weakness', 'Stealth'] }, { race: 'Dark Elf', playableClass: 'Healer', skills: ['Concentration', 'Cooking', 'Healing', 'Herbalism', 'Literacy', 'Stealth'], doubleSkills: ['Alertness', 'Find Weakness'] }, { race: 'Dark Elf', playableClass: 'Merchant', skills: ['Alchemy', 'Alertness', 'Appraising', 'Detect Item Status', 'Find Weakness', 'Gemology', 'Herbalism', 'Literacy', 'Metallurgy', 'Pick Pockets', 'Stealth', 'Survival'], doubleSkills: [] }, { race: 'Dark Elf', playableClass: 'Mindcrafter', skills: ['Alertness', 'Concentration', 'Find Weakness', 'Gemology', 'Herbalism', 'Literacy', 'Music'], doubleSkills: ['Stealth'] }, { race: 'Dark Elf', playableClass: 'Monk', skills: ['Athletics', 'Concentration', 'Dodge', 'Healing', 'Literacy'], doubleSkills: ['Alertness', 'Find Weakness', 'Stealth'] }, { race: 'Dark Elf', playableClass: 'Necromancer', skills: ['Alchemy', 'Alertness', 'Appraising', 'Concentration', 'Food Preservation', 'Herbalism', 'Literacy', 'Necromancy'], doubleSkills: ['Find Weakness', 'Stealth'] }, { race: 'Dark Elf', playableClass: 'Paladin', skills: ['Alertness', 'Athletics', 'Concentration', 'Dodge', 'Find Weakness', 'Healing', 'Law', 'Literacy', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Stealth'] }, { race: 'Dark Elf', playableClass: 'Priest', skills: ['Alertness', 'Concentration', 'Detect Item Status', 'Find Weakness', 'Healing', 'Herbalism', 'Literacy', 'Stealth'], doubleSkills: [] }, { race: 'Dark Elf', playableClass: 'Ranger', skills: ['Archery', 'Athletics', 'Dodge', 'Find Weakness', 'Food Preservation', 'Healing', 'Herbalism', 'Stealth', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Alertness'] }, { race: 'Dark Elf', playableClass: 'Thief', skills: ['Appraising', 'Detect Traps', 'Disarm Traps', 'Find Weakness', 'Pick Locks', 'Pick Pockets'], doubleSkills: ['Alertness', 'Stealth'] }, { race: 'Dark Elf', playableClass: 'Weaponsmith', skills: ['Alertness', 'Appraising', 'Athletics', 'Concentration', 'Detect Traps', 'Metallurgy', 'Smithing', 'Stealth'], doubleSkills: ['Find Weakness'] }, { race: 'Dark Elf', playableClass: 'Wizard', skills: ['Alchemy', 'Alertness', 'Concentration', 'Find Weakness', 'Healing', 'Herbalism', 'Literacy', 'Ventriloquism'], doubleSkills: ['Stealth'] }, { race: 'Dark Elf', playableClass: 'No Class', skills: ['Alertness', 'Find Weakness', 'Stealth'], doubleSkills: [] }, { race: 'Drakeling', playableClass: 'Archer', skills: ['Archery', 'Concentration', 'Dodge', 'Fletchery', 'Food Preservation', 'Music', 'Stealth', 'Swimming'], doubleSkills: ['Alertness'] }, { race: 'Drakeling', playableClass: 'Assassin', skills: ['Alchemy', 'Archery', 'Backstabbing', 'Detect Traps', 'Dodge', 'Find Weakness', 'Food Preservation', 'Music', 'Pick Locks', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Alertness'] }, { race: 'Drakeling', playableClass: 'Barbarian', skills: ['Alertness', 'Athletics', 'Dodge', 'Food Preservation', 'Herbalism', 'Music', 'Survival', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Swimming'] }, { race: 'Drakeling', playableClass: 'Bard', skills: ['Alertness', 'Food Preservation', 'Swimming'], doubleSkills: ['Music'] }, { race: 'Drakeling', playableClass: 'Beastfighter', skills: ['Alertness', 'Athletics', 'Dodge', 'Food Preservation', 'Healing', 'Herbalism', 'Music', 'Stealth', 'Survival'], doubleSkills: ['Swimming'] }, { race: 'Drakeling', playableClass: 'Chaos Knight', skills: ['Alertness', 'Athletics', 'Backstabbing', 'Dodge', 'Find Weakness', 'Food Preservation', 'Music', 'Swimming', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'Drakeling', playableClass: 'Druid', skills: ['Alertness', 'Concentration', 'Food Preservation', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Music', 'Survival', 'Woodcraft'], doubleSkills: ['Swimming'] }, { race: 'Drakeling', playableClass: 'Duelist', skills: ['Athletics', 'Concentration', 'Dodge', 'Find Weakness', 'Food Preservation', 'Healing', 'Law', 'Music', 'Swimming'], doubleSkills: ['Alertness'] }, { race: 'Drakeling', playableClass: 'Elementalist', skills: ['Alertness', 'Concentration', 'Food Preservation', 'Gemology', 'Healing', 'Literacy', 'Metallurgy', 'Music'], doubleSkills: ['Swimming'] }, { race: 'Drakeling', playableClass: 'Farmer', skills: ['Alertness', 'Bridge Building', 'Cooking', 'Fletchery', 'Gardening', 'Herbalism', 'Music', 'Smithing', 'Stealth', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: ['Food Preservation'] }, { race: 'Drakeling', playableClass: 'Fighter', skills: ['Alertness', 'Archery', 'Athletics', 'Dodge', 'Find Weakness', 'Food Preservation', 'Metallurgy', 'Music', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Swimming'] }, { race: 'Drakeling', playableClass: 'Healer', skills: ['Concentration', 'Cooking', 'Find Weakness', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Music', 'Swimming'], doubleSkills: ['Alertness'] }, { race: 'Drakeling', playableClass: 'Merchant', skills: ['Alchemy', 'Alertness', 'Appraising', 'Detect Item Status', 'Food Preservation', 'Gemology', 'Herbalism', 'Literacy', 'Metallurgy', 'Music', 'Pick Pockets', 'Survival', 'Swimming'], doubleSkills: [] }, { race: 'Drakeling', playableClass: 'Mindcrafter', skills: ['Alertness', 'Concentration', 'Food Preservation', 'Gemology', 'Herbalism', 'Literacy', 'Stealth', 'Swimming'], doubleSkills: ['Music'] }, { race: 'Drakeling', playableClass: 'Monk', skills: ['Athletics', 'Concentration', 'Dodge', 'Find Weakness', 'Food Preservation', 'Healing', 'Literacy', 'Music', 'Stealth', 'Swimming'], doubleSkills: ['Alertness'] }, { race: 'Drakeling', playableClass: 'Necromancer', skills: ['Alchemy', 'Alertness', 'Appraising', 'Concentration', 'Find Weakness', 'Herbalism', 'Literacy', 'Music', 'Necromancy', 'Stealth', 'Swimming'], doubleSkills: ['Food Preservation'] }, { race: 'Drakeling', playableClass: 'Paladin', skills: ['Alertness', 'Athletics', 'Concentration', 'Dodge', 'Food Preservation', 'Healing', 'Law', 'Literacy', 'Music', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Swimming'] }, { race: 'Drakeling', playableClass: 'Priest', skills: ['Alertness', 'Concentration', 'Detect Item Status', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Music', 'Swimming'], doubleSkills: [] }, { race: 'Drakeling', playableClass: 'Ranger', skills: ['Archery', 'Athletics', 'Dodge', 'Healing', 'Herbalism', 'Music', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Alertness', 'Food Preservation', 'Swimming'] }, { race: 'Drakeling', playableClass: 'Thief', skills: ['Appraising', 'Detect Traps', 'Disarm Traps', 'Food Preservation', 'Music', 'Pick Locks', 'Pick Pockets', 'Stealth', 'Swimming'], doubleSkills: ['Alertness'] }, { race: 'Drakeling', playableClass: 'Weaponsmith', skills: ['Alertness', 'Appraising', 'Athletics', 'Concentration', 'Detect Traps', 'Find Weakness', 'Food Preservation', 'Metallurgy', 'Music', 'Smithing', 'Swimming'], doubleSkills: [] }, { race: 'Drakeling', playableClass: 'Wizard', skills: ['Alchemy', 'Alertness', 'Concentration', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Music', 'Stealth', 'Swimming', 'Ventriloquism'], doubleSkills: [] }, { race: 'Drakeling', playableClass: 'No Class', skills: ['Alertness', 'Food Preservation', 'Music', 'Swimming'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Archer', skills: ['Alertness', 'Archery', 'Concentration', 'Detect Traps', 'Dodge', 'Fletchery', 'Metallurgy', 'Mining', 'Smithing', 'Stealth'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Archery', 'Backstabbing', 'Dodge', 'Find Weakness', 'Metallurgy', 'Mining', 'Pick Locks', 'Smithing', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Detect Traps'] }, { race: 'Dwarf', playableClass: 'Barbarian', skills: ['Athletics', 'Detect Traps', 'Dodge', 'Herbalism', 'Metallurgy', 'Mining', 'Smithing', 'Survival', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Bard', skills: ['Detect Traps', 'Metallurgy', 'Mining', 'Music', 'Smithing'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Beastfighter', skills: ['Athletics', 'Detect Traps', 'Dodge', 'Healing', 'Herbalism', 'Metallurgy', 'Mining', 'Smithing', 'Stealth', 'Survival', 'Swimming'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Chaos Knight', skills: ['Athletics', 'Backstabbing', 'Detect Traps', 'Dodge', 'Find Weakness', 'Metallurgy', 'Mining', 'Smithing', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Druid', skills: ['Concentration', 'Detect Traps', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Metallurgy', 'Mining', 'Smithing', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Duelist', skills: ['Alertness', 'Athletics', 'Concentration', 'Detect Traps', 'Dodge', 'Find Weakness', 'Healing', 'Law', 'Metallurgy', 'Mining', 'Smithing'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Elementalist', skills: ['Concentration', 'Detect Traps', 'Gemology', 'Healing', 'Literacy', 'Mining', 'Smithing', 'Swimming'], doubleSkills: ['Metallurgy'] }, { race: 'Dwarf', playableClass: 'Farmer', skills: ['Bridge Building', 'Cooking', 'Detect Traps', 'Fletchery', 'Food Preservation', 'Gardening', 'Herbalism', 'Metallurgy', 'Mining', 'Stealth', 'Survival', 'Woodcraft'], doubleSkills: ['Smithing'] }, { race: 'Dwarf', playableClass: 'Fighter', skills: ['Archery', 'Athletics', 'Detect Traps', 'Dodge', 'Find Weakness', 'Mining', 'Smithing', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Metallurgy'] }, { race: 'Dwarf', playableClass: 'Healer', skills: ['Alertness', 'Concentration', 'Cooking', 'Detect Traps', 'Find Weakness', 'Healing', 'Herbalism', 'Literacy', 'Metallurgy', 'Mining', 'Smithing'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Merchant', skills: ['Alchemy', 'Appraising', 'Detect Item Status', 'Detect Traps', 'Gemology', 'Herbalism', 'Literacy', 'Mining', 'Pick Pockets', 'Smithing', 'Survival'], doubleSkills: ['Metallurgy'] }, { race: 'Dwarf', playableClass: 'Mindcrafter', skills: ['Concentration', 'Detect Traps', 'Gemology', 'Herbalism', 'Literacy', 'Metallurgy', 'Mining', 'Music', 'Smithing', 'Stealth'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Monk', skills: ['Alertness', 'Athletics', 'Concentration', 'Detect Traps', 'Dodge', 'Find Weakness', 'Healing', 'Literacy', 'Metallurgy', 'Mining', 'Smithing', 'Stealth'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Necromancer', skills: ['Alchemy', 'Appraising', 'Concentration', 'Detect Traps', 'Find Weakness', 'Food Preservation', 'Herbalism', 'Literacy', 'Metallurgy', 'Mining', 'Necromancy', 'Smithing', 'Stealth'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Paladin', skills: ['Athletics', 'Concentration', 'Detect Traps', 'Dodge', 'Healing', 'Law', 'Literacy', 'Metallurgy', 'Mining', 'Smithing', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Priest', skills: ['Concentration', 'Detect Item Status', 'Detect Traps', 'Healing', 'Herbalism', 'Literacy', 'Metallurgy', 'Mining', 'Smithing'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Ranger', skills: ['Alertness', 'Archery', 'Athletics', 'Detect Traps', 'Dodge', 'Food Preservation', 'Healing', 'Herbalism', 'Metallurgy', 'Mining', 'Smithing', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'Thief', skills: ['Alertness', 'Appraising', 'Disarm Traps', 'Metallurgy', 'Mining', 'Pick Locks', 'Pick Pockets', 'Smithing', 'Stealth'], doubleSkills: ['Detect Traps'] }, { race: 'Dwarf', playableClass: 'Weaponsmith', skills: ['Appraising', 'Athletics', 'Concentration', 'Find Weakness', 'Mining'], doubleSkills: ['Detect Traps', 'Metallurgy', 'Smithing'] }, { race: 'Dwarf', playableClass: 'Wizard', skills: ['Alchemy', 'Concentration', 'Detect Traps', 'Healing', 'Herbalism', 'Literacy', 'Metallurgy', 'Mining', 'Smithing', 'Stealth', 'Ventriloquism'], doubleSkills: [] }, { race: 'Dwarf', playableClass: 'No Class', skills: ['Detect Traps', 'Metallurgy', 'Mining', 'Smithing'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Archer', skills: ['Alertness', 'Archery', 'Concentration', 'Dodge', 'Fletchery', 'Gemology', 'Mining', 'Pick Pockets', 'Stealth', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Archery', 'Backstabbing', 'Detect Traps', 'Dodge', 'Find Weakness', 'Gemology', 'Mining', 'Pick Locks', 'Pick Pockets', 'Stealth', 'Two Weapon Combat', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Barbarian', skills: ['Athletics', 'Dodge', 'Gemology', 'Herbalism', 'Mining', 'Pick Pockets', 'Survival', 'Swimming', 'Two Weapon Combat', 'Ventriloquism', 'Woodcraft'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Bard', skills: ['Gemology', 'Mining', 'Music', 'Pick Pockets', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Beastfighter', skills: ['Athletics', 'Dodge', 'Gemology', 'Healing', 'Herbalism', 'Mining', 'Pick Pockets', 'Stealth', 'Survival', 'Swimming', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Chaos Knight', skills: ['Athletics', 'Backstabbing', 'Dodge', 'Find Weakness', 'Gemology', 'Mining', 'Pick Pockets', 'Two Weapon Combat', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Druid', skills: ['Concentration', 'Gardening', 'Gemology', 'Healing', 'Herbalism', 'Literacy', 'Mining', 'Pick Pockets', 'Survival', 'Swimming', 'Ventriloquism', 'Woodcraft'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Duelist', skills: ['Alertness', 'Athletics', 'Concentration', 'Dodge', 'Find Weakness', 'Gemology', 'Healing', 'Law', 'Mining', 'Pick Pockets', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Elementalist', skills: ['Concentration', 'Healing', 'Literacy', 'Metallurgy', 'Mining', 'Pick Pockets', 'Swimming', 'Ventriloquism'], doubleSkills: ['Gemology'] }, { race: 'Gnome', playableClass: 'Farmer', skills: ['Bridge Building', 'Cooking', 'Fletchery', 'Food Preservation', 'Gardening', 'Gemology', 'Herbalism', 'Mining', 'Pick Pockets', 'Smithing', 'Stealth', 'Survival', 'Ventriloquism', 'Woodcraft'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Fighter', skills: ['Archery', 'Athletics', 'Dodge', 'Find Weakness', 'Gemology', 'Metallurgy', 'Mining', 'Pick Pockets', 'Stealth', 'Swimming', 'Two Weapon Combat', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Healer', skills: ['Alertness', 'Concentration', 'Cooking', 'Find Weakness', 'Gemology', 'Healing', 'Herbalism', 'Literacy', 'Mining', 'Pick Pockets', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Merchant', skills: ['Alchemy', 'Appraising', 'Detect Item Status', 'Herbalism', 'Literacy', 'Metallurgy', 'Mining', 'Survival', 'Ventriloquism'], doubleSkills: ['Gemology', 'Pick Pockets'] }, { race: 'Gnome', playableClass: 'Mindcrafter', skills: ['Concentration', 'Herbalism', 'Literacy', 'Mining', 'Music', 'Pick Pockets', 'Stealth', 'Ventriloquism'], doubleSkills: ['Gemology'] }, { race: 'Gnome', playableClass: 'Monk', skills: ['Alertness', 'Athletics', 'Concentration', 'Dodge', 'Find Weakness', 'Gemology', 'Healing', 'Literacy', 'Mining', 'Pick Pockets', 'Stealth', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Necromancer', skills: ['Alchemy', 'Appraising', 'Concentration', 'Find Weakness', 'Food Preservation', 'Gemology', 'Herbalism', 'Literacy', 'Mining', 'Necromancy', 'Pick Pockets', 'Stealth', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Paladin', skills: ['Athletics', 'Concentration', 'Dodge', 'Gemology', 'Healing', 'Law', 'Literacy', 'Mining', 'Pick Pockets', 'Stealth', 'Swimming', 'Two Weapon Combat', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Priest', skills: ['Concentration', 'Detect Item Status', 'Gemology', 'Healing', 'Herbalism', 'Literacy', 'Mining', 'Pick Pockets', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Ranger', skills: ['Alertness', 'Archery', 'Athletics', 'Dodge', 'Food Preservation', 'Gemology', 'Healing', 'Herbalism', 'Mining', 'Pick Pockets', 'Swimming', 'Two Weapon Combat', 'Ventriloquism', 'Woodcraft'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Thief', skills: ['Alertness', 'Appraising', 'Detect Traps', 'Disarm Traps', 'Gemology', 'Mining', 'Pick Locks', 'Stealth', 'Ventriloquism'], doubleSkills: ['Pick Pockets'] }, { race: 'Gnome', playableClass: 'Weaponsmith', skills: ['Appraising', 'Athletics', 'Concentration', 'Detect Traps', 'Find Weakness', 'Gemology', 'Metallurgy', 'Mining', 'Pick Pockets', 'Smithing', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gnome', playableClass: 'Wizard', skills: ['Alchemy', 'Concentration', 'Gemology', 'Healing', 'Herbalism', 'Literacy', 'Mining', 'Pick Pockets', 'Stealth'], doubleSkills: ['Ventriloquism'] }, { race: 'Gnome', playableClass: 'No Class', skills: ['Gemology', 'Mining', 'Pick Pockets', 'Ventriloquism'], doubleSkills: [] }, { race: 'Gray Elf', playableClass: 'Archer', skills: ['Alertness', 'Archery', 'Concentration', 'Fletchery', 'Literacy', 'Stealth'], doubleSkills: ['Dodge'] }, { race: 'Gray Elf', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Archery', 'Backstabbing', 'Detect Traps', 'Find Weakness', 'Literacy', 'Pick Locks', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Dodge'] }, { race: 'Gray Elf', playableClass: 'Barbarian', skills: ['Athletics', 'Herbalism', 'Literacy', 'Survival', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Dodge'] }, { race: 'Gray Elf', playableClass: 'Bard', skills: ['Dodge', 'Literacy', 'Music'], doubleSkills: [] }, { race: 'Gray Elf', playableClass: 'Beastfighter', skills: ['Athletics', 'Healing', 'Herbalism', 'Literacy', 'Stealth', 'Survival', 'Swimming'], doubleSkills: ['Dodge'] }, { race: 'Gray Elf', playableClass: 'Chaos Knight', skills: ['Athletics', 'Backstabbing', 'Find Weakness', 'Literacy', 'Two Weapon Combat'], doubleSkills: ['Dodge'] }, { race: 'Gray Elf', playableClass: 'Druid', skills: ['Concentration', 'Dodge', 'Gardening', 'Healing', 'Herbalism', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: ['Literacy'] }, { race: 'Gray Elf', playableClass: 'Duelist', skills: ['Alertness', 'Athletics', 'Concentration', 'Find Weakness', 'Healing', 'Law', 'Literacy'], doubleSkills: ['Dodge'] }, { race: 'Gray Elf', playableClass: 'Elementalist', skills: ['Concentration', 'Dodge', 'Gemology', 'Healing', 'Metallurgy', 'Swimming'], doubleSkills: ['Literacy'] }, { race: 'Gray Elf', playableClass: 'Farmer', skills: ['Bridge Building', 'Cooking', 'Dodge', 'Fletchery', 'Food Preservation', 'Gardening', 'Herbalism', 'Literacy', 'Smithing', 'Stealth', 'Survival', 'Woodcraft'], doubleSkills: [] }, { race: 'Gray Elf', playableClass: 'Fighter', skills: ['Archery', 'Athletics', 'Find Weakness', 'Literacy', 'Metallurgy', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Dodge'] }, { race: 'Gray Elf', playableClass: 'Healer', skills: ['Alertness', 'Concentration', 'Cooking', 'Dodge', 'Find Weakness', 'Healing', 'Herbalism'], doubleSkills: ['Literacy'] }, { race: 'Gray Elf', playableClass: 'Merchant', skills: ['Alchemy', 'Appraising', 'Detect Item Status', 'Dodge', 'Gemology', 'Herbalism', 'Metallurgy', 'Pick Pockets', 'Survival'], doubleSkills: ['Literacy'] }, { race: 'Gray Elf', playableClass: 'Mindcrafter', skills: ['Concentration', 'Dodge', 'Gemology', 'Herbalism', 'Music', 'Stealth'], doubleSkills: ['Literacy'] }, { race: 'Gray Elf', playableClass: 'Monk', skills: ['Alertness', 'Athletics', 'Concentration', 'Find Weakness', 'Healing', 'Stealth'], doubleSkills: ['Dodge', 'Literacy'] }, { race: 'Gray Elf', playableClass: 'Necromancer', skills: ['Alchemy', 'Appraising', 'Concentration', 'Dodge', 'Find Weakness', 'Food Preservation', 'Herbalism', 'Necromancy', 'Stealth'], doubleSkills: ['Literacy'] }, { race: 'Gray Elf', playableClass: 'Paladin', skills: ['Athletics', 'Concentration', 'Healing', 'Law', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Dodge', 'Literacy'] }, { race: 'Gray Elf', playableClass: 'Priest', skills: ['Concentration', 'Detect Item Status', 'Dodge', 'Healing', 'Herbalism'], doubleSkills: ['Literacy'] }, { race: 'Gray Elf', playableClass: 'Ranger', skills: ['Alertness', 'Archery', 'Athletics', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Dodge'] }, { race: 'Gray Elf', playableClass: 'Thief', skills: ['Alertness', 'Appraising', 'Detect Traps', 'Disarm Traps', 'Dodge', 'Literacy', 'Pick Locks', 'Pick Pockets', 'Stealth'], doubleSkills: [] }, { race: 'Gray Elf', playableClass: 'Weaponsmith', skills: ['Appraising', 'Athletics', 'Concentration', 'Detect Traps', 'Dodge', 'Find Weakness', 'Literacy', 'Metallurgy', 'Smithing'], doubleSkills: [] }, { race: 'Gray Elf', playableClass: 'Wizard', skills: ['Alchemy', 'Concentration', 'Dodge', 'Healing', 'Herbalism', 'Stealth', 'Ventriloquism'], doubleSkills: ['Literacy'] }, { race: 'Gray Elf', playableClass: 'No Class', skills: ['Dodge', 'Literacy'], doubleSkills: [] }, { race: 'High Elf', playableClass: 'Archer', skills: ['Alertness', 'Archery', 'Concentration', 'Fletchery', 'Literacy'], doubleSkills: ['Dodge', 'Stealth'] }, { race: 'High Elf', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Archery', 'Backstabbing', 'Detect Traps', 'Find Weakness', 'Literacy', 'Pick Locks', 'Two Weapon Combat'], doubleSkills: ['Dodge', 'Stealth'] }, { race: 'High Elf', playableClass: 'Barbarian', skills: ['Athletics', 'Herbalism', 'Literacy', 'Stealth', 'Survival', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Dodge'] }, { race: 'High Elf', playableClass: 'Bard', skills: ['Dodge', 'Literacy', 'Music', 'Stealth'], doubleSkills: [] }, { race: 'High Elf', playableClass: 'Beastfighter', skills: ['Athletics', 'Healing', 'Herbalism', 'Literacy', 'Survival', 'Swimming'], doubleSkills: ['Dodge', 'Stealth'] }, { race: 'High Elf', playableClass: 'Chaos Knight', skills: ['Athletics', 'Backstabbing', 'Find Weakness', 'Literacy', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Dodge'] }, { race: 'High Elf', playableClass: 'Druid', skills: ['Concentration', 'Dodge', 'Gardening', 'Healing', 'Herbalism', 'Stealth', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: ['Literacy'] }, { race: 'High Elf', playableClass: 'Duelist', skills: ['Alertness', 'Athletics', 'Concentration', 'Find Weakness', 'Healing', 'Law', 'Literacy', 'Stealth'], doubleSkills: ['Dodge'] }, { race: 'High Elf', playableClass: 'Elementalist', skills: ['Concentration', 'Dodge', 'Gemology', 'Healing', 'Metallurgy', 'Stealth', 'Swimming'], doubleSkills: ['Literacy'] }, { race: 'High Elf', playableClass: 'Farmer', skills: ['Bridge Building', 'Cooking', 'Dodge', 'Fletchery', 'Food Preservation', 'Gardening', 'Herbalism', 'Literacy', 'Smithing', 'Survival', 'Woodcraft'], doubleSkills: ['Stealth'] }, { race: 'High Elf', playableClass: 'Fighter', skills: ['Archery', 'Athletics', 'Find Weakness', 'Literacy', 'Metallurgy', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Dodge', 'Stealth'] }, { race: 'High Elf', playableClass: 'Healer', skills: ['Alertness', 'Concentration', 'Cooking', 'Dodge', 'Find Weakness', 'Healing', 'Herbalism', 'Stealth'], doubleSkills: ['Literacy'] }, { race: 'High Elf', playableClass: 'Merchant', skills: ['Alchemy', 'Appraising', 'Detect Item Status', 'Dodge', 'Gemology', 'Herbalism', 'Metallurgy', 'Pick Pockets', 'Stealth', 'Survival'], doubleSkills: ['Literacy'] }, { race: 'High Elf', playableClass: 'Mindcrafter', skills: ['Concentration', 'Dodge', 'Gemology', 'Herbalism', 'Music'], doubleSkills: ['Literacy', 'Stealth'] }, { race: 'High Elf', playableClass: 'Monk', skills: ['Alertness', 'Athletics', 'Concentration', 'Find Weakness', 'Healing'], doubleSkills: ['Dodge', 'Literacy', 'Stealth'] }, { race: 'High Elf', playableClass: 'Necromancer', skills: ['Alchemy', 'Appraising', 'Concentration', 'Dodge', 'Find Weakness', 'Food Preservation', 'Herbalism', 'Necromancy'], doubleSkills: ['Literacy', 'Stealth'] }, { race: 'High Elf', playableClass: 'Paladin', skills: ['Athletics', 'Concentration', 'Healing', 'Law', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Dodge', 'Literacy', 'Stealth'] }, { race: 'High Elf', playableClass: 'Priest', skills: ['Concentration', 'Detect Item Status', 'Dodge', 'Healing', 'Herbalism', 'Stealth'], doubleSkills: ['Literacy'] }, { race: 'High Elf', playableClass: 'Ranger', skills: ['Alertness', 'Archery', 'Athletics', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Stealth', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Dodge'] }, { race: 'High Elf', playableClass: 'Thief', skills: ['Alertness', 'Appraising', 'Detect Traps', 'Disarm Traps', 'Dodge', 'Literacy', 'Pick Locks', 'Pick Pockets'], doubleSkills: ['Stealth'] }, { race: 'High Elf', playableClass: 'Weaponsmith', skills: ['Appraising', 'Athletics', 'Concentration', 'Detect Traps', 'Dodge', 'Find Weakness', 'Literacy', 'Metallurgy', 'Smithing', 'Stealth'], doubleSkills: [] }, { race: 'High Elf', playableClass: 'Wizard', skills: ['Alchemy', 'Concentration', 'Dodge', 'Healing', 'Herbalism', 'Ventriloquism'], doubleSkills: ['Literacy', 'Stealth'] }, { race: 'High Elf', playableClass: 'No Class', skills: ['Dodge', 'Literacy', 'Stealth'], doubleSkills: [] }, { race: 'Human', playableClass: 'Archer', skills: ['Alertness', 'Archery', 'Concentration', 'Dodge', 'Fletchery', 'Food Preservation', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Archery', 'Backstabbing', 'Detect Traps', 'Dodge', 'Find Weakness', 'Food Preservation', 'Pick Locks', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'Human', playableClass: 'Barbarian', skills: ['Athletics', 'Dodge', 'Food Preservation', 'Herbalism', 'Survival', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Swimming'] }, { race: 'Human', playableClass: 'Bard', skills: ['Food Preservation', 'Music', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Beastfighter', skills: ['Athletics', 'Dodge', 'Food Preservation', 'Healing', 'Herbalism', 'Stealth', 'Survival'], doubleSkills: ['Swimming'] }, { race: 'Human', playableClass: 'Chaos Knight', skills: ['Athletics', 'Backstabbing', 'Dodge', 'Find Weakness', 'Food Preservation', 'Swimming', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'Human', playableClass: 'Druid', skills: ['Concentration', 'Food Preservation', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Survival', 'Woodcraft'], doubleSkills: ['Swimming'] }, { race: 'Human', playableClass: 'Duelist', skills: ['Alertness', 'Athletics', 'Concentration', 'Dodge', 'Find Weakness', 'Food Preservation', 'Healing', 'Law', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Elementalist', skills: ['Concentration', 'Food Preservation', 'Gemology', 'Healing', 'Literacy', 'Metallurgy'], doubleSkills: ['Swimming'] }, { race: 'Human', playableClass: 'Farmer', skills: ['Bridge Building', 'Cooking', 'Fletchery', 'Gardening', 'Herbalism', 'Smithing', 'Stealth', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: ['Food Preservation'] }, { race: 'Human', playableClass: 'Fighter', skills: ['Archery', 'Athletics', 'Dodge', 'Find Weakness', 'Food Preservation', 'Metallurgy', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Swimming'] }, { race: 'Human', playableClass: 'Healer', skills: ['Alertness', 'Concentration', 'Cooking', 'Find Weakness', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Merchant', skills: ['Alchemy', 'Appraising', 'Detect Item Status', 'Food Preservation', 'Gemology', 'Herbalism', 'Literacy', 'Metallurgy', 'Pick Pockets', 'Survival', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Mindcrafter', skills: ['Concentration', 'Food Preservation', 'Gemology', 'Herbalism', 'Literacy', 'Music', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Monk', skills: ['Alertness', 'Athletics', 'Concentration', 'Dodge', 'Find Weakness', 'Food Preservation', 'Healing', 'Literacy', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Necromancer', skills: ['Alchemy', 'Appraising', 'Concentration', 'Find Weakness', 'Herbalism', 'Literacy', 'Necromancy', 'Stealth', 'Swimming'], doubleSkills: ['Food Preservation'] }, { race: 'Human', playableClass: 'Paladin', skills: ['Athletics', 'Concentration', 'Dodge', 'Food Preservation', 'Healing', 'Law', 'Literacy', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Swimming'] }, { race: 'Human', playableClass: 'Priest', skills: ['Concentration', 'Detect Item Status', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Ranger', skills: ['Alertness', 'Archery', 'Athletics', 'Dodge', 'Healing', 'Herbalism', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Food Preservation', 'Swimming'] }, { race: 'Human', playableClass: 'Thief', skills: ['Alertness', 'Appraising', 'Detect Traps', 'Disarm Traps', 'Food Preservation', 'Pick Locks', 'Pick Pockets', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Weaponsmith', skills: ['Appraising', 'Athletics', 'Concentration', 'Detect Traps', 'Find Weakness', 'Food Preservation', 'Metallurgy', 'Smithing', 'Swimming'], doubleSkills: [] }, { race: 'Human', playableClass: 'Wizard', skills: ['Alchemy', 'Concentration', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Stealth', 'Swimming', 'Ventriloquism'], doubleSkills: [] }, { race: 'Human', playableClass: 'No Class', skills: ['Food Preservation', 'Swimming'], doubleSkills: [] }, { race: 'Hurthling', playableClass: 'Archer', skills: ['Alertness', 'Concentration', 'Cooking', 'Dodge', 'Fletchery', 'Food Preservation', 'Gardening'], doubleSkills: ['Archery', 'Stealth'] }, { race: 'Hurthling', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Backstabbing', 'Cooking', 'Detect Traps', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gardening', 'Pick Locks', 'Two Weapon Combat'], doubleSkills: ['Archery', 'Stealth'] }, { race: 'Hurthling', playableClass: 'Barbarian', skills: ['Archery', 'Athletics', 'Cooking', 'Dodge', 'Food Preservation', 'Gardening', 'Herbalism', 'Stealth', 'Survival', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: [] }, { race: 'Hurthling', playableClass: 'Bard', skills: ['Archery', 'Cooking', 'Food Preservation', 'Gardening', 'Music', 'Stealth'], doubleSkills: [] }, { race: 'Hurthling', playableClass: 'Beastfighter', skills: ['Archery', 'Athletics', 'Cooking', 'Dodge', 'Food Preservation', 'Gardening', 'Healing', 'Herbalism', 'Survival', 'Swimming'], doubleSkills: ['Stealth'] }, { race: 'Hurthling', playableClass: 'Chaos Knight', skills: ['Archery', 'Athletics', 'Backstabbing', 'Cooking', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gardening', 'Stealth', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'Hurthling', playableClass: 'Druid', skills: ['Archery', 'Concentration', 'Cooking', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Stealth', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: ['Gardening'] }, { race: 'Hurthling', playableClass: 'Duelist', skills: ['Alertness', 'Archery', 'Athletics', 'Concentration', 'Cooking', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gardening', 'Healing', 'Law', 'Stealth'], doubleSkills: [] }, { race: 'Hurthling', playableClass: 'Elementalist', skills: ['Archery', 'Concentration', 'Cooking', 'Food Preservation', 'Gardening', 'Gemology', 'Healing', 'Literacy', 'Metallurgy', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Hurthling', playableClass: 'Farmer', skills: ['Archery', 'Bridge Building', 'Fletchery', 'Herbalism', 'Smithing', 'Survival', 'Woodcraft'], doubleSkills: ['Cooking', 'Food Preservation', 'Gardening', 'Stealth'] }, { race: 'Hurthling', playableClass: 'Fighter', skills: ['Athletics', 'Cooking', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gardening', 'Metallurgy', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Archery', 'Stealth'] }, { race: 'Hurthling', playableClass: 'Healer', skills: ['Alertness', 'Archery', 'Concentration', 'Find Weakness', 'Food Preservation', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Stealth'], doubleSkills: ['Cooking'] }, { race: 'Hurthling', playableClass: 'Merchant', skills: ['Alchemy', 'Appraising', 'Archery', 'Cooking', 'Detect Item Status', 'Food Preservation', 'Gardening', 'Gemology', 'Herbalism', 'Literacy', 'Metallurgy', 'Pick Pockets', 'Stealth', 'Survival'], doubleSkills: [] }, { race: 'Hurthling', playableClass: 'Mindcrafter', skills: ['Archery', 'Concentration', 'Cooking', 'Food Preservation', 'Gardening', 'Gemology', 'Herbalism', 'Literacy', 'Music'], doubleSkills: ['Stealth'] }, { race: 'Hurthling', playableClass: 'Monk', skills: ['Alertness', 'Archery', 'Athletics', 'Concentration', 'Cooking', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gardening', 'Healing', 'Literacy'], doubleSkills: ['Stealth'] }, { race: 'Hurthling', playableClass: 'Necromancer', skills: ['Alchemy', 'Appraising', 'Archery', 'Concentration', 'Cooking', 'Find Weakness', 'Gardening', 'Herbalism', 'Literacy', 'Necromancy'], doubleSkills: ['Food Preservation', 'Stealth'] }, { race: 'Hurthling', playableClass: 'Paladin', skills: ['Archery', 'Athletics', 'Concentration', 'Cooking', 'Dodge', 'Food Preservation', 'Gardening', 'Healing', 'Law', 'Literacy', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Stealth'] }, { race: 'Hurthling', playableClass: 'Priest', skills: ['Archery', 'Concentration', 'Cooking', 'Detect Item Status', 'Food Preservation', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Stealth'], doubleSkills: [] }, { race: 'Hurthling', playableClass: 'Ranger', skills: ['Alertness', 'Athletics', 'Cooking', 'Dodge', 'Gardening', 'Healing', 'Herbalism', 'Stealth', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Archery', 'Food Preservation'] }, { race: 'Hurthling', playableClass: 'Thief', skills: ['Alertness', 'Appraising', 'Archery', 'Cooking', 'Detect Traps', 'Disarm Traps', 'Food Preservation', 'Gardening', 'Pick Locks', 'Pick Pockets'], doubleSkills: ['Stealth'] }, { race: 'Hurthling', playableClass: 'Weaponsmith', skills: ['Appraising', 'Archery', 'Athletics', 'Concentration', 'Cooking', 'Detect Traps', 'Find Weakness', 'Food Preservation', 'Gardening', 'Metallurgy', 'Smithing', 'Stealth'], doubleSkills: [] }, { race: 'Hurthling', playableClass: 'Wizard', skills: ['Alchemy', 'Archery', 'Concentration', 'Cooking', 'Food Preservation', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Ventriloquism'], doubleSkills: ['Stealth'] }, { race: 'Hurthling', playableClass: 'No Class', skills: ['Archery', 'Cooking', 'Food Preservation', 'Gardening', 'Stealth'], doubleSkills: [] }, { race: 'Mist Elf', playableClass: 'Archer', skills: ['Archery', 'Fletchery', 'Literacy', 'Necromancy', 'Stealth'], doubleSkills: ['Alertness', 'Concentration', 'Dodge'] }, { race: 'Mist Elf', playableClass: 'Assassin', skills: ['Alchemy', 'Archery', 'Backstabbing', 'Concentration', 'Detect Traps', 'Find Weakness', 'Literacy', 'Necromancy', 'Pick Locks', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Alertness', 'Dodge'] }, { race: 'Mist Elf', playableClass: 'Barbarian', skills: ['Alertness', 'Athletics', 'Concentration', 'Herbalism', 'Literacy', 'Necromancy', 'Survival', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Dodge'] }, { race: 'Mist Elf', playableClass: 'Bard', skills: ['Alertness', 'Concentration', 'Dodge', 'Literacy', 'Music', 'Necromancy'], doubleSkills: [] }, { race: 'Mist Elf', playableClass: 'Beastfighter', skills: ['Alertness', 'Athletics', 'Concentration', 'Healing', 'Herbalism', 'Literacy', 'Necromancy', 'Stealth', 'Survival', 'Swimming'], doubleSkills: ['Dodge'] }, { race: 'Mist Elf', playableClass: 'Chaos Knight', skills: ['Alertness', 'Athletics', 'Backstabbing', 'Concentration', 'Find Weakness', 'Literacy', 'Necromancy', 'Two Weapon Combat'], doubleSkills: ['Dodge'] }, { race: 'Mist Elf', playableClass: 'Druid', skills: ['Alertness', 'Dodge', 'Gardening', 'Healing', 'Herbalism', 'Necromancy', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: ['Concentration', 'Literacy'] }, { race: 'Mist Elf', playableClass: 'Duelist', skills: ['Athletics', 'Find Weakness', 'Healing', 'Law', 'Literacy', 'Necromancy'], doubleSkills: ['Alertness', 'Concentration', 'Dodge'] }, { race: 'Mist Elf', playableClass: 'Elementalist', skills: ['Alertness', 'Dodge', 'Gemology', 'Healing', 'Metallurgy', 'Necromancy', 'Swimming'], doubleSkills: ['Concentration', 'Literacy'] }, { race: 'Mist Elf', playableClass: 'Farmer', skills: ['Alertness', 'Bridge Building', 'Concentration', 'Cooking', 'Dodge', 'Fletchery', 'Food Preservation', 'Gardening', 'Herbalism', 'Literacy', 'Necromancy', 'Smithing', 'Stealth', 'Survival', 'Woodcraft'], doubleSkills: [] }, { race: 'Mist Elf', playableClass: 'Fighter', skills: ['Alertness', 'Archery', 'Athletics', 'Concentration', 'Find Weakness', 'Literacy', 'Metallurgy', 'Necromancy', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Dodge'] }, { race: 'Mist Elf', playableClass: 'Healer', skills: ['Cooking', 'Dodge', 'Find Weakness', 'Healing', 'Herbalism', 'Necromancy'], doubleSkills: ['Alertness', 'Concentration', 'Literacy'] }, { race: 'Mist Elf', playableClass: 'Merchant', skills: ['Alchemy', 'Alertness', 'Appraising', 'Concentration', 'Detect Item Status', 'Dodge', 'Gemology', 'Herbalism', 'Metallurgy', 'Necromancy', 'Pick Pockets', 'Survival'], doubleSkills: ['Literacy'] }, { race: 'Mist Elf', playableClass: 'Mindcrafter', skills: ['Alertness', 'Dodge', 'Gemology', 'Herbalism', 'Music', 'Necromancy', 'Stealth'], doubleSkills: ['Concentration', 'Literacy'] }, { race: 'Mist Elf', playableClass: 'Monk', skills: ['Athletics', 'Find Weakness', 'Healing', 'Necromancy', 'Stealth'], doubleSkills: ['Alertness', 'Concentration', 'Dodge', 'Literacy'] }, { race: 'Mist Elf', playableClass: 'Necromancer', skills: ['Alchemy', 'Alertness', 'Appraising', 'Dodge', 'Find Weakness', 'Food Preservation', 'Herbalism', 'Stealth'], doubleSkills: ['Concentration', 'Literacy', 'Necromancy'] }, { race: 'Mist Elf', playableClass: 'Paladin', skills: ['Alertness', 'Athletics', 'Healing', 'Law', 'Necromancy', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Concentration', 'Dodge', 'Literacy'] }, { race: 'Mist Elf', playableClass: 'Priest', skills: ['Alertness', 'Detect Item Status', 'Dodge', 'Healing', 'Herbalism', 'Necromancy'], doubleSkills: ['Concentration', 'Literacy'] }, { race: 'Mist Elf', playableClass: 'Ranger', skills: ['Archery', 'Athletics', 'Concentration', 'Food Preservation', 'Healing', 'Herbalism', 'Literacy', 'Necromancy', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Alertness', 'Dodge'] }, { race: 'Mist Elf', playableClass: 'Thief', skills: ['Appraising', 'Concentration', 'Detect Traps', 'Disarm Traps', 'Dodge', 'Literacy', 'Necromancy', 'Pick Locks', 'Pick Pockets', 'Stealth'], doubleSkills: ['Alertness'] }, { race: 'Mist Elf', playableClass: 'Weaponsmith', skills: ['Alertness', 'Appraising', 'Athletics', 'Detect Traps', 'Dodge', 'Find Weakness', 'Literacy', 'Metallurgy', 'Necromancy', 'Smithing'], doubleSkills: ['Concentration'] }, { race: 'Mist Elf', playableClass: 'Wizard', skills: ['Alchemy', 'Alertness', 'Dodge', 'Healing', 'Herbalism', 'Necromancy', 'Stealth', 'Ventriloquism'], doubleSkills: ['Concentration', 'Literacy'] }, { race: 'Mist Elf', playableClass: 'No Class', skills: ['Alertness', 'Concentration', 'Dodge', 'Literacy', 'Necromancy'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Archer', skills: ['Alertness', 'Archery', 'Backstabbing', 'Concentration', 'Dodge', 'Find Weakness', 'Fletchery', 'Mining', 'Stealth'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Archery', 'Detect Traps', 'Dodge', 'Mining', 'Pick Locks', 'Stealth', 'Two Weapon Combat'], doubleSkills: ['Backstabbing', 'Find Weakness'] }, { race: 'Orc', playableClass: 'Barbarian', skills: ['Athletics', 'Backstabbing', 'Dodge', 'Find Weakness', 'Herbalism', 'Mining', 'Survival', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Bard', skills: ['Backstabbing', 'Find Weakness', 'Mining', 'Music'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Beastfighter', skills: ['Athletics', 'Backstabbing', 'Dodge', 'Find Weakness', 'Healing', 'Herbalism', 'Mining', 'Stealth', 'Survival', 'Swimming'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Chaos Knight', skills: ['Athletics', 'Dodge', 'Mining', 'Two Weapon Combat'], doubleSkills: ['Backstabbing', 'Find Weakness'] }, { race: 'Orc', playableClass: 'Druid', skills: ['Backstabbing', 'Concentration', 'Find Weakness', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Mining', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Duelist', skills: ['Alertness', 'Athletics', 'Backstabbing', 'Concentration', 'Dodge', 'Healing', 'Law', 'Mining'], doubleSkills: ['Find Weakness'] }, { race: 'Orc', playableClass: 'Elementalist', skills: ['Backstabbing', 'Concentration', 'Find Weakness', 'Gemology', 'Healing', 'Literacy', 'Metallurgy', 'Mining', 'Swimming'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Farmer', skills: ['Backstabbing', 'Bridge Building', 'Cooking', 'Find Weakness', 'Fletchery', 'Food Preservation', 'Gardening', 'Herbalism', 'Mining', 'Smithing', 'Stealth', 'Survival', 'Woodcraft'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Fighter', skills: ['Archery', 'Athletics', 'Backstabbing', 'Dodge', 'Metallurgy', 'Mining', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Find Weakness'] }, { race: 'Orc', playableClass: 'Healer', skills: ['Alertness', 'Backstabbing', 'Concentration', 'Cooking', 'Healing', 'Herbalism', 'Literacy', 'Mining'], doubleSkills: ['Find Weakness'] }, { race: 'Orc', playableClass: 'Merchant', skills: ['Alchemy', 'Appraising', 'Backstabbing', 'Detect Item Status', 'Find Weakness', 'Gemology', 'Herbalism', 'Literacy', 'Metallurgy', 'Mining', 'Pick Pockets', 'Survival'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Mindcrafter', skills: ['Backstabbing', 'Concentration', 'Find Weakness', 'Gemology', 'Herbalism', 'Literacy', 'Mining', 'Music', 'Stealth'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Monk', skills: ['Alertness', 'Athletics', 'Backstabbing', 'Concentration', 'Dodge', 'Healing', 'Literacy', 'Mining', 'Stealth'], doubleSkills: ['Find Weakness'] }, { race: 'Orc', playableClass: 'Necromancer', skills: ['Alchemy', 'Appraising', 'Backstabbing', 'Concentration', 'Food Preservation', 'Herbalism', 'Literacy', 'Mining', 'Necromancy', 'Stealth'], doubleSkills: ['Find Weakness'] }, { race: 'Orc', playableClass: 'Paladin', skills: ['Athletics', 'Backstabbing', 'Concentration', 'Dodge', 'Find Weakness', 'Healing', 'Law', 'Literacy', 'Mining', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Priest', skills: ['Backstabbing', 'Concentration', 'Detect Item Status', 'Find Weakness', 'Healing', 'Herbalism', 'Literacy', 'Mining'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Ranger', skills: ['Alertness', 'Archery', 'Athletics', 'Backstabbing', 'Dodge', 'Find Weakness', 'Food Preservation', 'Healing', 'Herbalism', 'Mining', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Thief', skills: ['Alertness', 'Appraising', 'Backstabbing', 'Detect Traps', 'Disarm Traps', 'Find Weakness', 'Mining', 'Pick Locks', 'Pick Pockets', 'Stealth'], doubleSkills: [] }, { race: 'Orc', playableClass: 'Weaponsmith', skills: ['Appraising', 'Athletics', 'Backstabbing', 'Concentration', 'Detect Traps', 'Metallurgy', 'Mining', 'Smithing'], doubleSkills: ['Find Weakness'] }, { race: 'Orc', playableClass: 'Wizard', skills: ['Alchemy', 'Backstabbing', 'Concentration', 'Find Weakness', 'Healing', 'Herbalism', 'Literacy', 'Mining', 'Stealth', 'Ventriloquism'], doubleSkills: [] }, { race: 'Orc', playableClass: 'No Class', skills: ['Backstabbing', 'Find Weakness', 'Mining'], doubleSkills: [] }, { race: 'Ratling', playableClass: 'Archer', skills: ['Alertness', 'Appraising', 'Archery', 'Concentration', 'Detect Item Status', 'Dodge', 'Fletchery', 'Swimming'], doubleSkills: ['Stealth'] }, { race: 'Ratling', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Appraising', 'Archery', 'Backstabbing', 'Detect Item Status', 'Detect Traps', 'Dodge', 'Find Weakness', 'Pick Locks', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Stealth'] }, { race: 'Ratling', playableClass: 'Barbarian', skills: ['Appraising', 'Athletics', 'Detect Item Status', 'Dodge', 'Herbalism', 'Stealth', 'Survival', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Swimming'] }, { race: 'Ratling', playableClass: 'Bard', skills: ['Appraising', 'Detect Item Status', 'Music', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Ratling', playableClass: 'Beastfighter', skills: ['Appraising', 'Athletics', 'Detect Item Status', 'Dodge', 'Healing', 'Herbalism', 'Survival'], doubleSkills: ['Stealth', 'Swimming'] }, { race: 'Ratling', playableClass: 'Chaos Knight', skills: ['Appraising', 'Athletics', 'Backstabbing', 'Detect Item Status', 'Dodge', 'Find Weakness', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'Ratling', playableClass: 'Druid', skills: ['Appraising', 'Concentration', 'Detect Item Status', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Stealth', 'Survival', 'Woodcraft'], doubleSkills: ['Swimming'] }, { race: 'Ratling', playableClass: 'Duelist', skills: ['Alertness', 'Appraising', 'Athletics', 'Concentration', 'Detect Item Status', 'Dodge', 'Find Weakness', 'Healing', 'Law', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Ratling', playableClass: 'Elementalist', skills: ['Appraising', 'Concentration', 'Detect Item Status', 'Gemology', 'Healing', 'Literacy', 'Metallurgy', 'Stealth'], doubleSkills: ['Swimming'] }, { race: 'Ratling', playableClass: 'Farmer', skills: ['Appraising', 'Bridge Building', 'Cooking', 'Detect Item Status', 'Fletchery', 'Food Preservation', 'Gardening', 'Herbalism', 'Smithing', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: ['Stealth'] }, { race: 'Ratling', playableClass: 'Fighter', skills: ['Appraising', 'Archery', 'Athletics', 'Detect Item Status', 'Dodge', 'Find Weakness', 'Metallurgy', 'Two Weapon Combat'], doubleSkills: ['Stealth', 'Swimming'] }, { race: 'Ratling', playableClass: 'Healer', skills: ['Alertness', 'Appraising', 'Concentration', 'Cooking', 'Detect Item Status', 'Find Weakness', 'Healing', 'Herbalism', 'Literacy', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Ratling', playableClass: 'Merchant', skills: ['Alchemy', 'Gemology', 'Herbalism', 'Literacy', 'Metallurgy', 'Pick Pockets', 'Stealth', 'Survival', 'Swimming'], doubleSkills: ['Appraising', 'Detect Item Status'] }, { race: 'Ratling', playableClass: 'Mindcrafter', skills: ['Appraising', 'Concentration', 'Detect Item Status', 'Gemology', 'Herbalism', 'Literacy', 'Music', 'Swimming'], doubleSkills: ['Stealth'] }, { race: 'Ratling', playableClass: 'Monk', skills: ['Alertness', 'Appraising', 'Athletics', 'Concentration', 'Detect Item Status', 'Dodge', 'Find Weakness', 'Healing', 'Literacy', 'Swimming'], doubleSkills: ['Stealth'] }, { race: 'Ratling', playableClass: 'Necromancer', skills: ['Alchemy', 'Concentration', 'Detect Item Status', 'Find Weakness', 'Food Preservation', 'Herbalism', 'Literacy', 'Necromancy', 'Swimming'], doubleSkills: ['Appraising', 'Stealth'] }, { race: 'Ratling', playableClass: 'Paladin', skills: ['Appraising', 'Athletics', 'Concentration', 'Detect Item Status', 'Dodge', 'Healing', 'Law', 'Literacy', 'Two Weapon Combat'], doubleSkills: ['Stealth', 'Swimming'] }, { race: 'Ratling', playableClass: 'Priest', skills: ['Appraising', 'Concentration', 'Healing', 'Herbalism', 'Literacy', 'Stealth', 'Swimming'], doubleSkills: ['Detect Item Status'] }, { race: 'Ratling', playableClass: 'Ranger', skills: ['Alertness', 'Appraising', 'Archery', 'Athletics', 'Detect Item Status', 'Dodge', 'Food Preservation', 'Healing', 'Herbalism', 'Stealth', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Swimming'] }, { race: 'Ratling', playableClass: 'Thief', skills: ['Alertness', 'Detect Item Status', 'Detect Traps', 'Disarm Traps', 'Pick Locks', 'Pick Pockets', 'Swimming'], doubleSkills: ['Appraising', 'Stealth'] }, { race: 'Ratling', playableClass: 'Weaponsmith', skills: ['Athletics', 'Concentration', 'Detect Item Status', 'Detect Traps', 'Find Weakness', 'Metallurgy', 'Smithing', 'Stealth', 'Swimming'], doubleSkills: ['Appraising'] }, { race: 'Ratling', playableClass: 'Wizard', skills: ['Alchemy', 'Appraising', 'Concentration', 'Detect Item Status', 'Healing', 'Herbalism', 'Literacy', 'Swimming', 'Ventriloquism'], doubleSkills: ['Stealth'] }, { race: 'Ratling', playableClass: 'No Class', skills: ['Appraising', 'Detect Item Status', 'Stealth', 'Swimming'], doubleSkills: [] }, { race: 'Troll', playableClass: 'Archer', skills: ['Alertness', 'Archery', 'Athletics', 'Bridge Building', 'Concentration', 'Dodge', 'Fletchery', 'Food Preservation', 'Gemology', 'Mining', 'Stealth'], doubleSkills: [] }, { race: 'Troll', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Archery', 'Athletics', 'Backstabbing', 'Bridge Building', 'Detect Traps', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gemology', 'Mining', 'Pick Locks', 'Stealth', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'Troll', playableClass: 'Barbarian', skills: ['Bridge Building', 'Dodge', 'Food Preservation', 'Gemology', 'Herbalism', 'Mining', 'Survival', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Athletics'] }, { race: 'Troll', playableClass: 'Bard', skills: ['Athletics', 'Bridge Building', 'Food Preservation', 'Gemology', 'Mining', 'Music'], doubleSkills: [] }, { race: 'Troll', playableClass: 'Beastfighter', skills: ['Bridge Building', 'Dodge', 'Food Preservation', 'Gemology', 'Healing', 'Herbalism', 'Mining', 'Stealth', 'Survival', 'Swimming'], doubleSkills: ['Athletics'] }, { race: 'Troll', playableClass: 'Chaos Knight', skills: ['Backstabbing', 'Bridge Building', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gemology', 'Mining', 'Two Weapon Combat'], doubleSkills: ['Athletics'] }, { race: 'Troll', playableClass: 'Druid', skills: ['Athletics', 'Bridge Building', 'Concentration', 'Food Preservation', 'Gardening', 'Gemology', 'Healing', 'Herbalism', 'Literacy', 'Mining', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: [] }, { race: 'Troll', playableClass: 'Duelist', skills: ['Alertness', 'Bridge Building', 'Concentration', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gemology', 'Healing', 'Law', 'Mining'], doubleSkills: ['Athletics'] }, { race: 'Troll', playableClass: 'Elementalist', skills: ['Athletics', 'Bridge Building', 'Concentration', 'Food Preservation', 'Healing', 'Literacy', 'Metallurgy', 'Mining', 'Swimming'], doubleSkills: ['Gemology'] }, { race: 'Troll', playableClass: 'Farmer', skills: ['Athletics', 'Cooking', 'Fletchery', 'Gardening', 'Gemology', 'Herbalism', 'Mining', 'Smithing', 'Stealth', 'Survival', 'Woodcraft'], doubleSkills: ['Bridge Building', 'Food Preservation'] }, { race: 'Troll', playableClass: 'Fighter', skills: ['Archery', 'Bridge Building', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gemology', 'Metallurgy', 'Mining', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Athletics'] }, { race: 'Troll', playableClass: 'Healer', skills: ['Alertness', 'Athletics', 'Bridge Building', 'Concentration', 'Cooking', 'Find Weakness', 'Food Preservation', 'Gemology', 'Healing', 'Herbalism', 'Literacy', 'Mining'], doubleSkills: [] }, { race: 'Troll', playableClass: 'Merchant', skills: ['Alchemy', 'Appraising', 'Athletics', 'Bridge Building', 'Detect Item Status', 'Food Preservation', 'Herbalism', 'Literacy', 'Metallurgy', 'Mining', 'Pick Pockets', 'Survival'], doubleSkills: ['Gemology'] }, { race: 'Troll', playableClass: 'Mindcrafter', skills: ['Athletics', 'Bridge Building', 'Concentration', 'Food Preservation', 'Herbalism', 'Literacy', 'Mining', 'Music', 'Stealth'], doubleSkills: ['Gemology'] }, { race: 'Troll', playableClass: 'Monk', skills: ['Alertness', 'Bridge Building', 'Concentration', 'Dodge', 'Find Weakness', 'Food Preservation', 'Gemology', 'Healing', 'Literacy', 'Mining', 'Stealth'], doubleSkills: ['Athletics'] }, { race: 'Troll', playableClass: 'Necromancer', skills: ['Alchemy', 'Appraising', 'Athletics', 'Bridge Building', 'Concentration', 'Find Weakness', 'Gemology', 'Herbalism', 'Literacy', 'Mining', 'Necromancy', 'Stealth'], doubleSkills: ['Food Preservation'] }, { race: 'Troll', playableClass: 'Paladin', skills: ['Bridge Building', 'Concentration', 'Dodge', 'Food Preservation', 'Gemology', 'Healing', 'Law', 'Literacy', 'Mining', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: ['Athletics'] }, { race: 'Troll', playableClass: 'Priest', skills: ['Athletics', 'Bridge Building', 'Concentration', 'Detect Item Status', 'Food Preservation', 'Gemology', 'Healing', 'Herbalism', 'Literacy', 'Mining'], doubleSkills: [] }, { race: 'Troll', playableClass: 'Ranger', skills: ['Alertness', 'Archery', 'Bridge Building', 'Dodge', 'Gemology', 'Healing', 'Herbalism', 'Mining', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: ['Athletics', 'Food Preservation'] }, { race: 'Troll', playableClass: 'Thief', skills: ['Alertness', 'Appraising', 'Athletics', 'Bridge Building', 'Detect Traps', 'Disarm Traps', 'Food Preservation', 'Gemology', 'Mining', 'Pick Locks', 'Pick Pockets', 'Stealth'], doubleSkills: [] }, { race: 'Troll', playableClass: 'Weaponsmith', skills: ['Appraising', 'Bridge Building', 'Concentration', 'Detect Traps', 'Find Weakness', 'Food Preservation', 'Gemology', 'Metallurgy', 'Mining', 'Smithing'], doubleSkills: ['Athletics'] }, { race: 'Troll', playableClass: 'Wizard', skills: ['Alchemy', 'Athletics', 'Bridge Building', 'Concentration', 'Food Preservation', 'Gemology', 'Healing', 'Herbalism', 'Literacy', 'Mining', 'Stealth', 'Ventriloquism'], doubleSkills: [] }, { race: 'Troll', playableClass: 'No Class', skills: ['Athletics', 'Bridge Building', 'Food Preservation', 'Gemology', 'Mining'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Archer', skills: ['Alertness', 'Archery', 'Concentration', 'Dodge', 'Fletchery', 'Stealth'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Assassin', skills: ['Alchemy', 'Alertness', 'Archery', 'Backstabbing', 'Detect Traps', 'Dodge', 'Find Weakness', 'Pick Locks', 'Stealth', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Barbarian', skills: ['Athletics', 'Dodge', 'Herbalism', 'Survival', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Bard', skills: ['Music'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Beastfighter', skills: ['Athletics', 'Dodge', 'Healing', 'Herbalism', 'Stealth', 'Survival', 'Swimming'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Chaos Knight', skills: ['Athletics', 'Backstabbing', 'Dodge', 'Find Weakness', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Druid', skills: ['Concentration', 'Gardening', 'Healing', 'Herbalism', 'Literacy', 'Survival', 'Swimming', 'Woodcraft'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Duelist', skills: ['Alertness', 'Athletics', 'Concentration', 'Dodge', 'Find Weakness', 'Healing', 'Law'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Elementalist', skills: ['Concentration', 'Gemology', 'Healing', 'Literacy', 'Metallurgy', 'Swimming'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Farmer', skills: ['Bridge Building', 'Cooking', 'Fletchery', 'Food Preservation', 'Gardening', 'Herbalism', 'Smithing', 'Stealth', 'Survival', 'Woodcraft'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Fighter', skills: ['Archery', 'Athletics', 'Dodge', 'Find Weakness', 'Metallurgy', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Healer', skills: ['Alertness', 'Concentration', 'Cooking', 'Find Weakness', 'Healing', 'Herbalism', 'Literacy'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Merchant', skills: ['Alchemy', 'Appraising', 'Detect Item Status', 'Gemology', 'Herbalism', 'Literacy', 'Metallurgy', 'Pick Pockets', 'Survival'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Mindcrafter', skills: ['Concentration', 'Gemology', 'Herbalism', 'Literacy', 'Music', 'Stealth'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Monk', skills: ['Alertness', 'Athletics', 'Concentration', 'Dodge', 'Find Weakness', 'Healing', 'Literacy', 'Stealth'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Necromancer', skills: ['Alchemy', 'Appraising', 'Concentration', 'Find Weakness', 'Food Preservation', 'Herbalism', 'Literacy', 'Necromancy', 'Stealth'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Paladin', skills: ['Athletics', 'Concentration', 'Dodge', 'Healing', 'Law', 'Literacy', 'Stealth', 'Swimming', 'Two Weapon Combat'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Priest', skills: ['Concentration', 'Detect Item Status', 'Healing', 'Herbalism', 'Literacy'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Ranger', skills: ['Alertness', 'Archery', 'Athletics', 'Dodge', 'Food Preservation', 'Healing', 'Herbalism', 'Swimming', 'Two Weapon Combat', 'Woodcraft'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Thief', skills: ['Alertness', 'Appraising', 'Detect Traps', 'Disarm Traps', 'Pick Locks', 'Pick Pockets', 'Stealth'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Weaponsmith', skills: ['Appraising', 'Athletics', 'Concentration', 'Detect Traps', 'Find Weakness', 'Metallurgy', 'Smithing'], doubleSkills: [] }, { race: 'No Race', playableClass: 'Wizard', skills: ['Alchemy', 'Concentration', 'Healing', 'Herbalism', 'Literacy', 'Stealth', 'Ventriloquism'], doubleSkills: [] }, { race: 'No Race', playableClass: 'No Class', skills: [], doubleSkills: [] }]
export {
  raceObjects,
  playableRaces,
  playableClasses,
  skillsList,
  allCombinations
}
