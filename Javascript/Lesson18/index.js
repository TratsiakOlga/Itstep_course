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


