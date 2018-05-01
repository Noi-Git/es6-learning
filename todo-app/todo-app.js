
const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]



const filters = {
  searchText: ''
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  // === start
  // change todos to filteredTodos
  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  //==== clear the filter

  document.querySelector('#todos').innerHTML = ''


  const summary = document.createElement ('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    // change append from body to #todos
    document.querySelector('#todos').appendChild(summary)

  // change todos.forEach --> filteredTodos.forEach
  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    // change append from body to #todos
    document.querySelector('#todos').appendChild(p)
  })
  // === end
}

renderTodos(todos, filters)


// ========================
// listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
  console.log('Add a new todo...')
})

// listen fo todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})

// === event listener === for updating the filter
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})
