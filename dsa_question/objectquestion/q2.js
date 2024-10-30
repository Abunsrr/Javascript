// <!-- Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// }; -->

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(menu){
    for(let num in menu){
      if(typeof menu[num] == 'number')
          menu[num] *= 2;
    }
    console.log(menu);
    
  }
  multiplyNumeric(menu)