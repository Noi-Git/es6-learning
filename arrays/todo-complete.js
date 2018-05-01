const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'clean kitchen',
    completed: false
}, {
    text: 'buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) { //find the index of todo list
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1) //remove item 1 at a time
    //use splice to delete some thing from array. Since slpice required index of the items
    //1. first thing is use findIndex --> to find the item in the array
    //   1.1 const index = todos.findIndex(function(todo)
    //2. return statement
  }
}

deleteTodo(todos, 'buy food')
console.log(todos)
