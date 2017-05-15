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
	if the player loses, alert the player has lost, try again
	if player wins, alert with uplifting message, play again


*/

// word array
var pickCharacter = [
	"luigi",
	"mario",
	"dk",
	"link",
	"samus",
	"falcon",
	"ness",
	"yoshi",
	"kirby",
	"fox",
	"pikachu",
	"jigglypuff",
];

// variables

var wins = 0;
var losses = 0;
var incorrectGuess = [];
var guessAmount = 10;

// setting up the game
var toPlay = function() {
	// computer will randomly choose word from pickCharacter
	playWord = pickCharacter[Math.floor(Math.random() * pickCharacter.length)];
	console.log(playWord);
};

/* playing the game:
	set number of guesses remaining
	randomly generate word from character list
	display blank spaces in place of the each character for the chosen word


*/


// tested; function works so far.
toPlay();