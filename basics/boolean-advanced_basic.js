/*
//only one of this code will run base on the condition

let isAccountLocked = false //switch between true and false

if(isAccountLocked){
  console.log('Is account locked')
} else {
  console.log('Welcome')
}
*/


//==== using optional else if
let isAccountLocked = false
let userRole = 'admin' // try change this to 'user'

if(isAccountLocked){
  console.log('Is account locked')
} else if (userRole === 'admin'){ //check user role using equality operater
  console.log('Welcome Admin')
} else {
  console.log('Welcome')
}
