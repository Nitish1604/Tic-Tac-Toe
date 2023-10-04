let playerX = localStorage.getItem('playerX');
let playerO = localStorage.getItem('playerO');
let playerXScore = localStorage.getItem('playerXScore');
let playerOScore = localStorage.getItem('playerOScore');

const setScoreBoard = () => {
	document.querySelector('.scoreboard').innerHTML = 
	`
		<p class="score">${playerX} - ${playerXScore}</p>
		<p class="score">${playerO} - ${playerOScore}</p>
	`
}

setScoreBoard();

let turn = "playerX";
const setTurn = turn => {
	if(turn == "playerX") {
		document.querySelector('h1').innerHTML = 
		`
			TURN - ${playerX}(X)
		`
	}else {
		document.querySelector('h1').innerHTML = 
		`
			TURN - ${playerO}(O)
		`
	}
}
setTurn('playerX');

const checkWin = () => {
	let box1 = document.getElementById('box1').innerHTML;
	let box2 = document.getElementById('box2').innerHTML;
	let box3 = document.getElementById('box3').innerHTML;
	let box4 = document.getElementById('box4').innerHTML;
	let box5 = document.getElementById('box5').innerHTML;
	let box6 = document.getElementById('box6').innerHTML;
	let box7 = document.getElementById('box7').innerHTML;
	let box8 = document.getElementById('box8').innerHTML;
	let box9 = document.getElementById('box9').innerHTML;
	
	if(
		box1 == 'X' && box2 == 'X' && box3 == 'X'||
		box4 == 'X' && box5 == 'X' && box6 == 'X'||
		box7 == 'X' && box8 == 'X' && box9 == 'X'||
		box1 == 'X' && box5 == 'X' && box9 == 'X'||
		box3 == 'X' && box5 == 'X' && box7 == 'X'||
		box1 == 'X' && box4 == 'X' && box7 == 'X'||
		box2 == 'X' && box5 == 'X' && box8 == 'X'||
		box3 == 'X' && box6 == 'X' && box9 == 'X'
	){
		let playerXScore = localStorage.getItem('playerXScore');
		playerXScore = parseInt(playerXScore) + 1;
		localStorage.setItem('playerXScore', playerXScore);
		setScoreBoard();
		alert('Player X Wins!!');
	}
	
	else if(
		box1 == 'O' && box2 == 'O' && box3 == 'O'||
		box4 == 'O' && box5 == 'O' && box6 == 'O'||
		box7 == 'O' && box8 == 'O' && box9 == 'O'||
		box1 == 'O' && box5 == 'O' && box9 == 'O'||
		box3 == 'O' && box5 == 'O' && box7 == 'O'||
		box1 == 'O' && box4 == 'O' && box7 == 'O'||
		box2 == 'O' && box5 == 'O' && box8 == 'O'||
		box3 == 'O' && box6 == 'O' && box9 == 'O'
	) {
		let playerOScOre = localStorage.getItem('playerOScore');
		playerOScOre = parseInt(playerOScOre) + 1;
		localStorage.setItem('playerOScore', playerOScOre);
		setScoreBoard();
		alert('Player O Wins!!')
	}
	
	else if(
		box1 != "" && box2 != "" && box3 != "" &&
		box4 != "" && box5 != "" && box6 != "" &&
		box7 != "" && box8 != "" && box9 != "" 
	) {
		//swal('Match Draw');
		alert('Match Draw');
	}
	
}

const showXO = (boxid) => {
	let box = document.getElementById(boxid);
	
	if(turn == "playerX" && box.innerHTML == ""){
		box.innerHTML = 'X';
		turn = "playerO";
		setTurn(turn);
	} else if(turn == "playerO" && box.innerHTML == ""){
		box.innerHTML = 'O';
		turn = "playerX";
		setTurn(turn);
	}
}

const btnpressed = async (boxid) => {
	await showXO(boxid);
	checkWin();
}
