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
let agree1 = document.querySelector('.contact-us__forma--checkbox');

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
if(agree1){
  agree1.addEventListener('click', ()=>{
    if(check.checked){
      check.checked = false
    }else{
      check.checked = true
    }
    agree1.classList.toggle('active');
  });
}
//Radio Button
let radioItems = document.querySelectorAll('.contact-us__forma--radio--element');
if(radioItems){
  [...radioItems].forEach(item => {
    item.addEventListener('click',()=>{
      [...radioItems].forEach(element => {
        element.classList.remove('active')
      });
      item.classList.add('active');
      item.querySelector('.radio-contact').checked= true;
    })
  });
}

//---------------------------
//Swiper

const worksSlider = document.querySelector('.works-section__list');
const clientsSlider = document.querySelector('.clients-company__list');
const relatedSlider = document.querySelector('.related-projects__list');
const similarSlider = document.querySelector('.similar-projects__list');
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
if (clientsSlider) {
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
//Similar Projects
if (similarSlider) {
  const similarProjectsSlider = new Swiper(similarSlider, {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.similar-projects__next',
      prevEl: '.similar-projects__prev',
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
//Hero work-1 twoswipers
const workImages = document.querySelector('.work-images-slider');

if (workImages) {
  const workSlider = new Swiper('.work-images-nav', {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6
      },
      768: {
        slidesPerView: 10,
      }
    }
  });
  const workSlidesNav = new Swiper(workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}
//History about
const historySlider = document.querySelector('.history__list');
const historyListNav= document.querySelector('.history-nav');
const historyNav = document.querySelectorAll('.history-nav__item');

if (historySlider) {
  const histSlider = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prev",
    },
  })
  
  histSlider.on('slideChange',()=>{
    let activeSlide = historyListNav.querySelector(`[data-index="${histSlider.realIndex}"]`)
    document.querySelector('.history-nav__item.active').classList.remove('active')
    activeSlide.classList.toggle('active');
  });

    [...historyNav].forEach(item => {
      item.addEventListener('click', ()=>{
        document.querySelector('.history-nav__item.active').classList.remove('active')
        item.classList.toggle('active');
        histSlider.slideTo(item.dataset.index)
      })
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
})
//Modal POPUP
let subscribe = document.querySelector('.vacancies__menu--subscribe');
let sendCv = document.querySelector('.vacancies__menu--send');
let modalSubs = document.querySelector('.modal-subs');
let modalCv = document.querySelector('.modal-cv');
let exitModal = document.querySelectorAll('.exit-modal');

if(exitModal){
  [...exitModal].forEach(item => {
    item.addEventListener('click', ()=>{
      if(modalSubs.classList.contains('active')){
        modalSubs.classList.toggle('active');
      }
      if(modalCv.classList.contains('active')){
        modalCv.classList.toggle('active');
      }
      body.classList.toggle('lock')
      toTop.classList.toggle('modal');
    })
  });
}

if(subscribe){
  subscribe.addEventListener('click', ()=>{
    modalSubs.classList.toggle('active');
    body.classList.toggle('lock');
    toTop.classList.toggle('modal');
  })
}

if(sendCv){
  sendCv.addEventListener('click', ()=>{
    modalCv.classList.toggle('active');
    body.classList.toggle('lock');
    toTop.classList.toggle('modal');
  })
}
//------------------------------
//Spoiler
let spoilerButton = document.querySelectorAll('.service-offers__item--title');
let spoilerText = document.querySelector('.service-offers__item--text');

if(spoilerButton){
  [...spoilerButton].forEach(item => {
    item.addEventListener('click', ()=>{
      item.classList.toggle('active');
      item.nextElementSibling.classList.toggle('active');
    })
  });
}
//----------------------------------
//Tabs portfolio

let tabsNav = document.querySelectorAll('.portfolio__item');
let cellItem = document.querySelectorAll('.portfolio__cell');
let loadMore = document.querySelector('.portfolio__more');
let activeColections = [...cellItem];

if(tabsNav){
  [...tabsNav].forEach(item => {
    item.addEventListener('click', function(){tabNavigation(item)})
  });
}

function tabNavigation(menu) {
  [...tabsNav].forEach(element => {
    element.classList.remove('active')
  });
  menu.classList.toggle('active');
  portfolioCell(menu.dataset.path)
}


function portfolioCell(path){
  [...cellItem].forEach(element => {
    element.classList.remove('visible')
  });
  if(path !== 'all'){
    loadingItems([...document.querySelectorAll(`[data-target="${path}"]`)]);
  }else{
    loadingItems(cellItem);
  }
}

function loadingItems(colections){
  if(colections.length<=9){
    activeColections=colections;
    colections.forEach(item => {
      item.classList.add('visible')
    });
    loadMore.style.display = 'none';
  }
  else{
    activeColections=colections;
    for(let i =0; i<9; i++){
      [...colections][i].classList.add('visible')
    }
    loadMore.style.display = 'block';
  }
}
if(loadMore){
  loadMore.addEventListener('click',()=>{
    let index = 0;
    for(let i = 0; i<activeColections.length;i++){
      if(activeColections[i].classList.contains('visible')!==true){
        index = i;
        break
      }
    }
    for(let i =index; i<index*2; i++){
      if(!(activeColections[i])){
        loadMore.style.display = 'none';
        break
      }
      activeColections[i].classList.add('visible')
    }
  })
  
}

//Tabs news

let newsNav = document.querySelectorAll('.news-page__tab');
let newsItems = document.querySelectorAll('.news__item');
let activeNewsColections = [...newsItems];
let newsArrowLeft = document.querySelector('.news-page__arrow--left');
let newsArrowRight = document.querySelector('.news-page__arrow--right');

if(newsArrowLeft){
  newsArrowLeft.addEventListener('click',()=>{
    switchPage(document.querySelector('.news-page__page.active').previousElementSibling)
  });
}
if(newsArrowRight){
  newsArrowRight.addEventListener('click',()=>{
    switchPage(document.querySelector('.news-page__page.active').nextElementSibling)
  });
}
if(newsNav.length){
  loadingNewsItems(activeNewsColections);
  [...newsNav].forEach(item => {
    item.addEventListener('click', ()=>{
      document.querySelector('.news-page__tab.active').classList.remove('active')
      item.classList.toggle('active');
      suitableItems(item.dataset.path)
    })
  });
}
function suitableItems(path){
  [...newsItems].forEach(element => {
    element.classList.remove('visible')
  });
  if(path !== 'all'){
    loadingNewsItems([...document.querySelectorAll(`[data-target="${path}"]`)]);
  }else{
    loadingNewsItems(newsItems);
  }
}

function loadingNewsItems(collection){
  if(collection.length<=6){
    activeNewsColections = collection;
    collection.forEach(item => {
      item.classList.add('visible')
      newsPageNav(activeNewsColections,1);
    });
  }
  else{
    activeNewsColections=collection;
    for(let i =0; i<6; i++){
      [...collection][i].classList.add('visible')
    }
    newsPageNav(activeNewsColections,1);
  }
}
function newsPageNav(collection,index) {
  [...document.querySelectorAll('.news-page__page')].forEach(element => {
    element.remove()
  });
  let amountPages = Math.ceil(collection.length/6);

    newsArrowRight.style.visibility='hidden';
    newsArrowLeft.style.visibility='hidden';

    if(amountPages>1){
    newsArrowRight.style.visibility='visible';
  }

  for(let i =1;i<=amountPages;i++){
    let newsPage = document.createElement('div')
    newsPage.classList.toggle('news-page__page')
    if(i==index){
      newsPage.classList.toggle('active')
    }
    newsPage.textContent = i;
    newsArrowRight.before(newsPage)

  }

  [...document.querySelectorAll('.news-page__page')].forEach(element => {
    element.addEventListener('click',function(){switchPage(element)})
  });
}
function switchPage(item) {
  document.querySelector('.news-page__page.active').classList.remove('active');
  item.classList.toggle('active');

  activeNewsColections.forEach(element => {
    element.classList.remove('visible');
  });
  newsArrowRight.style.visibility='visible';
  newsArrowLeft.style.visibility='hidden';
  for(let i = (+item.textContent-1)*6; i< +item.textContent*6; i++){
    if(!(activeNewsColections[i+1])){
      newsArrowRight.style.visibility='hidden';
    }
    if(!(activeNewsColections[i])){
      break
    }
    activeNewsColections[i].classList.add('visible')
  }
  if(item.textContent >1){
    newsArrowLeft.style.visibility='visible';
  }
  if(item.textContent >1){
    newsArrowLeft.style.visibility='visible';
  }
  document.querySelector('.news-page__body').scrollIntoView({
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth',
  })
}
//Модули плавного відкриття та закриття обєкта
let _slideUp = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
}
 let _slideDown = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (target.hidden) {
      target.hidden = false;
    }
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
}
 let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
}
//------------------------------------------------------------------
//Select
let selectItems = [...document.querySelectorAll('.select')];
if(selectItems){
  selectItems.forEach(item =>{
    item.before(select(item));
    })
  let selectBody = [...document.querySelectorAll('.select__body')];
  selectBody.forEach(item=>{
    item.addEventListener('click', ()=>{
      item.classList.toggle('active')
    })
    let options = [...item.querySelectorAll('.select__option')]
    changeOption(item, options);
  })
  
}

//----------------------Створення оболочки select
function select(item){
  let selectBody = document.createElement('div')
  selectBody.classList.add('select__body')
  
  let selectValue = document.createElement('button')
  selectValue.classList.add('select__value')
  selectValue.type = 'button';
  
  let selectOptions = document.createElement('div');
  selectOptions.classList.add('select__options');

  selectBody.append(selectValue);
  selectBody.append(selectOptions);
  [...item.options].forEach(item => {
    let selectOption = document.createElement('button')
    selectOption.type = 'button'
    selectOption.textContent = item.label;
    selectOption.classList.add('select__option');
    selectOptions.append(selectOption);
    if(item.classList.contains('placeholder')){
      selectValue.textContent = item.label;
      selectOption.classList.add('placeholder');
      selectValue.style.color = '#9A9CA5'
    }
  }
  );
  return selectBody
}
//----------------------Зміна значень
function changeOption(select,options){
options.forEach(item=>{
  item.addEventListener('click',()=>{
    select.querySelector('.select__value').textContent = item.textContent;
    select.querySelector('.select__value').style.color = '#1E212C'
    if(item.classList.contains('placeholder')){
      select.querySelector('.select__value').textContent = item.textContent;
      select.querySelector('.select__value').style.color = '#9A9CA5'
    }
    select.nextElementSibling.value = item.textContent
    if(!(select.nextElementSibling.value == item.textContent)){
      select.nextElementSibling.value = 0;
    }
  })
})
}
//---------------------------------------------------------------------------------
//Input file
let file = document.querySelector('.file');
let inputFile = document.querySelector('.input-file');

if(inputFile){
  inputFile.addEventListener('change',()=>{
    if(inputFile.files.length==1){
      if(inputFile.files[0].name.length>15){
        file.textContent = inputFile.files[0].name.slice(0,6)+'...'+inputFile.files[0].name.slice(-8)
      }else{
        file.textContent = inputFile.files[0].name
      }
    }else{
      file.textContent = 'Attach your CV*'
    }
  })
}
