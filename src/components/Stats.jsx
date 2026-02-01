import React, { useEffect, useRef } from 'react';

const Stats = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: '50K+', label: 'Active Users' },
        { number: '500M+', label: 'Documents Created' },
        { number: '150+', label: 'Countries' },
        { number: '99.9%', label: 'Uptime SLA' }
    ];

    return (
        <div className="section section-gray">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Trusted by Researchers Worldwide</h2>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
