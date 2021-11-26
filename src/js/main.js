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
const relatedSlider = document.querySelector('.related-projects__list');
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
//Related Projects
if (relatedSlider) {
  const relatedProjectsSlider = new Swiper(relatedSlider, {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.related-projects__next',
      prevEl: '.related-projects__prev',
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
//--------------------------------------
//Scroll To Top
const toTop = document.querySelector('.to-top');
let heroHeight;

if (document.querySelector('.hero')) {
  heroHeight = document.querySelector('.hero').offsetHeight;
}

if (document.querySelector('.hero-page')) {
  heroHeight = document.querySelector('.hero-page').offsetHeight;
}

const isVisibleToTop = (y = 0) => {
  if (y >= heroHeight) {
    toTop.classList.add('to-top--active');
  } else {
    toTop.classList.remove('to-top--active');
  }
}

isVisibleToTop(window.scrollY);

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  isVisibleToTop(y);
});

toTop.addEventListener('click',()=>{
  body.scrollIntoView({
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth',
  })
  console.log(1);
})