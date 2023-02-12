# Avtorji: Svit Selan, Svit Verhovšek, Matic Pucelj
# OŠ Brinje Grosuplje

import sys

from astronomy import Body, Time, HelioVector, KM_PER_AU
from math import sqrt, pow

if __name__ == '__main__':
    ura = Time.Parse('2023-01-01T00:00:00.000Z')
    pX = 0
    pY = 0
    pZ = 0
    distance = 0
    delta = 0

    print('DATE                      X(AE)      Y(AE)      Z(AE)      D(AE)      DELTA(AE) DELTA*(km)')

    for x in range(20):
        earth = HelioVector(Body.Earth, ura)
        
        if pX != 0:
            distance = sqrt(pow(earth.x, 2) + pow(earth.y, 2) + pow(earth.z, 2))
            delta = sqrt(pow(earth.x - pX, 2) + pow(earth.y - pY, 2) + pow(earth.z - pZ, 2))
        
        print('{:} {:10.7f} {:10.7f} {:10.7f} {:10.7f} {:10.7f} {:10.7f}'.format(ura, earth.x, earth.y, earth.z, distance, delta, delta * KM_PER_AU))
        
        ura = ura.AddDays(365.256)
        pX = earth.x
        pY = earth.y
        pZ = earth.z
    
    sys.exit(0)