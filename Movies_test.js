// Tasks:

// Loop through all movies and print this for each:
// <Movie Name> (Year: <Year>) has a rating of <Rating>
// Add a director property:
// If year ≤ 2022 → "Sam"
// If year > 2022 → "John"
// Add a genre property:
// If rating ≥ 9 → "TopRated"
// Else → "Average"
// Make a new array FavoriteMovies containing only the names of movies with rating ≥ 9.
// Find the movie with the highest rating and print:
// <Movie Name> is the highest rated movie with rating <Rating></Rating>

console.clear();

let Movies = [
    { name: "Avengers", rating: 9.5, Year: 2022 },
    { name: "Squid Game 3", rating: 10, Year: 2025 },
    { name: "Conjuring", rating: 8, Year: 2019 },
    { name: "Joker", rating: 9, Year: 2018 },
    { name: "Inception", rating: 8.5, Year: 2010 }
];

let OPrating = 0;
let index = "";

let FavoriteMovies = [];

for (i = 0; i < Movies.length; i++) {
    console.log(Movies[i]);
    if (Movies[i].Year <= 2022)
        Movies[i].director = "Sam";
    else
        Movies[i].director = "John";
}

for (i = 0; i < Movies.length; i++) {
    if (Movies[i].rating >= 9) {
        Movies[i].genre = "TopRated";
        FavoriteMovies.push(Movies[i].name);
    }
    else {
        Movies[i].genre = "Average";
    }
}

console.log(Movies);

for (let i = 0; i < Movies.length; i++) {
    if (Movies[i].rating > OPrating) {
        OPrating = Movies[i].rating;
        index = Movies[i].name;
    }
}
console.log(index + " has the highest rating of " + OPrating + "/10");

console.log(FavoriteMovies);





