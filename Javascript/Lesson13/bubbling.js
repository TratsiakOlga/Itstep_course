let div = document.getElementById("square")
let button = document.querySelector("#square button");

div.addEventListener('click', function(event){
    this.style.borderColor = "red";
    
    if(event.target.tagName.toLowerCase() == 'button')
        event.target.classList.toggle("animated");    
    console.log ("Мы нажали на кнопку!!!");
})

/*button.addEventListener('click', function(event){
    event.stopPropagation();
    this.parentElement.style.backgroundColor = "yellow"
});*/