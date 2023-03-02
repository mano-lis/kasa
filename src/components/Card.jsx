import { Link } from "react-router-dom"
import "../styles/components/card.scss"

function Card({ data }) {
  return (
    <div className="card-thumb">
      <Link to={`house/${data.id}`} state={{ houseId: data.id }}>
        <h2>{data.title}</h2>
      </Link>
    </div>
  )
}

export default Card
