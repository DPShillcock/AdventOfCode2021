import * as fs from 'fs';
import * as path from 'path';

const __dirname = path.resolve();
const values = fs
    .readFileSync(path.join(__dirname, '..', '2021', 'input.txt'), 'utf-8')
    .trim()
    .split('\n')
    .map((r) => +r.trim());

 const result = values.map((v,i)  => v > values[i-1] ).filter(Boolean).length;
 console.log(`Number of measurements larger than the previous measurement: ${result}`);