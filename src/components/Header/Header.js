import './Header.scss'
import { Link } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import Menu from '../Menu/Menu';

const Header = () =>{
    const [isOpen,setIsOpen] = useState(false);
    const handleMenu = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div>
            <nav className="navbar navbar-light">
                <div className="nav-brand">
                    <button className="navbar-toggler" onClick={handleMenu} type="button">
                        <FontAwesomeIcon icon={faBars} size="lg"  />
                    </button>
                </div>
                <div className="nav-title">
                    <Link className="navbar-brand" to="/">RSVP</Link>
                </div>
            </nav>
            {isOpen && <Menu handleMenu={handleMenu}/>}
        </div>
    )
}

export default Header;