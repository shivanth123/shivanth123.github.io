var box=document.querySelectorAll(".box");
for(let i=0;i<box.length;i++){
  box[i].addEventListener('click',()=>{
      box[i].classList.toggle("active")
  })
}
