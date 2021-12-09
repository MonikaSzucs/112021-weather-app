import React from 'react';
import './App.css';
import axios from 'axios'

/* IP Stack */
const API_endpoint = `http://api.ipstack.com/check?`;
const API_key = `772ad85b6130cb136c8b5f0b8f62cb32`;

const IPStack = () => {
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
    <>
        Test
    </>
    
  );
}

export default IPStack;
