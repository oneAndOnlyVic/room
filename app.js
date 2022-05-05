

const nav_btn = document.querySelector('.nav-btn')
const nav_bar = document.querySelector('.nav-bar')
const close_btn = document.querySelector('.close-btn')

const lists = document.querySelectorAll('.nav-item')

console.log(lists)






nav_btn.addEventListener('click',()=>{
    // nav_bar.style.display = 'inline-block'
    show_nav_bar()
})

close_btn.addEventListener('click',()=>{
    // nav_bar.style.display = 'none'
    remove_nav_bar()
    
})

document.querySelector('body').addEventListener('click',(e)=>{

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
