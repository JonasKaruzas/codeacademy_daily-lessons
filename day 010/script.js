function kmiCalculator(kg, cm) {
    return kg / (cm * cm)
}

const ugis = 1.68;
const mase = 60;

let result = kmiCalculator(mase, ugis).toFixed(2); 

console.log(result);

const r = document.getElementById('result');
r.innerText = result;

//////////

const firstName = 'Jonas';
const interest = 'programming';
const hobby = 'sleeping';

const awesomeMessage = `Hi, my name is ${firstName}, my interest is ${interest} and my hobby is ${hobby}`;

const r2 = document.getElementById('result2');
r2.innerText = awesomeMessage;

console.log(awesomeMessage);

///////////

const bill = 100;
const tip = bill * 0.15;
const total = bill + tip;

console.log(`%c Bill - ${bill}, Tip - ${tip} and the total - ${total} $`, 'color: #FF00FF');

let js_bill = document.getElementById('bill');
let js_tip = document.getElementById('tip');
let js_total = document.getElementById('total');
let js_calculate = document.getElementById('calculate');

js_calculate.addEventListener('click', function() {
    let calc =  js_bill.value * (js_tip.value / 100);   
    js_total.innerHTML = parseFloat(calc) + parseFloat(js_bill.value) + ' $';
    console.log(parseFloat(calc) + parseFloat(js_bill.value) + ' $');
})

///////////

const a = 5;
const b = 10;

console.log(`%c ${a} + ${b} = ${a+b}`, 'color:#0000FF');
console.log(`%c ${a} - ${b} = ${a-b}`, 'color:#FF0000');
console.log(`%c ${a} * ${b} = ${a*b}`, 'color:#FF0FFF');
console.log(`%c ${a} / ${b} = ${a/b}`, 'color:#00FF0F');

//////////

const input_vardas = prompt("Ivesk varda");

const galune = input_vardas.substring(input_vardas.length-2);
const priekis = input_vardas.substring(0, input_vardas.length-2);


if(galune === 'as') {
    console.log(`Labas ${priekis}ai`)
}else if (galune === 'e'){
    console.log(`Labas ${priekis}`);
}



