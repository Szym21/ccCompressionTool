"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class TextFileReader {
    constructor(fileName) {
        this.textContent = '';
        this.letters = {};
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
        charContent.forEach(char => {
            this.letters[char] = (char in this.letters) ? (this.letters[char] + 1) : 1;
        });
    }
    ;
}
exports.TextFileReader = TextFileReader;
;
//# sourceMappingURL=fileReader.js.map