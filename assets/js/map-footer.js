(function ($) {
  $(document).ready(function () {
    initMap();
  });

  var date = new Date();
  var year = date.getFullYear();
  document.getElementById("year").innerHTML = year;

  function initMap() {
    var uluru = { lat: 40.7609211, lng: -111.8898534 };
    var map = new google.maps.Map(document.getElementById('map-footer'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
})(jQuery);