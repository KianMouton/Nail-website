import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 

function Navbar() {
  return (
    <div className="Navbar">
        <div className='name-container'>
      <h1 className='name'>Jolanda's Nails and Beauty</h1>
      </div>
      <div className='menu-container'>
        <Link to='/sets'>
        <p>Premade sets</p>
        </Link>
        <div className='nav-links'>
        <a href='mailto:jolandasnailsandbeauty@gmail.com'>
                        <FontAwesomeIcon className="email-icon" icon={faEnvelope} size="2x" />
        </a>
        <a href='https://api.whatsapp.com/send?phone=632610487'>
                                    <FontAwesomeIcon className="email-icon" icon={faWhatsapp} size="2x" />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
