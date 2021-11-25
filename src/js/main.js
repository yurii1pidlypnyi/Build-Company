//Burger Menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.body;

burger.addEventListener('click',()=>{
  burger.classList.toggle('active')
  menu.classList.toggle('active')
  body.classList.toggle('lock')
})
//----------------------
//Video
let buttonPlay = document.querySelector('.video__play')
let videoBlock = document.querySelector('.about-section__video')
let video = document.querySelector('.video__block');
if(buttonPlay){
  buttonPlay.addEventListener('click',()=>{
    videoBlock.classList.toggle('active');
    buttonPlay.classList.toggle('active');
    video.play();
    video.controls = true
  })
  video.onpause = function(){
    videoBlock.classList.toggle('active');
    buttonPlay.classList.toggle('active');
    video.controls = false;
    video.pause()
  }
}
//-------------------------
//Checkbox
let check = document.querySelector('.agreement');
let agree = document.querySelector('.details__forma--checkbox');

if(agree){
  agree.addEventListener('click', ()=>{
    if(check.checked){
      check.checked = false
    }else{
      check.checked = true
    }
    agree.classList.toggle('active');
  });
}
//---------------------------
//Swiper

const worksSlider = document.querySelector('.works-section__list');
const clientsSlider = document.querySelector('.clients-company__list');
//Work-section
if (worksSlider) {
  const worksSectionSlider = new Swiper(worksSlider, {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.works-section__next',
      prevEl: '.works-section__prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
}
//Clients-company
if (worksSlider) {
  const clientsCompanySlider = new Swiper(clientsSlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.clients-company__next',
      prevEl: '.clients-company__prev',
    },
  });
}
