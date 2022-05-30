import React from "react";
import "../App.css";

function ContactMe(props) {
    return (
        <div className="contact-me-page">
            <div className="contact-me-page-content">
                <h1>Contact Me</h1>
                <p>
                    If you'd like to get in touch, please feel free to
                    reach out to me via email or LinkedIn.
                </p>
                <p>
                    <a href="mailto:sadiejo.harty@gmail.com"/><i className="fas fa-envelope"></i>
                    </p>
                <p>
                    <a href="https://www.linkedin.com/in/sadiejo/"/><i className="fab fa-linkedin"></i>
                    </p>
            </div>
        </div>
    );
}

export default ContactMe;