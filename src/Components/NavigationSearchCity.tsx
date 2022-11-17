import React, {useState} from 'react'
import Logo from "../Assets/AgWeather.png"
import Lang from "../Assets/Lang.svg"
import {Trans, useTranslation} from "react-i18next";

interface SearchType{
doesUserCurrentLocationExists:Boolean | null,
cityProvider:(item:any)=>void,
city:string,
searchWeatherByCity:any
}

const SearchCity=({doesUserCurrentLocationExists, cityProvider, city, searchWeatherByCity}:SearchType) =>{
const {t,i18n} =useTranslation();
const  iconurl = "http://openweathermap.org/img/w/" ;
const changeLanguage=(language:string)=>{
  i18n.changeLanguage(language)
}
const placeholderText = t("description.textPlaceHolder");
  return (
    <>
     <div className="Header"> 
       <div id="logo"><img src={Logo} alt=""/></div> 
      <div className="search">
      <h2 style={{color:"black"}}>
      <Trans i18nKey={"description.welcome"}>
      Welcome to React
      </Trans>
      </h2>
          <input
            value={city}
            onChange={e => cityProvider(e)}
            onKeyPress={(e)=>searchWeatherByCity(e)}
            placeholder={placeholderText}
            type="text" />
            {doesUserCurrentLocationExists === false? <p className='err'><Trans i18nKey={"description.errorMessage"}>
            Please enter a correct location</Trans></p>: null}
        </div>
        <div className='lang'>
          <button onClick={()=>changeLanguage("chi")}>🇨🇳</button> <button onClick={()=>changeLanguage("en")}>🇬🇧</button>
        </div>
      </div> 
    </>
  )
}

export default SearchCity