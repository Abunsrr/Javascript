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












