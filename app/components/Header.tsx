"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "./header.css";
import Image from "next/image";
const Header = () => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after click
    }
  };

  return (
    <nav className="main-nav">
      {/* LOGO */}
      <div className="nav-logo" onClick={() => handleScroll("top")}>
        {/* <div className="logo-mark">MM</div>
        <div className="logo-text">
          <strong>MM Holidays</strong>
          <span>Co. Ltd. · Bangkok</span>
        </div> */}
        <div className="logo-image">
          <Image
            src="images/logo.jpeg"
            alt="MM Holidays Logo"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <button onClick={() => handleScroll("packages")}>✈️ Flights</button>
        </li>
        <li>
          <button onClick={() => handleScroll("packages")}>🏨 Hotels</button>
        </li>
        <li>
          <button onClick={() => handleScroll("experiences")}>
            🏄 Adventure
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("packages")}>🗺️ Packages</button>
        </li>
        <li>
          <button onClick={() => handleScroll("blog")}>📝 Blog</button>
        </li>
        <li>
          <button onClick={() => handleScroll("about")}>🏢 About Us</button>
        </li>

        {/* MOBILE ACTIONS */}
        <div className="mobile-actions">
          <button className="btn-ghost">Sign In</button>
          <button className="btn-primary">Plan Your Trip ✨</button>
        </div>
      </ul>

      {/* DESKTOP ACTIONS */}
      <div className="nav-actions">
        <button className="btn-ghost">Sign In</button>
        <button
          className="btn-primary"
          onClick={() => handleScroll("packages")}
        >
          Plan Your Trip ✨
        </button>
      </div>
    </nav>
  );
};

export default Header;
