 var alternativeaddevent;
document.getElementById("yaha").onclick= addcolor;
function addcolor() {
    document.getElementById("yaha").style.backgroundColor="blue"
}
 

//add EventListener() Method

//document.getElementById().addEventListener("click",functionname)
                    
               ///..........OR............//

 
document.getElementById("right").addEventListener("click", function(){
   // document.getElementById("right").style.backgroundColor = "pink";
   this.style.backgroundColor = "pink";
});


document.getElementsByTagName("body")[0].addEventListener("click", function(){
    // document.getElementById("right").style.backgroundColor = "pink";
    this.style.backgroundColor = "pink";
 });

 
 // remove event listner
///do later after fever cure



//clickevent

 document.getElementById("headmenu").addEventListener("click",menufn)


function menufn() {
    document.getElementById("headmenu").classList.add("mxyz")
}




//example

// document.getElementById("menu-icon").addEventListener("click",tog)


// function tog() {
//     document.getElementById("menu-icon").classList.add("rmenu")
// }






