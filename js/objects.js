//Objects

let firstObject = new Object();
console.log(firstObject);

let person = {
    name: 'Nik', 
    hobby: 'Cooking',
    car: 'Transit',
    age: 44,
    moved: 98,
    married: true,
    kids: true,
    'key pair can be a string': 'value can be a string or another type as well',
    'likes running': false,
    array: ['array1', 'array2', 'array3'],
    pet: {   //objects can contain objects as well
        type: 'turtle',
        name: 'Donatello',
        age: 15,
        'is ninja': true,
    }
}

console.log(person.car);

console.log(person.name + ' ' + person.age);  //<-- how does this work?
console.log(person.pet);
delete person.hobby;
console.log(person);

// for (let key in person) {
//     console.log('key value: ', key);
//     console.log('this key value is', person[key]);
// }

//create a for loop that iterates through the animal array & console logs each animal name
let tmnt = [
    {
        name: 'Leo',
        type: 'turtle',
        age: '15', 
        color: 'blue',
    },
    {
        name: 'Mickey',
        type: 'turtle',
        age: '15', 
        color: 'orange',
    },
    {
        name: 'Raph',
        type: 'turtle',
        age: '15', 
        color: 'red',
    },
    {
        name: 'Donny',
        type: 'turtle',
        age: '15', 
        color: 'purple',
    }
]

//array.forEach
tmnt.forEach(identify => console.log(identify.name));

//array.map (creates an array)
let maskColor = tmnt.map((mask) => {
    return mask.color;
}) 
console.log(maskColor)

//array.filter
let masks = tmnt.filter(size => {
    //debugger;
    if (size.color.length > 5) {
    return size;
    }
});
console.log(masks);


// for (let key in tmnt) {
//     console.log(tmnt[key].name);
// }

// for (let i = 0; i < tmnt.length; i++) { 
//     console.log(tmnt[i].name);
// }