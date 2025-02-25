import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faXmark, faCreditCard, faEnvelope, faPhone, faLocationDot, faMagnifyingGlass, faCartShopping, faCaretRight, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faCcAmex, faInstagram, faSnapchat, faPinterest, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

// grouping for easier organize
const iconGroup1 = [faHouse, faSquareFacebook, faFaceSmile, faXmark, faCreditCard, faEnvelope, faPhone, faLocationDot, faMagnifyingGlass, faCartShopping, faCcAmex, faInstagram, faSnapchat, faPinterest, faXTwitter, faLinkedinIn, faCaretRight, faCaretDown, faBars];

// Add all icons to the library
library.add(...iconGroup1);
