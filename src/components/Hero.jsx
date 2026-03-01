import React from "react";

const Hero = () => {
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
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-accent"></span>
          <span className="text-sm font-medium text-gray-600">
            v0.1.x Beta is now available
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
          Write Smarter.
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">
            Collaborate Faster.
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-light text-gray-500 mb-8">
          LaTeX Redefined for the Modern Creator
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
          Docière reimagines LaTeX as true FOSS — Free and Open Source software
          that delivers freedom, transparency, and community-driven innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 rounded-full bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Get Started for Free
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 font-semibold text-lg hover:bg-gray-50 transition-all hover:border-gray-300"
          >
            Learn More
          </button>
        </div>

        {/* Hero Image / Preview */}
        <div className="relative mx-auto max-w-5xl">
          <div className="ring-1 ring-inset ring-gray-900/10">
            <div className="rounded-md bg-white shadow-2xl overflow-hidden">
              <img src="/web_hero.png" alt="Dociere Pro Preview Image" />
            </div>
          </div>
          {/* Decorative Gradients */}
          <div className="absolute -top-24 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Background Grid Pattern (Optional) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    </section>
  );
};

export default Hero;
