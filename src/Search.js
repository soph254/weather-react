import React, { useState } from "react";
import "./search.css";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Search(props) {
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity);
const [unit, setUnit] = useState("celcius");

function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true, 
    coordinates: response.data.coord,
    temperature: Math.round(response.data.main.temp),
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon, 
    city: response.data.name,
    country: response.data.sys.country,
  });
}
function handleSubmit(event) {
  event.preventDefault();
  Search();
}
function handleCityChange(event) {
  setCity(event.target.value);
}
function search() {
  const apiKey = "29ebab6de846a52578b47c84cda1eaf1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function getCurrentLocation(position) {
  const apiKey = "29ebab6de846a52578b47c84cda1eaf1";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
}

function retrieveLocation(event) {
  event.preventDefault();
  navigator.gerlocation.getCurrentPosition(getCurrentLocation);
}
if (weatherData.ready) {
  return (
  <div className="weather-app">
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      className="input-city"
      autoComplete="off"
      placeholder="Enter City here"
      onChange={handleCityChange}
    />
    <button
      type="submit"
      className="btn btn-light w-300"
      id="search-button"
    >
      Search
    </button>
    <button type="button" className="btn btn-info w-300" id="current-btn" onClick={retrieveLocation}>
      <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
      Current
    </button>
  </form>
  <weather data={weatherData} unit={unit} setUnit={setUnit} />
  <forecast coordinates={weatherData.coordinates} unit={unit} />
</div>
);
} else {
  search();
  return (
    <div className="loader">
      <Loader
      type= "ThreeDots"
      color= "rgb(113, 143, 182)"
      height={85}
      width={85}
      />
      </div>
  );
}
   
}
