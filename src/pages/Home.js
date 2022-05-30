import React from "react";
import "../App.css";
import Header from "../components/Header";

function Home(props) {
    return (
        <div className="home-page">
            <div className="home-page-content">
                <h1>Hello, I'm Sadie.</h1>
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
}

export default Home;