import React, { useState } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import PostTypeSelector from "./components/PostTypeSelector";
import QuestionForm from "./components/QuestionForm";
import ArticleForm from "./components/ArticleForm";
import PostActions from "./components/PostActions";

export default function App() {
  const [postType, setPostType] = useState("");
  const [question, setQuestion] = useState({ title: "", description: "", tags: "" });
  const [article,  setArticle]  = useState({ title: "", summary: "", content: "" });

  const handlePost = () => {
    const payload = postType === "question"
      ? { type: "question", ...question }
      : { type: "article",  ...article  };
    console.log("POST PAYLOAD:", payload);   // For your demo video
    alert("Post captured in console (no backend yet).");
  };

  const handleReset = () => {
    setQuestion({ title: "", description: "", tags: "" });
    setArticle({ title: "", summary: "", content: "" });
    setPostType("");
  };

  const disablePost =
    !postType ||
    (postType === "question" && (!question.title || !question.description)) ||
    (postType === "article"  && (!article.title  || !article.content));

  return (
    <Container style={{ marginTop: 24, maxWidth: 820 }}>
      <Header as="h1">New Post</Header>

      <Segment>
        <Header as="h4">Post Type</Header>
        <PostTypeSelector postType={postType} setPostType={setPostType} />
      </Segment>

      {postType === "question" && (
        <Segment>
          <Header as="h4">Question</Header>
          <QuestionForm data={question} setData={setQuestion} />
          <PostActions onPost={handlePost} onReset={handleReset} disabled={disablePost} />
        </Segment>
      )}

      {postType === "article" && (
        <Segment>
          <Header as="h4">Article</Header>
          <ArticleForm data={article} setData={setArticle} />
          <PostActions onPost={handlePost} onReset={handleReset} disabled={disablePost} />
        </Segment>
      )}

      {!postType && <Segment secondary>Choose a post type to begin.</Segment>}
    </Container>
  );
}
