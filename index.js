// Random Numbers 1 & 2
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

// Change the dice image
document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Change the title to show winner
if (randomNumber1 === randomNumber2) {
	document.querySelector("h1").innerHTML = "<a class='refresh' onClick='window.location.reload()'>Draw.</a>";
} else if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "<a class='refresh' onClick='window.location.reload()'>🚩 Player 1 Wins!</a?";
} else {
		document.querySelector("h1").innerHTML = "<a class='refresh' onClick='window.location.reload()'>Player 2 Wins! 🚩</a>";
}
