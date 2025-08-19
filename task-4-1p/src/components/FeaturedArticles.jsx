import React from "react";

// ✅ Fixed, reliable images from Unsplash (no faker)
const articles = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Alex Nguyen",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=480&fit=crop&auto=format&q=70",
    excerpt: "Build components, manage state, and render your first app."
  },
  {
    id: 2,
    title: "Secure Frontends 101",
    author: "Priya Shah",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=480&fit=crop&auto=format&q=70",
    excerpt: "Practical ways to protect users and data in SPAs."
  },
  {
    id: 3,
    title: "Styling Strategies in 2025",
    author: "Liam Park",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=480&fit=crop&auto=format&q=70",
    excerpt: "CSS Modules, Tailwind, CSS-in-JS—when to use which?"
  }
];

function Card({ image, title, meta, description }) {
  const fallback = "https://placehold.co/800x480?text=Image";
  return (
    <div className="card">
      <img
        className="card-img"
        src={image}
        alt={title}
        onError={(e) => (e.currentTarget.src = fallback)}
      />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">{meta}</div>
        <p className="card-text">{description}</p>
        <button className="card-btn">Read more</button>
      </div>
    </div>
  );
}

export default function FeaturedArticles() {
  return (
    <section id="articles" className="section">
      <div className="container">
        <h2>Featured Articles</h2>
        <div className="grid">
          {articles.map((a) => (
            <Card
              key={a.id}
              image={a.image}
              title={a.title}
              meta={`By ${a.author}`}
              description={a.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
