"use strict";


let formatString = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};


let getComputerChoice = function() {
    const options = new Array("Rock", "Paper", "Scissors");
    const choiceIdx = Math.floor(Math.random() * options.length);
    return options[choiceIdx];
};


let playRound = function(playerChoice, computerChoice) {
    let result;
    playerChoice = formatString(playerChoice);
    switch (playerChoice) {
        case "Rock":
            result = computerChoice == "Rock" ? "Tie" : computerChoice == "Scissors" ? "Win" : "Lose";
            break;
        case "Paper":
            result = computerChoice == "Paper" ? "Tie" : computerChoice == "Scissors" ? "Lose" : "Win";
            break;
        default:
            result = computerChoice == "Rock" ? "Lose" : computerChoice == "Scissors" ? "Tie" : "Win";
    }    
    return result
};


let playGame = function(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (let i = 0; i < rounds; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Chose one of: 'Rock', 'Paper' or 'Scissors'?");
        result = playRound(playerChoice, computerChoice);

        switch (result) {
            case "Win":
                console.log("You win!");
                playerScore ++;
                break;
            case "Lose":
                console.log("You lose!");
                computerScore ++;
                break;
            default:
                console.log("It's a tie.");
        };
    };

    console.log(`Player score: ${playerScore} - Computer score: ${computerScore}`);
    console.log(
        playerScore > computerScore 
        ? "You're the winner!" 
        : playerScore < computerScore 
        ? "You've lost!" 
        : "It's a tie!")
}


playGame(5);