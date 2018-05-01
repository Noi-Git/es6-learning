
// query and romove
const p = document.querySelector('p')
  p.remove() //this is only remove the first p tag in the html




// query all and remove all p tag
const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
  p.remove()
})




// query all p tag and print to console
const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
  console.log(p.textContent)
})




//===================================
const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// query all p tag and replace all the contents
const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
  p.textContent = '************'
})

//====================================
//Add a new paragraph to the DOM

const newParagraph = document.createElement('p')

newParagraph.textContent = 'This is a new element from JavaScript'

document.querySelector('body').appendChild(newParagraph)



//========================================
// click event for button

const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

//document.querySelector --> only return the first one
document.querySelector('#create-note').addEventListener('click', function (e){
  // console.log('Did this work?')
  // console.log(e)
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click',function () {
  console.log('Delete all notes') // [1] --> target the second button which has index of 1
})




//====================================
//input field


const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

//document.querySelector --> only return the first one
document.querySelector('#create-note').addEventListener('click', function (e){
  // console.log('Did this work?')
  // console.log(e)
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click',function () {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})



//=============================
//this code will do the search but each time it loop through it will just
//add more duplicate our searchText


const notes = [{ //this whole code will not work if you have an empty array at the begining
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
  searchText: ''
}


//=== call the event one time right away for the data to show up ===

const renderNotes = function (notes, filters) {
  //limit the note to just for those that pass the filter
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  //===================================
  //****console.log(filteredNotes) //delete this line after get the code running propery

  // *** the code in this block is the one that create the duplicate search
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')
    noteEl.textContent = note.title
    document.querySelector('body').appendChild(noteEl)
  })
  // *** end duplicate search
}

renderNotes(notes, filters)



//===================================

//document.querySelector --> only return the first one
document.querySelector('#create-note').addEventListener('click', function (e){
  // console.log('Did this work?')
  // console.log(e)
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click',function () {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
//call the function every single time the event listener is fire
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
