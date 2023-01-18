let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let arrLeft =document.querySelector('.arr-left');
let arrRight =document.querySelector('.arr-right');
let slider = document.querySelector('.img-slider');
let bleft = document.querySelector('.bleft');
let bright = document.querySelector('.bright');
let currentSlide = 1;
let i = 1;


//*DOTS
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
    currentSlide = i +1;
    
  });
});



//*ARROWS
arrLeft.addEventListener("click",()=>{
  let x = 0;

  slides.forEach((s)=>{
    s.classList.remove('active');
  })
 
  if(i !=0)
  {
    i--;
  }
  else
  {
    i=4
  }
  
    slides[i].classList.add('active');
    
    
})


arrRight.addEventListener("click",()=>{

  slides.forEach((s)=>{
    s.classList.remove('active');
  })
 
    slides[i].classList.add('active');
    if(i !=4)
    {
      i++
    }
    else{
      i=0;
    }



})



let repeat = function(activeClass){
  let active = document.getElementsByClassName('active');

  let play;

 let repeater = () => {
    play = setInterval(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
        // activeSlide.style.backgroundColor="rgba(20, 19, 19, 0.5)";
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    // btns[i].style.backgroundColor ="#62D2A2";
      i++;
      
      
     
    
      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if(currentSlide !=5)
          {
            i = currentSlide;
          }else
          {
            i = 0
          }
        });
      });

     
     
      currentSlide =i;
      

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }

  }, 2000)};

  repeater();

  slider.addEventListener('mouseover',()=>{
    clearInterval(play);
  });

  slider.addEventListener('mouseout',()=>{
    repeater();
  })

  bleft.addEventListener('mouseover',()=>{
    clearInterval(play);
 

  });

  bleft.addEventListener('mouseout',()=>{
    repeater();
  })

  bright.addEventListener('mouseover',()=>{
    clearInterval(play);
  });

  bright.addEventListener('mouseout',()=>{
    repeater();
  })

};


repeat();