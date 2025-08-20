/*function user (name, age) {
    let obj = {};

    obj.name = name;
    obj.age = age;

    return obj;
}

let anna = user('Anna', 45);
let petr = user('Petr', 15);

console.log(anna.name);*/
//Функции-конструкторы
function User(name, age) {
    this.firstname = name; //добавили свойства
    this.vozrast = age;

    this.hello = function() {   //можем добавить и метод
        console.log(`Привет, я ${this.firstname}`);
    }
}

let anna = new User('Анна', 35);

console.log(anna.hello());

/*let anna = new User('Анна', 35)

console.log(anna);*/

//<div class="block"></div>
/*let div = {
    name: 'div';
    attribute: {
        name: 'class';
        value: 'block'
    },
    innerHtml: ''
}*/

//<a href="https://google.com">Ссылка</a>
/*let a = {
    name: 'a',
    attribute: {
        name: 'href',
        value: 'https://google.com'
    },
    innerHtml: 'Ссылка'
}*/

//<input type="text"/>
/*let input = {
    name: 'input',
    attribute: {
    name: 'type',
    value: 'text'
    },
    innerHtml: null
}*/
//Задали свойство
/*class HTMLElement {
    constructor(name) {
        this.name = name;
        this.innerHtml = null;
        this.attribute = null;
    }

    setInnerHtmlValue(innerHtmlValue){
        this.innerHtml = innerHtmlValue;
    }

    setAttributeValue(attributeValue){
        this.attribute = attributeValue;
    }
}

let div = new HTMLElement('div');
div.setInnerHtmlValue('');
div.setAttributeValue({name: 'class', value: 'block'});


console.log(div);*/
//Задаем метод. Установить свойство иннер имэйл (выше)
//Делаем сейчас для <a></a> и input
class HTMLElement {
    constructor(param1, param2, param3) {
        this.name = param1;
        this.attribute = param2;
        this.innerHtml = param3;
    }

    renderHTML(){
        return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHtml}</${this.name}>`;
    }
}    
   
const div = new HTMLElement('div', {name: 'class', value: 'block'}, '');

div.name = 'a';
console.log(div.renderHTML());

/*Задача 1. Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.*/

/*function Calculator () {
    this.num1 = 0;
    this.num2 = 0;

    this.read = function(){
        this.num1 = +prompt('Введите первое число', 0)
        this.num2 = +prompt('Введите второе число', 0)
    }
    this.sum = function(){
        return this.num1 + this.num2;
    }
    this.mul = function(){
        return this.num1 * this.num2;
    }
}

let calculator = new Calculator();
let calc1 = new Calculator();

calculator.read();

const calc = new Calculator();

console.log(calc);*/

/*Задача 2.оздайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.*/

/*function Accumulator (startingValue) {
    this.value = startingValue;
  
    this.read = function(){
        let num = +prompt('Введите число');
        this.value += num;
    }
}
let accumulator = new Accumulator(1);

accumulator.read()
accumulator.read()

alert(accumulator.value)*/


//Задача 3.
function HTMLElement1 (param1, param2, param3) {
    this.name = param1;
    this.attribute = param2;
    this.innerHtml = param3;

    this.renderHTML = function() {
        if (this.attribute != null && this.attribute.name != undefined && this.attribute.value != undefined){
        return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHtml}</${this.name}>`;
        }
        return `<${this.name}>${this.innerHtml}</${this.name}>`;
    }


    this.addToPage = function(){document.body.insertAdjacentHTML('beforeend', this.renderHTML());
    }
}

const a = new HTMLElement1('a', {name: 'href', value: 'https://google.com'}, 'Это ссылка на Google');
a.addToPage();

const p = new HTMLElement1('p', {}, 'Это текстовый абзац');
p.addToPage();


console.log(a.renderHTML());