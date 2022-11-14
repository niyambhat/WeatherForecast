import React, { useState } from 'react'
import axios from 'axios'
import { AppContext } from '../AppContext'
import Search from '../Search'
import Weather from '../Components/Weather'

function Home() {
  const [data, setCurrentData] = useState<any>(null)
  const [location, setLocation] = useState('')
  const [weatherCollection, setWeatherCollection] = useState<Array<any>>([])
  const { weatherApiKey  } = React.useContext(AppContext);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${weatherApiKey}
  `
  const searchLocation = (event:any) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setCurrentData(response.data)
        setWeatherCollection((prev)=>[...prev,response.data])
        console.log("data",response.data)
      })
      setLocation('')
    }
  }

  return (
    <>
      <div className="search">
        <Search/>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
     
        {weatherCollection.length >0 ? 
        // <Weather data={data}/> 
        weatherCollection.map((item,i)=>{
          return(
            <div className="container">
            <Weather data={item}/> 
            </div>
          )
        })
        : null}
      </>
  );
}

export default Home;