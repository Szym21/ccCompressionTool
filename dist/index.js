#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileReader_1 = require("./fileReader");
const treeCreator_1 = require("./treeCreator");
const fileCompressor_1 = require("./fileCompressor");
if (typeof process.argv[2] !== 'string')
    throw new Error("Expected filename as parameter");
const reader = new fileReader_1.TextFileReader(process.argv[2]);
const treeCreator = new treeCreator_1.TreeCreator();
const compressor = new fileCompressor_1.FileCompressor();
reader.readFile();
reader.countChars();
reader.sortByValue();
let tree = treeCreator.createTree(reader.nodes);
let treeWithPrefix = treeCreator.generateHuffmanCodesWithPrefixes(tree);
let compressedText = compressor.compressText(treeWithPrefix, reader.textContent);
compressor.writeCompressedTextToFile(treeWithPrefix, compressedText, './data/result.txt');
//# sourceMappingURL=index.js.map