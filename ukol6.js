let pole = [5, 'pepa', 4, true];

console.log(pole);

console.log(pole[1]); // vypise mi to 2.pozici v poli, jelikoze pole je ocislovane od 0 do napr. tady 3

pole[2] = 'jirka';

console.log(pole[2]);

let cisla = [321, 546, 71, 10, 1646, 131641646];
let soucet = 0;
console.log(cisla.length);

for (let i = 0; i < cisla.length; i++) {
  console.log(cisla[i]);

  soucet = soucet + cisla[i];
}

console.log('soucet je : ' + soucet);

/*
let a=5;
let jmeno='kjaldkfja';
let jeZima=true;
let arr=[];
*/

let arr = [];
arr.push(45);
let osoba = {
  ico: '164543',
  adresa: {
    psc: '31313',
    ulice: 'Nová',
  },
  znamky: [
    {
      predmet: 'matika',
      znamka: 2,
    },
    {
      predmet: 'čeština',
      znamka: 1,
    },
  ],
};

//proměná je typu objekt

osoba.jmeno = 'kjalfkja';
osoba.vek = 50;
