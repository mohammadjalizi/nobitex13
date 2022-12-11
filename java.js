const navbar=document.getElementById("navbar")

document.addEventListener('scroll',()=>{

if(document.documentElement.scrollTop >0){

navbar.classList.add("active")
console.log(document.documentElement.scrollTop)

}else{

    navbar.classList.remove("active")
}


})

AOS.init();



// swiper
const swiper = new Swiper('.test', {
  slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
  navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        
        },
        breakpoints:{

640:{
  slidesPerView: 1,
  spaceBetween: 20,
},
768:{
  slidesPerView: 2,
  spaceBetween: 30,

},
1024:{

  slidesPerView: 3,
  spaceBetween: 30,
}

        }
});
