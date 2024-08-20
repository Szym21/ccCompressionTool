#! /usr/bin/env node
import { TextFileReader } from "./fileReader";
import { TreeCreator } from "./treeCreator";


if (typeof process.argv[2] !== 'string') throw new Error("Expected filename as parameter");
console.log(process.argv[2]);
const reader = new TextFileReader(process.argv[2]);
const treeCreator = new TreeCreator();
reader.readFile();
reader.countChars();
treeCreator.createTree(reader.nodes);
console.log(reader.letters);