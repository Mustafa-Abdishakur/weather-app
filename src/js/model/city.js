//model module
import {loading} from '../view.js';
export default class City {
    constructor(city) {
        this.city = city;
    }
    async getInfo() {
        try {
            let weather = await fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=28ce1addf74f9faaa95257b4c4d31b9f`);
            let json = await weather.json();
            this.name = json.name;
            this.latitude = json.coord.lat;
            this.longitude = json.coord.lon;
            this.temperature = json.main.temp;
            this.description = json.weather[0].description;
            this.code = json.weather[0].icon;
            this.windSpeed = json.wind.speed;
            this.pressure = json.main.pressure;
            this.humidity = json.main.humidity;
            this.countryCode = json.sys.country;
        } catch (error) {
            alert('Ops, something went wrong. Please try again.');
            return;
        }

    }
}
