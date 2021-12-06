import React from 'react'
import styles from './mystyle.module.css';
import Popup from './Popup/popup'
import Country from '../Components/Country'
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import Test from '../Components/Country';

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
        <div className={styles.container}>
            <div className={styles.headerArea}>
                <div className={styles.headerArea__item}>
                    Home
                </div>
            </div>
            <div>
                <button onClick={openModal}>Open Modal</button>
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