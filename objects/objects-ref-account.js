/*
Challenge area
1. addIncome
2. resetAccount
3. getAccountSummary
4. Account for Andrew has $900, $1000 in income, $100 in expenses
  4.1 addIncome
  4.2 addExpenses
  4.3 getAccountSummary
  4.4 resetAccount
  4.5 getAccountSummary
*/
let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0
}

// addIncome
let addIncome = function (account, income) {
  account.income = account.income + income
}

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

// addExpenses
let addExpense = function (account, amount){
  account.expenses = account.expenses + amount
}

// getAccountSummary
let getAccountSummary = function (account) { //need only single argument --> the account to get summery for
  let balance = account.income - account.expenses //to calculate the balance
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses}in expenses.`
}


addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
