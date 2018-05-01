/*==== step 1 ====
let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) { //this is call method
    console.log(partySize) //method is the function inside an object
  }
}

restaurant.checkAvailability(4)
*/

/*==== step 2 ====
let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    return true
  }
}

let status = restaurant.checkAvailability(4)

console.log(status)
*/


/*
let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    console.log(this)
    console.log(this.guestCapacity)
    return true
  }
}

let status = restaurant.checkAvailability(4)

console.log(status)
*/



let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  }
}

let status = restaurant.checkAvailability(4)

console.log(status)
