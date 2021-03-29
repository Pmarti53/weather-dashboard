var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#cityname");
var weatherContainerEl = document.querySelector(".weather-container");
var locationEl = document.querySelector(".location");
var humidityEl = document.querySelector(".humidity");
var windSpeedEl = document.querySelector(".wind-speed");
var tempValEl = document.querySelector(".temperature-value");
var icon = document.querySelector(".weather-icon");
var date1 = document.querySelector(".Date1");
var date2 = document.querySelector(".Date2");
var date3 = document.querySelector(".Date3");
var date4 = document.querySelector(".Date4");
var date5 = document.querySelector(".Date5");
var temp1 = document.querySelector(".temp1");
var temp2 = document.querySelector(".temp2");
var temp3 = document.querySelector(".temp3");
var temp4 = document.querySelector(".temp4");
var temp5 = document.querySelector(".temp5");
var humidity1 = document.querySelector(".Humidity1");
var humidity2 = document.querySelector(".Humidity2");
var humidity3 = document.querySelector(".Humidity3");
var humidity4 = document.querySelector(".Humidity4");
var humidity5 = document.querySelector(".Humidity5");
var condition1 = document.querySelector(".cond1");
var condition2 = document.querySelector(".cond2");
var condition3 = document.querySelector(".cond3");
var condition4 = document.querySelector(".cond4");
var condition5 = document.querySelector(".cond5");



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
    getForecast(cityName)
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
                response.json().then(function (forecast) {
                    console.log(forecast);
                    display5day(forecast, cityName);

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

function display5day(forecast) {
    date1.innerHTML = "Date: " + forecast.list[4].dt_txt;
    date2.innerHTML = "Date: " + forecast.list[12].dt_txt;
    date3.innerHTML = "Date: " + forecast.list[20].dt_txt;
    date4.innerHTML = "Date: " + forecast.list[28].dt_txt;
    date5.innerHTML = "Date: " + forecast.list[36].dt_txt;
    temp1.innerHTML = "Temp: " + forecast.list[4].main.temp;
    temp2.innerHTML = "Temp: " + forecast.list[12].main.temp;
    temp3.innerHTML = "Temp: " + forecast.list[20].main.temp;
    temp4.innerHTML = "Temp: " + forecast.list[28].main.temp;
    temp5.innerHTML = "Temp: " + forecast.list[36].main.temp;
    humidity1.innerHTML = "Humidity: " + forecast.list[4].main.humidity + "%";
    humidity2.innerHTML = "Humidity: " + forecast.list[12].main.humidity + "%";
    humidity3.innerHTML = "Humidity: " + forecast.list[20].main.humidity + "%";
    humidity4.innerHTML = "Humidity: " + forecast.list[28].main.humidity + "%";
    humidity5.innerHTML = "Humidity: " + forecast.list[36].main.humidity + "%";
    condition1.innerHTML = forecast.list[4].weather[0].main;
    condition2.innerHTML = forecast.list[12].weather[0].main;
    condition3.innerHTML = forecast.list[20].weather[0].main;
    condition4.innerHTML = forecast.list[28].weather[0].main;
    condition5.innerHTML = forecast.list[36].weather[0].main;
}






















n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;




userFormEl.addEventListener("submit", formSubmitHandler);










