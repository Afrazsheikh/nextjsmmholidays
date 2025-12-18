"use client";
import "../style/packages.css";
import "./home.css";

type Package = {
  _id: string;
  name: string;
  offerPrice: number;
};

interface Props {
  selected: Package[];
  onRemove: (_id: string) => void;
}

export default function SelectedStack({ selected, onRemove }: Props) {
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
  const baseUrl =
    typeof window !== "undefined"
      ? SITE_URL
      : "https://mmholidays.com";

  const shareText = selected
    .map(
      (p) =>
        `• ${p.name}\nPrice: THB ${p.offerPrice}\n👉 ${baseUrl}/package/${p._id}`
    )
    .join("\n\n");

  const shareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Hi, I am interested in these packages:\n\n${shareText}`
  )}`;

  return (
    <div className="selected-stack">
      {/* LEFT */}
      <div className="stack-left">
        <span className="stack-count">{selected.length}</span>
        <span className="stack-text">
          Package{selected.length > 1 ? "s" : ""} Selected
        </span>
      </div>

      {/* SELECTED LIST */}
      <div className="stack-list">
        {selected.map((pkg) => (
          <div key={pkg._id} className="stack-item">
            <span className="stack-name">{pkg.name}</span>
            <button
              className="stack-remove"
              onClick={() => onRemove(pkg._id)}
              aria-label="Remove package"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* SHARE */}
 <button
  className="whatsapp-share-btn"
  onClick={() => {
    if (typeof window === "undefined") return;
    window.open(shareUrl, "_blank");
  }}
>
  Share on WhatsApp
</button>
    </div>
  );
}
