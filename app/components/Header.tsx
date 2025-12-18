"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchBar from "./helpers/SearchBar";
import "./home.css"
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

  const isAdminRoute = pathname.startsWith("/admin");

  useEffect(() => {
    if (isAdminRoute) return;

    fetch("/packages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data.packages))
      .catch((err) => console.error("Failed to load packages:", err));
  }, [isAdminRoute]);

  return (
  <header className="header">
  <div className="logo">MM Holidays</div>

  {!isAdminRoute && (
    <>
      {/* Center */}
      <div className="header-center">
        <SearchBar packages={packages} onSelect={() => {}} />
      </div>

      {/* Right */}
      <nav className="nav">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </nav>
    </>
  )}
</header>


  );
};

export default Header;
