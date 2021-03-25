var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#cityname");
var weatherContainerEl = document.querySelector("weather-container");

var formSubmitHandler = function (event) {
    event.preventDefault();
    var cityname = nameInputEl.value.trim();

    if (cityname) {
        getCityWeather(cityname);
        nameInputEl.value = "";
    } else {
        alert("Please enter a City");
    }
};

const key = "d97176eba089433e8724fc40b45c34ee";

// function getCityWeather(cityname) {
//     let api = "https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}";
// }

var getCityWeather = function (user) {;
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={key}";
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