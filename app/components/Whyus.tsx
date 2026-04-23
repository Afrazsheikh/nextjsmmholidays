"use client";

import React from "react";

const WhyUs = () => {
  return (
    <section className="why" id="why">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div className="section-header centered">
          <span
            className="section-label"
            style={{ color: "var(--teal-light)" }}
          >
            Why MM Holidays
          </span>

          <h2 className="section-title">Thailand, Done Right</h2>

          <p
            className="section-sub"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            We're not just a travel agency — we're your Bangkok-based travel
            companions who live and breathe Thailand.
          </p>
        </div>

        {/* GRID */}
        <div className="why-grid">
          
          <div className="why-card">
            <span className="why-icon">📍</span>
            <h3>Local Bangkok Expertise</h3>
            <p>
              We live here. We know every shortcut, secret spot, and local
              restaurant that guide books miss.
            </p>
          </div>

          <div className="why-card">
            <span className="why-icon">💰</span>
            <h3>Genuinely Affordable</h3>
            <p>
              No hidden fees. No mark-ups on mark-ups. Direct relationships with
              hotels and transport give you the best rates.
            </p>
          </div>

          <div className="why-card">
            <span className="why-icon">🕐</span>
            <h3>24/7 Real Support</h3>
            <p>
              Reach a real person — not a chatbot — any time of day. We're here
              when you need us most.
            </p>
          </div>

          <div className="why-card">
            <span className="why-icon">✏️</span>
            <h3>Fully Customized Trips</h3>
            <p>
              Every itinerary is built around you. Your pace, your interests,
              your budget — never a one-size-fits-all package.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;