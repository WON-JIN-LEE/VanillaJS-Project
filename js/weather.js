

const API_KEY = "c28bba59104eadc1e33b16ba82884c68";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather :nth-child(2)");
        const temp = document.querySelector("#weather :nth-child(4)");
        const city = document.querySelector("#weather :last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / `;
        temp.innerText = `${data.main.temp}`
        selectedIcon(data.weather[0].main);
        console.log(url);
    });
}
function onGeoError() {
    alert("Error");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function selectedIcon(string) {
    const weather_icon = document.querySelector("#weather i");
    
    switch (string) {
        case "Clouds":
            weather_icon.className = "fas fa-cloud";
            break;
        case "Rain":
            weather_icon.className = "fas fa-cloud-showers-heavy";
            break;
        case "Clear":
            weather_icon.className = "fas fa-sun";
            break;
        case "Snow":
            weather_icon.className = "fas fa-snowflake";
            break;
        default:
            weather_icon.className = "fas fa-cloud-sun";
            break;
    } 
}