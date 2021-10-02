'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
         let bribeCount = 0;
         let isChaotic = false;
    q.forEach((person,index) => {
        const originalPos =  person - 1;
        const diff = originalPos - index; 
     
        if(diff > 2 ) {
          isChaotic = true;
        }  else if(diff <= 0) {
          
             for(let i = Math.max(0,originalPos- 1);i < index;i ++) {
                 if(q[i] - 1 > originalPos) {
                     bribeCount++
                 }
             }
      
        }
    })
    
          
            console.log(isChaotic ? "Too chaotic" : bribeCount)   

}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
