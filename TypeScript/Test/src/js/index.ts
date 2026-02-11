import '../scss/index.scss';
//Какие могут быть типы:
let n: number = 5;
const city: string = "Питер";
//const city: string | null = "Питер"; - может быть и строкой и null
let result: boolean = true;
let nothing = null;
// city = null; - уже так задать невозможно - будет ошибка

let m: number | undefined; // вот так можно указывать если может быть числом и underfined (но нельзя присваивать все подряд типы)

let some: any; // это переменная, которая может быть любого типа
//Литеральные типы:
let color: "red" | "green" | "blue"
let status: 100 | 200| 400 // на этом все с типизацией
//Составные типы: 
type Person = {
    name: string,
    age: number,
    isStudent: boolean
};

/* В js будет так:
let user = {
    name: "Иван Иванович",
    age: 35, 
    isStudent: false
}*/

let user: Person = {
    name: "Иван Иванович",
    age: 35, 
    isStudent: false
}
//Массивы
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["1234", "31556", "64132"];
let strings1: Array<string|number> = ["1234", "31556", "64132", 1];
//Void спец. тип данных - когда надо обозначить, что функция не возвращает нам никакого результата
function showInConsole(str:string): void{
    console.log(str);
}
//эта функция всегда должна возвращать number, если она ничего не возвращает используем void.
function summ(m: number, n: number): number{
    return m + n;
}
//Функция создает объект Person на базе параметров заданных и этот результат вернуть:
function createPerson(name: string, age: number, isStudent: boolean): Person{
    return{
        name: name, 
        age: age,
        isStudent: isStudent
    };
}
//Тип данных Never - указывает на функцию, которая никогда нормально не завершается.
let obj: object