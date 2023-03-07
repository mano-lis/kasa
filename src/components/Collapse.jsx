import { useState } from "react"
import "../styles/components/collapse.scss"
import arrow from "../assets/vector_desktop.png"

function Collapse({ collapseTitle, content, headerLevel }) {
  const [isOpen, setIsOpen] = useState(false)
  const HeaderTag = `h${headerLevel}`

  return (
    <section className="collapse-block">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <HeaderTag>{collapseTitle}</HeaderTag>
        <img src={arrow} alt="icône de dropdown" className="arrow-slide" />
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
