var searchEl = document.getElementById("#search");
var cityInputEl = document.getElementById("#site-search");
var tempEl = document.getElementById("#temp");
var humEl = document.getElementById("#hum");
var windEl = document.getElementById("#wind");
var todayContainerEl = document.getElementById("#today");



var formSubmitHandler = function (event) {
  event.preventDefault();

  var weatherData = cityInputEl.value.trim();

  if (weatherData) {
    getLocalWeather(weatherData);

    todayContainerEl.textContent = "";
    cityInputEl.value = "";
  } else {
    alert("Please enter a valid city");
  }
};


//Assigning api key to variable
var getLocalWeather = function (cityName) {
  var APIKEY = "3c24c9842016c0c1388a842a82cf7f3f";

  // Execute a current weather get request from open weather api
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    APIKEY;
  fetch(url).then(function (response) {
    if (response.ok)
      response.json().then(function (data) {
        console.log(data);
      });
  });
};
