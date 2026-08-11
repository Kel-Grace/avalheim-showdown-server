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
  {
    section: "ROLEPLAY"
  },
  {
    name: "[RP] Custom Game",
    mod: "gen9",
    searchShow: false,
    debug: true,
    battle: { trunc: Math.trunc },
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod", "Max Team Size = 24", "Max Move Count = 24", "Max Level = 9999", "Default Level = 100"]
  },
  {
    name: "[RP] Doubles Custom Game",
    mod: "gen9",
    gameType: "doubles",
    searchShow: false,
    battle: { trunc: Math.trunc },
    debug: true,
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod", "Max Team Size = 24", "Max Move Count = 24", "Max Level = 9999", "Default Level = 100"]
  }
];
//# sourceMappingURL=formats.js.map
