// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
//  console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

 let myCreatedDate = new Date(2023, 0, 23)
 console.log(myCreatedDate);
 console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
 // console.log(myCreatedDate.toLocaleString());


 //use in quizess and polls and for room booking and ticket booking 
let myTimeStamp = Date.now()

console.log(myTimeStamp);
// converted in milisecond for comparision
 console.log(myCreatedDate.getTime());

 // if we wantt to convert in second 
 // console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `
 

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
