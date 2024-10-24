console.log(` Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
ucFirst("john") == ${"John"}`)

// first we can not diectly change the 1st character because string immutable 


function ucFirst(str) {
   if(typeof str !== 'string'){
      throw new Error("str must be string");
      
   }
   if(!str) return str;
   
   return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst("nasar"))

console.log(`Write a function checkSpam(str) that returns true if str contains 'viagra' or 'XXX', otherwise false.

The function must be case-insensitive:

`)

function checkregex(str) {
  const spamregex = /viagra|xxx/i  ;
  return spamregex.test(str)
}
console.log(checkregex('buy a  xxxx'));

// method 2
function checkSpam(str){
let lowercase= str.toLowerCase();
return lowercase.includes('vigra') ||  lowercase.includes('xxx') 

}
console.log(checkSpam("xxxxxx"))

// method 3

function checkSm(str) {
    const spamWords = ["viagra", "xxx"];  // An array of spam-related words
    return spamWords.some((word) => str.toLowerCase().includes(word));
    }
    console.log(checkSm("a im amma ns"))