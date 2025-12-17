import "./home.css";

export default function WelcomeCard() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Welcome to <span>MMholidays</span>
        </h1>

        <p>
          Discover unforgettable journeys, handpicked holiday packages, and
          personalized travel experiences across the world.
        </p>

        {/* Optional buttons */}
        {/*
        <div className="hero-buttons">
          <a href="#packages" className="btn-primary">
            Explore Packages
          </a>
          <a href="#contact" className="btn-outline">
            Contact Us
          </a>
        </div>
        */}
      </div>
    </section>
  );
}
