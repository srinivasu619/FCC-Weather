$(document).ready(function() {
  console.log("Document Ready");
  var latitude,longitude ;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      longitude = parseFloat(position.coords.longitude);
      latitude = parseFloat(position.coords.latitude);
      giveWeatherDetails(latitude,longitude);
    });
  }
  else
    {
      latitude = 35;
      longitude = 139;
      giveWeatherDetails(latitude,longitude);
    }
});

function giveWeatherDetails(latitude, longitude) {
  console.log(typeof latitude+" "+typeof longitude);
  $.get(
    "https://fcc-weather-api.glitch.me/api/current?lat=" +
      latitude +
      "&lon=" +
      longitude,
    function(response) {
      console.log(response.coord);
      console.log(response.main);
      console.log(response.name)
      console.log(response.sys.country);
      console.log(response.weather[0]);
      console.log(response.wind);
    }
  );
}
