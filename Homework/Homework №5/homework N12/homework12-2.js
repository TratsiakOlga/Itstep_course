//Основная задача 1. Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
const originalRectangle = {
    upperLeftPoint: {x1: 3, у1: 8},
    lowerRightPoint: {x2: 8, у2: 4}
}

const rectangle = {
    upperLeftPoint: {x1: 3, у1: 8},
    lowerRightPoint: {x2: 8, у2: 4}
}
//Задача 1.1. Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
function infoRectangle (rectangle) {
    console.log("Информация о прямоугольнике:");
    console.log(`Левая верхняя точка расположена в системе координат: x = ${rectangle.upperLeftPoint.x1}, y = ${rectangle.upperLeftPoint.у1}`);
    console.log(`Правая нижняя точка расположена в системе координат: x = ${rectangle.lowerRightPoint.x2}, y = ${rectangle.lowerRightPoint.у2}`);
}
infoRectangle(rectangle);
console.log('*****')
//Задача 1.2. Функция принимает объект-прямоугольник и возвращает его ширину.
function widthRectangle (rectangle){
    return rectangle.lowerRightPoint.x2 - rectangle.upperLeftPoint.x1;
}
const width = widthRectangle(rectangle);
console.log(`Ширина прямоугольника равна: ${width}`);
console.log('*****')
//Задача 1.3. Функция принимает объект-прямоугольник и возвращает его высоту (обычно она равна меньшей стороне прямоугольника).
function heightRectangle(rectangle){
    return rectangle.upperLeftPoint.у1 - rectangle.lowerRightPoint.у2;
}
const height = heightRectangle(rectangle);
console.log(`Высота прямоугольника равна: ${height}`);
console.log('*****')
//Задача 1.4. Функция принимает объект-прямоугольник и возвращает его площадь.
function areaRectangle(rectangle){
    let w = rectangle.lowerRightPoint.x2 - rectangle.upperLeftPoint.x1
    let h = rectangle.upperLeftPoint.у1 - rectangle.lowerRightPoint.у2
    return w * h;
}
const area = areaRectangle(rectangle);
console.log(`Площадь прямоугольника равна: ${area}`);
console.log('*****')
//Задача 1.5. Функция принимает объект-прямоугольник и возвращает его периметр (сумма всех четырех сторон).
function perimetrRectangle(rectangle){
    let w = rectangle.lowerRightPoint.x2 - rectangle.upperLeftPoint.x1
    let h = rectangle.upperLeftPoint.у1 - rectangle.lowerRightPoint.у2
    return 2*w + 2*h;
}
const perimetr = perimetrRectangle(rectangle);
console.log(`Периметр прямоугольника равен: ${perimetr}`);
console.log('*****')
//Задача 1.6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину.
function changeWidth(rectangle, num1){
     rectangle.lowerRightPoint.x2 += num1;
}
changeWidth(rectangle, 25);
console.log(`Ширина прямоугольника после внесения изменений составила: ${widthRectangle(rectangle)}`);
console.log('*****')
//Задача 1.7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.
function changeHeight(rectangle, num2){
    rectangle.upperLeftPoint.у1 += num2;
}
changeHeight(rectangle, 12);
console.log(`Высота прямоугольника после внесения изменений составила: ${heightRectangle(rectangle)}`);
console.log('*****')
//Задача 1.8. Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения – для изменения ширины и высоты
function changeWidthAndHeight(rectangle,numW, numH){
    changeWidth(rectangle,numW);
    changeHeight(rectangle,numH);
}
changeWidthAndHeight(rectangle,3,21)
console.log(`Новая ширина: ${widthRectangle(rectangle)}, новая высота: ${heightRectangle(rectangle)}`);
console.log('*****')
//Задача 1.9. Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
function rectangleOffsetX(originalRectangle, num3){
    originalRectangle.upperLeftPoint.x1 += num3;
    originalRectangle.lowerRightPoint.x2 += num3;
}
rectangleOffsetX(originalRectangle, 7);
console.log(`После смещения прямоугольника по оси Х координата х1 стали равны:${originalRectangle.upperLeftPoint.x1}`);
console.log(`После смещения прямоугольника по оси Х координата х2 стали равны: ${originalRectangle.lowerRightPoint.x2}`);
console.log('*****')
//Задача 1.10. Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
function rectangleOffsetY(originalRectangle, num4){
    originalRectangle.upperLeftPoint.у1 += num4;
    originalRectangle.lowerRightPoint.у2 += num4;
}
rectangleOffsetY(originalRectangle, 10);
console.log(`После смещения прямоугольника по оси У координата у1 стали равны:${originalRectangle.upperLeftPoint.у1}`);
console.log(`После смещения прямоугольника по оси У координата у2 стали равны: ${originalRectangle.lowerRightPoint.у2}`);
console.log('*****')
//Задача 1.11. Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
const originalRectangle1 = {
    upperLeftPoint: {x1: 3, у1: 8},
    lowerRightPoint: {x2: 8, у2: 4}
}
function rectangleOffsetXY(originalRectangle1, num5, num6){
    originalRectangle1.upperLeftPoint.x1 += num5;
    originalRectangle1.lowerRightPoint.x2 += num5;
    originalRectangle1.upperLeftPoint.у1 += num6;
    originalRectangle1.lowerRightPoint.у2 += num6;
}
rectangleOffsetXY(originalRectangle1, 5, 10);
console.log(`После смещения прямоугольника по оси X координаты стали равны: x1=${originalRectangle1.upperLeftPoint.x1}, x2=${originalRectangle1.lowerRightPoint.x2}`);
console.log(`После смещения прямоугольника по оси У координаты стали равны: у1=${originalRectangle1.upperLeftPoint.у1}, у2=${originalRectangle1.lowerRightPoint.у2}`);
console.log('*****')
//Задача 1.12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.
const originalRectangle2 = {
    upperLeftPoint: {x1: 3, у1: 8},
    lowerRightPoint: {x2: 8, у2: 4}
}
function numXY(originalRectangle2, numX, numY){
    let resultX = numX >= originalRectangle2.upperLeftPoint.x1 && numX <= originalRectangle2.lowerRightPoint.x2;
    let resultY = numY <= originalRectangle2.upperLeftPoint.у1 && numY >= originalRectangle2.lowerRightPoint.у2;
    if (resultX && resultY) {   
        console.log ('Точка находится внутри прямоугольника');
    } else {
        console.log ('Точка за пределами прямоугольника')
    }
}
numXY(originalRectangle2, 5, 6);
numXY(originalRectangle2, 2, 3);
numXY(originalRectangle2, 12, 33)
numXY(originalRectangle2, 3, 4)
numXY(originalRectangle2, 7, 7)
