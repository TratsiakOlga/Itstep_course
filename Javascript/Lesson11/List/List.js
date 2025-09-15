/*//Задача1. 
Создайте список
важность: 4
Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

Демо в новом окне 

Решение:
let div = document.getElementById("root");

let ul = document.createElement("ul");

div.append(ul);//этот элемент добавим сразу в div

let text = '';

while(text = prompt('Введите значение для пункта списка')){
    let li = document.createElement("li");
    li.innerText = text;

    ul.append(li);
}*/


/*Задача2.Создать дерево из объектов
Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
Синтаксис:

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере*/

//Задача пока не завершена 
/*let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

  let div = document.getElementById("root");
    
  function createTree(container, data){
    let ul = document.createElement("ul");

    for(let key in data) {
        let li = document.createElement("li");
        li.innerText = key;
    
        if(data[key]) {
            let ulInner = document.createElement("ul");        

            for(let key1 in data[key]){
                let li1 = document.createElement("li");
                li1.innerText = key1;

                if (data[key][key1]){
                    let ulSuperInner = document.createElement("ul");

                    for (let key2 in data[key][key1]){
                        let li2 = document.createElement("li");
                        li2.innerText = key2;

                        ulSuperInner.append(li2);
                    }
                    li.append(ulSuperInner);
                }

                ulInner.append(li1);
            }

            li.append(ulInner);
        }
    
        ul.append(li);
    }

    container.append(ul);
  }

  createTree(ul, data);*/

  //Рекурсия.
  //3! = 1*2*3 - Три факториал равно.
 /* function faktorial(n){

  }

  console.log(faktorial(3));*/

  // Задача 3. 
function showNotification(options){
    let div = document.createElement("div");

    div.classList.add("notification");

    if(options.className) {
        div.classList.add(options.className);
    }

    div.style.top = options.top + "px";
    div.style.right = options.right + "px";

    div.innerText = options.html;

    document.body.prepend(div);

    setTimeout(function(){
        div.classList.add("hide")},1500); 
        setTimeout(function(){div.remove()}, 1500);
}

showNotification({
    top: 10,
    right: 10,
    html: "Ошибка, вы ввели неверные данные",
    className: "error"
});
//чтобы сообщение появлялось в разных местах (нужно сделать генератор случайных чисел):
function notify() {
    let top = randomInteger(0, 400);
    let right = randomInteger(0, 600);
    showNotification({
        top: top,
        right: right,
        html: "Ошибка, вы ввели неверные данные",
        className: "error"
    });
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

setInterval(notify, 1000)