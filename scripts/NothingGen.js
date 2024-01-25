var gen1cost = new Decimal("10.0")
var gen1 = new Decimal("0.0")
var gen1val = new Decimal("0.0")
var gen1x = new Decimal("1.0")

function BGButtonTest() {
if (Nothing.gte(gen1cost)) {
	const gen1bg = document.getElementById("gen1bg");
	gen1bg.style.background = "#43c443";
	gen1bg.style.cursor = "pointer";
}	else if (Nothing.lt(gen1cost)) {
		const gen1bg = document.getElementById("gen1bg");
		gen1bg.style.background = "transparent";
		gen1bg.style.cursor = "default";
}	
}

function NothingGet() {
	Nothing = Decimal.add(Nothing, nget);
	document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
}

setInterval("BGButtonTest()", 100);
setInterval("NothingGet()", 1000);

function gen1Buy() {
	if (Nothing.gte(gen1cost)) {
		nget = Decimal.add(nget, "1");
		gen1 = Decimal.add(gen1, "1");
		gen1val = Decimal.add(gen1val, "1");
		Nothing = Decimal.minus(Nothing, gen1cost);
		document.getElementById("Nothing").innerHTML = Nothing.toPrecision(3);
		document.getElementById("gen1").innerHTML = gen1.toPrecision(3);
		document.getElementById("gen1val").innerHTML = gen1val.toPrecision(3);
}
}

function newGen1() {
	if (gen1.eq("10")) {
		gen1x = Decimal.mul(gen1x, "2");
		gen1cost = Decimal.mul(gen1cost, "100");
		gen1 = "0.0"
		nget = Decimal.mul(nget, gen1x);
		document.getElementById("gen1x").innerHTML = gen1x.toPrecision(3);
		document.getElementById("gen1").innerHTML = gen1.toPrecision(3);
		document.getElementById("gen1val").innerHTML = gen1val.toPrecision(3);
		document.getElementById("gen1cost").innerHTML = gen1cost.toPrecision(3);
		const gen1bg = document.getElementById("gen1bg");
		gen1bg.style.background = "transparent";
		gen1bg.style.cursor = "default";
	}
}

setInterval("newGen1()", 100);