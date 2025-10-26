//Практическое задание №1.
//Test1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
let number = prompt ('Введите число');
let result = alert (number ** 2);
//Test2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
let number21 = +prompt ('Введите первое число');
let number22 = +prompt ('Введите второе число');
let srednee = (number21+number22) / 2;
alert(`Cреднее значение равно: ${srednee}`)
//Test3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
let lengthSide = +prompt('Введте длину стороны квадрата:');
let result3 = lengthSide ** 2;
alert(`Площадь квадрата: ${result3}`)
//Test4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.
const mile = 0.621371;
let km = +prompt('Введите количество км');
let result4 = km * mile;
alert (`В заданном количестве км содержится ${result4} миль`)
//Test5. Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.
let number51 = +prompt ('Введите первое число');
let number52 = +prompt ('Введите второе число');
let operation = prompt ('Введите одну из операций (+,-,*,/):');
let result5;
switch (operation) {
  case '+':
    result = number51+number52;
    break;
  case '-':
    result = number51-number52;
    break;
  case '*':
    result = number51*number52;
    break;
  case '/':
    result = number51/number52;
    break;
  default:
    alert( "Нет такого знака" );
}
alert(result)
//Test6. Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.
let a = +prompt ('Введите число а:');
let b = +prompt ('Введите число b:');
let x = -b/a;
let result6 = alert(x)
//Test7.Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
let hour = +prompt ('Назовите сколько сейчас часов (от 1 до 24):');
let minute = +prompt ('Назовите сколько сейчас минут (от 1 до 60):');
const time = 1440; //минуты в сутках
let result7 = (time - ((hour*60)+minute));
//alert (result)
alert (`Осталось до следующего дня: ${Math.floor((result7)/60)} час(ов) и ${(result7) % 60} минут`);
//Test8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).
let number8 = +prompt('Введите любое трехзначное число: ');
let result8 = Math.floor(number8 / 10);
alert (`Вторая цифра числа: ${result8 % 10}`)
//Test9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).
let number9 = +prompt('Введите любое пятизначное число: ');
let lastNumber9 = (number9 % 10);
let resultStirng = lastNumber9.toString(); 
let FirstNumber9 = Math.floor(number9 / 10);
let resultString2 = FirstNumber9.toString();
let result9 = resultStirng + resultString2;
alert (`Преобразованное число выглядит так: ${result9}`)
//Test10. Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.
let number10 = +prompt('Назовите общую сумму продаж за месяц: ');
const Oklad = 250;
let Premia = (number10 * 10) /100;
let result10 = Oklad + Premia;
alert (`Зарплата работника за текущий месяц составляет: ${result10}$`)  