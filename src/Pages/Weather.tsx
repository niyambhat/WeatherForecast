import React, { useState, Suspense, useEffect } from 'react'
import Weather from '../Components/UIComponents/WeatherDisplayUI';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import SearchCity from '../Components/NavigationSearchCity';
import ApiService from '../Components/ApiService';
import GetUserLocation from '../Components/UserLocationGetter';

function Home() {
  //App viewModel parameters
  const [currentLocation, setCurrentLocation] =useState<any | null>(null)
  const [locationExists, setLocationExists]=useState<Boolean | null>(null);
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<any>(null)
  const [weatherCollection, setWeatherCollection] = useState<Array<any>>([])
  const [trigger, setTrigger] = useState(0);
  const grabCityfromSearch=(e:any)=>{
   setCity(e.target.value) 
  }
  const setDataFromWeatherAPI=(value:any)=>{
    setWeatherData(value);
  }
  const setObservableCurrentLocation=(value:string)=>{
    setCurrentLocation(value);
  }
  const pushToWeatherCollection=(weatherData:any)=>{
    if(weatherData)setWeatherCollection((prev)=>[...prev,weatherData])
  }
  const setObservableDoesLocationExist=(value:Boolean)=>{
  setLocationExists(value);
  }
  
  const searchWeatherByCity=(event:any)=>{
    const {value} =event.target
    if (event.key === 'Enter' && value.length > 0) {
      setTrigger((trigger) => trigger + 1);    }
  }

    return (
      <>
      <GetUserLocation currentLocation={currentLocation} setCurrentLocation={setObservableCurrentLocation}/>
      <SearchCity  doesUserCurrentLocationExists={locationExists}  cityProvider={grabCityfromSearch} city={city} searchWeatherByCity={searchWeatherByCity}/>
      <ApiService  
      setLocationExists={setObservableDoesLocationExist}
      currentLocation={currentLocation}
      trigger={trigger}
      city={city} 
      setWeatherData={setDataFromWeatherAPI} 
      weatherCollection={weatherCollection}
      pushToWeatherCollection={pushToWeatherCollection}/>
       <div className="article">
       {weatherCollection ? 
          weatherCollection?.map((item,i)=>{
            return(
              <div className="container" key={i}>
              <Weather data={item}/> 
              </div>
            )
          })
          : null}
       </div>
        </>
    );
    }
  

export default Home;



  //   const searchWeatherByLatLong = () => {
  //   console.log("Lat long trigger")
  //     axios.get(getWeatherByLatLong).then((response) => {
  //       setCurrentData(response.data)
  //       setWeatherCollection((prev)=>[...prev,response.data])
  //       console.log("data",response.data)
  //     }).catch(function (error) {
  //       console.log(error.toJSON());
  //     });    
  //     setCity('')   
  // }


  
  // function handleClick(lang:string) {
  //   i18next.changeLanguage(lang)
  // }
