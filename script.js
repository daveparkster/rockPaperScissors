let computerPlay = function () {
  let list = ["rock","paper","scissors"];
  let cpuDecision = list[Math.floor(Math.random() * list.length)]; 
  return cpuDecision;
}

function playRound(playerSelection,computerSelection) {
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

  console.log(playRound('paper','paper'));








