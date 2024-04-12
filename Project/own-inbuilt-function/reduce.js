const words = ["Hello", "world", "from", "JavaScript"];

// Concatenate all strings in the array
const concatenatedString = words.reduce((accumulator, currentValue) => accumulator +" "+ currentValue, "");

console.log(concatenatedString); // Output: "Hello world from JavaScript"
