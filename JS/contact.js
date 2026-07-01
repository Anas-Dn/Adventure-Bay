 lucide.createIcons();


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



//header scroll
const headerF = () => {
  if(window.scrollY > 15 ){
    document.getElementById("header").classList.add('scrolled-header')
  }else{
    document.getElementById("header").classList.remove('scrolled-header')
  }
}
window.addEventListener("scroll", headerF);



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