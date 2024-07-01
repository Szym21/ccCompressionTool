import fs from 'fs';
import path from 'path';

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
        console.log(this.filePath);
        this.textContent = fs.readFileSync(this.filePath).toString();
    }
}