import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import "../styles/global.scss"
import houseDatas from "../data/logements.json"

export function getDatas() {
  const datas = houseDatas
  return datas
}

function Root(houseDatas) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root
