import styles from './horizontalBar2Context.module.css';
import { useState, useRef, useEffect } from 'react';
import { useBoxAlphaStore } from '~/src/store/boxAlphaStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Co_introduce from '~/src/pages/introduce/introduce';
import Co_products from '~/src/pages/products/products';
import Co_contacts from '~/src/pages/contacts/contacts';
import Co_credit from '~/src/pages/credit/credit';



function Co_horizontalBar2Context() {

  // Sharing context_main
  const setContext_mainRef = useBoxAlphaStore((state) => state.setContext_mainRef);
  const context_mainRef = useRef();
  useEffect(() => {
    setContext_mainRef(context_mainRef);
  }, [setContext_mainRef]);


  // using main_contactsRef
  const contactsRef = useBoxAlphaStore((state) => state.contactsRef);
  const scrollToContactsRef = () => {
    if (contactsRef.current) {
      contactsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  // menu11 toggle
  const [isMenu11Show, setIsMenu11Show] = useState(false);
  const menu11Ref = useRef();

  const Menu11_transitionDelay = useRef(600);

  const triggerMenu11 = () => {
    if (!menu11Ref.current) {
      return;
    }

    if (!isMenu11Show) {
      menu11Ref.current.style.display = "flex";

      setTimeout(() => {
        menu11Ref.current.classList.add(styles.open);
      }, 10);

    } else {
      menu11Ref.current.classList.remove(styles.open);
      
      setTimeout(() => {
        menu11Ref.current.style.display = "none";
      }, Menu11_transitionDelay.current + 10);
    }

    setIsMenu11Show((prev) => !prev);
  }


  // menu11_collapse toggle
  const [isMenu11Show_collapse, setIsMenu11Show_collapse] = useState(false);
  const menu11Ref_collapse = useRef();

  const Menu11_collapse_transitionDelay = useRef(600);

  const triggerMenu11_collapse = () => {
    if (!menu11Ref_collapse.current) {
      return;
    }

    if (!isMenu11Show_collapse) {
      menu11Ref_collapse.current.style.display = "flex";

      setTimeout(() => {
        menu11Ref_collapse.current.classList.add(styles.open);
      }, 10);

    } else {
      menu11Ref_collapse.current.classList.remove(styles.open);
      
      setTimeout(() => {
        menu11Ref_collapse.current.style.display = "none";
      }, Menu11_collapse_transitionDelay.current + 10);
    }

    setIsMenu11Show_collapse((prev) => !prev);
  }


  // context_side_collapse toggle
  const [isContext_side_collapse, setIsContext_side_collapse] = useState(false);
  const context_side_collapseRef = useRef();

  const context_side_collapse_transitionDelay = useRef(700);

  const triggerContext_side_collapse = () => {
    if (!context_side_collapseRef.current) {
      return;
    }

    if (!isContext_side_collapse) {
      context_side_collapseRef.current.style.display = "flex";

      setTimeout(() => {
        context_side_collapseRef.current.classList.add(styles.open);
      }, 10);

    } else {
      context_side_collapseRef.current.classList.remove(styles.open);
      
      setTimeout(() => {
        context_side_collapseRef.current.style.display = "none";
      }, context_side_collapse_transitionDelay.current + 10);
    }

    setIsContext_side_collapse((prev) => !prev);
  }


  // newsletter toggle
  const [isNewsletter, setIsNewsletter] = useState(false);
  const newsletterRef = useRef();

  const newsletter_transitionDelay = useRef(700);

  const triggerNewsletter = () => {
    if (!newsletterRef.current) {
      return;
    }

    if (!isNewsletter) {
      newsletterRef.current.style.display = "flex";

      setTimeout(() => {
        newsletterRef.current.classList.add(styles.open);
      }, 10);

    } else {
      newsletterRef.current.classList.remove(styles.open);
      
      setTimeout(() => {
        newsletterRef.current.style.display = "none";
      }, newsletter_transitionDelay.current + 10);
    }

    setIsNewsletter((prev) => !prev);
  }


  
  return (
    <div className={styles.main_HorizontalBar2Context}>
      <div className={styles.context_side}>
        <div className={styles.heading}>
          <h3>LOGO</h3>
        </div>

        <ul className={styles.menu1}>
          <li><p>Shirts</p></li>
          <li><p>Dresses</p></li>

          <li onClick={triggerMenu11}>
            <p>Jeans</p>
            <FontAwesomeIcon icon="fa-solid fa-caret-right" className={styles.ic} style={{display: isMenu11Show ? "none" : "inline-block"}}/>
            <FontAwesomeIcon icon="fa-solid fa-caret-down" className={styles.ic} style={{display: isMenu11Show ? "inline-block" : "none"}}/>
          </li>

          <ul className={styles.menu11} ref={menu11Ref}>
            <li>
              <p>Skinny</p>
              <FontAwesomeIcon icon="fa-solid fa-caret-right" className={styles.ic}/>
              <FontAwesomeIcon icon="fa-solid fa-caret-down" className={styles.ic}/>
            </li>

            <li><p>Relaxed</p></li>
            <li><p>Bootcut</p></li>
            <li><p>Straight</p></li>
          </ul>

          <li><p>Jackets</p></li>
          <li><p>Gymwear</p></li>
          <li><p>Blazers</p></li>
          <li><p>Shoes</p></li>
        </ul>

        <ul className={styles.menu2}>
          <li onClick={scrollToContactsRef}><p>Contact</p></li>
          <li onClick={triggerNewsletter}><p>Newsletter</p></li>
          <li onClick={scrollToContactsRef}><p>Subscribe</p></li>
        </ul>
      </div>

      <div className={styles.context_side_collapse} ref={context_side_collapseRef}>
        <div className={styles.overlay} onClick={triggerContext_side_collapse}></div>

        <div className={styles.context_side}>
          <div className={styles.heading}>
            <h3>LOGO</h3>
            <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic} onClick={triggerContext_side_collapse}/>
          </div>

          <ul className={styles.menu1}>
            <li><p>Shirts</p></li>
            <li><p>Dresses</p></li>

            <li onClick={triggerMenu11_collapse}>
              <p>Jeans</p>
              <FontAwesomeIcon icon="fa-solid fa-caret-right" className={styles.ic} style={{display: isMenu11Show_collapse ? "none" : "inline-block"}}/>
              <FontAwesomeIcon icon="fa-solid fa-caret-down" className={styles.ic} style={{display: isMenu11Show_collapse ? "inline-block" : "none"}}/>
            </li>

            <ul className={styles.menu11} ref={menu11Ref_collapse}>
              <li>
                <p>Skinny</p>
                <FontAwesomeIcon icon="fa-solid fa-caret-right" className={styles.ic}/>
                <FontAwesomeIcon icon="fa-solid fa-caret-down" className={styles.ic}/>
              </li>

              <li><p>Relaxed</p></li>
              <li><p>Bootcut</p></li>
              <li><p>Straight</p></li>
            </ul>

            <li><p>Jackets</p></li>
            <li><p>Gymwear</p></li>
            <li><p>Blazers</p></li>
            <li><p>Shoes</p></li>
          </ul>

          <ul className={styles.menu2}>
            <li onClick={scrollToContactsRef}><p>Contact</p></li>
            <li onClick={triggerNewsletter}><p>Newsletter</p></li>
            <li onClick={scrollToContactsRef}><p>Subscribe</p></li>
          </ul>
        </div>
      </div>

      <div className={styles.newsletter} ref={newsletterRef}>
        <div className={styles.overlay} onClick={triggerNewsletter}></div>

        <div className={styles.panel}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic} onClick={triggerNewsletter}/>

          <div className={styles.panel_body}>
            <h3>NEWSLETTER</h3>
            <p>Join our mailing list to receive updates on new arrivals and special offers.</p>

            <input type="text" placeholder='Enter e-mail'></input>
            <button type="button" onClick={triggerNewsletter}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.context_main} ref={context_mainRef}>
        <div className={styles.context_side_nav}>
          <h3>LOGO</h3>
          <FontAwesomeIcon icon="fa-solid fa-bars" className={styles.ic} onClick={triggerContext_side_collapse}/>          
        </div>
        <div className={styles.spacer}></div>



        <Co_introduce />
        <Co_products />
        <Co_contacts />
        <Co_credit />
      </div>
    </div>
  );
}


export default Co_horizontalBar2Context
