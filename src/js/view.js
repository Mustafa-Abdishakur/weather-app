//view module
import countryList from 'iso-3166-country-list';
export const DOM = {
    input: document.querySelector('input'),
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
    weather: document.querySelector('.weather-icon-container')
    /*sunny: document.querySelector('.sunny'),
    cloudy: document.querySelector('.cloudy'),
    rainy: document.querySelector('.rainy'),
    thunderStorm: document.querySelector('.thunder-storm'),
    sunShower: document.querySelector('.sun-shower'),
    snowy: document.querySelector('.flurries')
*/
}

export const view = city => {
    const countryArr = city.name.split('');
    const firstLetter = countryArr[0].toUpperCase();
    countryArr.splice(0, 1, firstLetter);
    const cityName = countryArr.join('');
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
    [document.querySelector('.city-info-container'), document.querySelector('.secondary-container')].forEach(el => {
        el.classList.toggle('disappear');
    });
    DOM.loading.classList.toggle('appear');
}

export const weather = code => {
    const codeArr = [code.substring(0, 2), code[2]];
    let markup;
    console.log(DOM.weather);
    switch (codeArr[0]) {
        case '01':
             markup = `
            <div class="icon sunny">
                <div class="sun">
                     <div class="rays"></div>
                </div>
            </div>
            `;
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', markup);
            break;
        case '02':
             markup = `
            <div class="icon sunny">
                <div class="sun">
                     <div class="rays"></div>
                </div>
            </div>
            `;
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', markup);
            break;
        case '03':
             markup = `
            <div class="icon cloudy">
                <div class="cloud"></div>
                    <div class="cloud"></div>
            </div>
            `;
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', markup);
            break;
        case '04':
             markup = `
            <div class="icon cloudy">
                <div class="cloud"></div>
                    <div class="cloud"></div>
            </div>
            `;
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', markup);
            break;
        case '09':
             markup = `
            <div class="icon rainy">
                <div class="cloud"></div>
                    <div class="rain"></div>
            </div>
            `;
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', markup);
            break;
        case '10':
             markup = `
            <div class="icon sun-shower">
                <div class="cloud"></div>
                    <div class="sun">
                         <div class="rays"></div>
                     </div>
                <div class="rain"></div>
            </div>
            `;
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', markup);
            break;
        case '11':
             markup = `
            <div class="icon thunder-storm">
                <div class="cloud"></div>
                <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                </div>
            </div>
                `;
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', markup);
            break;
        case '13':
             markup = `
                <div class="icon flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                        <div class="flake"></div>
                        <div class="flake"></div>
                    </div>
                </div>
                    `;
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', markup);
            break;
        case '50':
             markup = `
             <div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
             </div>
                    `;
            document.querySelector('.icon').parentNode.removeChild(document.querySelector('.icon'));
            DOM.weather.insertAdjacentHTML('beforeend', markup);
            break;
    }
}


