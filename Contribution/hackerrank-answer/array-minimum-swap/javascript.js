'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let minSwap = 0;
  let newArr = [...arr];
  newArr.forEach((num, index) => {
    if (num !== index + 1) {
      let indexOfCorrectNumber = newArr.findIndex((num) => num === index + 1);

      // Switch
      let temp;
      temp = newArr[indexOfCorrectNumber];
      newArr[indexOfCorrectNumber] = num;
      newArr[index] = temp;
      minSwap++;
    }
  });

  console.log(newArr);

  return minSwap;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const res = minimumSwaps(arr);

  ws.write(res + '\n');

  ws.end();
}
