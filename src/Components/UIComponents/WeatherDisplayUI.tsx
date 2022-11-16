import React from 'react'
import {Trans, useTranslation} from "react-i18next";

type AppProps = {
    data: any;
  };

const  iconurl = "http://openweathermap.org/img/w/" ;
const WeatherDisplayModel=({data}:AppProps)=>{
const temperatureInCelsius = (data?.main.temp.toFixed()-32) * 0.5;
const {t,i18n} =useTranslation();
const changeLanguage=(language:string)=>{
  i18n.changeLanguage(language)
}
  return (
   <div>
    <div className="weather-card">
    <div className="top">
      <div className="location">
        <p>{data?.name}</p>
      </div>
      <div className="temp">
        <h1> {temperatureInCelsius} °C</h1><img className="weatherIcon" src={iconurl + data?.weather[0].icon + ".png"} alt="#"/>
      </div>
      <div className="description">
        <p>{data?.weather[0].main}</p> 
      </div>
    </div>
    <div className="bottom">
        <div className="feels">
          <p className='bold'>24°F</p> 
          <p><Trans i18nKey={"description.feel"}>Feels Like</Trans></p>
        </div>
        <div className="humidity">
         <p className='bold'>10%</p> 
          <p><Trans i18nKey={"description.humid"}>Humidity</Trans></p>
        </div>
        <div className="wind">
          <p className='bold'>{data?.wind.speed} MPH</p> 
          <p><Trans i18nKey={"description.windSpeed"}>Wind Speed</Trans></p>
        </div>
      </div>
    </div>
   
   </div>
    
  )
}

export default WeatherDisplayModel