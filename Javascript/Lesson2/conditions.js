//let n = +prompt("Введите число:");
//let m = +prompt("Введите значение степени:");

/* Пример 1.
if(n == 0) {
    alert("Результат операции равен 0");
}

if(n == 1) {
    alert("Результат операции равен 1")
}

if(n > 1) {
    let result = n ** m;

    alert(`Результат операции равен ${result}`);
}*/

/* Как записать Пример 1 проще:
if(n == 0){
    alert("Результат операции равен 0")
} else if(n == 1){
    alert("Результат операции равен 1");
} else if(n == 2){
    alert("Не могу вычислить результат");
} else {
    let result = n ** m;
    alert(`Результат операции равен ${result}`)
}*/

/* Пример 2. 
if(n >= 0) {
    let result = n ** m;
    
    alert(`Результат операции равен ${result}`);   
} else {
    alert(`Вы ввели отрицательное число`);
}*/
/*Операторы сравнения:*/
//alert(1 > 2); /*- false*/
//alert(1 == 1); /*- true*/
//alert('1' == 1); /*- true - приводит строку к числу и будет true, т.к. 1=1, если бы стояло 11=1, то было бы false*/
//alert('1' === 1); /*- при строгом соответствии преобразование не происходит, поэтому будет false*/

//let a = null;

//alert(a == 0); /*- false*/
//alert(a <= 0); /*- true*/ 
/* Пример 3.
alert("Неверное число, число должно попадать в диапазон от 5 до 10")*/

/* Пример 4. 
let a = true;
let b = false;
alert(!a)

if(n >= 5 && n <= 10 && n != 4) {
    if(m <= 2 || m >= 4) {
        let result = n ** m;
        alert(`Результат операции равен ${result}`;
    }
}*/
/* Пример 5.
let a = 10;
let b = !a;

console. log(b);

if(a != 'undefined'){
    alert('Ура, неопределенности нет');
}*/
/* Практическая работа 1*/
/*let a = prompt("Какое официальное название JS?");
if(a == 'ECMAScript'){
    alert("Верно!")
} else if(a == 'Другое'){
    alert("Не знаете? ECMAScript!")
}*/
/* Практическая работа 2*/
//Пример 1.
/*let num = 4;

if(num == 0) {
    console.log(0);
} else if(num > 0){
    console.log(1);
} else {
    console.log(-1);
}*/
//Пример 2.
/*let mm = 5;

if(mm > 0) {
    console.log("Число положительное");
} else {
    console.log("Число отрицательное");
}*/
/*Task1.*/
let age = 58;
/* Вариант 1.
if(age > 0 && age <= 120) {
    console.log("Возраст верный")
} else {
    console.log("Возраст неверный")
}*/
/* Вариант 2.
if(age <= 0 || age >= 120){
    console.log("Возраст неверный")
}*/
/*Task 2 Вывести модуль числа. Модуль - всегда положительное число.*/ 
/*let num = -55;

if(num < 0) {
    num = -num
}

console.log(num);*/
/*Task 3*/
/*console.log('Task 4');

let a = 1;
console.log(a++);*/

/*Task 4*/
/*let hours = 32;
let minutes = 44;
let seconds = 36;

if( (hours < 0 || hours > 24) || (minutes < 0 || minutes > 60) || (seconds < 0 || seconds > 60) ) {
    console.log('Данные введены неверно');
}*/
/*Task 5.Запросить у пользователя номер месяца и вывести на экран его значение*/
/*let month = 5;

switch(month){
    case 1:
        console.log('Январь');
    break;
    case 2:
        console.log('Февраль');
    break;
    case 3:
        console.log('Март');
    break;
    default:
        console.log('Месяц не определен');
}*/
    /*и т.д. до Декабря. Если нашел нужый вариант - завершает свою работу. Если параментра нет ничего, то выведется то, что в default. Между case и break - можно записать сколько угодно условий. Switch - используется, чтобы не применялось постоянное сравнение if. В case могут быть записаны и строки.*/
/* Либо можно писать:
if month == 1 {
    console.log ('Январь');
}*/
/*Task 6* Есть два числа и знак. Реализуйте калькулятор./
let num1 = 21;
let num2 = 4;
let action = '*';

switch(action) {
    case '+':
        console.log(num1 + num2);
    break;
    case '-':
        console.log(num1 - num2);
    break;
    case '*':
        console.log(num1 * num2);
    break;
    case '/':
        console.log(num1 / num2);
    break;
    default:
        console.log('Такая операция не поддерживается');
}
