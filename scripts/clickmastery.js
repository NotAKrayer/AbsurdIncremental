clickvalue = new Decimal("0.0")
clickget = new Decimal("1.0")
cnedeed = new Decimal("4.0")
ccl = new Decimal("1")
cclc = new Decimal("0")

click1cost = new Decimal("1000")
click1boost = new Decimal("1")
click1val = new Decimal("0")

click2cost = new Decimal("10000")
click2boost = new Decimal("1")
click2val = new Decimal("0")

click3cost = new Decimal("100000")
click3boost = "Not Purchased"
c3val = 0
int12 = 0

function getClick() {
	clickvalue = Decimal.add(clickvalue, clickget);
	document.getElementById("clickvalue").innerHTML = new Decimal(clickvalue).toPrecision(3);
	document.getElementById("clickget").innerHTML = new Decimal(clickget).toPrecision(3);
}

function plusclick() {
	cclc = Decimal.add(cclc, 1)
	document.getElementById("cclc").innerHTML = new Decimal(cclc).toPrecision(3);
}

function testforlevel() {
	if (new Decimal(cclc).gte(cnedeed)) {
		ccl = Decimal.add(ccl, 1);
		clickget = Decimal.mul(clickget, 8)
		cclc = 0
		cnedeed = Decimal.mul(cnedeed, 2);
		document.getElementById("clickget").innerHTML = new Decimal(clickget).toPrecision(3);
		document.getElementById("cclc").innerHTML = new Decimal(cclc).toPrecision(3);
		document.getElementById("ccl").innerHTML = new Decimal(ccl).toPrecision(3);
		document.getElementById("cnedeed").innerHTML = new Decimal(cnedeed).toPrecision(3);
	}
}

setInterval("testforlevel()", 200)

function BGButtonTestClick() {
  if (new Decimal(clickvalue).gte(click1cost)) {
    const ClickUp2 = document.getElementById("ClickUp2");
    ClickUp2.style.background = "#43c443";
    ClickUp2.style.cursor = "pointer";
  } else if (new Decimal(clickvalue).lt(click1cost)) {
    const ClickUp2 = document.getElementById("ClickUp2");
    ClickUp2.style.background = "transparent";
    ClickUp2.style.cursor = "default";
  }
  
   if (new Decimal(clickvalue).gte(click2cost)) {
    const ClickUp3 = document.getElementById("ClickUp3");
    ClickUp3.style.background = "#43c443";
    ClickUp3.style.cursor = "pointer";
  } else if (new Decimal(clickvalue).lt(click2cost)) {
    const ClickUp3 = document.getElementById("ClickUp3");
    ClickUp3.style.background = "transparent";
    ClickUp3.style.cursor = "default";
  }
  
   if (new Decimal(clickvalue).gte(click3cost)) {
    const ClickUp4 = document.getElementById("ClickUp4");
    ClickUp4.style.background = "#43c443";
    ClickUp4.style.cursor = "pointer";
  } else if (new Decimal(clickvalue).lt(click3cost)) {
    const ClickUp4 = document.getElementById("ClickUp4");
    ClickUp4.style.background = "transparent";
    ClickUp4.style.cursor = "default";
  }
}

setInterval("BGButtonTestClick()", 1);

function click1Buy() {
  if (new Decimal(clickvalue).gte(click1cost)) {
    click1val = Decimal.add(click1val, "1");
    clickvalue = Decimal.minus(clickvalue, click1cost);
	click1boost = Decimal.plus(click1boost, 0.025)
	click1cost = Decimal.mul(click1cost, "1.5");
	document.getElementById("click1val").innerHTML = click1val.toPrecision(3);
	document.getElementById("click1cost").innerHTML = new Decimal(click1cost).toPrecision(3);
    document.getElementById("clickvalue").innerHTML = clickvalue.toPrecision(3);
	document.getElementById("click1boost").innerHTML = click1boost.toPrecision(3);
	const ClickUp2 = document.getElementById("ClickUp2");
    ClickUp2.style.display = "block";
  }
}

function click2Buy() {
  if (new Decimal(clickvalue).gte(click1cost)) {
    click1val = Decimal.add(click1val, "1");
    clickvalue = Decimal.minus(clickvalue, click1cost);
	click1boost = Decimal.plus(click1boost, 0.025)
	click1cost = Decimal.mul(click1cost, "1.5");
	document.getElementById("click1val").innerHTML = click1val.toPrecision(3);
	document.getElementById("click1cost").innerHTML = new Decimal(click1cost).toPrecision(3);
    document.getElementById("clickvalue").innerHTML = clickvalue.toPrecision(3);
	document.getElementById("click1boost").innerHTML = click1boost.toPrecision(3);
	const ClickUp2 = document.getElementById("ClickUp2");
    ClickUp2.style.display = "block";
  }
}

function click3Buy() {
  if (new Decimal(clickvalue).gte(click2cost)) {
    click2val = Decimal.add(click2val, "1");
    clickvalue = Decimal.minus(clickvalue, click2cost);
	click2boost = Decimal.plus(click2boost, 0.05)
	click2cost = Decimal.mul(click2cost, "1.5");
	document.getElementById("click2val").innerHTML = click2val.toPrecision(3);
	document.getElementById("click2cost").innerHTML = new Decimal(click2cost).toPrecision(3);
    document.getElementById("clickvalue").innerHTML = clickvalue.toPrecision(3);
	document.getElementById("click2boost").innerHTML = click2boost.toPrecision(3);
	const ClickUp3 = document.getElementById("ClickUp3");
    ClickUp3.style.display = "block";
  }
}

function click4Buy() {
if (c3val < 1) {
  if (new Decimal(clickvalue).gte(click3cost)) {
    clickvalue = Decimal.minus(clickvalue, click2cost);
	click3boost = "Purchased"
	document.getElementById("click3cost").innerHTML = new Decimal(click3cost).toPrecision(3);
    document.getElementById("clickvalue").innerHTML = clickvalue.toPrecision(3);
	document.getElementById("click3boost").innerHTML = click3boost
	const ClickUp4 = document.getElementById("ClickUp4");
    ClickUp4.style.display = "block";
	c3val = 1
	int12 = setInterval("autobuy()", 500)
		}
	}
}

