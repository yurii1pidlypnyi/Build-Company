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
console.log(video.controls)
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