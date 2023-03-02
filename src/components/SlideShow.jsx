import { useState } from "react"
import leftArrow from "../assets/vector_slider_left.png"
import rightArrow from "../assets/vector_slider_right.png"
import "../styles/components/slideShow.scss"

function SlideShow({ data }) {
  const [pictureIndex, setPictureIndex] = useState(0)
  const slidePicture = (e) => {
    console.log(e.target.classList.contains("left-arrow"))
    if (e.target.classList.contains("left-arrow")) {
      setPictureIndex(pictureIndex - 1)
    }
    if (e.target.classList.contains("right-arrow")) {
      setPictureIndex(pictureIndex + 1)
    }
  }

  return (
    <div className="slideshow-container">
      {pictureIndex > 0 && (
        <img
          className="arrow left-arrow"
          alt="slider de gauche"
          src={leftArrow}
          onClick={slidePicture}
        />
      )}
      <img
        className="house-picture"
        alt="partie du logement"
        src={data.pictures[pictureIndex]}
      />
      <>
        {pictureIndex < data.pictures.length - 1 && (
          <img
            className="arrow right-arrow"
            alt="slider de droite"
            src={rightArrow}
            onClick={slidePicture}
          />
        )}
      </>
    </div>
  )
}

export default SlideShow
