import React from 'react';

const Testimonials = () => {
    return (
        <section className="section section-gray">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>What Users Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <div className="testimonial-text">"Docière has completely transformed how I write my research papers. The collaboration features are incredible!"</div>
                        <div className="testimonial-author">Dr. Sarah Johnson</div>
                        <div className="testimonial-role">MIT, Physics Department</div>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <div className="testimonial-text">"The math formula generator saves me hours every week. It's a game-changer for academic writing."</div>
                        <div className="testimonial-author">Prof. Michael Chen</div>
                        <div className="testimonial-role">Stanford, Mathematics</div>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <div className="testimonial-text">"Working offline and syncing when connected is exactly what I needed. Finally, LaTeX that works for me!"</div>
                        <div className="testimonial-author">Dr. Emma Williams</div>
                        <div className="testimonial-role">Oxford, Computer Science</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
