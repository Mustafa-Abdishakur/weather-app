import '../styles/main.scss';
import City from './city.js';
import {DOM, view, loading, weather} from './view.js';


DOM.input.addEventListener('keydown', async (event) => {
    if (event.keyCode === 13) {
        //loading 
        loading();
        //get the data
        const inputCity = event.target.value;
        const city = new City(inputCity);
        await city.getInfo();
        //display results
        loading();
        weather(city.code);
        view(city);
        DOM.input.value = '';
    }
})

//when page is loaded
/*window.addEventListener('load', async (event) =>{
        loading();
    const city = new City("أبوظبي");
    await city.getInfo();
    //UI
        loading();
        weather(city.code);
    view(city);

});*/





















/*TO DO LATER
*backgrond change
* forecast
* add option to change from calling by city to calling by other methods (EX: zip code) (check documents).*/

