import React, { useState, useEffect, Fragment } from "react";
import { Form } from "./Form";

function Modal({ bigImageUrl, closeModal }) {
  const [url, setUrl] = useState([]);
  const [id, setId] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [selectedCurrentTarget, setSelectedCurrentTarget] = useState(null);
  useEffect(() => {
    fetch(bigImageUrl)
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.url);
        setId(data.id);
        setComments(data.comments);
      });
  }, [bigImageUrl]);
  function addComment(comment) {
    setComments((prev) => [...prev, comment]);
  }

  return (
    <div
      className="folder"
      onClick={closeModal}
      onMouseOver={(e) => setSelectedTarget(e.target)}
      onMouseOut={(e) => setSelectedCurrentTarget(e.currentTarget)}
      style={
        selectedTarget === selectedCurrentTarget
          ? { cursor: "pointer" }
          : { cursor: "default" }
      }
    >
      <div className="modalShow">
        <img src={url} key={id} className="bigImg" alt="bigImg" />
        <div className="comments">
          {comments.map((comment) => (
            <Fragment>
              <div className="commentBlock">
                <div className="date">
                  {("" + new Date(comment.date).toISOString())
                    .replace(/^([^T]+)T(.+)$/, "$1")
                    .replace(/^(\d+)-(\d+)-(\d+)$/, "$3.$2.$1")}
                </div>
                <div className="commentSection">{comment.text}</div>
              </div>
            </Fragment>
          ))}
        </div>
        <Form addComment={addComment} />

        <button
          type="button"
          className="button_close"
          onClick={closeModal}
        ></button>
      </div>
    </div>
  );
}

export default Modal;
