let humanScore = 0;
let computerScore = 0;
function getComputerChoice()
{
    let num = Math.floor(Math.random() * 3);
    if(num == 0)
        return "rock";
    else if(num == 1)
        return "paper";
    else if (num == 2)
        return "scissors";
}


function getHumanChoice()
{
    let choice = prompt("Choice between 'rock' or 'paper' or 'scissors'");
    return choice;
}

function playRound(humanChoice,computerChoice)
{
    humanChoice = humanChoice.toLowerCase().trim();
    if( humanChoice == computerChoice)
        console.log("Draw");
    else if ( (humanChoice == "rock" && computerChoice == "scissors") ||
              (humanChoice == "scissors" && computerChoice == "paper") ||
              (humanChoice == "paper" && computerChoice == "rock")  )
    {
        console.log("Win");
        humanScore += 1;
    }
    else
    {
        console.log("Lose");
        computerScore += 1;
    }
}

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log(`Round ${i+1}: Human ${humanScore} - Computer ${computerScore}`);
    }
    if(humanScore > computerScore)
        console.log("the winner is human");
    else if (humanScore < computerScore)
        console.log("the winner is computer");
    else
        console.log("draw between human and computer");
}
playGame();
