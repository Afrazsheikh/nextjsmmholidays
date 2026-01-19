"use client";

import { useEffect, useState } from "react";

interface Settings {
  totalTravellers: number;
  onGroundCount: number;
  onGroundCountries: string;
}

export default function LiveToursSection() {
  const [settings, setSettings] = useState<Settings>({
    totalTravellers: 0,
    onGroundCount: 0,
    onGroundCountries: "",
  });

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        setSettings({
          totalTravellers: Number(data.totalTravellers || 0),
          onGroundCount: Number(data.onGroundCount || 0),
          onGroundCountries: data.onGroundCountries || "",
        });
      });
  }, []);

  return (
    <section className="live-tours">
      <div className="live-tours-container">
        <h2>Tours We Are Operating Right Now!</h2>
        <p className="subtitle">
          A real-time view of travellers currently touring with us.
        </p>

        <div className="stats">
          <div className="stat">
            <h3>{settings.totalTravellers.toLocaleString()}</h3>
            <p>Travellers currently on MM Holidays tours</p>
          </div>

          <div className="divider" />

          <div className="stat">
            <h3>{settings.onGroundCount}</h3>
            <p>
              On-ground in <span>{settings.onGroundCountries}</span> right now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
