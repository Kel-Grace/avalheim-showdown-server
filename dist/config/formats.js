"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var formats_exports = {};
__export(formats_exports, {
  Formats: () => Formats
});
module.exports = __toCommonJS(formats_exports);
const Formats = [
  // S/V Singles
  ///////////////////////////////////////////////////////////////////
  {
    section: "S/V Singles"
  },
  {
    name: "[Gen 9] Random Battle",
    desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
    mod: "gen9",
    team: "random",
    bestOfDefault: true,
    ruleset: ["PotD", "Obtainable", "Species Clause", "HP Percentage Mod", "Cancel Mod", "Sleep Clause Mod", "Illusion Level Mod"]
  },
  {
    name: "[Gen 9] Unrated Random Battle",
    mod: "gen9",
    team: "random",
    challengeShow: false,
    rated: false,
    ruleset: ["Obtainable", "Species Clause", "HP Percentage Mod", "Cancel Mod", "Sleep Clause Mod", "Illusion Level Mod"]
  },
  {
    name: "[Gen 9] Free-For-All Random Battle",
    mod: "gen9",
    team: "randomFFA",
    gameType: "freeforall",
    tournamentShow: false,
    rated: false,
    ruleset: ["Obtainable", "Species Clause", "HP Percentage Mod", "Cancel Mod", "Sleep Clause Mod", "Illusion Level Mod"]
  },
  {
    name: "[Gen 9] Random Battle (Blitz)",
    mod: "gen9",
    team: "random",
    bestOfDefault: true,
    ruleset: ["[Gen 9] Random Battle", "Blitz"]
  },
  {
    name: "[Gen 9] Multi Random Battle",
    mod: "gen9",
    team: "random",
    gameType: "multi",
    searchShow: false,
    tournamentShow: false,
    rated: false,
    ruleset: [
      "Max Team Size = 3",
      "Obtainable",
      "Species Clause",
      "HP Percentage Mod",
      "Cancel Mod",
      "Sleep Clause Mod",
      "Illusion Level Mod"
    ]
  },
  {
    name: "[Gen 9] OU",
    mod: "gen9",
    ruleset: ["Standard", "Evasion Abilities Clause", "Sleep Moves Clause", "!Sleep Clause Mod"],
    banlist: ["Uber", "AG", "Arena Trap", "Moody", "Shadow Tag", "King's Rock", "Razor Fang", "Baton Pass", "Last Respects", "Shed Tail", "Tera Blast"]
  },
  {
    name: "[Gen 9] Ubers",
    mod: "gen9",
    ruleset: ["Standard"],
    banlist: ["AG", "Moody", "King's Rock", "Razor Fang", "Baton Pass", "Last Respects"]
  },
  {
    name: "[Gen 9] UU",
    mod: "gen9",
    ruleset: ["[Gen 9] OU"],
    banlist: ["OU", "UUBL"]
  },
  {
    name: "[Gen 9] RU",
    mod: "gen9",
    ruleset: ["[Gen 9] UU"],
    banlist: ["UU", "RUBL", "Light Clay"]
  },
  {
    name: "[Gen 9] NU",
    mod: "gen9",
    ruleset: ["[Gen 9] RU"],
    banlist: ["RU", "NUBL", "Drought", "Grassy Surge", "Quick Claw"]
  },
  {
    name: "[Gen 9] PU",
    mod: "gen9",
    ruleset: ["[Gen 9] NU"],
    banlist: ["NU", "PUBL", "Damp Rock"]
  },
  {
    name: "[Gen 9] LC",
    mod: "gen9",
    ruleset: ["Little Cup", "Standard"],
    banlist: [
      "Aipom",
      "Basculin-White-Striped",
      "Cutiefly",
      "Diglett-Base",
      "Dunsparce",
      "Duraludon",
      "Flittle",
      "Gastly",
      "Girafarig",
      "Gligar",
      "Magby",
      "Meditite",
      "Misdreavus",
      "Murkrow",
      "Porygon",
      "Qwilfish-Hisui",
      "Rufflet",
      "Scraggy",
      "Scyther",
      "Shellder",
      "Sneasel",
      "Sneasel-Hisui",
      "Snivy",
      "Stantler",
      "Torchic",
      "Voltorb-Hisui",
      "Vulpix",
      "Vulpix-Alola",
      "Yanma",
      "Moody",
      "Heat Rock",
      "Baton Pass",
      "Sticky Web"
    ]
  },
  {
    name: "[Gen 9] Monotype",
    mod: "gen9",
    ruleset: ["Standard", "Evasion Abilities Clause", "Same Type Clause", "Terastal Clause"],
    banlist: [
      "Annihilape",
      "Arceus",
      "Baxcalibur",
      "Calyrex-Ice",
      "Calyrex-Shadow",
      "Chi-Yu",
      "Chien-Pao",
      "Blaziken",
      "Deoxys-Normal",
      "Deoxys-Attack",
      "Dialga",
      "Dialga-Origin",
      "Espathra",
      "Eternatus",
      "Giratina",
      "Giratina-Origin",
      "Gouging Fire",
      "Groudon",
      "Ho-Oh",
      "Iron Bundle",
      "Kingambit",
      "Koraidon",
      "Kyogre",
      "Kyurem-Black",
      "Kyurem-White",
      "Lugia",
      "Lunala",
      "Magearna",
      "Mewtwo",
      "Miraidon",
      "Necrozma-Dawn-Wings",
      "Necrozma-Dusk-Mane",
      "Palafin",
      "Palkia",
      "Palkia-Origin",
      "Rayquaza",
      "Reshiram",
      "Shaymin-Sky",
      "Solgaleo",
      "Ursaluna-Bloodmoon",
      "Urshifu-Single-Strike",
      "Zacian",
      "Zacian-Crowned",
      "Zamazenta",
      "Zamazenta-Crowned",
      "Zekrom",
      "Moody",
      "Shadow Tag",
      "Booster Energy",
      "Damp Rock",
      "Focus Band",
      "King's Rock",
      "Quick Claw",
      "Razor Fang",
      "Smooth Rock",
      "Baton Pass",
      "Last Respects",
      "Shed Tail"
    ]
  },
  {
    name: "[Gen 9] CAP",
    desc: "The Create-A-Pok&eacute;mon project is a community dedicated to exploring and understanding the competitive Pok&eacute;mon metagame by designing, creating, and playtesting new Pok&eacute;mon concepts.",
    mod: "gen9",
    ruleset: ["[Gen 9] OU", "+CAP"],
    banlist: ["Crucibellite", "Rage Fist"]
  },
  {
    name: "[Gen 9] BSS Reg I",
    mod: "gen9",
    searchShow: false,
    bestOfDefault: true,
    ruleset: ["Flat Rules", "!! Adjust Level = 50", "Min Source Gen = 9", "VGC Timer", "Limit Two Restricted"],
    restricted: ["Restricted Legendary"]
  },
  {
    name: "[Gen 9] Custom Game",
    mod: "gen9",
    searchShow: false,
    debug: true,
    battle: { trunc: Math.trunc },
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod", "Max Team Size = 24", "Max Move Count = 24", "Max Level = 9999", "Default Level = 100"]
  }
];
//# sourceMappingURL=formats.js.map
