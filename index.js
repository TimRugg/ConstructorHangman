// use letter.js for checking and displaying letters of the word
var Word = require("./word.js");

// test output
var whatWord = new Word("assignment");

console.log(whatWord);

testLetter("s");
testLetter("o");
testLetter("e");
testLetter("t");

function testLetter(testLetter) {
    if (whatWord.guessLetter(testLetter)) {
        console.log("Letter " + testLetter + " was found");
        console.log(whatWord.displayWord());
    } else {
        console.log("Letter " + testLetter + " was NOT found");
        console.log(whatWord.displayWord());
    }
}
