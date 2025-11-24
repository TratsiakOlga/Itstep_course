//Игра "Угадай число"
let num = 4;

let button = document.querySelector("#btn");
let result = document.querySelector("#result");

button.addEventListener('click', () => {
    result.classList.remove("animated");
    let promise = new Promise((resolve, reject) => {
        let input = document.querySelector("#answer");
        if(input.value == num){
            resolve("Вы угадали!!!");
        }else{
            let error = new Error("Вы не угадали");
            reject(error);
        }
    });
    /*//обрабатываем результат (что делаем после получения результата)/Обрабатывает resolve/
    promise.then((result) => {
        console.log(result);
    });
    //обрабатываем ошибку(что делаем, чтобы исправить ошибку)/Обрабатывает reject
    promise.catch((error) => {
        console.log(error.result);*/
        //Можно это написать и вместе (в catch (reject) (может быть только message), в then - есть result (для resolve)):
        //Вариант с выводом в консоль:
        /*promise.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error.message); 
        }). finally(() => {
            num = Math.floor(Math.random() * 10) + 1;
        }); //вызывается в любом случае. 
});*/
//Таким образом будем выводить сообщение на экран
        promise.then((message) => {
            result.innerText = message;
            result.classList.add("animated");
            document.body.style.backgroundColor = 'green';
        }).catch((error) => {
            result.innerHTML = error.message;
            result.classList.add("animated"); 
            document.body.style.backgroundColor = "red";
        }). finally(() => {
            num = Math.floor(Math.random() * 10) + 1;
        });
    });

//Промисы. Пример использования.
/*let promise = new Promise(function(resolve, reject){
    let summ = 14;
    
    setTimeout(() => {
        if(summ == 12) {
        console.log(`Результат выполнения операции внутри промиса: ${summ}`);resolve(summ);
        } else {
            console.log("Ошибка выполнения операции промиса");
            let error = new Error("Число далеко не 12");
            reject(error);
        }

    }, 3000);
});

console.log("Это пример использования промиса");*/

//Это написали функции, чтобы было понимание, что такое callback.
/*function loadScript(url, callback) {
    let script = document.createElement('script');
    script.src = url;

    script.onload = () => {
        //createHeader('Это заголовок') //здесь выполнилась.
        //setTimeout(() => {}, 3000);
        //createH2Header('Это тоже заголовок');
        callback();
    }

    document.body.append(script);
}

loadScript('./header.js', function(){
    createHeader('Это заголовок');
    setTimeout(() => {}, 3000);
    createH2Header('Это тоже заголовок')
});

let a = document.createElement("a");
a.innerText = 'Это ссылка';
a.href = 'https://google.com';

document.body.prepend(a); //здесь ссылка отобразилась позже всех.*/

//Пример2. В этом случае ссылка отобразится первой, а потом уже будет alert.
/*setTimeout(() => {
    alert('From timeout');
}, 3000);

let a = document.createElement("a");
a.innerText = 'Это ссылка';
a.href = 'https://google.com';

document.body.prepend(a);*/



//скрипт header.js еще не успел загрузиться, поэтому createHeader не выполняется. Чтобы выполнилось нужно добавить обработчик событий и только после него загружать createHeader.
//createHeader('Это заголовок') - здесь эта команда не выполнится.


/*Для примера писали. пример блокирующего кода. Так как она слишком тяжелая. Для загрузки используется некоторое время.
let user = {};

console.log(user);

let h1 = document.createElement("h1");
h1.innerText = 'Это заголовок';


let summ = 0;

for(let i = 0; i< 100000000000000; i++){
    summ += 1;
}

document.body.append(h1);*/


