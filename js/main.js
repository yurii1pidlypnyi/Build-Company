"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=new Array(t);o<t;o++)i[o]=e[o];return i}var burger=document.querySelector(".header__burger"),menu=document.querySelector(".header__menu"),body=document.body;burger.addEventListener("click",(function(){burger.classList.toggle("active"),menu.classList.toggle("active"),body.classList.toggle("lock")}));var buttonPlay=document.querySelector(".video__play"),videoBlock=document.querySelector(".about-section__video"),video=document.querySelector(".video__block");buttonPlay&&(buttonPlay.addEventListener("click",(function(){videoBlock.classList.toggle("active"),buttonPlay.classList.toggle("active"),video.play(),video.controls=!0})),video.onpause=function(){videoBlock.classList.toggle("active"),buttonPlay.classList.toggle("active"),video.controls=!1,video.pause()});var check=document.querySelector(".agreement"),agree=document.querySelector(".details__forma--checkbox"),agree1=document.querySelector(".contact-us__forma--checkbox");agree&&agree.addEventListener("click",(function(){check.checked?check.checked=!1:check.checked=!0,agree.classList.toggle("active")})),agree1&&agree1.addEventListener("click",(function(){check.checked?check.checked=!1:check.checked=!0,agree1.classList.toggle("active")}));var radioItems=document.querySelectorAll(".contact-us__forma--radio--element");radioItems&&_toConsumableArray(radioItems).forEach((function(e){e.addEventListener("click",(function(){_toConsumableArray(radioItems).forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),e.querySelector(".radio-contact").checked=!0}))}));var worksSlider=document.querySelector(".works-section__list"),clientsSlider=document.querySelector(".clients-company__list"),relatedSlider=document.querySelector(".related-projects__list"),similarSlider=document.querySelector(".similar-projects__list");if(worksSlider)var worksSectionSlider=new Swiper(worksSlider,{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".works-section__next",prevEl:".works-section__prev"},breakpoints:{576:{slidesPerView:2},768:{slidesPerView:3}}});if(clientsSlider)var clientsCompanySlider=new Swiper(clientsSlider,{slidesPerView:1,spaceBetween:0,navigation:{nextEl:".clients-company__next",prevEl:".clients-company__prev"}});if(relatedSlider)var relatedProjectsSlider=new Swiper(relatedSlider,{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".related-projects__next",prevEl:".related-projects__prev"},breakpoints:{576:{slidesPerView:2},768:{slidesPerView:3}}});if(similarSlider)var similarProjectsSlider=new Swiper(similarSlider,{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".similar-projects__next",prevEl:".similar-projects__prev"},breakpoints:{576:{slidesPerView:2},768:{slidesPerView:3}}});var workImages=document.querySelector(".work-images-slider");if(workImages)var workSlider=new Swiper(".work-images-nav",{spaceBetween:20,slidesPerView:3,freeMode:!0,watchSlidesProgress:!0,breakpoints:{576:{slidesPerView:6},768:{slidesPerView:10}}}),workSlidesNav=new Swiper(workImages,{spaceBetween:20,slidesPerView:1,navigation:{nextEl:".work-images__next",prevEl:".work-images__prev"},thumbs:{swiper:workSlider}});var historySlider=document.querySelector(".history__list"),historyListNav=document.querySelector(".history-nav"),historyNav=document.querySelectorAll(".history-nav__item");if(historySlider){var histSlider=new Swiper(historySlider,{spaceBetween:20,slidesPerView:1,navigation:{nextEl:".history__next",prevEl:".history__prev"}});histSlider.on("slideChange",(function(){var e=historyListNav.querySelector('[data-index="'.concat(histSlider.realIndex,'"]'));document.querySelector(".history-nav__item.active").classList.remove("active"),e.classList.toggle("active")})),_toConsumableArray(historyNav).forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".history-nav__item.active").classList.remove("active"),e.classList.toggle("active"),histSlider.slideTo(e.dataset.index)}))}))}var heroHeight,toTop=document.querySelector(".to-top");document.querySelector(".hero")&&(heroHeight=document.querySelector(".hero").offsetHeight),document.querySelector(".hero-page")&&(heroHeight=document.querySelector(".hero-page").offsetHeight);var isVisibleToTop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e>=heroHeight?toTop.classList.add("to-top--active"):toTop.classList.remove("to-top--active")};isVisibleToTop(window.scrollY),window.addEventListener("scroll",(function(){var e=window.scrollY;isVisibleToTop(e)})),toTop.addEventListener("click",(function(){body.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}));var subscribe=document.querySelector(".vacancies__menu--subscribe"),sendCv=document.querySelector(".vacancies__menu--send"),modalSubs=document.querySelector(".modal-subs"),modalCv=document.querySelector(".modal-cv"),exitModal=document.querySelectorAll(".exit-modal");exitModal&&_toConsumableArray(exitModal).forEach((function(e){e.addEventListener("click",(function(){modalSubs.classList.contains("active")&&modalSubs.classList.toggle("active"),modalCv.classList.contains("active")&&modalCv.classList.toggle("active"),body.classList.toggle("lock"),toTop.classList.toggle("modal")}))})),subscribe&&subscribe.addEventListener("click",(function(){modalSubs.classList.toggle("active"),body.classList.toggle("lock"),toTop.classList.toggle("modal")})),sendCv&&sendCv.addEventListener("click",(function(){modalCv.classList.toggle("active"),body.classList.toggle("lock"),toTop.classList.toggle("modal")}));var spoilerButton=document.querySelectorAll(".service-offers__item--title"),spoilerText=document.querySelector(".service-offers__item--text");spoilerButton&&_toConsumableArray(spoilerButton).forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active"),e.nextElementSibling.classList.toggle("active")}))}));var tabsNav=document.querySelectorAll(".portfolio__item"),cellItem=document.querySelectorAll(".portfolio__cell"),loadMore=document.querySelector(".portfolio__more"),activeColections=_toConsumableArray(cellItem);function tabNavigation(e){_toConsumableArray(tabsNav).forEach((function(e){e.classList.remove("active")})),e.classList.toggle("active"),portfolioCell(e.dataset.path)}function portfolioCell(e){_toConsumableArray(cellItem).forEach((function(e){e.classList.remove("visible")})),loadingItems("all"!==e?_toConsumableArray(document.querySelectorAll('[data-target="'.concat(e,'"]'))):cellItem)}function loadingItems(e){if(e.length<=9)activeColections=e,e.forEach((function(e){e.classList.add("visible")})),loadMore.style.display="none";else{activeColections=e;for(var t=0;t<9;t++)_toConsumableArray(e)[t].classList.add("visible");loadMore.style.display="block"}}tabsNav&&_toConsumableArray(tabsNav).forEach((function(e){e.addEventListener("click",(function(){tabNavigation(e)}))})),loadMore&&loadMore.addEventListener("click",(function(){for(var e=0,t=0;t<activeColections.length;t++)if(!0!==activeColections[t].classList.contains("visible")){e=t;break}for(var o=e;o<2*e;o++){if(!activeColections[o]){loadMore.style.display="none";break}activeColections[o].classList.add("visible")}}));var newsNav=document.querySelectorAll(".news-page__tab"),newsItems=document.querySelectorAll(".news__item"),activeNewsColections=_toConsumableArray(newsItems),newsArrowLeft=document.querySelector(".news-page__arrow--left"),newsArrowRight=document.querySelector(".news-page__arrow--right");if(newsArrowLeft&&newsArrowLeft.addEventListener("click",(function(){switchPage(document.querySelector(".news-page__page.active").previousElementSibling)})),newsArrowRight&&newsArrowRight.addEventListener("click",(function(){switchPage(document.querySelector(".news-page__page.active").nextElementSibling)})),newsNav){var suitableItems=function(e){_toConsumableArray(newsItems).forEach((function(e){e.classList.remove("visible")})),loadingNewsItems("all"!==e?_toConsumableArray(document.querySelectorAll('[data-target="'.concat(e,'"]'))):newsItems)},loadingNewsItems=function(e){if(e.length<=6)activeNewsColections=e,e.forEach((function(e){e.classList.add("visible"),newsPageNav(activeNewsColections,1)}));else{activeNewsColections=e;for(var t=0;t<6;t++)_toConsumableArray(e)[t].classList.add("visible");newsPageNav(activeNewsColections,1)}},newsPageNav=function(e,t){_toConsumableArray(document.querySelectorAll(".news-page__page")).forEach((function(e){e.remove()}));var o=Math.ceil(e.length/6);newsArrowRight&&(newsArrowRight.style.visibility="hidden"),newsArrowLeft&&(newsArrowLeft.style.visibility="hidden"),o>1&&(newsArrowRight.style.visibility="visible");for(var i=1;i<=o;i++){var r=document.createElement("div");r.classList.toggle("news-page__page"),i==t&&r.classList.toggle("active"),r.textContent=i,newsArrowRight&&newsArrowRight.before(r)}_toConsumableArray(document.querySelectorAll(".news-page__page")).forEach((function(e){e.addEventListener("click",(function(){_switchPage(e)}))}))},_switchPage=function(e){document.querySelector(".news-page__page.active").classList.remove("active"),e.classList.toggle("active"),activeNewsColections.forEach((function(e){e.classList.remove("visible")})),newsArrowRight.style.visibility="visible",newsArrowLeft.style.visibility="hidden";for(var t=6*(+e.textContent-1);t<6*+e.textContent&&(activeNewsColections[t+1]||(newsArrowRight.style.visibility="hidden"),activeNewsColections[t]);t++)activeNewsColections[t].classList.add("visible");e.textContent>1&&(newsArrowLeft.style.visibility="visible"),e.textContent>1&&(newsArrowLeft.style.visibility="visible"),document.querySelector(".news-page__body").scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})};loadingNewsItems(activeNewsColections),_toConsumableArray(newsNav).forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".news-page__tab.active").classList.remove("active"),e.classList.toggle("active"),suitableItems(e.dataset.path)}))}))}