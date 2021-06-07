// Player 1 Dice or Left Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";  // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

// Player 2 Dice or Right Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";  // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// Display Winner, Loser or Draw

// if Player 1 Wins
if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
// if Player 2 Wins
else if(randomNumber1 < randomNumber2){
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
// That's a Draw
else{
document.querySelector("h1").innerHTML = "Draw!";
}
