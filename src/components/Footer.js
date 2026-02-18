import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a
                    /* href="https://instagram.com/YOUR_USERNAME" */
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>

                <a
                  /*  href="https://facebook.com/YOUR_PAGE" */
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookF />
                </a>

                <a
                    href="https://wa.me/919544419975"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </a>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Maestro Insurance & Investments. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
