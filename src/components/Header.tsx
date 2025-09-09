import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import vistriumLogo from "@/assets/vistrium-logo.png";
import { scrollToHash } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Tools", href: "#tools" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={vistriumLogo} 
              alt="ViSTRIUM Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors duration-200 ${
                  item.name === "Home"
                    ? "text-[#d8a517ff] font-semibold"
                    : ["Services","About","Tools","Portfolio"].includes(item.name)
                      ? "text-[#040521ff] hover:text-[#d8a517ff]"
                      : "text-[#232A3E] hover:text-[#d8a517ff]"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a href="#contact" onClick={() => scrollToHash('#contact')} className="hidden sm:inline-flex rounded-full bg-[#020b14ff] text-white px-8 py-2 text-lg font-semibold shadow hover:bg-[#d8a517ff] hover:text-[#232A3E] border-none transition-all duration-200">
              Contact Me
            </a>
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-accent/20">
            <div className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    item.name === "Home"
                      ? "text-[#d8a517ff] font-semibold"
                      : ["Services","About","Tools","Portfolio"].includes(item.name)
                        ? "text-[#040521ff] hover:text-[#d8a517ff]"
                        : "text-[#232A3E] hover:text-[#d8a517ff]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => { setIsMenuOpen(false); scrollToHash('#contact'); }} className="mt-4 self-start rounded-full bg-[#020b14ff] text-white px-8 py-2 text-lg font-semibold shadow hover:bg-[#d8a517ff] hover:text-[#232A3E] border-none transition-all duration-200">
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;