"use client";

import { useState } from "react";
import "../style/packages.css";


type Package = {
  id: string;
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
};

export default function PackageCard({ pkg, isSelected, onToggleSelect }: Props) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    onToggleSelect(pkg.id);
  };

  const truncateWords = (text: string, limit: number = 10) => {
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
  };

  return (
    <div className="package-card-container">
      <div className="package-card">
        <div className="card-img-container">
          <img src={`https://raw.githubusercontent.com/afrazsheikh/mmholidays/main/images/${pkg.imageUrl}`} alt={pkg.name} className="card-img" />
          <div className="save-tag">SAVE INR {pkg.price - pkg.offerPrice}</div>
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
            <span className="old-price">INR {pkg.price.toLocaleString()}</span>
            <span className="discount-tag">
              SAVE INR {(pkg.price - pkg.offerPrice).toLocaleString()}
            </span>
          </div>
          <div className="new-price">
            INR {pkg.offerPrice.toLocaleString()} <span className="adult">/Adult</span>
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
    onClick={() =>
      window.open(
        `https://wa.me/?text=${encodeURIComponent(
          `Hi, I am interested in ${pkg.name}\nPrice: INR ${pkg.offerPrice}`
        )}`,
        "_blank"
      )
    }
  >
    Share
  </button>
)}


            <button
              className="callback-btn"
              onClick={() =>
                window.open(
                  `https://wa.me/+91821996489?text=${encodeURIComponent(
                    "Hi, I want a callback for " + pkg.name
                  )}`,
                  "_blank"
                )
              }
            >
              Request Callback
            </button>
          </div>

          {/* DESCRIPTION */}
        <div className="package-desc">
  <p>{expanded ? pkg.desc : truncateWords(pkg.desc || "", 10)}</p>

  {pkg.desc && (
    <button
      className="read-more-btn"
      onClick={() => setExpanded(!expanded)}
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
