// If you want to get the maximum and minimum values ​​of an array, you can write:

let arr= [2,3,4,1,6,5]
let max =arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>max) {
       max=arr[i]   
    }
}
console.log(max);


// minimum

let min =arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i]<min) {
       min=arr[i]   
    }
}
console.log(min);