let sumbtn= document.querySelector("#sumbtn")
let bgbtn= document.querySelector("#bgbtn")


// Create a Web Worker for the addition task
const sumWorker = new Worker("sumWorker.js");

// Listen for the result from the worker
sumWorker.onmessage = (event) => {
    console.log(`The final output is ${event.data}`);
};

// Addition button event listener
sumbtn.addEventListener("click", (event) => {
    // Send a message to the worker to start computation
    sumWorker.postMessage("start");
});
 const randomColor= ()=>{
    let val='0123456789ABCDEF'
    let cons= '#'
    for (let i = 0; i < 6; i++) {
     
       let randomIndex= Math.floor(Math.random()*val.length)

       // Log the current step and chosen character
       console.log(`Step ${i + 1}: Adding ${val[randomIndex]} to ${cons}`);
        
        
       cons = cons+ val[randomIndex];
       
    
    }

    return cons;
 };

bgbtn.addEventListener("click" ,  () =>{
    document.body.style.backgroundColor= randomColor()
     });
