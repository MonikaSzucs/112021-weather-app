import React, { useState, useEffect } from 'react'
import styles from '../scss/style.scss';
import Popup from '../Components/Popup/index';
import Footer from '../Components/Footer/Footer';
//import IPStack from '../APIs/IPStack/index';
import IPStack from '../APIs/IPStack/index';

/* https://www.youtube.com/watch?v=nytKEUqzAMk */
/* https://openweathermap.org/forecast16 */
/* https://ipstack.com/documentation */
/* https://ipstack.com/quickstart */

//let [city, setCity] = useState(<IPStack/>);

const Home = (props) => {

    console.log(props)
    var Item = ""
    const [cart, setCart] = useState([]);

    
    const data = localStorage.getItem('city'); 
    console.log(data)

    return(
        <div className='wrapper'>
            <section>
                <div className="hero">
                    <h3>Home</h3>
                    <Popup />
                    <h1>Weather for {data}</h1>
                </div>
            </section>
            <div>
                <div className={styles.main}> 
                    <aside className={styles.aside}></aside>
                    <div className="container">
                        
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
        </div>
    )
}

export default Home