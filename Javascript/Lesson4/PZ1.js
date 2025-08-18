/* Первый способ объявления функции:
function summ (start, end) {
    let result = 0;

    for(let i = start; i <= end; i++){
        if(i%2 == 0) {
            result += i;
        }
    }

console.log(`Сумма четных чисел диапазона от ${start} до ${end} равно ${result}`);
}

summ(10, 50);
summ(1, 100);
summ(-50, 50);
summ(1, 5);*/

/*const summ = function(start, end){
    let result = 0;

    for(let i = start; i <= end; i++){
        if(i%2 == 0) {
            result += i;
        }
    }
   
    console.log(`Сумма четных чисел диапазона от ${start} до ${end} равно ${result}`);*/

/*Стрелочные функции:

const arr = (name) => {
    console.log(`Hello, ${name}`);
}

arr('Edgar')*/

let user = {
    name: "Ivan",
    /*"first name" : "Petrov" - */
    age: 35,
    /*job: "Cook",*/
    "first name" : "Petrov",
    job: {
        name: "Developer",
        stage: 15
    },
    gender: "man"
}
//всегда объекты должны задаваться через const
const car= {
    name: "Mersedes",
    type: "Legkovoi",
}

car.engine = "electric";

/*console.log(user.name);*/
console.log(`Пользователь ${user.name} работает на должности ${user.job.name} ${user.job.stage}`);

/*Добавляем свойство у Об*/
user.login = "Dev";
user.password = "qwerty";

console.log(user);

console.log(user["first name"]);
console.log(user["age"]);
console.log(user["job"]["name"]) 
/*либо user["job"].name;*/

/* Удаляем объект
delete user.gender;
console.log(user);*/
let vozrast = "age";

console.log(user[vozrast]);

if("gender" in user) {
    console.log(user.gender);
}

if(user.age != undefined){

}

for(key in user) {
    console.log(`Ключ - ${key}`);
    console.log(`Значение - ${user[key]}`);
}

//Задача 1.
/*Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.*/

let isEmpty = function(obj){
    for(key in obj) {
        return false;
    }

    return true;
}    
    
    /*let result = true;

    for(key in obj){
        result = false;
    }
    
    return result;
}*/
    
let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

const obj1 = {
    a:1
}

const obj2 = obj1;

console.log(obj1.a);
console.log(obj2.a);

obj2.a = 34;

console.log(obj1.a);
console.log(obj2.a);

/* Здесь m=1 и n будет равно 5
let m = 1;
let n = m;

n = 5;*/
// В этом случае объекты уже два разных считаются. 
/*const obj2 = {
    a: obj1.a
}*/
//Клонирование одного объекта в другой (мы во второй объект клонируем в первый):
/*const obj2 = {}

for(key in obj1){
    obj2[key] = obj1[key]
}*/
//Клонирование с помощью функции (во второй клонируем первый):
/*Object.assign(obj2, obj1)*/

//Задача 2. Написать код для суммирования всех зарплат с сохраните результат в переменно sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function salarySumm(obj) {
    let result = 0;

    for(key in obj) {
        result += obj[key];
    }

    return result;
}

console.log(`Сумма равна ${salarySumm(salaries)}`);

const user1 = {
    name : "Petr",
    age: 35,
    job: {
        name: "Developer",
        stage: 15
    },
    gender: "man",
    hello: function(){
        console.log(`Hello!! My name is ${this.name}. I'm ${this.age} years old`);
        console.log(`У меня есть ${car.name}`);
    }
/* Результат в каждом из способов одинаков. 
2-й способ задания метода:
hello() {
        console.log(`Hello!! My name is ${this.name}. I'm ${this.age} years old`);
        console.log(`У меня есть ${car.name}`);
    }
}
3-й способ задания метода:
hello: () => {
        console.log(`Hello!! My name is ${this.name}. I'm ${this.age} years old`);
        console.log(`У меня есть ${car.name}`);
    }*/

user1.hello();

//Задача 3. У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
/*Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
Т.е. в результате получается нужно было везде добавить return this;*/

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

