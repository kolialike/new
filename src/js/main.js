jQuery(function($){

    var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        centeredSlides: true,
        paginationClickable: true,
        initialSlide: 1
    });
   
     //tabs
  var devicesImg = $(".devices-img-container").find("img");
  var tabs = $(".tabs").find("a");
  tabs.on('click', function(event) {
    event.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).parent().find('a').index($(this));
    devicesImg.eq(index).addClass('active').siblings().removeClass('active');
	});
});
