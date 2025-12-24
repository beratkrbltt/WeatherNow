const searchForm = document.querySelector("#searchForm"),
    cityName = document.querySelector("#city-name"),
    firstWeatherIcon = document.querySelector("#firstWeatherIcon"),
    weatherTittle = document.querySelector("#weather-tittle"),
    date = document.querySelector("#date"),
    degree = document.querySelector("#degree"),
    h1cityName = document.querySelector("#h1cityName");

const api = new Apirequest();
const ui = new UI();
const defaultCity = "Istanbul";

document.addEventListener("DOMContentLoaded", () => {
    searchCityWeather(defaultCity);
});

runEventListener();

function runEventListener() {
    searchForm.addEventListener("submit", search);
}

function search(e) {
    e.preventDefault();
    const searchCity = cityName.value.trim();
    if (!searchCity) return;
    cityName.value = "";
    searchCityWeather(searchCity);
}

function searchCityWeather(city) {
    Promise.all([
        api.getCurrentWeather(city),
        api.getForecastWeather(city)
    ])
        .then(([currentData, forecastData]) => {
            h1cityName.textContent = currentData.location.name;
            firstWeatherIcon.src = currentData.current.condition.icon;
            weatherTittle.textContent = currentData.current.condition.text;
            date.textContent = currentData.location.localtime;
            degree.textContent = currentData.current.temp_c + "°C";

            ui.clearForecast();
            forecastData.forecast.forecastday.forEach(day => {
                const tittle = day.day.condition.text;
                const icon = "https:" + day.day.condition.icon;
                const dateForecast = day.date;
                const maxtemp = day.day.maxtemp_c + "°C";
                const mintemp = day.day.mintemp_c + "°C";
                ui.weatherForecast(icon, tittle, dateForecast, mintemp, maxtemp);
            });
        })
        .catch(err => alert("Şehir bulunamadı veya API hatası!"));
}
