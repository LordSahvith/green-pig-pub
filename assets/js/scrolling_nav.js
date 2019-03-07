(function ($) {
  $(document).ready(function () {

    var $scrollFoodBtn = $('.scroll-hide-food-btn'),
      $scrollCocktailsBtn = $('.scroll-hide-cocktails-btn'),
      $scrollBeersBtn = $('.scroll-hide-beers-btn'),
      $scrollWinesBtn = $('.scroll-hide-wines-btn'),
      $scrollDailySpecialsBtn = $('.scroll-hide-daily-btn'),
      $scrollFoodMenu = $('#scrolling-food-menu'),
      $scrollCocktailsMenu = $('#scrolling-cocktails-menu'),
      $scrollBeersMenu = $('#scrolling-beers-menu'),
      $scrollWinesMenu = $('#scrolling-wines-menu'),
      $scrollDailySpecialsMenu = $('#scrolling-daily-specials-menu'),
      navLinks = $('nav.scrolling-menu ul li button');

    // toggle between hiding/unhiding menu and spinning arrow
    $scrollFoodBtn.on('click', function () {
      $scrollFoodMenu.toggleClass('unhide');
      $scrollFoodBtn.toggleClass('spin');
    });

    $scrollCocktailsBtn.on('click', function () {
      $scrollCocktailsMenu.toggleClass('unhide');
      $scrollCocktailsBtn.toggleClass('spin');
    });

    $scrollBeersBtn.on('click', function () {
      $scrollBeersMenu.toggleClass('unhide');
      $scrollBeersBtn.toggleClass('spin');
    });

    $scrollWinesBtn.on('click', function () {
      $scrollWinesMenu.toggleClass('unhide');
      $scrollWinesBtn.toggleClass('spin');
    });

    $scrollDailySpecialsBtn.on('click', function () {
      $scrollDailySpecialsBtn.toggleClass('unhide');
      $scrollDailySpecialsBtn.toggleClass('spin');
    });


    // scroll to section upon btn click
    navLinks.click(function () {
      var self = $(this),
        targetLink = "." + self.attr('class'),
        targetSection = "#" + self.attr('id').slice(0, self.attr('id').length - 4);

      $("html, body").animate({ scrollTop: $(targetSection).offset().top - 140 }, 1500);
    });

  });
})(jQuery);