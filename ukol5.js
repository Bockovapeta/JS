//používá se, abychom třeba nemuseli vypisovat 20 tisíc čísel pod sebe

// while cyklus  dokud něco platí, tak se vypíše ta a ta věc
/*  pro cykly je potřeba mít nastavené v ozubeném kolečku Save u Hot relaod trigger */
// stejný zápis jako i=i+1 je následující:
//i++

//i+=1

/*
let i = 1;
while (i < 6) {
  console.log(i);
  i = i + 1;
  if (i === 4) {
    break;
  }
}

// daný cyklus ukončíme pomocí break

//for cyklus, veci, co se maji opakovat, jedenkrat na zacatku, podminka, pokazde na konci tela

for (let i = 0; i < 6; i++) {
  console.log('ahoj' + i);
}

console.log('Konec');
*/

/*
let cislo = Number(prompt('Zadej libovolné celé číslo'));
let soucet = 0;

while (cislo !== 0) {
  soucet = soucet + cislo;
  console.log(cislo);
  console.log('Kumulovaný součet je ' + soucet);
  cislo = Number(prompt('Zadej libovolné celé číslo'));
}

console.log('celkový součet je: ' + soucet);


*/

// funkce

/*
function helloWorld() {
  console.log('ahoj světe');
}

helloWorld();
helloWorld();
helloWorld();

function sectiDveCisla(prvni, druha) {
  return prvni + druha;
}

let vysledek = sectiDveCisla(10, 55);
console.log(vysledek);

*/

/*
function pocetniOperace(cislo1, cislo2) {
  console.log(cislo1 + cislo2); //vypiš do konzole součet
  console.log(Math.abs(cislo1 - cislo2));
  console.log(cislo1 * cislo2);
  console.log(cislo1 / cislo2);
}

pocetniOperace(3, 4);
*/

/*

Napište funkci, která vypíše informaci, zda zadané číslo je nebo není prvočíslo.
Nápověda: 
    • Prvočíslo je dělitelné pouze 1 a samo sebou. 
    • Lze použít zbytek po dělení – modulo (%). 
    • V první moment předpokládejme, ze číslo JE prvočíslo a budeme případně rozporovat toto tvrzení.
*/

/*
function jeCisloPrvocislo(cislo) {
  let jePrvocislo = true;
  for (let i = 2; i < cislo; i++) {
    if (cislo % i === 0) {
      jePrvocislo = false;
      break;
    }
  }
  return jePrvocislo;
}

let cislo = Number(prompt('zadej číslo'));
if (jeCisloPrvocislo(cislo)) {
  console.log('číslo je prvočíslo');
} else {
  console.log('číslo není prvočíslo');
}








function vypisAhoj () {
  console.log ('ahoj');
}

function vypisPepa () {
  console.log ('Pepa')

}


vypisAhoj ();

*/

function obsahObdelniku(a, b) {
  let pocet = a * b;
  console.log('obsah obdelniku je ' + pocet);
  return a - b;
}

console.log(obsahObdelniku(5, 3));
