var initSwipe = true;

$(function(){
  mySwiper = $('.swiper-container').swiper({
  //Your options here:
    mode:'horizontal',
    loop: false,
    slidesPerView: 'auto'
  //etc..
  });
  //mySwiper.wrapperTransitionEnd(callback_function,true);
  
});