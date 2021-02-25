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
  alert('It is '+ finishRevTemp + ' degrees in Celcius outside. Sounds cold, even if it is not');
}

