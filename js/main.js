"use strict";var burger=document.querySelector(".header__burger"),menu=document.querySelector(".header__menu"),body=document.body;burger.addEventListener("click",(function(){burger.classList.toggle("active"),menu.classList.toggle("active"),body.classList.toggle("lock")}));var buttonPlay=document.querySelector(".video__play"),videoBlock=document.querySelector(".about-section__video"),video=document.querySelector(".video__block");buttonPlay&&(buttonPlay.addEventListener("click",(function(){videoBlock.classList.toggle("active"),buttonPlay.classList.toggle("active"),video.play(),video.controls=!0})),video.onpause=function(){videoBlock.classList.toggle("active"),buttonPlay.classList.toggle("active"),video.controls=!1,video.pause()});var check=document.querySelector(".agreement"),agree=document.querySelector(".details__forma--checkbox");agree&&agree.addEventListener("click",(function(){check.checked?check.checked=!1:check.checked=!0,agree.classList.toggle("active")}));var worksSlider=document.querySelector(".works-section__list"),clientsSlider=document.querySelector(".clients-company__list");if(worksSlider)var worksSectionSlider=new Swiper(worksSlider,{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".works-section__next",prevEl:".works-section__prev"},breakpoints:{576:{slidesPerView:2},768:{slidesPerView:3}}});if(worksSlider)var clientsCompanySlider=new Swiper(clientsSlider,{slidesPerView:1,spaceBetween:0,navigation:{nextEl:".clients-company__next",prevEl:".clients-company__prev"}});var heroHeight,toTop=document.querySelector(".to-top");document.querySelector(".hero")&&(heroHeight=document.querySelector(".hero").offsetHeight),document.querySelector(".hero-page")&&(heroHeight=document.querySelector(".hero-page").offsetHeight);var isVisibleToTop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e>=heroHeight?toTop.classList.add("to-top--active"):toTop.classList.remove("to-top--active")};isVisibleToTop(window.scrollY),window.addEventListener("scroll",(function(){var e=window.scrollY;isVisibleToTop(e)})),toTop.addEventListener("click",(function(){body.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"}),console.log(1)}));