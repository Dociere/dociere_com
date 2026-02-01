import React from 'react';

const Founders = () => {
    return (
        <section id="founders" className="section section-light">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Meet the Founders</h2>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Docière was founded by passionate researchers and engineers who wanted to revolutionize academic writing
                </p>
                <div className="founders-grid">
                    <div className="founder-card">
                        <div className="founder-avatar">👨‍💻</div>
                        <div className="founder-name">Dr. Alex Rodriguez</div>
                        <div className="founder-role">Founder & CEO</div>
                        <div className="founder-bio">PhD in Computer Science from Stanford. 15+ years of experience in collaborative software design and distributed systems.</div>
                    </div>
                    <div className="founder-card">
                        <div className="founder-avatar">👩‍💼</div>
                        <div className="founder-name">Dr. Lisa Chen</div>
                        <div className="founder-role">Co-Founder & CTO</div>
                        <div className="founder-bio">PhD in Mathematics from Cambridge. Expert in LaTeX optimization and real-time collaboration technologies.</div>
                    </div>
                    <div className="founder-card">
                        <div className="founder-avatar">👨‍🔬</div>
                        <div className="founder-name">Prof. James McKay</div>
                        <div className="founder-role">Co-Founder & COO</div>
                        <div className="founder-bio">Academic researcher and entrepreneur. 20 years in academic publishing and research workflow optimization.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founders;
