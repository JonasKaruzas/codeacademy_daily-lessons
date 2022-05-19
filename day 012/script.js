// console.log("%c-----------Uzduotis 1-----------", "color:#FF0000");


// let countries = [
//     ["Peru", 31826018,1285216],
//     ["Filipinai", 103796832, 300000],
//     ["Portugalija", 10260000, 92212],
//     ["Lietuva", 2814696, 65300],
//     ["Meksika", 130222815, 1972550]
// ];

// for (let i = 0; i < countries.length; i++) {
// console.log(`Salis:${countries[i][0]}, joje gyvena ${(countries[i][1] / 10000000).toFixed(2)} mln. gyventoju, valstyves plotas - ${countries[i][2]} km^2, plotas, tenkantis vienam gyventojui - ${((countries[i][2] / countries[i][1]) * 1000).toFixed(2)} m^2`)
// // document.write(`Salis:${countries[i][0]}, joje gyvena ${(countries[i][1] / 10000000).toFixed(2)} mln. gyventoju, valstyves plotas - ${countries[i][2]} km^2, plotas, tenkantis vienam gyventojui - ${((countries[i][2] / countries[i][1]) * 1000).toFixed(2)} m^2 <br>`)
// }

// console.log("%c-----------Uzduotis 2-----------", "color:#FF0000");

// let doors = {
//     color : 'brown',
//     isOpen: false,
//     open: function() {
//         if (doors.isOpen === true) {
//             return 'Doors are open';
//         } else {
//             doors.isOpen = true;
//             return 'I am opening the doors'
//         }
//     },
//     close: function() {
//         if (doors.isOpen === false) {
//             return 'Doors are closed';
//         } else {
//             doors.isOpen = false;
//             return 'I am closing the doors'
//         }
//     }
// }

// console.log(doors.close());
// console.log(doors.open());
// console.log(doors.close());
// console.log(doors.open());
// console.log(doors.open());

// console.log("%c-----------Uzduotis 3-----------", "color:#FF0000");

// let savingsAccount = {
//     balance: 1000,
//     interestRatePercent: 1,
//     deposit: function addMoney(amount) {
//         if (amount > 0) {
//             savingsAccount.balance += amount;
//         }
//     },
//     withdraw: function removeMoney(amount) {
//         let verifyBalance = savingsAccount.balance - amount;
//         if (amount > 0 && verifyBalance >= 0) {
//             savingsAccount.balance -= amount;
//             return `You withdraw $${amount}, \nYou have $${this.balance} in your account left`
//         } else {
//             return `Ups you don't have $${amount} in your account`
//         }
//     },
//     printAccountSummary: function() {
//         return `Welcome!\n\nYour balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%`;
//     },
    
// }

// console.log(savingsAccount.printAccountSummary());

// console.log("%c-----------Uzduotis 4-----------", "color:#FF0000");

// console.log(savingsAccount.withdraw(100));
// console.log(savingsAccount.withdraw(1000));

console.log("%c-----------Uzduotis 5-----------", "color:#FF0000");

const cars = [
    {type: "BMW", price: '30.000'},
    {type: "MERCEDES", price: '35.000'},
    {type: "HONDA", price: '18.000'},
    {type: "VOLVO", price: '25.000'},
];

cars.forEach((e, idx) => {
    if (idx < cars.length-1) {
        let carType = e.type.toLowerCase();
        let newCarType = carType.replace(carType[0], carType[0].toUpperCase());
        printCar(newCarType, e.price)
    } else {
        printCar(e.type, e.price)
    }
})

function printCar(car, price){
    console.log(`${car} car price $${price}`);
}