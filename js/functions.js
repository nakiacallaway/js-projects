/* Day 3 - Functions

function functionName () {
    let var1 = 'text';
    let var2 = 'more text';
    let combined1 = var1 + var2;

    console.log('text', combined1);
}

functionName(); //call function

function otherFunction (arg1, arg2) {
    let product1 = arg1 * arg2;

    console.log('text', product1);
}

functionName(); //call function

// // Arrow Fuctions
// const arrowFuctionName = () => {
//     // () <- variables
//     // {} <- instructions
//   for (let i = 1; /*Starting point*/  //i <= 100; /*Ending point*/ i += 2) /*behavior*/ {
//   console.log(i); //output location
// };
// arrowFuctionName(); //call function 


//text popup
const favAnimal = () => {
    let name1 = 'mantis';
    let name2 = 'shrimp';
    let msgTxt = 'My favorite animal is the ';

    let displayMsg = msgTxt + name1 + ' ' + name2 + '.';

    alert(displayMsg)
}

//popup interface
const askReply = ()=> {
    let user = prompt("Hi, what's your name?");

    alert('Welcome, ' +user);
}

askReply();

