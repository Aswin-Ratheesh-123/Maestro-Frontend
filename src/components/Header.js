import React from "react";

import { ReactTyped } from "react-typed";

function Header() {
    return (
        <header className="header" id="home">
            <div className="header-glow"></div>

            <div className="hero-center">
                <div className="hero-row">

                    

                    <div className="hero-glass">
                        <h1 className="company-name">
                            <ReactTyped
                                strings={[

                                    "Maestro Insurance `&` Investments"
                                ]}
                                typeSpeed={60}
                                backSpeed={30}
                                backDelay={1500}

                            />
                        </h1>

                        <p className="company-tagline">
                            Welcome to the future of investments and insurance—
                            protecting what matters most with reliable,
                            transparent, and future-ready solutions.
                        </p>
                    </div>
                </div>

                <a href="#services" className="header-btn">
                    Explore Our Services
                </a>
            </div>
        </header>
    );
}

export default Header;
