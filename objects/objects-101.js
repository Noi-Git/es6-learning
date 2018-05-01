let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(myBook)
console.log(myBook.author)
console.log(`${myBook.title} by ${myBook.author}`)

//set a new book title to an exciting one
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)
