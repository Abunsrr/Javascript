
const element = document.getElementsByTagName("ul")
console.log(element) 

const ele = document.getElementById("left").innerText
console.log(ele) 



const att = document.getElementById("left").getAttribute("id")
console.log(att)

//atrribute node not use generally
const attnode = document.getElementById("left").getAttributeNode("id")
console.log(attnode)

const attri = document.getElementById("left").attributes[3].value
console.log(attri)


///........SET.......

// document.getElementById("yaha").innerText='Nasar' this will
// will change text only on  not in html tag

document.getElementById("yaha").innerHTML='<h1>Nasar</h1> '
document.getElementById("yaha").setAttribute("class" ,"nasar");

document.getElementById("yaha").setAttribute("style" ,"border:10px dotted green");

const set = document.getElementById("yaha").getAttribute("class")
console.log(set) 



///attributes tag for set

document.getElementById("yaha").attributes[1].value="xyz"
const setatt = document.getElementById("yaha").getAttribute("class")
 

//remove attribute
document.getElementById("yaha").removeAttribute("style")
console.log(setatt)

//...query selector..

document.querySelector("#para").innerHTML="<h1> Para </h1>"

 var rep = document.querySelector("#para")
    rep=  document.querySelectorAll(".list")
    rep=  document.querySelectorAll("ul")[1].innerHTML
 console.log(rep)