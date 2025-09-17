//Задача 1. Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
/*let button = document.querySelector ("button")

button.addEventListener('click', function(){
    let div = document.getElementById("text");
    div.remove();
});
// Задача 2. Создайте кнопку, которая будет скрывать себя по нажатию.
button.addEventListener('click', function(){
    this.hidden = true;
});*/

/*Задача3. Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:
Требования:

Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
CSS-анимация желательна, но не обязательна;
Мяч ни в коем случае не должен пересекать границы поля;
При прокрутке страницы ничего не должно ломаться;
Заметки:

Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.*/
//Многое еще не знаем как делать. Сделаем пока так, чтобы мяч перемещался туда, где будет наш курсор.
const ball = document.querySelector(".ball");

function moveBall(event) {
    let clientX = event.clientX; //отступ по оси Х 
    let clientY = event.clientY;

    console.dir(ball);
    
    ball.style.left = clientX - Math.floor(ball.offsetWidth / 2) + "px";
    ball.style.top = clientY - Math.floor(ball.offsetHeight / 2)  + "px";
}

document.body.addEventListener('click', moveBall);
