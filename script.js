function computerPlay () {
  let list = ["Rock","Paper","Scissors"];
  let cpuDecision = list[Math.floor(Math.random() * list.length)]; 
  return cpuDecision;
}

let playRound = function(playerSelection,computerSelection) {
  switch (playerSelection) {
    case 'Rock':
      if(computerSelection === 'Paper') {
        return 'You lose this round';
      } else if (computerSelection === 'Scissors') {
        return 'You win this round';
      } else {
        return 'Tie';
      }
      break; 
    case 'Scissors':
      if(computerSelection === 'Rock') {
        return 'You lose this round';
      } else if(computerSelection === 'Paper') {
        return 'You win this round'; 
      } else {
        return 'Tie';
      }
      break;
    case 'Paper':
      if(computerSelection === 'Scissors') {
        return 'You lose this round';
      } else if(computerSelection === 'Rock') {
        return 'You win this round';
      } else {
        return 'Tie';
      }
      break; 
  }
}

/* DOM */ 
const BODY = document.body; 

for(let i = 0; i <= 2; i++) {
  let BUTTON = document.createElement("button");
  BODY.append(BUTTON); 
}

const BUTTONS = document.querySelectorAll('button');
BUTTONS[0].textContent = "Rock";
BUTTONS[1].textContent = "Paper";
BUTTONS[2].textContent = "Scissors"; 


function chooseOne(element) {
  let userChoice = `${element.innerText}`; //string userChoice (rock, paper, scissors)
  let computerChoice = computerPlay(); // string computerChoice (rock, paper, scissors)
  CHOICE.innerText = `Player Choice: ${userChoice} || Computer Choice: ${computerChoice}`; 

  let resultRound = playRound(userChoice, computerChoice); //result You Lose, You Win, etc
  RESULT.innerText = `${resultRound}`;

  let scoreTally = changeScore(resultRound); 

  if(scoreTally === 'playerPlus') {
    return 1; 
  } else if(scoreTally === 'computerPlus') {
    return 2; 
  } else if(scoreTally === 'no increase') {
    return 3; 
  }
}

/*From line 48, I convert the value of the BUTTONS variable to an array*/
let listButtons = Array.from(BUTTONS);

/*keeping track of score */
let playerScore = 0;
let computerScore = 0; 

/*Event listener*/
listButtons.forEach(element => {
  element.addEventListener('click', function() {
    let score = chooseOne(element); 

    if(score === 1) {
      playerScore++; 
    } else if(score === 2) {
      computerScore++; 
    } else if(score === 3) { 
    }

    SCORE.textContent = `Player Score: ${playerScore} || Computer Score: ${computerScore}`; //keeps track

    if(playerScore === 5 && computerScore === 5) {
      GAME.textContent = 'THE OVERALL GAME IS A TIE!'; 
      alert('Do you want to play again?'); 
    } else if(playerScore === 5 || computerScore === 5) {
      if(playerScore === 5) {
        GAME.textContent = 'PLAYER WINS'; 
        alert('Do you want to play again?');
      } else {
        GAME.textContent = 'COMPUTER WINS';
        alert('Do you want to play again?'); 
      }
    }
  }); 
}); 


function changeScore(string) {
  if(string === 'You win this round') {
    return 'playerPlus';
  } else if(string === 'You lose this round') {
    return 'computerPlus';
  } else {
    return 'no increase'; 
  }
}

// Add divs through DOM
const CHOICE = document.createElement('div');
BODY.append(CHOICE);

const RESULT = document.createElement('div');
BODY.appendChild(RESULT);

const SCORE = document.createElement('div');
BODY.appendChild(SCORE);

const GAME = document.createElement('div');
BODY.appendChild(GAME); 



