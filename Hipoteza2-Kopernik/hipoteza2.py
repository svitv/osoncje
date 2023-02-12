# Avtorji: Svit Selan, Svit Verhovšek, Matic Pucelj
# Avtorji: Svit Selan, Svit Verhovšek, Matic Pucelj
# OŠ Brinje Grosuplje Planeti krožijo po elipsi

import sys
from astronomy import Body, Time, HelioVector, KM_PER_AU
from math import sqrt, pow

# Glavna funkcija
if __name__ == '__main__':
    ura = Time.Parse('2023-01-01T00:00:00.000Z')

    pX = 0
    pY = 0
    pZ = 0

    print('DATUM                     X(AE)      Y(AE)      Z(AE)      RAZDALJA(AE)')

    # Izpiši celo leto po koraku enega dne 
    for x in range(365):
        zemlja = HelioVector(Body.Earth, ura)

        # Razdalja je izračunana po Pitagorovem izreku
        razdalja = sqrt(pow(zemlja.x, 2) + pow(zemlja.y, 2) + pow(zemlja.z, 2))

        # Izpiši za določeni dan
        print('{:} {:10.7f} {:10.7f} {:10.7f} {:10.7f}'.format(ura, zemlja.x, zemlja.y, zemlja.z, razdalja))

        ura = ura.AddDays(1)
        pX = zemlja.x
        pY = zemlja.y
        pZ = zemlja.z

    sys.exit(0)