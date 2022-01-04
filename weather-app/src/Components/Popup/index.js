import React, { useState, useEffect, createContext, Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import styles from '../../scss/style.scss';
import IPStack from '../../APIs/IPStack/index';
import Home from '../../Pages/index';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '$lightgrey',
  },
};


const Popup = () => {

    useEffect(() => {
        window.localStorage.clear()
    }, [])

    // Popup
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(true);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '--gradient-text';
    }

    function closeModal(event) {
        setIsOpen(false);
        //event.preventDefault()
        window.localStorage.setItem('city', `${city}`)
        
        //alert(`You entered: ${city}`)
    }

    // Array of objects containing our cities data
    let cities = [
        { label: "Toronto", value: "Toronto" },
        { label: "Montreal", value: "Montreal" },
        { label: "Vancouver", value: "Vancouver" }
    ]

    // Using state to keep track of what the selected city is
    let [city, setCity] = useState("")

    // Using this function to update the state of city
    // whenever a new option is selected from the dropdown
    let handleCityChange = (e) => {
        setCity(e.target.value);
        console.log(e.target.value)
    }
    
    const data = ("Vancouver");

    return(
        <form>
            <button onClick={openModal}>Change Name/Location</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
                className="modal in"
            >   
                    <h2 className="gradient__text" ref={(_subtitle) => (subtitle = _subtitle)}>Welcome to the Weather App</h2>
                    
                    {/* Displaying the value of fruit */}
                    <p>I see you live in {city}</p>
                    <div>
                        {/* Creating our dropdown and passing it the handleFruitChange 
                        so that every time a new choice is selected, our fruit state 
                        updates and renders an emoji of the fruit.
                        */}
                        <label htmlFor="locationInput" className="popup__title-location">Change Location (Optional)</label>
                        <select onChange={handleCityChange}> 
                            {/* Creating the default / starting option for our dropdown.*/}
                            <option value="⬇️ Select a city ⬇️"> -- Select a City -- </option>
                            {/* Mapping through each fruit object in our fruits array
                            and returning an option element with the appropriate attributes / values.
                            */}
                            {cities.map((city) => <option id="city" value={city.value}>{city.label}</option>)}
                        </select>
                    </div>
                    <div>
                        <button type="submit" onClick={closeModal}>Continue</button>
                    </div>
            </Modal>
        </form>
    )
}

export default Popup