// Generating 1 to 6 random numbers for player1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// images/dice1.png to images/dice6.png for player1
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
// Selecting and setting the dice image 
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


// Generating 1 to 6 random numbers for player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// images/dice1.png to images/dice6.png for player1
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// Selecting and setting the dice image 
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);  



// if player1 wins:
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";
}
// if player2 wins:
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}