"use client";
import "../style/packages.css";
import "./home.css";
type Package = {
  id: string;
  name: string;
  offerPrice: number;
};

export default function SelectedStack({ selected }: { selected: Package[] }) {
  const shareText = selected
    .map((p) => `• ${p.name} - INR ${p.offerPrice}`)
    .join("\n");

  const shareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Hi, I am interested in these packages:\n\n${shareText}`
  )}`;

  return (
    <div className="selected-stack">
      <div className="stack-left">
        <span className="stack-count">{selected.length}</span>
        <span className="stack-text">
          Package{selected.length > 1 ? "s" : ""} Added
        </span>
      </div>

      <button
        className="whatsapp-share-btn"
        onClick={() => window.open(shareUrl, "_blank")}
      >
        Share on WhatsApp
      </button>
    </div>
  );
}
