console.clear();

let movies = ["Avengers", "Inception", "Interstellar", "Joker"];
let ratings = [9, 8, 10, 9, 7];

maxarr = Math.max(...ratings)

let minarr = Math.min(movies.length, ratings.length);

for (let i = 0; i < minarr; i++) {
  console.log(movies[i] + " has a rating of " + ratings[i]);
}

// console.log(maxarr);

let index = ratings.indexOf(maxarr);

// console.log(index)

console.log(movies[index] + " is the movie with the highest rating " + maxarr);