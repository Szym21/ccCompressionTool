#! /usr/bin/env node
import { TextFileReader } from "./fileReader";


console.log(process.argv[2]);
const reader = new TextFileReader(process.argv[2]);
reader.readFile();
console.log(reader.textContent);