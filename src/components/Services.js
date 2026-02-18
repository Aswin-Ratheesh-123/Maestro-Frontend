import React from "react";
import  { useEffect } from "react";
import life from "../assets/life.webp";
import health from "../assets/health.jfif";
import vehicle from "../assets/vehicle.jpg";
import home from "../assets/home.jpg";



import shop from "../assets/shop.jfif";
import group from "../assets/group.jpg";
import jewelry from "../assets/jewelry.jpg";
import professional from "../assets/professional.jpg";

import fire from "../assets/Fire-Insurance.jpg";
import money from "../assets/money.jpg";
import work from "../assets/worker.png";
import marine from "../assets/marine.jpg";
import upid from "../assets/upid-insurance.jpg";

import homeLoan from "../assets/homeloan.jpg";
import propertyLoan from "../assets/propertyloan.avif";
import carLoan from "../assets/carloan.avif";


function Services() {

 
    

    // 1. Define services first
    const services = [
        {
            title: "Investment Plans",
            description: "Invest for a short term and enjoy a guaranteed income for life—up to age 100.",
            image: life,
            category: "Insurance",
            message: "Hello, I would like to know more about your Life Insurance plans."
        },
        {
            title: "Health Insurance",
            description: "Complete health coverage for you and your family.",
            image: health,
            category: "Insurance",
            message: "Hello, I would like to know more about your Health Insurance plans."
        },
        {
            title: "Vehicle Insurance",
            description: "Secure your car or bike against accidents.",
            image: vehicle,
            category: "Insurance",
            message: "Hello, I would like to know more about your Vehicle Insurance options."
        },
        {
            title: "Home Insurance",
            description: "Protect your home from natural disasters.",
            image: home,
            category: "Insurance",
            message: "Hello, I would like to know more about your Home Insurance policies."
        },
        {
            title: "Shop Insurance",
            description: "Comprehensive protection for your shop and business assets.",
            image: shop,
            category: "Insurance",
            message: "Hello, I would like to know more about your Shop Insurance plans."
        },
        {
            title: "Group Mediclaim",
            description: "Affordable health coverage plans for employees and teams.",
            image: group,
            category: "Insurance",
            message: "Hello, I would like to know more about your Group Mediclaim plans."
        },
        {
            title: "Jewellers Package Policy",
            description: "Secure your precious jewelry against theft and loss.",
            image: jewelry,
            category: "Investments",
            message: "Hello, I would like to know more about your Jewelry Package Policy."
        },
        {
            title: "Professional Indemnity",
            description: "Protection against legal liabilities from professional services.",
            image: professional,
            category: "Insurance",
            message: "Hello, I would like to know more about your Professional Indemnity insurance."
        },
        {
            title: "Fire Insurance",
            description: "Standard fire and special peril policy for property protection.",
            image: fire,
            category: "Insurance",
            message: "Hello, I would like to know more about your Fire Insurance policies."
        },
        {
            title: "Fidelity Guarantee / Money Insurance",
            description: "Protection against employee fraud and money-related risks.",
            image: money,
            category: "Insurance",
            message: "Hello, I would like to know more about your Fidelity Guarantee and Money Insurance."
        },
        {
            title: "Workmen Compensation",
            description: "Employee compensation insurance for workplace injuries.",
            image: work,
            category: "Insurance",
            message: "Hello, I would like to know more about your Workmen Compensation policies."
        },
        {
            title: "Marine Insurance",
            description: "Transit insurance for goods during transportation.",
            image: marine,
            category: "Insurance",
            message: "Hello, I would like to know more about your Marine Transit Insurance."
        },

        // INVESTMENTS
        {
            title: "ULIP / Market-Linked Plans",
            description: "Investment-linked insurance plans connected to share markets.",
            image: upid,
            category: "Investments",
            message: "Hello, I would like to know more about your ULIP and market-linked investment plans."
        },
        {
            title: "Home Loans",
            description: "Flexible home loan options to help you purchase or build your dream home.",
            image: homeLoan,   // add an image import
            category: "Loans",
            message: "Hello, I would like to know more about your Home Loan options."
        },
        {
            title: "Loan Against Property",
            description: "Get funds by leveraging your property with competitive interest rates.",
            image: propertyLoan,
            category: "Loans",
            message: "Hello, I would like to know more about your Loan Against Property."
        },
        {
            title: "Car Loans",
            description: "Affordable car loans for both new and used vehicles with quick approvals.",
            image: carLoan,
            category: "Loans",
            message: "Hello, I would like to know more about your Car Loan options."
        }

    ];

    // 2. Then filter
    const insuranceServices = services.filter(
        (service) => service.category === "Insurance"
    );

    const investmentServices = services.filter(
        (service) => service.category === "Investments"
    );
    const loansServices = services.filter(
        (service) => service.category === "Loans"
    );

    useEffect(() => {
    const elements = document.querySelectorAll(".reveal-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
}, []);


    return (
        <section className="services" id="services">
            <div className="services-container">
                <h2 className="services-title">Our Services</h2>

                {/* Insurance */}
                <h3 className="services-subtitle">INSURANCE</h3>
                <div className="card-container">
                    {insuranceServices.map((service, index) => {
                        const phone = "919544419975";
                        const url = `https://wa.me/${phone}?text=${encodeURIComponent(service.message)}`;

                        return (
                            <div className="service-card glass reveal-card" key={index}>
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>

                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>

                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="service-btn"
                                    >
                                        Know More
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Investments */}
                <h3 className="services-subtitle" style={{ marginTop: "60px" }}>
                    INVESTMENTS
                </h3>
                <div className="card-container">
                    {investmentServices.map((service, index) => {
                        const phone = "919544419975";
                        const url = `https://wa.me/${phone}?text=${encodeURIComponent(service.message)}`;

                        return (
                            <div className="service-card glass reveal-card" key={index}>
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>

                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>

                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="service-btn"
                                    >
                                        Know More
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>



                {/* Investments */}
                <h3 className="services-subtitle" style={{ marginTop: "60px" }}>
                    Loans
                </h3>
                <div className="card-container">
                    {loansServices.map((service, index) => {
                        const phone = "919544419975";
                        const url = `https://wa.me/${phone}?text=${encodeURIComponent(service.message)}`;

                        return (
                            <div className="service-card glass reveal-card" key={index}>
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>

                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>

                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="service-btn"
                                    >
                                        Know More
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;
