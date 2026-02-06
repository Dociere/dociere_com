import React from 'react';

const Founders = () => {
    return (
        <section id="founders" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                        Meet the Founders
                    </h2>
                     <p className="text-lg text-gray-600">
                        Docière was founded by passionate researchers and engineers who wanted to revolutionize academic writing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Founder 1 */}
                    <div className="group text-center">
                        <div className="relative mx-auto w-40 h-40 mb-6">
                            <div className="absolute inset-0 bg-blue-100 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                             <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-6xl shadow-xl">
                                👨‍💻
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Dr. Alex Rodriguez</h3>
                        <p className="text-accent font-medium mb-4">Founder & CEO</p>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                            PhD in Computer Science from Stanford. 15+ years of experience in collaborative software design and distributed systems.
                        </p>
                    </div>

                    {/* Founder 2 */}
                    <div className="group text-center">
                         <div className="relative mx-auto w-40 h-40 mb-6">
                            <div className="absolute inset-0 bg-purple-100 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                             <div className="absolute inset-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-6xl shadow-xl">
                                👩‍💼
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Dr. Lisa Chen</h3>
                        <p className="text-accent font-medium mb-4">Co-Founder & CTO</p>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                            PhD in Mathematics from Cambridge. Expert in LaTeX optimization and real-time collaboration technologies.
                        </p>
                    </div>

                    {/* Founder 3 */}
                    <div className="group text-center">
                         <div className="relative mx-auto w-40 h-40 mb-6">
                            <div className="absolute inset-0 bg-teal-100 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                             <div className="absolute inset-2 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-6xl shadow-xl">
                                👨‍🔬
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Prof. James McKay</h3>
                        <p className="text-accent font-medium mb-4">Co-Founder & COO</p>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                            Academic researcher and entrepreneur. 20 years in academic publishing and research workflow optimization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founders;
