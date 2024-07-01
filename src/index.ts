import { TextFileReader } from "./fileReader";


var reader = new TextFileReader(process.argv[2]);
reader.readFile();
console.log(reader.textContent);