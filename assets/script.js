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


var getCityWeather = function (user) {
    var apiKey = "d97176eba089433e8724fc40b45c34ee";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayWeather(data, user);
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("unable to retrieve weather data");
        });
};







userFormEl.addEventListener("submit", formSubmitHandler);