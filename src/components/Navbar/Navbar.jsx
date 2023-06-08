import { useState } from 'react';
import { links } from '../../data/data';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';

export const Navbar = () =>{
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

    return (
       <nav>
        <div className="nav-header">
          <button className='nav-toggle' onClick={toggleLinks}>
            {showLinks ? <GrClose className="icon-menu"/> : <HiMenu className="icon-menu"/>}
          </button>
          <img className="logo" src={logo} alt="logo"/>
        </div>
      
        <div className={`${showLinks ? 'nav-links-column' : 'nav-links'}`}>
            <ul  className='links' >
                {links.map(link =>(
                    <li key={link.path} className='link-item'>
                        <Link to="/">{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className='nav-right'> 
        <div className="nav-contact-info">
            <FaPhoneAlt className='phone-icon' />
        <div className="client-contact">
               <small className='contact-text'>Fale Conosco</small>
               <p className='phone-number'> (12) 3456-7890</p>
        </div>
        </div>
          <div className='client-area'>
               <BsFillPersonFill className='client-icon' />
               <p>Area do cliente</p>
          </div>
          </div>
       </nav> 
    )
}