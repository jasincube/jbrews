// navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.backgroundColor="tranparent";
  } else {
    document.getElementById("navbar").style.top = "-180px";
    document.getElementById("navbar").style.backgroundColor="tranparent";
  }
  prevScrollpos = currentScrollPos;
}

// navbar end