const burgerBtn = document.querySelector(".fa-bars")
const overlayElement= document.querySelector('.overlay')
const baglamaButonu=document.querySelector('.fa-xmark')

burgerBtn.addEventListener('click',function(){
overlayElement.classList.add('active')
})

baglamaButonu.addEventListener('click',function(){
    overlayElement.classList.remove('active')
})

//aos kitabxanasinin inteqrasiyasi
AOS.init();