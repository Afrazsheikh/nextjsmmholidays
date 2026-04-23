"use client";

import React from "react";

const AboutCTA = () => {
  const scrollToPackages = () => {
    const el = document.getElementById("packages");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    // later you can open modal here
    alert("Open contact modal");
  };

  return (
    <>
      {/* ── ABOUT ── */}
      <div id="about">
        <div className="about">
          <div className="about-visual">
            <div className="about-img-main">🏙️</div>

            <div className="about-img-float">
              <div className="about-img-float-num">12+</div>
              <div className="about-img-float-label">
                Years serving <br /> happy travelers
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">Our Story</span>

            <h2 className="section-title">
              Bangkok-Born, Thailand-Obsessed
            </h2>

            <p className="section-sub">
              MM Holidays Co. Ltd. was founded in the heart of Bangkok
              with one mission: to make exploring Thailand effortless,
              affordable, and unforgettable for every traveler.
            </p>

            <div className="about-points">
              <div className="about-point">
                <div className="about-point-icon">📍</div>
                <div className="about-point-text">
                  <strong>Rooted in Bangkok</strong>
                  <span>
                    Our office and team are based in Bangkok — giving
                    you insider access no online agency can match.
                  </span>
                </div>
              </div>

              <div className="about-point">
                <div className="about-point-icon">🤝</div>
                <div className="about-point-text">
                  <strong>Direct Partnerships</strong>
                  <span>
                    We work directly with hotels, airlines and local
                    guides — cutting out middlemen to save you money.
                  </span>
                </div>
              </div>

              <div className="about-point">
                <div className="about-point-icon">🌏</div>
                <div className="about-point-text">
                  <strong>5,000+ Travelers Served</strong>
                  <span>
                    From solo backpackers to luxury family trips —
                    we've planned thousands of successful journeys.
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button
                className="btn-primary"
                style={{ fontSize: "15px", padding: "14px 28px" }}
              >
                Learn Our Story →
              </button>

              <button
                className="btn-ghost"
                style={{ fontSize: "15px", padding: "14px 28px" }}
                onClick={handleContact}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="cta-banner">
        <h2>Ready to Experience Thailand?</h2>

        <p>
          Talk to our travel experts today — it's free, fast, and
          friendly.
        </p>

        <div className="cta-banner-btns">
          <button
            className="btn-cta-white"
            onClick={scrollToPackages}
          >
            🗺️ Browse Packages
          </button>

          <a
            className="btn-cta-wa"
            href="https://wa.me/66000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💬</span> Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCTA;