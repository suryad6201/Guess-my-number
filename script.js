"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1; //Number between 1 and 20
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number is entered";
  } else if (guess === secretNumber) {
    //For correct Number
    displayMessage("🎰 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    score++;
    document.querySelector(".score").textContent = score;

    //For Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    //For failures
    if (score > 1) {
      if (guess > secretNumber) {
        //For High numbers
        displayMessage(
          guess <= secretNumber + 3 ? "🤏 Too close" : "📈  Too High"
        );
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        //For Low numbers
        displayMessage(
          guess >= secretNumber - 3 ? "🤏 Too close" : "📈  Too Low"
        );
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      displayMessage("Sorry, Better luck next time");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//For Restart
document.querySelector(".again").addEventListener("click", function () {
  score = document.querySelector(".score").textContent = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage("Start guessing....");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
