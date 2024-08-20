import fs from 'fs';
import path from 'path';
import { HuffmanBaseNode, PriorityQueue, QueueElement } from './types';
import { HuffmanLeafNode } from './leafNode';

export class TextFileReader {
    filePath : string;
    textContent : string = '';
    letters : Map<string, number> = new Map<string, number>();
    nodes = new PriorityQueue<HuffmanBaseNode>();

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
        for (let char of charContent) {
            this.letters.set(char, (this.letters.get(char) || 0) + 1);
        }
    };

    sortByValue(){           
        for (let [char, frequency] of this.letters) {
            this.nodes.enqueue({
              priority: frequency,
              value: new HuffmanLeafNode(frequency, char),
            });
        }
    }
};