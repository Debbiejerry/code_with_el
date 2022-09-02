const slider = document.querySelector(".slider")
        const nextBtn = document.querySelector(".next-btn");
        const prevBtn = document.querySelector(".prev-btn");
        const slides = document.querySelectorAll(".slide");
        const slideIcons = document.querySelectorAll(".slide-icon");
        const numberOfSlides = slides.length;
        var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    });
    slideIcons.forEach((slideIcon) => {
        
        slideIcon.classList.remove("active")
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slides.forEach((slide) => {

        });

        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active")
    });

    slideNumber--;

    if(slideNumber < 0){
        slides.forEach((slide) => {

        });

        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active")
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active")
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){

            slideNumber = 0;
        }
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
    
//Javascript for our Team image slider
let cards = document.querySelectorAll(".swiper");
let cads = cards.length;
let count = 0;
let nav = document.querySelectorAll("#slider>.fa");
cards[0].classList.add("show");
nav[0].addEventListener('click', function (){
    if(count <= 0){
        count = cads - 1;
    }else{
        count-=1;
    }
    
    cards.forEach(card => {
        card.classList.remove("show");
    })       
    cards[count].classList.add("show");
} )
nav[1].addEventListener('click', function (){
    if(count >= cads - 1){
        count = 0
    }else{
        count+=1;
    }
    
    cards.forEach(card => {
        card.classList.remove("show");
    })       
    cards[count].classList.add("show");
} )


//Javascript for reveal elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");;

    for(var i = 0; i < reveals.length; i++){
        
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active")
        }
    }
}


//Javascript for navigation bar effect on scroll
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Javascript for responsive navigation sidebar menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});