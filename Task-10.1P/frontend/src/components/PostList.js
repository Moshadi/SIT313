import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setPosts(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  if (posts.length === 0) {
    return <p>No posts yet. Start by creating one!</p>;
  }

  return (
    <div className="posts-section">
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h3>
            {post.type}: {post.title}
          </h3>
          <p>{post.description}</p>
          <small>Tags: {post.tags?.join(", ")}</small>
          {post.imageUrl && (
            <div>
              <img src={post.imageUrl} alt={post.title} style={{ maxWidth: "200px" }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
