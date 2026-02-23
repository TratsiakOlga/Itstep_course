let images = document.querySelectorAll(".container .slader img");
console.dir(images)
let title = document.querySelector(".title");
console.dir(title)
// Проверим сколько элементов images выводится в консоль: console.dir(images)
let currentImageIndex = 0;

function changeSlide() {
    if(currentImageIndex < 3) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }

    for(let i = 0; i < images.length; i++) {
        if(i == currentImageIndex) {
            images[i].classList.add('active');
            title.innerText = images[i].title;
        } else {
            images[i].classList.remove('active');
        }
    }
};

title.innerText = images[currentImageIndex].title;

setInterval(changeSlide, 2000);