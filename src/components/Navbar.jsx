import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
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
    <nav>
      <div class="nav-container">
        <div class="logo">Docière <span>Pro</span></div>
        <ul class="nav-links">
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('features')}>Features</a></li>
          <li><a onClick={() => scrollToSection('founders')}>Founders</a></li>
          <li><a onClick={() => scrollToSection('pricing')}>Pricing</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        <button class="nav-cta" onClick={() => scrollToSection('contact')}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
