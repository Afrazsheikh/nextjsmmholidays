"use client";

import { useEffect, useState } from "react";
import AdminModal from "../admin/AdminModel";
import DeleteModal from "../admin/DeleteModel";
import PackageTable from "./PackageTable";
import "./admin.css";

/* ---------- Types ---------- */
export interface Package {
  _id?: string;
  name: string;
  price: number;
  offerPrice: number;
  duration: string;
  imageUrl: string;
  desc: string;
  rating: number;
  reviews: number;
  sale: string;
}


/* ---------- Component ---------- */
export default function AdminPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [selected, setSelected] = useState<Package | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------- Load Packages ---------- */
const loadPackages = async () => {
  try {
    setLoading(true);
    setError("");

    const res = await fetch("/api/packages");

    if (!res.ok) {
      throw new Error("Failed to fetch packages");
    }

    const data = await res.json();
console.log(data);

    // ✅ FIX HERE
    setPackages(data);
  } catch (err: unknown) {
    setError(err instanceof Error ? err.message : "Something went wrong");
  } finally {
    setLoading(false);
  }
};

    

useEffect(() => {
  loadPackages();
}, []);


  useEffect(() => {
    loadPackages();
  }, []);

  /* ---------- UI ---------- */
  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <h1 className="admin-title">Admin Packages</h1>

        <button
          className="admin-add-btn"
          onClick={() => {
            setSelected(null);
            setOpenModal(true);
          }}
        >
          ➕ Add Package
        </button>
      </div>

      {/* States */}
      {loading && <p>Loading packages...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Table */}
      {!loading && packages.length > 0 && (
        <PackageTable
          data={packages}
          onEdit={(pkg) => {
            setSelected(pkg);
            setOpenModal(true);
          }}
          onDelete={(pkg) => {
            setSelected(pkg);
            setDeleteModal(true);
          }}
        />
      )}

      {!loading && packages.length === 0 && (
        <p>No packages found.</p>
      )}

      {/* ---------- Modals ---------- */}
      {openModal && (
        <AdminModal
          data={selected}
          onClose={() => setOpenModal(false)}
          onSaved={() => {
            setOpenModal(false);
            loadPackages();
          }}
        />
      )}

      {deleteModal && selected && (
        <DeleteModal
          id={selected._id}
          onClose={() => setDeleteModal(false)}
          onDeleted={() => {
            setDeleteModal(false);
            loadPackages();
          }}
        />
      )}
    </div>
  );
}
