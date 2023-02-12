// Globalne spremenljivke za risanje
var canvas, context, sun, mer, v, e, mar, j, sat, u, n;

// Fizikalni podatki o nebesnih telesih
var sunX = 0, sunY = 0, sunRotation = 0;
var merX = 0, merY = 0, merRotation = 0;
var vX = 0, vY = 0, vRotation = 0;
var eX = 0, eY = 0, eRotation = 0;
var marX = 0, marY = 0, marRotation = 0;
var jX = 0, jY = 0, jRotation = 0;
var satX = 0, satY = 0, satRotation = 0;
var uX = 0, uY = 0, uRotation = 0;
var nX = 0, nY = 0, nRotation = 0;

// Stanja nebesnih teles od knjižnice Astronomy
var sunState, mercuryState, venusState, earthState, marsState, jupiterState, saturnState, uranusState, neptuneState;

// Čas zdaj
var watchDate = new Date();

// Izračuna ponovno fizikalne podatke - Zemlja je v srediču koordinatnega sistema
function setXY() {
    sunState = Astronomy.HelioState("Sun", watchDate);
    mercuryState = Astronomy.HelioState("Mercury", watchDate);
    venusState = Astronomy.HelioState("Venus", watchDate);   
    earthState = Astronomy.HelioState("Earth", watchDate);
    marsState = Astronomy.HelioState("Mars", watchDate);
    jupiterState = Astronomy.HelioState("Jupiter", watchDate);
    saturnState = Astronomy.HelioState("Saturn", watchDate);
    uranusState = Astronomy.HelioState("Uranus", watchDate);
    neptuneState = Astronomy.HelioState("Neptune", watchDate);
}

//  Funkcijo pokliče časovnik za spremembo časa za +1 dan  in ponovni izračun fizikalnih podatkov
function nextCalc() {
    watchDate.setDate(watchDate.getDate() + 1);
    setXY();
}

// Glavna funkcija
function main() {
	// Naloži slike
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    e = document.createElement("img");
    e.src = "data/earth.png";
    e.height = 10
    e.width = 10

    v = document.createElement("img");
    v.src = "data/venus.png";
    v.height = 10
    v.width = 10

    mar = document.createElement("img");
    mar.src = "data/mars.png";
    mar.height = 10
    mar.width = 10

    mer = document.createElement("img");
    mer.src = "data/mercury.png";
    mer.height = 10
    mer.width = 10

    j = document.createElement("img");
    j.src = "data/jupiter.png";
    j.height = 10
    j.width = 10

    sat = document.createElement("img");
    sat.src = "data/saturn.png";
    sat.height = 10
    sat.width = 10

    n = document.createElement("img");
    n.src = "data/neptune.png";
    n.height = 10
    n.width = 10

    u = document.createElement("img");
    u.src = "data/uranus.png";
    u.height = 10
    u.width = 10

    sun = document.createElement("img");
    sun.src = "data/sun.png";
    sun.width = 10;
    sun.height = 10;

	// Začni animacijo
    setXY();
    setInterval(nextCalc, 10);
    tick();
}
  
// Časovnik
function tick() {
	// Izrisovanje
    update();
    draw();
    requestAnimationFrame(tick);
}

function update() {
}

// Izris
function draw() {
    context.fillStyle = "White";
    context.fillRect(0, 0, canvas.width, canvas.height);
	
	deltax = 26 * earthState.x;
	deltay = 26 * earthState.y;

    drawImageRotated(context, sun, 26 * sunState.x + canvas.width / 2 - sun.width / 2 - deltax, 26 * sunState.y + canvas.height / 2 - sun.height / 2 - deltay, sun.width, sun.height, sunRotation);
    drawImageRotated(context, mer, 26 * mercuryState.x + canvas.width / 2 - mer.width/2 - deltax, 26* mercuryState.y + canvas.height / 2 - mer.height / 2 - deltay, mer.width, mer.height, merRotation);
    drawImageRotated(context, v, 26 * venusState.x + canvas.width / 2 - v.width / 2 - deltax, 26 * venusState.y + canvas.height / 2 - mer.height/2 - deltay, v.width, v.height, vRotation);
    drawImageRotated(context, e, 26 * earthState.x + canvas.width / 2 - e.width / 2 - deltax, 26 * earthState.y + canvas.height / 2 - e.height / 2 - deltay, e.width, e.height, eRotation);
    drawImageRotated(context, mar, 26 * marsState.x + canvas.width / 2 - mar.width/2 - deltax, 26 * marsState.y + canvas.height / 2 - mar.height/2 - deltay, mar.width, mar.height, marRotation);
    drawImageRotated(context, j, 26 * jupiterState.x + canvas.width / 2 - j.width/2 - deltax, 26 * jupiterState.y + canvas.height / 2 - j.height/2 - deltay, j.width, j.height, jRotation);
    drawImageRotated(context, sat, 26 * saturnState.x + canvas.width / 2 - sat.width/2 - deltax, 26 * saturnState.y + canvas.height / 2 - sat.height/2 - deltay, sat.width, sat.height, satRotation);
    drawImageRotated(context, u, 26 * uranusState.x + canvas.width / 2 - u.width/2 - deltax, 26 * uranusState.y + canvas.height / 2 - u.height/2 - deltay, u.width, u.height, uRotation);
    drawImageRotated(context, n, 26 * neptuneState.x + canvas.width / 2 - n.width/2 - deltax, 26 * neptuneState.y + canvas.height / 2 - n.height/2 - deltay, n.width, n.height, nRotation);
}
