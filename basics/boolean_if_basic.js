/*
//==== Sample 1 passing isFreezing to if statement
let temp = 32
let isFreezing = temp <= 32

if (isFreezing) {
  console.log("It is freezing outside!")
}

//==== Sample 2 passing temp to if statement
let temp = 32

if (temp <= 32) {
  console.log("It is freezing outside!")
}
*/


//==== Sample 3 use two if statement
let temp = 80
let isFreezing = temp <= 32

  if (temp <= 32) {
    console.log("It is freezing outside!")
  }
  if (temp >= 110) {
    console.log("It is way too hot outside!")
    console.log("testing 123")
  }
