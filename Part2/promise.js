const makepromise=new Promise((resolve,reject) => {
 
    setTimeout(()=>{
        const arrone=["Html","CSS","JavaScript","Tailwind"]

if (arrone.length>0) {
    resolve("Completed")
} else {
    reject("not completed")
}

    },2000)
});


makepromise.then((result)=>{
    console.log(result);
}).catch((res)=>{
console.log(res);
})

// learn more about promise and asyn and await in depth
 


