function maxgen() {
	if (new Decimal(Nothing).gte(Decimal.mul(gen1cost, "10"))) {
		var gen1repeat = 10 - gen1;
		gen1maxcost = gen1cost * gen1repeat
		gen1max()
		Nothing = Decimal.min(Nothing, gen1maxcost)
		gen1val = Decimal.add(gen1val, gen1repeat)
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen2cost, "10"))) {
		var gen2repeat = 10 - gen2;
		gen2maxcost = gen2cost * gen2repeat
		gen2max()
		Nothing = Decimal.min(Nothing, gen2maxcost)
		gen2val = Decimal.add(gen2val, gen2repeat)
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen3cost, "10"))) {
		var gen3repeat = 10 - gen3;
		gen3maxcost = gen3cost * gen3repeat
		gen3max()
		Nothing = Decimal.min(Nothing, gen3maxcost)
		gen3val = Decimal.add(gen3val, gen3repeat)
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen4cost, "10"))) {
		var gen4repeat = 10 - gen4;
		gen4maxcost = gen4cost * gen4repeat
		gen4max()
		Nothing = Decimal.min(Nothing, gen4maxcost)
		gen4val = Decimal.add(gen4val, gen4repeat)
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen5cost, "10"))) {
		var gen5repeat = 10 - gen5;
		gen5maxcost = gen5cost * gen5repeat
		gen5max()
		Nothing = Decimal.min(Nothing, gen5maxcost)
		gen5val = Decimal.add(gen5val, gen5repeat)
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen6cost, "10"))) {
		var gen6repeat = 10 - gen6;
		gen6maxcost = gen6cost * gen6repeat
		gen6max()
		Nothing = Decimal.min(Nothing, gen6maxcost)
		gen6val = Decimal.add(gen6val, gen6repeat)
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen7cost, "10"))) {
		var gen7repeat = 10 - gen7;
		gen7maxcost = gen7cost * gen7repeat
		gen7max()
		Nothing = Decimal.min(Nothing, gen7maxcost)
		gen7val = Decimal.add(gen7val, gen7repeat)
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen8cost, "10"))) {
		var gen8repeat = 10 - gen8;
		gen8maxcost = gen8cost * gen8repeat
		gen8max()
		Nothing = Decimal.min(Nothing, gen8maxcost)
		gen8val = Decimal.add(gen8val, gen8repeat)
	}
}

function gen1max() {
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

function gen2max() {
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

function gen3max() {
	gen3x = Decimal.mul(gen3x, "2");
    gen3cost = Decimal.mul(gen3cost, "100");
    gen3 = "0.0";
    nget = Decimal.mul(nget, gen3x);
	document.getElementById("gen3cost").innerHTML = gen3cost.toPrecision(3);
    document.getElementById("gen3x").innerHTML = gen3x.toPrecision(3);
    document.getElementById("gen3").innerHTML = new Decimal(gen3).toPrecision(3);
    document.getElementById("gen3val").innerHTML = gen3val.toPrecision(3);
    const gen3bg = document.getElementById("gen3bg");
    gen3bg.style.background = "transparent";
    gen3bg.style.cursor = "default";
}

function gen4max() {
	gen4x = Decimal.mul(gen4x, "2");
    gen4cost = Decimal.mul(gen4cost, "100");
    gen4 = "0.0";
    nget = Decimal.mul(nget, gen4x);
	document.getElementById("gen4cost").innerHTML = gen4cost.toPrecision(3);
    document.getElementById("gen4x").innerHTML = gen4x.toPrecision(3);
    document.getElementById("gen4").innerHTML = new Decimal(gen4).toPrecision(3);
    document.getElementById("gen4val").innerHTML = gen4val.toPrecision(3);
    const gen4bg = document.getElementById("gen4bg");
    gen4bg.style.background = "transparent";
    gen4bg.style.cursor = "default";
}

function gen5max() {
	gen5x = Decimal.mul(gen5x, "2");
    gen5cost = Decimal.mul(gen5cost, "100");
    gen5 = "0.0";
    nget = Decimal.mul(nget, gen5x);
	document.getElementById("gen5cost").innerHTML = gen5cost.toPrecision(3);
    document.getElementById("gen5x").innerHTML = gen5x.toPrecision(3);
    document.getElementById("gen5").innerHTML = new Decimal(gen5).toPrecision(3);
    document.getElementById("gen5val").innerHTML = gen5val.toPrecision(3);
    const gen5bg = document.getElementById("gen5bg");
    gen5bg.style.background = "transparent";
    gen5bg.style.cursor = "default";
}

function gen6max() {
	gen6x = Decimal.mul(gen6x, "2");
    gen6cost = Decimal.mul(gen6cost, "100");
    gen6 = "0.0";
    nget = Decimal.mul(nget, gen6x);
	document.getElementById("gen6cost").innerHTML = gen6cost.toPrecision(3);
    document.getElementById("gen6x").innerHTML = gen6x.toPrecision(3);
    document.getElementById("gen6").innerHTML = new Decimal(gen6).toPrecision(3);
    document.getElementById("gen6val").innerHTML = gen6val.toPrecision(3);
    const gen6bg = document.getElementById("gen6bg");
    gen6bg.style.background = "transparent";
    gen6bg.style.cursor = "default";
}

function gen7max() {
	gen7x = Decimal.mul(gen7x, "2");
    gen7cost = Decimal.mul(gen7cost, "100");
    gen7 = "0.0";
    nget = Decimal.mul(nget, gen7x);
	document.getElementById("gen7cost").innerHTML = gen7cost.toPrecision(3);
    document.getElementById("gen7x").innerHTML = gen7x.toPrecision(3);
    document.getElementById("gen7").innerHTML = new Decimal(gen7).toPrecision(3);
    document.getElementById("gen7val").innerHTML = gen7val.toPrecision(3);
    const gen7bg = document.getElementById("gen7bg");
    gen7bg.style.background = "transparent";
    gen7bg.style.cursor = "default";
}

function gen8max() {
	gen8x = Decimal.mul(gen8x, "2");
    gen8cost = Decimal.mul(gen8cost, "100");
    gen8 = "0.0";
    nget = Decimal.mul(nget, gen8x);
	document.getElementById("gen8cost").innerHTML = gen8cost.toPrecision(3);
    document.getElementById("gen8x").innerHTML = gen8x.toPrecision(3);
    document.getElementById("gen8").innerHTML = new Decimal(gen8).toPrecision(3);
    document.getElementById("gen8val").innerHTML = gen8val.toPrecision(3);
    const gen8bg = document.getElementById("gen8bg");
    gen8bg.style.background = "transparent";
    gen8bg.style.cursor = "default";
}