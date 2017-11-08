window.onload = function () {
    
      
      var animals;         // Animals
      var getHint ;          // Word getHint
      var word ;              // Selected word
      var guess ;             // Geuss
      var guesses = [ ];      // Stored guesses
      var lives ;             // Lives
      var counter ;           // Count correct guesses
      var space;              // Number of spaces in word '-'
    
      // Get elements
      var showLives = document.getElementById("guessesrem");
      


      // create onkeyup function for guessing letters

        
    
      // Create guesses ul
       result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');
    
        for (var i = 0; i < word.length; i++) {
          correct.setAttribute('id', 'my-word');
          guess = document.createElement('li');
          guess.setAttribute('class', 'guess');
          if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
          } else {
            guess.innerHTML = "_";
          }
    
          guesses.push(guess);
          wordHolder.appendChild(correct);
          correct.appendChild(guess);
        }
      }
      
    // Show lives
       comments = function () {
        showLives.innerHTML = "You have " + lives + " lives left";
        if (lives < 1) {
          showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
          if (counter + space === geusses.length) {
            showLives.innerHTML = "You Win!";
          }
        }
      }
    
    // OnClick Function
       check = function () {
        list.onclick = function () {
          var geuss = (this.innerHTML);
          this.setAttribute("class", "active");
          this.onclick = null;
          for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
              guesses[i].innerHTML = guess;
              counter += 1;
            } 
          }
          var j = (word.indexOf(guess));
          if (j === -1) {
            lives -= 1;
            comments();
            animate();
          } else {
            comments();
          }
        }
      }
      
        
    // Play
      play = function () {
        animals = [
            ["jaguar", "elephant", "monkey", "sloth", "tucan", "tiger", "giraffe"],
            ["bear", "eagle", "walrus", "wolf", "shark"],
            ["kangaroo", "snake", "horse", "antelope", "flamingo"]
        ];
    
        word = animals[Math.floor(Math.random() * animals.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();
    
        guesses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
      }
    
      play();
      
    // Reset
    
      document.getElementById("reset").onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        play();
      }
    }
    