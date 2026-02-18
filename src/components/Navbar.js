import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 80) {
                // scrolling down
                setShowNav(false);
            } else {
                // scrolling up
                setShowNav(true);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <>
            <nav className={`navbar ${showNav ? "nav-show" : "nav-hide"}`}>
                <div className="nav-container">

                    {/* Logo */}
                    <a href="#home" className="nav-logo">
                        <img src={logo} alt="Maestro Logo" />
                    </a>

                    {/* Hamburger */}
                    <div
                        className={`hamburger ${menuOpen ? "active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Links */}
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            {menuOpen && (
                <div
                    className="menu-overlay"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </>
    );
}

export default Navbar;
