import React from "react";
import "../App.css";

function AboutMe(props) {
    return (
        <div className="about-me-page">
            <div className="about-me-page-content">
                <h1>About Me</h1>
                <p>
                    I'm a full-stack web developer with a passion for
                    learning and creating.
                </p>
                <p>
                    I'm currently looking for a full-time position as a
                    software engineer.
                </p>
                <p>
                    If you'd like to get in touch, please feel free to
                    reach out to me via email or LinkedIn.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;