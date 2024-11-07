// This is the code running inside the Web Worker
onmessage = (event) => {
    const data = event.data;
    let result = 0;
    for (let i = 0; i < 1e9; i++) { // Simulate heavy computation
        result += i;
    }
    postMessage(result); // Send the result back to the main thread
};
