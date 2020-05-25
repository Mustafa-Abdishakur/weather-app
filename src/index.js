import './styles/main.scss';
const DOM = {
    input: document.querySelector('input'),
    city: document.querySelector('.city'),
    location: document.querySelector('.location')
}
DOM.input.addEventListener('keydown', async (event) => {
    if (event.keyCode === 13) {
        const inputCity = event.target.value;
        const city = new City(inputCity);
        await city.getInfo();
        
        //UI
  
        DOM.city.innerHTML = `${city.city}`;
        DOM.location.innerHTML = `Latitude: ${city.latitude} Longitude: ${city.longitude}`;
    }
})



console.log('hi');





class City {
    constructor(city) {
        this.city = city;
    }
    async getInfo() {
        try {
            let forecast = await fetch(`http://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=28ce1addf74f9faaa95257b4c4d31b9f`);
            let json = await forecast.json();
            //console.log(json);
            this.latitude = json.coord.lat;
            this.longitude = json.coord.lon;
            this.temperature = json.main.temp;
            this.description = json.weather[0].description;
            this.windSpeed = json.wind.speed;
            this.pressure = json.main.pressure;
            this.humidity = json.main.humidity;
            this.countryCode = json.sys.country;
            console.log(this);
        } catch (error) {
            console.log(error);
            alert('Ops, something went wrong. Please try again.');
        }

    }
}













/*TO DO LATER
*backgrond change
* forecast
* add option to change from calling by city to calling by other methods (EX: zip code) (check documents).*/

