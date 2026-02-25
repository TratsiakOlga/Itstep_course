//Классы (User), методы (showInfo) (метод - функция, которую можно добавить внутрь класса), конструкторы (это метод. у нас написан через constructor). Поля для чтения (задаются в классе, которые используются только для чтения и изменить их нельзя. Вроде констант получаются. Пишется свойство "readonly" для обозначения поля для чтения. Нам нужно не всегда задавать все параметры. Делается это опционально. Для этого нужно поставить знак вопроса. (age&?: number). Параметр age является опциональным, и нам можно устанавливать его значение только тогда, когда нам  это нужно. А также можно использовать значение по умолчанию. В нашем примере вместо (age?: number) нужно написать age: number=34. И в таком случае будет браться только значение по умолчанию (34)). /Наследование/ В нашем примере class Employee extends User. Если есть конструктор в базовом (родительском) классе мы должны передать и в дочерний (все парамерты нужно передавать, не только конструктор). Параметры внутри конструктора передаются через super. Можно наследоваться только от одного класса. /Переопределение методов/(помечено внутри кода). /Абстрактные классы/ Они как шаблоны для классов. В данном случае мы наследовались от User, в котором есть конкретные свойства, логика. Но часто бывает, что мы определяем абстрактный класс, от которого потом наследуемся. От обычного класса можно создать объект. От абстрактного напрямую объект создать не может. Нужно будет создать доп. объект и только от него создавать объект. Пример ниже 
class User {
    name: string;
    protected _age: number; //нижние подчеркивания перед age можно и не ставить. private свойства не наследуются.
    readonly gender: string;

    constructor(name: string, gender: string, age?: number){
        this.name = name;
        this._age = age;
        this.gender = gender;
    }

    showInfo(){
        console.log(`My name is ${this.name}. I'm ${this._age} year old`)
    }
    
    toString(): string{
        return `${this.name}: ${this._age}`;
    }

    public set age(n: number){  //метод не обязательно age называть. Мы назовем age без нижнего подчеркивания.
        this._age = n;
    }

    public get age(): number{
        return this._age;
    }
}

class Employee extends User{
    company: string;
    rank: string;

    constructor(name: string, gender: string, age?: number) {
        super(name, gender, age);
    }

    toString(): string{
        console.log(super.toString());//вызываем метод базового класса внутри. И в этом месте будет вызываться 2 параметра как в родительском классе.
        return `${this.name}: ${this.age}: ${this.company}`; //вернет переопределенный метод.
    }

    static retirementAge: number = 65;
    static calculateYears(age: number): number{
        return Employee.retirementAge - age;
    }
}

let user: User = new User("Ivan Ivanov", "male");
let worker: Employee = new Employee("Sergei Morozov", "male", 45);
worker.company = "Amazon"

//let user: User = new User("Ivan Ivanov", "male", 25);

/* Так записывается, если не нужен конструктор. В конструкторе свойства присваиваются внутри (). Выше видим.
user.name = "Ivan Ivanov";
user.age = 25;*/
user.age = 25; //Если какой-то параметр делаем protected - здесь сработает методе age (cеттор)

console.log(user.age);

user.showInfo();

console.log(user.toString());
console.log(worker.toString());
//user.gender = "female" В таком случае пишется ошибка, что изменить свойство gender невозможно

//Абстрактные классы. Описание их написано выше в начале. Наследоваться будем следующим образом. Абстрактный - задает шаблон для конкретных классов.
abstract class Figure {
    name: string;

    abstract getArea(): number;

    showName(){
        console.log(this.name);
    }
}

//class Rectangle extends Figure(){} - в данном случае невозможно наследоваться от Figure, поэтом нужно наследование писать следующим образом:
class Rectangle extends Figure { 
    width: number;
    height: number;

    constructor(width: number, heigh: number){
        super();
        this.width = width;
        this.height = heigh;
    }
     
    getArea(): number{
        return this.width * this.height;
    }
}

let rect: Rectangle = new Rectangle(100, 30);
console.log(`Rectangle area = ${rect.getArea()}`);

console.log(Employee.calculateYears(42));

//Модификаторы доступа. Позволяют сокрыть состояние объекта от внешнего доступа и управлять доступом к этому состоянию. (есть три модификации: privat, protected, public). Первые два из глобального доступа изменить нельзя. пишется как в примере ниже.
/*class User {
    name: string;
    protected age: number;
    readonly gender: string;*/

//Статические поля и методы. Нельзя использовать this. Пишется следующим образом. Они хорошо работают, если есть один класс на все приложение. Содержит функции, которые не требуют создания отдельных объектов.
/*static retirementAge: number = 65;
    static calculateYears(age: number): number{
        return Employee.retirementAge - age;
    }
}*/

//Интерфейсы. Определяет свойство и методы, которые объект или класс должен реализовать. В интерфейсах перед названием добавляют букву I заглавную. Задает конкретные свойства. Интерфейсы реализуют какие-то классы. Чем абстрактный класс отлич-ся от интерфейсов. Абстрактный класс предоставляет метод без реализацией, но к нему можно добавить метод с реализацией. Интерфейс определяет свойства и методы, которые должны быть реализованы классом, которые класс реализует. То есть в нем лежат заготовки без реализации. Но класс, который эти методы реализовывать, должен реализовать все эти методы. Чаще используется в контексте классов.
interface IUser {
    id: number;
    name: string;
}

let employee: IUser = {
    id: 1, 
    name: "Tom"
}
//эти три метода должны реализоваться в классах. То, что класс должен реализовать методы интерфейса указывается implements и из какого интерфейса берутся.
interface ICar {
    id: number; 
    name: string;
    showInfo(): void;
}

class Sedan implements ICar{
    id: number;
    name: string;
    weight: number;

    constructor(id: number, name: string, weight: number) {
        this.id = id;
        this.name = name;
        this.weight = weight;
    }

    showInfo(): void{
        console.log(`${this.name}`);
    }
}

class Vehicle implements ICar {
    id: number;
    name: string;
    weight: number;

    constructor(id: number, name: string, weight: number) {
        this.id = id;
        this.name = name;
        this.weight = weight;
    }

    showInfo(): void{
        console.log(`${this.name}`);
    }
}

let car1 = new Sedan(1, "Ford", 1340);
let car2 = new Vehicle(2, "Mersedes", 15000);

function showCarInfo(car: ICar){
    car.showInfo();  
}

showCarInfo(car1);
showCarInfo(car2);

//Интерфейс функций. Заготовка для реализации какой-то функции.
interface IFullNameBuilder {
    (name: string, surname: string): string;
}

let simpleBuilder: IFullNameBuilder = function(name: string, surname: string): string{
    return `${name} ${surname}`;
}

console.log(simpleBuilder("Edgar", "Zhiznevskij"));

//Интерфейсы массивов.
interface IStringArray {
    [index: number]: string;
}

let addresses: IStringArray = ["Адрес 1", "Адрес 2"];
//Есть словари, где индекс объекта строковый. Не по числовому индексу обращаемся, а по строковому.
interface IDictionary {
    [index: string]: string;
}
let colors: IDictionary = {};

colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";

console.log(colors["red"]);
/* В JS будет выглядеть так:
let colors = {
    red : "#ff0000",
    green : "#00ff00",
    blue : "#0000ff"
};
colors["red"]
*/

//Преобразования типов. Employee наследуется от User, поэтому можем так написать.
let tom: User = new Employee("Tom Soyer", "male");
//Но если запишем так, то tom у нас больше User. Чтобы работало - нужно сделать преобразование типа в Enployee следующим образом:
let employeeTom: Employee = <Employee>tom;

employeeTom.company = "Amazon";
//C помощью преобразования типа мы добавили к tom параметр company (т.е. "Amazon")

//Обобщения.Generick (Дженерик).