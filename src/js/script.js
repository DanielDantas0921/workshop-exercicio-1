const menu = document.querySelector(".menu")
const navMenu = document.querySelector(".nav-menu")
const main = document.querySelector(".main")

menu.addEventListener("click", function (){
    menu.classList.toggle("ativo")
    navMenu.classList.toggle("ativo")
    main.classList.toggle("ativo")
})