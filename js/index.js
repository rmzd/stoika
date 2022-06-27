$(window).scroll(function(){
    let posY = window.scrollY;

    if (posY > 2){
        $('.menu').addClass('menu__active');
    } else{
        $('.menu').removeClass('menu__active');
    }
});

$(function(){

    $('.tabs-link').on('click', function(e) {
        e.preventDefault();

        $('.tabs-link').removeClass('tabs-link--active');
        $(this).addClass('tabs-link--active');

        $('.tabs-container').removeClass('tabs-container--active');
        $($(this).attr('href')).addClass('tabs-container--active');
    });
});


$('.btn__hidden').on('click', function(){
    $(this).addClass('btn__hidden--active');
    $('.box__visible').addClass('box__visible--active');
});

$(document).ready(function() {
    $('.menu-burger__header').click(function (event) {
        $('.menu-burger__header,.nav-content2').toggleClass('active');
    });
});



var faq = document.getElementsByClassName("faq-unit");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        this.classList.toggle("faq-unit--active");
    });
}






