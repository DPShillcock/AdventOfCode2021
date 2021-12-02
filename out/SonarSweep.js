import * as fs from 'fs';
import * as path from 'path';
const __dirname = path.resolve();
const depths = fs
    .readFileSync(path.join(__dirname, '..', '2021', 'input.txt'), 'utf-8')
    .trim()
    .split('\n')
    .map((depth) => +depth.trim());
const result = depths.map((v, i) => v > depths[i - 1]).filter(Boolean).length;
console.log(`Number of measurements larger than the previous measurement: ${result}`);
//# sourceMappingURL=SonarSweep.js.map