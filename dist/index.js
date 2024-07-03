#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileReader_1 = require("./fileReader");
console.log(process.argv[2]);
const reader = new fileReader_1.TextFileReader(process.argv[2]);
reader.readFile();
console.log(reader.textContent);
//# sourceMappingURL=index.js.map