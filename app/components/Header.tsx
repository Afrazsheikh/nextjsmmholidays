"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import SearchBar from "./helpers/SearchBar";
import Image from "next/image";

import "./header.css";



const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <header className="header">
<div className="logo" onClick={() => router.push("/")}>
  <Image
    src="/images/logo-header.jpeg"
    alt="MM Holidays Logo"
    width={150}
   height={130}
    className="logo-img"
  />
</div>

      {!isAdminRoute && (
        <>
    <div className="header-center">
  <div className="search-wrapper">
    <SearchBar
      onSelect={(pkg:any) => router.push(`/package/${pkg.id}`)}
    />
  </div>
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
             <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About us
            </Link>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
