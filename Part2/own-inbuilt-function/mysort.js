// function mysort(arr,callback) {
//    const sortedarray=[]
//    for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i],i,arr)) {
//         sortedarray.push
//     }
    
//    } 
// }

// let number=[1,2,3,,4,5,6]
// isko my sort bana hai 

 const personNames = [
    "Alice",
    "Grace",
    "Hannah",
    "Isaac",
    "Frank",
    "Julia",
    "Charlie",
    "Bob",
    "David",
    "Eve",
  ];
  
// let arr=personNames.sort()
// let arr=personNames.sort()
// console.log(arr);

const numbers = [3, 1, 5, 2, 4];
const sortedNumbers = numbers.sort((a,b)=>b-a);
console.log(sortedNumbers);