const myNums=[1,2,3]

// const mytotal= myNums.reduce(function(acc , cur ) {
   
//    console.log(`acc: ${acc} and cur: ${cur}`)
//    return acc + cur},0)
// console.log(mytotal);

// const mytotal= myNums.reduce( 
//    (acc ,cur) => acc+cur,0
// )
// console.log(mytotal);


// let val='0123456789ABCDEF'
// let cons= '#'
// let arrayval =[...val]
// for (let i = 0; i < 6; i++) {
//     console.log(i);
    
// }



// let val = '0123456789ABCDEF';
// let cons = '#';
// let generatedHex = cons;
// for (let i = 0; i < 6; i++) {
 
//    let randomIndex= Math.floor(Math.random()*val.length)
    
//    generatedHex = generatedHex+ val[randomIndex];

// }



const randomColor= ()=>{
    let val='0123456789ABCDEF'
    let cons= '#'
    for (let i = 0; i < 6; i++) {
     
       let randomIndex= Math.floor(Math.random()*val.length)
        
       cons = cons+ val[randomIndex];
    
    }

    return cons;
 }
console.log(randomColor());