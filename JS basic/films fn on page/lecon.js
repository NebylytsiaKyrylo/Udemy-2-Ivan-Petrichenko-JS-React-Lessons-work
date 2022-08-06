'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt(
      'How many movies have you seen?',
      '',
    ).trim();

    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('How many movies have you seen?', '');
    }
  },
  questionsFn: function () {
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
  },
  yourLevelOfKinoman: function () {
    if (personalMovieDB.count < 10) {
      console.log('Not much films');
    } else if (personalMovieDB.count >= 10 || personalMovieDB <= 30) {
      console.log('Normal count films');
    } else if (personalMovieDB.count > 30) {
      console.log('Kinoman');
    } else {
      console.log('Error');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your favorite movie genre number ${i}`, '');

      if (genre === '' || genre == null) {
        console.log('You entered incorrect data, try again, please');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((genre, i) =>
        console.log(`Your favorite movie genre ${i + 1} - ${genre}`),
      );
  },
};

console.log(personalMovieDB);
