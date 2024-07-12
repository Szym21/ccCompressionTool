"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileReader_1 = require("../src/fileReader");
const assert = require('chai').assert;
describe('FileReader tests', () => {
    const reader = new fileReader_1.TextFileReader('./testdata/testdata.txt');
    reader.readFile();
    reader.countChars();
    it('Is file read?', () => {
        assert.isAbove(reader.textContent.length, 0);
    });
});
describe('test', () => {
    it('test', () => {
        assert.equal(1, 1);
    });
});
//# sourceMappingURL=fileReader.spec.js.map