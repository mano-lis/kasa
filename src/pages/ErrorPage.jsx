import { useRouteError } from "react-router-dom"
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
        <a href="http://localhost:3000">Retourner à l'accueil</a>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage
