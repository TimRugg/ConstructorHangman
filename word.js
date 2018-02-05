// use letter.js for checking and displaying letters of the word
var Letter = require("./letter.js");

var Word = function(word) {
    // get word from calling file and create a letter object for each letter
    this.word = word;
    this.lettersInWord = [];
    this.lettersDisplayed = 0;
    for (i=0; i < this.word.length; i++) {
        this.lettersInWord.push(new Letter(this.word[i]));
    };
    // display each letter in the word
    this.displayWord = function() {
        var displayWord = "";
        var displayLetter = "";
        var lettersDisplayedCount = 0;
        for (i=0; i < this.word.length; i++) {
            displayLetter = this.lettersInWord[i].displayLetter();
            // count the correctly guessed letters of the word
            // can be used to compare to word length
            if (displayLetter != "_") {
                lettersDisplayedCount++;
            };
            // concatenate the guessed letters together for display
            displayWord += " " + displayLetter;
        }
        this.lettersDisplayed = lettersDisplayedCount;
        return displayWord; 
    }
    // check if guessed letter is correct
    this.guessLetter = function(guessedLetter) {
        var letterMatch = false;
        // test guessed letters against all letters in word
        for (i=0; i < this.word.length; i++) {
            // if the guessed letter matches then change to true (false does not reset so it's always true if one occurrence matches)
            if (this.lettersInWord[i].checkLetter(guessedLetter)) {
                letterMatch = true;
            }
        }
        return letterMatch;
    }
    // check if all letters have been displayed
    // this.allLettersDisplayed = function() {
    //     return lettersDisplayed;
    // }
}
module.exports = Word;