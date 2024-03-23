let myHeros=["iron man","spiderman"]
let dcHeros=["batman", "superman"]

let heropower={
    // two properties and 1 method
    "iron man":"hammer",
    "spiderman":"sling",
     
    getSpiderpower:function(){
      console.log(`spidy power is ${this.spiderman}`);  
    }
}

Object.prototype.hitesh= function() {
    console.log(`hitesh is peresent in all object`);
} 

Array.prototype.heyhitesh=function(){
    console.log(`hitesh says hello`);
}

myHeros.hitesh()  //possible , we attacking on top of chain i.e object

// inheritance

const user= {
    name:"top name",
    email:"topuser@gmail.com"
}

const Teacher={
    makeVideo: true
};



const TeachingSupport={
    isAvailable: false
};


// all of proprties(may in built or coming from api's) in teaching support  I want in TSAssistance also not pollute it so simply dumbed in prototype//

const TsAssistance = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__:TeachingSupport
};




//how to bind teacher to user

Teacher.__proto__=user //old code syntax



//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


//Goal: get truelenght of string




 

//  String.prototype.truelength = function() {

//   console.log(` lenght is : ${this.trim().length}`);
// }


String.prototype.truelength = function() {

    truelength=this.trim().length;
    return truelength 
  }

let myname= "nasar  "











