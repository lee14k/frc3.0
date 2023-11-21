import React, { useState } from "react";
function Imagegallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentImage("");
    setModalOpen(false);
  };

  return (
    <div className="gallerycontainer">
      <div className="containerz">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="/frctwo.jpg"
              alt="Gallery image 1"
              className="gallery__img"
              onClick={() => handleOpenModal("/frctwo.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="/frcthree.jpg"
              alt="Gallery image 2"
              className="gallery__img"
              onClick={() => handleOpenModal("/frcthree.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="/frcfour.jpg"
              alt="Gallery image 3"
              className="gallery__img"    
              onClick={() => handleOpenModal("/frcfour.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--4 ">
            <img
              src="/frcfive.jpg"
              alt="Gallery image 4"
              className="gallery__img fire"
              onClick={() => handleOpenModal("/frcfive.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="/frceight.jpg"
              alt="Gallery image 5"
              className="gallery__img"
              onClick={() => handleOpenModal("/frceight.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="/frcseven.jpg"
              alt="Gallery image 6"
              className="gallery__img"
              onClick={() => handleOpenModal("/frcseven.jpg")}
            />
          </figure>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <img className="modal-content" src={currentImage} alt="modal" />
        </div>
      )}
    </div>
  );
}

export default Imagegallery;
