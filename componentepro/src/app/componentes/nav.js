'use client'
import React, { useState, useEffect ,Link, useLocation, useNavigate} from 'react';
import { motion } from 'framer-motion';



const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#historia', label: 'Historia', isPage: false },
    { href: '/servicios', label: 'Servicios', isPage: true },
    { href: '#comentarios', label: 'Clientes', isPage: false },
    { href: '/nosotros', label: 'Nosotros', isPage: true },
    { href: '#faq', label: 'FAQ', isPage: false },
  ];

  const handleNavClick = (href, isPage) => {
    setIsMobileMenuOpen(false);
    if (isPage) {
      navigate(href);
    } else {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href } });
      } else {
        scrollToSection(href);
      }
    }
  };
  
  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-md border-b' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="cursor-pointer">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img alt="GRUPO CINCO Logo" className="h-10" src="https://horizons-cdn.hostinger.com/5b6b2121-14ff-426f-be09-7ab6c581335e/5c09f509781a4f54bfef37914cc497fa.png" />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isPage)}
                className="font-semibold text-secondary hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}

          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <div></div>
            ) : (
              <div></div>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden glass-effect absolute top-full left-0 right-0 shadow-lg p-6"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.isPage)}
                  className="font-semibold text-secondary hover:text-primary text-lg"
                >
                  {item.label}
                </button>
              ))}
              
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;