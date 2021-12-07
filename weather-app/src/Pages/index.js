import React from 'react'
import styles from './mystyle.module.css';
import Popup from './Popup/popup'
import Country from '../Components/Country'
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import Test from '../Components/Country';
import { StyleSheet, Text, View } from "react-native";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Home = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(true);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return(
        <div className={styles.wrapper}>
            <section className={styles.banner}>
                <h1>Home</h1>
            </section>
            <div className={styles.main}> 
                <aside className={styles.aside}>left</aside>
                <div className={styles.container}>container</div>
                <aside className={styles.aside}>right</aside>
            </div>
            <div className={styles.banner}>
                <button onClick={openModal}>Change Name or Location</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Welcome to the Weather App</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I see you live in</div>
                    <form>
                    <input />
                    <button>tab navigation</button>
                    </form>
                </Modal>
            </div>
        </div>
        
    )
}

export default Home