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
        {settings.logoUrl && <img src={settings.logoUrl} alt="Logo" style={{ maxHeight: 60 }} />}
        <h1>Welcome to <span>{settings.siteName}</span></h1>
        <p>{settings.heroText}</p>
      </div>
    </section>
  );
}
