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
        this.filePath = this.preparePath(fileName);
    }
    preparePath(fileName) {
        return path_1.default.resolve(fileName);
    }
    readFile() {
        console.log(this.filePath);
        this.textContent = fs_1.default.readFileSync(this.filePath).toString();
    }
}
exports.TextFileReader = TextFileReader;
//# sourceMappingURL=fileReader.js.map