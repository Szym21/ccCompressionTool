"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileReader_1 = require("./fileReader");
const reader = new fileReader_1.TextFileReader('./data/testdata.txt');
reader.readFile();
reader.countChars();
describe('testing reading file', () => {
    test('text content after read is greater than 0', () => {
        expect(reader.textContent.length).toBeGreaterThan(0);
    });
    test('correct occurence count of "t" character', () => {
        expect(reader.letters['t']).toBe(223000);
    });
    test('correct occurence count of "X" character', () => {
        expect(reader.letters['X']).toBe(333);
    });
});
//# sourceMappingURL=fileReader.test.js.map