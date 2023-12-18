import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecast_Day from "./WeatherForecastDay";


export default function WeatherForecast(props) {
  let [Loaded, setLoaded] = useState(false);
  let [Forecast, setForecast] = useState({});
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    
  }

  if (Loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
           <WeatherForecast_Day data={Forecast[0]}/>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
