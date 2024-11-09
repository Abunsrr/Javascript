// const words = ["Hello", "world", "from", "JavaScript"];

// // Concatenate all strings in the array
// const concatenatedString = words.reduce((accumulator, currentValue) => accumulator +" "+ currentValue, "");

// console.log(concatenatedString); // Output: "Hello world from JavaScript"


// without prototype
function myreduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];   
    let startIndex = initialValue !== undefined ? 0 : 1;
     for (let i = startIndex ; i < array.length; i++) {
        accumulator = callback(accumulator, array[i],i,array)
        
     }
     return accumulator
}

let number= [20,40,30,10]
console.log(myreduce(number, (accumulator, currentValue) => accumulator + currentValue, 0));

// with prototype 
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  }
  
  let numbers = [20, 40, 30, 10];
  console.log(numbers.myReduce((accumulator, currentValue) => accumulator + currentValue, 15));


 