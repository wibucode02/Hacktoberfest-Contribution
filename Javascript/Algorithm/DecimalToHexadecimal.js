const DecToHex = (num) => {
    if (num == 0)
        return "0";
    var temp = num;
    var sol = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var ans = [];
    while (parseInt(temp) > 0) {
        ans.push(sol[parseInt(temp) % 16]);
        temp = temp / 16;
    }
    return ans.reverse().join('');
}

console.log(DecToHex(285));

//test cases
console.log('1ED8' === DecToHex(7896));
console.log('1AD8' !== DecToHex(9658));

// this code is contributed by chaitanyks
