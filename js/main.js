$(function(){
    $('.photo-slider').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg"></button>'
    });
    $('.menu-btn').on('click',function(){
        $('.menu-list').slideToggle();
    });

});