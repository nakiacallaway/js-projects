console.log(window);

let mainHeading = document.getElementById('main-heading');
console.log(mainHeading);

//getElementByClassName  Multiple results, gets everything, returns HTMLCollection

let rowClasses = document.getElementsByClassName('row');
console.log(rowClasses);

let divTags = document.getElementsByTagName('div');
console.log(divTags);

let divCon = document.querySelector('.container');
console.log(divCon);

// querySelector '.class' '#ID' 'element' singular, gets just the result
// querySelectorAll gets multiple, returns node list
//better


