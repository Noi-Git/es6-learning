/*
//==== filtering step 1====
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle)  {
  return notes.find(function (note, index) {
    return note.title === noteTitle
    //return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}
const filteredNotes = notes.filter (function(note, index) {
  //return boolean
  return true
})
console.log(filteredNotes)

const note = findNote(notes, 'Office modification')
console.log(note)
*/


/*
//==== filtering step 2====
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle)  {
  return notes.find(function (note, index) {
    return note.title === noteTitle
    //return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}
const filteredNotes = notes.filter (function(note, index) {
  //check if the title is match
  //1. what come back from note is --> object
  //2. what come back from note.title is --> string
  const isTitleMatch = note.title.toLowerCase().includes('ne') //ne is the search text
  const isBodyMatch = note.body.toLowerCase().includes('ne') //ne is the search text
  return isTitleMatch || isBodyMatch
})
console.log(filteredNotes)

const note = findNote(notes, 'Office modification')
console.log(note)
*/



//==== filtering ====
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// console.log('March' < 'January')
// console.log('a' < 'b')

//==== getThingsToDo needs to be fix first
const sortNotes =function(notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return 1
    } else {
        return 0
    }
    //return 0 --> don't want to change order
    //return -1 --> a comes first
    //return 1  --> b comes first
  })
}

const findNote = function (notes, noteTitle)  {
  return notes.find(function (note, index) {
    return note.title === noteTitle
    //return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
      const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
      const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
      return isTitleMatch || isBodyMatch
    })
  }

// console.log(findNotes(notes, 'work'))
sortNotes(notes)
console.log(notes)
