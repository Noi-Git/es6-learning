=== ex 1 ===
//remove all paragraph contain 'the'
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach (function(paragraph) {
  // paragraph.textContent.includes('the')
  if (paragraph.textContent.includes('the')) {
    paragraph.remove()
  }
})


=== ex 2 ===
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

// find how many todo we have left
const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

// print message 'you have 2 todo left (p element)'
const summary = document.createElement ('h3')
  summary.textContent = `You have ${incompleteTodos.length} todos left`

  document.querySelector('body').appendChild(summary)

// add a p for each todo above (use text value)
todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})



=== ex 3 ===

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

// find how many todo we have left
const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

// print message 'you have 2 todo left (p element)'
const summary = document.createElement ('h3')
  summary.textContent = `You have ${incompleteTodos.length} todos left`

  document.querySelector('body').appendChild(summary)

// add a p for each todo above (use text value)
todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})


// listen for new todo creation
document.querySelector('button').addEventListener('click', function (e) {
  console.log('Add a new todo...')
})


=== ex 4 ===


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

// === start
// find how many todo we have left
const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

// print message 'you have 2 todo left (p element)'
const summary = document.createElement ('h3')
  summary.textContent = `You have ${incompleteTodos.length} todos left`

  document.querySelector('body').appendChild(summary)

// add a p for each todo above (use text value)
todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})

// === end


// ========================
// listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
  console.log('Add a new todo...')
})

// listen fo todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})
