function computerPlay () {
  let list = ["rock","paper","scissors"];
  let cpuDecision = list[Math.floor(Math.random() * list.length)]; 
  return cpuDecision;
}

let playRound = function(playerSelection,computerSelection) {
  switch (playerSelection) {
    case 'rock':
      if(computerSelection === 'paper') {
        return 'You lose';
      } else if (computerSelection === 'scissors') {
        return 'You win';
      } else {
        return 'Tie';
      }
      break; 
    case 'scissors':
      if(computerSelection === 'rock') {
        return 'You lose';
      } else if(computerSelection === 'paper') {
        return 'You win'; 
      } else {
        return 'Tie';
      }
      break;
    case 'paper':
      if(computerSelection === 'scissors') {
        return 'You lose';
      } else if(computerSelection === 'rock') {
        return 'You win';
      } else {
        return 'Tie';
      }
      break; 
  }
}

function cleanInput(string) {
  return string.split('').filter((item) => item !== ' ').join('').toLowerCase();
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  for(let i = 0; i < 5; i++) {
    let playerInput= window.prompt("Pick one of the following: rock, paper, scissors");
    let playerDecision = cleanInput(playerInput); 
    let computerDecision = computerPlay(); 

    let roundResult = playRound(playerDecision, computerDecision);

    if(roundResult === 'You lose') {
      computerScore++;
      console.log("You lose this round");
      console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`); 
    } else if(roundResult === 'You win') {
      playerScore++;
      console.log("You win this round");
      console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`); 
    } else if(roundResult === 'Tie') {
      console.log("It\`s a tie!"); 
      console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`); 
    }
  }

  if(playerScore > computerScore) {
    return 'You won the game!';
  } else if(playerScore < computerScore) {
    return 'Computer won the game!';
  } else {
    return 'It\'s a draw';
  }
}

console.log(game());











