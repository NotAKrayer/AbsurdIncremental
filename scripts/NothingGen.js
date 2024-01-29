var gen1cost = new Decimal("10.0");
var gen1 = new Decimal("0.0");
var gen1val = new Decimal("0.0");
var gen1x = new Decimal("1.0");

var gen2cost = new Decimal("100.0");
var gen2 = new Decimal("0.0");
var gen2val = new Decimal("0.0");
var gen2x = new Decimal("1.0");
var gen1get = new Decimal("1.0");

function BGButtonTest() {
  if (Nothing.gte(gen1cost)) {
    const gen1bg = document.getElementById("gen1bg");
    gen1bg.style.background = "#43c443";
    gen1bg.style.cursor = "pointer";
  } else if (Nothing.lt(gen1cost)) {
    const gen1bg = document.getElementById("gen1bg");
    gen1bg.style.background = "transparent";
    gen1bg.style.cursor = "default";
  }
}

function BGButtonTest2() {
  if (Nothing.gte(gen2cost)) {
    const gen2bg = document.getElementById("gen2bg");
    gen2bg.style.background = "#43c443";
    gen2bg.style.cursor = "pointer";
  } else if (Nothing.lt(gen2cost)) {
    const gen2bg = document.getElementById("gen2bg");
    gen2bg.style.background = "transparent";
    gen2bg.style.cursor = "default";
  }
}

function NothingGet() {
  Nothing = Decimal.add(Nothing, nget);
  document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
}

setInterval("BGButtonTest()", 100);
setInterval("BGButtonTest2()", 100);
setInterval("NothingGet()", 1000);

function gen1Buy() {
  if (Nothing.gte(gen1cost)) {
    gen1 = Decimal.add(gen1, "1");
    gen1val = Decimal.add(gen1val, "1");
    Nothing = Decimal.minus(Nothing, gen1cost);
    document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
    document.getElementById("gen1").innerHTML = gen1.toPrecision(3);
	document.getElementById("gen1cost").innerHTML = gen1cost.toPrecision(3);
    document.getElementById("gen1val").innerHTML = gen1val.toPrecision(3);
	const gen2bg = document.getElementById("gen2bg");
    gen2bg.style.display = "block";
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
	document.getElementById("gen2cost").innerHTML = gen2cost.toPrecision(3);
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
setInterval("gen2nget()", 1000);
setInterval("newGen1()", 100);
setInterval("newGen2()", 100);