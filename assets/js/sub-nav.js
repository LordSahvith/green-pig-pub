var cocktails = true,
  beers = false,
  wines = false,
  classicMenu = true;

$(document).ready(function () {

  var foodLinks = $('.sub-menu-food-btn'),
    drinkLinks = $('.sub-menu-drink-btn'),
    scrollMenu = $('#scrolling-food-menu');

  $('#menu-vegan').hide();
  $('#menu-late-night').hide();
  $('#menu-breakfast').hide();
  $('#menu-beers').hide();
  $('#menu-wines').hide();
  $('#menu-daily-specials').hide();
  $('#band-email').hide();
  $('#reservation-email').hide();

  // food menu fade in/out        
  foodLinks.click(function () {
    var self = $(this),
      targetLink = "#" + self.attr('id'),
      targetSection = "#" + self.attr('id').slice(0, self.attr('id').length - 4);

    console.log(targetSection);

    // checking to see if classic menus is selected if not then sliding out scroll-menu
    if (targetSection != '#menu-classic') {
      $('#scrolling-food-menu').addClass('slide');
      classicMenu = false;
    } else if (targetSection != '#menu-beers') {
      classicMenu = true;
    }

    $('#menu-classic').fadeOut(500);
    $('#menu-vegan').fadeOut(500);
    $('#menu-late-night').fadeOut(500);
    $('#menu-breakfast').fadeOut(500);

    $(targetSection).delay(490).fadeIn(500);

  });

  // drink menu fade in/out        
  drinkLinks.click(function () {
    var self = $(this),
      targetLink = "#" + self.attr('id'),
      targetSection = "#" + self.attr('id').slice(0, self.attr('id').length - 4);

    // checking to see if section needs menu if not then slide out scroll-menu
    if (targetSection == '#menu-cocktails') {
      $('#scrolling-beers-menu').addClass('slide');
      $('#scrolling-wines-menu').addClass('slide');
      cocktails = true;
      beers = false;
      wines = false;
    } else if (targetSection == '#menu-beers') {
      $('#scrolling-cocktails-menu').addClass('slide');
      $('#scrolling-wines-menu').addClass('slide');
      cocktails = false;
      beers = true;
      wines = false;
    } else if (targetSection == '#menu-wines') {
      $('#scrolling-cocktails-menu').addClass('slide');
      $('#scrolling-beers-menu').addClass('slide');
      cocktails = false;
      beers = false;
      wines = true;
    } else {
      $('#scrolling-cocktails-menu').addClass('slide');
      $('#scrolling-beers-menu').addClass('slide');
      $('#scrolling-wines-menu').addClass('slide');
      cocktails = false;
      beers = false;
      wines = false;
    }

    $('#menu-cocktails').fadeOut(500);
    $('#menu-beers').fadeOut(500);
    $('#menu-wines').fadeOut(500);
    $('#menu-daily-specials').fadeOut(500);

    $(targetSection).delay(490).fadeIn(500);

  });

});

// food menu fade in/out        
$('.form-btn').click(function () {
  var self = $(this),
    targetSection = "#" + self.attr('id').slice(0, self.attr('id').length - 4);

  var prev = $('.form-choice');
  var current = $(this);
  prev.removeClass('form-choice');
  current.addClass('form-choice');

  console.log(targetSection);

  // $('#general-email').fadeOut(500);
  // $('#band-email').fadeOut(500);
  // $('#reservation-email').fadeOut(500);
  // $(targetSection).delay(490).fadeIn(500);
  $('.form').fadeOut(500);
  $('.form').fadeIn(500);

  switch (targetSection) {
    case '#general-email':
      $('.form').attr("action", "MAILTO:gppgeneral@gmail.com");
      break;
    case '#band-email':
      $('.form').attr("action", "MAILTO:gppband@gmail.com");
      break;
    case '#reservation-email':
      $('.form').attr("action", "MAILTO:gppreservation@gmail.com");
      break;
    default:
      $('.form').attr("action", "MAILTO:gppgeneral@gmail.com");
      break;
  }

});

// fixes sub-menu to top of screen under main-nav
$(window).bind('scroll', function () {

  var heroHeight = $('.hero').height();
  var foodWelcomeHeight = $('.welcome').height();

  var navHeight = heroHeight + foodWelcomeHeight + 50;
  var scrollingNavHeight = navHeight;

  if ($(window).scrollTop() > navHeight) {

    $('.sub-menu').addClass('sub-fixed');

    if (classicMenu) {
      $('#scrolling-food-menu').removeClass('slide');
    }

    if (cocktails) {
      $('#scrolling-cocktails-menu').removeClass('slide');
    }

    if (beers) {
      $('#scrolling-beers-menu').removeClass('slide');
    }

    if (wines) {
      $('#scrolling-wines-menu').removeClass('slide');
    }

  } else {
    $('.sub-menu').removeClass('sub-fixed');
    $('#scrolling-food-menu').addClass('slide');
    $('#scrolling-cocktails-menu').addClass('slide');
    $('#scrolling-beers-menu').addClass('slide');
    $('#scrolling-wines-menu').addClass('slide');
  }

});

// toggles sub-menu from right side
var openMenu = false,
  mobileMenu = document.getElementById("mobile-menu");

function toggleMenu() {
  if (openMenu == false) {
    mobileMenu.style.width = "100%";
    openMenu = true;
  }
}

function closeNav() {
  mobileMenu.style.width = "0%";
  openMenu = false;
}
