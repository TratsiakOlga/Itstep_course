//Test1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них
//1-й способ:
function number(a, b){
    if (a < b){
    return a;
    } else{
        return b;
    }
}

console.log(number(68,202));
console.log('*****')
//2-й способ:
function numbers(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

console.log(numbers(12,58));
console.log('*****')
//Test2. Написать функцию, которая возводит переданное число в указанную степень.
function stepen(number1,number2){
    return number1 ** number2;
}
console.log(stepen(12,2))
console.log('*****')
//Test3.Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.
function result(nomer1,nomer2,znak){
    switch (znak){
        case '+':
            return nomer1 + nomer2;
        case '-':
            return nomer1 - nomer2;
        case '*':
            return nomer1 * nomer2;
        case '/':
            if (nomer2 === 0){
                return "Ошибка, деление на 0"
            }
            return nomer1 / nomer2;
        default:
            return "Неверный оператор";
    }
}

console.log(result(11,12,'*'));
console.log(result(99,3,'/'));
console.log(result(121,152,'+'));
console.log(result(151,12,'-'));
console.log('*****')
//Test4. Написать функцию, которая проверяет, является ли переданное ей число простым.
function PrimeNumber(num) {
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  } 
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(`Число 7 является простым числом? ${PrimeNumber(7)}`);
console.log(`Число 15 является простым числом? ${PrimeNumber(15)}`);
console.log(`Число 25 является простым числом? ${PrimeNumber(25)}`);
console.log(`Число 13 является простым числом? ${PrimeNumber(13)}`);
console.log(`Число 53 является простым числом? ${PrimeNumber(53)}`);
console.log('*****')
//Test5. Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.
function multiplicationTable (number5) {
console.log(`Таблица умножения для числа ${number5}:`);
  for (let i5 = 1; i5 <= 10; i5++) {
    console.log(`${number5} * ${i5} = ${number5 * i5}`);
  }
  console.log('\n');
};

let number5 = +prompt('Введите число от 1 до 10:    ')
multiplicationTable(number5)
/* Если хотим, чтобы отобразилась вся таблица умножения от 2 до 10:
for (let i5 = 2; i5 <= 9; i5++) {
  multiplicationTable(i5);
}*/
console.log('*****')
//Test6. Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать. 
function remaider(c, d) {
  if (d === 0){
    return "Ошибка!!! Деление на ноль не возможно!"
  }

  let integerPart = Math.floor (c / d);

  let chislo = integerPart * d;
  let resultat = c - chislo;
  
  return resultat;
}
  console.log(remaider(18,5));
  console.log(remaider(1,9));
  console.log(remaider(81,27));
  console.log(remaider(8,0));
  console.log(remaider(21,8));
  console.log('*****')
//Test7.Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.
//Справочно!!! Буду использовать оператор ...rest, который собирает аргументы в массив.
function chisla (...numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum +=numbers[i];
  }
return sum;
}

console.log(chisla(18,5));
console.log(chisla(18,5,56,8,6));
console.log(chisla(18,5,7));
console.log(chisla(12,1,6,9));
console.log(chisla(1,51,82));
console.log('*****')
//Test8.Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.
function comebackMax (...numb){
  if (numb.length === 0){
    return undefined;
  }
  return Math.max(...numb);
}
console.log(comebackMax(18,5,105,210,20));
console.log(comebackMax(18,5,56,8,6));
console.log(comebackMax(1,8,12));
console.log(comebackMax(8,5));
console.log(comebackMax(118,15,25));
console.log(comebackMax(181,51,58,28,65));
console.log('*****')
//Test9. Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).
function typeNumbers(start, end, bool) {
  let result9 = '';
  for (let i = start; i <=end; i++) {
    if (i % 2 === 0) {
        result9 += i + ' ';
    } else if(i % 2 !== 0) {
          result9 += i + ' ';
        }
      }
  return result9;
}

console.log(`Список из четных чисел заданного диапазона: ${typeNumbers(25,93,true)}`);
console.log(`Список из нечетных чисел заданного диапазона: ${typeNumbers(5,23,false)}`);
console.log('*****')
//Test10. Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки «дд.мм.гггг». Проверку на високосный год желательно написать отдельной функцией.
function leapYear (year) {
  return (year % 4 === 0)
}
function nextDay (day, month, year) {
  let nextDay = day + 1;
  let nextMonth = month;
  let nextYear = year;

  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2 && leapYear(year)) {
    dayInMonth[1] = 29;
  }

  if (nextDay > dayInMonth[month - 1]) {
    nextDay = 1;
    nextMonth++;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
  }

  const formatDay = String(nextDay).padStart(2, '0');  //преобразовываем число в строку и к однозначному числу переди добавляем 0 
  const formatMonth = String(nextMonth).padStart(2, '0');
  const formatYear = String(nextYear);

  return `${formatDay}.${formatMonth}.${formatYear}`;
}

console.log(nextDay(28, 2, 2024)); 
console.log(nextDay(28, 2, 2025)); 
console.log(nextDay(31, 12, 2025)); 
console.log(nextDay(7, 12, 2025)); 
console.log(nextDay(28, 2, 2028)); 
