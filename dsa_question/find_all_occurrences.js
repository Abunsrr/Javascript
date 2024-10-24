// Write a JavaScript program to find and display the starting position of every occurrence/
//  of the word "as" in the following sentence: "As sly as a fox, as strong as an ox".

let str ="As sly as a fox, as strong as an ox"
let pos= 0;
while ((pos = str.indexOf('as', pos)) !== -1) {
    console.log(pos)
    pos++
}

console.log("second method")

let string ="As sly as a fox, as strong as an ox"
let position=0

while (true) {
    let target = string.indexOf('s', position)
    if(target==-1){break;} ;
  console.log(`found postion at ${target}`)
    position = target+1;
}

let strg = "stringify";
console.log(strg.slice(2,6))
console.log(strg.slice(5))
console.log(strg.substring(2,6));
