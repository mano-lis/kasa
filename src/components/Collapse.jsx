import { useState } from "react"
import "../styles/components/collapse.scss"
import arrow from "../assets/vector_desktop.png"

function Collapse({ collapseTitle, content, HeaderElement = "h1" }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="collapse-block">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <HeaderElement>{collapseTitle}</HeaderElement>
        <img
          src={arrow}
          alt="icône de dropdown"
          className={isOpen ? "arrow-slide active" : "arrow-slide"}
        />
      </div>
      <article
        className={isOpen ? "collapse-content active" : "collapse-content"}
      >
        <div className="collapse-text-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </article>
    </section>
  )
}

export default Collapse
