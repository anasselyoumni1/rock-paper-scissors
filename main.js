
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let result = document.querySelector(".result");
let computercoutner = document.querySelector("#computercounter");
let playercounter = document.querySelector("#playercounter");
const winner = document.querySelector("#winner");

options = [
    'rock',
    'paper', 
    'scissors' 
]
let counter = 0;
let computer = 0;
let player = 0;
rock.addEventListener("click", function(){

    return playRound(options[0], computerPlay());
});
paper.addEventListener("click", function(){
    return playRound(options[1], computerPlay());
});
scissors.addEventListener("click", function(){
    return playRound(options[2], computerPlay());
});

function computerPlay (){ 
    random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        // score(0, 0);
        // result.style.color = "grey";
        return result.innerHTML = "Jullie hebben beide het zelfde";
    } 
    else if (computerSelection == options[0] && playerSelection == options[2] ||
               computerSelection == options[1] && playerSelection == options[0] ||
               computerSelection == options[2] && playerSelection == options[1]){
        computercounter.innerHTML = `${computer++}`;
        // score(computer++, 0);
        
    } 
    else {
        playercounter.innerHTML = `${counter++}`;
        score(0, player++);
    }
}

function score (computerScore, playerScore){
    if (computerScore == 5){ 
        winner.innerHTML = "Helaas de computer heeft gewonnen."
        disable();
    }else if (playerScore == 5){
        disable();
        winner.innerHTML = "Goed gedaan je hebt gewonnen."
    }
}

function disable(){
   let header =  document.querySelector(".header")
   let score =  document.querySelector(".score")
   let container =  document.querySelector(".container")
   let winner = document.querySelector(".winner");

   winner.style.display = "flex";
   header.style.display ="none";
   score.style.display = "none";
   container.style.display = "none";
}
