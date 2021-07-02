import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import jmLogo from '../Header/JM_LOGO.png'

class Header extends Component {
    constructor() {
        super()

        this.state = {
            isMenuOpen: false
        }
    }

    toggleMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }


render () {
    let {isMenuOpen} = this.state;
    let shouldShow = isMenuOpen ? 'mobile-links-show' : null;

    return <header className="header">
        <div className="logo">
            <img src={jmLogo} alt="Josh Miller" className="jmLogo"></img>
            <p>Joshua Miller</p>
        </div>
        <nav className="links">
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
                <p><span>Contact</span></p>
            </Link>
        </nav>
        <img 
        onClick={() => this.toggleMenu()}
        src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg' 
        className="hamburger"
        alt="hamburger"></img>
        <nav className={`mobile-links ${shouldShow}`}>
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
                <p><span>Contact</span></p>
            </Link>
        </nav>
    </header>
}

}

export default Header;

// https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg