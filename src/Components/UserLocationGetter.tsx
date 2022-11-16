import React,{useState, useEffect} from 'react'

interface UserLocationProps{
currentLocation:string,setCurrentLocation:any
}
function GetUserLocation({currentLocation, setCurrentLocation}:UserLocationProps) {
const successCallback = (position:any) => {
setCurrentLocation(position.coords)
};
const errorCallback = (error:any) => {
console.log(error);
};

useEffect(()=>{
if(!currentLocation)   navigator.geolocation?.getCurrentPosition(successCallback, errorCallback);
},[])
  
  return (
    <div>{null}</div>
  )
}

export default GetUserLocation