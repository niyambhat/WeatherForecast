import React, {useState, useEffect} from 'react'
import axios from "axios";

interface AppProps{
 city:string,
 setWeatherData:any,
 trigger:number,
 pushToWeatherCollection:any,
 currentLocation:any,
 setLocationExists:any,
 weatherCollection:any
}
const API_Store= {
    OpenWeather:{
    name:"Open Weather API",
    desc:"Provides current weather data",
    URL:"https://api.openweathermap.org/data/2.5/weather/",
    Key:"f18a7689ccb9b2333e87e468c2083de4", 
    }
}

const ApiService=({city, setWeatherData, trigger, pushToWeatherCollection,weatherCollection, currentLocation, setLocationExists}:AppProps)=> {
const HTTPgetWeatherByCity = `${API_Store.OpenWeather.URL}?q=${city}&units=imperial&appid=${API_Store.OpenWeather.Key}`
const HTTPgetWeatherByLatLong = `${API_Store.OpenWeather.URL}?lat=${currentLocation?.latitude}&lon=${currentLocation?.longitude}&units=imperial&appid=${API_Store.OpenWeather.Key}`
const [locationActive,setLocationActive] =useState(false)
export async function getWeatherByCity (){
  fetch(HTTPgetWeatherByCity)
  .then((response) => {
    if(response.ok) {
      setLocationExists(true);
      return response.json();
    }
    if(!response.ok) setLocationExists(false);
  }).then((data) => {
    if(data){
      const duplicate = weatherCollection.some((item:any)=>item.name === data.name)
      if(duplicate){
        alert("City has already been added");
      } else{
        setWeatherData(data);
        pushToWeatherCollection(data);
      }
    }
}).catch((err) => {
    console.log("error retrieving data", err);
    setLocationExists(false);
  });
}

async function getWeatherByLatLong (){
  fetch(HTTPgetWeatherByLatLong)
  .then((response) => {
    if(response.ok) {
      return response.json();
    }
  }).then((data) => {
    if(data){
        setWeatherData(data);
        pushToWeatherCollection(data);
    }
}).catch((err) => {
    console.log("error retrieving data", err);
  });
}


useEffect(()=>{
if(!locationActive){
  if(currentLocation){
    getWeatherByLatLong();
    setLocationActive(true);
  }
}  
},[currentLocation])

useEffect(() => {
    if (trigger) {
      getWeatherByCity();
    }
  }, [trigger]);

  return (
    <>
    {null}
    </>
  )
}

export default ApiService;


// async function getWeatherByCity (){
//   fetch(HTTPgetWeatherByCity)
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   }).then((data) => {
//     if(data){
//       setWeatherData(data);
//       pushToWeatherCollection(data);
//     }
// }).catch((err) => {
//     console.log("error retrieving data", err);
//     setLocationExists(false);
//   });
// }

  // async function getWeatherByLatLong (){
  //   fetch(HTTPgetWeatherByLatLong)
  //   .then((response) => {
  //     console.log("resolved", response);
  //     return response.json();
  //   }).then((data) => {
  //     setWeatherData(data);
  //     pushToWeatherCollection(data);
  // }).catch((err) => {
  //     console.log("error retrieving data", err);
  //   });
  // }