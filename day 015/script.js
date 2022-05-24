console.log('---------- Uzduotis 1 -----------');

function hello(){
    console.log('Hello World');
}

hello();

console.log('---------- Uzduotis 2 -----------');

function getHelloString(){
    return "Hello World"
}

console.log(getHelloString());

console.log('---------- Uzduotis 3 -----------');

function sum(a, b, c){
    return a + b + c;
}

console.log(sum(10, 15, 20))

console.log('---------- Uzduotis 4 -----------');

function count(num){
    for(let i = 1; i <= num; i++){
        console.log(i);
    }
}

count(5);

console.log('---------- Uzduotis 5 -----------');

function isAdult(age){
    let years = 18 - age;
    if(age < 18){
        return `the person is ${age} years old, after ${years} he/she will be an adult`;
    } else {
        return `the person is ${age} years old and he/she is an adult`;
    }
}

console.log(isAdult(16));
console.log(isAdult(36));

console.log('---------- Uzduotis 6 -----------');

function buildTriangle(triangleWidth){
    let tree = "";
    
    for(let i = 1; i <= triangleWidth; i++){
        for(let j = 0; j < i; j++){
            tree += '*';
        }
        tree += '\n';
    }

    return tree;
}

console.log(buildTriangle(5))

console.log('---------- Uzduotis Mantas -----------');

function buildTriangle2(triangleWidth){
    let star = "";
    let tree = [];

    for(let i = 1; i <= triangleWidth; i++){
        star += '*';
        tree.push(star);
    }

    const treeString = tree.join('\n')
    return treeString;
}

console.log(buildTriangle2(5));

console.log('---------- Uzduotis 7 -----------');
    
function calculateArea(width, height){
    return (width * height).toFixed(2);
} 

console.log(calculateArea(1.123, 2));
console.log(calculateArea(3, 8));


console.log('---------- Uzduotis 8 -----------');

function sum(limit){
    let sum = 0;
    for(let i = 1; i <= limit; i++){
        sum += i;
    }
    return sum
}

console.log(sum(0));
console.log(sum(2));
console.log(sum(5));

console.log('---------- Uzduotis 9 -----------');

function reverseString(str){
    let arr = str.split('');
    let reverseArr = [];

    for(let i = 0; i < arr.length; i++){
        reverseArr.unshift(arr[i]);
    }
    return reverseArr.join('');

}

console.log(reverseString('Labas'));


console.log('---------- Uzduotis 9B -----------');

function reverseString2(str){
    let reverseStr = '';

    for(let i = str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }

    return reverseStr;
}

console.log(reverseString2('Krabas'));
