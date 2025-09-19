import { useState } from "react";

export default function PostForm({ onAddPost }) {
  const [type, setType] = useState("Question");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      type,
      title,
      description,
      tags: tags.split(",").map((t) => t.trim()),
    };
    onAddPost(newPost);
    handleReset();
  };

  const handleReset = () => {
    setType("Question");
    setTitle("");
    setDescription("");
    setTags("");
  };

  return (
    <form className="newpost-form" onSubmit={handleSubmit}>
      {/* Post Type */}
      <label>Post Type</label>
      <select
        className="input-field"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="Question">Question</option>
        <option value="Article">Article</option>
      </select>

      {/* Title */}
      <label>Title</label>
      <input
        className="input-field"
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      {/* Description */}
      <label>{type === "Question" ? "Question Details" : "Article Content"}</label>
      <textarea
        className="textarea-field"
        placeholder={`Enter ${type.toLowerCase()} details`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>

      {/* Tags */}
      <label>Tags (comma separated)</label>
      <input
        className="input-field"
        type="text"
        placeholder="e.g. react, hooks"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      {/* Buttons */}
      <div className="btn-group">
        <button type="submit" className="btn-primary">
          Post
        </button>
        <button type="button" className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
