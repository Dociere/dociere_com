import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
             {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                        Loved by Academics
                    </h2>
                     <p className="text-lg text-gray-600">Don't just take our word for it.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                            "Docière has completely transformed how I write my research papers. The collaboration features are incredible! I can finally work with my co-authors without emailing zip files back and forth."
                        </blockquote>
                        <div className="flex items-center gap-4">
                             <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">SJ</div>
                             <div>
                                <div className="font-semibold text-gray-900">Dr. Sarah Johnson</div>
                                <div className="text-sm text-gray-500">MIT, Physics Department</div>
                             </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                            "The math formula generator saves me hours every week. It's a game-changer for academic writing. I can focus on the math, not the markup."
                        </blockquote>
                        <div className="flex items-center gap-4">
                             <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">MC</div>
                             <div>
                                <div className="font-semibold text-gray-900">Prof. Michael Chen</div>
                                <div className="text-sm text-gray-500">Stanford, Mathematics</div>
                             </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                            "Working offline and syncing when connected is exactly what I needed. Finally, LaTeX that works for me! The cloud sync is seamless."
                        </blockquote>
                        <div className="flex items-center gap-4">
                             <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">EW</div>
                             <div>
                                <div className="font-semibold text-gray-900">Dr. Emma Williams</div>
                                <div className="text-sm text-gray-500">Oxford, Computer Science</div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
