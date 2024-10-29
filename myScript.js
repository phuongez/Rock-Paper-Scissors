function getComputerChoice() {
    let number = Math.random();
    let choice = (number<0.3) ? 'rock' : 
        (number<0.6) ? 'paper' :
        'scissor';
    return choice;
}

let roundResult = document.querySelector('#result')

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');

let humanChoice = '';

rockBtn.addEventListener('click', () => {
    humanChoice = 'rock';
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

paperBtn.addEventListener('click', () => {
    humanChoice = 'paper';
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

scissorBtn.addEventListener('click', () => {
    humanChoice = 'scissor';
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});



/*
function getHumanChoice() {
    let humanChoice = prompt("What\'s your choice?", "rock, paper or scissor");
    return humanChoice;
};


function playRound() {
    
*/
    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice == 'rock') {
            switch(computerChoice) {
                case "rock":
                    console.log("It's draw!");
                    roundResult.textContent = 'Draw';
                    break;
                case "scissor":
                    console.log("You win! Rock beats scissor");
                    humanScore++;
                    roundResult.textContent = 'Player + 1 score';
                    break;
                default:
                    console.log("You lose! Paper beats rock");
                    computerScore++;
                    roundResult.textContent = 'Computer + 1 score';        
            }
        }
        if (humanChoice == 'paper') {
            switch(computerChoice) {
                case "rock":
                    console.log("You win! Paper beats rock");
                    humanScore++;
                    roundResult.textContent = 'Player + 1 score';
                    break;
                case "scissor":
                    console.log("You lose! Scissor beats paper");
                    roundResult.textContent = 'Computer + 1 score';
                    computerScore++;
                    break;
                default:
                    console.log("It's draw!");
                    roundResult.textContent = 'Draw';        
            }
        }
        if (humanChoice == 'scissor') {
            switch(computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats scissor");
                    roundResult.textContent = 'Computer + 1 score';
                    computerScore++;
                    break;
                case "scissor":
                    console.log("It's draw!");
                    roundResult.textContent = 'Draw';
                    break;
                default:
                    console.log("You win! Scissor beats paper");
                    roundResult.textContent = 'Player + 1 score';
                    humanScore++;        
            }
        }
        if (humanScore == 5) {
            roundResult.textContent = 'Player win';
            humanScore = 0;
            computerChoice = 0;
            console.clear;
        }
        
        if (computerScore == 5) {
            roundResult.textContent = 'Computer win';
            humanScore = 0;
            computerChoice = 0;
            console.clear;
        }   
    }


    /*
    for (let round = 1; round<=5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }
    */
    /*
    if (humanScore > computerScore) {
        console.log("You win");
    } else if (humanScore < computerScore){
        console.log("You lose");
    } else {
        console.log("Draw");
    }
    */
 

//playGame();