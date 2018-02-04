// use letter.js for checking and displaying letters of the word
var Letter = require("./letter.js");

var Word = function(word) {
    // get word from calling file and create a letter object for each letter
    this.word = word;
    this.lettersInWord = [];
    for (i=0; i < this.word.length; i++) {
        this.lettersInWord.push(new Letter(this.word[i]));
    };
    // display each letter in the word
    this.displayWord = function() {
        var displayWord = "";
        for (i=0; i < this.word.length; i++) {
            displayWord += " " + this.lettersInWord[i].displayLetter();
        }
        return displayWord; 
    }
    // check if guessed letter is correct
    this.guessLetter = function(guessedLetter) {
console.log("guessedLetter: " + guessedLetter);
        var letterMatch = false;
        // test guessed letters against all letters in word
        for (i=0; i < this.word.length; i++) {
            // if the guessed letter matches then change to true (false does not reset so it's always true if one occurrence matches)
console.log("letter being checked: "+ this.lettersInWord[i].letter)
            if (this.lettersInWord[i].checkLetter(guessedLetter)) {
                letterMatch = true;
            }
        }
        return letterMatch;
    }
}
module.exports = Word;

// test output
// console.log("word: " + word);
// for (i=0; i<word.length; i++) {
//     console.log("word " + i + ": " + word[i]);
// }
// console.log(lettersInWord);
// for (i=0; i<word.length; i++) {
//     console.log("lettersInWord " + i + ": " + lettersInWord[i].letter);
//     console.log("checkLetter " + i + ": " + lettersInWord[i].checkLetter("o"));
// }
// for (i=0; i<word.length; i++) {
//     console.log("displayLetter " + i + ": " + lettersInWord[i].displayLetter());
// }
