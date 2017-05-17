/* 	create an array containing words for the player to guess 				pickCharacter
	computer will randomly choose a word for the player						math.random, etc.
	player will guess each letter by pressing a key 						document.onkeyup
	player's keystroke will be saved and logged 							
		if the keystroke is correct, the letter will  						
		fill the corresponding empty space 									
		if it's incorrect, the letter will be stored 						
		and placed in a list and display it to the player
	player is provided 10 guesses (subject to change) 						guessAmount
	number of losses and wins are recorded and displayed 					wins, losses
	when the game is over, a new game starts with another 					... newGame()
	randomly generated word from the list 									math.random, etc.
	if the player loses, alert the player has lost, try again				guesssAmount = 0, answer is incomplete, alert("message"), newGame()
	update losses counter													losses
	if player wins, alert with uplifting message, play again				alert("message"), newGame()
	update losses counter													wins
	

	playing the game:
	set number of guesses remaining											guessAmount = 10
	randomly generate word from character list								math.random
	display blank spaces in place of the each character for the chosen word (array with black spaces? underscores)
	


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

// when the key is pressed by the player
document.onkeyup = function(event) {
	userText.textContent = event.key;
};

// tested; function works so far.
toPlay();