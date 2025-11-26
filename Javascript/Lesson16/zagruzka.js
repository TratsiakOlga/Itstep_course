let message = document.createElement('span');
let frame = document.querySelector(".block");

//Решение обычным способом:
/*function load(){
    return new Promise(function(resolve, reject){
    setTimeout(() => {
        let m = 7;
    
        if(m < 5) {
            resolve("Данные загружены успешно");
        }else{
            let error = new Error ("Ошибка загрузки данных")
            reject(error);
        }    
    }, 5000);
});

let promise = load(); 

//Промис отражает результат
promise.then((result) => {
    message.innerText = result;
    frame.append(message);
}).catch((error) => {
    message.innerText = error.message;
    frame.append(message);
}).finally(() => {
    document.querySelector("svg").remove();
});
}*/

/*Пример использования async.
async function rand(){
    return Math.random();
}
//console.log(rand());
rand().then((result) => {console.log(result)});*/

//C использование ключевого слова async (всегда возвращает промис как результат своей работы).
async function load() {
    let m = 3;

    if (m < 5) {
        return "Данные загружены успешно";
    } else {
        let error = new Error ("Ошибка загрузки данных")
        throw error;
    }
}

/*Использование async
setTimeout (() => {
    load().then((result) => {
        message.innerText = result;
        frame.append(message);
    }).catch((error) => {
        message.innerText = error.message;
        frame.append(message);
    }).finally(() => {
        document.querySelector("svg").remove();
    });    
}, 5000);*/

//использование async, await одновременно. Как они сокращают коды.
setTimeout(async() =>{
    try{
        /*let result = await load();
        message.innerText = result; Можно написать сокращеннее:*/
        message.innerText = await load()
    } catch(error){
        message.innerText = error.message;
    } finally {
        frame.append(message);
        document.querySelector("svg").remove();
    }  
}, 3000);

//Использование функции fetch:
let response = fetch('https://punkapi.online/v3/beers/random');

console.log(response);
