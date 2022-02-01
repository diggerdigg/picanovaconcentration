import './HamburgerMenu.scss'

import { Link } from 'react-router-dom';

export default function HamburgerMenu({ isOpen }) {
    return (
        <>
            <div className={isOpen ? "hamburger open" : "hamburger closed"}>
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
                <div className="burger burger4" />
                <div className="overlay">
                    <Link to="/">Home</Link>
                    <Link to="/game">The Game</Link>
                    <Link to="/instructions">Instructions</Link>
                    <Link to="/about-us">About Us</Link>
                </div>
            </div>
        </>
    )
}