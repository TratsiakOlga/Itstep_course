let ul = document.body.children[2];

console.dir(ul)

ul.firstElementChild.style.textTransform = 'uppercase'; //text-transforme: uppercase (так бы записали в css)
ul.lastElementChild.style.color = 'red';
//InnerText - содержит текст, который есть внутри элемента
// \n - переход на новую строку
// innerHTML - может менять содержимое HTML-элемента. И все эти изменения отражаются сразу в браузере.
// Пример (при таком примере элементов становится один): ul.innerHTML = '<li>Это только одна строка</li>'
//Изучим соседей. (есть соседи script и а) nextElementSibling - хранит элемент; nextSibling - содержит узел. Предыдущий сосед хранится в previousElementSibling, previousSibling
ul.previousElementSibling.style.fontSize="20px";
//Родители. Содержится информация она в свойстве parentElement
ul.parentElement.id = 'page-body'
//tagName - выводится имя тега. autorHTML - внутри элемента+сам элемент, inner - только внутри.
// Свойства, начинающиеся с on - свойства, относящиеся к обработчикам событий
//attributes - содержит массив всех атрибутов.
console.log(ul.getAttribute('id')); // Если хотим понять какой атрибут у id
//ul.setAttribute('class', 'superlist');
// Все классы содержатся в массиве classList
//Добавим класс элементу ul, но сразу определим класс normolize
//ul.classList.add('normolized', 'ulderlined');
//определим в html еще один класс underlined:
ul.classList.toggle('underlined');
//toggle - добавляет класс, если его нет и удаляет, если есть. add - добавляет класс, remove - убирает, toggle - либо добавляет, либо убирает.
//containts - показывает есть ли у элемента класс
ul.classList.add('normolized');

if(ul.classList.contains('undefined')){
    ul.classList.remove('undefined');
} else {
    ul.classList.add('undefined');
}

//html мы искали через children. Это хорошо, когда одна вложенность. А там где много вложенностей используют несколько методов (которые позволяют искать элементы внутри DOM). Посмотрим как будем искать div. По нескольким направлениям
let block = document.getElementById('flexbox'); //возвращает только один элемент. Т.к. id может быть один, они уникальны
//Ищем по имеющемуся id
block.innerText = "Hello from founded block!!!"
block.classList.add('bordered', 'd-flex');
//Искать по классу, вбиваем имя класса
let blocks = document.getElementsByClassName('example'); // а классов бывает много и он возвращает коллекцию. И чтобы работать только с нашим нужно проставить индекс
block = blocks[0];
block.classList.add('padding-10');
//точно такой же способ по тегу - эта функция возвращает еще большую коллекцию. Ищем элементы по имени тега. Не очень удобно.
blocks = document.getElementsByTagName('div')
//Более универсальный,  который заменяет предыдущие (выбирает по css-селекторам).Первый Возвращает первый найденный селектор. Сюда можем передавать любой селектор (., # и др.)
//block = document.querySelector('#flex-box')
block = document.querySelector('.example')
block.classList.remove('padding-10');
//Второй - вернет коллекцию всех элементов. И если нужен конкретный элемент - мы должны указать индекс.
block = document.querySelectorAll('.example');
block = blocks[0];
//И на самом деле можно пользоваться только двумя последними, так как они универсальны. И их всегда хватает для поиска.
//Задание. Найти заголовок и выравнять по центру.
let head = document.querySelector('h1')
head.style.textAlign = 'center'
//Вместо текста в ссылке сделать картинку
let link = document.querySelector('a');
link.innerHTML = '<img src="https://www.kartinki24.ru/uploads/gallery/main/25/kartinki24_ru_love_105.jpg" alt=""/>';
//Cделать, чтобы 1-й элемент ul был слева, 2-й по центру, 3-й справа
ul = document.querySelector('#list');
ul.lastElementChild.style.textAlign = 'right';
// 1-й способ: ul.children[1].style.textAlign = 'center'; 
//2-й способ:
let li = document.querySelector('#list li:nth-child(2)');
li.style.textAlign = 'center';

// Cделаем меняющиеся слайды