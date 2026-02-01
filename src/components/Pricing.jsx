import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="section section-gray">
            <div className="container">
                <div className="pricing-header">
                    <h2>Simple, Transparent Pricing</h2>
                    <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Choose the plan that works best for you. All plans include our core features.</p>
                </div>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <div className="pricing-name">Starter</div>
                        <div className="pricing-price">Free</div>
                        <div className="pricing-description">Perfect for students and hobbyists</div>
                        <ul className="pricing-features">
                            <li>Up to 5 projects</li>
                            <li>Offline support</li>
                            <li>Basic formula generation</li>
                            <li>Community support</li>
                        </ul>
                        <button className="btn btn-secondary" style={{ width: '100%' }}>Get Started</button>
                    </div>
                    <div className="pricing-card featured">
                        <div className="pricing-badge">Most Popular</div>
                        <div className="pricing-name">Professional</div>
                        <div className="pricing-price">$12<span>/month</span></div>
                        <div className="pricing-description">For researchers and professionals</div>
                        <ul className="pricing-features">
                            <li>Unlimited projects</li>
                            <li>Real-time collaboration</li>
                            <li>Advanced formula generation</li>
                            <li>Citation management</li>
                            <li>Priority email support</li>
                        </ul>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Start Free Trial</button>
                    </div>
                    <div className="pricing-card">
                        <div className="pricing-name">Enterprise</div>
                        <div className="pricing-price">Custom</div>
                        <div className="pricing-description">For teams and organizations</div>
                        <ul className="pricing-features">
                            <li>Everything in Professional</li>
                            <li>Team collaboration tools</li>
                            <li>Advanced analytics</li>
                            <li>Dedicated support</li>
                            <li>Custom integrations</li>
                        </ul>
                        <button className="btn btn-secondary" style={{ width: '100%' }}>Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
