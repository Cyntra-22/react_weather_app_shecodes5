import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast_Day">Thu</div>
          <WeatherIcon code="10d" size={32} />
          <div className="WeatherForecast_Temperature">
            <span className="WeatherForecast_Temperature_Max">19°</span>
            <span className="WeatherForecast_Temperature_Min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
