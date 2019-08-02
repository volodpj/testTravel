


let sliderLeft = document.getElementById('leftPlay');
let sliderRight = document.getElementById('rightPlay');

let slideIndex = 1;

const plusSliders = (n) =>{
  showSliders(slideIndex += n);
};
const currentSliders = (n) =>{
  showSliders(slideIndex = n);
};

const showSliders = (n) =>{
  let i;
  let sliders = document.querySelectorAll('.slider__item');
  let dots = document.querySelectorAll('.dots__dot');
  if( n > sliders.length ){
    slideIndex = 1;
  }
  if( n < 1){
    slideIndex = sliders.length;
  }
  for(i = 0; i < sliders.length; i++){
    sliders[i].style.display = 'none'
  }
  for(i = 0; i < sliders.length; i++){
    dots[i].className = dots[i].className.replace("active","");
  }
  sliders[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

setInterval(() => {
  plusSliders(1)
}, 5000)
showSliders(slideIndex);



const photoshop = document.querySelector('.photoshop');
const html = document.querySelector('.html');
const js = document.querySelector('.js');
const worpress = document.querySelector('.worpress');

const skils = document.querySelector('.scils');



  






