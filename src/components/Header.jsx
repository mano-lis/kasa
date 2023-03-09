import { Link } from "react-router-dom"
import header_logo from "../assets/header_logo.png"
import header_logo_mobile from "../assets/header_logo_mobile.png"
import "../styles/components/header.scss"

function Header() {
  return (
    <header>
      <div>
        <picture>
          <source srcSet={header_logo_mobile} media="(max-width: 768px)" />
          <img src={header_logo} alt="Logo de Kasa" />
        </picture>
      </div>
      <nav>
        <div className="link-container">
          <Link to={"/"}>Accueil</Link>
        </div>
        <div className="link-container">
          <Link to={"/about"}>À propos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
