var btn = document.getElementsByClassName("btn");
var overlay = document.getElementsByClassName("overlay");
var footer = document.getElementsByClassName("footer");
var pera = document.getElementsByClassName("pera");
var carentan = document.getElementsByClassName("carentan");
var navBar = document.getElementsByClassName("nav-bar");
var pause = document.getElementsByClassName("pause");
var play = document.getElementsByClassName("play");
var armyImage = document.getElementsByClassName("army-image");
btn[0].addEventListener("click", function () {
  overlay[0].style.background = "black";
  overlay[0].style.transitionDelay = 0.5 + "s";
  carentan[0].style.opacity = "0";
  footer[0].style.marginTop = "20px";
  navBar[0].style.opacity = "0";
  pause[0].style.opacity = "1";
  play[0].style.opacity = "0";
  pera[0].style.opacity = "0";
  footer[0].style.opacity = "0";
  armyImage[0].style.transform = "scale(1.3)";

  setTimeout(function () {
    overlay[0].style.background = "";
    overlay[0].style.transitionDelay = 0 + "s";
    carentan[0].style.opacity = "1";
    navBar[0].style.opacity = "1";
    pause[0].style.opacity = "0";
    play[0].style.opacity = "1";
    pera[0].style.opacity = "1";
    footer[0].style.opacity = "1";
    armyImage[0].style.transform = "scale(1)";
  }, 3000);
});
