
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

  //clear the filter before add the new note from the code bellow
  document.querySelector('#notes').innerHTML = ''

  //===================================
  //****console.log(filteredNotes) //delete this line after get the code running propery
  //section 7 lecture 55
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')
    noteEl.textContent = note.title
    document.querySelector('#notes').appendChild(noteEl)
  })
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
