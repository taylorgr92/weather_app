const searchEl = document.getElementById("search-button");

function initSite() {
  //Assigning api key to variable
  var APIKEY = "3c24c9842016c0c1388a842a82cf7f3f";

  function getWeather(cityName) {
    // Execute a current weather get request from open weather api
    var url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      APIKEY;
    fetch(url).then(function (response) {
      //hide weather card before data is retrieved
      todayweatherEl.classList.remove("d-none");
    });
  }
}
