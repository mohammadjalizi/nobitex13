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
