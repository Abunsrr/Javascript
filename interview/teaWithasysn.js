// A process of making tea by Ai 
//tea

// step 1: Put pan in Gas
// step 2: Add Water
// step 3:once water start boiling the add Tea Leaves
// step 4: Add Sugar
//Step 5: After Some time add ginger water
// step 6: Boil for few min and then pour it


// now we will use call back and delay here 


function putPanInGas() {
    console.log('Pan Placed in Gas');
}

//i want to call this when water is started boiling 
function addWater(callbackFn) {
    console.log('Water Added');
    setTimeout(function(){
        console.log('water Boils')
        callbackFn
    },3000)
}





function addSugar() {
    console.log('suagr addded');
}

function addGinger() {
    console.log('add ginger');
}

function pourIt() {
    console.log('tea is ready ');
}
console.time('tea')
putPanInGas();
// we will pass addsugar to addwater as call back beacuse we want to call after some time
addWater(addSugar)

console.timeLog('tea') 







