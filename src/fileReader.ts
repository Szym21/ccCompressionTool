import fs from 'fs';
import path from 'path';
import { Dictionary } from '../utils/types';

export class TextFileReader {
    filePath : string;
    textContent : string = '';

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
        const letters : Dictionary<string, number> = {};
        this.textContent.split('').forEach(char => {
            letters[char]
        })
            
        });
    }
}