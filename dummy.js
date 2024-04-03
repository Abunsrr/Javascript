function myfilter(arr, callback) {
    const filterarray=[]

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i],i,arr)){
            filterarray.push(arr[i])
        }

        
    }
   return filterarray   
}

const num=[1,3,4,6,8,7,9,10]
const even=myfilter(num, (n)=> n%2===0)
console.log(even);