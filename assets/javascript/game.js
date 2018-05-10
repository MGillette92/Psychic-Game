
//array of available letter choices
var compChoices = ["a", "b", "c", "d", "e", "f", 
                   "g", "h", "i", "j", "k", "l", 
                   "m", "n", "o", "p", "q", "r", 
                   "s", "t", "u", "v", "w", "x", 
                   "y", "z"];

//init var
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var compLetter = undefined;


var newGuessesLeft = function () {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//choose random letter
var newLetterToGuess = function () {
    compLetter = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log(compLetter);
};

//store user guesses
var newGuessesSoFar = function () {
    document.querySelector('#userGuesses').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//function called when we reset everything after win or lose
var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];

    newLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}

//log user guess
document.onkeyup = function (event) {
    guessesLeft--;
    console.log(event.key);
    console.log(guessedLetters);

    //convert to lowercase and update counters
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

//check if the user has won, update counters, and start the game over
if (guessesLeft > 0) {
    if (userGuess == compLetter) {
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        reset();
    }
} else if (guessesLeft == 0) {
    losses++;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    reset();
}
};
