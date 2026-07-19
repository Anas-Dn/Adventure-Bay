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