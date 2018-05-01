/*
1. create an array with five todos
2. you have x todos
3. print the first and second to last items --> Todo: walk the dog
*/

/* ===== step 1 ====
const todos = ['Order cat food', 'clean kitchen', 'Buy food', 'Do work', 'Exercise']

console.log(`You have ${todos.length} todos!`)
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)
*/


/* ==== step 2 ====
const todos = ['Order cat food', 'clean kitchen', 'Buy food', 'Do work', 'Exercise']

//1. delete the 3rd item
todos.splice(2, 1)

//2. add a new item onto the end
todos.push('Buy coffee')

//3. remove the first item from the list
todos.shift()

console.log(`You have ${todos.length} todos!`)
console.log(todos)
*/


/* ==== step 3 ====
const todos = ['Order cat food', 'clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

//print all the item left todo
console.log(`You have ${todos.length} todos!`)

todos.forEach(function(todo, index){
  const num = index + 1
  console.log(`${num}.${todo}`)
})

/*
for (let count = 0; count < todos.lenght; count++) {
  const num = count + 1
  const todo = todos[count]
  console.log(`${num}.${todo}`)
  */

//}


const todos = ['Order cat food', 'clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

//print all the item left todo
console.log(`You have ${todos.length} todos!`)

todos.forEach(function(todo, index){
  const num = index + 1
  console.log(`${num}.${todo}`)
})



}
