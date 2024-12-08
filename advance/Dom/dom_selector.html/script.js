const allImages= document.querySelectorAll('img');
console.log(allImages);

const imagesUrl =[
'https://images.pexels.com/photos/26146996/pexels-photo-26146996/free-photo-of-sheep-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
'https://images.pexels.com/photos/28471378/pexels-photo-28471378/free-photo-of-senior-couple-strolling-in-venetian-garden.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
'https://images.pexels.com/photos/28221516/pexels-photo-28221516/free-photo-of-people-are-sitting-on-the-grass-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

// for (let i = 0; i < allImages.length; i++) {
//     allImages[i].src= imagesUrl[i]
    
// }

let imggot = allImages.entries()
console.log(imggot.next().value)
console.log(imggot.next().value)
console.log(imggot.next().value)
// for (const [i, e ] of allImages.entries() ) {
//     e.src = imagesUrl[i]
// }

function imgCall(element, index) {
    element.src=imagesUrl[index]
}

allImages.forEach(imgCall)

// allImages.forEach((e,i)=>{
//  e.src=imagesUrl[i]
// })

// console.log(document.querySelector('h1').setAttribute('id', 'heading'));
console.log(document.querySelector('h1').id='heading');

console.log(document.querySelector('h2'));

console.log(document.querySelector('h2').attributes.id);
console.dir(document.querySelector('h2').attributes.id);
console.log(document.querySelector('h2').attributes.id.value);

// styling 
console.log('now styling part');

console.log(document.querySelector('h2').style)
console.log(document.querySelector('h2').style.backgroundColor='pink')

console.log(document.querySelector('h1').style.color)

const allLinks =document.querySelectorAll('a')
console.log(allLinks)

// allLinks.forEach((link)=>{
//   console.log(link)
//     link.style.color='pink'
// })

for(const link of allLinks ){
    // link.style.textDecoration='none'
//  this is also not good way
    // console.log(link.style.cssText=`
    // color:red;
    // font-size:18px;
    // font-family:cursive;
    // text-decoration-line:none
    // `)

    //link.className='highlight'
    // link.setAttribute('class','highlight')
  console.log(link.classList.add('highlight', 'way-link'));
  link.classList.remove('myname', 'my-link')
}

const div = document.getElementById('myDiv');

// // Toggle the "highlight" class
// div.classList.toggle('highlight');

// // Checkb the updated class list
// console.log(div.className,); // "box highlight"
// div.classList.toggle('highlight');  // remove class
// div.classList.toggle('highlight'); //add class


// Force add the "highlight" class
div.classList.toggle('highlight', true);
console.log(div.className); // "box highlight"

// Force remove the "highlight" class
div.classList.toggle('highlight', false);
console.log(div.className); // "box"
const btn = document.getElementById('btn');
const content = document.getElementById('content');

btn.addEventListener('click', () => {
  content.classList.toggle('dark-theme');
});

// parent and child 
// yahan par first link direct element select kr js path par click kr k check kr rahe hai hbx
let firstlink =document.querySelector("body > p:nth-child(8) > a:nth-child(2)")
console.log(firstlink.parentElement.parentElement.parentElement);
console.log(firstlink.children);
console.log(firstlink.childNodes);


console.log(firstlink.parentElement.parentElement.children);
console.log(firstlink.parentElement.parentElement.childNodes);
console.log(firstlink.nextSibling);
console.log(typeof firstlink.nextSibling);
console.dir(firstlink.nextSibling);
console.log(firstlink.nextElementSibling.nextElementSibling)
console.log(firstlink.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling) //null

console.log(firstlink.previousElementSibling);
console.log(firstlink.previousSibling);
console.dir(firstlink.previousSibling);




