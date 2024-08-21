#! /usr/bin/env node
import { TextFileReader } from "./fileReader";
import { TreeCreator } from "./treeCreator";
import { FileCompressor } from "./fileCompressor";

if (typeof process.argv[2] !== 'string') throw new Error("Expected filename as parameter");

const reader = new TextFileReader(process.argv[2]);
const treeCreator = new TreeCreator();
const compressor = new FileCompressor();

reader.readFile();
reader.countChars();
reader.sortByValue();

let tree = treeCreator.createTree(reader.nodes);
let treeWithPrefix = treeCreator.generateHuffmanCodesWithPrefixes(tree);

let compressedText = compressor.compressText(treeWithPrefix, reader.textContent);
compressor.writeCompressedTextToFile(treeWithPrefix, compressedText, './data/result.txt')