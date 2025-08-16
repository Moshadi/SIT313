import React from "react";
import { Form } from "semantic-ui-react";

export default function QuestionForm({ data, setData }) {
  return (
    <Form>
      <Form.Input
        label="Title"
        placeholder="e.g., How to fix CORS error?"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <Form.TextArea
        label="Description"
        placeholder="Describe your problem clearly..."
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <Form.Input
        label="Tags (comma separated)"
        placeholder="react, hooks, cors"
        value={data.tags}
        onChange={(e) => setData({ ...data, tags: e.target.value })}
      />
    </Form>
  );
}
