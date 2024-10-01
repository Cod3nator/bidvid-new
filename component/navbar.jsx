import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container navbar">
        <div className="icon">
          <a href="/"><img src="/logo.png" alt="bidvid logo" /></a>
        </div>
        <menu>
          <ul>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
          </ul>
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
