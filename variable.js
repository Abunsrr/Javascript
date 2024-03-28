const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])




// Value and data
 
let firstName='nasar'
let lastName='Alam'
const mob= 973473897

console.log('First Name'+ firstName);
console.log('Last Name', lastName);
console.log('phone num',mob)
console.log(`my current first name is ${firstName} last name ${lastName} mobile no ${mob}`)