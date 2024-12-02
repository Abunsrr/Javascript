function processNumber(number) {
    console.log(`Processing number: ${number}`);
}

// Main Function 
function processList(numbers, callback) {
    numbers.forEach(num => callback(num)); // Pass each number to the callback
}

const numbers = [10, 20, 30];
processList(numbers, processNumber);