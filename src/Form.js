import React, { useState } from "react";

export function Form({ addComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  function handleClick() {
    if (comment === "") {
      return;
    }
    addComment({ id: Math.random(), text: comment, date: +new Date() });
    setName("");
    setComment("");
  }
  return (
    <div className="form">
      <input
        type="text"
        className="name"
        placeholder="Ваше имя"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        className="comment"
        placeholder="Ваш комментарий"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button type="button" className="button__comment" onClick={handleClick}>
        Оставить комментарий
      </button>
    </div>
  );
}
