// this will be the file run in order to play the game

// sets up word constructor


/**index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`*/

var inquirer = require("inquirer");
var Word = require("./makeWord");
var letter = require("./letterValidate");
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ");
var words = ["ZEBRA", "CHEETAH", "ELEPHANT", "TIGER", "MONKEY", "LEMUR", "LEOPARD", "OCTOPUS", "WOLF", "RHINOCEROS", "GIRAFFE", "FLAMINGO", "PORCUPINE", "LION"];
var wordNum = Math.floor(Math.random() * words.length);
var word = words[wordNum];
var guessedLetters = [];
//console.log(words.length);

function startGame() {
    //console.log(this);
    //clears guessedLetters before a new game starts if it's not already empty.
    if (guessedLetters.length > 0) {
        guessedLetters = [];
    }
    game.gamePlay();
}

var game = {
    //game: this,
    guessesLeft: 10,
    currentWord: word,
    gamePlay: function() {
        var thisgame = this;
        //    guessedLetters: [],
        inquirer.prompt([{
            name: "guess",
            type: "input",
            message: "Guess a letter!",
            validate: function(value) {
                if (alphabet.indexOf(letter) === false) {
                    return false;
                } else {
                    return true;
                }
            }
        }]).then(function(letter) {
            console.log(guessedLetters);
            var showLetter = (letter.guess).toUpperCase();
            var guessedAlready = false;
            for (var i = 0; i < guessedLetters.length; i++) {
                if (showLetter === guessedLetters[i]) {
                    guessedAlready = true;
                    game.gamePlay();
                }
            }
            if (guessedAlready === false) {
                guessedLetters.push(showLetter);

                if (game.currentWord.letters === 0) {
                    console.log("Wrong!");
                    game.guessesLeft--;
                    console.log("Guesses left: " + game.guessesLeft + "\n-------------------" + game.currentWord.showWord() + "\n-------------------" + "Letters guessed: " + game.guessedLetters);
                } else {
                    console.log("Correct!");
                    //checks to see if user won
                    if (game.currentWord.wordGuessed() === true) {
                        console.log(game.currentWord.showWord() + "\nYou win!");
                        game.startGame();
                    } else {
                        console.log("Guesses left: " + game.guessesLeft + game.currentWord.showWord() + "\n------------------" + "Letters guessed: " + game.guessedLetters);
                    }
                }
                if (game.guessesLeft > 0 && game.currentWord.wordGuessed === false) {
                    game.gamePlay();
                } else if (game.guessesLeft === 0) {
                    console.log("You lose. \nIt was: " + game.currentWord.word);
                }
            } else {
                console.log("You already guessed this one.")
                game.gamePlay();
            }
        });
    },

};
startGame();