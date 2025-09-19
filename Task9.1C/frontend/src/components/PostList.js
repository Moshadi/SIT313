export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <p className="no-posts">No posts yet. Start by creating one!</p>;
  }

  return (
    <div className="posts-section">
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h3>
            {post.type}: {post.title}
          </h3>
          <p>{post.description}</p>
          <small>Tags: {post.tags.join(", ")}</small>
        </div>
      ))}
    </div>
  );
}
