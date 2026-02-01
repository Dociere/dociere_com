import React from 'react';

const Footer = () => {
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
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Product</h4>
                        <ul>
                            <li><a style={{ cursor: 'pointer' }} onClick={() => scrollToSection('home')}>Home</a></li>
                            <li><a style={{ cursor: 'pointer' }} onClick={() => scrollToSection('features')}>Features</a></li>
                            <li><a style={{ cursor: 'pointer' }} onClick={() => scrollToSection('pricing')}>Pricing</a></li>
                            <li><a href="#">Changelog</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">API Reference</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a style={{ cursor: 'pointer' }} onClick={() => scrollToSection('founders')}>Our Team</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a style={{ cursor: 'pointer' }} onClick={() => scrollToSection('contact')}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Licenses</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Docière Pro. All rights reserved. LaTeX Reimagined for Modern Creators.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
