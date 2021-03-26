var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#cityname");
var weatherContainerEl = document.querySelector(".weather-container");
var locationEl = document.querySelector(".location");
var humidityEl = document.querySelector(".humidity");
var windSpeedEl = document.querySelector(".wind-speed");
var uvIndexEl = document.querySelector(".UV");
var tempValEl = document.querySelector(".temperature-value");
var icon = document.querySelector(".weather-icon");
var searchHistory = []



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
                    console.log(data);

                    displayWeather(data, cityName);
                })
            } else {
                alert("Error" + response.statusText);
            }
        })
};



//display weather
function displayWeather(weather) {
    console.log(weather.name)
    locationEl.innerHTML = weather.name;
    humidityEl.innerHTML = weather.main.humidity;
    tempValEl.innerHTML = weather.main.temp;
    windSpeedEl.innerHTML = weather.wind.speed;
    
    fetch('http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png')




}    















n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;




userFormEl.addEventListener("submit", formSubmitHandler);










