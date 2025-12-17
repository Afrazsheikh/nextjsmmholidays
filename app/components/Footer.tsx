import "../style/packages.css";
export default function Footer() {
  return (
       <footer className="mm-footer">
      <div className="footer-top">
        <h3>MMholidays</h3>
        <p>Your trusted travel partner for unforgettable journeys.</p>
      </div>

      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Packages</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
      </div>

      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MMholidays. All rights reserved.</p>
      </div>
    </footer>
  );
}
