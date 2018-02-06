// use letter.js for checking and displaying letters of the word
var Word = require("./word.js");
var inquirer = require("inquirer");
var fs = require("fs");
var guessedLetter = "";
var guessedLetters = [];
var availableCharacters = "abcdefghijklmnopqrstuvwxyz";
var gameCountdownGuesses = 10;
var gameWord = [];

// choose random word from file
fs.readFile("wordlist.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    // transform list of words to an array
    var wordlist = data.split("\r\n");
    // grab random index based on length of word list
    var randomIndex = Math.floor(Math.random() * Math.floor(wordlist.length));
    var randomWord = wordlist[randomIndex].toLowerCase();
    // create random word for game play
    gameWord = new Word(randomWord);
});

// prompt user with instructions
console.log("***********************************************");
console.log("************                       ************");
console.log("********      Constructor Hangman      ********");
console.log("************                       ************");
console.log("***********************************************\n");
console.log("  Try to guess the word, one letter at a time.");
console.log("  If you correctly guess a letter in the word,");
console.log("  that letter will be displayed in all places.\n");
console.log("  You win when the entire word is displayed!\n");
console.log("  If the letter guessed is not anywhere in the");
console.log("  word then it is an incorrect guess. You can");
console.log("  make ten incorrect guesses before you lose.");

playGame();

function playGame() {
console.log("\n");
    // prompt user for input and inquire for guess
    inquirer.prompt([
        {
        name: "userGuess",
        message: "Guess a letter: "
        }
    ]).then(function(answers) {
        // transform to lowercase
        guessedLetter = answers.userGuess.toLowerCase();
        // test for invalid and previous guesses
        if (testLetter(guessedLetter)) {
                // evaluate valid letter against word
                if (gameWord.guessLetter(guessedLetter)) {
                        outputStatus("C O R R E C T", "was found");
                        if (gameWord.lettersDisplayed == gameWord.word.length) {
                            console.log("\n************* W I N N E R ! *************");
                            return
                        };
                        playGame();
                } else {
                        outputStatus("  W R O N G  ", "was NOT found");
                        gameCountdownGuesses--;
                        console.log("Remaining guesses: " + gameCountdownGuesses);
                        if (gameCountdownGuesses == 0) {
                            console.log("\n*************   L O S E R   *************");
                            return
                        };
                        playGame();
                };
        } else {
            playGame();
        };
    }); // end of iquirer
}; // end of playGame

// send to check for invalid character or previously guessed characters and if ok push into guessedLetters array
function testLetter(guessedLetter) {
    if (wasLetterGuessed(guessedLetter)) {
        console.log("\nYou've already guessed letter " + guessedLetter + ". Try again.");
        return false
            } else if (isValidLetter(guessedLetter) === false) {
                console.log("\nCharacter " + guessedLetter + " is not a single valid a-z letter. Try again.");
                return false
    } else {
        // letter was not guessed before and is valid
        guessedLetters.push(guessedLetter);
        return true
    };
};

// check guess against array of available characters
function isValidLetter(guessedLetter) {
    var letterFound = false;
    for (var i=0; i < availableCharacters.length; i++) {
        if (guessedLetter == availableCharacters[i]) {
            letterFound = true; // set to true (false does not overwrite)
        };
    };
    return letterFound;
};

// check guess against array of already guessed characters
function wasLetterGuessed(guessedLetter) {
    var letterFound = false;
    for (var i=0; i < guessedLetters.length; i++) {
        if (guessedLetter == guessedLetters[i]) {
            letterFound = true; // set to true (false does not overwrite)
        };
    };
    return letterFound;
};

// output to screen
function outputStatus(hdr, msg) {
    console.log("************* " + hdr + " *************");
    console.log("\nLetter " + guessedLetter + " " + msg + ": " + gameWord.displayWord());
};
