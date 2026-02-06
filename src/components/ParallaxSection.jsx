import React, { useEffect, useRef } from 'react';

const ParallaxSection = () => {
    return (
        <section className="relative py-32 bg-gray-900 overflow-hidden isolate">
             {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                 {/* Simulate parallax with fixed background attachment */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80')] bg-fixed bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Experience the Power of <br/>Seamless Collaboration
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join thousands of researchers and academics who are transforming how they work with LaTeX. Stop fighting with formatting and start creating.
                </p>
                <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                    Join the Community
                </button>
            </div>
        </section>
    );
};

export default ParallaxSection;
