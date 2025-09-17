// Как выглядит функция рекурсии:
/*function show1(num1,num2) {
    if(num1 < 0) {
        return;
    } else {
    console.log(`Числа ${num1} и ${num2}`);
    show1(num1 - 1, num2 - 1);
    }
}

show1(2, 3); */

/*function show2(num1,num2) {
    show1(num1,num2);
}

show1(2,3);
show2(2,3);*/
//Задаем с помощью цикла. Здесь цикл лучше, чем рекурсия.
/*function showNumbers(start, end) {
    for(let i = start; i <= end; i++) {
        console.log(i);
    }
}

showNumbers(0, 10);*/

//Такую вещь можно записать ради примера как рекурсию. Но запись такой функции как рекурсия забирает слишком много памяти, то и скорость выполнения задания теряется 
/*function showNumbers1(start, end) {
    if(start > end) {
        return;
    } else {
        console.log(start);
        showNumbers1(start + 1, end);
    }

}

showNumbers1(0, 10);*/

// Событийная модель DOM (Если написать в html: <button onclick="changeLinkText()">Нажми меня!</button>)
//В html cтрочка перед ссылкой: <!--<button onclick="changeLinkText()">Нажми меня!</button>-->
function changeLinkText(event) {
    let a = document.querySelector("a");

    a.innerText = "Это ссылка на Google";

    console.dir(event);
}

//Без указания в html onclick="changeLinkText()" следующим образом можно написать:
//Нельзя через 1 атрибут навесить больше 1 события. Через атрибуты задавать - плохая практика
let button = document.querySelector("button");

/*button.onclick = changeLinkText;
button.onclick = function(){
    document.body.style.bacgroundColor = 'red';
}*/
//Чтобы можно было использовать несколько событий нужно так писать:

button.addEventListener('click', changeLinkText);
button.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});

/*button.onclick = function(){
    //alert('Все выполнено!') - можно так написать, а можно через this
    //alert(this.innerText);
}*/

button.onclick = function(event){
    console.dir(event.target);
}
// Удалить обработчик событий из onclick
//button.onclick = null;
// Чтобы удалить addEventListener нужно повторить в точности, что было при добавлении
//button.removeEventListener('click', changeLinkText);
//Этот обработчик не удаляется. Нужно создавать отдельную функцию (т.е. решать другим образом). Это не работает.
button.removeEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});
console.dir(button);