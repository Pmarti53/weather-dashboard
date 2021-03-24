var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#cityname");
var weatherContainerEl = document.querySelector("weather-container");

var formSubmitHandler = function (event) {
    event.preventDefault();
    var cityname = nameInputEl.value.trim();

    if (cityname) {
        getCityWeather(cityname);

        weatherContainerEl.textContent = "";
        nameInputEl.value = "";
    } else {
        alert("Please enter a City");
    }
};








userFormEl.addEventListener("submit", formSubmitHandler);