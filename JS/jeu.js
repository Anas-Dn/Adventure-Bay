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
      
        <div class="jeu-card">
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

  })

  .catch((error) => {
    console.log("Error loading JSON:", error);
  }); 
