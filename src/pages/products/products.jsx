import styles from './products.module.css';
import { useEffect, useRef } from 'react';
import { useBoxAlphaStore } from '~/src/store/boxAlphaStore';

import Co_card from './props/card/card';

import jeans1img from '~/src/assets/images/jeans1.jpg';
import jeans2img from '~/src/assets/images/jeans2.jpg';
import jeans3img from '~/src/assets/images/jeans3.jpg';
import jeans4img from '~/src/assets/images/jeans4.jpg';


function Co_products() {
    const setProductsRef = useBoxAlphaStore((state) => state.setProductsRef);
    const main_productsRef = useRef();

    useEffect(() => {
        setProductsRef(main_productsRef);
    }, [setProductsRef]);

    
    return(
        <div className={styles.main_products} ref={main_productsRef}>
            <p>8 items</p>

            <div className={styles.products_cards}>
                <Co_card card_img={jeans1img}
                    card_title='Ripped Skinny Jeans'
                    card_price='$24.99'
                />

                <Co_card card_img={jeans2img}
                    card_title='Mega Ripped Jeans'
                    card_price='$19.99'
                    isTagged={true}
                    card_tag='New'
                />

                <Co_card card_img={jeans3img}
                    card_title='Washed Skinny Jeanss'
                    card_price='$20.50'
                />   

                <Co_card card_img={jeans4img}
                    card_title='Vintage Skinny Jeans'
                    card_price='$14.99'
                />      

                <Co_card card_img={jeans2img}
                    card_title='Mega Ripped Jeans'
                    card_price='$19.99'
                />         

                <Co_card card_img={jeans3img}
                    card_title='Washed Skinny Jeanss'
                    card_price='$20.50'
                />        

                <Co_card card_img={jeans4img}
                    card_title='Vintage Skinny Jeans'
                    card_price='$14.99'
                    isTagged={true}
                    card_tag='Sale'
                    youAreMySpecial={true}
                />                                        

                <Co_card card_img={jeans1img}
                    card_title='Ripped Skinny Jeans'
                    card_price='$24.99'
                />                
            </div>
        </div>
    );
}

export default Co_products