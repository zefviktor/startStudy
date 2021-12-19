/* Задание на урок:
//********** 12. Практика, ч.1. Начинаем создавать приложение* **************************


1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// 'use strict';
// //1
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
// console.log(numberOfFilms);
// //2
// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privar : false
// };
// //3
// const   a = prompt('Один из последних просмотренных фильмов?',''),
//         b = prompt('На сколько оцените его?',''),
//         c = prompt('Один из последних просмотренных фильмов?',''),
//         d = prompt('На сколько оцените его?','');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);



/* Задание на урок: 
//********** 15. Практика, ч2. Применяем условия и циклы **************************


1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания
    

//  'use strict';
// //1
// const numberOfFilms = +promot('Сколько фильмов вы уже посмотрели','')

// const personalMovieDB = {
//     count : '',
//     movies : {},
//     actors : {},
//     genres : [],
//     privar : false
// };

// for (let i = 0; i < 2; i++){
//     const   a = prompt('Один из последних просмотренных фильмов?',''),
//             b = prompt('На сколько оцените его?','');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }

// if (personalMovieDB.count <=10){
//     console.log("Просмотрено довольно мало фильмов");
// } else if (10 < personalMovieDB.count < 30){
//     console.log("Вы классический зритель");
// } else if(personalMovieDB.count >= 30){
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

// let i = 0;
// while (i < 2){
//     const   a = prompt('Один из последних просмотренных фильмов?',''),
//             b = prompt('На сколько оцените его?','');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

// let i = 0;
// do {
//     const   a = prompt('Один из последних просмотренных фильмов?',''),
//             b = prompt('На сколько оцените его?','');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i < 2);


/* Задание на урок:
//********** 18. Практика , ч3. Используем функции **************************


1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// 'use strict';

// Код возьмите из предыдущего домашнего задания
// let numberOfFilms;
// function start (){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false
// };

// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++){
//         const   a = prompt('Один из последних просмотренных фильмов?',''),
//                 b = prompt('На сколько оцените его?','');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10){
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count <= 10 || personalMovieDB.count < 30){
//         console.log("Вы классический зритель");
//     } else if(personalMovieDB.count >= 30){
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     for (let i = 1; i <= 3; i++){
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
//     }
// }

// writeYourGenres();

/* Задание на урок:
********** 24. Практика , ч4. Используем объекты **************************

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// 'use strict';

// const personalMovieDB = {
//     count : 0,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false,
//     start: function (){
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function(){
//         for (let i = 0; i < 2; i++){
//             const   a = prompt('Один из последних просмотренных фильмов?',''),
//                     b = prompt('На сколько оцените его?','');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function(){
//         if (personalMovieDB.count < 10){
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count <= 10 || personalMovieDB.count < 30){
//             console.log("Вы классический зритель");
//         } else if(personalMovieDB.count >= 30){
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden){
//         if(!hidden){
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function(){
//         if(personalMovieDB.privat){
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//             personalMovieDB.showMyDB();
//         }
//     },
//     writeYourGenres: function(){
//         for (let i = 1; i <= 3; i++){
//             let gener = prompt(`Ваш любимый жанр под номером ${i}`,'');

//             if (gener != null && gener != ''){
//                 personalMovieDB.genres[i-1] = gener;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         } 
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i+1} - это ${item}`);
//             i++;
//         });
       
//     } 
// };

// 27. Задачи с собеседований на понимание основ

// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?
// •	Чему равно такое выражение: [ ] + false - null + true ?
// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// •	Чему равна сумма [ ] + 1 + 2?
// •	Что выведет этот код: alert( "1"[0] )?
// •	Чему равно 2 && 1 && null && 0 && undefined ?
// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// •	Что выведет этот код: alert( +"Infinity" ); ?
// •	Верно ли сравнение: "Ёжик" > "яблоко"?
// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?

function number1 (){
    let x = 5;
    console.log( `Ответ ${x++} & ${++x}`);
}
number1(); // x=5  & x=7 

function number2 (){
    console.log([ ] + false - null + true);
} 
number2(); //NaN

function number3 (){
    let y = 1;
    let x = y = 2; 
    console.log(x);
}
number3();

function number4 (){
    console.log([ ] + 1 + 2);
}
number4(); //NaN


function number5 (){
    console.log("1"[0]);
}
number5(); //1

function number6 (){
    console.log(2 && 1 && null && 0 && undefined);
}
number6(); //null

// number7	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

function number8 (){
  console.log(( null || 2 && 3 || 4));
}
number8(); //3



function number9 (){
    const a = [1, 2, 3],
          b = [1, 2, 3];
          
  console.log(a == b);
}
number9(); //false

function number10 (){
    console.log(+"Infinity" );
  }
  number10(); //Infinity

  function number11 (){
      const rrr = "Ёжик" > "яблоко";
    console.log(rrr);
  }
  number11(); //false

  function number12 (){
    console.log( 0 || "" || 2 || undefined || true || falsе );
  }
  number12(); //2