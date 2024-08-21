"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const types_1 = require("./types");
const leafNode_1 = require("./leafNode");
class TextFileReader {
    constructor(fileName) {
        this.textContent = '';
        this.letters = new Map();
        this.nodes = new types_1.PriorityQueue();
        this.filePath = this.preparePath(fileName);
    }
    preparePath(fileName) {
        return path_1.default.resolve(fileName);
    }
    readFile() {
        this.textContent = fs_1.default.readFileSync(this.filePath, 'utf8').toString();
    }
    countChars() {
        let charContent = this.textContent.split('');
        for (let char of charContent) {
            this.letters.set(char, (this.letters.get(char) || 0) + 1);
        }
    }
    ;
    sortByValue() {
        for (let [char, frequency] of this.letters) {
            this.nodes.enqueue({
                priority: frequency,
                value: new leafNode_1.HuffmanLeafNode(frequency, char)
            });
        }
    }
}
exports.TextFileReader = TextFileReader;
;
//# sourceMappingURL=fileReader.js.map