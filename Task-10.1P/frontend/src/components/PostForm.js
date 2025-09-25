import { useState, useEffect, useRef } from "react";
import { db, storage, serverTimestamp, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

export default function PostForm() {
  const [type, setType] = useState("Question");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Ref for file input
  const fileInputRef = useRef(null);

  // ✅ Watch login state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  // ✅ Reset form whenever post type changes
  useEffect(() => {
    setTitle("");
    setDescription("");
    setTags("");
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // clear file input
    }
  }, [type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("⚠️ You must login/register first to create a post.");
      return;
    }

    setLoading(true);

    try {
      let imageUrl = "";

      if (file) {
        console.log("Uploading file:", file.name);
        const path = `posts/${Date.now()}_${file.name}`;
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        console.log("✅ File uploaded");
        imageUrl = await getDownloadURL(storageRef);
        console.log("✅ Got download URL:", imageUrl);
      }

      console.log("Saving to Firestore...");
      await addDoc(collection(db, "posts"), {
        uid: user.uid,
        type,
        title,
        description,
        tags: tags.split(",").map((t) => t.trim()),
        imageUrl,
        createdAt: serverTimestamp(),
      });
      console.log("✅ Post saved to Firestore");

      alert("✅ Post created!");
      handleReset();
    } catch (err) {
      console.error("❌ Error while posting:", err);
      alert("❌ Error creating post (check console for details)");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setType("Question");
    setTitle("");
    setDescription("");
    setTags("");
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // clear file input
    }
  };

  if (!user) {
    return (
      <div className="form-container">
        <div className="form-box" style={{ textAlign: "center" }}>
          <h2>⚠️ Restricted</h2>
          <p>You must login or register before you can create a new post.</p>
          <button
            onClick={() => (window.location.href = "/auth")}
            className="btn-primary"
            style={{ marginTop: "12px" }}
          >
            Go to Login / Register
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h1 className="form-title">New Post</h1>
        <form className="newpost-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Post Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Question">Question</option>
              <option value="Article">Article</option>
            </select>
          </div>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>
              {type === "Question" ? "Question Details" : "Article Content"}
            </label>
            <textarea
              placeholder={`Enter ${type.toLowerCase()} details`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Tags (comma separated)</label>
            <input
              type="text"
              placeholder="e.g. react, hooks"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="btn-group">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Posting..." : "Post"}
            </button>
            <button type="button" className="btn-reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
