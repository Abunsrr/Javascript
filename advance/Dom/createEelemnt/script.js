const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')


//  const firstImage = Array.from(document.images)
//  console.log(document.images);




 
//  for (let i = 1; i < 100; i++) {
//     const firstImage =document.querySelector('img').cloneNode()
//     // console.log(firstImage);
//     firstImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//    console.log(firstImage.src);
   
//     container.appendChild(firstImage)

    
//  }


// how to create element
console.log(document.createElement)  //it give function
console.log(document.createElement('nasar'))  //create  own element
console.log(document.createElement('p'))  //actual element

const p = document.createElement('p')
// console.log(document.body.appendChild(p)); //at the end


// now actaull create




    let i =1
while (i<101) { 
    
const imgCreate = document.createElement('img')
imgCreate.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(imgCreate)
i++
}


