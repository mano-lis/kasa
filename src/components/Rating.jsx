import redStar from "../assets/red-star.png"
import greyStar from "../assets/white-star.png"
import Star from "./Star"

function Rating({ data }) {
  const ratingStars = []
  const rating = parseInt(data.rating)
  for (let i = 0; i < 5; i++) {
    ratingStars.push(<Star key={i} star={i < rating ? redStar : greyStar} />)
  }

  return <>{ratingStars}</>
}

export default Rating
