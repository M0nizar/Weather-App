# MY README FILE FOR THE WEATHER APPLICATION CHALLENGE

## TABLE OF CONTENT

  <ol>
    <li>
      <a href="#about-the-project"> About The Project</a>
    </li>
     <li>
     <a href="#used-technologies">Used Technologies</a>
    </li>
     <li>
     <a href="#project-structure">Project Structure</a>
    </li>
     <li>
      <a href="#key-features-and-implementation">Key Features And Implementation</a>
    </li>
       <li>
     <a href="#what-i-learned-from-this-project">What I Learned From This Project</a>
    </li>
  </ol>


## About The Project
This is a weather web application built as part of the 30-day Frontend Mentor Hackathon.
It allows the user to view simple weather statistics for the current day and hourly forecast of their location.
The app also provides the ability to search for any city, manage units and choose the desired forecast days.


## Used Technologies
These are the technologies used in this project :

* ![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  for the making the interface and manage components.
* ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)  for logic and api calls.
* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  for structure.
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  for styling.
* ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)  as development environement and built tool.
 

## Project Structure
I used Vite as the development environment, so it already gives some structure, but my personal structure was like this. It’s ideal because it makes the app easier to scale and extend, and it also helps collaborators and other developers clearly understand what’s going on.
```
weather-web-application
├── 📂 public
│   ├── 📂 icons
│   └── 📂 images
│
├── 📂 src
│   ├── 📂 components
│   │   ├── 📂 NavBar
|   |   |   ├── NavBar.jsx
|   |   |   └── NavBar.module.css
│   │   ├── 📂 SearchBar
|   |   |   ├── SearchBar.jsx
|   |   |   └── SearchBar.module.css
│   │   ├── ...
|   |
│   ├── 📂 constants
│   │   └── data.js
│   ├── 📂 context
│   │   └── WeatherContext.jsx
│   ├── 📂 styles
│   │   ├── index.css
│   │   └── variables.css
│   ├── 📂 utils
│   │   └── usedFunctions.js
|   |
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── package-lock.json
└── eslint.config.js
```

## Key Features And Implementation
### Styling
- i focused on modular styling to keep it scalable and maintanable and i used css variables for consistensy and easy customization.
### State Management
- I used context provider to manage globale states like weatherData, units, errors .....
### Used APIs
- For this project, I used the following APIs:
  - **Geocoding API**: Converts a city name into geographic coordinates (latitude and longitude).
  - **Open-Meteo API**: Fetches weather data (current, hourly, and daily forecast) for the given coordinates.
  - **Nominatim Reverse Geocoding API**: Converts given coordinates back into a city name (and also provides other location details).
These are the feature included in the project :

### Implemented Features
<ul>
  <li>searching for weather statistics for any city.</li>
  <li>view current weather statistics.</li>
  <li>see additional metrics</li>
  <li>manage and change units</li>
  <li>view  day forcast with max and min temperature</li>
  <li>view hourly forcast for selected day</li>
  <li>switch to imperial units</li>
  <li>see recent searches</li>
  <li>view responsive layout</li>
  <li>see hover and focus for interactive elements</li>
</ul>


## What I learned From This Project
- In this project, I focused on making myself more comfortable with building scalable, maintainable, and extensible applications by using an understandable folder structure, writing clean and clear code, creating reusable components, applying modular styling, and using global CSS variables.
- i also practiced my fetching and api calls, error handeling and state management.

---
- I really appreciate this opportunity and would love any suggestions or advice that could help me further improve my skills and deepen my understanding.







