/* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
*/
var Letter = require('./letterValidate.js');
//console.log("words here!");


// word constructor
function Word(word, spacedWord, letters, guessedLetters) {
    this.word = word;
    this.spaced = [];
    var thisSpaced = this.spaced;
    this.match = 0;
    this.spacedWord = function(word) {
    	for (i = 0; i < word.length; i++) {
    		thisSpaced.push("_ ");
    		console.log(thisSpaced[thisSpaced.length - 1]);
    	}
    };
    this.letters = [];
    this.guessedLetters = []; // stores guessed letters into this array
    this.wordCorrect = false;
    this.getLetters = function() {
        for (var i = 0; i < word.length; i++) { //puts new Letter objects in for the word
            var letter = new Letter();
            this.letters.push(letter);
        }
    };
    this.letterCorrect = function(letter) {
        // 
        this.guessedLetters.push(letter);
        //iterates through each letter to see if it matches the guessed letter
        this.letters.forEach(function(letter) {
            if (letter.letter === letter) {
                letter.correct = true;
                this.match++;
            }
        })
        //show letter if it is correct
       return this.match;
    };
    this.showWord = function() {
        this.letters.forEach(function(letter) {
            var currentLetter = letter.showLetter();
        });
    };
};
//console.log(word);
module.exports = Word;