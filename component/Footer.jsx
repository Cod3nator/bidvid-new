import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-bar">
        <div className="footer-dis">
          <div className="footer">
            <div className="icon-logo">
              <img src="/logo.png" alt="bidvid logo" />
            </div>
            <menu>
              <ul>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
              </ul>
            </menu>
          </div>
          <span>Copyright@bidvid.in</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
