class Apirequest {
    constructor() {
        this.baseUrl = "https://api.weatherapi.com/v1";
        this.apiKey = "";
    }
    async getCurrentWeather(city) {
        const response = await fetch(`${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}&lang=en`);
        return await response.json();
    }

    async getForecastWeather(city, days = 5) {
        const response = await fetch(`${this.baseUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=${days}&lang=en`);
        return await response.json();
    }

}