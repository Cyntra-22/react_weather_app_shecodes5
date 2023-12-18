import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast_Day(props){

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
        return days[day];
    }
    return (
      <div className="WeatherForecast_Day">
        <div className="WeatherForecast_day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={32} />
        <div className="WeatherForecast_Temperature">
          <span className="WeatherForecast_Temperature_Max">
            {Math.round(props.data.temp.max)}°
          </span>
          <span className="WeatherForecast_Temperature_Min">
            {Math.round(props.data.temp.min)}°
          </span>
        </div>
      </div>
    );
}