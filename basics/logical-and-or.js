/*
let temp = 60

// Logical And && Operator - it is true if both sides are true. False otherwise
if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out')
}

// Logical And && Operator - it is true if one is true. False otherwise
if (temp >= 0 || temp >= 120) {
  console.log('Do not go outside!')
}
*/


let temp = 100

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside!')
} else {
  console.log('Eh! Do what you want.')
}
