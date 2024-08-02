// A process of making tea by Ai 
//tea

// step 1: Put pan in Gas
// step 2: Add Water
// step 3:once water start boiling the add Tea Leaves
// step 4: Add Sugar
//Step 5: After Some time add ginger water
// step 6: Boil for few min and then pour it


function putPanInGas() {
    console.log('Pan Placed in Gas');
}

function addWater() {
    console.log('Water Added');
}


function addTeaLeaves() {
    console.log('Tea leaves added');
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
addWater()
addSugar()
addGinger()
pourIt()
console.timeLog('tea') 
// to check how much time take by code to run

// what is problem when this code is given to ai to make tea

// first all function are independet here so if step 2 is not run then other step will run(NO FLOW CONTROL / NO ERROR HANDLING)

// second problem no time factor here , we are not waiting to water should boil for some time

// to solve this problem we use async to dealy this 






