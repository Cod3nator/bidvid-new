import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container navbar">
       <div className="logo-menu-wrap">
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
             
            </li>
          </ul>
        </menu>
       </div>
        <button><a href="/login">Login <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg></a></button>
      </div>
    </nav>
  );
};

export default Navbar;
