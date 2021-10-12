import '../styles/main.scss';
import City from './model/city';
import Forecast from './model/forecast';
import { DOM, view, loading, weather, forecastView, forecastClouds } from './view.js';

DOM.input.addEventListener('keydown', async (event) => {
    if (event.keyCode === 13) {
        //loading 
        loading();
        //get the data
        const inputCity = event.target.value;
        const city = new City(inputCity);
        await city.getInfo();
        const forecast = new Forecast(city.latitude, city.longitude);
        await forecast.getInfo();
        //display results
        loading();
        weather(city.code);
        view(city);
        forecastView(forecast);
        forecastClouds(forecast.codes);
        DOM.input.value = '';
    }
})
//when page is loaded
window.addEventListener('load', async (event) => {
    loading();
    const city = new City("أبوظبي");
    await city.getInfo();
    const forecast = new Forecast(city.latitude, city.longitude);
    await forecast.getInfo();
    //UI
    loading();
    weather(city.code);
    view(city);
    forecastView(forecast);
    forecastClouds(forecast.codes);
    DOM.input.value = '';

});




