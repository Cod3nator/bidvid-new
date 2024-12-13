import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container navbar">
        <div className="icon-logo">
          <a href="/"><img src="/logo_new.png" alt="bidvid logo" /></a>
        </div>
        <menu>
          <ul>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
