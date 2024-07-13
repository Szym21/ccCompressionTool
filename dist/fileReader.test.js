"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileReader_1 = require("./fileReader");
const reader = new fileReader_1.TextFileReader('../data/testdata.txt');
reader.readFile();
reader.countChars();
describe('testing reading file', () => {
    test('sample', () => {
        expect(reader.textContent.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=fileReader.test.js.map