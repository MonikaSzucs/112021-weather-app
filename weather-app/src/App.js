import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import About from './Pages/About/about';
import Services from './Pages/Services/services';
import ContactUs from './Pages/ContactUs/contact-us';
import SignUp from './Pages/SignUp/sign-up';
import axios from 'axios';
import './scss/style.scss';

const API_endpoint = `http://api.ipstack.com/check?`;
const API_key = `772ad85b6130cb136c8b5f0b8f62cb32`;

function App() {
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Start")
      console.log(position)
      console.log(position.coords)
      setLatitude(position.coords.latitude)
      // console.log(position.coords.latitude)
      setLongitude(position.coords.longitude)
      // console.log(position.coords.longitude)
    })

    console.log(`${API_endpoint}access_key=${API_key}`)
    let finalAPIEndPoint = `${API_endpoint}access_key=${API_key}`

    axios.get(finalAPIEndPoint)
    .then((response) => {
      console.log(response.data)
      console.log(response.data.city)
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
