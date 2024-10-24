function getComputerChoice() {
    let number = Math.random();
    let choice = (number<0.3) ? 'rock' : 
        (number<0.6) ? 'paper' :
        'scissor';
    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("What\'s your choice?", "rock, paper or scissor");
    return humanChoice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let human = humanChoice.toLowerCase();
        if (human == 'rock') {
            switch(computerChoice) {
                case "rock":
                    console.log("It's draw!");
                    break;
                case "scissor":
                    console.log("You win! Rock beats scissor");
                    humanScore++;
                    break;
                default:
                    console.log("You lose! Paper beats rock");
                    computerScore++;        
            }
        }
        if (human == 'paper') {
            switch(computerChoice) {
                case "rock":
                    console.log("You win! Paper beats rock");
                    humanScore++;
                    break;
                case "scissor":
                    console.log("You lose! Scissor beats paper");
                    computerScore++;
                    break;
                default:
                    console.log("It's draw!");        
            }
        }
        if (human == 'scissor') {
            switch(computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats scissor");
                    computerScore++;
                    break;
                case "scissor":
                    console.log("It's draw!");
                    break;
                default:
                    console.log("You win! Scissor beats paper");
                    humanScore++;        
            }
        }
    }
    for (let round = 1; round<=5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win");
    } else if (humanScore < computerScore){
        console.log("You lose");
    } else {
        console.log("Draw");
    }
    
} 

playGame();