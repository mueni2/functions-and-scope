const run = () => {
    sum(3);
    salute();
    salute('Essence');
}
const sum = (number1 = 0, number2 = 0) => {
    console.log(number1 + number2);
}
const salute = (name = 'Alien') => {
    alert(`Hi ${name}`);
}
//Recursive Functions
const countDown = (startingNumber) => {
//startingNumber = startingNumber -1;
console.log(startingNumber);
startingNumber--;
if (startingNumber >= 0) {
    countDown(startingNumber)
}
}
countDown(10);

//Rest params

const listMyGarage = (car1, car2,...others) => {
    console.log(car1,car2,others);
}
listMyGarage('BMW','MERCEDES','PORSCHE','FERRARI','BUGATTI')