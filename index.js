// this will be the file run in order to play the game


/**index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`*/

var inquirer = require("inquirer");
var Word = require("./makeWord");
//var Letter = require("./letterValidate");
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ");
var words = ["ZEBRA", "CHEETAH", "ELEPHANT", "TIGER", "MONKEY", "LEMUR", "LEOPARD", "OCTOPUS", "WOLF", "RHINOCEROS", "GIRAFFE", "FLAMINGO", "PORCUPINE", "LION"];
var wordNum = Math.floor(Math.random() * words.length);
var word = words[wordNum];
var guessesLeft = 15;
var guessedLetters = [];
//console.log(words.length);

var currentWord = new Word(word);

console.log(currentWord);
//console.log(letter.showLetter);
//console.log(Letter.letter);

function game() {
    inquirer.prompt([{
        type: "input",
        name: "guess",
        message: "Guess a letter!",
        // validate: function(value) {
        //     if (alphabet.indexOf(letter) === false) {
        //         return false;
        //     } else {
        //         return true;
        //     }
        // }
    }]).then(function(inquirerResponse) {
    	console.log(inquirerResponse.guess);
        var letter = inquirerResponse.guess;
        //var showLetter = (letter.name).toLowerCase();
        var guessedAlready = false;
        for (var i = 0; i < guessedLetters.length; i++) {
                if (letter === guessedLetters[i]) {
                    guessedAlready = true;
                }
            }
            if (guessedAlready === false) {
                guessedLetters.push(letter);
                console.log("Guessed already: " + guessedLetters);
                game();
            }
            else if (guessedAlready === true) {
            	console.log("You already guessed that!");
            	game();
            }
            // if (currentWord.includes(letter)) {
            // 	console.log("Correct!");
            // }
        //var letter = new Letter(inquirerResponse.name);
       // console.log(letter);
    });
};
// calls game as long 
if (guessesLeft > 0) {
    game();
}
    else {
    	console.log("Game over.  The word was " + currentWord);
    }