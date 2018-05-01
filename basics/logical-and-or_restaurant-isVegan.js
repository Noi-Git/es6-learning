/*
==== Challenge area ====
1. Are both vegan? --> only offer up vegan dishes
2. At least on vegan? Make sure to offer up some vegan options.
3. Else, offer up anything on the menu.
*/


let isGuestOneVegan = true
let isGuestTwoVegan = false


if (isGuestOneVegan && isGuestTwoVegan) { // 1. Are both vegan?
  console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) { //2. At least on vegan?
  console.log('Make sure to offer up some vegan options.')
} else { // 3. Else
  console.log('Offer up anything on the menu.')
}
