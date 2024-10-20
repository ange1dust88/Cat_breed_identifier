import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faPaw } from '@fortawesome/free-solid-svg-icons';       
import '../style/header.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
  const location = useLocation(); 
  useEffect( () => {
    console.log(location)
  }, [])

  return (
    <div className='header'>
      <Link to='/'>
        <FontAwesomeIcon icon={faPaw} className='header__logo' />
      </Link>
      <div className="header__navs">
        {location.pathname !== '/' ? (
          <Link to='/'><p className='header__nav'>Home</p></Link>
        ) : (
          <p className='header__nav__active'>Home</p> 
        )}
        {location.pathname !== '/Contact' ? (
           <Link to='/Contact'><p className='header__nav'>Contact Us</p></Link>
        ) : (
           <p className='header__nav__active'>Contact Us</p>
        )}

        {location.pathname !== '/predict' ? (
           <Link to='/predict'><p className='header__nav'>Upload</p></Link>
        ) : (
          <p className='header__nav__active'>Upload</p>
        )}

      </div>
    </div>
  );
}

export default Header;
