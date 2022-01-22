//Toto je jednořádkový komentář, funguje jen do konce řádky

/*  Toto je
víceřádkový komentář a musí
být ukončený hvězdičkou a lomítkem



text se píše do uvozovek
čísla se píšou bez uvozovek
desetinné číslo se píše s tečkou
dvě čísla za sebou se oddělují čárkou
*/
//console.log nám vypíše něco

console.log('Ahoj');

//vytvoření proměnné var se rovná let, užívalo se dřív
// proměná by měla začínat písmenem
// proměná by měla obsahovat jen písmena a číslice
// nejlepe uzivat jednoduche heslo pro promenou, velke pismena pouzivat na kazde slovo, ale ne od zacatku takže např. tohleJeMojeMarmelada

let jmeno = 'Petra';
let vek = 32;
let povolani = 'ucetni';

//promene se daji scitat, kombinovat pomoci operatoru

let a = 5;
let b = 11;
let soucet = a - b;
console.log(soucet);

//boolean je true nebo false
//textovy řetězec je string

console.log('jmenuji se ' + jmeno);
console.log('je mi ' + vek + ' let');
console.log(povolani);

let c = 5 < 2;
console.log(c);

//umocnění se dělá **
// zjistění zbytku při dělen se dělá procentem %

let jeZima = false;
let sviti = true;
let je0 = false;

//nebo se píše ||  altW
// ampersand se píše & altc

// je zima a zaroven sviti se pise jeZima && sviti
// je zima a nebo sviti se pise jeZima || sviti - stačí, aby bylo jen jedno z toho true a bude vysledek vždycky true

// ! vykřičník je obecně negace

let vysledek = jeZima || sviti;

console.log(vysledek);

//=== rovná se
//!== není rovno
// >< >= <=  větší, menší, větší nebo rovno, menší nebo rovno
