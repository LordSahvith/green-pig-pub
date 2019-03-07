var open = false;

function toggleNav() {
  var mobileNav = document.getElementById("mobile-nav");
  if (open == false) {
    document.getElementById("mobile-nav").style.width = "100%";
    open = true;
  } else {
    document.getElementById("mobile-nav").style.width = "0%";
    open = false;
  }
}

$(document).ready(function () {

  var $toggleButton = $('.toggle-button');

  // Hamburger button
  $toggleButton.on('click', function () {
    $(this).toggleClass('button-open');
  });

});