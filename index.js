// use letter.js for checking and displaying letters of the word
var Word = require("./word.js");
var guessedLetter = "";
var guessedLetters = [];
var availableCharacters = "abcdefghijklmnopqrstuvwxyz";
var gameCountdownGuesses = 10;

// test output - REPLACE with logic to randomly select a word
// ensure word is lowercase
var gameWord = new Word("assignment");

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
console.log("  make ten incorrect guesses before you lose.\n");

// function playGame() {
    function playGame(guessedLetter) {
// prompt user for input
// inquire for guessedLetter
// transform to lowercase
// test for invalid and previous guesses
if (testLetter(guessedLetter)) {
    // evaluate valid letter against word
    if (gameWord.guessLetter(guessedLetter)) {
        console.log("\nC O R R E C T ! ! !\n");
        console.log("Letter " + guessedLetter + " was found");
        console.log(gameWord.displayWord());
// console.log(gameWord.lettersDisplayed);
// console.log(gameWord.word);
// console.log(gameWord.word.length);
        if (gameWord.lettersDisplayed == gameWord.word.length) {
            console.log("Win game");
        };
    } else {
        console.log("\nW R O N G ! ! !\n");
        console.log("Letter " + guessedLetter + " was NOT found");
        console.log(gameWord.displayWord());
        gameCountdownGuesses--;
        console.log("Remaining guesses: " + gameCountdownGuesses);
        if (gameCountdownGuesses == 0) {
            console.log("Lose game");
        }
    }
} else {
    console.log("Play Game and prompt user for new input");
    playGame("i");
    // playGame()
};
};

function testLetter(guessedLetter) {
if (wasLetterGuessed(guessedLetter)) {
    console.log("\nYou've already guessed letter " + guessedLetter + ". Try again.");
    return false
        } else if (isValidLetter(guessedLetter) === false) {
            console.log("\nCharacter " + guessedLetter + " is not a valid a-z letter. Try again.");
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
        }
    }
    return letterFound;
};

// check guess against array of already guessed characters
function wasLetterGuessed(guessedLetter) {
    var letterFound = false;
    for (var i=0; i < guessedLetters.length; i++) {
        if (guessedLetter == guessedLetters[i]) {
            letterFound = true; // set to true (false does not overwrite)
        }
    }
    return letterFound;
};


// TEST
playGame("s");
playGame("e");
playGame("t");
playGame("a");
playGame("g");
playGame("m");
playGame("n");
playGame("u");
playGame("c");
playGame("b");
playGame("p");
playGame("q");
playGame("w");
playGame("x");
playGame("z");
playGame("l");
playGame("s");
// playGame("i"); in testLetter
playGame("k");



// TEST
// testLetter("s");
// testLetter("o");
// testLetter("e");
// testLetter("t");

// function testLetter(testLetter) {
//     if (whatWord.guessLetter(testLetter)) {
//         console.log("Letter " + testLetter + " was found");
//         console.log(whatWord.displayWord());
//     } else {
//         console.log("Letter " + testLetter + " was NOT found");
//         console.log(whatWord.displayWord());
//     }
// }
