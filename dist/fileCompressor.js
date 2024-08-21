"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCompressor = void 0;
const fs_1 = require("fs");
class FileCompressor {
    constructor() {
        this.writeCompressedTextToFile = (prefixes, text, fileName) => {
            const prefixesString = JSON.stringify(prefixes);
            const prefixLength = Buffer.byteLength(prefixesString, 'utf8');
            const prefixLengthBytes = Buffer.alloc(4); // Using 4 bytes to store the length
            prefixLengthBytes.writeUInt32BE(prefixLength);
            const mergedBuffer = Buffer.concat([
                prefixLengthBytes,
                Buffer.from(prefixesString, 'utf8'),
                text,
            ]);
            (0, fs_1.writeFile)(fileName, mergedBuffer, (err) => {
                if (err)
                    throw err;
                console.log('The file has been saved!');
            });
        };
    }
    compressText(prefixes, text) {
        let arrayOfCodes = [];
        for (const char of text) {
            let code = prefixes[char];
            if (code) {
                arrayOfCodes.push(code);
            }
        }
        let bitPacks = arrayOfCodes.join('');
        const padding = 8 - (bitPacks.length % 8);
        bitPacks = bitPacks.padEnd(bitPacks.length + padding, '0');
        const byteArray = [padding]; // Store padding as the first byte
        for (let i = 0; i < bitPacks.length; i += 8) {
            const byteString = bitPacks.substring(i, 8);
            const byte = parseInt(byteString, 2);
            byteArray.push(byte);
        }
        return Uint8Array.from(byteArray);
    }
    ;
}
exports.FileCompressor = FileCompressor;
//# sourceMappingURL=fileCompressor.js.map