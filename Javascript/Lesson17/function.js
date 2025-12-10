let a = 5;
let b = 6;
let counter = 0;

let c = (a + b) * 7;

//Этот же пример только в функциональном программировании (функция summ - чистая функция. C добавлением counter++ - перестает быть чистой):
function summ(a, b){
    counter++; // если эту строку добавить она перестанет быть чистой
    return a + b;
}

function nul(a, b){
    return a * b;
}

//let c = nul(summ(a, b), b);  // Функциональная композиция получилась. Можно было бы еще так записать: let c = nul(a + b , b)

function fff(a, b){
    return (a + b) / Math.random();  //так чистой не будет, и Math.PI() - не чистая, так как использует внешний объект Math;
}

//такие циклы в функциональном программировании использовать нельзя. Можно только использовать рекурсию
/*for(let i = 0; i < 10; i++){
    console.log(i);
}*/
//Перепишем как будет в функциональном программировании:
let show = function(i){
    console.log(i);
}

function cicle(counter, func){
    if(counter < 0){
        return; //выходим из функции/ Если уберем это условие выхода с рекурсии (if) - цикл будет бесконечным
    }
    func(counter);
    counter--;
    cicle(counter,func);
}

cicle(10, show);

//let mass = [1, 2, 4, -1, 6, 9]; //нужно все числа массива умножить на 2
//Пример1.
//1) Решение в классическом js:
/*let newMass = []

for(let i = 0; i < mass.length; i++){
    newMass.push(mass[i] * 2);
}

console.log(newMass);*/
//2) Решение в функциональном программировании: 
/*newMass = mass.map(function(item){
    return item *2;
})

console.log(newMass);*/

//Пример2. Нужно сделать массив либо с отрицательными числами, либо с четными.
//1) Решение классическим js:
let mass = [1, 2, 4, -1, 6, 9];

newMass = mass.map(function(item){
    return item *2;
});

let negativ = [];
for (let num of mass){
    if (num < 0){
        negativ.push(num);
    }
}

let odd = [];
for (let num of mass){
    if(num % 2 == 0) {
        odd.push(num);
    }
}

console.log(negativ);
console.log(odd);
//Общее решение (сокращенное):
//1. Массив с отрицательными числами:
let filtered = [];

let negativCondition = function(n) {
    /*if (n < 0) {
        return true;
    }else{
        return false;
    }*/
    // Более просто можно написать:
    return n < 0;
};

let oddCondition = function(n){
    return n % 2 === 0; 
}

/* Еще короче запись: 
filtered = mass.filter((item) => { 
    return negativCondition(item);
});*/

function filter(element, condition){
    let result = [];

    element.forEach(function(element){
        condition(element) ? result.push(element) : null; // Более сокращенная запись.
        /* Второй способ.
        if(condition(element)){
            result.push(element);
        }*/
    });

    return result;
}

console.log(filter(mass, negativCondition));
console.log(filter(mass, oddCondition));

/*for(let element of mass){
    if(negativCondition(element)){
        filtered.push(element);
    }
}
console.log(filtered);*/

//Массив с положительными цифрами:
let filteredPositiv = [];
let positivCondition = function(n) {
    return n > 0;
};

for(let element of mass){
    if(positivCondition(element)){
        filteredPositiv.push(element);
    }
}
console.log(filteredPositiv);

//Метод свертки. Посчитать общее количество и общую стоимость.
let cart = [
    {
        name: "Товар 1",
        count: 2,
        price: 120,
    },
    {
        name: "Товар 2",
        count: 1,
        price: 10,
    },
    {
        name: "Товар 3",
        count: 10,
        price: 1,
    },
];

let totalPrice = cart.reduce(function(acc, item){
    acc += item.price * item.count;
    return acc;
}, 0);

let totalCount = cart.reduce(function(acc, item){
    acc += item.count;
    return acc;
}, 0);

/*let totalPrice = 0;
let totalCount = 0;*/
//2-й способ:
/*for (let item of cart){
    totalCount += item.count;
    totalPrice += item.count * item.price;
}*/
//3-й способ: 
/*cart.forEach(function(item){
    totalCount += item.count;
    totalPrice += item.count * item.price;
});*/


console.log(totalCount);
console.log(totalPrice);

//ииффии - немедлено вызываемые функции
function rendor(message){
    console.log(message);
}

rendor('Это сообщение!');
//нужно объявить функцию и сразу ее вызвать (это немедленно вызываемые функции. И это называется iiffi):
//Вариант1:
(function(){
    console.log(`Сумма чисел равна ${5 + 6}`);
})();
//Вариант2: (получается то, что в первых скобках считается rendor (здесь прописывается новый текст сообщения))
/* Это rendor из записи выше: ("rendor('Это сообщение!');")
(function(message){
    console.log(message);
})*/
(function(message){
    console.log(message);
})(`Сумма чисел равна ${5 + 6}`);