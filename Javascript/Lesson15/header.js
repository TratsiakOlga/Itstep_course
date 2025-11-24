function createHeader(text){
    let h1 = document.createElement('h1');
    h1.innerText = text;
    document.body.prepend(h1);
}

function createH2Header(text){
    let h2 = document.createElement('h2');
    h2.innerText = text;
    document.body.prepend(h2);
}
