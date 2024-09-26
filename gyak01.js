const szam2 = 2;
let szam3 = 3;
let valosszam = 3.14;
let szoveg = "Helló";
let booleanvaltozo = false;

// console.log(booleanvaltozo);

//// Tömbök
let tomb1 = [1, 2, 3, 4, 5];

//// hozzáadás a tömb végéhez
tomb1.push(6);
// console.log(tomb1);

//// törlés a tömb végéről
tomb1.pop();
//console.log(tomb1);

//// hozzáadás a tömb elejéhez
tomb1.unshift(9);
//console.log(tomb1);

//// hozzáadás a tömb középére
tomb1.splice(2, 1, 10);
//console.log(tomb1);

//// törlés a tömb elejéről
tomb1.shift();
//console.log(tomb1);

//// Kiíratása a tömb elemeinek
//console.log(tomb1[4]);


//for (let i = 0; i < tomb1.length; i++) {
//    console.log(tomb1[i]);
//}

////
 function maxElemKeresese(localTomb) {
    let max = 0;

    for (let i = 0; i < localTomb.length; i++) {
        if (max < localTomb[i]) {
            max = localTomb[i];
        }
    }
    console.log("Legnagyobb elem: ", max);
}

//maxElemKeresese(tomb1);


const almaTomb = [1, 8, 15, 5, 3, 7, 2, 9, 4];
const tomb3 = [1, 8, 10, 5, 3, 7, 2, 9, 4];
const tomb4 = [1, 8, 10, 5, 3, 7, 2, 9, 4];
const tomb5 = [1, 8, 10, 5, 3, 7, 2, 9, 4];
//maxElemKeresese(almaTomb);
//maxElemKeresese(tomb3);
//maxElemKeresese(tomb4);
//maxElemKeresese(tomb5);

function maxElemKereses2(localTomb) {
    console.log(Math.max(...localTomb));
}

const tomb6 =[1, 8, 14, 5, 3, 7, 2, 9, 4];
//maxElemKereses2(tomb6);

// Tömb elemeinek összeadása
const tomb7 = [3, 5, 6, 9, 11];
function tombosszeg(tomb) {
    let osszeg = 0;

    for (let i = 0; i < tomb.length; i++) {
        osszeg = osszeg + tomb[i];
    }
  console.log(osszeg);
}

//tombosszeg(tomb7);

// Tömb elemeinek összeadása
const tomb8 = [3, 5, 6, 9, 11];
//console.log(tomb8.reduce((a,b) => a + b, 0));



////Házi feladatok
// 1. Írj egy függvényt, amely megfordítja egy tömböt elemeit!

const tomb9 = [1, 2, 3, 4, 5];
const megforditva = tomb9.reverse();
console.log(megforditva);

// 2. Írj egy függvényt, amely visszaadja csak a páros számokat egy adott tömbből!

const parosSzamok = tomb9.filter(
    function(element) {
        return element % 2 === 0;
});
console.log(parosSzamok);

// 3. Írj egy függvényt, amely egy adott tömb minden elemét megszorozza 2-vel!
//function megszorzas(ertek) {
//    if (tomb9(ertek)) {
//        ertek = ertek.map(functiom(element) {
//            return element * 2;
//        });
//    }
//    return ertek * 2;
//}
//megszorzas(tomb9);

// 4. Írj egy függvényt, amely megvizsgálja, hogy egy adott szám benne van-e a tömbben!
function ellenorzes(ertek) {
    let beiras = tomb9.filter(x => x == ertek)
    if (beiras.length)
        return "benne van";
    return "nincs benne";
}
console.log(ellenorzes(6));

// 5. Írj egy függvényt, amely rendezi a tömb elemeit növekvő sorrendben!
const tomb10 = [5, 2, 3, 1, 4];
console.log(tomb10.sort());

// 6. Írj egy függvényt, amely eltávolítja a duplikált elemeket egy tömbből!
const tomb11 = [5, 5, 2, 1, 3, 1, 4, 6, 8, 4];
function eltavolitasDuplikaltElem(tomb11) {
    return tomb11.filter((elem, index) => tomb11.indexOf(elem) === index);
}
console.log(eltavolitasDuplikaltElem(tomb11));