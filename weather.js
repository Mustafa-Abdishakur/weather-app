async function test(city) {
    try {
        let forecast = await fetch(`http://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28ce1addf74f9faaa95257b4c4d31b9f`);
        let json = await forecast.json();
        console.log(json);
    } catch (err) {
        alert('error: ' + err);
    }
}

//test('dubai');
class City {
    constructor(name, latitude, longitude, temperature, description, windSpeed, pressure, humidity, id, icon, countryCode) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.temperature = temperature;
        this.description = description;
        this.windSpeed = windSpeed;
        this.pressure = pressure;
        this.humidity = humidity;
        this.id = id;
        this.icon = icon;
        this.countryCode = countryCode;
    }

}

document.querySelector('input').addEventListener('keydown', event => {
    if (event.keyCode === 13) {

    }
})

















/*TO DO LATER
*backgrond change
* forecast
* add option to change from calling by city to calling by other methods (EX: zip code) (check documents).*/

