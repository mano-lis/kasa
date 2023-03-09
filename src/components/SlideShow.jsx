import { useState } from "react"
import leftArrow from "../assets/vector_slider_left.png"
import rightArrow from "../assets/vector_slider_right.png"
import "../styles/components/slideShow.scss"
import leftArrowMobile from "../assets/vector_slider_left_mobile.png"
import rightArrowMobile from "../assets/vector_slider_right_mobile.png"

function SlideShow({ data }) {
  const [pictureIndex, setPictureIndex] = useState(0)
  const slidePicture = (e) => {
    console.log(e.target)
    if (e.target.classList.contains("left-arrow")) {
      pictureIndex > 0
        ? setPictureIndex(pictureIndex - 1)
        : setPictureIndex(data.pictures.length - 1)
    }
    if (e.target.classList.contains("right-arrow")) {
      pictureIndex < data.pictures.length - 1
        ? setPictureIndex(pictureIndex + 1)
        : setPictureIndex(0)
    }
  }

  return (
    <div className="slideshow-container">
      {data.pictures.length > 1 && (
        <picture>
          <source srcSet={leftArrowMobile} media="(max-width: 768px)" />
          <img
            alt="slider de gauche"
            src={leftArrow}
            onClick={slidePicture}
            className="arrow left-arrow"
          />
        </picture>
      )}
      <img
        className="house-picture"
        alt="partie du logement"
        src={data.pictures[pictureIndex]}
      />
      {data.pictures.length > 1 && (
        <>
          <picture>
            <source srcSet={rightArrowMobile} media="(max-width: 768px)" />
            <img
              alt="slider de droite"
              src={rightArrow}
              onClick={slidePicture}
              className="arrow right-arrow"
            />
          </picture>
          <div className="img-number">
            <p>
              {pictureIndex + 1} / {data.pictures.length}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default SlideShow
