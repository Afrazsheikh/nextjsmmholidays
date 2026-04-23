"use client";

import React from "react";

const Categories = () => {
  return (
    <section className="categories" id="categories">
      {/* HEADER */}
      <div className="section-header centered">
        <span className="section-label">Browse By Type</span>
        <h2 className="section-title">What's Your Travel Style?</h2>
        <p className="section-sub">
          From solo adventures to full family holidays — we have the perfect package for everyone.
        </p>
      </div>

      {/* GRID */}
      <div className="categories-grid">
        <div className="cat-card">
          <div className="cat-icon" style={{ background: "rgba(232,53,42,0.1)" }}>✈️</div>
          <h3>Flights</h3>
          <p>Best-value airfares to top Thai destinations and beyond</p>
          <a className="cat-link" href="#">Browse Flights →</a>
        </div>

        <div className="cat-card">
          <div className="cat-icon" style={{ background: "rgba(0,168,150,0.1)" }}>🏨</div>
          <h3>Hotels</h3>
          <p>Handpicked stays from budget-friendly to luxury resorts</p>
          <a className="cat-link" href="#">Explore Hotels →</a>
        </div>

        <div className="cat-card">
          <div className="cat-icon" style={{ background: "rgba(245,166,35,0.1)" }}>🏄</div>
          <h3>Adventure</h3>
          <p>Thrilling island hops, diving, trekking & more</p>
          <a className="cat-link" href="#">Get Adventurous →</a>
        </div>

        <div className="cat-card">
          <div className="cat-icon" style={{ background: "rgba(109,40,217,0.1)" }}>👨‍👩‍👧‍👦</div>
          <h3>Family Packages</h3>
          <p>Kid-friendly itineraries the whole family will love</p>
          <a className="cat-link" href="#">Family Trips →</a>
        </div>

        <div className="cat-card">
          <div className="cat-icon" style={{ background: "rgba(236,72,153,0.1)" }}>💑</div>
          <h3>Couple Packages</h3>
          <p>Romantic escapes, honeymoons & anniversary getaways</p>
          <a className="cat-link" href="#">Romantic Trips →</a>
        </div>
      </div>
    </section>
  );
};

export default Categories;