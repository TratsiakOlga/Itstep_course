let a = document.createElement("a");

console.dir(a);

a.href = "https://google.com";
a.innerText = "Это ссылка на Google";
a.classList.add("no-decoration")
a.style.color = "red"
//Блок нашли:
let div = document.querySelector("#root");
//Теперь нужно вставить наш элемент. 1-й метод вставки. apper - вставляет элемент перед закрывающим тегом
div.append(a);

let a1 = document.createElement("a");
a1.href="https://ya.ru";
a1.innerText = "Это ссылка на Яндекс";

//div.append(a1);
//2-й метод. prepend - Добавляет элемент после открывающего тега.
div.prepend(a1);
//Методы append и prepend - работают на самих элементов, не нужно набирать документ. Не самого объекта.
//Мы можем вставить перед открывающим тегом. C помощью before
div.before(a);
//after - вставляет после закрывающего тега.
div.after(a1);
//Добавим список. Элемент ul со вложенными li. Чтобы получается программа добавляла. Добавим список из четырех элементов.
let texts = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4']
//Создаем элемент списка
let ul = document.createElement("ul");
//теперь нужно добавить li
//forEach - 1-й параметр передаем функцию. Она применяется к каждому элементу массива.
texts.forEach(function(elem){
    let li = document.createElement("li");
    li.innerText = elem;
    ul.append(li);
});
/*let li = document.createElement("li");
li.innerText = texts[0];
ul.append(li); - запишем лучше в массиве. Это вариант как могло бы быть, если бы был один элемент*/ 
//и в итоге добавился в каждый ul - li. Чтобы добавить остальные можно пройтись в цикле
div.append(ul);
//Удалим элемент. C помощью remove.
a1.remove();

//Еще один способ добавления элемента. Нужно вставить часть кода.
let h1 = "<h1>Это заголовок</h1>";
div.innerHTML = h1;
div.textContent = h1; //выводятся как текст
/*1-й Способ:
div.innerHTML = h1; //так добавили заголовок, но список куда-то исчез. Поэтому таким способом вставляет, стирая содержимое.*/
//1-й место, куда хотим вставить. 2-й параметр - код, который нужно добавить
//div.insertAdjacentHTML("arterbegin",h1) //после открывающегося тега*/
//div.insertAbjacentHTML("afterend", h1);
//div.insertAbjacentHTML("beforebegin", h1);
//div.insertAbjacentHTML("beforeend", h1); //перед закрывающим тегом
//div.insertAdjacentElement("afterend", a); //после закрывающего тега


