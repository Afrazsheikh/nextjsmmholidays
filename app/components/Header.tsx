"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import SearchBar from "./helpers/SearchBar";
import "./home.css";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <header className="header">
      <div className="logo">MM Holidays</div>

      {!isAdminRoute && (
        <>
          <div className="header-center">
            <SearchBar
              onSelect={(pkg:any) => router.push(`/package/${pkg.id}`)}
            />
          </div>

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
