import '../scss/index.scss';

type State = {
    topicIndex: number | null,
    wordIndex: number | null
};

let state: State = JSON.parse(window.localStorage.getItem('state'));

if (!state){
    state = {
        topicIndex: null,
        wordIndex:null,
    }
}

let currendWord: string | null = null;
let wordLetters: Array<any> = [];  // Можно так было писать вместа array: string[]
let errorScore: number = 0;
let successScore: number = 0;

const alphabet: string = 'абвгдеёжзиклмнопрстуфхцчшщьъыэюя';
const topics: Array<string> = ["Города", "Транспорт", "Спорт"];

const words: any = {
    "Города": ["минск", "москва", "мариж", "рим"],
    "Транспорт": ["автомобиль", "самолет", "телега", "трамвай"],
    "Спорт": ["футбол", "шахматы", "керлинг", "теннис"]
}

type GameElements = {
    topic: HTMLSpanElement,
    word: HTMLDivElement,
    letters: HTMLDivElement
    hungman: Array<any>
}

const gameElements: GameElements = {
    topic: document.getElementById("game-topic"),
    word: document.querySelector(".word"),
    letters: document.querySelector(".letters"),
    hungman:
        [document.getElementById("kran"),
        document.getElementById("head"),
        document.getElementById("body"),
        document.getElementById("left-hand"),
        document.getElementById("right-hand"),
        document.getElementById("left-leg"),
        document.getElementById("right-leg")
    ]
}

function init(): void {
    let topicIndex: number = state.topicIndex !== null ? state.topicIndex : rand(0,topics.length - 1); 
    let wordsSet: Array<string> = words[topics[topicIndex]];
    let wordIndex: number = state.wordIndex !== null ? state.wordIndex : rand(0,wordsSet.length - 1);

    currendWord = wordsSet[wordIndex];

    gameElements.topic.innerText = topics[topicIndex];

    for(let i: number = 0; i < currendWord.length; i++) {
        let span: HTMLSpanElement = document.createElement("span");
        span.classList.add("word-letter");
        gameElements.word.append(span);

        let wordLetter: any = {
            letter: currendWord[i],
            element: span
        }

        wordLetters.push(wordLetter);
    }

    for(let i: number = 0; i < alphabet.length; i++) {
        let button: HTMLButtonElement = document.createElement("button");
        button.classList.add("letter");
        button.innerText = alphabet[i];

        button.onclick = () => {
            checkLetter(alphabet[i]);
            button.disabled=true;      // либо можно отключить обработчик событий:  button.onclick = null;
        }

        gameElements.letters.append(button);       
    }
}

function* showHungmanPartGenerate(): any{
    for (let i = 0; i < gameElements.hungman.length; i++){
        gameElements.hungman[i].style.display = 'block';
        yield;
    }
}

let showHungmanPart = showHungmanPartGenerate();

function checkLetter(letter: string){
    //console.log(letter); - проверяем отражается ли в консоли буква, которую мы нажимаем
    let pos = 0;
    let indexes = [];
    while(true) {
        let foundPos = currendWord.indexOf(letter, pos);
        
        if(foundPos == -1) {
            break;
        }

        indexes.push(foundPos);
        pos = foundPos + 1;
    }

    if(indexes.length > 0) {
        for(let index of indexes){
            wordLetters[index].element.innerText = wordLetters[index].letter;
            successScore++;
        }
        
        if(successScore == currendWord.length){
            gameOver('Вы выиграли!!!');
        }
    } else {
        showHungmanPart.next();
        errorScore++;

        if(errorScore >= gameElements.hungman.length){
            gameOver('Вы проиграли!!!')
        }
    }
}

function gameOver (message: string | null): void {
    let gameOver: HTMLDivElement = document.querySelector(".game-over");
    gameOver.innerText = message;
    gameOver.classList.add("active");

    setTimeout(() => {
        window.location.reload();
    }, 3000);
}

function rand(min: number, max: number): number{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

init();