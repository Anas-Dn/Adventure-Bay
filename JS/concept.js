lucide.createIcons();


//header scroll
const headerF = () => {
  if(window.scrollY > 15 ){
    document.getElementById("header").classList.add('scrolled-header')
  }else{
    document.getElementById("header").classList.remove('scrolled-header')
  }
}
window.addEventListener("scroll", headerF);


// Arrow Top 
const arrowTop = () => {
    if(window.scrollY > 30 ){
        document.getElementById("top").style.display = "block";
    }else{
        document.getElementById("top").style.display = "none";
    }
}
window.addEventListener("scroll", arrowTop);
document.getElementById("top").addEventListener("click" ,() => {
  window.scrollTo({top:0, behavior:"smooth"});
})


//slide

let CurrIndex = 0;
let slides = document.querySelectorAll(".img-slide");
let dots = document.querySelectorAll(".dot");
let prev = document.getElementById("left");
let curr = document.getElementById("right");


const slideShow = (index) => {
  slides.forEach((slide ) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

const prevShow = () => {
  CurrIndex-- ; 
  if(CurrIndex < 0){
    CurrIndex = slides.length -1;
  }
  slideShow(CurrIndex)
}
prev.addEventListener("click" ,prevShow)


const currShow = () => {
  CurrIndex++ ; 
  if(CurrIndex >= slides.length){
    CurrIndex = 0;
  }
  slideShow(CurrIndex)
}
curr.addEventListener("click" ,currShow)


//menu

const menu = document.getElementById("menu-header");
const close_header = document.getElementById("close-header");
const menu_nav = document.getElementById("menu-nav");

menu.addEventListener("click" , () => {

    menu.style.setProperty('display', 'none', 'important');
    close_header.style.setProperty('display', 'block', 'important');
    menu_nav.classList.add('menu-show');
    if(window.scrollY > 15 ){
    document.getElementById("header").classList.remove('scrolled-header')
    }
})

close_header.addEventListener("click" , () => {

    menu.style.setProperty('display', 'block', 'important');
    close_header.style.setProperty('display', 'none', 'important');
    menu_nav.classList.remove('menu-show');
    if(window.scrollY > 15 ){
    document.getElementById("header").classList.add('scrolled-header')
    }
})


// scroll behavior for footer

document.getElementById("button-nav").addEventListener("click", (e) => {
    document.getElementById("footer").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});



// animation

// hero

gsap.from(".hero-h1 , .hero-h3" , {
  y:-50,
  opacity:0,
  ease:"power3.out",
  duration:1.4,
  stagger:0.6,
})


//sec 2

gsap.from(".sec-2 .fir-h1" , {
  opacity:0,
  y:-60,
  ease:"power3.out",
  duration:1.5,
  scrollTrigger:{
    trigger:".sec-2 .fir-h1",
    start:"top center",
  }
})

gsap.from(".sec-2container .col-1" , {
  x:-80,
  opacity:0,
  ease:"power3.out",
  duration:1.4,
  scrollTrigger:{
    trigger:".sec-2container .col-1",
    start:"top center",
  }
})

gsap.from(".sec-2container .col-2" , {
  x:80,
  opacity:0,
  ease:"power3.out",
  duration:1.4,
  scrollTrigger:{
    trigger:".sec-2container .col-2",
    start:"top center",
  }
})





//sec 3

gsap.from(".section-3 .fir-h1" , {
  opacity:0,
  y:-60,
  ease:"power3.out",
  duration:1.5,
  scrollTrigger:{
    trigger:".section-3 .fir-h1",
    start:"top center",
  }
})

gsap.from(".section-3 .mid .img" , {
  x:-80,
  opacity:0,
  ease:"power3.out",
  duration:1.4,
  scrollTrigger:{
    trigger:".section-3 .mid",
    start:"top center",
  }
})

gsap.from(".section-3 .mid .desc" , {
  x:80,
  opacity:0,
  ease:"power3.out",
  duration:1.4,
  scrollTrigger:{
    trigger:".section-3 .mid",
    start:"top center",
  }
})

gsap.from(".sq1 , .sq2 , .sq3 , .sq4 " , {
  y:-60,
  opacity:0,
  duration:1.3,
  ease:"power4.out",
  stagger:0.3,
  scrollTrigger:{
    trigger:".section-3 .last-squares",
    start:"top center"
  }
})




//sec 4

gsap.from(".section-4 .fir-h1" , {
  opacity:0,
  y:-60,
  ease:"power3.out",
  duration:1.5,
  scrollTrigger:{
    trigger:".section-4 .fir-h1",
    start:"top center",
  }
})

gsap.from(".section-4 .mid .img" , {
  x:80,
  opacity:0,
  ease:"power3.out",
  duration:1.4,
  scrollTrigger:{
    trigger:".section-4 .mid .img",
    start:"top center",
  }
})

gsap.from(".section-4 .mid .desc" , {
  x:-80,
  opacity:0,
  ease:"power3.out",
  duration:1.4,
  scrollTrigger:{
    trigger:".section-4 .mid .desc",
    start:"top center",
  }
})

gsap.from(".sq5 , .sq6 , .sq7 , .sq8" , {
  y:-60,
  opacity:0,
  duration:1.3,
  ease:"power4.out",
  stagger:0.3,
  scrollTrigger:{
    trigger:".section-4 .last-squares",
    start:"top center"
  }
})





//sec 5

gsap.from(".section-5 .fir-h1 , .section-5 .h4" , {
  opacity:0,
  y:-60,
  ease:"power3.out",
  duration:1.5,
  stagger:0.3,
  scrollTrigger:{
    trigger:".section-5",
    start:"top center",
  }
})

gsap.from(".section-5 .mid .col" , {
  x:80,
  opacity:0,
  ease:"power3.out",
  duration:1.4,
  scrollTrigger:{
    trigger:".section-5 .mid ",
    start:"top center",
  }
})

gsap.from(".section-5 .mid .desc" , {
  x:-80,
  opacity:0,
  ease:"power3.out",
  duration:1.4,
  scrollTrigger:{
    trigger:".section-5 .mid ",
    start:"top center",
  }
})

gsap.from(".sq9 , .sq10 , .sq11 , .sq12 " , {
  y:-60,
  opacity:0,
  duration:1.3,
  ease:"power4.out",
  stagger:0.3,
  scrollTrigger:{
    trigger:".section-5 .last-squares ",
    start:"top center"
  }
})







// animation for footer 

gsap.from(".footer-top .h2", {
  x:60,
  opacity:0,
  duration:1.1,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".footer-top .h2",
    start:"top center",
  }
})

gsap.from(".footer-top .h4", {
  x:60,
  opacity:0,
  duration:1.1,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".footer-top .h4",
    start:"top center",
  }
})


gsap.from(".footer-map" , {
  y:-60,
  opacity:0,
  ease:"power3.out",
  duration: 1.2,
  scrollTrigger:{
    trigger:".footer-map",
    start:"top center"
  }
})


gsap.from(".footer-info .col-1 , .footer-info .col-2 , .footer-info .col-3" , {
  y: -70,
  opacity:0,
  duration:1.2,
  stagger:0.3,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".footer",
    start:"end end",
  }
})