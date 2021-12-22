import React, { useState } from 'react'
import styles from '../scss/style.scss';
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
            <section className="wrapper">
                <div className="hero">
                    <h3>Home</h3>
                    <h1>Weather for (location)</h1>
                    <Popup />
                </div>
            </section>
            <div className="wrapper">
                <div className={styles.main}> 
                    <aside className={styles.aside}></aside>
                    <div className="container">
                        (Location):
                        <div>
                            Weather Displayed here
                        </div>
                    </div>
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