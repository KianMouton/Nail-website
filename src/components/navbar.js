import { Link } from 'react-router-dom';
import '../App.css';

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
      </div>
    </div>
  );
}

export default Navbar;
