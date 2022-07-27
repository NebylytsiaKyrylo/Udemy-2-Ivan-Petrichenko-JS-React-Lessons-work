'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many movies have you seen?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies have you seen?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function questionsFn() {
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
}

// questionsFn();

function yourLevelOfKinoman() {
  if (personalMovieDB.count < 10) {
    console.log('Not much films');
  } else if (personalMovieDB.count >= 10 || personalMovieDB <= 30) {
    console.log('Normal count films');
  } else if (personalMovieDB.count > 30) {
    console.log('Kinoman');
  } else {
    console.log('Error');
  }
}

// yourLevelOfKinoman();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres.push(prompt(`Your favorite movie genre number ${i}`, ''));
  }
}

writeYourGenres();

console.log(personalMovieDB);
