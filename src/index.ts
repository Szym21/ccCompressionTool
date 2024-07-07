#! /usr/bin/env node
import { TextFileReader } from "./fileReader";


if (typeof process.argv[2] !== 'string') throw new Error("Expected filename as parameter");
console.log(process.argv[2]);
const reader = new TextFileReader(process.argv[2]);
reader.readFile();
reader.countChars();
console.log(reader.letters);