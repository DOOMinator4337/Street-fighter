var c1 = document.getElementById("character-1");
var c1x = 50;
var c2 = document.getElementById("character-2");
var c2x = 600;
var c1pn = false;
var c2pn = false;
var c1Health = document.getElementById("p1-health");
var c2Health = document.getElementById("p2-health");
var c1jumping = false;
var c2jumping = false;
var c1counter = 10;
var c2counter = 10;
var c1Lock = false;
var c2Lock = false;
var c2ki = false;
var c1ki = false;
var winningMessage = document.getElementById("winning-message");
var message;
var gameOn = true;

c2Health.textContent = c2counter;
c1Health.textContent = c1counter;
document.onkeydown = buttonPressed;

function buttonPressed(e) {
	e = e || window;
	if (e.keyCode == "69" && c1Lock == false) {
		c1.classList.add("c1punch");
		c1Lock = true;
		checkPunchP1();
		subtractHealth();
		checkForWinner();
		setTimeout(function () {
			c1.classList.remove("c1punch");
			c1pn = false;
			c1Lock = false;
		}, 500);
	} else if (e.keyCode == "87") {
		c1.classList.add("jump");
		setTimeout(function () {
			c1.classList.remove("jump");
		}, 550);
	} else if (e.keyCode == "81" && c1Lock == false) {
		c1.classList.add("c1kick");
		c1Lock = true;
		checkKickP1();
		subtractHealth();
		checkForWinner();
		setTimeout(function () {
			c1.classList.remove("c1kick");
			c1Lock = false;
			c1ki = false;
		}, 900);
	} else if (e.keyCode == "68") {
		c1x = c1x + 10;
		document.getElementById("character-1").style.left = c1x + "px";
	} else if (e.keyCode == "65") {
		c1x = c1x - 10;
		document.getElementById("character-1").style.left = c1x + "px";
	} else if (e.keyCode == "73") {
		c2.classList.add("jump");
		c2jumping = true;
		setTimeout(function () {
			c2.classList.remove("jump");
			c2jumping = false;
		}, 550);
	} else if (e.keyCode == "74") {
		c2x = c2x - 10;
		document.getElementById("character-2").style.left = c2x + "px";
	} else if (e.keyCode == "76") {
		c2x = c2x + 10;
		document.getElementById("character-2").style.left = c2x + "px";
	} else if (e.keyCode == "85" && c2Lock == false) {
		c2.classList.add("c2punch");
		c2Lock = true;
		checkPunchP2();
		subtractHealth();
		setTimeout(function () {
			c2.classList.remove("c2punch");
			c2pn = false;
			c2Lock = false;
		}, 600);
	} else if (e.keyCode == "79" && c2Lock == false) {
		c2.classList.add("c2kick");
		checkKickP2();
		subtractHealth();
		c2Lock = true;
		setTimeout(function () {
			c2.classList.remove("c2kick");
			c2Lock = false;
		}, 600);
	}
}

function checkPunchP1() {
	if (c1x > c2x - 50 && c1x < c2x && c2jumping == false) {
		c1pn = true;
		console.log("punched");
	}
}

function checkPunchP2() {
	if (c1x > c2x - 50 && c1x < c2x && c1jumping == false) {
		c2pn = true;
		console.log("punched");
	}
}

function checkKickP1() {
	if (c1x > c2x - 40 && c1x < c2x && c1jumping == false) {
		c1ki = true;
	}
}

function checkKickP2() {
	if (c1x > c2x - 40 && c1x < c2x && c1jumping == false) {
		c2ki = true;
	}
}

function subtractHealth() {
	if (c1pn == true) {
		c2counter = c2counter - 1;
		c2Health.textContent = c2counter;
	} else if (c2pn == true && c1counter > 0) {
		c1counter = c1counter - 1;
		console.log("oh ya");
		c1Health.textContent = c1counter;
	} else if (c1ki == true && c1counter > 1) {
		c2counter = c2counter - 2;
		c2Health.textContent = c2counter;
	} else if (c2ki == true && c1counter > 1) {
		c1counter = c1counter - 2;
		c1Health.textContent = c1counter;
	} else if (c2ki == true && c1counter == 1) {
		c1counter = c1counter - 1;
		c1Health.textContent = c1counter;
	} else if (c1ki == true && c1counter == 1) {
		c2counter = c2counter - 1;
		c1Health.textContent = c2counter;
	}
}

function checkForWinner() {
	if (c1counter == 0) {
		message = "Congratulations player 2 you win";
		gameOn = false;
		console.log(gameOn);
	} else if (c2counter == 0) {
		message = "Congratulations player 1 you win";
		winningMessage.textContent = message;
		gameOn = false;
		console.log(gameOn);
	}
}
