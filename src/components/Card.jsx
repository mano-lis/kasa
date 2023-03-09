import { Link } from "react-router-dom"
import "../styles/components/card.scss"

function Card({ data, isLoading }) {
  return (
    <div className="card-thumb">
      {(isLoading === false || !data.cover) && (
        <img
          src={data.cover}
          alt="couverture du logement"
          className="cover-image"
        ></img>
      )}
      <Link to={`house/${data.id}`} state={{ houseId: data.id }}>
        <h2>{data.title}</h2>
      </Link>
    </div>
  )
}

export default Card
