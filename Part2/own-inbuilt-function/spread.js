function spread(arr) {
    const result=[]
    for (const item in arr) {
       result.push(item) 
    }
}


let ar1=[12,23,7,4,5]
let ar2=[34, 78,89]
let ar3=[spread.ar1,spread.ar2]
console.log(ar3);

// not got result