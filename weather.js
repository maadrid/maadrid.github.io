const weather = document.querySelector("#weather span:first-child");
const API_KEY = "27f1f776be4febeecc404deb4086a3c8";


function getWeather(coords){

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    weather.innerText = `${Math.floor(data.main.temp)}° @ ${data.name}`;
  });

}


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coords = { lat, lon };


  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);

}
function onGeoError() {
  console.log("No Location");
}


function loadWeather() {
  const currentCoords = localStorage.getItem("coords");

  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);

  } else {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }
}

function initWeather(){
  loadWeather()
}

initWeather();