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

let cislo = Number(prompt('Zadej libovolné celé číslo'));
let soucet = 0;

while (cislo !== 0) {
  soucet = soucet + cislo;
  console.log(cislo);
  console.log('Kumulovaný součet je ' + soucet);
  cislo = Number(prompt('Zadej libovolné celé číslo'));
}

console.log('celkový součet je: ' + soucet);
