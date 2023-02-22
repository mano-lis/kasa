import { Link, useRouteError } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <div className="main-container">
        <h1>Oops</h1>
        <p>This is the error page</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={`/`}>Retourner à l'accueil</Link>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage
