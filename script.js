$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    //project section
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


//typing animation
var typed = new Typed(".type", {
    strings: [" ","Hello,","नमस्ते,","안녕,","こんにちは,","Hola,"," "],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".type1", {
    strings: [" ","About me","Who am I?"," "],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".type2", {
    strings: [" ", "My Skills", "Area of my expertise."," "],
    typeSpeed: 100,
    backSpeed:50,
    loop: true
});
var typed = new Typed(".type3", {
    strings: [" ", "Portfolio", "My Work"," "],
    typeSpeed: 100,
    backSpeed:50,
    loop: true
});
var typed = new Typed(".type4", {
    strings: [" ", "Contact Me", "Just say hello"," "],
    typeSpeed: 100,
    backSpeed:50,
    loop: true
});