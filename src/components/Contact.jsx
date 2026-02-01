import React from 'react';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');

        alert(`Thank you for your message, ${name}!\n\nWe've received your inquiry and will get back to you shortly at ${email}.\n\nBest regards,\nThe Docière Team`);
        event.target.reset();
    };

    return (
        <section id="contact" className="section section-light">
            <div className="container">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>Get Started with Docière</h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
