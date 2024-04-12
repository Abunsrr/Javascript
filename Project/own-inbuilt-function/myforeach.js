function myForEach(array , callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i],i,array)
        
    }
}


// useses of call back
const number=[1,2,3,4,5,6]
let square=[]
myForEach(number,(num)=> {
    return  square.push(num*2 ) 
  })

  console.log(square)

