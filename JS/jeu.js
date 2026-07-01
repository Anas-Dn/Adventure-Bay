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



//jeu

const jeuxHT = document.getElementById("jeu");

fetch("../Data/jeux.json")
.then((response) => response.json())
.then((jeux) => {

    jeux.forEach((jeu) => {

      jeuxHT.innerHTML += `
      
        <div class="jeu-card" data-category="${jeu.category}">
          <div class="image">
            <img class="img" src="${jeu.image}" alt="${jeu.name}" loading="lazy">
            <span class="category"> ${jeu.category} </span>
            <div class="i">
              <i class="fa-solid fa-angle-right arrow"></i>
            </div>
          </div>

          <div class="content">
            <h3>${jeu.name}</h3>
            <p class="desc">${jeu.description}</p>
            <div class="bt">
              <p>EN SAVOIR PLUS</p>
              <div class="ii">
                <i class="fa-solid fa-angle-right arrow"></i>
              </div>
            </div>
          </div>

        </div>
      `;
    });

    // search bar


    const search = document.getElementById('inp')
    const cards = document.querySelectorAll(".jeu-card")


    search.addEventListener('input', () => {
        const inputValue = search.value.toLowerCase();
        cards.forEach((card) => {
          const title = card.querySelector('h3').textContent.toLowerCase();
          if(title.includes(inputValue)){
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        })
    })


    // Filter Cards

    const names = document.querySelectorAll(".name")
    const all_jeu = document.querySelectorAll(".jeu-card")

    names.forEach((n) => {
      n.addEventListener("click" , () => {
        names.forEach((n) => n.classList.remove("active"))
        n.classList.add("active");

    const category = n.dataset.category.toLowerCase();
        all_jeu.forEach((jeu) => {
      if(category == 'tous'){
        all_jeu.forEach((j) => j.style.display = "block")
      }
      else if(category === jeu.dataset.category.toLowerCase()){
        jeu.style.display = "block"
      }else{
        jeu.style.display = "none"
      }
    })
  })
})

  })

  .catch((error) => {
    console.log(error);
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


