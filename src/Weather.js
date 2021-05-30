import React from "react";
import "./weather.css";

export default function Weather() {
  return (
        <div className="row">
          <div className="col-4">
            <h1 className="current-city" id="city">
              London
            </h1>
          </div>
          <div class="Actual-weather">
      <img
        src="http://openweathermap.org/img/wn/01d@2x.png"
        class="current-weather"
        alt="sunny"
        id="icon"
      />
      <p id="temperature-description">Mostly Sunny</p>
      <div class="row">
        <div class="col">
          <div class="clearfix weather-temperature">
            <br />
            <div id="current-temperature" class="float-left">
              <h4 id="temperature">18℃</h4>
            </div>
          </div>
        </div>

        <div class="col">
          <ul class="current-stats" id="stats">
            <li>
              Humidity: <span class="humidity">40%</span>
            </li>
            <br />
            <li>
              Wind-Speed: <span class="wind">10mph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );

}
