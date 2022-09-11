var toggleButton=document.querySelector(".toggle-button");
var navbarLinks=document.querySelector(".navbar-link");


toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');

})