//Задание 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом. 1. Функция для вывода на экран информации об автомобиле. 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
const car = {
    manufacturer: "Audi",
    model: "А1",
    year: 2025,
    averageSpeed: 90 
};

function infoCar(car) {
    console.log("Информация об автомобиле: ");
    console.log("Производитель: ", car.manufacturer);
    console.log("Модель: ", car.model);
    console.log("Год выпуска: ", car.year);
    console.log("Средняя Скорость: ", car.averageSpeed, "км/ч");
}

function travelTime(car, distance){
    const timeForKm = 1/car.averageSpeed;
    let totalTimes = timeForKm * distance;
    let pause = Math.floor(totalTimes/4);
    let totalBreak = pause;

    if(totalTimes % 4 === 0) {
        totalBreak = pause - 1;
    }

    const finalTime = totalTimes + totalBreak
    return finalTime;
}

infoCar(car);
let distance = 750;
let travelTimes = travelTime(car, distance);
console.log(`Время в пути на ${distance} км: ${travelTimes.toFixed(2)} часов`);
console.log('*****')
//Задание 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. 1. Функция сложения 2-х объектов-дробей; 2. Функция вычитания 2-х объектов-дробей; 3. Функция умножения 2-х объектов-дробей; 4. Функция деления 2-х объектов-дробей;5. Функция сокращения объекта-дроби.

const createFraction = (numerator, denominator) => ({
  numerator,
  denominator
});

// Функция для поиска наибольшего общего делителя (НОД)
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

// Функция для сокращения дроби
const simplifyFraction = (fraction) => {
  const commonDivisor = gcd(fraction.numerator, fraction.denominator);
  return {
    numerator: fraction.numerator / commonDivisor,
    denominator: fraction.denominator / commonDivisor,
  };
};

// Функция сложения дробей
const addFractions = (frac1, frac2) => {
  const newDenominator = frac1.denominator * frac2.denominator;
  const newNumerator =
    frac1.numerator * frac2.denominator + frac2.numerator * frac1.denominator;
  return simplifyFraction({
    numerator: newNumerator,
    denominator: newDenominator
  });
};

// Функция вычитания дробей
const subtractFractions = (frac1, frac2) => {
  const newDenominator = frac1.denominator * frac2.denominator;
  const newNumerator =
    frac1.numerator * frac2.denominator - frac2.numerator * frac1.denominator;
  return simplifyFraction({
    numerator: newNumerator,
    denominator: newDenominator
  });
};

// Функция умножения дробей
const multiplyFractions = (frac1, frac2) => {
  const newNumerator = frac1.numerator * frac2.numerator;
  const newDenominator = frac1.denominator * frac2.denominator;
  return simplifyFraction({
    numerator: newNumerator,
    denominator: newDenominator
  });
};

// Функция деления дробей
const divideFractions = (frac1, frac2) => {
  const newNumerator = frac1.numerator * frac2.denominator;
  const newDenominator = frac1.denominator * frac2.numerator;
  return simplifyFraction({
    numerator: newNumerator,
    denominator: newDenominator
  });
};

const fraction1 = createFraction(5, 7);
const fraction2 = createFraction(3, 14);

const sum = addFractions(fraction1, fraction2);
console.log(`Сложение: ${sum.numerator}/${sum.denominator}`); 

const difference = subtractFractions(fraction1, fraction2);
console.log(`Вычитание: ${difference.numerator}/${difference.denominator}`);

const product = multiplyFractions(fraction1, fraction2);
console.log(`Умножение: ${product.numerator}/${product.denominator}`);

const quotient = divideFractions(fraction1, fraction2);
console.log(`Деление: ${quotient.numerator}/${quotient.denominator}`);

const fraction3 = createFraction(4, 8);
const simplified = simplifyFraction(fraction3);
console.log(`Сокращение: ${simplified.numerator}/${simplified.denominator}`);
console.log('*****')

//Задание 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. 1. Функция вывода времени на экран. 2. Функция изменения времени на переданное количество секунд. 3. Функция изменения времени на переданное количество минут. 4. Функция изменения времени на переданное количество часов. Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
let time = {
  hours: 10,
  minute: 35,
  second: 40,
};

//Функция вывода времени на экран:
time.printTime = function () {
  const h = String(this.hours).padStart(2,'0');
  const m = String(this.minute).padStart(2,'0');
  const s = String(this.second).padStart(2,'0');
  console.log(`Время на часах: ${h}:${m}:${s}`);
}

time.printTime();
console.log('***Добавили секунды:***')

//Функция изменения времени на переданное количество секунд:
addSecond = function (second) {
  let totalSecond = time.hours * 3600 + time.minute * 60 + time.second + second;
  time.hours = Math.floor(totalSecond/3600) % 24;
  time.minute = Math.floor((totalSecond/60) % 60);
  time.second = totalSecond % 60;
};

addSecond(22);
time.printTime();
console.log('***Добавили минуты:***')

//Функция изменения времени на переданное количество минут:
addMinute = function (minute) {
  let totalMinute = time.hours * 60 + time.minute + minute;
  time.hours = Math.floor(totalMinute / 60) % 24;
  time.minute = totalMinute % 60;
};

addMinute(31);
time.printTime();
console.log('***Добавили часы:***')
//Функция изменения времени на переданное количество часов.
addHours = function (hours) {
  let totalHours = time.hours + hours;
  time.hours = totalHours % 24;
};

addHours(5);
time.printTime();