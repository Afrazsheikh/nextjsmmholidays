"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Package } from "./page";
import dynamic from "next/dynamic";



const CKEditor = dynamic(
  () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  { ssr: false }
);
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface Props {
  data: Package | null;
    onClose: () => void;
     onSaved: () => void;
}

const emptyPackage: Package = {
 _id: "",
  name: "",
  price: 0,
  offerPrice: 0,
  duration: "",
  imageUrl: "",
  desc: "",
  rating: 0,
  reviews: 0,
  sale: "",
};

export default function AdminModal({ data, onClose, onSaved }: Props) {

  const [form, setForm] = useState<Package>(emptyPackage);
  const [imageFile, setImageFile] = useState<File | null>(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [loading, setLoading] = useState(false);

const [toast, setToast] = useState<{
  open: boolean;
  message: string;
  severity: "success" | "error";
}>({
  open: false,
  message: "",
  severity: "success",
});

  useEffect(() => {
    setForm(data ?? emptyPackage);
  }, [data]);

  const updateField = (key: keyof Package, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };


    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files || !e.target.files[0]) return;

  const file = e.target.files[0];
  setImageFile(file);

  // preview immediately
  const previewUrl = URL.createObjectURL(file);
  updateField("imageUrl", previewUrl);

  // upload to cloudinary
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (res.ok) {
    // save permanent URL
    updateField("imageUrl", data.url);
  } else {
    alert("Image upload failed");
  }
};
const handleSave = async () => {
  try {
    setLoading(true); // start loading

    const isEdit = !!form._id;
    const url = isEdit ? `/api/packages/${form._id}` : "/api/packages";

    const payload = { ...form };
    if (!isEdit) delete payload._id;

    const res = await fetch(url, {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Save failed");

    onSaved();
  } catch (err) {
    alert("Failed to save package");
  } finally {
    setLoading(false); // stop loading
  }
};


//  const handleSave = async () => {
//   try {
//     const isEdit = !!form._id;
//     const url = isEdit ? `/api/packages/${form._id}` : "/api/packages";

//     // Remove _id for new packages
//     const payload = { ...form };
//     if (!isEdit) delete payload._id;

//     const res = await fetch(url, {
//       method: isEdit ? "PUT" : "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) throw new Error("Save failed");

//     onSaved();
//   } catch (err) {
//     alert("Failed to save package");
//   }
// };
const isFormValid = (): boolean => {
  return (
    form.name.trim() !== "" &&
    form.price > 0 &&
    form.duration.trim() !== "" &&
    form.imageUrl.trim() !== ""
  );
};
// const handleSave = async () => {
//   try {
//     const method = form._id ? "PUT" : "POST";
//     const url = form._id
//       ? `/api/packages/${form._id}`
//       : "/api/packages";

//     const res = await fetch(url, {
//       method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     if (!res.ok) throw new Error("Save failed");

//     onSaved();
//   } catch (err) {
//     alert("Failed to save package");
//   }
// };

  return (
    <>
      <Dialog open onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.25rem",
                color: "#1976d2",
              }}
            >
              {form.name || (data ? "Edit Package" : "Add Package")}
            </span>
            <span style={{ fontSize: "0.9rem", color: "#555" }}>
              {data ? "Edit your package details below" : "Fill in the package details"}
            </span>
          </div>
        </DialogTitle>

        <DialogContent dividers>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "8px" }}>
            {/* Package Name */}
            <div style={{ flex: "1 1 100%" }}>
              <TextField
                label="Package Name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                fullWidth
                InputProps={{ style: { backgroundColor: "#f5f5f5", fontWeight: "500" } }}
              />
            </div>

            {/* Price */}
            <div style={{ flex: "1 1 30%" }}>
              <TextField
                label="Price"
                type="text"
                value={form.price}
                onChange={(e) => updateField("price", Number(e.target.value))}
                fullWidth
                InputProps={{ style: { backgroundColor: "#f5f5f5" } }}
              />
            </div>

            {/* Offer Price */}
            <div style={{ flex: "1 1 30%" }}>
              <TextField
                label="Offer Price"
                type="text"
                value={form.offerPrice}
                onChange={(e) => updateField("offerPrice", Number(e.target.value))}
                fullWidth
                InputProps={{ style: { backgroundColor: "#f5f5f5" } }}
              />
            </div>

            {/* Duration */}
            <div style={{ flex: "1 1 30%" }}>
              <TextField
                label="Duration"
                value={form.duration}
                onChange={(e) => updateField("duration", e.target.value)}
                fullWidth
                InputProps={{ style: { backgroundColor: "#f5f5f5" } }}
              />
            </div>

            {/* Image Upload */}
            <div style={{ flex: "1 1 100%" }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ marginBottom: "8px" }}
              />
              {form.imageUrl && (
                <img
                  src={form.imageUrl}
                  alt="Preview"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    maxWidth: "80%",
                    height: "40vh",
                  }}
                />
              )}
            </div>

            {/* CKEditor */}
            <div style={{ flex: "1 1 100%" }}>
              <CKEditor
                editor={ClassicEditor as any}
                data={form.desc}
                onChange={(_, editor) => {
                  const data = (editor as any).getData();
                  updateField("desc", data);
                }}
              />
            </div>

            {/* Rating */}
            <div style={{ flex: "1 1 30%" }}>
              <TextField
                label="Rating"
                type="text"
                value={form.rating}
                onChange={(e) => updateField("rating", Number(e.target.value))}
                fullWidth
                InputProps={{ style: { backgroundColor: "#f5f5f5" } }}
              />
            </div>

            {/* Reviews */}
            <div style={{ flex: "1 1 30%" }}>
              <TextField
                label="Reviews"
                type="text"
                value={form.reviews}
                onChange={(e) => updateField("reviews", Number(e.target.value))}
                fullWidth
                InputProps={{ style: { backgroundColor: "#f5f5f5" } }}
              />
            </div>

            {/* Sale */}
            <div style={{ flex: "1 1 30%" }}>
              <TextField
                label="Sale"
                value={form.sale}
                onChange={(e) => updateField("sale", e.target.value)}
                fullWidth
                InputProps={{ style: { backgroundColor: "#f5f5f5" } }}
              />
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={onClose}
            style={{ color: "#1976d2", borderColor: "#1976d2" }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}   disabled={!isFormValid()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      {/* <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Package saved successfully!
        </Alert>
          </Snackbar> */}
          <Snackbar
  open={toast.open}
  autoHideDuration={3000}
  onClose={() => setToast({ ...toast, open: false })}
  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
>
  <Alert
    onClose={() => setToast({ ...toast, open: false })}
    severity={toast.severity}
    variant="filled"
    sx={{ borderRadius: 2 }}
  >
    {toast.message}
  </Alert>
</Snackbar>

    </>
  );
}
