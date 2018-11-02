// index.js
import '../sass/styles.scss';


document.addEventListener("DOMContentLoaded", function(){
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

});

