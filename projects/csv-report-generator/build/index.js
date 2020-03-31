"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var csvReader_1 = require("./csvReader");
var MatchResult_1 = __importDefault(require("./MatchResult"));
var reader = new csvReader_1.CSVReader("football.csv");
reader.read();
console.log(reader.data[0]);
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.default.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.default.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
