/*
==== Challege area ====
1. calculate tip: total, tipPercent .2
*/

// let getTip = function(total, tipPercent = .2){
//   return total * tipPercent
// }
// let tip = getTip(62)
//let tip = getTip(100, .25)
// console.log(tip)


/*
==== Challenge area
1. print out 'A 25% tip on $40 would be $10'
*/
let getTip = function(total, tipPercent = .2){
  let percent = tipPercent * 100
  let tip = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${tip}`
}
let tip = getTip(62)
console.log(tip)
