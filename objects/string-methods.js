let name = ' Andrew Mead '

//leagth property
console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase())

//inludes method
let password = 'abcdepasswordf12345' //this will return true because it contains the word 'password'
let password1 = 'abcde12345' //return false because no word 'password'
console.log(password.includes('password'))
console.log(password.includes('password1'))

//trim
console.log(name.trim())


//isValidPassword
/* ==== first way ====
let isValidPassword = function (password) {
  if (password.length > 8 && !password.includes('password')) {
      return true
  } else {
      return false
  }
}
*/


//==== second way ====
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password')
}

//length is more than 8 - and it doesn't contain the word password1
console.log(isValidPassword('addkdi'))
console.log(isValidPassword('abc123kdidllskkk'))
console.log(isValidPassword('addkdipasswordldkdi'))
