"use client";

import React from "react";

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div className="section-header centered">
          <span className="section-label">What Travelers Say</span>

          <h2 className="section-title">Loved Across Google</h2>

          <p className="section-sub">
            Over 500 five-star reviews from real travelers who've experienced Thailand with us.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "4px" }}>★★★★★</div>
            <strong style={{ fontSize: "20px", color: "var(--navy)" }}>
              4.9/5
            </strong>
            <span style={{ color: "var(--gray-400)", fontSize: "14px" }}>
              · 500+ reviews on Google
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="reviews-grid">
          
          {/* CARD 1 */}
          <div className="review-card">
            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              MM Holidays made our honeymoon in Phuket absolutely magical. Every
              detail was taken care of — from airport pickup to the sunset
              dinner. We didn't have to worry about a single thing.
            </p>

            <div className="review-author">
              <div
                className="review-avatar"
                style={{
                  background:
                    "linear-gradient(135deg,#e8352a,#f59e0b)",
                }}
              >
                P
              </div>

              <div>
                <div className="review-name">Priya & Rahul S.</div>
                <div className="review-label">
                  Honeymoon Couple · Mumbai
                </div>
              </div>
            </div>

            <div className="google-badge">
              <div className="google-g">G</div>
              <div className="google-info">Verified Google Review</div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="review-card">
            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              Travelled with 4 kids and I was so nervous. MM Holidays planned
              everything perfectly — kid-friendly activities, smooth hotels, and
              they were available on WhatsApp 24/7. 10/10 would book again.
            </p>

            <div className="review-author">
              <div
                className="review-avatar"
                style={{
                  background:
                    "linear-gradient(135deg,#0ea5e9,#00A896)",
                }}
              >
                A
              </div>

              <div>
                <div className="review-name">Anita Mehrotra</div>
                <div className="review-label">
                  Family of 6 · Delhi
                </div>
              </div>
            </div>

            <div className="google-badge">
              <div className="google-g">G</div>
              <div className="google-info">Verified Google Review</div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="review-card">
            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              Amazing prices, better service. Our group of 8 friends had the trip
              of a lifetime in Bangkok and Krabi. The nightlife itinerary was
              insane — in the best way possible!
            </p>

            <div className="review-author">
              <div
                className="review-avatar"
                style={{
                  background:
                    "linear-gradient(135deg,#7c3aed,#c026d3)",
                }}
              >
                K
              </div>

              <div>
                <div className="review-name">Kartik Joshi</div>
                <div className="review-label">
                  Group Trip · Pune
                </div>
              </div>
            </div>

            <div className="google-badge">
              <div className="google-g">G</div>
              <div className="google-info">Verified Google Review</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;