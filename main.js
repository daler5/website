jQuery(document).ready(function($) {
    $("#scroll-top > button").on("click", function(e) {
      var body = $("html, body");
      body.stop().animate({ scrollTop: 0 }, 500, "swing");
    });
  });


  $('.slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    draggable: false
  });
  
  $('.slider')
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.slick-list').addClass('do-transition')
    })
    .on('afterChange', function(){
      $('.slick-list').removeClass('do-transition')
    });

    $(".option").click(function(){
        $(".option").removeClass("active");
        $(this).addClass("active");
        
     });

     jQuery(document).ready(function($){
  
        $('.button#login').on('click', function(e){
          alert('Открываем модальное окно');
        });
        
        $('.button#register').on('click', function(e){
          e.preventDefault();
          alert('Перенаправляем на страницу регистрации');
        });
        
      });
    