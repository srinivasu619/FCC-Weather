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
  //console.log(typeof latitude+" "+typeof longitude);
  var data;
  $.get(
    "https://fcc-weather-api.glitch.me/api/current?lat=" +
      latitude +
      "&lon=" +
      longitude,
    function(response) {
      //console.log(response.coord);
      // console.log(response.name)
      // console.log(response.sys.country);
      $('#location').text(response.name+" , "+response.sys.country);
      console.log(response.main);
      $('#presentTemp').text(response.main.temp+" \u2103");
      $('#condition').text(response.weather[0].main);
      $('#maxTemp').text(response.main.temp_max+" \u2103");
      $('#minTemp').text(response.main.temp_min+" \u2103");
      $('#windspeed').text(response.wind.speed+" knots");
      $('#windDeg').text(response.wind.deg+" "+'\u00B0');
      $('#pressureVal').text(response.main.pressure);
      $('#humidityVal').text(response.main.humidity+" %");
      // console.log(response.weather[0]);
      // console.log(response.wind);
    }
  );
}
