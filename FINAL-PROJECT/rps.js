var weapons = ["ROCK", "PAPER", "SCISSOR", "ROCK", "PAPER", "SCISSOR"];

function startGame(element) {
  // USER CHOOSE ROCK
  if (element === "ROCK") {
    document.getElementById("player-one").innerHTML =
      '<img src="images/rock.png" style="width: 150px; height: 100px" />';
    var player2 = weapons[Math.round(Math.random() * 5)];
    if (player2 === "ROCK") {
      document.getElementById("player-two").innerHTML =
        '<img src="images/rock.png" style="width: 150px; height: 100px" />';
      document.getElementById("message").innerText = "IT'S A TIE";
    }
    if (player2 === "PAPER") {
      document.getElementById("player-two").innerHTML =
        '<img src="images/paper.png" style="width: 150px; height: 100px" />';
      document.getElementById("message").innerText = "COMPUTER WIN";
    }
    if (player2 === "SCISSOR") {
      document.getElementById("player-two").innerHTML =
        '<img src="images/scissor.png" style="width: 150px; height: 100px" />';
      document.getElementById("message").innerText = "YOU WIN";
    }
  }
  // USER CHOOSE PAPER

  if (element === "PAPER") {
    document.getElementById("player-one").innerHTML =
      '<img src="images/paper.png" style="width: 150px; height: 100px" />';
    var player2 = weapons[Math.round(Math.random() * 5)];
    if (player2 === "ROCK") {
      document.getElementById("player-two").innerHTML =
        '<img src="images/rock.png" style="width: 150px; height: 100px" />';
      document.getElementById("message").innerText = "YOU WIN";
    }
    if (player2 === "PAPER") {
      document.getElementById("player-two").innerHTML =
        '<img src="images/paper.png" style="width: 150px; height: 100px" />';
      document.getElementById("message").innerText = "IT'S A TIE";
    }
    if (player2 === "SCISSOR") {
      document.getElementById("player-two").innerHTML =
        '<img src="images/scissor.png" style="width: 150px; height: 100px" />';
      document.getElementById("message").innerText = "COMPUTER WIN";
    }
  }
  //USER CHOOSE SCISSOR

  if (element === "SCISSOR") {
    document.getElementById("player-one").innerHTML =
      '<img src="images/scissor.png" style="width: 150px; height: 100px" />';
    var player2 = (document.getElementById("player-two").innerText =
      weapons[Math.round(Math.random() * 5)]);
    if (player2 === "ROCK") {
      document.getElementById("player-two").innerHTML =
        '<img src="images/rock.png" style="width: 150px; height: 100px" />';
      document.getElementById("message").innerText = "COMPUTER WIN";
    }
    if (player2 === "PAPER") {
      document.getElementById("player-two").innerHTML =
        '<img src="images/paper.png" style="width: 150px; height: 100px" />';
      document.getElementById("message").innerText = "YOU WIN";
    }
    if (player2 === "SCISSOR") {
      document.getElementById("player-two").innerHTML =
        '<img src="images/scissor.png" style="width: 150px; height: 100px" />';
      document.getElementById("message").innerText = "IT'S A TIE";
    }
  }
}

function restartGame() {
  document.getElementsByClassName("player").innerText = "";
  return startGame();
}
