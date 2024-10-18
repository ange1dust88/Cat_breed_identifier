import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faPaw } from '@fortawesome/free-solid-svg-icons';       
import '../style/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
         <Link to ='/'><FontAwesomeIcon icon={faPaw} className='header__logo'/> </Link>
        <div className="header__navs">
            <Link to ='/'> <p className='header__nav'>Home</p></Link>
            
            <Link to ='/Contact'><p className='header__nav'>Contact Us</p></Link>
            <Link to ='/predict'><p className='header__nav'>Upload</p></Link>

        </div>
    </div>
  )
}

export default Header;
