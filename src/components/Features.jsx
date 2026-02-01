import React from 'react';

const Features = () => {
    return (
        <section id="features" className="section section-light">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Everything you need to create</h2>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)' }}>Powerful features designed for modern researchers and academics</p>
                <div className="features-enhanced">
                    <div className="feature-item">
                        <div className="feature-item-content">
                            <h3>Real-time Collaboration</h3>
                            <p>Work with your team in real time. See edits as they happen, resolve conflicts instantly, and maintain version history automatically.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-item-content">
                            <h3>Powerful Math Generation</h3>
                            <p>Effortlessly generate complex math formulas with our intelligent snippet system and real-time preview. Support for LaTeX, MathML, and more.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-item-content">
                            <h3>Built-in Citation Management</h3>
                            <p>Manage your bibliography without friction. Import BibTeX, cite with a single command, and auto-format references across 100+ citation styles.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-item-content">
                            <h3>Intuitive, Distraction-Free Design</h3>
                            <p>An editorial-grade interface designed to help you focus on your ideas, not the formatting. Customizable themes and layouts for every preference.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-item-content">
                            <h3>Desktop App with Offline Support</h3>
                            <p>Work anywhere without internet connection. Full functionality offline, automatic sync when connected, and seamless cloud integration.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-item-content">
                            <h3>Draft Versioning You Can Trust</h3>
                            <p>Never lose a change. Browse your complete version history, restore any previous version with one click, and track all collaborator edits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
