import './NavBar.scss'

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    };

    return (
        <div>
            <div className="navigation">
                <div className="hamburgerContainer" onClick={toggleHamburger}>
                    <HamburgerMenu isOpen={hamburgerOpen} />
                </div>
                <div className="navContainer">
                    <Link to="/">Home</Link>
                    <Link to="/game">The Game</Link>
                    <Link to="/instructions">Instructions</Link>
                    <Link to="/about-us">About Us</Link>
                </div>
            </div>
        </div>
    )
}