import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import About from './Pages/About/about';
import Services from './Pages/Services/services';
import ContactUs from './Pages/ContactUs/contact-us';
import SignUp from './Pages/SignUp/sign-up';
import './scss/style.scss';


function App() {
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
