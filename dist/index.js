#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileReader_1 = require("./fileReader");
if (typeof process.argv[2] !== 'string')
    throw new Error("Expected filename as parameter");
console.log(process.argv[2]);
const reader = new fileReader_1.TextFileReader(process.argv[2]);
reader.readFile();
reader.countChars();
console.log(reader.letters);
//# sourceMappingURL=index.js.map