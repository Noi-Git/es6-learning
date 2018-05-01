/*
Challenge area
1. create function - take fahrenheit in - return object with all three
*/


let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit, //fahrenheit property gets the value form 'function(fahrenheit)'
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9)
  }
}

let temps = convertFahrenheit(74)
console.log(temps)
