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

var gen3cost = new Decimal("1e3");
var gen3 = new Decimal("0.0");
var gen3val = new Decimal("0.0");
var gen3x = new Decimal("1.0");
var gen2get = new Decimal("1.0");
var gen3vis = 0

var gen4cost = new Decimal("1e4");
var gen4 = new Decimal("0.0");
var gen4val = new Decimal("0.0");
var gen4x = new Decimal("1.0");
var gen3get = new Decimal("1.0");
var gen4vis = 0

var gen5cost = new Decimal("1e5");
var gen5 = new Decimal("0.0");
var gen5val = new Decimal("0.0");
var gen5x = new Decimal("1.0");
var gen4get = new Decimal("1.0");
var gen5vis = 0

var gen6cost = new Decimal("1e6");
var gen6 = new Decimal("0.0");
var gen6val = new Decimal("0.0");
var gen6x = new Decimal("1.0");
var gen5get = new Decimal("1.0");
var gen6vis = 0

var gen7cost = new Decimal("1e7");
var gen7 = new Decimal("0.0");
var gen7val = new Decimal("0.0");
var gen7x = new Decimal("1.0");
var gen6get = new Decimal("1.0");
var gen7vis = 0

var gen8cost = new Decimal("1e8");
var gen8 = new Decimal("0.0");
var gen8val = new Decimal("0.0");
var gen8x = new Decimal("1.0");
var gen7get = new Decimal("1.0");
var gen8vis = 0

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

function BGButtonTest3() {
  if (new Decimal(Nothing).gte(gen3cost)) {
    const gen3bg = document.getElementById("gen3bg");
    gen3bg.style.background = "#43c443";
    gen3bg.style.cursor = "pointer";
  } else if (new Decimal(Nothing).lt(gen3cost)) {
    const gen3bg = document.getElementById("gen3bg");
    gen3bg.style.background = "transparent";
    gen3bg.style.cursor = "default";
  }
}

function BGButtonTest4() {
  if (new Decimal(Nothing).gte(gen4cost)) {
    const gen4bg = document.getElementById("gen4bg");
    gen4bg.style.background = "#43c443";
    gen4bg.style.cursor = "pointer";
  } else if (new Decimal(Nothing).lt(gen4cost)) {
    const gen4bg = document.getElementById("gen4bg");
    gen4bg.style.background = "transparent";
    gen4bg.style.cursor = "default";
  }
}

function BGButtonTest5() {
  if (new Decimal(Nothing).gte(gen5cost)) {
    const gen5bg = document.getElementById("gen5bg");
    gen5bg.style.background = "#43c443";
    gen5bg.style.cursor = "pointer";
  } else if (new Decimal(Nothing).lt(gen5cost)) {
    const gen5bg = document.getElementById("gen5bg");
    gen5bg.style.background = "transparent";
    gen5bg.style.cursor = "default";
  }
}

function BGButtonTest6() {
  if (new Decimal(Nothing).gte(gen6cost)) {
    const gen6bg = document.getElementById("gen6bg");
    gen6bg.style.background = "#43c443";
    gen6bg.style.cursor = "pointer";
  } else if (new Decimal(Nothing).lt(gen6cost)) {
    const gen6bg = document.getElementById("gen6bg");
    gen6bg.style.background = "transparent";
    gen6bg.style.cursor = "default";
  }
}

function BGButtonTest7() {
  if (new Decimal(Nothing).gte(gen7cost)) {
    const gen7bg = document.getElementById("gen7bg");
    gen7bg.style.background = "#43c443";
    gen7bg.style.cursor = "pointer";
  } else if (new Decimal(Nothing).lt(gen7cost)) {
    const gen7bg = document.getElementById("gen7bg");
    gen7bg.style.background = "transparent";
    gen7bg.style.cursor = "default";
  }
}

function BGButtonTest8() {
  if (new Decimal(Nothing).gte(gen8cost)) {
    const gen8bg = document.getElementById("gen8bg");
    gen8bg.style.background = "#43c443";
    gen8bg.style.cursor = "pointer";
  } else if (new Decimal(Nothing).lt(gen8cost)) {
    const gen8bg = document.getElementById("gen8bg");
    gen8bg.style.background = "transparent";
    gen8bg.style.cursor = "default";
  }
}


function NothingGet() {
  Nothing = Decimal.add(Nothing, nget);
  document.getElementById("Nothing").innerHTML = new Decimal(Nothing).toPrecision(3);
  document.getElementById("nget").innerHTML = new Decimal(nget).toPrecision(3);
  document.getElementById("gen1get").innerHTML = new Decimal(gen1get).toPrecision(3);
  document.getElementById("gen2get").innerHTML = new Decimal(gen2get).toPrecision(3);
  document.getElementById("gen3get").innerHTML = new Decimal(gen3get).toPrecision(3);
  document.getElementById("gen4get").innerHTML = new Decimal(gen4get).toPrecision(3);
  document.getElementById("gen5get").innerHTML = new Decimal(gen5get).toPrecision(3);
  document.getElementById("gen6get").innerHTML = new Decimal(gen6get).toPrecision(3);
  document.getElementById("gen7get").innerHTML = new Decimal(gen7get).toPrecision(3);
}

setInterval("BGButtonTest()", 100);
setInterval("BGButtonTest3()", 100);
setInterval("BGButtonTest4()", 100);
setInterval("BGButtonTest5()", 100);
setInterval("BGButtonTest6()", 100);
setInterval("BGButtonTest7()", 100);
setInterval("BGButtonTest8()", 100);
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
    gen2 = Decimal.add(gen2, "1");
    gen2val = Decimal.add(gen2val, "1");
    Nothing = Decimal.minus(Nothing, gen2cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen2").innerHTML = gen2.toPrecision(3);
	document.getElementById("gen2cost").innerHTML = new Decimal(gen2cost).toPrecision(3);
    document.getElementById("gen2val").innerHTML = gen2val.toPrecision(3);
	gen3bg.style.display = "block";
	gen3vis = 1
  }
}

function gen3Buy() {
  if (Nothing.gte(gen3cost)) {
    gen3 = Decimal.add(gen3, "1");
    gen3val = Decimal.add(gen3val, "1");
    Nothing = Decimal.minus(Nothing, gen3cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen3").innerHTML = gen3.toPrecision(3);
	document.getElementById("gen3cost").innerHTML = new Decimal(gen3cost).toPrecision(3);
    document.getElementById("gen3val").innerHTML = gen3val.toPrecision(3);
	gen4bg.style.display = "block";
	gen4vis = 1
  }
}

function gen4Buy() {
  if (Nothing.gte(gen4cost)) {
    gen4 = Decimal.add(gen4, "1");
    gen4val = Decimal.add(gen4val, "1");
    Nothing = Decimal.minus(Nothing, gen4cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen4").innerHTML = gen4.toPrecision(3);
	document.getElementById("gen4cost").innerHTML = new Decimal(gen4cost).toPrecision(3);
    document.getElementById("gen4val").innerHTML = gen4val.toPrecision(3);
	gen5bg.style.display = "block";
	gen5vis = 1
  }
}

function gen5Buy() {
  if (Nothing.gte(gen5cost)) {
    gen5 = Decimal.add(gen5, "1");
    gen5val = Decimal.add(gen5val, "1");
    Nothing = Decimal.minus(Nothing, gen5cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen5").innerHTML = gen5.toPrecision(3);
	document.getElementById("gen5cost").innerHTML = new Decimal(gen5cost).toPrecision(3);
    document.getElementById("gen5val").innerHTML = gen5val.toPrecision(3);
	gen6bg.style.display = "block";
	gen6vis = 1
  }
}

function gen6Buy() {
  if (Nothing.gte(gen6cost)) {
    gen6 = Decimal.add(gen6, "1");
    gen6val = Decimal.add(gen6val, "1");
    Nothing = Decimal.minus(Nothing, gen5cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen6").innerHTML = gen6.toPrecision(3);
	document.getElementById("gen6cost").innerHTML = new Decimal(gen6cost).toPrecision(3);
    document.getElementById("gen6val").innerHTML = gen6val.toPrecision(3);
	gen7bg.style.display = "block";
	gen7vis = 1
  }
}

function gen7Buy() {
  if (Nothing.gte(gen7cost)) {
    gen7 = Decimal.add(gen7, "1");
    gen7val = Decimal.add(gen7val, "1");
    Nothing = Decimal.minus(Nothing, gen5cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen7").innerHTML = gen7.toPrecision(3);
	document.getElementById("gen7cost").innerHTML = new Decimal(gen7cost).toPrecision(3);
    document.getElementById("gen7val").innerHTML = gen7val.toPrecision(3);
	gen8bg.style.display = "block";
	gen8vis = 1
  }
}

function gen8Buy() {
  if (Nothing.gte(gen8cost)) {
    gen8 = Decimal.add(gen8, "1");
    gen8val = Decimal.add(gen8val, "1");
    Nothing = Decimal.minus(Nothing, gen5cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen8").innerHTML = gen8.toPrecision(3);
	document.getElementById("gen8cost").innerHTML = new Decimal(gen8cost).toPrecision(3);
    document.getElementById("gen8val").innerHTML = gen8val.toPrecision(3);
	gen8bg.style.display = "block";
	gen8vis = 1
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
	document.getElementById("gen2cost").innerHTML = gen2cost.toPrecision(3);
    document.getElementById("gen2x").innerHTML = gen2x.toPrecision(3);
    document.getElementById("gen2").innerHTML = new Decimal(gen2).toPrecision(3);
    document.getElementById("gen2val").innerHTML = gen2val.toPrecision(3);
    const gen2bg = document.getElementById("gen2bg");
    gen2bg.style.background = "transparent";
    gen2bg.style.cursor = "default";
  }
}

function newGen3() {
  if (new Decimal(gen3).gte(10.0)) {
    gen3x = Decimal.mul(gen3x, "2");
    gen3cost = Decimal.mul(gen3cost, "100");
    gen3 = "0.0";
	document.getElementById("gen3cost").innerHTML = gen3cost.toPrecision(3);
    document.getElementById("gen3x").innerHTML = gen3x.toPrecision(3);
    document.getElementById("gen3").innerHTML = new Decimal(gen3).toPrecision(3);
    document.getElementById("gen3val").innerHTML = gen3val.toPrecision(3);
    const gen3bg = document.getElementById("gen3bg");
    gen3bg.style.background = "transparent";
    gen3bg.style.cursor = "default";
  }
}

function newGen4() {
  if (new Decimal(gen4).gte(10.0)) {
    gen4x = Decimal.mul(gen4x, "2");
    gen4cost = Decimal.mul(gen4cost, "100");
    gen4 = "0.0";
	document.getElementById("gen4cost").innerHTML = gen4cost.toPrecision(3);
    document.getElementById("gen4x").innerHTML = gen4x.toPrecision(3);
    document.getElementById("gen4").innerHTML = new Decimal(gen4).toPrecision(3);
    document.getElementById("gen4val").innerHTML = gen4val.toPrecision(3);
    const gen4bg = document.getElementById("gen4bg");
    gen4bg.style.background = "transparent";
    gen4bg.style.cursor = "default";
  }
}

function newGen5() {
  if (new Decimal(gen5).gte(10.0)) {
    gen5x = Decimal.mul(gen5x, "2");
    gen5cost = Decimal.mul(gen5cost, "100");
    gen5 = "0.0";
	document.getElementById("gen5cost").innerHTML = gen5cost.toPrecision(3);
    document.getElementById("gen5x").innerHTML = gen5x.toPrecision(3);
    document.getElementById("gen5").innerHTML = new Decimal(gen5).toPrecision(3);
    document.getElementById("gen5val").innerHTML = gen5val.toPrecision(3);
    const gen5bg = document.getElementById("gen5bg");
    gen5bg.style.background = "transparent";
    gen5bg.style.cursor = "default";
  }
}

function newGen6() {
  if (new Decimal(gen6).gte(10.0)) {
    gen6x = Decimal.mul(gen6x, "2");
    gen6cost = Decimal.mul(gen6cost, "100");
    gen6 = "0.0";
	document.getElementById("gen6cost").innerHTML = gen6cost.toPrecision(3);
    document.getElementById("gen6x").innerHTML = gen6x.toPrecision(3);
    document.getElementById("gen6").innerHTML = new Decimal(gen6).toPrecision(3);
    document.getElementById("gen6val").innerHTML = gen6val.toPrecision(3);
    const gen6bg = document.getElementById("gen6bg");
    gen6bg.style.background = "transparent";
    gen6bg.style.cursor = "default";
  }
}

function newGen7() {
  if (new Decimal(gen7).gte(10.0)) {
    gen7x = Decimal.mul(gen7x, "2");
    gen7cost = Decimal.mul(gen7cost, "100");
    gen7 = "0.0";
	document.getElementById("gen7cost").innerHTML = gen7cost.toPrecision(3);
    document.getElementById("gen7x").innerHTML = gen7x.toPrecision(3);
    document.getElementById("gen7").innerHTML = new Decimal(gen7).toPrecision(3);
    document.getElementById("gen7val").innerHTML = gen7val.toPrecision(3);
    const gen7bg = document.getElementById("gen7bg");
    gen7bg.style.background = "transparent";
    gen7bg.style.cursor = "default";
  }
}

function newGen8() {
  if (new Decimal(gen8).gte(10.0)) {
    gen8x = Decimal.mul(gen8x, "2");
    gen8cost = Decimal.mul(gen8cost, "100");
    gen8 = "0.0";
	document.getElementById("gen8cost").innerHTML = gen8cost.toPrecision(3);
    document.getElementById("gen8x").innerHTML = gen8x.toPrecision(3);
    document.getElementById("gen8").innerHTML = new Decimal(gen8).toPrecision(3);
    document.getElementById("gen8val").innerHTML = gen8val.toPrecision(3);
    const gen8bg = document.getElementById("gen8bg");
    gen8bg.style.background = "transparent";
    gen8bg.style.cursor = "default";
  }
}


function gennget() {
	nget = Decimal.mul(gen1val, gen1x);
	gen1get = Decimal.mul(gen2val, gen2x);
	gen2get = Decimal.mul(gen3val, gen3x);
	gen3get = Decimal.mul(gen4val, gen4x);
	gen4get = Decimal.mul(gen5val, gen5x);
	gen5get = Decimal.mul(gen6val, gen6x);
	gen6get = Decimal.mul(gen7val, gen7x);
	gen7get = Decimal.mul(gen8val, gen8x);
}

function gen2nget() {
	gen1val = Decimal.add(gen1val, gen1get);
	document.getElementById("gen1val").innerHTML = gen1val.toPrecision(3);
}

function gen3nget() {
	gen2val = Decimal.add(gen2val, gen2get);
	document.getElementById("gen2val").innerHTML = gen2val.toPrecision(3);
}

function gen4nget() {
	gen3val = Decimal.add(gen3val, gen3get);
	document.getElementById("gen3val").innerHTML = gen3val.toPrecision(3);
}

function gen5nget() {
	gen4val = Decimal.add(gen4val, gen4get);
	document.getElementById("gen4val").innerHTML = gen4val.toPrecision(3);
}

function gen6nget() {
	gen5val = Decimal.add(gen5val, gen5get);
	document.getElementById("gen5val").innerHTML = gen5val.toPrecision(3);
}

function gen7nget() {
	gen6val = Decimal.add(gen6val, gen6get);
	document.getElementById("gen6val").innerHTML = gen6val.toPrecision(3);
}

function gen8nget() {
	gen7val = Decimal.add(gen7val, gen7get);
	document.getElementById("gen7val").innerHTML = gen7val.toPrecision(3);
}

setInterval("gennget()", 100);
setInterval("BGButtonTest2()", 100);
setInterval("gen2nget()", 1000);
setInterval("gen3nget()", 1000);
setInterval("gen4nget()", 1000);
setInterval("gen5nget()", 1000);
setInterval("gen6nget()", 1000);
setInterval("gen7nget()", 1000);
setInterval("gen8nget()", 1000);
setInterval("newGen1()", 100);
setInterval("newGen2()", 100);
setInterval("newGen3()", 100);
setInterval("newGen4()", 100);
setInterval("newGen5()", 100);
setInterval("newGen6()", 100);
setInterval("newGen7()", 100);
setInterval("newGen8()", 100);


function GameSave() {
	var saveGame = {
		nothing: Nothing,
		nget: nget,
		gen1: gen1,
		gen1val: gen1val,
		gen1x: gen1x,
		gen1cost: gen1cost,
		gen2vis: gen2vis,
		//
		gen2: gen2,
		gen2val: gen2val,
		gen2x: gen2x,
		gen2cost: gen2cost,
		gen1get: gen1get,
		//
		gen3: gen3,
		gen3val: gen3val,
		gen3x: gen3x,
		gen3cost: gen3cost,
		gen2get: gen2get,
		gen3vis: gen3vis,
		//
		gen4: gen4,
		gen4val: gen4val,
		gen4x: gen4x,
		gen4cost: gen4cost,
		gen3get: gen3get,
		gen4vis: gen4vis,
		//
		gen5: gen5,
		gen5val: gen5val,
		gen5x: gen5x,
		gen5cost: gen5cost,
		gen4get: gen4get,
		gen5vis: gen5vis,
		//
		gen6: gen6,
		gen6val: gen6val,
		gen6x: gen6x,
		gen6cost: gen6cost,
		gen5get: gen5get,
		gen6vis: gen6vis,
		//
		gen7: gen7,
		gen7val: gen7val,
		gen7x: gen7x,
		gen7cost: gen7cost,
		gen6get: gen6get,
		gen7vis: gen7vis,
		//
		gen8: gen8,
		gen8val: gen8val,
		gen8x: gen8x,
		gen8cost: gen8cost,
		gen7get: gen7get,
		gen8vis: gen8vis
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
	//
	if (typeof savedGame.gen2 !== "undefined") gen2 = savedGame.gen2;	 
	if (typeof savedGame.gen2val !== "undefined") gen2val = savedGame.gen2val;	
	if (typeof savedGame.gen2x !== "undefined") gen2x = savedGame.gen2x;	
	if (typeof savedGame.gen2cost !== "undefined") gen2cost = savedGame.gen2cost;	
	if (typeof savedGame.gen1get !== "undefined") gen1get = savedGame.gen1get;
	//
	if (typeof savedGame.gen3 !== "undefined") gen3 = savedGame.gen3;	 
	if (typeof savedGame.gen3val !== "undefined") gen3val = savedGame.gen3val;	
	if (typeof savedGame.gen3x !== "undefined") gen3x = savedGame.gen3x;	
	if (typeof savedGame.gen3cost !== "undefined") gen3cost = savedGame.gen3cost;	
	if (typeof savedGame.gen2get !== "undefined") gen2get = savedGame.gen2get;
	if (typeof savedGame.gen3vis !== "undefined") gen3vis = savedGame.gen3vis;
	//	
	if (typeof savedGame.gen4 !== "undefined") gen4 = savedGame.gen4;	 
	if (typeof savedGame.gen4val !== "undefined") gen4val = savedGame.gen4val;	
	if (typeof savedGame.gen4x !== "undefined") gen4x = savedGame.gen4x;	
	if (typeof savedGame.gen4cost !== "undefined") gen4cost = savedGame.gen4cost;	
	if (typeof savedGame.gen3get !== "undefined") gen3get = savedGame.gen3get;
	if (typeof savedGame.gen4vis !== "undefined") gen4vis = savedGame.gen4vis;	
	//
	if (typeof savedGame.gen5 !== "undefined") gen5 = savedGame.gen5;	 
	if (typeof savedGame.gen5val !== "undefined") gen5val = savedGame.gen5val;	
	if (typeof savedGame.gen5x !== "undefined") gen5x = savedGame.gen5x;	
	if (typeof savedGame.gen5cost !== "undefined") gen5cost = savedGame.gen5cost;	
	if (typeof savedGame.gen4get !== "undefined") gen4get = savedGame.gen4get;
	if (typeof savedGame.gen5vis !== "undefined") gen5vis = savedGame.gen5vis;	
	//
	if (typeof savedGame.gen6 !== "undefined") gen6 = savedGame.gen6;	 
	if (typeof savedGame.gen6val !== "undefined") gen6val = savedGame.gen6val;	
	if (typeof savedGame.gen6x !== "undefined") gen6x = savedGame.gen6x;	
	if (typeof savedGame.gen6cost !== "undefined") gen6cost = savedGame.gen6cost;	
	if (typeof savedGame.gen5get !== "undefined") gen5get = savedGame.gen5get;
	if (typeof savedGame.gen6vis !== "undefined") gen6vis = savedGame.gen6vis;	
	//
	if (typeof savedGame.gen7 !== "undefined") gen7 = savedGame.gen7;	 
	if (typeof savedGame.gen7val !== "undefined") gen7val = savedGame.gen7val;	
	if (typeof savedGame.gen7x !== "undefined") gen7x = savedGame.gen7x;	
	if (typeof savedGame.gen7cost !== "undefined") gen7cost = savedGame.gen7cost;	
	if (typeof savedGame.gen6get !== "undefined") gen6get = savedGame.gen6get;
	if (typeof savedGame.gen7vis !== "undefined") gen7vis = savedGame.gen7vis;	
	//
	if (typeof savedGame.gen8 !== "undefined") gen8 = savedGame.gen8;	 
	if (typeof savedGame.gen8val !== "undefined") gen8val = savedGame.gen8val;	
	if (typeof savedGame.gen8x !== "undefined") gen8x = savedGame.gen8x;	
	if (typeof savedGame.gen8cost !== "undefined") gen8cost = savedGame.gen8cost;	
	if (typeof savedGame.gen7get !== "undefined") gen7get = savedGame.gen6get;
	if (typeof savedGame.gen8vis !== "undefined") gen8vis = savedGame.gen8vis;	
	//
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
}

function updateVars() {
	document.getElementById("gen1cost").innerHTML = new Decimal(gen1cost).toPrecision(3);
    document.getElementById("gen1x").innerHTML = new Decimal(gen1x).toPrecision(3);
    document.getElementById("gen1").innerHTML = new Decimal(gen1).toPrecision(3);
    document.getElementById("gen1val").innerHTML = new Decimal(gen1val).toPrecision(3);
	//
	document.getElementById("gen2cost").innerHTML = new Decimal(gen2cost).toPrecision(3);
    document.getElementById("gen2x").innerHTML = new Decimal(gen2x).toPrecision(3);
    document.getElementById("gen2").innerHTML = new Decimal(gen2).toPrecision(3);
    document.getElementById("gen2val").innerHTML = new Decimal(gen2val).toPrecision(3)
	//
	document.getElementById("gen3cost").innerHTML = new Decimal(gen3cost).toPrecision(3);
    document.getElementById("gen3x").innerHTML = new Decimal(gen3x).toPrecision(3);
    document.getElementById("gen3").innerHTML = new Decimal(gen3).toPrecision(3);
    document.getElementById("gen3val").innerHTML = new Decimal(gen3val).toPrecision(3)
	//
	document.getElementById("gen4cost").innerHTML = new Decimal(gen4cost).toPrecision(3);
    document.getElementById("gen4x").innerHTML = new Decimal(gen4x).toPrecision(3);
    document.getElementById("gen4").innerHTML = new Decimal(gen4).toPrecision(3);
    document.getElementById("gen4val").innerHTML = new Decimal(gen4val).toPrecision(3)
	//
	document.getElementById("gen5cost").innerHTML = new Decimal(gen5cost).toPrecision(3);
    document.getElementById("gen5x").innerHTML = new Decimal(gen5x).toPrecision(3);
    document.getElementById("gen5").innerHTML = new Decimal(gen5).toPrecision(3);
    document.getElementById("gen5val").innerHTML = new Decimal(gen5val).toPrecision(3)
	//
	document.getElementById("gen6cost").innerHTML = new Decimal(gen6cost).toPrecision(3);
    document.getElementById("gen6x").innerHTML = new Decimal(gen6x).toPrecision(3);
    document.getElementById("gen6").innerHTML = new Decimal(gen6).toPrecision(3);
    document.getElementById("gen6val").innerHTML = new Decimal(gen6val).toPrecision(3)
	//
	document.getElementById("gen7cost").innerHTML = new Decimal(gen7cost).toPrecision(3);
    document.getElementById("gen7x").innerHTML = new Decimal(gen7x).toPrecision(3);
    document.getElementById("gen7").innerHTML = new Decimal(gen7).toPrecision(3);
    document.getElementById("gen7val").innerHTML = new Decimal(gen7val).toPrecision(3)
	//
	document.getElementById("gen8cost").innerHTML = new Decimal(gen8cost).toPrecision(3);
    document.getElementById("gen8x").innerHTML = new Decimal(gen8x).toPrecision(3);
    document.getElementById("gen8").innerHTML = new Decimal(gen8).toPrecision(3);
    document.getElementById("gen8val").innerHTML = new Decimal(gen8val).toPrecision(3)
	//
}

window.onload = function() {
	lkGame();
	updateVars();
	visibleGen();
}

setInterval("GameSave()", 1000)

function visibleGen() {
	if (new Decimal(gen2val).gte("1")) {
		gen3bg.style.display = "block";
		gen3vis = 1
	}
	
	if (new Decimal(gen3val).gte("1")) {
		gen4bg.style.display = "block";
		gen4vis = 1
	}
	
	if (new Decimal(gen4val).gte("1")) {
		gen5bg.style.display = "block";
		gen5vis = 1
	}
	
	if (new Decimal(gen5val).gte("1")) {
		gen6bg.style.display = "block";
		gen6vis = 1
	}
	
	if (new Decimal(gen6val).gte("1")) {
		gen7bg.style.display = "block";
		gen7vis = 1
	}
	
	if (new Decimal(gen7val).gte("1")) {
		gen8bg.style.display = "block";
		gen8vis = 1
	}
}

function deleteSave() {
	var answer = window.confirm("Are you sure?");
	var savedGame = JSON.parse(localStorage.getItem("saveGame"));
if (answer) {
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
	
	updateVars();
	gen2bg.style.display = "none";
	gen3bg.style.display = "none";
	gen4bg.style.display = "none";
	gen5bg.style.display = "none";
	gen6bg.style.display = "none";
	gen7bg.style.display = "none";
	gen8bg.style.display = "none";
}
else {
    console.log("dont delete")
}
}
