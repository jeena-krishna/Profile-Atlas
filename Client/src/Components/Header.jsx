import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../Images/favicon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);

  // Navigation links
  const navLinks = [
    { name: "Profiles", link: "#profiles" },
    { name: "Location", link: "#location" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  const handleMenuToggle = () => {
    if (menuRef.current) {
      setMenuHeight(isMenuOpen ? 0 : menuRef.current.scrollHeight);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
    setMenuHeight(0);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
      setMenuHeight(0);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="py-3 relative bg-mainYellow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="/" id="Logo" className="w-12 h-12">
            <img
              src={favicon}
              alt="logo"
              className="object-contain h-full w-full"
            />
          </Link>

          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-8 items-center">
                {navLinks.map((navItem, index) => (
                  <li key={index}>
                    <h3 className="duration-300 hover:text-red-600 text-lg">
                      <a href={navItem.link}>{navItem.name}</a>
                    </h3>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleMenuToggle();
              }}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <i className="fa-solid fa-xmark text-black text-xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-black text-xl"></i>
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          role="menu"
          ref={menuRef}
          style={{
            maxHeight: `${menuHeight}px`,
            transition: "max-height 0.4s ease-in-out",
          }}
          className="bg-themeGreen absolute right-0 w-full px-6 overflow-hidden z-50 bg-mainYellow"
        >
          <div className="w-full h-full py-5">
            <nav>
              <ul className="flex flex-col justify-start items-center gap-3">
                {navLinks.map((navItem, index) => (
                  <li key={index}>
                    <h3 className="text-lg  duration-300 hover:text-red-600">
                      <a href={navItem.link} onClick={handleNavigation}>
                        {navItem.name}
                      </a>
                    </h3>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
