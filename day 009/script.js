// uzduotis 1

// console.log('Hellow world');

// alert('I love JavaScript');
// const answer = prompt('Ready to learn more?');

// if (answer === 'yes') {
//     const num = prompt('Ivesk skaiciu nuo 1 iki 10');

//     if (num > 0 && num < 11) {
//         console.log('Tavo numeris - ' + num);
//     } else {
//         console.log("Neteisingai :(");
//     }
// } else {
//     console.log('tai ir viskas. Ate');
// }

// uzduotis 2

// let vardas = prompt('Koks tavo vardas?');
// let birthDay = "gegužės 12";

// console.log(vardas + " yra gimęs " + birthDay);

// uzduotis 3

function Skaiciuokle(x) {
    let result = (x * 1_500_000) * 100 / 11_252_100_000;
    return result.toFixed(2);
}

function printToScreen(x) {
  document.write(x);
}

const input = prompt("Ivesk bazinio uzmokescio dydi")

printToScreen(Skaiciuokle(input));1