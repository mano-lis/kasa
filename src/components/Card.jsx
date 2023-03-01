import "../styles/components/card.scss"

function Card({ title }) {
  return (
    <div className="card-thumb">
      <h2>{title}</h2>
    </div>
  )
}

export default Card
