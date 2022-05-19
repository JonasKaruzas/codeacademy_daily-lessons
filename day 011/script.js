console.log("%c-----------Uzduotis 1-----------", "color:#FF0000");

let numbers = ["Vienas", "Du", "Trys", "Keturi", "Penki"];
console.log(numbers[2]);


console.log("%c-----------Uzduotis 2-----------", "color:#FF0000");

let months = ["Sausis", "Vasaris", "Kovas", "Balandis", "Geguze", "Birzelis", "Liepa", "Rugpjutis", "Rugsejis", "Spalis", "Lapkritis", "Gruodis"];

for (const month of months){
    console.log(month);
}

console.log("%c-----------Uzduotis 3-----------", "color:#FF0000");

let numbers2 = [1, 6, 15, 3, 7, 12, 36, 15, 16];
console.log(`Visas masyvas pries- ${numbers2}`)

for (let i = 0; i < numbers2.length; i++){
    numbers2[i] += 5;
    console.log(numbers2[i]);
}

console.log(`Visas masyvas po - ${numbers2}`)

console.log("%c-----------Uzduotis 4-----------", "color:#FF0000");

let sum = 0;

for(const num of numbers2){
    sum += num;
}

console.log(`Visa suma - ${sum}`);


