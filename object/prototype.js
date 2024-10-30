// const obj = { name: "Alice" };

// // Since obj inherits from Object.prototype, it has access to methods like toString() and hasOwnProperty()
// console.log(obj.toString());  // Output: "[object Object]"
// console.log(obj.hasOwnProperty('name'));  // Output: true

// console.log(obj.__proto__ === Object.prototype);  // Output: true
// console.log(Object.getPrototypeOf(obj));
// console.dir(obj); 
// console.log(Object.getPrototypeOf(obj)).
const util = require('util');
const obj = { name: "Alice" };

console.log(util.inspect(Object.getPrototypeOf(obj), { showHidden: true, depth: null }));