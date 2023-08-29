
function getComputerChoice() {
	let n= Math.floor(Math.random() * 3 + 1);
	console.log(n);
	if (n===1){
		return ("Rock");
	} else if(n===2) {
		return ("Paper");
	} else {
		return ("Scissors")
	}
}

function playRound(playerSelection, computerSelection) {
	let p = playerSelection.toLowerCase();
	if (p==="rock") {
		if (computerSelection==="Rock") {
			return ("It's a tie! Rock vs Rock");
		} else if (computerSelection==="Paper") {
			return ("You Lose! Paper beats Rock");
		} else if (computerSelection==="Scissors") {
			return ("You Win! Rock beats Scissors");
		}
	} else if (p==="paper") {
		if (computerSelection==="Rock") {
			return ("You Win! Paper beats Rock");
		} else if (computerSelection==="Paper") {
			return ("It's a tie! Paper vs Paper");
		} else if (computerSelection==="Scissors") {
			return ("You Lose! Scissors beat Paper");
		}
	} else if (p==="scissors"){
		if (computerSelection==="Rock") {
			return ("You Lose! Rock beat Scissors");
		} else if (computerSelection==="Paper") {
			return ("You Win! Scissors beats Paper");
		} else if (computerSelection==="Scissors") {
			return ("It's a tie! Scissors vs Scissors");
		}
	} else {
		return ("Please enter a valid entry!");
	}
}

function game(){
	for (let i=1; i<=5; i++){
		const playerSelection = prompt("Please enter, Rock, Paper or Scissors!");
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
	}
}

//game();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
	
	const container = document.querySelector('#container');
	const content = document.createElement('div');
	content.textContent = playRound(button.id, computerSelection);
	content.setAttribute('style','color:red;');
	container.appendChild(content);
	
	alert(playRound(button.id, computerSelection));
  });
});


