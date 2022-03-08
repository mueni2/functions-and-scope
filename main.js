//alert('Hey')

/* var myTestVar = 'Hello World!';

function test() {
    var myNumber = 13;
    console.log('Function: ' , myTestVar);
    console.log('Function: ' , myNumber);
}

test();

console.log('Global: ' , myTestVar); */
//console.log('Global: ' , myNumber); // myNumber is on the function scope. So it does not work here

/* function myFirstFunction() {
    alert('Hey this is my function!');
} */

//myFirstFunction();

/* 
if (isNaN(myTestVar)) {
    console.log('Your variable is not a number')
}
var content = false;
var result = isNaN(content);
console.log(result);
var age = prompt('how old are you?');
var birthDate;
if (isNaN(age)) {
    console.log('Please type as digits.');
}else {
    birthDate = 2021-age;
    console.log(`Your birth date is ${birthDate}`)
}
 */



//if(!number2) is same as if(number2 == undefined)

/* 
function sum(number1, number2) {
    if (isNaN(number2)) {
        return('You should give me the second number');
    } else {
        var total = number1 + number2;
        return(total);
        alert('test')//After return no code works
    }
}
var number1;
function promptSum() {
    var number1 = parseInt(prompt(`1. number: `));
    var n2 = parseInt(prompt(`2. number: `));
    
   console.log( sum(number1, n2));
}
console.log(number1);
var testX = 5;
var tester;
tester = testX;//tester = 5
function name(params) {
    
/* } */
function isPrime(cNumber) {
    var result;
    var i;

    for (i = 2;i< cNumber/2;i++) {
        console.log(`${cNumber} /${i}=${cNumber/i}`);
        if (cNumber % i == 0) {
            result = false;
            //console.log(`${cNumber} is not a prime number,since it's dividable by ${i}`);
            break;
        }
    }
    console.log(i);
    if (Math.ceil(cNumber/2) == i) {
        result = true;
        //console.log(`${cNumber} is a prime number.`);
    }
    return result;
} 
 function isPrime2(cNumber) {
    for (let i = 2;i< cNumber/2;i++) {
        //console.log(`${cNumber} /${i}=${cNumber/i}`);
        if (cNumber % i == 0) {
            result = false;
}
}
return true;
}
console.log(isPrime2(751)); 

const greet = function () {
    console.log(`hello there`);
} 
//Hoisting not allowed
//mySecondFunc();
//Function expression
//var mySecondFunc = function () {
    console.log(`Hello there`);
//}
//console.log(myFunction);
//console.log(typeof myFunction);

//console.log(mySecond); 
console.log(isPrime2('bhb12'));
function printPrimes(start,end) {
    for (let i = start; i <= end; i++) {
        if (isPrime2(i)) {
            console.log(i);; 
        }   
    }
}
printPrimes(5,10)

let testMe = 5;
console.log(testMe);
testMe = 10;
console.log(testMe);
testMe = 7;
console.log(testMe);
if (true) {
    let xyz = 'yes'
}
console.log(xyz);

//Arrow function

function myFunc1(params) {
   console.log(1); 
}
let myFunc2 = function () {
    console.log(1);
}
const myFunc3 = function () {
    return 1;
}
const myFunc4 = () => {
    return (1);
}
const myFunc5 = () => 1;

const myFunc6 = parameterName => 1 + parameterName;

const getLonger = (text1, text2) => (text1.length > text2.length) ? text1 : (text1.length < text2.length) ? text2 : null; 
   
const getLonger = (text1, text2) => {
    if(text1.length > text2.length){
    return text1;
    }else if (text1.length < text2.length){
    return text2;
    }else {
    return null;
    }
    }
    
    const promptGetLonger = () => {
    let te1 = prompt('please write something');
    let te2 = prompt('please write more');
    alert(getLonger(te1, te2));
    } 

    let myText = 'hello world';
    console.log(myText[10]);

