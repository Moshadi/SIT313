import Newsletter from "../components/Newsletter";

export default function HomePage() {
  return (
    <div className="homepage">

      {/* Header Image with Hover Text */}
      <header className="hover-hero">
        <div className="hover-wrapper">
          <img src="/images/header.jpg" alt="Header" />
          <div className="hover-text">Hey, I'm W A D Moshadi Hansamali</div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="profile-section" id="about">
        <img src="/images/profile.jpg" alt="Profile" className="profile-img" />
        <h2>Frontend Developer</h2>
        <p>
          I’m a passionate developer who enjoys building clean, responsive, and secure websites and apps.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="work">
        <div className="container">
          <h2>Here's What I've Done So Far</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/images/project1.jpg" alt="Project 1" />
              <h3>Responsive Portfolio Website</h3>
              <p>
                A mobile-friendly personal portfolio site built using HTML, CSS, and responsive layout techniques.
              </p>
            </div>
            <div className="project-card">
              <img src="/images/project2.jpg" alt="Project 2" />
              <h3>Smart Login Form UI</h3>
              <p>
                A modern login form with floating labels, validation, and animations built with vanilla HTML/CSS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="contact">
        <div className="container">
          <h2>My Photos</h2>
          <div className="gallery-grid">
            <img src="/images/gallery1.jpg" alt="Gallery 1" />
            <img src="/images/gallery2.jpg" alt="Gallery 2" />
            <img src="/images/gallery3.jpg" alt="Gallery 3" />
            <img src="/images/gallery4.jpg" alt="Gallery 4" />
          </div>
        </div>
      </section>

            {/* Newsletter Section */}
      <section className="newsletter-section" id="newsletter">
        <div className="container">
          <h2>Subscribe to My Newsletter</h2>
          <p>Get the latest updates about my projects and posts.</p>
          <Newsletter />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2025 DEV@Deakin. All rights reserved.</p>
      </footer>

    </div>
  );
}
