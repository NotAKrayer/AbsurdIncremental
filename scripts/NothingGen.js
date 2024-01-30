var gen1cost = new Decimal("10.0");
var gen1 = new Decimal("0.0");
var gen1val = new Decimal("0.0");
var gen1x = new Decimal("1.0");

var gen2cost = new Decimal("100.0");
var gen2 = new Decimal("0.0");
var gen2val = new Decimal("0.0");
var gen2x = new Decimal("1.0");
var gen1get = new Decimal("1.0");
var gen2vis = 0

function BGButtonTest() {
  if (new Decimal(Nothing).gte(gen1cost)) {
    const gen1bg = document.getElementById("gen1bg");
    gen1bg.style.background = "#43c443";
    gen1bg.style.cursor = "pointer";
  } else if (new Decimal(Nothing).lt(gen1cost)) {
    const gen1bg = document.getElementById("gen1bg");
    gen1bg.style.background = "transparent";
    gen1bg.style.cursor = "default";
  }
}

function BGButtonTest2() {
  if (new Decimal(Nothing).gte(gen2cost)) {
    const gen2bg = document.getElementById("gen2bg");
    gen2bg.style.background = "#43c443";
    gen2bg.style.cursor = "pointer";
  } else if (new Decimal(Nothing).lt(gen2cost)) {
    const gen2bg = document.getElementById("gen2bg");
    gen2bg.style.background = "transparent";
    gen2bg.style.cursor = "default";
  }
}

function NothingGet() {
  Nothing = Decimal.add(Nothing, nget);
  document.getElementById("Nothing").innerHTML = new Decimal(Nothing).toPrecision(3);
}

setInterval("BGButtonTest()", 100);
setInterval("NothingGet()", 1000);

function gen1Buy() {
  if (Nothing.gte(gen1cost)) {
    gen1 = Decimal.add(gen1, "1");
    gen1val = Decimal.add(gen1val, "1");
    Nothing = Decimal.minus(Nothing, gen1cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen1").innerHTML = gen1.toPrecision(3);
	document.getElementById("gen1cost").innerHTML = new Decimal(gen1cost).toPrecision(3);
    document.getElementById("gen1val").innerHTML = gen1val.toPrecision(3);
	const gen2bg = document.getElementById("gen2bg");
    gen2bg.style.display = "block";
	gen2vis = 1
  }
}

function gen2Buy() {
  if (Nothing.gte(gen2cost)) {
    nget = Decimal.add(nget, "1");
    gen2 = Decimal.add(gen2, "1");
    gen2val = Decimal.add(gen2val, "1");
    Nothing = Decimal.minus(Nothing, gen2cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen2").innerHTML = gen2.toPrecision(3);
	document.getElementById("gen2cost").innerHTML = new Decimal(gen2cost).toPrecision(3);
    document.getElementById("gen2val").innerHTML = gen2val.toPrecision(3);
  }
}


function newGen1() {
  if (new Decimal(gen1).gte(10.0)) {
    gen1x = Decimal.mul(gen1x, "2");
    gen1cost = Decimal.mul(gen1cost, "100");
    gen1 = "0.0";
    nget = Decimal.mul(nget, gen1x);
	document.getElementById("gen1cost").innerHTML = gen1cost.toPrecision(3);
    document.getElementById("gen1x").innerHTML = gen1x.toPrecision(3);
    document.getElementById("gen1").innerHTML = new Decimal(gen1).toPrecision(3);
    document.getElementById("gen1val").innerHTML = gen1val.toPrecision(3);
    const gen1bg = document.getElementById("gen1bg");
    gen1bg.style.background = "transparent";
    gen1bg.style.cursor = "default";
  }
}

function newGen2() {
  if (new Decimal(gen2).gte(10.0)) {
    gen2x = Decimal.mul(gen2x, "2");
    gen2cost = Decimal.mul(gen2cost, "100");
    gen2 = "0.0";
    nget = Decimal.mul(nget, gen2x);
	document.getElementById("gen2cost").innerHTML = gen2cost.toPrecision(3);
    document.getElementById("gen2x").innerHTML = gen2x.toPrecision(3);
    document.getElementById("gen2").innerHTML = new Decimal(gen2).toPrecision(3);
    document.getElementById("gen2val").innerHTML = gen2val.toPrecision(3);
    const gen2bg = document.getElementById("gen2bg");
    gen2bg.style.background = "transparent";
    gen2bg.style.cursor = "default";
  }
}

function gennget() {
	nget = Decimal.mul(gen1val, gen1x);
	gen1get = Decimal.mul(gen2val, gen2x);
}

function gen2nget() {
	gen1val = Decimal.add(gen1val, gen1get);
	document.getElementById("gen1val").innerHTML = gen1val.toPrecision(3);
}

setInterval("gennget()", 100);
setInterval("BGButtonTest2()", 100);
setInterval("gen2nget()", 1000);
setInterval("newGen1()", 100);
setInterval("newGen2()", 100);


function GameSave() {
	var saveGame = {
		nothing: Nothing,
		nget: nget,
		gen1: gen1,
		gen1val: gen1val,
		gen1x: gen1x,
		gen1cost: gen1cost,
		gen2vis: gen2vis,
		gen2: gen2,
		gen2val: gen2val,
		gen2x: gen2x,
		gen2cost: gen2cost,
		gen1get: gen1get
	};
	localStorage.setItem("saveGame", JSON.stringify(saveGame));
}

function lkGame() {
	var savedGame = JSON.parse(localStorage.getItem("saveGame"));
	if (typeof savedGame.nothing !== "undefined") Nothing = savedGame.nothing;	
	if (typeof savedGame.nget !== "undefined") nget = savedGame.nget;	
	if (typeof savedGame.gen1 !== "undefined") gen1 = savedGame.gen1;	 
	if (typeof savedGame.gen1val !== "undefined") gen1val = savedGame.gen1val;	
	if (typeof savedGame.gen1x !== "undefined") gen1x = savedGame.gen1x;	
	if (typeof savedGame.gen1cost !== "undefined") gen1cost = savedGame.gen1cost;	
	if (typeof savedGame.gen2vis !== "undefined") gen2vis = savedGame.gen2vis;	
	if (typeof savedGame.gen2 !== "undefined") gen2 = savedGame.gen2;	 
	if (typeof savedGame.gen2val !== "undefined") gen2val = savedGame.gen2val;	
	if (typeof savedGame.gen2x !== "undefined") gen2x = savedGame.gen2x;	
	if (typeof savedGame.gen2cost !== "undefined") gen2cost = savedGame.gen2cost;	
	if (typeof savedGame.gen1get !== "undefined") gen1get = savedGame.gen1get;
	if (gen2vis > 0) {
		gen2bg.style.display = "block";
	}
}

function updateVars() {
	document.getElementById("gen1cost").innerHTML = new Decimal(gen1cost).toPrecision(3);
    document.getElementById("gen1x").innerHTML = new Decimal(gen1x).toPrecision(3);
    document.getElementById("gen1").innerHTML = new Decimal(gen1).toPrecision(3);
    document.getElementById("gen1val").innerHTML = new Decimal(gen1val).toPrecision(3);
	document.getElementById("gen2cost").innerHTML = new Decimal(gen2cost).toPrecision(3);
    document.getElementById("gen2x").innerHTML = new Decimal(gen2x).toPrecision(3);
    document.getElementById("gen2").innerHTML = new Decimal(gen2).toPrecision(3);
    document.getElementById("gen2val").innerHTML = new Decimal(gen2val).toPrecision(3)
}

window.onload = function() {
	lkGame();
	updateVars();
}

setInterval("GameSave()", 1000)