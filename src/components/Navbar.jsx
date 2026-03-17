import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    } else if (id === "home") {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img src="/logo.png" loading="lazy" className="w-10 h-auto" alt="" />
            <span className="text-2xl font-playfair text-gray-900 tracking-tight pb-1">
              Docière
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* {["Home", "Features", "Founders", "Pricing", "Contact"].map( */}
            {["Home", "Features"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("downloads")}
              className="bg-black text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-2 animate-fade-in-down">
          {["Home", "Features"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-all"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("downloads")}
            className="block w-full text-center bg-black text-white px-4 py-3 rounded-xl font-medium mt-4 hover:bg-gray-800 transition-all"
          >
            Download
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
