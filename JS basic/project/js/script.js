'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    promoGenre = poster.querySelector('.promo__genre'),
    promoListFilms = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

      if (newFilm.length > 21) {
        newFilm = `${newFilm.slice(0, 21)}...`;
      }

      if (favorite) {
        console.log('Add favorite film');
      }

      movieDB.movies.push(newFilm);
      sortFilms(movieDB.movies);
      createMoviesList(movieDB.movies, promoListFilms);
    }

    event.target.reset();
  });

  //remove adv
  const delAdv = (arr) => arr.forEach((el) => el.remove());

  //change genre
  const changePromoGenre = (genreFilm) => (promoGenre.textContent = genreFilm);

  //change bg image poster
  const changeBgPoster = (urlImage) =>
    (poster.style.backgroundImage = `url(${urlImage})`);

  // sort BD movies fn
  const sortFilms = (arr) => arr.sort();

  //add dynamic BD movies to html file
  function createMoviesList(films, parent) {
    parent.innerHTML = ''; // delete list films

    sortFilms(movieDB.movies);

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">
          ${i + 1}. ${film}
          <div class="delete"></div>
        </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMoviesList(films, parent);
      });
    });
  }

  delAdv(adv);
  changePromoGenre('Драма');
  changeBgPoster('img/bg.jpg');
  createMoviesList(movieDB.movies, promoListFilms);
});
