let totalPages = 0;
let currentPageIndex = 1;

function setSliderPagination(){
    $("#slider-pagination"). html (`${currentPageIndex} из ${totalPages}`);
}

$(document).ready(function(){
    let options = {
        items: 4,
        margin: 30,
        nav: true, 
        dots: false,
        slideBy:4,    
    }

    let owl = $('.owl-carousel');
    owl.owlCarousel(options);

    $("#slider-left").click(function(){
        owl.trigger('prev.owl.carousel');
        
        if(currentPageIndex > 1){
            currentPageIndex--;
        }

        setSliderPagination();

        
    });

    $("#slider-right").click(function(){
        owl.trigger('next.owl.carousel');
        
        if(currentPageIndex < totalPages){
            currentPageIndex++;
        }

        setSliderPagination();
    });

    let totalCarts = $(".owl-item").length;
    
    totalPages = Math.ceil(totalCarts / options.items);

    setSliderPagination();

//$("#form-login").validate(); - если используем библиотеку jqueary
//Справочно!!! Валидация с помощью bootstrap (до function validate(event))
    const loginForm = document.querySelector('#form-login');

    if(loginForm) {
        loginForm.addEventListener('submit', function(event){
            if (!this.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
    
            this.classList.add('was-validated');
        });
    }
  });


  function validate(event) {
      let isValid = true;    
      let form = document.forms[0];
      let name = form.elements[0];
      let email = form.elements[1];
  
      let name_regex = /^[A-Za-zА-Яа-я]{2,20}\s*[A-Za-zА-Яа-я]{0,20}$/; //говори, что можно писать Фамилию, имя
      let email_regex = /^[a-z_\-0-9]+@[a-z_\-0-9]+\.[a-z]{2,3}$/;

      name.classList.remove('is-invalid');
      if(!name_regex.test(name.value)){
          name.classList.add('is-invalid');
          isValid = false;
        }

        email.classList.remove('is-invalid');
        if(!email_regex.test(email.value)){
            email.classList.add('is-invalid');
            isValid = false;
        } 

        return isValid;
    }
    //console.dir(form);
    //console.dir(name);
    //console.dir(document.forms);
    
    //let str = "Hi! My name is Edgar. I'm 42 years old"; - это для примера заводилось
    
    //let regex = /[A-Za-zА-Яа-я]{2,20}/; //что должно содержаться английские от A-Z и маленькие a-z, также русские от А-Я и а-я (большие и маленькие), и от 2 до 20 букв

    /*let result = regex.text(str);

    console.log(result)*/
    //let regex = /\sEdgar/; - указывает есть ли данное выражение в тексте //\s - обозначение пробела.
    /*let regex = /\d/; - проверяет есть ли в тексте цифры
    let regex = /\d{2}/; // указывает: находим совпадения где есть подряд две цифры {2} - указывает, что нужно искать 2 цифры. 

    let regex = /\d{2,}/; // горит или два, или больше
    let regex = /\d\s\d\s\d\s\d/; //четыре цифры, четыре пробела между цифрами. Если цифры, например 4 2 3 5
    let result = regex.test(str);*/
    /* Проверяем есть ли имя в строке:
    if(result){
        console.log(result);
    }*/

    //console.log(result);
    //console.dir(regex);
/*return false;
}*/
    