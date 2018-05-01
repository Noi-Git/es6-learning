/*
//==== use function to call objects
let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {
  console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook)
getSummary(otherBook)
*/



//return objects from the function
//==== use function to return variation of the value of the objects
let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {

  return { //create a ruturn inside the function --> to store the new objects variable
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} by ${book.author} is ${book.pageCount} pages long`
  }
}

//create new variables to store the new values return from the return function
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
