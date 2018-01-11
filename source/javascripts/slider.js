
var profile = document.querySelector('#profileBtn');
var projects = document.querySelector('#projectsBtn');
var index = document.querySelector('#hello');

var projDiv = document.querySelector(".projects");
var profDiv = document.querySelector(".profile");
var helloDiv = document.querySelector(".index");

var array = [profile,projects,index];
var arrayText = ["profile","projects","index"];
var array2 = [projDiv, profDiv, helloDiv];

Array.from(array2).forEach(l=>{
  if(l){
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function(){
        l.classList.add('is-ready');
      },50);
    }, false);

    Array.from(array).forEach(p=>{
      p.addEventListener("click",function(){
        l.classList.add('remove');
        setTimeout(function(){
          l.classList.remove('is-ready');
        },1600);
        setTimeout(function(){
          window.location.href = '../'+arrayText[array.indexOf(p)]+'.html';
        },400);
      });
    });
  }
});
