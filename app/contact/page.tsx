"use client";

import "./contact.css";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Reach us using the details below.</p>

      <div className="contact-container">

        {/* Contact Info Card */}
        <div className="contact-card">
          <h2>MM HOLIDAYS CO., LTD</h2>
          <p><strong>Contact Person:</strong> Manit</p>

          <p>
            <strong>Address:</strong><br />
            256/4 Silom Road, Suriyawong, Bangrak<br />
            Bangkok 10500, Thailand
          </p>

          <p>
            <strong>Telephone:</strong>{" "}
            <a href="tel:+6626356944">+66 2635 6944-45</a>
          </p>

          <p>
            <strong>Email:</strong><br />
            <a href="mailto:info@mmholidays.com">info@mmholidays.com</a><br />
            <a href="mailto:mmholiidaysbkk@gmail.com">
              mmholiidaysbkk@gmail.com
            </a>
          </p>

          <p>
            <strong>WhatsApp / Line:</strong><br />
            <a
              href="https://wa.me/66875178432"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat Manit
            </a>{" "}
            <br />
            <a
              href="https://wa.me/66637948372"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat Team
            </a>{" "}
            <br />
            <a
              href="https://wa.me/66823221031"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat Ms Kai
            </a>
          </p>

          <p>
            <strong>Working Hours:</strong><br />
            09:00 AM – 07:00 PM (Monday to Saturday)
          </p>

          <p>
            <strong>Location:</strong><br />
            <a
              href="https://maps.app.goo.gl/vpBRUNEa1Z5Vyqw67"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>

          <p>
            <strong>Reviews:</strong><br />
            <a
              href="https://g.page/r/CeV_0Xo1z7fsEAE/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Review
            </a>
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="map-container">
         <iframe
  src="https://www.google.com/maps?q=256/4+Silom+Road+Bangkok&output=embed"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
        </div>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}