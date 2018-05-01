/*
Challenge area
1. calculate students score, total possitble score
2. scroe 15/20 --> You got a C (75%)
3. print --> A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
*/

/*=== first solution ====
let gradeCalc = function (score, totalScore) {
  let percent = (score / totalScore) * 100

  //calculate the letter grade
  if (percent >= 90) {
    return `You got an A (${percent}%)!`
  } else if (percent >= 80) {
    return `You got a B (${percent}%)!`
  }
}

let result = gradeCalc(19, 20)
console.log(result)
*/


let gradeCalc = function (score, totalScore) {
  let percent = (score / totalScore) * 100
  let letterGrade = ''

  //calculate the letter grade
  if (percent >= 90) {
    letterGrade = 'A'
  } else if (percent >= 80) {
    letterGrade = 'B'
  } else if (percent >= 70) {
    letterGrade = 'C'
  } else if (percent >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }

  return `You got a ${letterGrade} (${percent}%)!`

}

let result = gradeCalc(14, 20)
console.log(result)
