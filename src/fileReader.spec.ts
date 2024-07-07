import { TextFileReader } from "./fileReader";
const assert = require('chai').assert;

describe('FileReader tests', () =>{
    const reader = new TextFileReader('./testdata/testdata.txt');
    reader.readFile();
    reader.countChars();

    it('Is file read?', () =>{
        assert.isAbove(reader.textContent.length, 0)
    })
})