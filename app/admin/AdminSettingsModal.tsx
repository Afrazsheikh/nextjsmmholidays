"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

interface Settings {
  siteName: string;
  logoUrl: string;
  backgroundImageUrl: string;
  heroText: string;
  heroSubText: string;
}

interface Props {
  onClose: () => void;
  onSaved: () => void;
}

export default function AdminSettingsModal({ onClose, onSaved }: Props) {
  const [settings, setSettings] = useState<Settings>({
    siteName: "",
    logoUrl: "",
    backgroundImageUrl: "",
    heroText: "",
    heroSubText: "",
  });

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => setSettings(data));
  }, []);

  const updateField = (key: keyof Settings, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  // ✅ Generic image upload handler
  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "backgroundImageUrl" | "logoUrl"
  ) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];

    // preview instantly
    const previewUrl = URL.createObjectURL(file);
    updateField(field, previewUrl);

    // upload to cloudinary
    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error("Upload failed");

      // save permanent URL
      updateField(field, data.url);
    } catch (err) {
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });

    if (res.ok) onSaved();
    else alert("Failed to save settings");
  };

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Website Settings</DialogTitle>

      <DialogContent
        dividers
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextField
          label="Site Name"
          value={settings.siteName}
          onChange={(e) => updateField("siteName", e.target.value)}
          fullWidth
        />

        <TextField
          label="Hero Text"
          value={settings.heroText}
          onChange={(e) => updateField("heroText", e.target.value)}
          fullWidth
        />

        <TextField
          label="Hero Sub Text"
          value={settings.heroSubText}
          onChange={(e) => updateField("heroSubText", e.target.value)}
          fullWidth
        />

        {/* 🔹 Logo Upload */}
        <div>
          <label><b>Logo</b></label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, "logoUrl")}
          />
          {settings.logoUrl && (
            <img
              src={settings.logoUrl}
              alt="Logo preview"
              style={{ marginTop: 8, height: 60 }}
            />
          )}
        </div>

        {/* 🔹 Background Image Upload */}
        <div>
          <label><b>Background Image</b></label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, "backgroundImageUrl")}
          />
          {settings.backgroundImageUrl && (
            <img
              src={settings.backgroundImageUrl}
              alt="Background preview"
              style={{
                marginTop: 8,
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          )}
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
