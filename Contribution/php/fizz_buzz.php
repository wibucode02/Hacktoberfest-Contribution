<?php

function fizzBuzz($angka)
{
    // Jika angka dengan kelipatan 3 dan 5, tampilkan FizzBuzz
    if ($angka % 3 == 0 && $angka % 5 == 0) {
        echo "FizzBuzz\n";
    // Jika angka kelipatan 3, tampilkan Fizz
    } elseif ($angka % 3 == 0) {
        echo "Fizz\n";
    // Jika angka kelipatan 5, tampilkan Buzz
    } elseif ($angka % 5 == 0) {
        echo "Buzz\n";
    // Jika bukan kelipatan 3 atau 5, tampilkan angka sebenarnya
    } else {
        echo $angka . "\n";
    }
}

for ($i = 1; $i <= 100; $i++) { 
    fizzBuzz($i);
}