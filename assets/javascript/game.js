/* 	create an array containing words for the player to guess 				pickCharacter
	computer will randomly choose a word for the player						math.random, etc.
	player will guess each letter by pressing a key 						document.onkeyup
	player's keystroke will be saved and logged 							userKeys
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

// variables
var characters = [
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

var playWord = "";
var splitWord = [];
var spaceWord = 0;
var wins = 0;
var losses = 0;
var wrongGuess = [];
var userKeys = [];
var keystroke = "";
var spaces = [];
var guessAmt = 10;
var success = new Audio("assets/audio/ssb-challenger.mp3");
var gameOver = new Audio("assets/audio/ssb-continue.mp3");

// setting up the game
var readyGO = function() {
    //ready game
    userKeys = [];
    spaces = [];
    wrongGuess = [];
    guessAmt = 10;
    // computer will randomly choose word from characters
    playWord = characters[Math.floor(Math.random() * characters.length)];
    // break secret word into an array of characters
    splitWord = playWord.split('');
    // count the number of spaces after each character
    spaceWord = splitWord.length;
    //replace secret word with underscores
    for (i = 0; i < spaceWord; i++) {
        spaces.push("_");
    }

    // initial setup of the hangman game
    document.getElementById('win-count').innerHTML = wins;
    document.getElementById('lose-count').innerHTML = losses;
    document.getElementById('num-guess').innerHTML = guessAmt;
    document.getElementById('wrong-guess').innerHTML = wrongGuess;
    document.getElementById('empty-space').innerHTML = spaces.join(" ");

    //TESTING 
    console.log(splitWord);
    console.log(spaceWord);
    console.log(wins);
    console.log(losses);
    console.log(guessAmt);

};

// checks the user's input to the letters of the word that's being played
var checkInput = function(letter) {
    // currently no correct letter
    var rightLetter = false;

    for (i = 0; i < spaceWord; i++) {
        // if the current letter in the word matches the user input,
        // mark rightLetter as true
        if (playWord[i] === letter) {
            rightLetter = true;
        }
    }
    // if the user's input is correct, replace the underscore with the correct letter
    if (rightLetter) {
        for (i = 0; i < spaceWord; i++) {
            if (playWord[i] === letter) {
                spaces[i] = letter;
                // returns the array elements into a single string
                document.getElementById('empty-space').innerHTML = spaces.join(" ");
            }
        }
    }
    // otherwise reduce the amount of guesses by one and display the incorrect guess. 
    else {
        guessAmt--;
        document.getElementById('num-guess').innerHTML = guessAmt;
        wrongGuess.push(letter);
        document.getElementById('wrong-guess').innerHTML = wrongGuess;
    }
}

// results of the player's win or loss
var gameSet = function() {
    // joining the array elements into a string and checking for matching words
    if (splitWord.join(" ") === spaces.join(" ")) {
        success.play();        
        //increase win count by one
        wins++;
        // display in html
        document.getElementById('win-count').innerHTML = wins;
        // display alert and play sound
        alert("GAME SET!! Congratulations! You win!");
        // replay
        readyGO();
    }
    // if player runs out of guesses
    else if (guessAmt === 0) {
        gameOver.play();
        // increase loss counter
        losses++
        // display in HTML
        document.getElementById('num-guess').innerHTML = guessAmt;
        // display an alert and play sound
        alert("GAME OVER... Continue?")
        // replay
        readyGO();
    }
}


// tested; function works so far.
readyGO();

// when the key is pressed by the player
document.onkeyup = function(event) {
    keystroke = event.key;
    // check if the user input is in the userKeys array, do nothing (because it shouldn't be in there.. yet)
    if (userKeys.indexOf(keystroke) >= 0) {
        // to prevent multiple inputs of the same key
    } 
    // since it's not in userKeys, add it to the array
    else {
        // the keystroke is not in the array
        // add the key into the array
        userKeys.push(keystroke);
        checkInput(keystroke);
        gameSet();
        //test
        //console.log(userKeys);
        //console.log(wrongGuess);
    }




};
