import * as fs from 'fs';
import * as path from 'path';
const __dirname = path.resolve();
const values = fs
    .readFileSync(path.join(__dirname, '..', '2021', 'input.txt'), 'utf-8')
    .trim()
    .split('\n')
    .map((r) => +r.trim());
// Part One
const result = values.map((v, i) => v > values[i - 1]).filter(Boolean).length;
console.log(`Number of measurements larger than the previous measurement: ${result}`);
// Part Two
function Window(arr, size) {
    let result = [];
    arr.some((el, i) => {
        if (i + size >= arr.length)
            return true;
        result.push((arr.slice(i, i + size)));
    });
    return result;
}
const wind = Window(values, 3);
const sumWindow = [];
for (let i = 0; i < wind.length; i++) {
    const windSum = wind[i].reduce((sum, curr) => sum + curr);
    sumWindow.push(windSum);
}
const windowResult = sumWindow.map((v, i) => v > sumWindow[i - 1]).filter(Boolean).length;
//# sourceMappingURL=SonarSweep.js.map