//genN - функция показа вещей при нажатии кнопки N
//dotShow - функция показа вещей при нажатии кнопки D
//show d - показ кнопки D



var dot1cost = new Decimal("5.0");
var dot1val = new Decimal("0.0");
var dot1boost = new Decimal("1.0");

var dot2cost = new Decimal("25.0");
var dot2val = new Decimal("0.0");

var dot3cost = new Decimal("5.0");
var dot3val = new Decimal("0.0");

function BGButtonTestDot() {
  if (new Decimal(dot).gte(dot1cost)) {
    const DotUp1 = document.getElementById("DotUp1");
    DotUp1.style.background = "#43c443";
    DotUp1.style.cursor = "pointer";
  } else if (new Decimal(dot).lt(dot1cost)) {
    const DotUp1 = document.getElementById("DotUp1");
    DotUp1.style.background = "transparent";
    DotUp1.style.cursor = "default";
  }
  
  if (new Decimal(dot).gte(dot2cost)) {
    const DotUp2 = document.getElementById("DotUp2");
    DotUp2.style.background = "#43c443";
    DotUp2.style.cursor = "pointer";
  } else if (new Decimal(dot).lt(dot2cost)) {
    const DotUp2 = document.getElementById("DotUp2");
    DotUp2.style.background = "transparent";
    DotUp2.style.cursor = "default";
  }
  
    if (new Decimal(dot).gte(dot3cost)) {
    const DotUp3 = document.getElementById("DotUp3");
    DotUp3.style.background = "#43c443";
    DotUp3.style.cursor = "pointer";
  } else if (new Decimal(dot).lt(dot3cost)) {
    const DotUp3 = document.getElementById("DotUp3");
    DotUp3.style.background = "transparent";
    DotUp3.style.cursor = "default";
  }
}

function Dot1Buy() {
  if (new Decimal(dot).gte(dot1cost)) {
    dot1val = Decimal.add(dot1val, "1");
    dot = Decimal.minus(dot, dot1cost);
	dot1cost = Decimal.mul(dot1cost, 2);
	dot1boost = Decimal.plus(dot1boost, 1.5);
    document.getElementById("dot").innerHTML = dot.toPrecision(3);
	document.getElementById("dot1cost").innerHTML = new Decimal(dot1cost).toPrecision(3);
    document.getElementById("dot1val").innerHTML = dot1val.toPrecision(3);
	document.getElementById("dot1boost").innerHTML = dot1boost.toPrecision(3);
  }
}

function Dot3Buy() {
  if (new Decimal(dot).gte(dot3cost)) {
    dot3val = Decimal.add(dot1val, "1");
    dot = Decimal.minus(dot, dot3cost);
	dot3cost = Decimal.mul(dot3cost, 1.8);
	dotx = Decimal.plus(dot1boost, 1.65);
    document.getElementById("dot").innerHTML = dot.toPrecision(3);
	document.getElementById("dot3cost").innerHTML = new Decimal(dot3cost).toPrecision(3);
    document.getElementById("dot3val").innerHTML = dot3val.toPrecision(3);
  }
}

function Dot2Buy() {
	if (new Decimal(dot2val).lt(99)) {
  if (new Decimal(dot).gte(dot2cost)) {
    dot2val = Decimal.add(dot2val, "1");
    dot = Decimal.minus(dot, dot2cost);
	dot2cost = Decimal.mul(dot2cost, 2.1);
	clearInterval(int1)
	clearInterval(int2)
	clearInterval(int3)
	clearInterval(int4)
	clearInterval(int5)
	clearInterval(int6)
	clearInterval(int7)
	clearInterval(int8)
	clearInterval(int9)
	tickspeed = tickspeed - 10;
	int1 = setInterval("NothingGet2()", tickspeed);
	int2 = setInterval("NothingGet1()", tickspeed);
	int3 = setInterval("gen2nget()", tickspeed);
	int4 = setInterval("gen3nget()", tickspeed);
	int5 = setInterval("gen4nget()", tickspeed);
	int6 = setInterval("gen5nget()", tickspeed);
	int7 = setInterval("gen6nget()", tickspeed);
	int8 = setInterval("gen7nget()", tickspeed);
	int9 = setInterval("gen8nget()", tickspeed);
    document.getElementById("dot").innerHTML = dot.toPrecision(3);
	document.getElementById("dot2cost").innerHTML = new Decimal(dot2cost).toPrecision(3);
    document.getElementById("dot2val").innerHTML = dot2val.toPrecision(3);
	document.getElementById("tickspeed").innerHTML = tickspeed.toPrecision(3);
  }
}
}


function genN() {
	int10 = setInterval("madb()", 50);
	gen1bg.style.display = "block";
	if (gen2vis > 0) {
	gen2bg.style.display = "block";
}
	if (gen3vis > 0) {
	gen3bg.style.display = "block";
}
	if (gen4vis > 0) {
	gen4bg.style.display = "block";
}
	if (gen5vis > 0) {
	gen5bg.style.display = "block";
}
	if (gen6vis > 0) {
	gen6bg.style.display = "block";
}
	if (gen7vis > 0) {
	gen7bg.style.display = "block";
}
	if (gen8vis > 0) {
	gen8bg.style.display = "block";
}
	nothing.style.display = "block";
	max.style.display = "block";
	DotUp1.style.display = "none"
	DotUp2.style.display = "none"
	DotUp3.style.display = "none"
	document.getElementById("dotcontainer").style.display = "none";
	document.getElementById("exp").style.display = "none";
	document.getElementById("imp").style.display = "none";
	document.getElementById("reset").style.display = "none";
		}


function dotshow() {
	clearInterval(int10)
	gen1bg.style.display = "none";
	gen2bg.style.display = "none";
	gen3bg.style.display = "none";
	gen4bg.style.display = "none";
	gen5bg.style.display = "none";
	gen6bg.style.display = "none";
	gen7bg.style.display = "none";
	gen8bg.style.display = "none";
	nothing.style.display = "none";
	max.style.display = "none";
	DotUp1.style.display = "block"
	DotUp2.style.display = "block"
	DotUp3.style.display = "block"
	document.getElementById("madot").style.display = "none";
	document.getElementById("dotcontainer").style.display = "block";
	document.getElementById("exp").style.display = "none";
	document.getElementById("imp").style.display = "none";
	document.getElementById("reset").style.display = "none";
}

function setshow() {
	clearInterval(int10)
	gen1bg.style.display = "none";
	gen2bg.style.display = "none";
	gen3bg.style.display = "none";
	gen4bg.style.display = "none";
	gen5bg.style.display = "none";
	gen6bg.style.display = "none";
	gen7bg.style.display = "none";
	gen8bg.style.display = "none";
	nothing.style.display = "none";
	max.style.display = "none";
	DotUp1.style.display = "none"
	DotUp2.style.display = "none"
	DotUp3.style.display = "none"
	madot.style.display = "none"
	document.getElementById("madot").style.display = "none";
	document.getElementById("dotcontainer").style.display = "none";
	document.getElementById("exp").style.display = "block";
	document.getElementById("imp").style.display = "block";
	document.getElementById("reset").style.display = "block";
}

function showD() {
	dots.style.display = "block";
}

function dotgets() {
	dotget = Decimal.floor(Decimal.pow(Decimal.log10(Nothing) - 25, 0.7).mul(2 * dotx)).add(10);
	document.getElementById("dotget").innerHTML = dotget.toPrecision(3);
}

function madb() {
  if (new Decimal(Nothing).gte("1e40")) {
	document.getElementById("madot").style.display = "block";
  }
}

function dotshownteval() {
	if (showdots = 1) {
		showD()
	}
}

setInterval("dotgets()", 1);


function MakeADotReb() {
	var answer = window.confirm("Are you sure want to Make a Dot?");
	var savedGame = JSON.parse(localStorage.getItem("saveGame"));
if (answer) {
	
	showD();
	showdots = 1;
	dot = Decimal.add(dot, dotget);
	document.getElementById("dot").innerHTML = dot.toPrecision(3);

    if (typeof savedGame.nothing !== "undefined") Nothing = 10;	
	if (typeof savedGame.nget !== "undefined") nget = 0;	
	if (typeof savedGame.gen1 !== "undefined") gen1 = 0;	 
	if (typeof savedGame.gen1val !== "undefined") gen1val = 0;	
	if (typeof savedGame.gen1x !== "undefined") gen1x = 1;	
	if (typeof savedGame.gen1cost !== "undefined") gen1cost = 10;
	//	
	if (typeof savedGame.gen2vis !== "undefined") gen2vis = 0;	
	if (typeof savedGame.gen2 !== "undefined") gen2 = 0;	 
	if (typeof savedGame.gen2val !== "undefined") gen2val = 0;	
	if (typeof savedGame.gen2x !== "undefined") gen2x = 1;	
	if (typeof savedGame.gen2cost !== "undefined") gen2cost = 100;	
	if (typeof savedGame.gen1get !== "undefined") gen1get = 1;
	//
	if (typeof savedGame.gen3 !== "undefined") gen3 = 0;	 
	if (typeof savedGame.gen3val !== "undefined") gen3val = 0;	
	if (typeof savedGame.gen3x !== "undefined") gen3x = 1;	
	if (typeof savedGame.gen3cost !== "undefined") gen3cost = 1e3;	
	if (typeof savedGame.gen2get !== "undefined") gen2get = 1;
	if (typeof savedGame.gen3vis !== "undefined") gen3vis = 0;	
	//
	if (typeof savedGame.gen4 !== "undefined") gen4 = 0;	 
	if (typeof savedGame.gen4val !== "undefined") gen4val = 0;	
	if (typeof savedGame.gen4x !== "undefined") gen4x = 1;	
	if (typeof savedGame.gen4cost !== "undefined") gen4cost = 1e4;	
	if (typeof savedGame.gen3get !== "undefined") gen3get = 1;
	if (typeof savedGame.gen4vis !== "undefined") gen4vis = 0;	
	//
	if (typeof savedGame.gen5 !== "undefined") gen5 = 0;	 
	if (typeof savedGame.gen5val !== "undefined") gen5val = 0;	
	if (typeof savedGame.gen5x !== "undefined") gen5x = 1;	
	if (typeof savedGame.gen5cost !== "undefined") gen5cost = 1e5;	
	if (typeof savedGame.gen4get !== "undefined") gen4get = 1;
	if (typeof savedGame.gen5vis !== "undefined") gen5vis = 0;	
	//
	if (typeof savedGame.gen6 !== "undefined") gen6 = 0;	 
	if (typeof savedGame.gen6val !== "undefined") gen6val = 0;	
	if (typeof savedGame.gen6x !== "undefined") gen6x = 1;	
	if (typeof savedGame.gen6cost !== "undefined") gen6cost = 1e6;	
	if (typeof savedGame.gen5get !== "undefined") gen5get = 1;
	if (typeof savedGame.gen6vis !== "undefined") gen6vis = 0;	
	//
	if (typeof savedGame.gen7 !== "undefined") gen7 = 0;	 
	if (typeof savedGame.gen7val !== "undefined") gen7val = 0;	
	if (typeof savedGame.gen7x !== "undefined") gen7x = 1;	
	if (typeof savedGame.gen7cost !== "undefined") gen7cost = 1e7;	
	if (typeof savedGame.gen6get !== "undefined") gen6get = 1;
	if (typeof savedGame.gen7vis !== "undefined") gen7vis = 0;	
	//
	if (typeof savedGame.gen8 !== "undefined") gen8 = 0;	 
	if (typeof savedGame.gen8val !== "undefined") gen8val = 0;	
	if (typeof savedGame.gen8x !== "undefined") gen8x = 1;	
	if (typeof savedGame.gen8cost !== "undefined") gen8cost = 1e8;	
	if (typeof savedGame.gen7get !== "undefined") gen7get = 1;
	if (typeof savedGame.gen8vis !== "undefined") gen8vis = 0;	
	//
	if (typeof savedGame.dotget !== "undefined") dotget = 0;	
	
	updateVars();
	gen2bg.style.display = "none";
	gen3bg.style.display = "none";
	gen4bg.style.display = "none";
	gen5bg.style.display = "none";
	gen6bg.style.display = "none";
	gen7bg.style.display = "none";
	gen8bg.style.display = "none";

	dots.style.display = "block";
	document.getElementById("madot").style.display = "none";
	
	 location.reload();
	 
}
}

setInterval("BGButtonTestDot()", 100);

