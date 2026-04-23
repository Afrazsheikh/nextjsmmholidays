"use client";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        
        {/* BRAND */}
        <div className="footer-brand">
          <div className="nav-logo">
            <div className="logo-mark">MM</div>
            <div className="logo-text">
              <strong>MM Holidays</strong>
              <span>Co. Ltd. · Bangkok</span>
            </div>
          </div>

          <p>
            Bangkok's most trusted travel company, curating unforgettable Thailand
            experiences since 2012. Your adventure starts here.
          </p>

          <div className="footer-social">
            <a className="social-btn" href="#">📘</a>
            <a className="social-btn" href="#">📷</a>
            <a className="social-btn" href="#">▶️</a>
            <a className="social-btn" href="#">💬</a>
            <a className="social-btn" href="#">📱</a>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">✈️ Flights</a></li>
            <li><a href="#">🏨 Hotels</a></li>
            <li><a href="#">🏄 Adventure</a></li>
            <li><a href="#">💑 Couple Packages</a></li>
            <li><a href="#">👨‍👩‍👧 Family Packages</a></li>
            <li><a href="#">🛕 Cultural Tours</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Blog</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partner With Us</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <div className="footer-contact-item">
            <span className="contact-icon">📍</span>
            <div className="contact-text">
              MM Holidays Co. Ltd.<br />Bangkok, Thailand
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="contact-icon">📞</span>
            <div className="contact-text">+66 XX XXX XXXX</div>
          </div>

          <div className="footer-contact-item">
            <span className="contact-icon">✉️</span>
            <div className="contact-text">info@mmholidays.com</div>
          </div>

          <div className="footer-contact-item">
            <span className="contact-icon">🕐</span>
            <div className="contact-text">
              Mon–Sat: 9AM – 8PM<br />
              24/7 WhatsApp support
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>
          © 2025 MM Holidays Co. Ltd. All rights reserved. Bangkok, Thailand.
        </span>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;