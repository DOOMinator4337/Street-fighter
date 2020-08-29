var c1 = document.getElementById("character-1");
var c1x = 50;
var c2 = document.getElementById("character-2");
var c2x = 600;
var c1pn = false;
var c2pn = false;
var c1Health = 10;
var c2Health = 10;

document.onkeydown = buttonPressed;

function buttonPressed(e) {
	e = e || window;
	if (e.keyCode == "69") {
		c1.classList.add("c1punch");
		setTimeout(function () {
			c1.classList.remove("c1punch");
		}, 500);
	} else if (e.keyCode == "87") {
		c1.classList.add("jump");
		setTimeout(function () {
			c1.classList.remove("jump");
		}, 550);
	} else if (e.keyCode == "81") {
		c1.classList.add("c1kick");
		setTimeout(function () {
			c1.classList.remove("c1kick");
		}, 600);
	} else if (e.keyCode == "68") {
		c1x = c1x + 10;
		document.getElementById("character-1").style.left = c1x + "px";
	} else if (e.keyCode == "65") {
		c1x = c1x - 10;
		document.getElementById("character-1").style.left = c1x + "px";
	} else if (e.keyCode == "73") {
		c2.classList.add("jump");
		setTimeout(function () {
			c2.classList.remove("jump");
		}, 550);
	} else if (e.keyCode == "74") {
		c2x = c2x - 10;
		document.getElementById("character-2").style.left = c2x + "px";
	} else if (e.keyCode == "76") {
		c2x = c2x + 10;
		document.getElementById("character-2").style.left = c2x + "px";
	} else if (e.keyCode == "85") {
		c2.classList.add("c2kick");
		setTimeout(function () {
			c2.classList.remove("c2kick");
		}, 600);
	}
}

function checkPunchP1() {
	if (c1x < c2x + 40 || c1x > c2x) {
		c1pn = true;
	}
}

function checkPunchP2() {
	if (c1x < c2x + 40 || c1x > c2x) {
		c2pn = true;
	}
}

function subtractHealth() {
	if (c1pn == true) {
		c1Health = c1Health - 1;
	} else if (c2pn == true) {
		c2Health = c2Health - 1;
	}
}
