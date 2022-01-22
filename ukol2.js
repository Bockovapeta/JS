let jmeno = 'Petra';
let vek = 32;
let vaha = 50;
let vyska = 1.6;
let vyska2 = 1.6 ** 2;
let BMI = Math.round((vaha / vyska2) * 100) / 100;

console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    vek +
    ' let, vážím ' +
    vaha +
    'kg, měřím ' +
    vyska +
    'm a moje BMI je ' +
    BMI
);

//dalsi moznost jednodussiho psani je nasledujici (zpětné závorky jsou alt96

console.log(
  `Jmenuji se ${jmeno}, je mi ${vek} let, vazim ${vaha}kg, měřím ${vyska}m a moje BMI je ${BMI}`
);

// váha v kilogramec / výška v metrech na druhou
// +', je mi ' + vek 'let, vážím ' + vaha 'kg, měřím' + vyska + 'm a moje BMI je')

// zaokrouhleni se dělá pomoci Math.round a když chceme na dvě desetina místa, tak vynásobíme 100 a vydělíme 100. Když na 1 desetinné místo, tak vynásobíme 10 a vydělíme 10

// zpětné závorky jsou alt96

//vyskakovaci okno je pomoci funkce prompt

// prompt('ahoj, jak se mas?');

let odpoved = prompt('Kolik ti je let?');

console.log(odpoved);

//tady určíme, že číslo, které vepisujeme do vyskakovacího okna, je číslo a ne text

let odpoved1 = Number(prompt('Kolik ti je?'));
console.log(odpoved1);
