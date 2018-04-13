/* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
*/

// word constructor


function Word(word, spacedWord, guessesLeft, correctLetters, guessedLetters) {
	this.word = words[wordNum];
	this.spacedWord = spacedWord; // needs for loop to loop through and add spaces to word
	this.guessesLeft = 15;
	this.correctLetters = []; // function to loop through and find correct letters?
	this.guessedLetters = []; // stores guessed letters into this array and validate filters them out if guessed
}


module.exports = (Word);