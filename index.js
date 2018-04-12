// this will be the file run in order to play the game

// sets up word constructor

var inquirer = require("inquirer");

function Word(word, spacedWord, guessesLeft, correctLetters, guessedLetters) {
	this.word = word;
	this.spacedWord = spacedWord;
	this.guessesLeft = 15;
	this.correctLetters = [];
	this.guessedLetters = [];
}