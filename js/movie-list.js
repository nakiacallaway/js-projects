/*
Daily Coding Challenge: Movie List Challenge
1. Create an array of objects of your 5 favorite movies
    a. Each movie object should have the following properties:
    title, 
    year, 
    genre, 
    description, 
    imdbRating
    */
let movies = [
    {
        title: 'Godzilla',
        year: '2014',
        genre: 'Action, Adventure, & Sci-Fi', 
        description: 'The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.',
        imdb: '6.4/10',
    },
    {
        title: 'Pacific Rim',
        year: '2013',
        genre: 'Action, Adventure, & Sci-Fi', 
        description: 'As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.',
        imdb: '6.9/10',
    },
    {
        title: 'Avengers: Endgame',
        year: '2019',
        genre: 'Action, Adventure, & Drama', 
        description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
        imdb: '8.4/10',
    },
    {
        title: 'Star Trek: Into Darkness',
        year: '2013',
        genre: 'Action, Adventure, & Sci-Fi', 
        description: 'After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.',
        imdb: '7.7/10',
    },
    {
        title: 'The Nightmare Before Christmas',
        year: '1993',
        genre: 'Animation, Family, & Fantasy', 
        description: 'Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.',
        imdb: '8.0/10',
    },
]
/*  b. Create a function that when called loops through your array and console.logs
    the details for each of your movies */

    // movies.forEach((movie) => {
    //     console.log(`${movie.title} was made in ${movie.year}.  It received a rating of ${movie.imdb} on IMDB in the genres of ${movie.genre}, with the following description: ${movie.description}`);
    // });

    /*
    c. Create a function that will find a movie by it's title 
    and then console.logs the details of the movie. 
    The function should take a movieTitle parameter that lets you search by different titles.
*/
let name = prompt("What movie would you like to know about?");
const jaeger = movies.find(name => {
    return name;
});
console.log(jaeger);  //This doesn't work yet, it returns the first movie in the list.



//const searchTitle = ()=> {
//     if (moviePick == ); 
//     console.log(movies.title);
// };
// searchTitle();



// const laptop = movies.find(name => {
//     return name.title === 'Pacific Rim';
// });
// console.log(laptop);
