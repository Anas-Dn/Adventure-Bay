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



// Show Img
const pics = document.querySelectorAll(".image");
const close = document.getElementById("close");
const prev = document.getElementById("left");
const next = document.getElementById("right");
const big_img = document.getElementById("big-img");
const img = document.getElementById("img");

let currentIndex = 0 ;


pics.forEach((image , index ) => {
    image.addEventListener("click" , () => {
        big_img.classList.add("show");
        currentIndex = index ;
        ShowImg()
    })
})

close.addEventListener("click" , () => {
    big_img.classList.remove("show");
})

next.addEventListener("click" , () => {
    currentIndex = (currentIndex + 1) % pics.length;
    ShowImg();
})

prev.addEventListener("click" , () => {
    currentIndex = (currentIndex - 1 + pics.length) % pics.length;
    ShowImg();
})


const ShowImg = () => {
    img.src = pics[currentIndex].src ;
}