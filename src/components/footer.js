import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import logo from '../images/logo.jpg';

const Footer = () => {
    return (
        <div className='footer'>
            <p>To find out more message me here</p>
            <div className='footer-links'>
            <a href='mailto:jolandasnailsandbeauty@gmail.com'>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href='https://api.whatsapp.com/send?phone=632610487'>
                                    <FontAwesomeIcon className="email-icon" icon={faWhatsapp} size="2x" />
            </a>
            </div>
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Footer;