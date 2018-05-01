/* ==== About Function --> input (argument), code, output (return value) ==== */


/* Function --> input (argument)*/
// ==== One argument ====
let greetUser = function () {
  console.log('Welcome user!')
}
greetUser() //call function --> will get Welcome user when run
greetUser() //can be call many times
greetUser()


// ==== Two argument ====
// passing a single argument
// let square = function (num) {
  // console.log(num)
// }
// square(3) //passing a single call function --> will get 3
// square(10) //if passing more than one call function --> will get 3 and 10


// ==== Three argument ====

// let square = function (num) {
//   console.log(num)
// }
// square(3) //passing a single call function --> will get 3
// square(10) //if passing more than one call function --> will get 3 and 10





/* Function --> code and return value */
// ==== One code ====

let square = function (num) {
  let result = num * num //this is code
  return result //only be use one time in your function
}

//to call the function --> the result must store in the variable
let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)
