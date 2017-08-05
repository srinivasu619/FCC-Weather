$(document).ready(function() {
  console.log("Document Ready");
  var toogle=true;
  $('#toggle').on('click',function(e){
    e.preventDefault();
    var temp = parseFloat(document.getElementById('presentTemp').innerHTML.split(' '));
    //console.log(coverter(temp,toggle));
    if(toggle)
      {
        $('#presentTemp').text(coverter(temp,toggle)+" \u2109");
        $('#toggle').text('\u2109 \u2192 \u2103');
      }
    else
      {
        $('#presentTemp').text(coverter(temp,toggle)+" \u2103");
        $('#toggle').text('\u2103 \u2192 \u2109');
      }
    toggle=!toggle;
  });
  var latitude,longitude ;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      longitude = parseFloat(position.coords.longitude);
      latitude = parseFloat(position.coords.latitude);
      giveWeatherDetails(latitude,longitude);
    });
  }
});

function giveWeatherDetails(latitude, longitude) {
  //console.log(typeof latitude+" "+typeof longitude);
  $.get("https://fcc-weather-api.glitch.me/api/current?lat=" +latitude +"&lon=" +longitude,function(response) {
      //console.log(response.coord);
      // console.log(response.name)
      // console.log(response.sys.country);
      $('#location').text(response.name+" , "+response.sys.country);
      $('#weatherImg').attr('src',response.weather[0].icon);
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

function coverter(temp,type)
{
  if(type)
    {
      return ((9/5)*temp+32);
    }
  else
    {
      return ((temp-32)*(5/9));
    }
}