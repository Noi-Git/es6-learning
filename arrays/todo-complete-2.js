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


const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })

  if (index > -1) {
    todos.splice(index, 1)
  }
}

//==== delete todo and show only todo that is not yet complete ====
const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return todo.completed === false
  })
}

console.log(getThingsToDo(todos))

// deleteTodo(todos, 'by food')
// console.log(todos)
