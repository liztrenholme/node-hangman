// this will be the file run in order to play the game


/**index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`*/

var inquirer = require("inquirer");
var Word = require("./makeWord");
//var Letter = require("./letterValidate");
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var words = ["ZEBRA", "CHEETAH", "ELEPHANT", "TIGER", "MONKEY", "LEMUR", "LEOPARD", "OCTOPUS", "WOLF", "RHINOCEROS", "GIRAFFE", "FLAMINGO", "PORCUPINE", "LION"];
var wordNum = Math.floor(Math.random() * words.length);
var word = words[wordNum];
var guessesLeft = 15;
var guessedLetters = [];
//console.log(words.length);

//console.log(currentWord);
//console.log(letter.showLetter);
//console.log(Letter.letter);

function game() {
	var currentWord = new Word(word);
	console.log(currentWord);
    inquirer.prompt([{
        type: "input",
        name: "guess",
        message: "Guess a letter!",
        validate: function(value) { //checks to make sure guess is letter
            var val = value.toUpperCase(); // converts all to upper case to match letters in word
            if (alphabet.includes(val) === false) {
                return false;
            } else {
                return true;
            }
        }
    }]).then(function(inquirerResponse) {
        console.log(inquirerResponse.guess);

        
        letter = inquirerResponse.guess.toUpperCase();
        console.log(currentWord.word);
        var guessedAlready = false;
        // for (var i = 0; i < guessedLetters.length; i++) {
        //     if (letter === guessedLetters[i]) {
        //         guessedAlready = true;
        //     }
        // }
        if (guessedAlready === false && currentWord.word.includes(letter)) {
            guessedLetters.push(letter);
            // currentWord.guessedLetters.push(letter);
            console.log("Guessed already: " + guessedLetters);
            console.log("Correct!");
            checkWin();
            game();
        } else if (guessedAlready === false && !currentWord.word.includes(letter)) {
            guessesLeft--;
            guessedLetters.push(letter);
            console.log("Guessed already: " + guessedLetters);
            console.log("Wrong! Guesses left: " + guessesLeft);
            game();
        } else if (guessedAlready === true) {
            console.log("You've already guessed that!");
            game();
        }

        if (guessesLeft === 0) {
            console.log("Game over. The word was " + currentWord.word);
            inquirer.prompt([{
                type: "confirm",
                name: "again",
                message: "Play again?",
            }]).then(function(confirm) {
                guessesLeft = 15;
                game();
            });
        }

        function checkWin(guessedLetters, currentWord) {
        	console.log(guessedLetters);
    	// for (var i = 0; i < guessedLetters.length; i++) {
    	// 	if (currentWord.word.includes(i)) {
    	// 		currentWord.guessedLetters.push(i);
    	// 	}
    	//}
    // if (guessedAlready.includes(currentWord.word.split(" ")) && guessesLeft > 0) {
    // 	console.log("You win!");
    // }
    }
    });
    
};

game();