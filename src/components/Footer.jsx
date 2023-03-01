import "../styles/components/footer.scss"
import footer_logo from "../assets/footer_logo.png"

function Footer() {
  return (
    <footer>
      <div>
        <img src={footer_logo} alt="Logo de Kasa"></img>
      </div>
      <p>© 2020 Kasa All Rights Reserved</p>
    </footer>
  )
}

export default Footer
