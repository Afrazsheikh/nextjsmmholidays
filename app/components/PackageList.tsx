"use client";

import { useState, useEffect } from "react";
import PackageCard from "./PackageCard";
import SelectedStack from "./SelectedStack";
import WelcomeCard from "./WelcomeCards";
import "../style/packages.css";

type Package = {
  id: string;
  name: string;
  desc?: string;
  price: number;
  offerPrice: number;
  duration: string;
  rating: number;
  ratingCount: number;
  location1: string;
  location2: string;
  sale?: string;
  imageUrl: string;
};

export default function PackageList() {
  const [allPackages, setAllPackages] = useState<Package[]>([]);
  const [selected, setSelected] = useState<Package[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/afrazsheikh/mmholidays/main/packages.json"
    )
      .then((res) => res.json())
      .then((data) => setAllPackages(data.packages))
      .catch((err) => console.error("Error fetching packages:", err));
  }, []);

  const toggleSelect = (pkg: Package) => {
    setSelected((prev) =>
      prev.some((p) => p.id === pkg.id)
        ? prev.filter((p) => p.id !== pkg.id)
        : [...prev, pkg]
    );
  };

  return (
    <section>
      <WelcomeCard />

      <div className="packages-grid">
        {allPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            isSelected={selected.some((p) => p.id === pkg.id)}
            onToggleSelect={() => toggleSelect(pkg)}
          />
        ))}
      </div>

      {/* 🔥 SHOW SELECTED STACK */}
      {selected.length > 0 && <SelectedStack selected={selected} />}
    </section>
  );
}
