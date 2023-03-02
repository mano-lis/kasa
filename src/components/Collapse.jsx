import { useState } from "react"
import "../styles/components/collapse.scss"
import arrow from "../assets/vector_desktop.png"

function Collapse({ collapseTitle, content }) {
  const [isOpen, setIsOpen] = useState(false)

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
            <p>{content}</p>
          </div>
        </article>
      )}
    </section>
  )
}

export default Collapse
