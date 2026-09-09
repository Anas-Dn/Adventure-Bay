lucide.createIcons();


const video = document.getElementById("bgVideo");
video.playbackRate = 0.7;

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

//section 3 ///////////////////////////////////////


//section 4 ////////////////////////////////////////////////


const sec_4_img_1 =document.getElementById("img-1");
const sec_4_img_2 =document.getElementById("img-2");
const sec_4_h2_1 = document.getElementById("h2-1");
const sec_4_h2_2 = document.getElementById("h2-2");
const sec_4_p_1 = document.getElementById("p-1");
const sec_4_p_2 = document.getElementById("p-2");
const sec4_circle_1 = document.getElementById("circles-1");
const sec4_circle_2 = document.getElementById("circles-2");


setInterval(() => {
  if(sec_4_img_1.style.display !== 'none'){
    sec_4_img_1.style.display = 'none';
    sec_4_img_2.style.display = 'block';
    sec_4_h2_1.style.display = 'none';
    sec_4_h2_2.style.display = 'block';
    sec_4_p_1.style.display = 'none';
    sec_4_p_2.style.display = 'block';
    sec4_circle_1.classList.remove("active")
    sec4_circle_2.classList.add("active")
  }else{
    sec_4_img_1.style.display = 'block';
    sec_4_img_2.style.display = 'none';
    sec_4_h2_1.style.display = 'block';
    sec_4_h2_2.style.display = 'none';
    sec_4_p_1.style.display = 'block';
    sec_4_p_2.style.display = 'none';
    sec4_circle_1.classList.add("active")
    sec4_circle_2.classList.remove("active")
  }
},4000)

//section 5 ////////////////////////////////////////////////

const sec_5_vid1 = document.getElementById("viiid-1");
const sec5_pause1 = document.getElementById("sec-5-pa1");
const sec5_i1 = document.getElementById("sec5-circle1");
const sec5_text1 = document.getElementById("sec5-text1");

const sec_5_vid2 = document.getElementById("viiid-2");
const sec5_pause2 = document.getElementById("sec-5-pa2");
const sec5_i2 = document.getElementById("sec5-circle2");
const sec5_text2 = document.getElementById("sec5-text2");

const sec_5_vid3 = document.getElementById("viiid-3");
const sec5_pause3 = document.getElementById("sec-5-pa3");
const sec5_i3 = document.getElementById("sec5-circle3");
const sec5_text3 = document.getElementById("sec5-text3");


sec5_pause1.addEventListener("click" , () => {
  if(sec_5_vid1.paused){
    sec_5_vid1.play();
    sec5_pause1.innerHTML = `<i data-lucide="pause" ></i>`;
    sec5_i1.style.color = '#7cb342';
    sec5_text1.innerHTML = `En lecture`
  }else{
    sec_5_vid1.pause();
    sec5_pause1.innerHTML = `<i data-lucide="play" ></i>`;
    sec5_text1.innerHTML = `En pause`;
    sec5_i1.style.color = 'rgb(152, 150, 150)';
  }
  lucide.createIcons()
})

sec5_pause2.addEventListener("click" , () => {
  if(sec_5_vid2.paused){
    sec_5_vid2.play();
    sec5_pause2.innerHTML = `<i data-lucide="pause" ></i>`;
    sec5_i2.style.color = '#7cb342';
    sec5_text2.innerHTML = `En lecture`
  }else{
    sec_5_vid2.pause();
    sec5_pause2.innerHTML = `<i data-lucide="play" ></i>`;
    sec5_text2.innerHTML = `En pause`;
    sec5_i2.style.color = 'rgb(152, 150, 150)';
  }
  lucide.createIcons()
})

sec5_pause3.addEventListener("click" , () => {
  if(sec_5_vid3.paused){
    sec_5_vid3.play();
    sec5_pause3.innerHTML = `<i data-lucide="pause" ></i>`;
    sec5_i3.style.color = '#7cb342';
    sec5_text3.innerHTML = `En lecture`
  }else{
    sec_5_vid3.pause();
    sec5_pause3.innerHTML = `<i data-lucide="play" ></i>`;
    sec5_text3.innerHTML = `En pause`;
    sec5_i3.style.color = 'rgb(152, 150, 150)';
  }
  lucide.createIcons()
})


//loader

const navType = performance.getEntriesByType("navigation")[0].type;

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if(  performance.navigation.type === 1 || !sessionStorage.getItem("loaderShown")){
      loader.style.display = "fle";////////
      sessionStorage.setItem("loaderShown", "tru");/////////

      setTimeout(() => {
        loader.style.display = "none";
      }, 2000);
    }else{
      loader.style.display = "non";////////////
    }
});



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


///////////////.  Animation   .////////////////  



//sec2
gsap.from(".section-2-h1 , .section-2-h4" , {
  y:40,
  opacity:0,
  duration:1.1,
  stagger:0.3,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".section-2-h1 , .section-2-h4",
    start:"top center",
  }
});


gsap.from(".left-one , .middle-one , .right-one" , {
  y:70,
  opacity:0,
  duration:1.2,
  stagger:0.3,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".left-one , .middle-one , .right-one",
    start:"top center",
  }
})



//sec3
gsap.from(".h1 , .ram-ar , .sec-3-p" , {
  y:40,
  opacity:0,
  duration:1.1,
  stagger:0.3,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".h1 , .ram-ar , .sec-3-p",
    start:"top center",
  }
})


gsap.from(".sec-3-img" , {
  x: -80,
  opacity:0,
  duration:1.1,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".sec-3-img",
    start:"top center",
  }
})
gsap.from(".col-2" , {
  x: 80,
  opacity:0,
  duration:1.1,
  ease: "power3.out",
  scrollTrigger:{
    trigger:".col-2",
    start:"top center",
  }
})




//sec4