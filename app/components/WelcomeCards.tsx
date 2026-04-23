// "use client";

// import { useEffect, useState } from "react";
// import "./home.css";

// interface Settings {
//   siteName: string;
//   heroText: string;
//   heroSubText: string;
// }

// export default function WelcomeCard() {
//   const [settings, setSettings] = useState<Settings>({
//     siteName: "MMholidays",
//     heroText: "Discover unforgettable journeys...",
//     heroSubText: "",
//   });

//   useEffect(() => {
//     fetch("/api/settings")
//       .then((res) => res.json())
//       .then((data) => setSettings(data));
//   }, []);

//   return (
//     <section className="welcome-card">
//       <div className="welcome-content">
//         <h1>{settings.heroText}</h1>

//         {settings.heroSubText && (
//           <p>{settings.heroSubText}</p>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";

const WelcomeCard = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      {/* BACKGROUND */}
      <div className="hero-bg">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Bangkok's Most Trusted Travel Company
        </div>

        <h1>
          Explore Thailand <br />
          <em>Like Never Before</em>
        </h1>

        <p className="hero-sub">
          Curated travel experiences for couples, families & adventurers —
          <br />
          handcrafted by Bangkok locals who know every hidden gem.
        </p>

        {/* SEARCH */}
        <div className="hero-search">
          <div className="search-field">
            <span className="search-field-icon">📍</span>
            <div>
              <div className="search-field-label">Destination</div>
              <input
                className="search-field-input"
                placeholder="Bangkok, Phuket, Krabi..."
              />
            </div>
          </div>

          <div className="search-divider"></div>

          <div className="search-field">
            <span className="search-field-icon">📅</span>
            <div>
              <div className="search-field-label">Travel Dates</div>
              <input
                className="search-field-input"
                placeholder="Select dates"
              />
            </div>
          </div>

          <div className="search-divider"></div>

          <div className="search-field">
            <span className="search-field-icon">👥</span>
            <div>
              <div className="search-field-label">Travelers</div>
              <input
                className="search-field-input"
                placeholder="2 Adults"
              />
            </div>
          </div>

          <button className="search-btn">🔍 Search</button>
        </div>

        {/* BUTTONS */}
        <div className="hero-ctas">
          <button
            className="btn-hero-primary"
            onClick={() => handleScroll("packages")}
          >
            🗺️ Explore Packages
          </button>

          <button
            className="btn-hero-ghost"
            onClick={() => handleScroll("why")}
          >
            ▶️ Watch Our Story
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">5,000+</div>
          <div className="hero-stat-label">Happy Travelers</div>
        </div>

        <div className="hero-stat">
          <div className="hero-stat-num">150+</div>
          <div className="hero-stat-label">Tour Packages</div>
        </div>

        <div className="hero-stat">
          <div className="hero-stat-num">4.9★</div>
          <div className="hero-stat-label">Google Rating</div>
        </div>

        <div className="hero-stat">
          <div className="hero-stat-num">12+</div>
          <div className="hero-stat-label">Years Experience</div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCard;