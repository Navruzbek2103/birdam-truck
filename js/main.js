let elBurger = document.querySelector(".nav__burger__icon");
let elShowBurger = document.querySelector(".burgerMenu");


elBurger.addEventListener("click", ()=> {
  elShowBurger.classList.toggle("show-burgerMenu")
})