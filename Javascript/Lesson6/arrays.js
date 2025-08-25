let numbers = [3, 7, 9, 10, -5, 231];

let arr = [3, {name: "Edgar"}, "Всем привет", function(){console.log('Hi!!!')}];

console.log(`Значение массива ${numbers[3]}`);

arr[3]();

for(let i = 0; i < numbers.length; i++) {
console.log(`${numbers[i]} в квадрате будет ${numbers[i]**2}`);
}

/*Задача 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
1. Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.
2. Добавление покупки в список. Учтите, что при добавлении
покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
а не добавлять новую.
3. Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.*/

class Product{
    constructor(productName, productCount, productIsBay){
        this.name = productName;
        this.count = productCount;
        this.isBay = productIsBay;
    }
}

let productsList = [
    new Product("Хлеб черный", 1, true),
    new Product("Хлеб белый", 1, false),
    new Product("Молоко", 3, false),
    new Product("Сметана", 1, true),
    new Product("Водка", 1, false),
    new Product("Селедка", 5, true),
];

function showProductsList(massivProductov) {
    console.log(`Некупленные продукты`);
    for(let i = 0; i < massivProductov.length; i++){
        if(massivProductov[i].isBay === false) {
            console.log(`${massivProductov[i].name}, количество ${massivProductov[i].count}`);
        }
    }

    console.log(`Купленные продукты`);
    for(let i = 0; i < massivProductov.length; i++) {
        if(massivProductov[i].isBay === true) {
            console.log(`${massivProductov[i].name}, количество ${massivProductov[i].count}`);
        }
    }
}

function addProduct(newProduct) {
    let isProductExsists = false;

    productsList.forEach(function(product, index, productsList){
        if(product.name == newProduct.name) {
            isProductExsists = true;
            productsList[index].count += newProduct.count;
        }
    });

    if(!isProductExsists) {
        productsList.push(newProduct);
    }    
}

function bay(productName){
    productsList.forEach(function(product, index, productsList){
        if(product.name == productName) {
            productsList[index].isBay = true;
        }
    });
}

addProduct(new Product("Йогурт", 3, false));
addProduct(new Product("Сметана", 2, true));

bay("Хлеб белый");
showProductsList(productsList)

let mass = [1];

mass[999] = 777;

console.log(mass);
//console.log(productsList);
//productsList.push(newProduct);

/* Задание 2
Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.
1. Распечатка чека на экран.
2. Подсчет общей суммы покупки.
2
Домашнее задание №2
3. Получение самой дорогой покупки в чеке.
4. Подсчет средней стоимости одного товара в чеке.*/

class Chek {
    constructor (prodName, prodCount, prodPrise){
        this.name = prodName;
        this.count = prodCount;
        this.price = prodPrise;
    }
}

let ProdList = [
    new Chek ("Телефон", 2, 156),
    new Chek ("Телевизор", 1, 1251),
    new Chek ("Кофеварка", 5, 55),
    new Chek ("Наушники", 1, 30),
    new Chek ("Планшет", 2, 205),
    new Chek ("Ноутбук", 3, 2050.5),
];

function chekPrint(massivTovarov){
    for(tovar of massivTovarov){
        let price = tovar.count * tovar.price;

        console.log(`Товар ${tovar.name}, количество - ${tovar.count}, цена - ${price.toFixed(2)}`);
    }
}

function totalPrice(massivTovarov){
    let result = 0;

    for(tovar of massivTovarov){
        let price = tovar.count * tovar.price;
        result += price;
    }

    console.log(`Общая цена ${result.toFixed(2)}`);
}


function maxPriceProduct(massivTovarov){
    let resultProduct = null;
    let totalProductPrice = 0;
    
    massivTovarov.forEach(function(product){
        let price = product.count * product.prise;

        if(price > totalProductPrice) {
            resultProduct = product;
            totalProductPrice = price;
        }
    });

    console.log (`Самая дорогая покупка в чеке это ${resultProduct?.name}`);
}

function srednee(massivTovarov){
    let resultPrice = 0;
    let resultCount = 0;

    for(tovar of massivTovarov){
        resultPrice += tovar.price * tovar.count;
        resultCount += tovar.count;
    }

    let result = resultPrice / resultCount;

    console.log(`Средняя стоимость одного товара в чеке ${result.toFixed(2)}`);
}


chekPrint(ProdList);
totalPrice(ProdList);
maxPriceProduct(ProdList);
srednee(ProdList);

// ${Math.ceil(tovar.count * tovar.price)} - округление в большую сторону, целое число.

let str = "Hello, my dear friend!";

console.log(str[0]);
console.log(str.toUpperCase()); //Делает все буквы заглавными
console.log(str.toLowerCase()); // Делает все буквы строчными
console.log(str.length) // Указывает количество символов в строке
console.log(str.split(' ')); //Из строки делает массив
console.log(str.replace('Hello', 'Privet')); //Что на что хотим заменить.

let stroka = new String();

console.log(stroka); // создается обертка в которой показываются методы строк.