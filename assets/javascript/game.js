

window.onload = function hangMan() {

//window.addEventListener("onload", hangMan()); <-----html will not even load with this

//document.addEventListener("onload", hangMan()); //html loads but null value error occurs at line 43.

//window.onload = hangMan();//html loads but null value error occurs at line 43.

// function hangMan() {

    var wordArray = ["Pooh", "Piglet", "Eyore", "Lilo", "Stitch", "Cinderella", "Jasmine"];

    var gameOver = 0;

    var gamesPlayed = 0;

    var wins = 0, losses = 0;

    //Use while loop so that game can be played multiple times until all words have been used.
    if (wordArray.length > 0) {

        //initialize array of letters already guessed by user
        var previousGuess = [];

        //initialize counter for numer of guesses
        var guessCount = 10;

        //Select game word
        var gameWord = wordArray[Math.floor(Math.random() * wordArray.length)];

        console.log (gameWord);

        gameWord = gameWord.toLowerCase();

        var gameWordArray = gameWord.split("");

        //Remove word from array so that it cannot be chosen again for additional games played   
        wordArray.splice(wordArray.indexOf(gameWord), 1);

        //Display game word on screen with letters hidden
        for (i=0; i<gameWord.length; i++) {

            var wordBlock = document.getElementById("displayWord");
            
            var hdn = document.createElement("span");

            wordBlock.appendChild(hdn);

            var att = document.createAttribute("id");

            att.value = "ltr" + i.toString();

            hdn.setAttributeNode(att);

            hdn.innerHTML = "________   "
            
        }

        //increment game counter by 1
        gamesPlayed++;

        //display new count of games played
        document.getElementById("gmsPlayed").innerHTML = gamesPlayed;

        //condition true until game is over
        if (gameOver == 0) {

            var correctGuess = 0;
                
            // This function is run whenever the user presses a key.
            document.onkeyup = function(event) {

                // Determines which key was pressed.
                //var userGuess = String.fromCharCode(event.which).toLowerCase();
                var userGuess = event.key;

                //assigns the key code to a variable
                var userKeyCode = Number(event.keyCode);

                //Make sure key pressed is a letter of the alphabet
                if (userKeyCode >= 65 && userKeyCode <= 97) {

                    //Make sure key pressed is not one of the previous guesses
                    if (previousGuess.indexOf(userGuess) >= 0) {
                        alert("This letter has already been guessed.  Please choose another letter");
                    } else {

                        //add letter to previousGuess array    
                        previousGuess.push(userGuess); 
                        
                        if (gameWord.indexOf(userGuess) == -1) {
                            alert("Letter guessed is not in the word.");

                            //decrement guessCount
                            guessCount--;

                            //display guessCount
                            document.getElementById("gsCount").innerHTML = guessCount;


                        } else {
                            
                            //account for multiples of the same letter in the game word
                            for (j=0; j<gameWord.length; j++) {
            
                                if (userGuess == gameWordArray[j]) {

                                    var ltrBlock = document.getElementById("ltr" + j.toString());

                                    correctGuess++;
            
                                    if ( j == 0) {            
                                        ltrBlock.innerHTML = gameWordArray[j].toUpperCase();
                                    } else {
                                        ltrBlock.innerHTML = gameWordArray[j];   
                                    }
                                }
                            }                        
                        }
                    }   
                              
                } else {
                    alert("Key pressed is not a letter.  Please try again.");
                }

                //check to see if all letters in word have been guessed
                if (correctGuess == gameWord.length) {
                    alert ("Congratulations on guessing the word correctly!  Why not play again?");
                    
                    //increment wins counter
                    wins = wins + 1;

                    //display new wins count
                    document.getElementById("gmsWon").innerHTML = wins;

                    //exit game loop
                    gameOver = 1;
                }

                //check to see if the guess count is 0
                if (guessCount == 0) {
                    alert ("Game Over!  Why not try again?");

                    //increment losses counter
                    losses = losses + 1          

                    //display new losses count
                    document.getElementById("gmsLost").innerHTML = losses;

                    //exit game loop
                    gameOver = 1;
                    
                }     
            }      
        }       
    }
}