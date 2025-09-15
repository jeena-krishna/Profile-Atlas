import React from "react";
import { Link } from "react-router-dom";
import favicon from "../Images/favicon.png";
const Footer = () => {
  const contactLinks = [
    { name: "Profiles", link: "#profiles" },
    { name: "More", link: "#location" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer className="py-11 relative bg-mainYellow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-3">
          <div className="text-center">
            <Link to="/" id="Logo">
              <img
                src={favicon}
                alt="logo"
                className="object-contain h-28 w-28 mb-3 mx-auto"
              />
            </Link>
            <h3>&copy; 2025 Profile Atlas. All rights reserved.</h3>
          </div>
          <div className="text-center">
            <nav>
              <ul>
                {contactLinks.map((menuItem, index) => (
                  <Link to={menuItem.link} key={index}>
                    <li>
                      <h3 className="duration-300 hover:text-red-600 text-lg my-2">
                        {menuItem.name}
                      </h3>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
          <div className="text-center">
            <h3 className="text-lg">Follow us on:</h3>
            <ul className="flex items-center gap-3 justify-center my-3">
              <li>
                <i className="fa-brands fa-facebook text-xl"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter text-xl"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram text-xl"></i>
              </li>
              <li>
                <i className="fa-brands fa-pinterest text-xl"></i>
              </li>
              <li>
                <i className="fa-brands fa-github text-xl"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
