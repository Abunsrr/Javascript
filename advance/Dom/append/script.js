const container = document.querySelector(".container")
const card = document.querySelector('.card')
const h1 =document.querySelector('h1')
console.log(h1);
console.log(h1.cloneNode(true));


//  console.log(container.appendChild(h1.cloneNode(true)));

// append crad in same div
//  console.log(container.appendChild(card.cloneNode(true)));
 

// for (let i = 2; i < 51; i++) {
//     const newCard =card.cloneNode(true)
// console.log(newCard);
//  newCard.innerText = i;

// container.appendChild(newCard)
    
// }



 function bulk(params) {
    let i=2
    while (i<51) {
        const newCard =card.cloneNode(true)
        console.log(newCard);
         newCard.innerText = i;
        container.append(newCard)  
        i++
        
    }
     
 }
//   bulk()


// container.appendChild(document.body) // error hierarcy


// Append and append child 
// it is similar to cutpaste
// container.appendChild(h1) 

container.append(h1) 
console.log(container.append(h1) );

// we can append string also here but with append 
// console.log(container.append('hello') );
//  console.log(container.appendChild('hello') );

const newTextnode = document.createTextNode(`hellow world`)
console.log(newTextnode);
// container.append(newTextnode, h1, 'nasar') 
container.appendChild(newTextnode, h1, 'nasar') 