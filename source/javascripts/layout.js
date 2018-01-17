
var logo = document.querySelector('.logo');

logo.addEventListener("click",function(){
  window.location.href = '../index.html';
});


var proj = document.getElementsByClassName("proj-name");
var projImg = document.querySelector(".proj-img");

var currentProj;

Array.from(proj).forEach(projet=>{
  currentProj = "fimmi";

  projet.addEventListener("mouseover", function(){
    Array.from(proj).forEach(projet2=>{
      projet2.classList = "proj-name";
    });

    projet.classList = "proj-name active";

    projImg.classList.remove("display");
    projImg.classList.add("remove");
    setTimeout(function(){
      currentProj = projet.id;
      projImg.style.backgroundImage = "url(../images/rox1.jpg)"; //url(../images/"+projet.id+".png)"; Il faut que toutes tes images de projets que tu veux afficher soient en png et nommées comme le nom du projet
        projImg.classList.remove("remove");
        projImg.classList.add("display");
    },300);
  });

  projImg.addEventListener("click",function(){
    window.location.href = "projects/"+currentProj+".html";
  });
});
