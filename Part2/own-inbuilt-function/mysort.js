function simpleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const a = arr[i];
      const b = arr[j];

      if (a > b) { // Simplified comparison for ascending order
        // Swap a and b in the array
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
      }
    }
  }
  return arr;
}

const numbers = [3, 1, 5, 2, 4];
const sortedNumbers = simpleSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]