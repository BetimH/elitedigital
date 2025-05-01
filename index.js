function openfunction(){
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").style.width = "240px";
    document.getElementById("sidebar").style.padding = "20px";
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
    document.getElementById("content").style.backgroundColor = "gray";
    document.getElementById("content").style.transition = "background-color 0.5s ease-in-out";
    document.getElementById("sidebar").style.transition = "width 0.5s ease-in-out, padding 0.5s ease-in-out";
    document.getElementById("sidebar").style.overflow = "hidden";
    document.getElementById("navbar").style.height = "3.4rem";
    document.getElementById("navbar").style.transition = "height 0.5s ease-in-out";
    document.getElementById("navbar").style.overflow = "hidden";
    document.getElementById("logo").style.display = "none";
    document.getElementById("links-header").style.display = "none";
    document.getElementById("links-header1").style.display = "none";
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}

}
function closefunction(){
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("sidebar").style.padding = "0px";
    document.getElementById("open-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
    document.getElementById("content").style.backgroundColor = "#f4f4f4";
    document.getElementById("header").style.transition = " 0.5s ease-in-out";
    document.getElementById("logo").style.display = "block";
    document.getElementById("navbar").style.height = "15vh";
    document.getElementById("navbar").style.transition = "height 0.5s ease-in-out";
    document.getElementById("links-header").style.display = "block";
    document.getElementById("links-header1").style.display = "block";
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;

}


}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}


function goBack() {
    window.history.back();
}





