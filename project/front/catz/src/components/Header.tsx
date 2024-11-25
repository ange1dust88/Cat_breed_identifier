import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faPaw } from '@fortawesome/free-solid-svg-icons';       
import '../style/header.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation(); 

  const openMenuBtn = () => {
    setOpenMenu(prevState => !prevState); 
  }

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

        <button 
          className="hum_btn" 
          aria-expanded={openMenu ? "true" : "false"} 
          onClick={openMenuBtn} 
        >
          <svg className="hamburger" viewBox="0 0 100 100" width="25">
            <rect className="line top" width="80" height="8" x="10" y="25"></rect>
            <rect className="line mid" width="80" height="8" x="10" y="50"></rect>
            <rect className="line bot" width="80" height="8" x="10" y="75"></rect>
          </svg>
        </button>
      </div>

      <div className={`header__mobile ${openMenu ? 'open' : ''}`}>
        {location.pathname !== '/' ? (
          <Link to='/'><p className='header__mobile-nav'>Home</p></Link>
        ) : (
          <p className='header__mobile-nav--active'>Home</p> 
        )}
        {location.pathname !== '/Contact' ? (
           <Link to='/Contact'><p className='header__mobile-nav'>Contact Us</p></Link>
        ) : (
           <p className='header__mobile-nav--active'>Contact Us</p>
        )}

        {location.pathname !== '/predict' ? (
           <Link to='/predict'><p className='header__mobile-nav'>Upload</p></Link>
        ) : (
          <p className='header__mobile-nav--active'>Upload</p>
        )}
      </div>
    </div>
  );
}

export default Header;
