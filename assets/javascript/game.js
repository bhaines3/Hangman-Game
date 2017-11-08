window.onload = function () {
  var animals;         // Animals
  var word;              // Selected word
  var guess;             // Geuss
  var guesses = [];      // Stored guesses
  var guessesRem;             // Lives
  var wins = 0;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var guessesRemDOM = document.getElementById("guessesrem");
  var winsDOM = document.getElementById("wins");
  var currentWordDOM = document.getElementById("currentword");
  var lettersGuessedDOM = document.getElementById("lettersguessed");
  var statusDOM = document.getElementById('status');


  // create onkeyup function for guessing letters

  // Create guesses ul
   function genUnderScores () {
    for (var i = 0; i < word.length; i++) {
      //make a blank
      var blank = "_"
      //push that blank into the space array
      space.push(blank)
    }
    console.log(space);
    //join that array and make it a string
      var joinedSpaces = space.join(' ')
    //show that string on the DOM
    currentWordDOM.innerHTML = "Current Word: " + "<strong>" + joinedSpaces + "</strong>";
  }

// Show guessesRem
function comments() {
    showLives.innerHTML = "You have " + guessesRem + " guessesRem left";
    if (guessesRem < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }
// Play
  play = function () {
    animals = [
        "jaguar", "elephant", "monkey", "sloth", "tucan", "tiger", "giraffe",
        "bear", "eagle", "walrus", "wolf", "shark",
        "kangaroo", "snake", "horse", "antelope", "flamingo"
      ];
    word = animals[Math.floor(Math.random() * animals.length)];
    console.log(word);
    guesses = [];
    guessesRem = 10;
    guessesRemDOM.innerHTML = "Guesses Remaining: " + guessesRem;
    space = [];
    statusDOM.innerHTML = "Try to guess the animal!"
    lettersGuessedDOM.innerHTML = "Letters Guessed: " + guesses.join(" ");
    genUnderScores();
  }

  play();

// Reset

  document.getElementById("reset").onclick = function() {
    document.getElementById('reset').style.display = "none"
    play();
  }
  document.addEventListener("keyup", function(event){
    console.log(event.key);
    var userGuess = event.key;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === userGuess) {
        //replace index of space array were letter should be
        space[i] = userGuess;
        var joinedSpaces = space.join(' ');
        //show that string on the DOM
        currentWordDOM.innerHTML = "Current Word: " + "<strong>" + joinedSpaces + "</strong>";
      }
    }
    if (word.indexOf(userGuess) == -1) {
      var joinedGuesses = guesses.join("")
      if (joinedGuesses.indexOf(userGuess) == -1) {
        guesses.push(userGuess);
        lettersGuessedDOM.innerHTML = "Letters Guessed: " + guesses.join(" ");
        guessesRem--;
        if (guessesRem >= 0) {
          guessesRemDOM.innerHTML = "Guesses Remaining: " + guessesRem;
        }else {
          console.log("you loose");
          statusDOM.innerHTML = "YOU LOOSE!! BETTER LUCK NEXT TIME!"
          showBtn();
        }
      }
    }
    if (space.join('') == word) {
      console.log("you won");
      wins++;
      winsDOM.innerHTML = "Wins: " + wins;
      statusDOM.innerHTML = "CONGRATS YOU WIN!!!!"
      setTimeout(play, 4000);
    }
  })

  function showBtn() {
    document.getElementById('reset').style.display = "block";
  }
}
    