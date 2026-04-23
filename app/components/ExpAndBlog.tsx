"use client";

import React from "react";

const ExpAndBlog = () => {
  return (
    <>
      {/* ── EXPERIENCES ── */}
      <section
        id="experiences"
        style={{ background: "white", padding: "90px 40px" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="section-header"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <div>
              <span className="section-label">Unique Experiences</span>
              <h2 className="section-title">Adventures Worth Living</h2>
            </div>
            <button className="btn-primary">
              View All Experiences →
            </button>
          </div>

          <div className="experiences-grid">
            <div className="exp-card exp-card-large">
              <div
                className="exp-bg"
                style={{
                  background:
                    "linear-gradient(135deg,#0D5E8A,#00A896)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "120px",
                  opacity: 0.7,
                }}
              >
                🏝️
              </div>
              <div className="exp-overlay"></div>
              <div className="exp-content">
                <span className="exp-tag">Island Tours</span>
                <h3>Phi Phi & Maya Bay</h3>
                <p>
                  Speedboat to paradise — crystal water, dramatic cliffs,
                  and vibrant marine life.
                </p>
              </div>
            </div>

            <div className="exp-card">
              <div
                className="exp-bg"
                style={{
                  background:
                    "linear-gradient(135deg,#7c1d6f,#e8352a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "70px",
                  opacity: 0.7,
                }}
              >
                🌃
              </div>
              <div className="exp-overlay"></div>
              <div className="exp-content">
                <span className="exp-tag">Nightlife</span>
                <h3>Bangkok by Night</h3>
                <p>
                  Rooftop bars, Khao San Road & sky-high views.
                </p>
              </div>
            </div>

            <div className="exp-card">
              <div
                className="exp-bg"
                style={{
                  background:
                    "linear-gradient(135deg,#1e40af,#0ea5e9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "70px",
                  opacity: 0.7,
                }}
              >
                🤿
              </div>
              <div className="exp-overlay"></div>
              <div className="exp-content">
                <span className="exp-tag">Water Sports</span>
                <h3>Dive & Snorkel</h3>
                <p>
                  World-class diving in the Gulf of Thailand.
                </p>
              </div>
            </div>

            <div className="exp-card">
              <div
                className="exp-bg"
                style={{
                  background:
                    "linear-gradient(135deg,#92400e,#f59e0b)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "70px",
                  opacity: 0.7,
                }}
              >
                🛕
              </div>
              <div className="exp-overlay"></div>
              <div className="exp-content">
                <span className="exp-tag">Cultural</span>
                <h3>Temple Trails</h3>
                <p>
                  Ancient wats, monk blessings, and golden spires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="blog" id="blog">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="section-header"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span className="section-label">
                Travel Tips & Guides
              </span>
              <h2 className="section-title">
                From Our Bangkok Desk
              </h2>
              <p className="section-sub">
                Real advice from locals who travel Thailand every
                day.
              </p>
            </div>
            <button
              className="btn-primary"
              style={{ marginBottom: "16px" }}
            >
              Read All Articles →
            </button>
          </div>

          <div className="blog-grid">
            <div className="blog-card">
              <div
                className="blog-img"
                style={{
                  background:
                    "linear-gradient(135deg,#0D5E8A22,#00A89622)",
                }}
              >
                🗺️
              </div>
              <div className="blog-body">
                <div className="blog-category">
                  Travel Guide
                </div>
                <h3>
                  The Ultimate 10-Day Thailand Itinerary for
                  First-Timers
                </h3>
                <p>
                  Bangkok → Chiang Mai → Phuket. The perfect
                  route with insider tips.
                </p>
                <div className="blog-meta">
                  <span className="blog-date">
                    Apr 15, 2025
                  </span>
                  <a className="blog-read" href="#">
                    Read More →
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{
                  background:
                    "linear-gradient(135deg,#92400e22,#f59e0b22)",
                }}
              >
                🍜
              </div>
              <div className="blog-body">
                <div className="blog-category">
                  Food & Culture
                </div>
                <h3>
                  Bangkok Street Food: 15 Dishes You Must Try
                </h3>
                <p>
                  Pad Thai is just the beginning. Here's where
                  locals eat.
                </p>
                <div className="blog-meta">
                  <span className="blog-date">
                    Mar 28, 2025
                  </span>
                  <a className="blog-read" href="#">
                    Read More →
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{
                  background:
                    "linear-gradient(135deg,#ec489922,#f43f5e22)",
                }}
              >
                💑
              </div>
              <div className="blog-body">
                <div className="blog-category">
                  Honeymoon
                </div>
                <h3>
                  Top 7 Romantic Resorts in Thailand
                </h3>
                <p>
                  From villas to clifftop retreats — best romantic
                  stays.
                </p>
                <div className="blog-meta">
                  <span className="blog-date">
                    Mar 10, 2025
                  </span>
                  <a className="blog-read" href="#">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpAndBlog;