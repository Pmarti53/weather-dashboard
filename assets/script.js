var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#cityname");
var weatherContainerEl = document.querySelector(".weather-container");
var locationEl = document.querySelector(".location");
var humidityEl = document.querySelector(".humidity");
var windSpeedEl = document.querySelector(".wind-speed");
var uvIndexEl = document.querySelector(".UV");
var tempValEl = document.querySelector(".temperature-value");
var icon = document.querySelector(".weather-icon");
var searchHistory = [];
const weather = {}
const kelvin = 273;


//Form submit//
var formSubmitHandler = function (event) {
    event.preventDefault();
    var cityName = nameInputEl.value.trim();

    if (cityName) {
        getCityWeather(cityName);
        nameInputEl.value = "";
    } else {
        alert("Please enter a City");
    }
};

//get city weather function
function getCityWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=d97176eba089433e8724fc40b45c34ee')
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    // console.log(data);

                    displayWeather(data, cityName);
                })
            } else {
                alert("Error" + response.statusText);
            }
        })
};

//5 day forecast
function getForecast(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=d97176eba089433e8724fc40b45c34ee')
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (weather) {
                    console.log(weather);

                })
            } else {
                alert("Error" + response.statusText);
            }
        })
};




//display weather
function displayWeather(weather) {
    // console.log(weather.name)
    locationEl.innerHTML = weather.name;
    humidityEl.innerHTML = "humidity:  " + weather.main.humidity + "%";
    tempValEl.innerHTML = "temp:  " + weather.main.temp;
    windSpeedEl.innerHTML = "wind:  " + weather.wind.speed + " mph";
    icon.innerHTML = weather.weather[0].icon;

    fetch('http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png')
        .then(function (response) {
            if (response.ok) {
                // console.log(weather.weather[0].icon)
            } else {
                console.log(response.statusText)
            }


        })



};

function displayForecast(weather) {

}


















n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;




userFormEl.addEventListener("submit", formSubmitHandler);










