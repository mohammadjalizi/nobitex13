
const footerul=document.querySelectorAll('.footerul')
const hediing=document.querySelectorAll(" h3  ")
const number=document.querySelectorAll("  .number ")
const navbar=document.getElementById("navbar")
const main2=document.querySelectorAll("main")
  const respansive=document.getElementById("respansive")
const body=document.querySelectorAll('body')


console.log( number[0].innerHTML )


navbar.addEventListener('click',()=>{


respansive.classList.toggle("toggle")



})

var i=0

    var timer=   setInterval(()=>{


    
  i++
  number[1].innerHTML=i
  number[2].innerHTML=i
  number[0].innerHTML=4
  if(i===200){

  clearInterval(timer)

  }

  

  },10)

hediing.forEach(item=>{

item.addEventListener("click",()=>{
console.log(item) 


})

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
