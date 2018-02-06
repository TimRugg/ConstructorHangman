# Constructor Hangman

## Description
Play hangman using Node.js and constructors.
* Word is selected from a file using the NPM package fs
* Users are prompted to guess one letter at a time using the NPM package inquirer 
* A letter constructor treats each letter as an object making up the word
>> a method determines if the letter has been guessed or not
>> a method determines if the letter guessed is in the word
* A word constuctor builds the word of objects
>> a method is used throughout the game to display the word as letters are guessed 
* Additional features
>> allow words to be a phrase with spaces
>> validate the letter input is valid
>> store a list of all guesses
>> countdown the wrong guesses

## Instructions
- Clone repository
- First time play: In a command or terminal window, run 'npm install'
- To play: in a command or terminal window, run 'node index.js'

## Frameworks and libraries
- Node.js
- NPM Package  : Inquirer : https://www.npmjs.com/package/inquirer
- Node Package : FS : https://www.w3schools.com/nodejs/nodejs_filesystem.asp
