# Avtorji: Svit Selan, Svit Verhovšek, Matic Pucelj
# OŠ Brinje Grosuplje

import sys

if __name__ == '__main__':
    mz = 5.98E24 # Masa Zemlje
    k = 6.67E-11 # Gravitacijska konstanta
    telo = ['Sonce', 'Merkur', 'Venera', 'Mars', 'Jupiter', 'Saturn', 'Uran', 'Neptun'] # Nebesna telesa
    smer = [1, 1, 1, -1, -1, -1, -1, -1] # Smer sile
    masa = [1.99E30, 3.29E23, 4.87E24, 6.39E23, 1.9E27, 5.68E26, 8.68E25, 1.02E26] # Mase teles
    razdalja = [1, 0.6129, 0.2767, 0.5237, 4.2028, 8.54, 18.18, 29.07] # Razdalje od Zemlje
    sila = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] # Rezultati
    
    print('TELO       SILA[N]         RAZMERJE S SONCEM')

    for i in range(8):
        sila[i] = (k * mz * masa[i] * smer[i]) / ((razdalja[i] * 150000000000) * (razdalja[i] * 150000000000))
        print('{:10} {:14.7e} {:10.7f}'.format(telo[i], sila[i], smer[i] * sila[i]/sila[0]))
    
    sys.exit(0)
