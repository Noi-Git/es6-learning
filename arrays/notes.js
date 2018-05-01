/* === ex 1
const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes)
console.log(notes.length)
console.log(notes[0])
console.log(notes[notes.length - 1]) //grab the last item
*/

/* === ex 2
const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes.pop())
notes.push('My new note')

console.log(notes.length)
console.log(notes)
*/


/* === ex 3
const notes = ['Note 1', 'Note 2', 'Note 3']

notes[2] = 'This is now the new note 3'

// notes.forEach(function (item){
//   console.log(item)

  notes.forEach(function (item, index){ //show index to each item
  console.log(index)
  console.log(item)
})

console.log(notes.length)
console.log(notes)
*/

/*
//const notes = [{}, {}, {}] //start like this
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

console.log(notes.length)
console.log(notes)

//notes.findIndex(function (note, index){
const index = notes.findIndex(function (note, index){
  // console.log(note)
  return note.title === 'Habbits to work on'
})

console.log(index)
*/


/*
//const notes = [{}, {}, {}] //start like this
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

const findNote = function (notes, noteTitle)  {
  const index = notes.findIndex(function (note, index) {
    return note.title === noteTitle
    //return note.title.toLowerCase() === noteTitle.toLowerCase()
    // create case insensitive search ***** ask SaRah *****
  })
  return notes[index]
}

const note = findNote(notes, 'Office modification')
console.log(note)
*/



//const notes = [{}, {}, {}] //start like this
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

const findNote = function (notes, noteTitle)  {
  return notes.find(function (note, index) {
    return note.title === noteTitle
    //return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const note = findNote(notes, 'Office modification')
console.log(note)
