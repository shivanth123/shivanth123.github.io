var toggleButton=document.querySelector(".toggle-button");
var navbarLinks=document.querySelector(".navbar-link");


toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
})

var slideimage=document.querySelector(".slideimg");

var arr=["./images/img1.jpg","./images/img2.jpg","./images/img3.jpg"];
var len= arr.length;
var i=0;
function slider(){
    if(i>len-1){
        i=0;
    }
    slideimage.src =arr[i];
    i++;
    setTimeout('slider()',2000);
}