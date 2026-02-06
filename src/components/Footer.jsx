import React from 'react';

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="font-display text-2xl font-bold tracking-tight text-white mb-4 block">
                            Docière <span className="text-accent">Pro</span>
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Reimagining how the world writes, collaborates, and publishes research.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
                        <ul className="space-y-2">
                            <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors text-sm">Home</button></li>
                            <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors text-sm">Features</button></li>
                            <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</button></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Changelog</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-2">
                            <li><button onClick={() => scrollToSection('founders')} className="text-gray-400 hover:text-white transition-colors text-sm">Our Team</button></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
                            <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors text-sm">Contact</button></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center bg-gray-900">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; 2026 Docière Pro. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                         {/* Social Icons Placeholder */}
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
