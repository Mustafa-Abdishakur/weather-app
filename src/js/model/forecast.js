export default class Forecast {
    constructor(lat,long){
        this.lat = lat;
        this.long = long;
    }
    async getInfo(){
        try{
            const forecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.long}&exclude=current,minutely,hourly&units=metric&appid=28ce1addf74f9faaa95257b4c4d31b9f`);
            const json = await forecast.json();
            this.day1 = {
                temp: (json.daily[1].temp.min + json.daily[1].temp.max)/2,
                description:json.daily[1].weather[0].description,
            } 
            this.day2 = {
                temp: (json.daily[2].temp.min + json.daily[2].temp.max)/2,
                description:json.daily[2].weather[0].description,

            }
            this.day3 = {
                temp: (json.daily[3].temp.min + json.daily[3].temp.max)/2,
                description:json.daily[3].weather[0].description,
            }
            this.codes = [
                json.daily[1].weather[0].icon,
                json.daily[2].weather[0].icon,
                json.daily[3].weather[0].icon
            ]
        }catch(err){
            console.log(`forecast error: ${err}`);
        }
    }
}
