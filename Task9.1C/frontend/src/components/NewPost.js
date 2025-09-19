import { useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

export default function NewPost() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="newpost-container">
      <h1 className="page-title">New Post</h1>
      <PostForm onAddPost={handleAddPost} />
      <PostList posts={posts} />
    </div>
  );
}
