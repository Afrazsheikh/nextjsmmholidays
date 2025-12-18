"use client";

import "./contact.css";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Reach us using the details below.</p>

      <div className="contact-card">
        <p><strong>Email:</strong> support@mmholidays.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Mumbai, India</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
