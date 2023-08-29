var par
// par =document.getElementById("inner").parentElement
// document.getElementById("inner ").parentElement.style.background="red"
// console.log(par)

// document.getElementById("outer ").children
document.getElementById("inner").firstElementChild
 let newele=document.createElement("p")
 let newtext=document.createTextNode("this is check")
 console.log(newele)
 newele.append(newtext)
//  document.getElementById("outer").append(newele)
let target= document.getElementById("outer")
target.insertBefore(newele,target.childNodes[0])


const existingElement = document.getElementById('inner');
const newElement = document.createElement('div');
newElement.textContent = 'F';

// Insert new element after the existing element
existingElement.insertAdjacentElement('beforeend', newElement);


// direct method suing adjacenthtml
const targetdom=document.getElementById('inner')
const htmlstring= '<div> G</div>'  
targetdom.insertAdjacentHTML('beforeend', htmlstring)

const targe=document.getElementById('outer')
const textst= 'xhs sxjisaxj xasxjas '  
targetdom.insertAdjacentHTML('afterend', textst)



//replace


const parent = document.getElementById('inner');
const newElem = document.createElement('div');
newElem.textContent = '5';
const oldElement = parent.children[2]

parent.replaceChild(newElem, oldElement);


// const parent = document.getElementById('inner');
// const newElem = document.createElement('div');
// newElem.textContent = '5';

//   // Assuming you want to replace the 3rd child element of 'parent' with 'newElement'

// const oldElement = parent.children[2];

// parent.replaceChild(newElem, oldElement);


//remove

const targetRemove = document.getElementById('inner');
const removed= targetRemove.children[3]

parent.removeChild(removed);


