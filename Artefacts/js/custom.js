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
  });


  function validate() {
      return true ;
  }