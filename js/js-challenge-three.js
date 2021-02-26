
// === Create a simple calculator app ===
// 1. On your web page, add a button that triggers a confirm
// asking the user if they would like to calculate two numbers

const calcStart = () => {
  if (confirm("Would you like to calculate something?")) {
    let input1 = parseInt(prompt('Enter first number: '));
    let input2 = parseInt(prompt('Enter second number: '));
    let calcType = prompt('What type of operator would you like to use?');
    let answer = calcResult(input1, input2, calcType)
    alert(answer);
  }
}
const calcResult = (input1, input2, calcType) => {
  let result = 0; 
  switch (calcType) {
    case 'add': 
    result = input1 + input2;
    break; 
    case 'subtract': 
    result = input1 - input2;
    break; 
    case 'multiply': 
    result = input1 * input2;
    break; 
    case 'divide': 
    result = input1 / input2;
    break; 
  }
  return result;
}


// 2. if they confirm it should then trigger a prompt
// that asks if they would like to 'add', 'subtract', 'multiply' or 'divide' the two values
function calcAdd(){
  let input1 = prompt("What is the first number you'd like to calculate?");
  let input2 = prompt("What is the second number you'd like to calculate?");
  let result = input1 + input2;
  alert('Your result is ', result)
};
function calcSubtract(){
  let subInput1 = prompt("What is the first number you'd like to calculate?");
  let subInput2 = prompt("What is the second number you'd like to calculate?");
  let subResult = subInput1 - subInput2;
  alert('Your result is ', subResult)

}
function calcMultiply(){
  let multInput1 = prompt("What is the first number you'd like to calculate?");
  let multInput2 = prompt("What is the second number you'd like to calculate?");
  let multResult = multInput1 * multInput2;
  alert('Your result is ', multResult)

}
function calcDivide(){
  let divInput1 = prompt("What is the first number you'd like to calculate?");
  let divInput2 = prompt("What is the second number you'd like to calculate?");
  let divResult = divInput1 / divInput2;
  alert('Your result is ', divResult)

}
// then trigger prompts that asks for the number values


// And finally an alert that lets the user know the result of their values


// Create a js-challenge-three.html and js-challenge-three.js file and submit to github when you are done

// Aside: Create separate functions to run different tasks. And feel free to make your code as dynamic and efficient as you see fit

