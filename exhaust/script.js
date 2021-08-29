document.querySelector('.burger').addEventListener('click', openNavPanel);

function openNavPanel(){
    document.querySelector('.menu').style.transform = "translateX(0px)";
    let area = document.querySelectorAll('body > div:not(.menu)');
    for (let points of area){
        points.addEventListener('click', closeNavPanel)
    }
    document.querySelector('.burger').removeEventListener('click', openNavPanel);
    document.querySelector('.burger').addEventListener('click', closeNavPanel);
}

function closeNavPanel(){
    document.querySelector('.menu').style.transform = "translateX(300px)";
    document.querySelector('.burger').removeEventListener('click', closeNavPanel);
    document.querySelector('.burger').addEventListener('click', openNavPanel);
}

let slides = ['url(../src/img/beer.jpg)', 'url(../src/img/bet.jpg)', 'url(../src/img/doner.jpg)', 'url(../src/img/finance.jpg)', 'url(../src/img/garage.jpg)'];
let slide1 = 0;
let slide2 = 1;
let slide3 = 2;
let lastSlide = slides.length-1;

function drawSlides(){
    document.querySelector('.slide1').style.backgroundImage = slides[slide1];
    document.querySelector('.slide2').style.backgroundImage = slides[slide2];
    document.querySelector('.slide3').style.backgroundImage = slides[slide3];
}

document.querySelector('.arrow-left').addEventListener('click', previousSlide);
document.querySelector('.arrow-right').addEventListener('click', nextSlide);

function checkSlides(){
    if(slide1<0){
        slide1=lastSlide;
    }
    if(slide2<0){
        slide2=lastSlide;
    }
    if(slide3<0){
        slide3=lastSlide;
    }
    if (slide1>lastSlide){
        slide1=0;
    }
    if (slide2>lastSlide){
        slide2=0;
    }
    if (slide3>lastSlide){
        slide3=0;
    }
}

function nextSlide(){
    slide1++;
    slide2++;
    slide3++;
    checkSlides();
    drawSlides();
}

function previousSlide(){
    slide1--;
    slide2--;
    slide3--;
    checkSlides();
    drawSlides();
}

drawSlides()