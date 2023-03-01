import { Link } from "react-router-dom"
import header_logo from "../assets/header_logo.png"
import "../styles/components/header.scss"

function Header() {
  return (
    <header>
      <div>
        <img src={header_logo} alt="Logo de footer en rouge"></img>
      </div>
      <nav>
        <div className="link-container">
          <Link to={`/`}>Accueil</Link>
        </div>
        <div className="link-container">
          <Link to={`/about`}>À propos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
