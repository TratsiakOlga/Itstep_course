import $ from 'jquery';
import '../scss/custome.scss';

let conn = new XMLHttpRequest();

conn.onerror = function(){
  console.log(`Не могу соединиться с целевым сервером`);
}

conn.onload = function() {
  //console.log(this); - не нужен в последующем console.

  if(this.status !== 200){
    console.log(`Получен статус ответа ${this.status}. Ошибка!`);
    return;
  }

  //let beer = JSON.parse(this.response); - если укажем вверху responseType, то эта строчка не нужна.

  renderBeerCard(this.response);
  //console.log(beer);
}

setInterval(() => {
  conn.open('GET', 'https://punkapi.online/v3/beers/random');
  conn.responseType = 'json';
  conn.send();
}, 5000);


function renderBeerCard(beer) {
  document.body.innerHTML = `<img style="width:100px" src="https://punkapi.online/v3/images/${beer.image}" alt="${beer.name}" />`; 
}

