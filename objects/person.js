/*
Challenge area
1. create a person object --> name, age, location
2. print Andre is 27 and lives in Philadelphia.
3. increase age by 1 and print message again.
*/


// 1. create a person object --> name, age, location
let person = {
  name: 'Andrew',
  age: 27,
  location: 'Philadelphia'
}
// 2. print Andre is 27 and lives in Philadelphia.
console.log(`${person.name} is ${person.age} years old and live in ${person.location}.`)

// 3. increase age by 1 and print message again.
person.age = person.age + 1
console.log(`${person.name} is ${person.age} years old and live in ${person.location}.`)
