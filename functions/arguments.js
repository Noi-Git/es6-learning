
//==== multiple arguments
let add = function (a, b) {
  return a + b
}

let result = add(10, 1)
console.log(result)


//==== Deafult arguments
// let getScoreText = function (name, score) {
//let getScoreText = function (name = 'Anonymous', score = 0) <-- this is defult arguments
//   console.log(name)
//   console.log(score)
// }

// getScoreText() //<-- this will return undefined
// getScoreText('Andrew', 100) //<-- the score here will overrided the defult 0


//==== final ====
let getScoreText = function (name = 'Anonymous', score = 0) {
  return 'Name: ' + name + ' - Score: ' + score
}
let scoreText = getScoreText()
//let scoreText = getScoreText('Andrew', 99) <-- will return Andrew with score 99
//let scoreText = getScoreText(undefined, 99) <-- will return Anonymouse with score 99
//** use undefined to avoid providing the first argument **
console.log(scoreText)
