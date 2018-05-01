
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

const filters = {
  searchText: ''
}


//=== call the event one time right away for the data to show up ===

const renderNotes = function (notes, filters) {
  //limit the note to just for those that pass the filter
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  console.log(filteredNotes)
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
