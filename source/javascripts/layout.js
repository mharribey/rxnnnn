
var logo = document.querySelector('.logo');

logo.addEventListener("click",function(){
  window.location.href = '../index.html';
});

var proj = document.getElementsByClassName("proj-name");
var projImg = document.querySelector(".proj-img"); //main photo
var photos = document.querySelector(".photos"); //container for the description
var projContent = document.querySelector(".proj-content");
var more = document.querySelector('#btn');
var back = document.querySelector('#back');
var carousel = document.querySelector('.carousel');
var photoList = carousel.children[0];

var currentProj;
var imgs = [];

Array.from(proj).forEach(projet=>{
  currentProj = "fimmi";
  projContent.innerHTML = changeText(currentProj);

  projet.addEventListener("mouseover", function(){

    Array.from(proj).forEach(projet2=>{
      projet2.classList = "proj-name";
    });

    projet.classList = "proj-name active";

    photos.classList.remove("display");
    photos.classList.add("remove");
    setTimeout(function(){
      currentProj = projet.id;
      projImg.style.backgroundImage = "url(../images/rox1.jpg)"; //url(../images/"+projet.id+".png)"; Il faut que toutes tes images de projets que tu veux afficher soient en png et nommées comme le nom du projet

      projContent.innerHTML = changeText(currentProj);

      photos.classList.remove("remove");
      photos.classList.add("display");
    },300);
  });

  more.addEventListener("click",function(){
    currentProj = projet.id;

    back.style.display = "block";
    photos.style.display = "none";
    carousel.style.display = "flex";
  });

  back.addEventListener("click",function(){
    photos.style.display = "block";
    carousel.style.display = "none";
    back.style.display = "none";
  });

  Array.from(imgs).forEach(i=>{
    var elt = document.createElement('div');
    elt.className = "carousel-img";
    elt.appendChild(elt2);
  });
});





// REMPLISSAGE DU TEXTE POUR CHAQUE PROJETS

function changeText(projet){
  switch (projet) {
    case "fimmi":
        return fimmi;
      break;
    case "emma":
        return emma;
      break;
    case "mihivai":
        return mihivai;
      break;
    case "diag-o":
        return diagO;
      break;
    case "seb":
        return seb;
      break;
    default:
  }
}

function changeImage(projet){

}
