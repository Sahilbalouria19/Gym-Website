import React,{useState}  from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';



function Navbar() {

const [nav,setnav] = useState(false);

const changeBackground = () => {
    if (window.scrollY >=50) {
        setnav(true);
    }
    else{
        setnav(false);
    }
}
window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='main' className='logo'>
             <img src={logo} alt = ''></img>
        </Link>
        <input className= 'menu-btn' type= 'checkbox' id='menu-btn'></input>
        <label className='menu-icon' htmlFor='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to="main"  smooth={true} duration={800}>Header</Link></li>
            <li><Link to="features" smooth={true} duration={800}>Program</Link></li>
            <li><Link to="presentation" smooth={true} duration={800}>Pricing</Link></li>
            <li><Link to="creview" smooth={true} duration={800}>Customer Review</Link></li>
            <li><Link to="about" smooth={true} duration={800}>About</Link></li>
            <li><Link to="contact" smooth={true} duration={800}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar