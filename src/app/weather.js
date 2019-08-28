export class Weather {

    constructor(city, countryCode) {
        this.apikey = '43a8938588e06b9fb6300ab1d60c415c';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, code) {
        this.city = city;
        this.countryCode = code;
    }
}