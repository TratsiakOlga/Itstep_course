//console.log(window);

//alert ('dsjlhp')

/*function my_super_func() {
    console.log(`Версия браузера ${window.navigator.appVersion}`);

    for(let plugin of window.navigator.plugins){
        console.log(`Плагин ${plugin.name}`);
    }
}

my_super_func();*/

/*let url = prompt("Введите URL");

if(confirm(`Вы действительно хотите перейти по адресу ${url}?`)){
    window.location.href = url;
}*/

//Попробуем перезагрузисть страницу через какое-то время
//let reload = function(){location.replace('http.//mail.ru')} 

//setInterval(reload, 5000);

console.dir(document);

document.body.style.backgroundColor = "white";

console.log(document.title);
//откроем элемент text по шагам:
/*let text = document.children[0]; //html открываем
let body = html.children[1]; //body открываем
let h1 = body.children[0]; //h1 с индексом ноль - ставим ноль
let text = h1.innerText;
console.log(text);*/

//Сокращенно это будет выглядеть так.
let text = document.children[0].children[1].children[0].innerText;

//Задание: найти a и отправить на указанный сайт (<a href="https://google.com">Это ссылка на Google</a>)

/*let html = document.children[0];
let body = html.children[1];
let a = body.children[1];

console.dir(a);

let url = a.href;
//Сокращенно:
let url = document.children[0].children[1].children[1].href;
location.replace(url);*/

// document.body.children[0] = "h2"; - поменять так не получится. Потому что менять можно только свойства, а не названия элементов

// Можно так выводить: console.dir(document.body.children[2].tBodies[0]);
/*console.dir(document.body.children[2]);
//Выводим значения первой строки таблицы.
let table = document.body.children[2];

for(let row of table.rows) {
    console.log(row.cells[0].innerText);
}*/

//Задача 2. Закрасить столбцы таблицы
let table = document.body.children[3];

for(let i = 0; i < table.rows.length; i++) {
   // Посмотрим, что выводится: console.log(table.rows[i])
   //i-ячека j-столбец
    let row = table.rows[i];

    for(let j = 0; j < row.cells.length; j++){
        if(j == i) {
            table.rows[i].cells[j].style.backgroundColor = "red";
            table.rows[i].cells[j].style.color = "white" //цифры сделали белым
            table.rows[0].cells[j].style.backgroundColor = "blue";//строку закрасили другим цветом
            //table.rows[i].cells[j].textContent = "star";//строку закрасили другим цветом (Вариант1)
            table.rows[i].cells[j].innerText = "go";//строку закрасили другим цветом (Вариант2)
        }
    }
}

table.rows[4].style.backgroundColor = ''