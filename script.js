function playRound(x, y) {
    if (x === "rock" && y === "scissors") {
        return "You win this round!";
    } else if (x === "paper" && y === "rock") {
        return "You win this round!";
    } else if (x === "scissors" && y === "paper") {
        return "You win this round!";
    } else if (x === "rock" && y === "paper") {
        return "You lose.";
    } else if (x === "paper" && y === "scissors") {
        return "You lose.";
    } else if (x === "scissors" && y === "rock") {
        return "You lose.";
    } else if (x === "rock" && y === "rock") {
        return "It's a tie!";
    } else if (x === "paper" && y === "paper") {
        return "It's a tie!";
    } else if (x === "scissors" && y === "scissors") {
        return "It's a tie!";
    } else
        return "Something's not right here."
}

function playerPlay() {
    playerSelection = prompt("Select: Rock, Paper, Scissors").toLowerCase();
    return playerSelection;
}

function computerPlay() {
    computerVar = Math.random();
    if (computerVar < 0.333) {
        return "rock";
    } else if (computerVar >= 0.333 && computerVar < 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRock () {
    y = computerPlay();
    // Here's where you left off, next you were adding in the rock conditions
}

const btn_rock = document.querySelector('#rock');

btn_rock.addEventListener('click', () => {
    console.log("Rock");
});

const btn_paper = document.querySelector('#paper');

btn_paper.addEventListener('click', () => {
    console.log("Paper");
});

const btn_scissors = document.querySelector('#scissors');

btn_scissors.addEventListener('click', () => {
    console.log("Scissors")
});