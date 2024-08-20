import { TextFileReader } from './fileReader';

const reader = new TextFileReader('./data/testdata.txt');
reader.readFile();
reader.countChars();

describe('testing reading file', () => {
    test('text content after read is greater than 0', ()  => {
        expect(reader.textContent.length).toBeGreaterThan(0);
    });

    test('correct count of "t" character (223000)', () =>{
        expect(reader.letters.get('t')).toBe(223000);
    });

    test('correct count of "X" character (333)', () =>{
        expect(reader.letters.get('X')).toBe(333);
    });
});