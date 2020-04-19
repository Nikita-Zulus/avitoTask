import React, { Fragment, useState } from "react";
import Modal from "./Modal";

export function Images({ images }) {
  const [modal, setModal] = useState(null);

  function handleClick(id) {
    setModal((prev) => (prev === id ? null : id));
  }
  function closeModal(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    setModal(null);
    console.log(e.target, e.currentTarget);
  }

  return (
    <div className="Pictures">
      {images.map((image) => (
        <Fragment>
          <img
            className="Img"
            src={image.url}
            key={image.id}
            alt="pic"
            onClick={() => handleClick(image.id)}
          />
        </Fragment>
      ))}
      {modal !== null && (
        <Modal
          bigImageUrl={
            "https://boiling-refuge-66454.herokuapp.com/images/" + modal
          }
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
