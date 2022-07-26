'use strict';

const numberOfFilms = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt('One of the last movies seen?', ''),
    b = prompt('How much would you rate him?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Not much films');
} else if (personalMovieDB.count >= 10 || personalMovieDB <= 30) {
  console.log('Normal count films');
} else if (personalMovieDB.count > 30) {
  console.log('Kinoman');
} else {
  console.log('Error');
}

console.log(personalMovieDB);
