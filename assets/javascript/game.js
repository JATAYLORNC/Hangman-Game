var wordArray = ["Pooh", "Piglet", "Eyore", "Lilo", "Stitch", "Cinderella", "Jasmine"];

var gameOver = 0;

var gamesPlayed = 0;

var wins = 0, losses = 0;


//Use while loop so that game can be played multiple times until all words have been used.
while (wordArray.length > 0) {

    //initialize array of letters already guessed by user
    var previousGuess = [];

    //initialize counter for numer of guesses
    var guessCount = 10;

    //declare newGuessBoolean
    var newGuessBoolean;

    //Select game word
    var gameWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    //Display game word on screen with letters hidden
    for (i=0; i<gameWord.length; i++) {
        
        var displayID = "ltr" + i.toString();
    
        document.getElementById(displayID).innerHTML = gameWord.charAt(i);
    }

    //Remove word from array so that it cannot be chosen again for additional games played
    
    
    wordArray.splice(wordArray.indexOf(gameWord), 1);

    gameWord = gameWord.toLowerCase();

    //increment game counter by 1
    gamesPlayed++;

    //display new count of games played

    //loop until game is over
    while (gameOver==0) {

        newGuessBoolean = 1;
           
        //loop until the key chosen is a letter and has not already been guessed
        while (newGuessBoolean == 1) {

            // This function is run whenever the user presses a key.
            document.onkeyup = function(event) {

                // Determines which key was pressed.
                var userGuess = String.fromCharCode(event.which).toLowerCase();

                //assigns the key code to a variable
                var userKeyCode = event.which;

                //Make sure key pressed is a letter of the alphabet
                if (userKeyCode >= 65 && userKeyCode <= 90) {

                    //Make sure key pressed is not one of the previous guesses
                    if (previousGuess.indexOf(userGuess) >= 0) {
                        alert("This letter has already been guessed.  Please choose another letter");
                    } else {
                        //change newGuessBoolean
                        newGuessBoolean = 0;

                        //decrement guessCount
                        guessCount--;

                        //add letter to previousGuess array    
                        previousGuess.push(userGuess);    
                    } 
                } else {
                    alert("Key pressed is not a letter.  Please try again.");
                }
            }
        }

        if (gameWord.indexOf(userGuess) == -1) {
            alert("Letter guessed is not in the word.");
        } else {
            //display letter on screen

            //remove letter from gameWord string

            //account for multiples of the same letter

        }

        //check to see if all letters in word have been guessed
        if (gameword.length == 0) {
            alert ("Congratulations on guessing the word correctly!  Why not play again?");
            
            //increment wins counter
            wins = wins + 1;

            //increment number of games played
            gamesPlayed = gamesPlayed + 1;

            //display new wins count

            //exit game loop
            gameOver = 1;
        }

        //check to see if the guess count is 0
        if (guessCount == 0) {
            alert ("Game Over!  Why not try again?");

            //increment losses counter
            losses = losses + 1

            //increment number of games played
            gamesPlayed = gamesPlayed + 1;            

            //display new losses count

            //exit game loop
            gameOver = 1;
        }
    }

}