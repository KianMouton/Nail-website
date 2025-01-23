import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.jpg';

const Footer = () => {
    return (
        <div className='footer'>
            <p>To find out more message me here</p>
            <a href='mailto:jolandasnailsandbeauty@gmail.com'>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Footer;