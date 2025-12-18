"use client";

import { useState, useEffect } from "react";
import AdminModal from "../admin/AdminModel";
import DeleteModal from "../admin/DeleteModel";
import AdminSettingsModal from "../admin/AdminSettingsModal";
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
  /** ----------- AUTH STATE ----------- */
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  /** ----------- ADMIN PAGE STATE ----------- */
  const [packages, setPackages] = useState<Package[]>([]);
  const [selected, setSelected] = useState<Package | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);


  /** ---------- LOGIN HANDLER ---------- */
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "mmholidayadmin" && password === "mmadmin123") {
      setLoggedIn(true);
      setUsername("");
      setPassword("");
        setAuthError("");
         setLoginSuccess(true)
      localStorage.setItem("adminLoggedIn", "true"); // persist login
    } else {
      setAuthError("Invalid username or password");
    }
  };

  /** ---------- LOGOUT HANDLER ---------- */
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("adminLoggedIn");
  };

  /** ---------- Load Packages ---------- */
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
    const stored = localStorage.getItem("adminLoggedIn");
    if (stored === "true") setLoggedIn(true);

    if (loggedIn) loadPackages();
  }, [loggedIn]);

  /** ---------- Handlers ---------- */
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

  /** ---------- RENDER ---------- */
  if (!loggedIn) {
    // LOGIN FORM
  return (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <form
      onSubmit={handleLogin}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "24px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "300px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Admin Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{ padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ padding: "8px" }}
      />

      {/* ERROR MESSAGE */}
      {authError && <p style={{ color: "red", textAlign: "center" }}>{authError}</p>}

      {/* SUCCESS MESSAGE */}
      {loginSuccess && <p style={{ color: "green", textAlign: "center" }}>Login successful!</p>}

      <button type="submit" style={{ padding: "8px", cursor: "pointer" }}>
        Login
      </button>
    </form>
  </div>
);

  }

  // ADMIN PAGE
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
          <button className="admin-add-btn" onClick={handleLogout}>
            🔒 Logout
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

      {settingsModal && (
        <AdminSettingsModal
          onClose={() => setSettingsModal(false)}
          onSaved={() => setSettingsModal(false)}
        />
      )}
    </div>
  );
}
