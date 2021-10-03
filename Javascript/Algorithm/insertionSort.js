function insertionSort(arr){
    for(let i = 1; i < arr.length;i++){
        for(let j = i - 1; j > -1; j--){
            if(arr[j + 1] < arr[j]){
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
            }
        }
    };

  return arr;
}

const myArray = [2, 36, 21, 10, 0, 52];
insertionSort(myArray); // [0, 2, 10, 21, 36, 52]
