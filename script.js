
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a=document.querySelector("#elem1")
// var image=a.getAttribute("data-image")
// console.log(image);

function page4Animation(){
    var elemc=document.querySelector("#elem-container")
var fixed=document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter", ()=>{
    fixed.style.display="block";

})
elemc.addEventListener("mouseleave", ()=>{
    fixed.style.display="none";
    
})

var elems=document.querySelectorAll(".elem")
elems.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        var image=e.getAttribute("data-image")
     fixed.style.backgroundImage=`url(${image})`
    })
})
}

function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 70,
    
  });
}
swiperAnimation()
page4Animation()