import React from "react";
import '../css/About.css'
import profile from '../assets/profile.png'
const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
        <img src={profile} alt="about" />
      </div>
      <div className="about-text">
          <p>
            I am <span>Victor</span> a web developer with a passion for creating beautiful and
            functional websites.
            <br />
            <br />
            I am a web developer with a passion for creating beautiful and
            functional websites.
            <br />
            <br />
            I am a web developer with a passion for creating beautiful and
            functional websites.
          </p>
        </div>
      </div>

     
    </section>
  );
};

export default About;
