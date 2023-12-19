$(document).ready(function() {    

  accessibility_rtl = true;
  pixel_from_side = 20;
  pixel_from_start = 80;
  
  window.onscroll = function () {
      var backToTop = document.querySelector(".back-to-top");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }      
  };
})

function getProperty(property) {
  window.location = "/property?property=" + property;  
}


