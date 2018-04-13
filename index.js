// this will be the file run in order to play the game

// sets up word constructor


/**index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`*/

var inquirer = require("inquirer");
var word = require("./makeWord");
var validateLetter = require("./letterValidate");

var words = ["ZEBRA", "CHEETAH", "ELEPHANT", "TIGER", "MONKEY", "LEMUR", "LEOPARD", "OCTOPUS", "WOLF", "RHINOCEROS", "GIRAFFE", "FLAMINGO", "PORCUPINE", "LION"];
var wordNum = Math.floor(Math.random() * words.length);
var word = words[wordNum];

validateLetter();

console.log(word);

//var word = new Word(words[wordNum], )

