import React from "react";

// ✅ Fixed, reliable images from Unsplash (no faker)
const tutorials = [
  {
    id: 1,
    title: "React Hooks Crash Course",
    level: "Beginner",
    duration: "25 min",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=480&fit=crop&auto=format&q=70"
  },
  {
    id: 2,
    title: "Routing with React Router",
    level: "Intermediate",
    duration: "30 min",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=480&fit=crop&auto=format&q=70"
  },
  {
    id: 3,
    title: "Auth Basics with JWT",
    level: "Intermediate",
    duration: "20 min",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=480&fit=crop&auto=format&q=70"
  }
];

function Card({ image, title, meta }) {
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
        <button className="card-btn">Start</button>
      </div>
    </div>
  );
}

export default function Tutorials() {
  return (
    <section id="tutorials" className="section">
      <div className="container">
        <h2>Latest Tutorials</h2>
        <div className="grid">
          {tutorials.map((t) => (
            <Card
              key={t.id}
              image={t.image}
              title={t.title}
              meta={`${t.level} • ${t.duration}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
