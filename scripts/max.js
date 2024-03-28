function maxgen() {
	var gen1repeat = 10 - gen1;
	var gen2repeat = 10 - gen2;
	var gen3repeat = 10 - gen3;
	var gen4repeat = 10 - gen4;
	var gen5repeat = 10 - gen5;
	var gen6repeat = 10 - gen6;
	var gen7repeat = 10 - gen7;
	var gen8repeat = 10 - gen8;
	
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen1cost, gen1repeat))) {
		var gen1maxcost = new Decimal(Decimal.mul(gen1cost, gen1repeat))
		Nothing = Decimal.minus(Nothing, gen1maxcost)
		gen1val = Decimal.add(gen1val, gen1repeat)
		gen1max()
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen2cost, gen2repeat))) {
		var gen2maxcost = new Decimal(Decimal.mul(gen2cost, gen2repeat))
		Nothing = Decimal.minus(Nothing, gen2maxcost)
		gen2val = Decimal.add(gen2val, gen2repeat)
		gen2max()
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen3cost, gen3repeat))) {
		var gen3maxcost = new Decimal(Decimal.mul(gen3cost, gen3repeat))
		Nothing = Decimal.minus(Nothing, gen3maxcost)
		gen3val = Decimal.add(gen3val, gen3repeat)
		gen3max()
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen4cost, gen4repeat))) {
		var gen4maxcost = new Decimal(Decimal.mul(gen4cost, gen4repeat))
		Nothing = Decimal.minus(Nothing, gen4maxcost)
		gen4val = Decimal.add(gen4val, gen4repeat)
		gen4max()
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen5cost, gen5repeat))) {
		var gen5maxcost = new Decimal(Decimal.mul(gen5cost, gen5repeat))
		Nothing = Decimal.minus(Nothing, gen5maxcost)
		gen5val = Decimal.add(gen5val, gen5repeat)
		gen5max()
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen6cost, gen6repeat))) {
		var gen6maxcost = new Decimal(Decimal.mul(gen6cost, gen6repeat))
		Nothing = Decimal.minus(Nothing, gen6maxcost)
		gen6val = Decimal.add(gen6val, gen6repeat)
		gen6max()
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen7cost, gen7repeat))) {
		var gen7maxcost = new Decimal(Decimal.mul(gen7cost, gen7repeat))
		Nothing = Decimal.minus(Nothing, gen7maxcost)
		gen7val = Decimal.add(gen7val, gen7repeat)
		gen7max()
	}
	
	if (new Decimal(Nothing).gte(Decimal.mul(gen8cost, gen8repeat))) {
		var gen8maxcost = new Decimal(Decimal.mul(gen8cost, gen8repeat))
		Nothing = Decimal.minus(Nothing, gen8maxcost)
		gen8val = Decimal.add(gen8val, gen8repeat)
		gen8max()
	}
	updateVars();
}

function gen1max() {
	gen1x = Decimal.mul(gen1x, "2");
    gen1cost = Decimal.mul(gen1cost, "1000");
    gen1 = "0.0";
    nget = Decimal.mul(nget, gen1x);
	document.getElementById("gen1cost").innerHTML = gen1cost.toPrecision(3);
    document.getElementById("gen1x").innerHTML = gen1x.toPrecision(3);
    document.getElementById("gen1").innerHTML = new Decimal(gen1).toPrecision(3);
    document.getElementById("gen1val").innerHTML = gen1val.toPrecision(3);
    const gen1bg = document.getElementById("gen1bg");
    gen1bg.style.background = "transparent";
    gen1bg.style.cursor = "default";
	gen2bg.style.display = "block";
	gen2vis = 1
}

function gen2max() {
	gen2x = Decimal.mul(gen2x, "2");
    gen2cost = Decimal.mul(gen2cost, "10000");
    gen2 = "0.0";
	document.getElementById("gen2cost").innerHTML = gen2cost.toPrecision(3);
    document.getElementById("gen2x").innerHTML = gen2x.toPrecision(3);
    document.getElementById("gen2").innerHTML = new Decimal(gen2).toPrecision(3);
    document.getElementById("gen2val").innerHTML = gen2val.toPrecision(3);
    const gen2bg = document.getElementById("gen2bg");
    gen2bg.style.background = "transparent";
    gen2bg.style.cursor = "default";
	gen3bg.style.display = "block";
	gen3vis = 1
}

function gen3max() {
	gen3x = Decimal.mul(gen3x, "2");
    gen3cost = Decimal.mul(gen3cost, "10000");
    gen3 = "0.0";
	document.getElementById("gen3cost").innerHTML = gen3cost.toPrecision(3);
    document.getElementById("gen3x").innerHTML = gen3x.toPrecision(3);
    document.getElementById("gen3").innerHTML = new Decimal(gen3).toPrecision(3);
    document.getElementById("gen3val").innerHTML = gen3val.toPrecision(3);
    const gen3bg = document.getElementById("gen3bg");
    gen3bg.style.background = "transparent";
    gen3bg.style.cursor = "default";
	gen4bg.style.display = "block";
	gen4vis = 1
}

function gen4max() {
	gen4x = Decimal.mul(gen4x, "2");
    gen4cost = Decimal.mul(gen4cost, "10000");
    gen4 = "0.0";
	document.getElementById("gen4cost").innerHTML = gen4cost.toPrecision(3);
    document.getElementById("gen4x").innerHTML = gen4x.toPrecision(3);
    document.getElementById("gen4").innerHTML = new Decimal(gen4).toPrecision(3);
    document.getElementById("gen4val").innerHTML = gen4val.toPrecision(3);
    const gen4bg = document.getElementById("gen4bg");
    gen4bg.style.background = "transparent";
    gen4bg.style.cursor = "default";
	gen5bg.style.display = "block";
	gen5vis = 1
}

function gen5max() {
	gen5x = Decimal.mul(gen5x, "2");
    gen5cost = Decimal.mul(gen5cost, "10000");
    gen5 = "0.0";
	document.getElementById("gen5cost").innerHTML = gen5cost.toPrecision(3);
    document.getElementById("gen5x").innerHTML = gen5x.toPrecision(3);
    document.getElementById("gen5").innerHTML = new Decimal(gen5).toPrecision(3);
    document.getElementById("gen5val").innerHTML = gen5val.toPrecision(3);
    const gen5bg = document.getElementById("gen5bg");
    gen5bg.style.background = "transparent";
    gen5bg.style.cursor = "default";
	gen6bg.style.display = "block";
	gen6vis = 1
}

function gen6max() {
	gen6x = Decimal.mul(gen6x, "2");
    gen6cost = Decimal.mul(gen6cost, "10000");
    gen6 = "0.0";
	document.getElementById("gen6cost").innerHTML = gen6cost.toPrecision(3);
    document.getElementById("gen6x").innerHTML = gen6x.toPrecision(3);
    document.getElementById("gen6").innerHTML = new Decimal(gen6).toPrecision(3);
    document.getElementById("gen6val").innerHTML = gen6val.toPrecision(3);
    const gen6bg = document.getElementById("gen6bg");
    gen6bg.style.background = "transparent";
    gen6bg.style.cursor = "default";
	gen7bg.style.display = "block";
	gen7vis = 1
}

function gen7max() {
	gen7x = Decimal.mul(gen7x, "2");
    gen7cost = Decimal.mul(gen7cost, "10000");
    gen7 = "0.0";
	document.getElementById("gen7cost").innerHTML = gen7cost.toPrecision(3);
    document.getElementById("gen7x").innerHTML = gen7x.toPrecision(3);
    document.getElementById("gen7").innerHTML = new Decimal(gen7).toPrecision(3);
    document.getElementById("gen7val").innerHTML = gen7val.toPrecision(3);
    const gen7bg = document.getElementById("gen7bg");
    gen7bg.style.background = "transparent";
    gen7bg.style.cursor = "default";
	gen8bg.style.display = "block";
	gen8vis = 1
}

function gen8max() {
	gen8x = Decimal.mul(gen8x, "2");
    gen8cost = Decimal.mul(gen8cost, "10000");
    gen8 = "0.0";
	document.getElementById("gen8cost").innerHTML = gen8cost.toPrecision(3);
    document.getElementById("gen8x").innerHTML = gen8x.toPrecision(3);
    document.getElementById("gen8").innerHTML = new Decimal(gen8).toPrecision(3);
    document.getElementById("gen8val").innerHTML = new Decimal(gen8val).toPrecision(3);
    const gen8bg = document.getElementById("gen8bg");
    gen8bg.style.background = "transparent";
    gen8bg.style.cursor = "default";
}

function MaxKeyPress(event) {
    // Check if the pressed key is the 'M' key (both uppercase and lowercase)
    if (event.key === 'M' || event.key === 'm') {
        // Call your 'max' function
        maxgen();
    }
}

document.addEventListener('keydown', MaxKeyPress);