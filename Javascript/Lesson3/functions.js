
let stepen = 2;

function summ(a, b){
    let result = a + b;

    return result;
}

/* Использование внешней степени внутри ф-ции:
function summ(a, b){
    let result = (a + b) ** stepen;

    return result;
}*/
/* Можем задать параметр по умолчанию, когда, например, b где-то не указали (например в ddd мы задали только а). Будет использоваться то, что задали по умолчанию. Получается а=45, b=10 будет.
function summ(a, b=10){
    let result = a + b;

    return result;
}
let ddd = summ(45)*/

let number1 = 34;
let number2 = 45;

let rrr = summ(number1, number2);
// Можно и так задать параметры той же ф-ции:          let ddd = summ(45, 56)

console.log(rrr);