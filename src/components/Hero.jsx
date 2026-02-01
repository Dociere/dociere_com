import React from 'react';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="home" className="section section-light">
            <div className="hero">
                <div className="container">
                    <h1>Write Smarter.<br />Collaborate Faster.<br />Publish Better.</h1>
                    <p className="hero-tagline">LaTeX Reimagined for the Modern Creator</p>
                    <p className="hero-description">
                        Docière reimagines LaTeX for modern creators. Collaborate in real time, generate complex math formulas effortlessly, and manage citations without friction — all in an intuitive desktop app that works even when you're offline.
                    </p>
                    <div className="hero-cta">
                        <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Get Started</button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('features')}>See Features</button>
                    </div>
                    <div className="hero-image">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f5f5f5'/%3E%3Ctext x='50%' y='50%' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EDocière Pro Interface Preview%3C/text%3E%3C/svg%3E" alt="Docière Pro Interface" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
