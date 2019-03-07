$(document).ready(function () {

  var eventLinks = $('button.event-menu-btn');

  $('#event-tue').hide();
  $('#event-wed').hide();
  $('#event-thu').hide();
  $('#event-fri').hide();
  $('#event-sat').hide();
  $('#event-sun').hide();

  // event menu fade in/out

  eventLinks.click(function () {
    var self = $(this),
      targetLink = "#" + self.attr('id'),
      targetSection = "#" + self.attr('id').slice(0, self.attr('id').length - 4);

    $('#event-mon').fadeOut(500);
    $('#event-tue').fadeOut(500);
    $('#event-wed').fadeOut(500);
    $('#event-thu').fadeOut(500);
    $('#event-fri').fadeOut(500);
    $('#event-sat').fadeOut(500);
    $('#event-sun').fadeOut(500);

    $(targetSection).fadeIn(500);

  });

});