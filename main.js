const burger = document.querySelector('.burger')
const menuBack = document.querySelector('.menu-back')
const menu = document.querySelector('.mobile-menu')

burger.addEventListener('click', ()=> {
    menu.classList.toggle('active')
})

menuBack.addEventListener('click', ()=> {
    menu.classList.remove('active')
})