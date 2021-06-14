import React from 'react';
import {Link} from 'react-router-dom';
import jmLogo from '../Header/JM_LOGO.png'

const Header = () => {
    return <div className="header">
        <div className="logo">
            <img src={jmLogo} alt="Josh Miller" className="jmLogo"></img>
        </div>
        <div className="links">
            <Link to="/" style={{textDecoration: 'none'}}>
                <p>Home</p>
            </Link>
            <Link to="/code" style={{textDecoration: 'none'}}>
                <p>Code</p>
            </Link>
            <Link to="/resume" style={{textDecoration: 'none'}}>
                <p>Resume</p>
            </Link>
            <Link to="/contact" style={{textDecoration: 'none'}}>
                <p>Contact</p>
            </Link>
        </div>
    </div>
}

export default Header;