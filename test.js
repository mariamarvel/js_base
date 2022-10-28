"use strict";

alert("Всё работает");
// let a = 5;
// let b = a;
// // a = 3;
// alert(b);

// let message_number = 100n; //bigint

// let rate = 14.5;
// alert(`Текущий курс равен ${rate}`)

// alert(`1 + 2 = ${1+2}`)


// let isRed = true;
// alert(4>1);

// const COLOR_RED = "#FF0000"; //в шестнадцатиричном формате 0 1 2.... 9 A B C D
 
let message = "Нам важен каждый отзыв";
//или let message;
//message= "Нам важен каждый отзыв";

// однострочный вариант записи переменных
let name = 'Ivan', age = 30, gender = 'male';


// многострочный вариант записи переменных
let names = 'Ivan';
    ages = 30;
    genders = 'male';

let name2 = 'Ivan';
let age2 = 30;
let gender2 = 'male';




 name2 = 'Misha';
alert(message); //!!!! не появляются в окошке на странице, только alert("Всё работает"); alert(a), а если убрать "use strict", то всё работает
alert(name2);


// //alert(1); //выведет в браузер окно с подтверждением действия и 1, чтоб страница прогрузилась
// //  const a = 1;
//    const rate = 14.3;





//Домашнее задание от 25.10
//Работа с переменными: Объявите перемнные admin и name.  
//Запишите строку "John" в переменную name. Скопируйте значение переменной name в переменную admin. Выведите результат на экран с помощью alert

// let admin;
// let name = "John";
// admin = name;
// alert(admin)

// let name = "Anton";

alert(`Hi ${1}`) // сложение строки Hi и числа 1

alert(`Hi ${"name"}`) // сложение строки Hi и строки name

alert(`Hi ${name}`) // сложение строки Hi и переменной name со значением Anton