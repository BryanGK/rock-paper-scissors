function playRound(x, y) { // game
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

function computerPlay() { // computers guess
    computerVar = Math.random();
    if (computerVar < 0.333) {
        return "rock";
    } else if (computerVar >= 0.333 && computerVar < 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

const btn_rock = document.querySelector('#rock'); //player guesses rock

btn_rock.addEventListener('click', () => {
    if (win >= 5 || lose >= 5) {
        return;
    }
    y = computerPlay();
    x = "rock";
    round = (playRound(x, y));
    const compGuess = document.querySelector('comp');
    comp.textContent = "Computers guess: " + y + ", Your guess: rock";
    const output = document.querySelector('score');
    score.textContent = "Result: " + round;
    scoreRound(round);
});

const btn_paper = document.querySelector('#paper'); //player guesses paper

btn_paper.addEventListener('click', () => {
    if (win >= 5 || lose >= 5) {
        return;
    }
    y = computerPlay();
    x = "paper"
    round = (playRound(x, y));
    const compGuess = document.querySelector('comp');
    comp.textContent = "Computers guess: " + y + ", Your guess: paper";
    const output = document.querySelector('score');
    score.textContent = "Result: " + round;
    scoreRound(round);
});

const btn_scissors = document.querySelector('#scissors'); //player guesses scissors

btn_scissors.addEventListener('click', () => {
    if (win >= 5 || lose >= 5) {
        return;
    }
    y = computerPlay();
    x = "scissors"
    round = (playRound(x, y));
    const compGuess = document.querySelector('comp');
    comp.textContent = "Computers guess: " + y + ", Your guess: scissors";
    const output = document.querySelector('score');
    score.textContent = "Result: " + round;
    scoreRound(round);
});


let win = 0;
let lose = 0;

function scoreRound(round) { // round scoring
         if (round === "You win this round!") {
        win++;
        const outputWins = document.querySelector('wins');
        wins.textContent = "Wins: " + win;
        
    } else if (round === "You lose.") {
        lose++;
        const outputLoses = document.querySelector('loses');
        loses.textContent = "Loses: " + lose;
    }
    if (win >= 5) {
        const youWin = document.querySelector('endGame');
        endGame.textContent = "Congrats! You won this game!"
    } else if (lose >= 5) {
        const youLose = document.querySelector('endGame');
        endGame.textContent = "Better luck next time."
    }
}
const btnReset = document.querySelector('#reset'); // reset game
    btnReset.addEventListener('click', () => {
    resetGame();
});
 
function resetGame() { // reset game
    const reset = document.querySelector('endGame');
    const outputWins = document.querySelector('wins');
    const outputLoses = document.querySelector('loses');
    const output = document.querySelector('score');
    score.textContent = "Result: ";
    endGame.textContent = '';
    wins.textContent = 'Wins: 0';
    loses.textContent = 'Loses: 0';
    win = 0;
    lose = 0;
}

