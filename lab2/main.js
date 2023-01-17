let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let arrLeft =document.querySelector('.arr-left');
let arrRight =document.querySelector('.arr-right');
let currentSlide = 1;

//dots
let manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});



var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

arrLeft.addEventListener("click",()=>{
  slides.forEach((s)=>{
    s.classList.remove('active');
  })

  if(i==0)
  {
    i = 4;
  }else
  {
    i--;
  }

  slides[i].classList.add('active');

})

arrRight.addEventListener("click",()=>{
  slides.forEach((s)=>{
    s.classList.remove('active');
  })

  if(i==4)
  {
    i = 0;
  }else
  {
    i++;
  }

  slides[i].classList.add('active');
})
  
  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;


    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000)};

  repeater();
};


repeat();