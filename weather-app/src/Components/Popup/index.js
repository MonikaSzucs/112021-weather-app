import React, { useState } from 'react'
import Modal from 'react-modal';
import styles from '../../scss/style.scss';

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
    // Popup
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(true);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'blue';
    }

    function closeModal() {
        setIsOpen(false);
    }

    // Array of objects containing our cities data
    let cities = [
        { label: "Toronto", value: "Toronto" },
        { label: "Montreal", value: "Montreal" },
        { label: "Vancouver", value: "Vancouver" }
    ]

    // Using state to keep track of what the selected city is
    let [city, setCity] = useState("⬇️ Select a city ⬇️")

    // Using this function to update the state of city
    // whenever a new option is selected from the dropdown
    let handleCityChange = (e) => {
        setCity(e.target.value)
    }
    
    return(
        <>
            <button onClick={openModal}>Change Name/Location</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Welcome to the Weather App</h2>
                
                {/* Displaying the value of fruit */}
                <div>I see you live in {city}</div>
                <div>
                    {/* Creating our dropdown and passing it the handleFruitChange 
                    so that every time a new choice is selected, our fruit state 
                    updates and renders an emoji of the fruit.
                    */}
                    <div>Change Location (Optional)</div>
                    <select onChange={handleCityChange}> 
                        {/* Creating the default / starting option for our dropdown.*/}
                        <option value="⬇️ Select a city ⬇️"> -- Select a City -- </option>
                        {/* Mapping through each fruit object in our fruits array
                        and returning an option element with the appropriate attributes / values.
                        */}
                        {cities.map((city) => <option value={city.value}>{city.label}</option>)}
                    </select>
                </div>
                <div>
                    <button onClick={closeModal}>Continue</button>
                </div>
            </Modal>
        </>
    )
}

export default Popup