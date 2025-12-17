"use client";

import "./admin.css";

interface Props {
  id: any;
  onClose: () => void;
  onDeleted: () => void;
}

export default function DeleteModal({ id, onClose, onDeleted }: Props) {
    
    const handleDelete = async () => {
        try {
        console.log(id);
      const res = await fetch(`/api/packages/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete package");
      }

      onDeleted();   // reload list
      onClose();     // close modal
    } catch (error) {
      console.error(error);
      alert("Failed to delete package");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box small">
        <h3>Delete Package</h3>
        <p>Are you sure you want to delete this package?</p>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
