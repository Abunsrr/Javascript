function mymap(array,callback) {
  const  mappedArray =[];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i],i,array))
    
  }
           return mappedArray
}

// usage
const numbers = [1, 2, 3, 4, 5];
const doublenumber= mymap(numbers,num => num*num)
console.log(doublenumber);