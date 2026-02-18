import React, { useRef, useEffect } from "react";

function Contact() {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const data = {
            name: formData.get("user_name"),
            email: formData.get("user_email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("https://maestro-backend-5ib5.vercel.app/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                alert("Message sent successfully!");
                form.current.reset();
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            alert("Server error. Please try again.");
        }
    };

    // Fade animation observer
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal-contact");

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
        <section className="contact" id="contact">
            <div className="contact-glow"></div>

            <div className="contact-container">
                {/* Left text */}
                <div className="contact-info reveal-contact">
                    <h2>Contact Us</h2>
                    <p>
                        Have questions about our insurance or investment plans?
                        Send us a message and our team will get back to you shortly.
                    </p>
                </div>

                {/* Glass form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact-form glass reveal-contact"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                    />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
