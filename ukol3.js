let jmenoMuz = 'Marek';
let jmenoZena = 'Jana';
let rokMuz = 1980;
let rokZena = 1982;
let mesicMuz = 6;
let mesicZena = 8;

let pocet = 12 - mesicMuz + 12 * (rokZena - rokMuz) + (12 - mesicZena);

console.log(
  jmenoMuz +
    ' a ' +
    jmenoZena +
    ' jsou od sebe věkově vzdáleni ' +
    pocet +
    ' měsíců.'
);
