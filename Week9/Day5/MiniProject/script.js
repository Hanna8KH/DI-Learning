const clientCity = document.getElementById('city');
const buttonSubmitCity = document.getElementById('submitCity');
const currentCity = document.getElementById('showCity');
const currentWeather = document.getElementById('showWeather');

const API_KEY = '';

const getWeather = async (event) => {
    event.preventDefault();
    const place = clientCity.value;
    console.log(place);

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`,
        {
            method: 'GET',
            mode: 'no-cors'
        }  
    )

console.log(response);
};

buttonSubmitCity.onclick = getWeather;