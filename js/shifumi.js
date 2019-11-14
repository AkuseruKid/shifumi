var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rockButtonElt = document.getElementById("r");
const paperButtonElt = document.getElementById("p");
const scissorsButtonElt = document.getElementById("s");

function getComputerChoice(){
	const choices =["r","p","s"];
	const randomNumber = Math.floor(Math.random() *3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if(letter === "r"){
		return "Rock";
	} if(letter === "p"){
		return "Paper";
	} if(letter === "s"){
		return "Scissors";
	}
}

function win(userChoice, computerChoice){
	const UserWord = "you".fontcolor("#3FE619").fontsize(4).sup();
	const CompWord = "computer".fontcolor("red").fontsize(4).sup();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertToWord(userChoice)+UserWord + " beats " + convertToWord(computerChoice)+CompWord + ". You win!🔥";
	userChoice_div.classList.add("green-glow");
	setTimeout(function(){userChoice_div.classList.remove("green-glow")},300);
}

function lose(userChoice, computerChoice){
	const UserWord = "you".fontcolor("#3FE619").fontsize(4).sup();
	const CompWord = "computer".fontcolor("red").fontsize(4).sup();
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertToWord(userChoice)+UserWord + " loses to " + convertToWord(computerChoice)+CompWord + ". You lose!😭";
	userChoice_div.classList.add("red-glow");
	setTimeout(function(){userChoice_div.classList.remove("red-glow")},300);
}


function draw(userChoice, computerChoice){
	const UserWord = "you".fontcolor("#3FE619").fontsize(4).sup();
	const CompWord = "computer".fontcolor("red").fontsize(4).sup();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = convertToWord(userChoice)+UserWord + " equals " + convertToWord(computerChoice)+CompWord + ". Draw !💤";
	userChoice_div.classList.add("gray-glow");
	setTimeout(function(){userChoice_div.classList.remove("gray-glow")},300);
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice){
		case"rs":
		case"pr":
		case"sp":
			win(userChoice, computerChoice);
			break;
		case"rp":
		case"ps":
		case"sr":
			lose(userChoice, computerChoice);
			break;
		case"rr":
		case"pp":
		case"ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main(){
	rockButtonElt.addEventListener("click", function(){
	game("r");
	})

	paperButtonElt.addEventListener("click", function(){
	game("p");
	})

	scissorsButtonElt.addEventListener("click", function(){
	game("s");
	})
}

main();