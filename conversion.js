let score = "hitesh"

//console.log(typeof score);
//   console.log(typeof(score));


   // we can convert any value into nunber type but be carefull because it will not convert string directly but give o/p NaN
   
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);     // o/p NaN


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // output 33
// console.log(typeof stringNumber); // output string

// browser most of time give value in string  some time we need to convert  it into number or other data type


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion