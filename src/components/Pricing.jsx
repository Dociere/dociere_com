import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-gray-600">
                        Choose the plan that works best for you. All plans include our core features and 30-day money-back guarantee.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold text-gray-900">Free</span>
                        </div>
                        <p className="text-gray-600 mb-8 border-b border-gray-100 pb-8">Perfect for students and hobbyists getting started with LaTeX.</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Up to 5 projects
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Offline support
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Basic formula generation
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Community support
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 rounded-lg border border-gray-900 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Professional */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-black relative shadow-lg transform scale-105 z-10">
                        <div className="absolute top-0 right-0 -mr-1 -mt-1 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold text-gray-900">$12</span>
                            <span className="text-gray-500 ml-2">/month</span>
                        </div>
                        <p className="text-gray-600 mb-8 border-b border-gray-100 pb-8">For serious researchers and professionals who need power.</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Unlimited projects
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Real-time collaboration
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Advanced formula generation
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Citation management
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Priority email support
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold text-gray-900">Custom</span>
                        </div>
                        <p className="text-gray-600 mb-8 border-b border-gray-100 pb-8">For large teams and organizations requiring control.</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Everything in Professional
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Team collaboration tools
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Advanced analytics
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Dedicated support
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 rounded-lg border border-gray-900 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
