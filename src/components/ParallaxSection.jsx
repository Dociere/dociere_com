import React, { useEffect, useRef } from 'react';

const ParallaxSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const scrollPosition = window.pageYOffset;
                const elementPosition = sectionRef.current.offsetTop;
                const distance = scrollPosition - elementPosition;
                sectionRef.current.style.backgroundPosition = `center ${distance * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className="parallax-section"
            ref={sectionRef}
            style={{ backgroundImage: 'linear-gradient(135deg, rgba(233, 75, 75, 0.8), rgba(26, 26, 26, 0.8))' }}
        >
            <div className="parallax-overlay"></div>
            <div className="parallax-content">
                <h2>Experience the Power of Seamless Collaboration</h2>
                <p>Join thousands of researchers and academics who are transforming how they work with LaTeX</p>
            </div>
        </section>
    );
};

export default ParallaxSection;
