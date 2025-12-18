"use client";

import { useState } from "react";
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

type Props = {
  pkg: Package;
  isSelected: boolean;
    onToggleSelect: (id: string) => void;
  wordLimit?: number;
}

export default function PackageCard({ pkg, isSelected, onToggleSelect,wordLimit = 10 }: Props) {
  const [expanded, setExpanded] = useState(false);
console.log(pkg);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

  const handleToggle = () => {
    onToggleSelect(pkg._id);
  };
  // Truncate safely to 10 words or ~100 chars
      
// Function to truncate text by words, preserving HTML tags
  const truncateWordsHtml = (html: string, limit: number) => {
    const div = document.createElement("div");
    div.innerHTML = html;

    let wordCount = 0;
    const walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT);
    const nodesToRemove: Node[] = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const words = node.textContent?.split(/\s+/) || [];
      if (wordCount + words.length > limit) {
        // truncate this text node
        const remaining = limit - wordCount;
        node.textContent = words.slice(0, remaining).join(" ") + "...";

        // mark remaining nodes for removal
        while (walker.nextNode()) {
          nodesToRemove.push(walker.currentNode);
        }
        break;
      }
      wordCount += words.length;
    }

    // remove remaining nodes
    nodesToRemove.forEach((n) => n.parentNode?.removeChild(n));

    return div.innerHTML;
  };

  const htmlToShow = expanded
    ? pkg.desc || ""
    : truncateWordsHtml(pkg.desc || "", wordLimit);

  return (
    <div className="package-card-container">
      <div className="package-card">
        <div className="card-img-container">
          <img src={`${pkg.imageUrl}`} alt={pkg.name} className="card-img" />
          <div className="save-tag">SAVE THB {pkg.price - pkg.offerPrice}</div>
        </div>

        <div className="card-body">
          <p className="duration">{pkg.duration}</p>
          <div className="rating-row">
            <span className="rating">⭐ {pkg.rating}</span>
            <span className="rating-count">({pkg.ratingCount})</span>
          </div>
          <h3 className="pkg-title">{pkg.name}</h3>
          <div className="location-row">
            <span>{pkg.location1}</span> • <span>{pkg.location2}</span>
          </div>
          {pkg.sale && <div className="sale-banner">{pkg.sale}</div>}
          <div className="price-row">
            <span className="old-price">THB {pkg.price.toLocaleString()}</span>
            <span className="discount-tag">
              SAVE THB {(pkg.price - pkg.offerPrice).toLocaleString()}
            </span>
          </div>
          <div className="new-price">
            THB {pkg.offerPrice.toLocaleString()} <span className="adult">/Adult</span>
          </div>

          {/* ACTION BUTTONS */}
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
  className={`selection-toggle-btn ${isSelected ? "selected" : ""}`}
  onClick={handleToggle}
>
  {isSelected ? "Added ✓" : "Add"}
</button>

{isSelected && (
<button
  className="share-btn"
  onClick={() => {
    if (typeof window === "undefined") return;

    const url = `https://wa.me/?text=${encodeURIComponent(
      `Hi, I am interested in this package:\n\n${pkg.name}\nPrice: THB ${pkg.offerPrice}\n\nView details:\n${SITE_URL}/packages/${pkg._id}`
    )}`;

    window.open(url, "_blank");
  }}
>
  Share
</button>

)}


         <button
  className="callback-btn"
  onClick={() => {
    if (typeof window === "undefined") return;

    const url = `https://wa.me/91821996489?text=${encodeURIComponent(
      `Hi, I want a callback for ${pkg.name}`
    )}`;

    window.open(url, "_blank");
  }}
>
  Request Callback
</button>
          </div>

          {/* DESCRIPTION */}
       <div
  className="package-desc"
  style={{
    maxHeight: "200px", // max height before scrolling
    overflowY: "auto",  // vertical scroll
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  }}
>
  <div dangerouslySetInnerHTML={{ __html: htmlToShow }} />

  {pkg.desc && (
    <button
      className="read-more-btn"
      onClick={() => setExpanded(!expanded)}
      style={{ marginTop: "8px" }}
    >
      {expanded ? "Read Less" : "Read More"}
    </button>
  )}
</div>


        </div>
      </div>
    </div>
  );
}
