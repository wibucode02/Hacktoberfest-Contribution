// yarn add readline axios
// yarn start

const readline = require("readline");
const axios = require("axios");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan URL yang akan di-fetch : ", (urls) => {
  axios
    .get(urls)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
});
