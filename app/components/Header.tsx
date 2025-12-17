"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SearchBar from "./helpers/SearchBar";

interface Package {
  id: string;
  name: string;
  desc: string;
  location?: string;
  price?: number;
  offerPrice?: number;
}

const Header = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const pathname = usePathname();

  // hide search bar on admin routes
  const isAdminRoute = pathname.startsWith("/admin");

  useEffect(() => {
    if (isAdminRoute) return; // don't fetch packages for admin

    fetch("/packages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data.packages))
      .catch((err) => console.error("Failed to load packages:", err));
  }, [isAdminRoute]);

  const handleSelectPackage = (pkg: Package) => {
    console.log("Selected package:", pkg);
  };

  return (
    <header className="header">
      <div className="logo">MM Holidays</div>

      {!isAdminRoute && (
        <SearchBar packages={packages} onSelect={handleSelectPackage} />
      )}
    </header>
  );
};

export default Header;
