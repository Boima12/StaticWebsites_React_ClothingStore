import styles from './introduce.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBoxAlphaStore } from '~/src/store/boxAlphaStore';


function Co_introduce() {

    const productsRef = useBoxAlphaStore((state) => state.productsRef);

    const scrollToProducts = () => {
        if (productsRef.current) {
            productsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <div className={styles.main_introduce}>

            <div className={styles.introduce_heading}>
                <h3>Jeans</h3>

                <div className={styles.heading_right}>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className={styles.ic}/>   
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={styles.ic}/>                                     
                </div>
            </div>

            <div className={styles.slides}>
                <div className={styles.slides_text}>
                    <h3>New arrivals</h3>
                    <p>COLLECTION 2016</p>
                    <button type="button" onClick={scrollToProducts}>SHOP NOW</button>
                </div>
            </div>

        </div>
    );
}

export default Co_introduce