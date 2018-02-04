// use letter.js for checking and displaying letters of the word
var Letter = require("./letter.js");

var word = "bingoshoot";
var lettersInWord = [];
for (i=0; i<word.length; i++) {
    lettersInWord.push(new Letter(word[i]));
}

// test output
console.log("word: " + word);

for (i=0; i<word.length; i++) {
    console.log("word " + i + ": " + word[i]);
}

console.log(lettersInWord);
for (i=0; i<word.length; i++) {
    console.log("lettersInWord " + i + ": " + lettersInWord[i].letter);
    console.log("checkLetter " + i + ": " + lettersInWord[i].checkLetter("o"));
}
for (i=0; i<word.length; i++) {
    console.log("displayLetter " + i + ": " + lettersInWord[i].displayLetter());
}

