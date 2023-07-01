// Guess the Number

// Variable to store the list of guesses
let guesses;
// Variable to store the correct random number
let correctNumber;

window.onload = function () {
    initGame();
    document.getElementById('number-submit').addEventListener('click', playGame);
}

function playGame() {
    let numberGuess = document.getElementById('number-guess').value;
    console.log(numberGuess);
    displayResult(numberGuess);
}

// Initialize a new game by resetting all values and content on the page
function initGame() {
    correctNumber = getRandomNumber();
    console.log('Correct Number >>> ', correctNumber);
    guesses = []
}

// Return random number between 1 an 100
function getRandomNumber() {
    /* 
        Math.random returns a number between 0 and 1
        Multiplying Math.random by x will return a number between 0 and x
        Adding 1 to Math.random * x will make it so x can also be a part of
        that range of returnable values
    */
    return Math.floor((Math.random() * 100) + 1);
}

function displayResult(numberGuess) {
    if (numberGuess > correctNumber) {

    } else if (numberGuess < correctNumber) {

    } else {

    }
}

function getDialogue(dialogueType, text) {
    let dialogue;
    switch(dialogueType) {
        case 'warning':
            dialogue = "<div class='alert alert-warning' role='alert'>";
            break;
        case 'won':
            dialogue = "<div class='alert alert-success' role='alert'>";
            break;
    }
    dialogue += text;
    dialogue += "</div>";
    return dialogue;
}

function showNumberAbove() {
    const text = 'Your guess is too high!';
    let dialogue = getDialogue("warning", text);
    document.getElementById("result").innerHTML = dialogue;
}