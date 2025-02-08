function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 300);
    if (cpuChoice <= 100) {
        return "Rock";
    } else if (cpuChoice <= 200) {
        return "Paper";
    } else if (cpuChoice <= 300) {
        return "Scissors";
    }
}

function playRPS(playerSelection, cpuSelection) {
    let playerSel = playerSelection.toLowerCase();
    let cpuSel = cpuSelection.toLowerCase();

    if (playerSel === cpuSel) {
        return "T";
        //return `It's a tie, both players chose ${playerSel}.`;
    } else if (playerSel === "rock" && cpuSel === "paper" 
            || playerSel === "scissors" && cpuSel === "rock" 
            || playerSel === "paper" && cpuSel === "scissors") {
        return "L";
        //return `You lose, ${cpuSel} beats ${playerSel}.`;
    } else {
        return "W";
        //return `You win, ${playerSel} beats ${cpuSel}.`;
    }
}

function playGame(userSelection) {

    /*for (let i = 1; i <= 5; i++){
        let userSelection = prompt("Let's play!", "Rock, Paper, Scissors");
        let result = playRPS(userSelection, getComputerChoice());
        if (result === "T") {
            tieCount++;
        } else if (result === "L") {
            lossCount++;
        } else if (result === "W") {
            winCount++;
        }
        console.log(result);
    }*/
    
    let result = playRPS(userSelection, getComputerChoice());

    if (result === "T") {
        tieCount++;
    } else if (result === "L") {
        lossCount++;
    } else if (result === "W") {
        winCount++;
    }
    const results = document.querySelector("#results");

    const roundResult = document.createElement("p");
    roundResult.textContent = result;
    results.appendChild(roundResult);

    const final = document.createElement("h3");

    if (winCount == 5) {
        final.textContent = `You won the series! You won ${winCount} rounds, tied ${tieCount}, and lost ${lossCount}.`;
    } else if (lossCount == 5) {
        final.textContent = `You lost the series! You lost ${lossCount} rounds, tied ${tieCount}, and won ${winCount}.`;
    } /*else if (winCount == lossCount) {
        alert(`Tie game! You tied ${tieCount} rounds, won ${winCount}, and lost ${lossCount}.`)
    }*/

    results.appendChild(final);
}

let tieCount = 0
, lossCount = 0
, winCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});