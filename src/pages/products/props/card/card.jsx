import styles from './card.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import slide1img from '~/src/assets/images/slide1.jpg';


function Co_card({
    card_img = slide1img,
    card_title = "card_title",
    card_price = "card_price",
    isTagged = false,
    card_tag = "card_tag",
    youAreMySpecial = false
}) {
    return(
        <div className={styles.main_card}>
            <div className={styles.card_img} style={{backgroundImage: `url(${card_img})`}}>
                <p className={styles.card_tag} style={{display: isTagged ? 'inline-block' : 'none'}}>{card_tag}</p>

                <button type="button" style={{display: isTagged ? 'flex' : 'none'}}>
                    <p>Buy now</p>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className={styles.ic}/>
                </button>
            </div>

            <p className={styles.card_title}>{card_title}</p>
            <p className={styles.card_price} style={{color: youAreMySpecial ? '#f44336' : "#000"}}>{card_price}</p>
        </div>
    );
}


Co_card.propTypes = {
    card_img: PropTypes.string,
    card_title: PropTypes.string,
    card_price: PropTypes.string,
    isTagged: PropTypes.bool,
    card_tag: PropTypes.string,
    youAreMySpecial: PropTypes.bool,
}

export default Co_card