import { Link, useRouteError } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/pages/error.scss"

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <div className="main-container-error">
        <h1>404</h1>
        <p>Oops! La page que vous demandez n'existe pas</p>
        <Link to={`/`}>Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage
