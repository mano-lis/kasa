import { useState } from "react"
import "../styles/components/collapse.scss"
import arrow from "../assets/vector_desktop.png"

function Collapse({ collapseTitle }) {
  const [isOpen, setIsOpen] = useState(false)
  const text =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

  return (
    <section className="collapse-block">
      <div className="collapse-header">
        <h1>{collapseTitle}</h1>
        <div
          className="arrow-content"
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
          <img src={arrow} alt="icône de dropdown" />
        </div>
      </div>
      {isOpen && (
        <article className="collapse-content">
          <div className="collapse-text-content">
            <p>{text}</p>
          </div>
        </article>
      )}
    </section>
  )
}

export default Collapse
