//view module
import countryList from 'iso-3166-country-list';
import { clouds } from './cloud constants';
export const DOM = {
    input: document.querySelector('.search-input'),
    background:document.querySelector('.background-container'),
    city: document.querySelector('.city'),
    location: document.querySelector('.location'),
    temperature: document.querySelector('.temperature'),
    description: document.querySelector('.description'),
    wind: document.querySelector('.wind'),
    pressure: document.querySelector('.pressure'),
    humidity: document.querySelector('.humidity'),
    loading: document.querySelector('.loading-img'),
    main: document.querySelector('.main-container'),
    icon: document.querySelector('.icon'),
    weather: document.querySelector('.weather-icon-container'),
    cityInfo: document.querySelector('.city-info-container'),
    secondaryContainer: document.querySelector('.secondary-container'),
    forecastContainer: document.querySelector('.forecast-container'),
    day1: document.querySelector('.temperature-1'),
    day2: document.querySelector('.temperature-2'),
    day3: document.querySelector('.temperature-3')
}

export const view = city => {

    const cityName = capitalize(city);
    const country = countryList.name(city.countryCode);
    DOM.city.innerHTML = `${cityName}, ${country}`;
    DOM.location.innerHTML = `Latitude: ${city.latitude}° Longitude: ${city.longitude}°`;
    DOM.temperature.innerHTML = `${Math.round(city.temperature)}°C`;
    DOM.description.innerHTML = city.description;
    DOM.wind.innerHTML = city.windSpeed + ' meter/sec';
    DOM.pressure.innerHTML = city.pressure + ' hPa';
    DOM.humidity.innerHTML = city.humidity + '%';
};

export const loading = () => {
    [DOM.cityInfo, DOM.secondaryContainer, DOM.forecastContainer].forEach(el => {
        el.classList.toggle('disappear');
    });
    DOM.loading.classList.toggle('appear');
}

export const weather = code => {
    const codeArr = [code.substring(0, 2), code[2]];
    switch (codeArr[0]) {
        case '01':
            DOM.background.classList.add('sunny');
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', clouds.sunnyMarkup);
            break;
        case '02':
            DOM.background.classList.add('sunny');
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', clouds.sunnyMarkup);
            break;
        case '03':
            DOM.background.classList.add('cloudy');
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', clouds.cloudyMarkup);
            break;
        case '04':
            DOM.background.classList.add('cloudy');
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', clouds.cloudyMarkup);
            break;
        case '09':
            DOM.background.classList.add('rainy');
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', clouds.rainyMarkup);
            break;
        case '10':
            DOM.background.classList.add('sunny');
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', clouds.sunShowerMarkup);
            break;
        case '11':
            DOM.background.classList.add('stormy');
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', clouds.thunderStormMarkup);
            break;
        case '13':
            DOM.background.classList.add('snowy');
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', clouds.snowyMarkup);
            break;
        case '50':
            DOM.background.classList.add('cloudy');
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', clouds.cloudyMarkup);
            break;
    }
}
function capitalize(city) {
    const countryArr = city.name.split('');
    const firstLetter = countryArr[0].toUpperCase();
    countryArr.splice(0, 1, firstLetter);
    return countryArr.join('');
}
export const forecastView = forecast => {
    DOM.day1.innerHTML = `${Math.round(forecast.day1.temp)}°C</br>${forecast.day1.description}`;
    DOM.day2.innerHTML = `${Math.round(forecast.day2.temp)}°C</br>${forecast.day2.description}`;
    DOM.day3.innerHTML = `${Math.round(forecast.day3.temp)}°C</br>${forecast.day3.description}`;
}

export const forecastClouds = codes => {

    codes.forEach((cur, index) => {
        const code = cur.substring(0, 2);
        switch (code) {
            case '01':
                document.querySelector(`.forecast-${index + 1} .icon`).parentNode.removeChild(document.querySelector(`.forecast-${index + 1} .icon`));
                document.querySelector(`.forecast-${index + 1} .weather-icon-container`).insertAdjacentHTML('beforeend', clouds.sunnyMarkup);
                break;
            case '02':
                document.querySelector(`.forecast-${index + 1} .icon`).parentNode.removeChild(document.querySelector(`.forecast-${index + 1} .icon`));
                document.querySelector(`.forecast-${index + 1} .weather-icon-container`).insertAdjacentHTML('beforeend', clouds.sunnyMarkup);
                break;
            case '03':
                document.querySelector(`.forecast-${index + 1} .icon`).parentNode.removeChild(document.querySelector(`.forecast-${index + 1} .icon`));
                document.querySelector(`.forecast-${index + 1} .weather-icon-container`).insertAdjacentHTML('beforeend', clouds.cloudyMarkup);
                break;
            case '04':
                document.querySelector(`.forecast-${index + 1} .icon`).parentNode.removeChild(document.querySelector(`.forecast-${index + 1} .icon`));
                document.querySelector(`.forecast-${index + 1} .weather-icon-container`).insertAdjacentHTML('beforeend', clouds.cloudyMarkup);
                break;
            case '09':
                document.querySelector(`.forecast-${index + 1} .icon`).parentNode.removeChild(document.querySelector(`.forecast-${index + 1} .icon`));
                document.querySelector(`.forecast-${index + 1} .weather-icon-container`).insertAdjacentHTML('beforeend', clouds.rainyMarkup);
                break;
            case '10':
                document.querySelector(`.forecast-${index + 1} .icon`).parentNode.removeChild(document.querySelector(`.forecast-${index + 1} .icon`));
                document.querySelector(`.forecast-${index + 1} .weather-icon-container`).insertAdjacentHTML('beforeend', clouds.sunShowerMarkup);
                break;
            case '11':
                document.querySelector(`.forecast-${index + 1} .icon`).parentNode.removeChild(document.querySelector(`.forecast-${index + 1} .icon`));
                document.querySelector(`.forecast-${index + 1} .weather-icon-container`).insertAdjacentHTML('beforeend', clouds.thunderStormMarkup);
                break;
            case '13':
                document.querySelector(`.forecast-${index + 1} .icon`).parentNode.removeChild(document.querySelector(`.forecast-${index + 1} .icon`));
                document.querySelector(`.forecast-${index + 1} .weather-icon-container`).insertAdjacentHTML('beforeend', clouds.snowyMarkup);
                break;
            case '50':
                document.querySelector(`.forecast-${index + 1} .icon`).parentNode.removeChild(document.querySelector(`.forecast-${index + 1} .icon`));
                document.querySelector(`.forecast-${index + 1} .weather-icon-container`).insertAdjacentHTML('beforeend', clouds.cloudyMarkup);
                break;
        }

    });

};