/* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
*/
var Letter = require('./letterValidate.js');
//console.log("words here!");

// word constructor
function Word(word, spacedWord, letters, guessedLetters) {
    var thisWord = this;
    console.log(this);
    this.word = word;
    // this.spacedWord = function(word) {
    // 	for (i = 0; i < word.length; i++) {

    // 	}
    //}; // needs for loop to loop through and add spaces to word
    this.letters = [];
    this.guessedLetters = []; // stores guessed letters into this array
    this.wordCorrect = false;
    this.getLetters = function() {
        for (var i = 0; i < thisWord.word.length; i++) { //puts new Letter objects in for the word
            var newLetter = new Letter(thisWord.word[i]);
            this.letters.push(newLetter);
        }
    };
    this.letterCorrect = function(guess) {
        var match = 0;
        //iterates through each letter to see if it matches the guessed letter
        this.letters.forEach(function(letter) {
            if (letter.letter === guess) {
                letter.correct = true;
                match++;
            }
        })
        // show letter if it is correct
        return match;
    };
    this.showWord = function() {
        //render the word based on if letters are found or not
        this.letters.forEach(function(letter) {
            var currentLetter = letter.showLetter();
        });
    };
    //if the current word was guessed
    this.wordGuessed = function() {
        if (this.letters.every(function(letter) {
                return letter.appear === true;
            })) {
            this.wordFound = true;
            return true;
        }
    };
}
//console.log(word);
module.exports = Word;