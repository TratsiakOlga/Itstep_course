//Задания, в которых необходимо использовать WHILE. (Для вывода данных используйте alert() или document. write(). Для ввода данных используйте prompt() и confirm().)

//Test1. Вывести # столько раз, сколько указал пользователь.
let counter = +prompt ('Введите количество раз вывода значения #: ');
let result1 = ' ';
let num = 1;
while (num <= counter){
    num += 1;
    result1 += '#';
} 
alert(result1)
//Test2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
let number = +prompt ('Введите любое число');
result200 = ' ';
while (number >= 1){
    number--;
    result200 += number + ' ';
}
alert(result200)
//Test3.Запросить число и степень. Возвести число в указанную степень и вывести результат.
let number3 = +prompt ('Введите число от 1 до 100: ');
let degree = +prompt ('Введите степень числа: ');
let result3 = 1;
let i = 0;
while (i < degree){
    result3 *= number3;
    i++;
}
alert(result3)
//Test4. Запросить 2 числа и найти все общие делители.
let num1 = +prompt ('Введите первое число: ');
let num2 = +prompt ('Введите второе число: ');
result444 = ' ';
let i4 = 1;
while (i4 <= num1 && i4 <= num2) {
    if (num1 % i4 === 0 && num2 % i4 === 0){
        result444 += i4 + '.';
    }
    i4++;
}
//console.log("Общие делители:", result444);
alert(`У этих чисел общие делители: ${result444}`);
//Test5.Посчитать факториал введенного пользователем числа.
let number51 = +prompt('Введите любое число: ');
let factorial = 1;
let i5 = 1;
while (i5 <= number51) {
    factorial = factorial * i5;
    i5++
}
alert(factorial)