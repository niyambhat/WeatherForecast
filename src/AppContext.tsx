import React from "react";


const AppPresets = {
weatherApiKey:"f18a7689ccb9b2333e87e468c2083de4", 
geoCityApi:{
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    headers: {
      'X-RapidAPI-Key': '5410e8230bmsh52b671e68f48aedp104160jsnc7862bbdeca2',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  }
}

export const AppContext = React.createContext(AppPresets);


type MainAppContextProps={
 children:React.ReactNode   
}

export const MainAppContext=({children}:MainAppContextProps)=>{
    return(
        <AppContext.Provider value={AppPresets}>
            {children}
        </AppContext.Provider>
    )
}