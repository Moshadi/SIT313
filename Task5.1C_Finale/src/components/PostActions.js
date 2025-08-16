import React from "react";
import { Button } from "semantic-ui-react";

export default function PostActions({ onPost, onReset, disabled }) {
  return (
    <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
      <Button primary onClick={onPost} disabled={disabled}>Post</Button>
      <Button onClick={onReset}>Reset</Button>
    </div>
  );
}
