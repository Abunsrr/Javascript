
// method 1  using onclick

// document.addEventListener("click" , ChangeColor)
// function ChangeColor() {
//     document.querySelector("body").style="background-color:red;"
    
// }

            // method 2

// let BtnClick=document.getElementById("btn")
// BtnClick.addEventListener("click" , function ChangeColor() {
//     document.body.style="background-color:red;"
// });

        //   metho3 using arrow

// document.getElementById("btn").addEventListener("click" ,  () =>{
//     document.body.style="background-color:red;"
// });
 
    //   now for random color
      
const button=document.getElementById("btn");
button.addEventListener("click", change)


 const randomColor= ()=>{
    let val='0123456789ABCDEF'
    let cons= '#'
    for (let i = 0; i < 6; i++) {
     
       let randomIndex= Math.floor(Math.random()*val.length)
        
       cons = cons+ val[randomIndex];
    
    }

    return cons;
 };

 function change() {
   document.body.style.backgroundColor= randomColor()
   
 }
 













