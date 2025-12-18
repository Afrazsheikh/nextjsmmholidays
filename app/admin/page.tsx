"use client";

import { useEffect, useState } from "react";
import AdminModal from "../admin/AdminModel";
import DeleteModal from "../admin/DeleteModel";
import AdminSettingsModal from "../admin/AdminSettingsModal"; // import settings modal
import PackageTable from "./PackageTable";
import "./admin.css";

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

export default function AdminPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [selected, setSelected] = useState<Package | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false); // for website settings
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------- Load Packages ---------- */
  const loadPackages = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/packages");
      if (!res.ok) throw new Error("Failed to fetch packages");

      const data = await res.json();
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

  /* ---------- Handlers ---------- */
  const handleAdd = () => {
    setSelected(null);
    setOpenModal(true);
  };

  const handleEdit = (pkg: Package) => {
    setSelected(pkg);
    setOpenModal(true);
  };

  const handleDelete = (pkg: Package) => {
    setSelected(pkg);
    setDeleteModal(true);
  };

  const handleOpenSettings = () => {
    setSettingsModal(true);
  };

  /* ---------- UI ---------- */
  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <h1 className="admin-title">Admin Packages</h1>

        <div style={{ display: "flex", gap: "12px" }}>
          <button className="admin-add-btn" onClick={handleAdd}>
            ➕ Add Package
          </button>
          <button className="admin-add-btn" onClick={handleOpenSettings}>
            ⚙️ Website Settings
          </button>
        </div>
      </div>

      {/* States */}
      {loading && <p>Loading packages...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Table */}
      {!loading && packages.length > 0 && (
        <PackageTable
          data={packages}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      {!loading && packages.length === 0 && <p>No packages found.</p>}

      {/* Modals */}
      {openModal && (
        <AdminModal
          data={selected}
          onClose={() => setOpenModal(false)}
          onSaved={() => {
            setOpenModal(false);
            loadPackages(); // refresh table after save
          }}
        />
      )}

      {deleteModal && selected && (
        <DeleteModal
          id={selected._id}
          onClose={() => setDeleteModal(false)}
          onDeleted={() => {
            setDeleteModal(false);
            loadPackages(); // refresh table after delete
          }}
        />
      )}

      {settingsModal && (
        <AdminSettingsModal
          onClose={() => setSettingsModal(false)}
          onSaved={() => setSettingsModal(false)} // optional: reload page settings if needed
        />
      )}
    </div>
  );
}
