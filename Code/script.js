localStorage.clear();

const startGame = () => {
  if (
    document.getElementById("playerx").value === "" ||
    document.getElementById("playero").value === ""
  ) {
    alert("Player name can't be empty");
  } else if (
    document.getElementById("playerx").value ===
    document.getElementById("playero").value
  ) {
    alert("Player names can't be same");
  } else {
    localStorage.setItem("playerX", document.getElementById("playerx").value);
    localStorage.setItem("playerO", document.getElementById("playero").value);
    localStorage.setItem("playerXScore", 0);
    localStorage.setItem("playerOScore", 0);
    window.location = "gameboard.html";
  }
};
