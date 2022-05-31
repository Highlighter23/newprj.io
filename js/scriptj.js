"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

          if(a !=null && b!=null && a!='' && b !='' && a.length<50) {
          personalMovieDB.movies[a] = b;   
            console.log('done');
        }  else {
            console.log('error');
            i--;
        }
}
if (personalMovieDB.count < 10) {
    console.log('Просмотрено двольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель!');
}
else if(personalMovieDB.count > 30) {
    console.log('Вы - киноман!');
}
else{
    console.log('Произошла ошибка'); }
/* }
/* function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask() */


/* console.log(personalMovieDB); */

/* for (let i =2; i<=16; i++) {
    if (i%2 === 0) {continue}
    else {console.log(i)};
} */

/* let i = 2;
while (i<=16) {
    if (i%2 === 0) {i++;
    continue} else{
        console.log(i);
    }
    i++;
}
 */

/* 
first: for (let i = 1; i<3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 1; j<3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 1; k<3; k++) {
            if(k===2) continue first
            console.log(`Third level: ${k}`);
}}} */
/* for(let i=2; i<=10;i+=2){
    console.log(i);
}

 */
/* stop :for (let d=20; d--) {
    if (d==10) break stop;
    console.log(d);
     */
/* }; */
/* for (let i = 5; i<= 10; i++) {
    console.log(i);}
     */
/* const num = 50;
switch(num) {
    case 49:
        console.log('Wrong!');
        break;
        case 56:
        console.log('Wrong!');
        break;
        case 50:
        console.log('Good!');
        break;
        default:
        console.log('Try next time!');
        break;

}; */

/* let result = '';
const length = 7;
console.log(result);
for (let i = 1; i< length; i++) {
    for (let j = 0 ; j < i; j++) {
    result += '*'; }

    result+= '\n';
}
console.log(result); */

/* let nums = 50;

while (nums<550) {

console.log(nums);

nums++;

}

 */



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