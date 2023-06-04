// import { useState } from 'react';
import { links } from '../../data/data';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
// import { HiMenu } from 'react-icons/hi';

export const Navbar = () =>{
//   const [showLinks, setShowLinks] = useState(false);

//   const toggleLinks = () => {
//     setShowLinks(!showLinks);
//   };

    return (
       <nav>
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo"/>
          {/* <button className='nav-toggle' onClick={toggleLinks}>
            <HiMenu />
          </button> */}
        </div>

        <div className="nav-links">
            <ul className='links' >
                {links.map(link =>(
                    <li key={link.id} className='link-item'>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className='nav-right'> 
        <div className="nav-contact-info">
            <FaPhoneAlt className='phone-icon' />
        <div>
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