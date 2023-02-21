# Avtorji: Svit Selan, Svit Verhovšek, Matic Pucelj
# OŠ Brinje Grosuplje

import sys
import turtle

from astronomy import Body, Time, HelioVector, KM_PER_AU
from math import sqrt, pow

if __name__ == '__main__':
    s = turtle.getscreen()
    s.title("Raziskovalna naloga")
    s.bgcolor("black")
    s.setup(1000, 1000)
    turtle.shape("circle")
    turtle.pencolor("white")
    turtle.color("yellow", "yellow")
    turtle.stamp()
    turtle.pensize(1)
    
    turtle.penup()
    turtle.pencolor("white")
    turtle.color("green", "blue")
    turtle.speed(100)
    
    ura = Time.Parse('2023-01-01T00:00:00.000Z')
    earth = HelioVector(Body.Earth, ura)
    x = earth.x * 400
    y = earth.y * 400
    turtle.setx(x)
    turtle.sety(y)
    turtle.pendown()

    for x in range(7305):
        ura = ura.AddDays(1)
        earth = HelioVector(Body.Earth, ura)
        x = earth.x * 400
        y = earth.y * 400
        turtle.goto(x, y)
        
    turtle.done()
    
    sys.exit(0)