function initMap() {
        var uluru = {lat:47.17534970000001, lng: 27.572307000000023};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }