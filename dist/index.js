"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileReader_1 = require("./fileReader");
var reader = new fileReader_1.TextFileReader(process.argv[2]);
reader.readFile();
console.log(reader.textContent);
//# sourceMappingURL=index.js.map