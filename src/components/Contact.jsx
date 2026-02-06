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
        <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                     <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Get Started with Docière</h2>
                        <p className="text-gray-600">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 bg-gray-50 border"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 bg-gray-50 border"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                required 
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 bg-gray-50 border"
                                placeholder="How can I help?"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                rows="5"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 bg-gray-50 border resize-y"
                                placeholder="Tell us more about your needs..."
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
