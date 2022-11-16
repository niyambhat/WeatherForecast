## This Project is an attempt for the Ag Tevch challenge
I,
- Executed this project in React Js 
- Used the Weather.tsx Page as a view Model to hold and pass all the necessary states.Ideally it would be favourable to use a React Context API with a reducer.
- Utilised the APIService.tsx component to only perform the necessary API calculations and return the data back to the weather page.
- Applied user facing text using i18n, second language being chinese. However, the input text for the search bar is still in English.
- Tried to name the classes and functions appropriately to make the code understandable. 
- Added react router to set the default route by /Weather.
- Utilised Fetch API for HTTP requests. Alternatively, I have also used axios(promise based htttp client before) 

I am still developing my sills in testing, however I have performed some manual testing. 



## Requirements
- Register for an API key at https://openweathermap.org/ and wait for your key to become active. - done
- complete src/app/api.services.ts 
- complete src/app/models/weather.ts (you might want to check the API docs)
- add a UI component under ./src/app/components which will be used for showing the weather information for each city. 
- add a page under ./src/app/pages
- change AppComponent and add routing (lazy loading) for the use of your new page
- make sure all user facing text is using i18n and add a second language of your choice
- please add appropriate documentation a comments
