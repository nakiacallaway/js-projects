//Challenge 1
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

//Challenge 2
const welmsg = () => {
let firstName = 'Nakia';
let lastName = 'Callaway';
fullName(firstName, lastName)
}

const fullName = (arg1, arg2) => {
    alert('Welcome '+ arg1 + ' ' + arg2);
}
  
welmsg()

//Challenge 3  
const howOld = ()=> {
  let userAge = prompt("Hi, how old are you?");
  //if the prompt is over 13
  if (userAge > 13 ) alert("You are okay to enter.") 
  //if the prompt is under 13
  else alert("Come back when you're older.")
}
//debugger
howOld();

//Challenge 4
const temp = () => {
  let celsius = 24.2;
  console.log('it is', celsius * 1.8 + 32, 'degrees outside. Do you think that is too hot?');
  }
//debugger  
temp();

//Challenge 5
const guessNum = ()=> {
  let numGuess = prompt("Pick a number!");
  let numAnswer = '7';
if (numGuess != numAnswer) {
  alert('Wrong guess this time, try again!');
  guessNum();
  return;
}

else {
  alert('You guessed it!');
}
}