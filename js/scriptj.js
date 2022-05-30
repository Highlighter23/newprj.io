"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


/* const isChecked = true,
      isClosed = false;
      console.log(isChecked && !isClosed); */

/* const category = 'toys';
console.log(`https://someurl.com/${category}/5`) */
/* const user = 'Andrii';

alert (`Привіт, ${user}`); */
/* const storeName = 'Papashon';
const storeDescription = {
    budget:10000,
    employees:['Charles', 'Khabib', 'Justin'],
    products:{
        iphone:900,
        samsung:800
    },
    open: true
}; */
/* const answers = [];
answers[0] = prompt('Your name?', '');
answers[1] = prompt('Your age?', '');
answers[2] = prompt('Your phone?', '');
document.write(answers);
 */