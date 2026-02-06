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
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cardsRef.current.forEach(card => {
            if (card) {
                card.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
                observer.observe(card);
            }
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
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        Trusted by Researchers Worldwide
                    </h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-accent mb-3">{stat.number}</div>
                            <div className="text-base font-medium text-gray-600 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
