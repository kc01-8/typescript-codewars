function moveZeros(arr) {
 let nonZeros = [];
 let zeros = 0;

 for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZeros.push(arr[i]);
    } else {
      zeros++;
    }
 }

 return nonZeros.concat(Array(zeros).fill(0));
}
