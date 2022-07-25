/* Assignment to the lesson:
1) Create the numberOfFilms variable and place the user answer to the question:
'How many movies have you seen? '
2) Create a personalMovieDB object and place the following properties in it:
    - count - here is the answer to the first question
    - movies - place an empty object in this property
    - actors - also place an empty object
    - genres - place an empty array here
    - privat - place boolean(logical) value false in this property
3) Ask the user twice:
    - 'One of the last movies seen? '
    - 'How much would you rate him? '
The answers should be placed in separate variables
Write your answers to a movie object in the following format:
    movies: {
        'logan': '8.1'
    }
*/

'use strict';

const numberOfFilms = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('One of the last movies seen?', ''),
  b = prompt('How much would you rate him?', ''),
  c = prompt('One of the last movies seen?', ''),
  d = prompt('How much would you rate him?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
