html: 

-main div
-points div
-big circle div with four sections that are each a button
	-smaller circle inside big circle that is the start button 



js:

when you hit start two or more segments will light up one after another
	-add event listener to start with a callback function lights up two or more squares. if the player has 0 points, it will light up two, if the player has 1 point, it will light up 3, if the player has 2 points, it will light up 4, if the player has 3 points it will light up 5, etc, up to five points, at which point the player will win and the game will start over. 

first thing we have is a function that lights up the box.

start button will have an event listener that fires a function for lighting up an array of boxes, with 2 seconds in between each on. this function will use the same function that lights up the buttons when clicked but tailored. 
	-it will adjust itself according to the point counter. if the pointer = 1 then the array.length will also be 1. if pointer=2 the array.length will be 2. so each time the pointer value is increased, array.length is also increased
	-need an array of the colors to choose from buttonsArray = [$topLeft, $topRight, $bottomLeft, $bottomRight]	
		startFlashit = function ($event) {
			this function needs to check the point Counter
			if (pointer === 0) {
				it will grab any one value from buttonsArray, save it to a variable called flash0, and run flashIt on that value
			 	if (flash0 === the same thing that the player clicks(how?!)) {
					pointer++
				} else {
					window.alert('restart the game and lost all your points. sorry.')
				}
			} else if (pointer === 1) {
				it will grab two random values from buttonsArray, save them to a new array called flash1 and run flashIt on each of them
					if (flash1 === array of colors that person clicks) {
						pointer++
				} else {
					window.alert('restart the game and lost all your points. sorry.')
				}
			} else if (pointer === 2) {
				it will grab three random values from buttonsArray, save them to a new array called flash2 and run flashIt on each of them
					if (flash2 === array of colors that person clicks) {
						pointer++
				} else {
					window.alert('restart the game and lost all your points. sorry.')
				}
			} else if (pointer === 3) {
				four random values from buttonsArray, save them to new array flash3 and run flashIt on each of them
					if (flash3 === player's clicks array) {
						pointer++
					} else {
						window.alert('restart the game and lost all your points. sorry.')
					}
			} else if (pointer === 4) {
				five random values from buttonsArray, saves them to new array flash4 and run flashIt on each of them.
		}

		}
	}

	}

var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]



when player does the clicking it should create an li and push each color into an array that we DONT append to the dom and in order to determine if player will go on to the next round this array will have to compared to the computers array of colors