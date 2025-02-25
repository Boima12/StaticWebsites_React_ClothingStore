import styles from './contacts.module.css';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBoxAlphaStore } from '~/src/store/boxAlphaStore';


function Co_contacts() {

    const context_mainRef = useBoxAlphaStore((state) => state.context_mainRef);
    const scrollToContext_main = () => {
        if (context_mainRef.current) {
            context_mainRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    // sharing contacts
    const setContactsRef = useBoxAlphaStore((state) => state.setContactsRef);
    const main_contactsRef = useRef();
    useEffect(() => {
        if (main_contactsRef) {
            setContactsRef(main_contactsRef);
        }
    }, [setContactsRef])


    return(
        <div className={styles.main_contacts} ref={main_contactsRef}>

            <div className={styles.subscribe}>
                <h3>Subscribe</h3>
                <p>To get special offers and VIP treatment:</p>
                <input type="email" placeholder='Enter e-mail'></input>
                <button type="button">Subscribe</button>
            </div>

            <div className={styles.footer}>
                <div className={styles.footer_contact}>
                    <h3>Contact</h3>
                    <p>Questions? Go ahead.</p>
                    <input type="text" placeholder='Name'></input>
                    <input type="email" placeholder='Email'></input>
                    <input type="text" placeholder='Subject'></input>
                    <input type="text" placeholder='Message'></input>
                    <button type="button">Send</button>
                </div>

                <div className={styles.footer_about}>
                    <h3>About</h3>
                    <p onClick={scrollToContext_main}>About us</p>
                    <p onClick={scrollToContext_main}>We&apos;re hiring</p>
                    <p onClick={scrollToContext_main}>Support</p>
                    <p onClick={scrollToContext_main}>Find store</p>
                    <p onClick={scrollToContext_main}>Shipment</p>
                    <p onClick={scrollToContext_main}>Payment</p>
                    <p onClick={scrollToContext_main}>Gift card</p>
                    <p onClick={scrollToContext_main}>Return</p>
                    <p onClick={scrollToContext_main}>Help</p>
                </div>

                <div className={styles.footer_store}>
                    <h3>Store</h3>
                    <div className={styles.iconSection}>
                        <FontAwesomeIcon icon="fa-solid fa-location-dot" className={styles.ic1}/>
                        <p>Boima.inc</p>
                    </div>
                    <div className={styles.iconSection}>
                        <FontAwesomeIcon icon="fa-solid fa-phone" className={styles.ic2}/>
                        <p>0948974395</p>
                    </div>
                    <div className={styles.iconSection}>
                        <FontAwesomeIcon icon="fa-solid fa-envelope" className={styles.ic3}/>
                        <p>Boimache27@gmail.com</p>
                    </div>

                    <h3>We accept</h3>
                    <div className={styles.iconSection}>
                        <FontAwesomeIcon icon="fa-brands fa-cc-amex" className={styles.ic4}/>
                        <p>Amex</p>
                    </div>
                    <div className={styles.iconSection}>
                        <FontAwesomeIcon icon="fa-solid fa-credit-card" className={styles.ic5}/>
                        <p>Credit Card</p>
                    </div>

                    <div className={styles.icons}>
                        <FontAwesomeIcon icon="fa-brands fa-square-facebook" className={styles.ic}/>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" className={styles.ic}/>
                        <FontAwesomeIcon icon="fa-brands fa-snapchat" className={styles.ic}/>
                        <FontAwesomeIcon icon="fa-brands fa-pinterest" className={styles.ic}/>
                        <FontAwesomeIcon icon="fa-brands fa-x-twitter" className={styles.ic}/>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className={styles.ic}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Co_contacts