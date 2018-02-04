
// Creates a constructor for evaluating letter being guessed and either displaying letter or blank
// Letter will be passed in when creating new Letters and the guessed will default to false.
var Letter = function(storeLetter) {
  this.letter = storeLetter;
  this.guessed = false;

  // checks if a guessed letter matches the stored letter. If so guessed to true. 
  // Use display to return the stored letter or underscore.
  this.checkLetter = function(guessedLetter) {
    if (guessedLetter == this.letter) {
        this.guessed = true;
        return this.displayLetter();
    }
    else {
        // guessed is not set here because the letter may have previously been guessed
        return this.displayLetter();
    }
  };

  // checks if the letter has been previosuly guessed and, if so, return the letter. 
  // Otherwise return underscore.
  this.displayLetter = function() {
      if (this.guessed) {
          return this.letter;  // guessed letter - return letter
      }
      else {
          return "_";  // not guessed - return blank
      }
  };

};

module.exports = Letter;
