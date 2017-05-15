/* 	create an array containing words for the player to guess
	computer will randomly choose a word for the player
	player will guess each letter by pressing a key
	player's keystroke will be saved and logged
		if the keystroke is correct, the letter will 
		fill the corresponding empty space
		if it's incorrect, the letter will be stored
		and placed in a list and display it to the player
	player is provided 10 guesses (subject to change)
	number of losses and wins are recorded and displayed
	when the game is over, a new game starts with another
	randomly generated word from the list

*/

// word list
var wordLibrary = [
	"finn",
	"princess bubblegum",
	"jake",
	"lumpy space princess",
	"ice king",
	"lemongrab",
	"gunther",
	"peppermint butler",
	"flame princess",
	"marceline",
	"beemo",
	"tree trunks",
	"cinnamon bun",
]

// variables
