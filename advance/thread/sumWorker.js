// This is the code running inside the Web Worker
onmessage = (event) => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    postMessage(sum); // Send the result back to the main thread
};
