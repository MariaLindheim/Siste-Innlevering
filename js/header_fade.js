let header = document.getElementById("header");

window.onscroll = function() {fargeEndring()};

function fargeEndring() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.style.backgroundColor = "rgb(124 170 203)";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}