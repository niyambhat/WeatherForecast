# AgUnity Tech Challenge

This project will use the openweathermap api to show the user current weather information. 

The user should be able to enter a city name. If the city does not exist he should be notified. Otherwise, the weather information for the city will be added to the screen. The user can do this multiple times which will then show weather information of all the cities. The user should not be able to add the same city a second time.

Additional: If the browser and the user allow access to his current location (for example via "navigator.geolocation") this place should be added automatically.

## TODO

- Register for an API key at https://openweathermap.org/ and wait for your key to become active.
- complete src/app/api.services.ts
- complete src/app/models/weather.ts (you might want to check the API docs)
- add a UI component under ./src/app/components which will be used for showing the weather information for each city. 
- add a page under ./src/app/pages
- change AppComponent and add routing (lazy loading) for the use of your new page
- make sure all user facing text is using i18n and add a second language of your choice
- please add appropriate documentation a comments

### Optional

- please feel free to use observables, promises and rxjs. For example, the user could enable to use of localization later which should add his current weather information of not existing.
- create a unit test for ApiService
- create an e2e test

## Submit

Please create a zip file out of the project folder WITHOUT the "node_modules" folder. 