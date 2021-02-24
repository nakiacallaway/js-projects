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
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
 }


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
const welmsg = () => {
let firstName = 'Nakia';
let lastName = 'Callaway';
fullName(firstName, lastName)
}

const fullName = (arg1, arg2) => {
    alert('Welcome '+ arg1 + ' ' + arg2);
}
  
  welmsg()

  