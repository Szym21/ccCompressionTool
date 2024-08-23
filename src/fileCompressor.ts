import { writeFile } from 'fs';

export class FileCompressor{
    compressedText : Uint8Array = Uint8Array.from([]);

    compressText(prefixes : { [key: string]: string },text : string) {
        let arrayOfCodes: string[] = [];
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
        this.compressedText = Uint8Array.from(byteArray);
    }; 

    writeCompressedTextToFile = (
        prefixes: { [key: string]: string },
        text: Uint8Array,
        fileName: string,
      ) => {
        const prefixesString = JSON.stringify(prefixes);
        const prefixLength = Buffer.byteLength(prefixesString, 'utf8');
        const prefixLengthBytes = Buffer.alloc(4); // Using 4 bytes to store the length
        prefixLengthBytes.writeUInt32BE(prefixLength);
      
        const mergedBuffer = Buffer.concat([
          prefixLengthBytes,
          Buffer.from(prefixesString, 'utf8'),
          text,
        ]);
      
        writeFile(fileName, mergedBuffer, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });
      };
}