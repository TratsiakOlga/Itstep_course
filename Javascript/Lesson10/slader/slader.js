let images = document.querySelectorAll(".slader img");
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
        } else {
            images[i].classList.remove('active');
        }
    }
}

setInterval(changeSlide, 2000);
