import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import './App.css';


function App() {
  const [data,setData] = useState({})
  //const [data2,setData2] = useState('')
  const [location, setLocation] = useState('')
  //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const apiKey = 'bfb6c6eeff272ecc79219995f74a1595'
  const locationRegion = "vancouver"
  const units = "imperial"
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}`

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url)
        .then((response) => {setData(response.data)
        console.log(response.data)
        .catch(error => {
          alert(error)
        });
      })
      setLocation('')
    }
  }

  const [show, setShow] = useState(false);

  return (
    <div className="app">
      <div className="container">
        <div className="top">
        <Button onClick={() => setShow(prev => !prev)}>Click Here to get help!</Button>
        {show && <div className="helpContent">Welcome to the app. Start Searching for weather locations in the input "Enter Location". Enter a City name</div>}
        <div className="search">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder='Enter Location'
            onKeyPress={searchLocation}
            type="text"
          />
        </div>
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {/* This checks first to see if it is empty if not then display the temperature*/}
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            
          </div>
        </div>
        {data.name != undefined && 
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
