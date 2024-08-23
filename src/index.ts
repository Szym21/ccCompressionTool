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

treeCreator.createTree(reader.nodes);
treeCreator.generateHuffmanCodesWithPrefixes();

compressor.compressText(treeCreator.huffmanCodes, reader.textContent);
compressor.writeCompressedTextToFile(treeCreator.huffmanCodes, compressor.compressedText, './data/result.txt')