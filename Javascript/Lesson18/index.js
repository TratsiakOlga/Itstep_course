//1.Опциональная цепочка в js:

let user = {
    address: {
        street:{
            name: "Ленина"
        }
    }
};
//let html = document.querySelector('.elem').innerHTML; - здесь тоже высветится ошибка, так как такого свойства как elem нет
// можно написать тернарный оператор, чтобы проверить есть ли в адресе street.
//console.log(user.address ? user.address.street ? user.address.street : null : null);
//но он слишком длинный. Поэтому ввели понятие опциональная цепочка. Будет выглядеть сл. образом (через ?.):
console.log(user.address?.street?.name); //высветится Ленина
//console.log(str); - высветится str is not defined. Если нет такой строки.
//если свойства street нет, то все остановится на ? и высветится undefined

let users = [
    {
        address: {
            street:{
                name: "Ленина"
            }
        },
        isAdmin: function(){
            console.log("Я админ");
        }
    },
    {
        address:{}
    }      
];

for(let user of users){
    let street = user.address?.street?.name;

    if(street){
        console.log(street);
    }
    //Без опциональной цепочки было бы так:
    /*if(user.address && user.address.street &&user.address.street.name){
        console.log(user.address.street.name);
    }*/

    user.isAdmin?.(); // Если функция isAdmin есть - она выполнится.
}
//Когда пытаемся получить доступ к свойству через квадратные скобки. (Пример: user["address"]) Но такая запись редко используется.
let addresName = "address";
for(let user of users) {
    let street = user?.["address"]?.["street"]?.["name"];
}


//2. Дата и время.

// A. Получить текущую дату:
let time = new Date();
console.log(time);
// Б. Получить милисекунды (0 - это время от начала времен):
let time1 = new Date(0);
console.log(time1);
// В. Если нужна дата за вчера 
let time2 = new Date("2026-02-17");
console.log(time2);
console.dir(time2); // увидим объектное представление нашего метода (DOM)
// Г. Если нужно правильное время. (Вся нумерация месяцев в JS начинается с 0. Февраль это 1) 

function add(n1, n2 = 0){
    return n1 + n2;
}
console.log(add(3,3)); // будет 6
console.log(add(3)); // будет 3 типо есть только одно n

// new Date(year, month, date, hours, minutes, seconds, ms)
let time3 = new Date("2026-02-17");
time3 = new Date(2026, 1, 17, 13, 29, 45);
console.dir(time3);

// Д. Вывести просто месяц/год (как получить компонент)
let months = ["Январь", "Февраль", "Март", "Апрель"]

console.dir(months[time.getMonth(1)]);
//console.dir(time.getFullYear());
// Е. Устанавливаем дату. Установим для time3 2027 год
console.log(time3.setFullYear(2027));
console.log(time3)
//Ж. Если нужно сгенерировать несколько дат, начиная с определенной даты (сгенерировать 10 дней вперед) - с помощью цикла.
//Также можно сделать и с часами, минутами, секундами
for(let i = 0; i < 10; i++){
    let day = time3.getDate();
    day++;
    time3.setDate(day);
    console.log(time3);
}
//З. Автоисправление неправильных дат. - Объект Date делает это сам.

//Чтобы измерить время - можно с помощью Date.now
console.log(Date.now()); //Количество милисекунд указывается.
//И. Бенчмаркет - тест на производительность. Количество до начала милисекунд, и по кончании - количество милисекунд. Чтобы замерить время выполнения задачи. С помощью готовых функций пишется. На сайче учебник JS.

//4. Map и Set

let m = new Map();
m.set("1", "str1");
m.set(1, "num1");

//m.set("1", "str1").set(1, "num1"); - можно и так записывать.
let o = {
    prop: "Prop",
    name: "Name",
    age: 25
}
m.set(o, "kjlholj");

//for(let key of Object.keys(o)
for(let key of Object.entries(o)){
    //console.log(key);
    //['prop', 'Prop'] сделаем деструктурирующее присваивание (преобразование). Первое значение будет присвоено в keyName, второе в keyValue
    let [keyName, keyValue] = key;
    /* Запись выше является следующим(это все одно и то же):
    let keyName = key[0];
    let keyValue = key[1];*/

    console.log(keyName);
    console.log(keyValue);
}

//5. Set

let arr = ["1", "1", "2", "3"];
console.log(arr);

let set = new Set(arr);
console.log(set)
set.add("123") //set.add("1");
console.log(set)

//6. Замыкание, области видимости.

//console.log(keyName) - если внутри скобок [] или {}, такая часть не выполнится, так как в глобальности области не видна
/* Оба примера не видны в консоли, так как находятся в локальной области видимости. А чтобы выводилась - должно быть в глобальной. Внутри скобок - локальная система видимости. Переменная внутри функции - тоже локальная область видимости.
if (1 > 0){
    let k = 9;
}
console.log(k)
{
    let h = "Hello";
}
console.log(h)*/
//Ниже показана функция замыкания. Функция, которая находится внутри другой функции и на которую могут ссылаться другие переменные.
function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    }
}

let counter = makeCounter();
let counter1 = makeCounter();

console.log(counter())
console.log(counter())
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())

//7. Функции-конструкторы

/* В данном примере создали класс:
class User {
    constructor(){
        this.name = null;
        this.age = 0;
    }
}

let user1 = new User();
user1.name = "Ivan";
user1.age = 34; 
Создадим сейчас его с помощью функций-конструкторов*/
//но создавать классы можно с помощью функций-конструкторов.
/*function User() {
    this.name = null;
    this.age = 0;
    this.showName = function(){  //это уже создали метод.
        console.log(this.name);
    }
}*/
// Теперь мы может создавать (конструировать) объекты, но уже только с помощью функции
/*let user1 = new User();
user1.showName();*/
//Но использование классов предпочтительнее, чем функций-конструкторов.
//Объект создается только с помощью функции-конструктора. От обычной функции объект создать невозможно. Может только вызвать.

//8. Декораторы.
//Функция делает расчеты, но всегда получаем одни и те же результаты. Было бы здорово, чтобы функция сохранила в кэш расчет. И при следующем расчете уже часть расчета будет готова. И здесь можно применить декоратор, которая создать обертку (внутрь передается нужная функция, кэширование). В результате если видим, что в кэше есть результат мы его забираем и сразу возвращает. Если результата нет, мы вызываем здесь. Функция работает и результат мы сохраняем в кэш. Итог: наша функция не меняется, а расчеты производит та, которая вокруг. То есть не будет заново запускаться тот же расчет.
/*function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    alert(`Called with ${x}`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {    // если кеш содержит такой x,
        return cache.get(x); // читаем из него результат
      }
  
      let result = func(x); // иначе, вызываем функцию   ****
  
      cache.set(x, result); // и кешируем (запоминаем) результат
      return result;
    };
  }
  
  slow = cachingDecorator(slow);
  
  alert( slow(1) ); // slow(1) кешируем
  alert( "Again: " + slow(1) ); // возвращаем из кеша
  
  alert( slow(2) ); // slow(2) кешируем
  alert( "Again: " + slow(2) ); // возвращаем из кеша*/
//Здесь декоратор это func. И вызывается он в месте **** func(x)

//9 Привязка контекста к функции с помощью call
function User() {
    this.name = null;
    this.age = 0
}

let user1 = new User();
user1.name = "Petr";

function sayHi(helloPhrase, komma) {
    let show = () =>{
    console.log(`${helloPhrase}, ${this.name}${komma}`);
    }

    show();
}

sayHi.call(user1, "Hello", "!");