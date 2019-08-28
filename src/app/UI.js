export class UI {
    constructor(location, description, string, humidity, wind) {
        this.location = document.getElementById('weatherLocation');
        this.description = document.getElementById('weatherDescription');
        this.string = document.getElementById('weatherString');
        this.humidity = document.getElementById('weatherHumidity');
        this.wind = document.getElementById('weatherWind');
    }

    render(weather) {

            this.location.textContent = weather.name + ' / ' + weather.sys.country;
            this.string.textContent = weather.main.temp + '°C';
            this.humidity.textContent = 'Humedad promedio ' + weather.main.humidity + '%';
            this.wind.textContent = 'Viento ' + ((weather.wind.speed / 1000) * 3600).toFixed(2) + ' K/H';
            this.description.textContent = weather.weather[0].description;



    }
}