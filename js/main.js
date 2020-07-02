const sliders=document.getElementById('sliders'),
slideitem=document.querySelectorAll('.slider-container__images__item');
dot = document.querySelectorAll(".slider__slider-container__images__iten__dots__dot");
let count=0;
const addClassSlide = (item, index, classStyle) => {
            item[index].classList.add(classStyle);
     
        };
        const removeClassSlide = (item, index, classStyle) => {
            item[index].classList.remove(classStyle);
         
        };
sliders.addEventListener('click',event=>{
    event.preventDefault();
    const target =event.target;
    if (!target.matches(".btn, .slider__slider-container__images__iten__dots__dot")){return}
    removeClassSlide(slideitem,count,"slider-container__images__item-active");
    removeClassSlide(dot,count,"slider__slider-container__images__iten__dots__dot-active");
    if (target.matches('.slider__slider-container__images__button-left')){
               console.log(1);
        count--;
    }
    else if(target.matches(".slider__slider-container__images__button-right")){
        console.log(2);
        count++;

    }
    else if(target.matches('.slider__slider-container__images__iten__dots__dot')){
        console.log(3);
        dot.forEach((elem,index)=>{if(elem===target)count=index;
        });
        }
if (count<0)count=slideitem.length-1;
if (count>slideitem.length-1) count=0;
addClassSlide(slideitem,count,"slider-container__images__item-active")
addClassSlide(dot,count,"slider__slider-container__images__iten__dots__dot-active");
        });

     
       
    
  
        let burger = document.querySelector('.burger');
        let menu = document.querySelector('.header-content__menu');
        window.onload = function(e)
        {
         
         menu.style.display='none';
        }
        burger.addEventListener('click',()=>{  
            if(event.target.closest('.burger')) {
            menu.classList.add('m-active');
          menu.style.display='flex';
            }
  
      
        if(event.target.closest('.header-content__menu__remove')) {
            menu.classList.remove('m-active');
            menu.style.display='none';
        }
    document.addEventListener('click',()=>{  
            if(!event.target.closest('.burger')) {
            menu.classList.remove('m-active');
          menu.style.display='nonw';
            }

     if(!event.target.closest('.m-active') && menu.classList.contains('m-active') && !event.target.closest('.burger') ) {
            menu.classList.remove('m-active');
            menu.style.display='none';
        
        };})
    })
            
        