var weapons = ["ROCK", "PAPER", "SCISSOR", "ROCK", "PAPER", "SCISSOR"];
var userWins = [];
var compWins = [];

function startGame(element) {
  // USER CHOOSE ROCK
  if (element === "ROCK") {
    document.getElementById("player-one").innerHTML =
      '<img src="assets/rock.png" style="width: 150px; height: 100px" />';
    document.getElementById("player-two").innerText =
      weapons[Math.round(Math.random() * 5)];

    checkForWinner(element, document.getElementById("player-two").innerText);
    imageConverter();
  }

  // USER CHOOSE PAPER

  if (element === "PAPER") {
    document.getElementById("player-one").innerHTML =
      '<img src="assets/paper.png" style="width: 150px; height: 100px" />';
    document.getElementById("player-two").innerText =
      weapons[Math.round(Math.random() * 5)];

    checkForWinner(element, document.getElementById("player-two").innerText);
    imageConverter();
  }

  //USER CHOOSE SCISSOR

  if (element === "SCISSOR") {
    document.getElementById("player-one").innerHTML =
      '<img src="assets/scissor.png" style="width: 150px; height: 100px" />';
    document.getElementById("player-two").innerText =
      weapons[Math.round(Math.random() * 5)];

    checkForWinner(element, document.getElementById("player-two").innerText);
    imageConverter();
  }

  document.getElementById("player-score").innerText = userWins.length;
  document.getElementById("comp-score").innerText = compWins.length;
}

function imageConverter() {
  if (document.getElementById("player-two").innerText === "ROCK") {
    document.getElementById("player-two").innerHTML =
      '<img src="assets/rock.png" style="width: 150px; height: 100px" />';
  }
  if (document.getElementById("player-two").innerText === "PAPER") {
    document.getElementById("player-two").innerHTML =
      '<img src="assets/paper.png" style="width: 150px; height: 100px" />';
  }
  if (document.getElementById("player-two").innerText === "SCISSOR") {
    document.getElementById("player-two").innerHTML =
      '<img src="assets/scissor.png" style="width: 150px; height: 100px" />';
  }
}

function setMessage(text) {
  document.getElementById("message").innerText = text;
}

function checkForWinner(elm1, elm2) {
  if (
    (elm1 === "ROCK" && elm2 === "SCISSOR") ||
    (elm1 === "PAPER" && elm2 === "ROCK") ||
    (elm1 === "SCISSOR" && elm2 === "PAPER")
  ) {
    setMessage("YOU WIN!");
    userWins.push("!");
  }
  if (
    (elm2 === "ROCK" && elm1 === "SCISSOR") ||
    (elm2 === "PAPER" && elm1 === "ROCK") ||
    (elm2 === "SCISSOR" && elm1 === "PAPER")
  ) {
    setMessage("COMPUTER WIN!");
    compWins.push("!");
  }
  if (
    (elm1 === "ROCK" && elm2 === "ROCK") ||
    (elm1 === "PAPER" && elm2 === "PAPER") ||
    (elm1 === "SCISSOR" && elm2 === "SCISSOR")
  ) {
    setMessage("IT'S A TIE");
  }

  return compWins, userWins;
}
