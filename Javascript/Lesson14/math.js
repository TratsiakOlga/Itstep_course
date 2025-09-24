/*let num1 = 1200;
let num2 = 34;

console.log(calc.div(num1,num2));

let block = $(".block");

if(block) {
    block.style.width = "300px";
    block.style.height = "200px";
    block.style.backgroundcolor = "red";
}*/

//$(".block").html("<h1>Я добавлен при помощи Jquery!!!!!</h1>")

//Без Jquery выполнялось бы так:
/*let div = document.querySelector(".block");

if(div) {
    div.innerHTML = '<h1>Я добавлен при помощи Jquery!!!!!</h1>';
}*/

console.log($(".block"));

$(".block").html("<h1>Я добавлен при помощи Jquery!!!!!</h1>").css({
    width: "300px",
    height: "200px",
    backgroundColor: "red"
/*}).fadeOut("slow", function(){
    console.log("Блок исчез!!");*/ // таким образом скрывали блок
});

//Навесить клик на кнопку
$("#hide").click(function(){
    $(".block").slideToggle(1000, () => {
        if($(this).html() == "Скрыть блок"){
            $(this).html("Открыть блок");
        } else {
            $(this).html("Скрыть блок");
        }
    });
});

//2-й способ. Когда загружается документ. On - навешивает обработчик событий на любое событие
/*$(window).on('load', function(){
    alert("Вся страница загрузилась");
});*/
// Когда построен дом. И в этом случае скрипты можно подключать и в head. То есть если не построен дом, то библиотеки не важно где подключены. А если построен, можно помещать скрипты и в head, и в body.
$(document).ready(function(){
    $(".block").html("<h1>Я добавлен при помощи Jquery!!!!!</h1>").css({
            width: "300px",
            height: "200px",
            backgroundColor: "red"
    });
    $("#hide").click(function(){
        $(".block").slideToggle(1000, () => {
            if($(this).html() == "Скрыть блок"){
                $(this).html("Открыть блок");
            } else {
                $(this).html("Скрыть блок");
            }
        });
    });
//Cоздаем новый элемент через библиотеку Jquery. Добавим этот элемент в body:
    let a = $("<a href='html://google.com'></a>");

    a.html("Это ссылка");

    $("body").append(a);
//Можно удалить ссылку:
    a.remove();
//Можно удалить body:
    //$("body").remove();
//Можно удалить класс любой (указываешь где находится класс и как называется):
    //$("div").remove(".block");
    console.log(a);
});
