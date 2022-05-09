

const nav_btn = document.querySelector('.nav-btn')
const nav_bar = document.querySelector('.nav-bar')
const close_btn = document.querySelector('.close-btn')

const lists = document.querySelectorAll('.nav-item')



//getting all the slide images and the left and right slider buttons
const rightBtn = document.querySelector('.right.btn')
const leftBtn = document.querySelector('.left.btn')
const slides = document.querySelectorAll('.slide')

//variable to help in sliding by keeping track of what is currentlly in view
let curSlide = -1;






rightBtn.addEventListener("click",()=>{

//   Swipe('',slides,'swipe-left','swipe-right',curSlide)

  if(curSlide === -1){
     slides.forEach(element => {
         element.classList.remove('swipe-right')
         element.classList.add('swipe-left')
         })

         curSlide = slides.length - 1
  }
  else{
      slides[curSlide].classList.remove('swipe-left')
      slides[curSlide].classList.add('swipe-right')
      curSlide--
  }
 
  
})

leftBtn.addEventListener("click",()=>{

    
    if(curSlide === (slides.length - 1)){
        slides.forEach(element => {
            element.classList.remove('swipe-left')
            element.classList.add('swipe-right')
        })
        curSlide = -1
    }
    else{
        
        curSlide++
        slides[curSlide].classList.remove('swipe-right')
       slides[curSlide].classList.add('swipe-left')
       
    }
})


nav_btn.addEventListener('click',()=>{
    // nav_bar.style.display = 'inline-block'
    show_nav_bar()
})

close_btn.addEventListener('click',()=>{
    // nav_bar.style.display = 'none'
    remove_nav_bar()
    
})

document.querySelector('body').addEventListener('click',(e)=>{

    if(nav_bar.classList.contains('show-nav-bar'))
    {
        const a = e.target;
     let menu_item_clicked = false;

    lists.forEach(element => {
        if(element == e.target)
        
           menu_item_clicked = true; //to stop the nav bar from closing if any of the nav bar menu items is clicked
           
    });
       

     if(a !== nav_bar && a !== nav_btn && menu_item_clicked === false)
        {
          
           console.log(a.parentNode) 
           remove_nav_bar()
           menu_item_clicked = false
        }
        else{
            console.log('eweee')
        }
    }

   
})

function show_nav_bar() {
    nav_bar.classList.remove('hide-nav-bar')
    nav_bar.classList.add('show-nav-bar')
    document.querySelector('body').classList.add('show-nav-bar')
}

function remove_nav_bar() {
    nav_bar.classList.remove('show-nav-bar')
    nav_bar.classList.add('hide-nav-bar')
    document.querySelector('body').classList.remove('show-nav-bar')
}

const Swipe = (direction,array,swipeleft,swiperight,curSlideInd) =>
{
   
  if(curSlide === -1){
      array.forEach(element => {
          element.classList.remove(swiperight)
          element.classList.add(swipeleft)
          })
 
          curSlide = array.length - 1
   }
   else{
       array[curSlide].classList.remove(swipeleft)
       array[curSlide].classList.add(swiperight)
       curSlide--
   }
}