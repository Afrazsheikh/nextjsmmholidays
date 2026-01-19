"use client";

import { useEffect, useState } from "react";
import "./home.css";

interface Settings {
  siteName: string;
  heroText: string;
  heroSubText: string;
}

export default function WelcomeCard() {
  const [settings, setSettings] = useState<Settings>({
    siteName: "MMholidays",
    heroText: "Discover unforgettable journeys...",
    heroSubText: "",
  });

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => setSettings(data));
  }, []);

  return (
    <section className="welcome-card">
      <div className="welcome-content">
        <h1>{settings.heroText}</h1>

        {settings.heroSubText && (
          <p>{settings.heroSubText}</p>
        )}
      </div>
    </section>
  );
}
