import React from 'react'

type AppProps = {
    data: any;
  };
const Weather=({data}:AppProps)=>{
  return (
   <div>
    <div className="weather-card">
    <div className="top">
      <div className="location">
        <p>{data?.name}</p>
      </div>
      <div className="temp">
        <h1> {data?.main.temp.toFixed()} °F</h1>
      </div>
      <div className="description">
        <p>{data?.weather[0].main}</p> 
      </div>
    </div>
    <div className="bottom">
        <div className="feels">
          <p className='bold'>24°F</p> 
          <p>Feels Like</p>
        </div>
        <div className="humidity">
         <p className='bold'>10%</p> 
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className='bold'>{data?.wind.speed} MPH</p> 
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
   
   </div>
    
  )
}

export default Weather