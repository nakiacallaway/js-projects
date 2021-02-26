//Number guessing game version 2
const guessNum = ()=> {
  let numAnswer = 7;
  for (let i = 0; i <= 2; i++) {
    let numGuess = prompt("Pick a number!");
    let provenNum = verifyNum(numGuess);
    if (provenNum) {
        alert('Please use a number.');
    }
    else if (numGuess != numAnswer) {
      alert('Wrong guess this time, try again!');
    }
    else {
      alert('You guessed it!');
      break;
    }
    if (i === 2) alert("That was your last guess!")
  }
};

const verifyNum = (numGuess) => {
  return isNaN(numGuess);
  
};  