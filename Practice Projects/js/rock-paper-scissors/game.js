
// Rock beats scissors, scissors beat paper, and paper beats rock.

// pseudocode

// create a function getcomputerChoice
function getcomputerChoice() {
  // getcomputerChoice will randomly return "rock", "paper", or "scissors" when envoked
  // we know math.random() returns value from 0 to 1, 0 included 1 excluded.
  let region = Math.random() * 100;
  // so we can [math.random()] * 100 will return between 0 to 100. we can partition this in 3 regions
  // and return outputs rock , paper, scissors accordingly.
  if (region <= 33) {
    return "rock";
  }
  else if (region >= 33 && region <= 66) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

// create a function gethumanChoice
function gethumanChoice() {
  // gethumanChoice will take input from the user, stores it in a variable and returns it
  let choice = prompt("rock, paper, scissors?");
  return choice;
}

// create two int variables humanScore and computerScore. Declare globally. The will keep track of players and computers score.
// set their values to 0
let humanScore = 0;
let computerScore = 0;

// create a function playRound . This takes two parameters humanChoice and computerChoice.
// this function compares humanChoice with computerChoice and prints output such as : "paper beats rock!"
// and increments the score of human or computer. whoever wins the round.
function playRound(humanChoice, computerChoice) {
  // console.log(`human : ${humanChoice} ############# computer : ${computerChoice}`);
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("you win this round");
    ++humanScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("you win this round");
    ++humanScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("you win this round");
    ++humanScore;
  } else if (humanChoice === computerChoice) {
    alert("its a tie");
  } else {
    alert("you lost this round");
    ++computerScore;
  }
  const output = document.querySelector("div");
  const result = document.createElement("p");
  result.textContent = `human : ${humanChoice} ############# computer : ${computerChoice}\n` +
                      `humanScore : ${humanScore} ############# computerScore : ${computerScore}`;
  if (humanScore === 5) {
    result.textContent = result.textContent + "\nYOU WON";
  } else if (computerScore === 5){
    result.textContent = result.textContent + "\nYOU LOST";
  }
  output.appendChild(result);

}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {playRound(button.id, getcomputerChoice())});
});



