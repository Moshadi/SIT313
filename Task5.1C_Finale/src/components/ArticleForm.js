import React from "react";
import { Form } from "semantic-ui-react";

export default function ArticleForm({ data, setData }) {
  return (
    <Form>
      <Form.Input
        label="Title"
        placeholder="e.g., Understanding React Hooks"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <Form.TextArea
        label="Summary"
        placeholder="Short summary for readers..."
        value={data.summary}
        onChange={(e) => setData({ ...data, summary: e.target.value })}
      />
      <Form.TextArea
        label="Content"
        placeholder="Write your article here..."
        value={data.content}
        onChange={(e) => setData({ ...data, content: e.target.value })}
        rows={10}
      />
    </Form>
  );
}
