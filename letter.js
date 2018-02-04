
// Creates a constructor for evaluating letter being guessed and either displaying letter or blank
var Letter = function(storeLetter) {
  this.letter = storeLetter;
  this.guessed = false;

  this.checkLetter = function(guessedLetter) {
    if (guessedLetter == this.letter) {
        this.guessed = true;
        return this.displayLetter();
    }
    else {
        return this.displayLetter();
    }
  };

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
