import React, { useEffect } from "react";

import imgLeft from "../assets/img-left.jpg";
import imgRight from "../assets/img-right.jpg";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function About() {

    useEffect(() => {
        const elements = document.querySelectorAll(".reveal-text");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active"); // reset animation
                    }
                });
            },
            { threshold: 0.3 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);



    return (
        <section className="about" id="about">
            <div className="about-glow"></div>

            {/* Decorative images */}
            <img src={imgLeft} alt="Decoration" className="about-img about-img-left" />
            <img src={imgRight} alt="Decoration" className="about-img about-img-right" />

            <div className="about-container glass">
                <div className="about-text">
                    <h2 className="reveal-text">About Maestro</h2>

                    <p className="reveal-text">
                        Maestro Insurance & Investments is committed to protecting what matters most in your life.
                        We provide reliable, transparent, and affordable insurance and investment solutions tailored to individuals, families, and businesses.
                    </p>

                    <p className="reveal-text">
                        Our goal is to help you secure your future with confidence through expert guidance and customer-focused service.
                    </p>

                    <p className="reveal-text">
                        With a wide range of life, health, vehicle, and property insurance plans, we ensure complete protection for every stage of life.
                        Our investment solutions are designed to help you grow your wealth while managing risks effectively.
                    </p>

                    <p className="reveal-text">
                        At Maestro, trust, transparency, and service excellence are the foundation of everything we do.
                        We are dedicated to delivering financial security, peace of mind, and a brighter future for you and your family.
                    </p>
                </div>


                {/* Social Icons */}
                <div className="about-socials">
                    <a
                        href="https://instagram.com/maestroinsuranceandinvestments"
                        
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        
                        href="https://instagram.com/maestroinsuranceandinvestments"
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

            </div>
        </section>
    );
}

export default About;
