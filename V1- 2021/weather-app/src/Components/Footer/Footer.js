import React from 'react'
import styles from './Footer.module.scss';

const Footer = () => {
    return(
        <>
            <footer>
                <div className={styles.container}>
                <div className={styles.row}>Change Location:</div>
                <div className={styles.row}>
                    About <br/>
                    Services
                </div>
                <div className={styles.row}>
                    Contact Us
                </div>
                </div>
                <div className={styles.submain}>© Monika Szucs 2021 mszucs.work@outlook.com</div>
            </footer>
        </>
    )
}

export default Footer