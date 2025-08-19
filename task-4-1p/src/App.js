import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedArticles from "./components/FeaturedArticles";
import Tutorials from "./components/Tutorials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedArticles />
      <Tutorials />

      <section id="about" className="section">
        <div className="container">
          <h2>About DEV@Deakin</h2>
          <p>
            DEV@Deakin showcases student-friendly articles and tutorials focused on modern,
            secure front-end development. This home page demonstrates React components and
            rendering lists using <code>Array.map()</code>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
