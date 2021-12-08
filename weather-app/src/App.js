import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import About from './Pages/About/about';
import Services from './Pages/Services/services';
import ContactUs from './Pages/ContactUs/contact-us';
import SignUp from './Pages/SignUp/sign-up';
import axios from 'axios'

const API_endpoint = `https://api.openweathermap.org/data/2.5/onecall?`;
const API_key = `d5730387765ca4adcf26c77e98967dd7`;

function App() {
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      console.log(position.coords.latitude)
      setLongitude(position.coords.longitude)
      console.log(position.coords.longitude)
    })

    console.log(`${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`)
    let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`

    axios.get(finalAPIEndPoint)
    .then((response) => {
      console.log(response.data)
    })

  }, [])

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/services' exact element={<Services/>}/>
        <Route path='/contact-us' exact element={<ContactUs/>}/>
        <Route path='/sign-up' exact element={<SignUp/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
