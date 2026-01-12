"use client";

import { useState, useEffect } from "react";
import PackageCard from "./PackageCard";
import SelectedStack from "./SelectedStack";
import WelcomeCard from "./WelcomeCards";
import "../style/packages.css";

type Package = {
  _id: string;
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
const [packages, setPackages] = useState<Package[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
    
     /* ---------- Load Packages ---------- */
// const loadPackages = async () => {
//   try {
//     setLoading(true);
//     setError("");

//     const res = await fetch("/api/packages");

//     if (!res.ok) {
//       throw new Error("Failed to fetch packages");
//     }

//     const data = await res.json();
// console.log(data);

//     // ✅ FIX HERE
//     //   setPackages(data);
//       setAllPackages(data)
//   } catch (err: unknown) {
//     setError(err instanceof Error ? err.message : "Something went wrong");
//   } finally {
//     setLoading(false);
//   }
// };
const loadPackages = async (pageNumber = 1) => {
  try {
    setLoading(true);
    setError("");

    const res = await fetch(`/api/packages?page=${pageNumber}&limit=6`);

    if (!res.ok) throw new Error("Failed to fetch packages");

    const data = await res.json(); // ✅ THIS IS THE DATA

    console.log("📦 API DATA:", data);

      setPackages(data.packages);
      setAllPackages(data.packages);
    setTotalPages(data.pagination.totalPages);
    setPage(data.pagination.page);
  } catch (err: unknown) {
    setError(err instanceof Error ? err.message : "Something went wrong");
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
  loadPackages(page);
}, [page]);



//   useEffect(() => {
//     fetch(
//       "https://raw.githubusercontent.com/afrazsheikh/mmholidays/main/packages.json"
//     )
//       .then((res) => res.json())
//       .then((data) => setAllPackages(data.packages))
//       .catch((err) => console.error("Error fetching packages:", err));
//   }, []);

  const toggleSelect = (pkg: Package) => {
    setSelected((prev) =>
      prev.some((p) => p._id === pkg._id)
        ? prev.filter((p) => p._id !== pkg._id)
        : [...prev, pkg]
    );
  };

  return (
    <section>
      <WelcomeCard />

      <div className="packages-grid">
        {allPackages.map((pkg) => (
          <PackageCard
            key={pkg._id}
            pkg={pkg}
            isSelected={selected.some((p) => p._id === pkg._id)}
            onToggleSelect={() => toggleSelect(pkg)}
          />
        ))}
          </div>
          
          {/* ✅ PAGINATION CONTROLS (HERE) */}
  <div className="pagination">
    <button
      disabled={page === 1}
      onClick={() => setPage((p) => p - 1)}
    >
      ← Previous
    </button>

    <span>
      Page {page} of {totalPages}
    </span>

    <button
      disabled={page === totalPages}
      onClick={() => setPage((p) => p + 1)}
    >
      Next →
    </button>
  </div>

      {/* 🔥 SHOW SELECTED STACK */}
     {selected.length > 0 && (
  <SelectedStack
    selected={selected}
    onRemove={(id) =>
      setSelected((prev) => prev.filter((p) => p._id !== id))
    }
  />
)}

    </section>
  );
}
