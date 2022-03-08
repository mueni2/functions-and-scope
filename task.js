//task 1
/* function multiply(x,y) {
    let total = x * y;
    console.log(total);
}
multiply(3,4)  */

//task 2
/* let multiply = function (x,y) {
    console.log(x*y);
}
multiply(4,2) */

//task 3
/* const multiply = (x,y) => console.log(x,y);
multiply(5,2) */

//task 4
function remainderOfDivision(x,y) {
    console.log(x % y);
} 
remainderOfDivision(6,3)
//as a value
remainderOfDivision = function (x,y) {
    console.log(x % y);
}
remainderOfDivision(6,3)
//arrow function
const remainderOfDivision = (x,y) => console.log( x % y);
remainderOfDivision(6,3)
//function scope task
//task 1
/* function toPower(a,b) {

    let power;
    for (let i = 1; i <= b;i++) {
        power = a**i;
        console.log(power);
    }
}
toPower(2,3); */
//task 2
/* let Fruit = 'apple';
function printFavoriteFruit() {
   Fruit = 'kiwi'
  console.log(`My favorite Fruit is ${Fruit} :`);
}
printFavoriteFruit() */

//task 3
/* const exponent = function (a,b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = result*b
    }
    return result
}
console.log(exponent(3,4)); */