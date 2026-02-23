const ball = document.querySelector(".ball");

function moveBall(event) {
    let clientX = event.clientX; //отступ по оси Х 
    let clientY = event.clientY;

    console.dir(ball);

    let ballWidth = ball.offsetWidth;
    let ballHeight = ball.offsetHeight;

    let newLeft = clientX - Math.floor(ballWidth / 2);
    let newTop = clientY - Math.floor(ballHeight / 2);

    if (newLeft < 0) {
        newLeft = 0; // Левый край
    } else if (newLeft + ballWidth > window.innerWidth) {
        newLeft = window.innerWidth - ballWidth*2; // Правый край
    }

    if (newTop < 0) {
        newTop = 0; // Верхний край
    } else if (newTop + ballHeight > window.innerHeight) {
        newTop = window.innerHeight - ballHeight*2; // Нижний край
    }
    
    ball.style.left = newLeft + "px";
    ball.style.top = newTop + "px";
};
    
document.body.addEventListener('click', moveBall);
