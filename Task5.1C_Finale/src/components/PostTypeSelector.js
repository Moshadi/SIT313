import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "q", text: "Question", value: "question" },
  { key: "a", text: "Article", value: "article" },
];

export default function PostTypeSelector({ postType, setPostType }) {
  return (
    <Dropdown
      placeholder="Select Post Type"
      selection
      options={options}
      value={postType}
      onChange={(e, { value }) => setPostType(value)}
    />
  );
}
