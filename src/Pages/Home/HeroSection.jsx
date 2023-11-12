import React from 'react';


export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Noushin</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack </span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />Dolorem, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="/img/noushin.png" alt="Hero Section" />
      </div>
    </section>
  );
}
