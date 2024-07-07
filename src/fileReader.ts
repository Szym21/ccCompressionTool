import fs from 'fs';
import path from 'path';
import { Dictionary } from './types';

export class TextFileReader {
    filePath : string;
    textContent : string = '';
    letters : Dictionary<string, number> = {};

    constructor(fileName: string) {
        this.filePath = this.preparePath(fileName);
    }

    preparePath(fileName: string){    
        return path.resolve(fileName);
    }

    readFile(){        
        this.textContent = fs.readFileSync(this.filePath, 'utf8').toString();
    }

    countChars(){
        let charContent = this.textContent.split('');
        charContent.forEach(char => {
           this.letters[char] = (char in this.letters) ?  (this.letters[char] + 1) : 1
        })
    };
};