import React from "react";
import "./dailyforecast.css";


 function day(props) {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Weds", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function celciusMaxTemp(props) {
    let celciusMaxTemp = Math.round(props.forecast.temp.max);
    return celciusMaxTemp;
  }
  function celciusMinTemp(props) {
    let celciusMinTemp = Math.round(props.forecast.temp.min);
    return celciusMinTemp;
  }
  function fahrenheitMaxTemp(props) {
    let fahrenheitMaxTemp = Math.round((props.forecast.temp.max * 9) / 5 + 32);
    return fahrenheitMaxTemp;
  }
  function fahrenheitMinTemp(props) {
    let fahrenheitMinTemp = Math.round((props.forecast.temp.min * 9) / 5 + 32);
    return fahrenheitMinTemp;
  }

  if (props.unit === "celcius") {
    return (
      <div className="DailyForecast">
        <h6 className="days col-5 col-md-auto text-center">{day()}</h6>
        <icon icon={props.forecast.weather[0].icon} />
        <div className="weather-forecast">
          <strong>
            <span className="DailyForecast-temp-max">{celciusMaxTemp()}℃</span>
          </strong>{" "}
          | <span className="DailyForecast-temp-min">{celciusMinTemp()}℃</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="DailyForecast">
        <h6 className="days col-5 col-md-auto text-center">{day()}</h6>
        <icon icon={props.forecast.weather[0].icon} />
        <div className="weather-forecast">
          <strong>
            <span className="DailyForecast-temp-max">
              {fahrenheitMaxTemp()}
            </span>{" "}
            º
          </strong>{" "}
          |{" "}
          <span className="DailyForecast-temp-min">{fahrenheitMinTemp()}</span>{" "}
          º
        </div>
      </div>
    );
  }