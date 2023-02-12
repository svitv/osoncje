// Globalne spremenljivke
var canvas, context;
var sun;
var e;


var sunX = 1000, sunY = 1000, sunRotation = 0;
var eX = 4000, eY = 1000, eRotation = 0;

var sunState;
  
var earthState;




var watchDate = new Date();

function setXY() {
    sunState = Astronomy.HelioState("Sun", watchDate);
    earthState = Astronomy.HelioState("Earth", watchDate);
}

function nextCalc() {
    // console.log("BU");
    watchDate.setDate(watchDate.getDate() + 1);
    setXY();
}



function main() {

    // Zacetek programa
    // Najdemo canvas in si ga shranimo v globalno spremenljivko

    // watchDate.setTime(Date.parse("01 Jan 2023 00:00:00 GMT"));

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    e = document.createElement("img");
    e.src = "data/earth.png";
    e.height = 10
    e.width = 10
    
    sun = document.createElement("img");
    sun.src = "data/sun.png";
    sun.width = 10;
    sun.height = 10;
    setXY();
    setInterval(nextCalc, 10);
    tick();
    beginPath()
}


  
function tick() {
    // Funkcija tick se poklice veckrat na sekundo
    update(); // najprej izracunajmo novo stanje igre
    draw(); // potem pa stanje izrisimo na canvas
    requestAnimationFrame(tick);
}

function update() {
    // Logiko sprogramirajte tukaj
    
    // bRotation += 0.25;

    
    if (keyboard["w"]) {
        if (sun.width && sun.height > 500){
            sun.width = 500
            sun.height = 500
            
        }else {
            sunX -= 2
            sunY -= 2
        }

        sun.width += 5;
        sun.height += 5;
        
    } else if (keyboard["s"]) {
        if (sun.width && sun.height < 50){
            sun.width = 50
            sun.height = 50
           
        }else {
            sunX += 2
            sunY += 2
        }
        
        sun.width -= 5;
        sun.height -= 5;
        
    }
}
function draw() {
    // Risanje sprogramirajte tukaj

    moveTo(eX,eY)
    lineTo(eX,eY)
    /*console.log("SUN:", 13 * sun.x + 400, 13 * sun.y + 400, 13 * sun.z + 400);
    console.log("EARTH:", 13 * earth.x + 400, 13 * earth.y + 400, 13 * earth.z + 400);
    console.log("JUPITER:", 13 * jupiter.x + 400, 13 * jupiter.y + 400, 13 * jupiter.z + 400);
    console.log("NEPTUNE:", 13 * neptune.x + 400, 13 * neptune.y + 400, 13 * neptune.z + 400);*/

    // Narisemo ozadje
    context.fillStyle = "Black";
    context.fillRect(0,0,canvas.width,canvas.height);

    // Narisemo krog
    /*context.beginPath();
    context.fillStyle = "orange";
    context.ellipse(200, 200, 100, 100, 0, 0, 2*Math.PI);
    context.fill();
    */
   

    // Boomerang
    drawImageRotated(context, sun, 13 * sunState.x + 400 - sun.width / 2, 13 * sunState.y + 400 - sun.height / 2, sun.width, sun.height, sunRotation);
    
    drawImageRotated(context, e, 13 * earthState.x + 400 - e.width / 2, 13*earthState.y + 400 - e.height / 2, e.width, e.height, eRotation);
    
}



























































































































































































































































