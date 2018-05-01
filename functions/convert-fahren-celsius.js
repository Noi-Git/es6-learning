/*
==== Challenge Area ====
1. convert Fahrenheit to Celsius
2. call a couple of time (32 -> 0) (68 -> 20)
3. print the converted values
*/

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
  return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
