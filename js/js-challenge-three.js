//Challenges begin on line 90.  All the rest is my notes.

/*let value1 = 35;
let value2 = 45;

console.log('Does value 1 equal value 2', value1 === value2);

Logical and &&
console.log(value1 > value2 && value1 !== value2);

Logical or ||
console.log(value1 > value2 || value1 !== value2);

Combined logic tests
    'Combining results'
console.log(
    (value1 > value2 || value1 !== value2) && value2 > value1
    );

let a = 10, 
    b = 20;
if (a > b) {
    console.log('a is greater than b');
} else if (a < b) {
    console.log('a is less than b');
} else { //Last else just has a result, no test.
    console.log('a is equal to b');
}
*/
//For loop counter



//If/then
/*
let age = 19;
let canDrive;
if (age > 16) {
    canDrive = 'yes';
} else {
    canDrive = 'no';
}

In this example, you can use the ternary operator as the shortcut for the if-else statement as follows:
condition ? expression_1 : expression_2;
let age = 19;
let canDrive = age > 16 ? 'yes' : 'no';



let myName = 'Nik Callaway'
const greet = 'Welcome to Javascript, '

const fullmsg = greet + myName;

alert(greet + myName);

let number1 = 5;
let number2 = 10;
let number3 = 15;
let number4 = 20;
let number5 = 25;
let number6 = 30;
console.log (number1 + number2 + number3 + number4 + number5 + number6)
console.log ((number1 + number2 + number3) * number4) 

Switch statements replace multiple else-if statements

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

Functions
function showMessage() { 
    let message = "Hello, I'm JavaScript!"; // local variable
    alert( message );
  }
  
  showMessage(); // You have to call the function for it to work
*/

//Challenge 1
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

//Challenge 2
// const welmsg = () => {
// let firstName = 'Nakia';
// let lastName = 'Callaway';
// fullName(firstName, lastName)
// }

// const fullName = (arg1, arg2) => {
//     alert('Welcome '+ arg1 + ' ' + arg2);
// }
  
// welmsg()

//Challenge 3  
const howOld = ()=> {
  let userAge = prompt("Hi, how old are you?");
   //if the prompt is over 13
  if (userAge > 13 ) alert("You are okay to enter.") 
  //if the prompt is under 13
  else alert("Come back when you're older.")
}
//debugger
//howOld();

//Challenge 4
const temp = () => {
  let celsius = 24.2;
  console.log('it is', celsius * 1.8 + 32, 'degrees outside. Do you think that is too hot?');
  }
//debugger  
temp();

//Challenge 5
const guessNum = ()=> {
  let numAnswer = '7';
  for (let i = 0; i <= 2; i++) {
    let numGuess = prompt("Pick a number!");
    if (numGuess != numAnswer) {
      alert('Wrong guess this time, try again!');
    }
    else {
      alert('You guessed it!');
      break;
    }
    if (i === 2) alert("That was your last guess!")
  }
}


//Challenge 4 - Augmented
const convTemp = ()=> {
  let startTemp = prompt("What's the temperature in Celcius?");
  let adjTemp = startTemp * 1.8 + 32;
  let finishTemp = adjTemp.toFixed(1);
  alert('It is '+ finishTemp + ' degrees in Fahrenheit outside. Do you think that is too hot?');
}


//Challenge 4 - reversed
const revTemp = ()=> {
  let startRevTemp = prompt("What's the temperature in Fahrenheit?");
  let adjRevTemp = (startRevTemp - 32) * .5556;
  let finishRevTemp = adjRevTemp.toFixed(1);
  alert('It is '+ finishRevTemp + ' degrees in Celcius outside. Do you think that is too hot?');
}

