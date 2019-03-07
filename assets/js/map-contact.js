(function ($) {
  $(document).ready(function () {
    initHeroMap();
  });

  function initHeroMap() {
    var uluru = { lat: 40.7609211, lng: -111.8898534 };
    var map = new google.maps.Map(document.getElementById('map-contact'), {
      zoom: 18,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
})(jQuery);
//<script async defer
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwlP7C-DXRvVnmnFlFoA1vQx_ULK74L5A&callback=initHeroMap">
//</script>