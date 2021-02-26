//string methods
let firstString = '    Good morning world.      ';
console.log(firstString);

let measureString = firstString.length;

console.log(measureString);
console.log(firstString.indexOf('morning')); //Index of to find locate position
console.log(firstString.trim());
console.log(firstString.toUpperCase());
console.log(firstString.toLowerCase());

console.log(firstString.substring(9, 16));
let hedged = firstString.trim();
console.log(hedged.split(' '));
console.log(firstString.trim().split(' '));

//Arrays

let firstArray = new Array(1, 2, 3, 4);
console.log(firstArray);

let betterArray = [5, 10, 15, 20, 25];
console.log(betterArray);

let yummy = ['Coq au vin', 'Sloppy Joes', 'Meatloaf', 'BBQ'];
console.log(yummy);

console.log('What is the fanciest food you make? ', yummy[0]);

yummy.push('Street tacos', 'Apricot Sriacha Stir Fry');
console.log(yummy);

yummy.pop();
yummy.pop();

console.log(yummy);

yummy.unshift('Cereal', 'Tacos'); //unshift adds to the begining, shift removes the first item.
console.log(yummy);
console.log(yummy.length);

for (let i = 2; i <= 4; i++) {
    console.log(yummy[i]);
}
console.log(yummy);

yummy.push('Samich', 'Omelette', 'Apple Pie');

for (let i = 0; i < yummy.length; i++) {
    console.log(yummy[i]);
}
console.log(yummy);

//Create an array of your top 5 favorite movies
//create a loop that console.logs each of those movies.
let faveMovies = ['Godzilla', 'Pacific Rim', 'I am Legend', 'Godzilla: King of Monsters', 'Pacific Rim 2'];
for (let i = 0; i < faveMovies.length; i++) {
    console.log(faveMovies[i].toUpperCase());
}

let testResults = 4 + 23

let mixedArray = [34, 'test', testResults, 'good', yummy];
console.log(mixedArray);