
var profileBtn = document.querySelector('#profileBtn');
var projectsBtn = document.querySelector('#projectsBtn');
var helloBtn = document.querySelector('#hello');


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').classList.add('is-ready');
}, false);

profileBtn.addEventListener("click",function(){
  document.querySelector('body').classList.add('remove');
  window.location.href = '../profile.html';
  setTimeout(function(){
    document.querySelector('body').classList.remove('is-ready');
  },1000);
});

projectsBtn.addEventListener("click",function(){
  document.querySelector('body').classList.add('remove');
  window.location.href = '../projects.html';
  setTimeout(function(){
    document.querySelector('body').classList.remove('is-ready');
  },1000);
});

helloBtn.addEventListener("click",function(){
  document.querySelector('body').classList.add('remove');
  window.location.href = '../index.html';
  setTimeout(function(){
    document.querySelector('body').classList.remove('is-ready');
  },1000);
});
