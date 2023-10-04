let playerX = localStorage.getItem("playerX");
let playerO = localStorage.getItem("playerO");
let playerXScore = localStorage.getItem("playerXScore");
let playerOScore = localStorage.getItem("playerOScore");

const scoreBoard = () => {
  let playerx = localStorage.getItem("playerX");
  let playero = localStorage.getItem("playerO");
  let playerxScore = localStorage.getItem("playerXScore");
  let playeroScore = localStorage.getItem("playerOScore");
  document.querySelector(".scoreboard").innerHTML = `
  <p class="score" id="p1">${playerx} : ${playerxScore}</p> 
  <p class="score" id="p2">${playero} : ${playeroScore}</p>
  `;
};

scoreBoard();

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
		scoreBoard();
		swal('Player X Wins!!', 'Game Over, it will be reset in 5 seconds', "success");
    setTimeout(reset, 5000);
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
		let playerOScore = localStorage.getItem('playerOScore');
		playerOScore = parseInt(playerOScore) + 1;
		localStorage.setItem('playerOScore', playerOScore);
		scoreBoard();
		swal('Player O Wins!!', 'Game Over, it will be reset in 5 seconds', "success");
    setTimeout(reset, 5000);
	}
	
	else if(
		box1 != "" && box2 != "" && box3 != "" &&
		box4 != "" && box5 != "" && box6 != "" &&
		box7 != "" && box8 != "" && box9 != "" 
	) {
		swal('Match Draw', 'Game Over, it will be reset in 5 seconds', 'success');
		// alert('Match Draw');
    setTimeout(reset, 5000);
	}
	
}

const showXO = (boxid) => {
	let box = document.getElementById(boxid);
	
	if(turn == "playerX" && box.innerHTML == ""){
		box.innerHTML = 'X';
    box.style.color = 'blue';
		turn = "playerO";
		setTurn(turn);
	} else if(turn == "playerO" && box.innerHTML == ""){
		box.innerHTML = 'O';
    box.style.color = 'red';
		turn = "playerX";
		setTurn(turn);
	}
}

const btnpressed = async (boxid) => {
	await showXO(boxid);
	checkWin();
}

const quit = () => {
  if(turn == 'playerX') alert(`${playerO} Wins!!`)
  else alert(`${playerX} Wins!!`)
  window.location="index.html";
}

const reset = () => {
  window.location="gameboard.html";
}
