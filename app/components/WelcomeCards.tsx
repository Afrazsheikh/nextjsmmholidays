"use client";

import { useEffect, useState } from "react";
import "./home.css";

interface Settings {
  siteName: string;
  heroText: string;
  heroSubText: string;
  logoUrl: string;
  backgroundImageUrl: string;
}

export default function WelcomeCard() {
  const [settings, setSettings] = useState<Settings>({
    siteName: "MMholidays",
    heroText: "Discover unforgettable journeys...",
    heroSubText: "",
    logoUrl: "",
    backgroundImageUrl: "",
  });

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => setSettings(data));
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${settings.backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
          <div className="hero-content">
              <div   className="hero"
      style={{
        backgroundImage: `url(${settings.backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} ></div>
        <p>{settings.heroText}</p>
          </div>
          
          
    </section>
  );
}
