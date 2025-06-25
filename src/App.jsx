import React, { useState, useRef, useEffect } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Footer from './pages/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutRef = useRef(null);

  const MenuList = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#services" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "About", link: "#about" },
  ];

  // State for hamburger menu on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Curent Screen Section Track for Active Navbar
  useEffect(() => {
    const sections = [
      homeRef.current,
      servicesRef.current,
      testimonialsRef.current,
      aboutRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section');
            setActiveSection(sectionName);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Header with Sticky Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-transparent shadow-md">
        <nav className="w-[90%] mx-auto flex items-center justify-between h-[60px] max-w-7xl">
          {/* Branding */}
          <div id="Brand" className="inline-flex items-center md:text-2xl font-semibold font-tinos text-xl">
            <a href="#">
              <span className="text-black">E-</span>
              <span className="text-sky-600">Medical</span>
            </a>
          </div>
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          {/* MenuList */}
          <ul className={`md:flex md:items-center md:gap-5 md:text-lg ${isMenuOpen ? 'flex flex-col absolute top-[60px] left-0 w-full bg-white shadow-md p-4' : 'hidden md:flex'}`}>
            {MenuList.map((items, index) => (
              <li
                key={index}
                className={`relative group inline-flex items-center md:py-0 py-2 font-tinos 
      ${activeSection === items.name ? "text-blue-600 font-bold" : ""}`}
              >
                <a href={items.link}>{items.name}</a>
                <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-800 transition-all ease-linear duration-500
      ${activeSection === items.name ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </li>
            ))}
          </ul>
          {/* Action Buttons */}
          <div className="hidden md:inline-flex items-center gap-5 font-tinos">
            <button className="p-1 px-4 rounded-2xl outline-1 outline-blue-500 text-indigo-500 font-semibold cursor-pointer hover:bg-indigo-100 transition-colors">
              Login
            </button>
            <button className="p-1 px-4 rounded-2xl bg-blue-600 text-md font-semibold text-white cursor-pointer hover:bg-blue-700 transition-colors">
              Signup
            </button>
          </div>
        </nav>
      </header>
      {/* Main Content */}
      <main>
        <Home sectionRef={homeRef} />
        <Services sectionRef={servicesRef} />
        <Testimonials sectionRef={testimonialsRef} />
        <About sectionRef={aboutRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;