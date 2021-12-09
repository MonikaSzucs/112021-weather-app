import React, { useState } from 'react'
import styles from './mystyle.module.css';
import Popup from '../Components/Popup/index';
import Footer from '../Components/Footer/Footer';

/* https://www.youtube.com/watch?v=nytKEUqzAMk */
/* https://openweathermap.org/forecast16 */
/* https://ipstack.com/documentation */
/* https://ipstack.com/quickstart */

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
        <>
        <section id={styles.hero}>
            <div id={styles.title}>
                <h3>Home</h3>
                <h1>Weather for (location)</h1>
                <Popup />
            </div>
        </section>
        <div className={styles.wrapper}>
            <div className={styles.main}> 
                <aside className={styles.aside}></aside>
                <div className={styles.container}>(Location):</div>
                <aside className={styles.aside}></aside>
            </div>
            <div className={styles.banner}>
                test
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Home