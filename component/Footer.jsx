import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-bar">
        <div className="footer-dis">
          <div className="footer">
            <div className="icon-logo">
              <img src="/logo_new.png" alt="bidvid logo" />
            </div>
            <menu>
              <ul>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
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
