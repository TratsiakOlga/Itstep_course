const calc  = {
    summ: function(a,b) {
        console.log(a + b);
        return this;
    },
    sub: function(a,b) {
        console.log(a - b);
        return this;
    },
    mul: function(a,b) {
        console.log(a * b);
        return this;
    },
    div: function(a,b) {
        if(b == 0) {
            console.log(0);
        } else {
            console.log(a / b);
        }
         
        return this;
    }
}

//let r = calc.summ(2, 2);

//r.div(2, 2);

calc.summ(2, 2).div(2, 2).mul(2,5); // можно и так записать
/*console.log(calc.summ(2,4));
console.log(calc.sub(2,4));
console.log(calc.mul(2,4));
console.log(calc.div(2,4));*/

/*function $(selector) {
    return document.querySelector(selector);
}*/
//Модифицируем наш калькулятор

