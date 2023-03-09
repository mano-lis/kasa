import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import "../styles/global.scss"
import { createContext } from "react"
import datas from "../data/logements.json"

export const DataContext = createContext()

function Root() {
  return (
    <>
      <DataContext.Provider value={datas}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </DataContext.Provider>
    </>
  )
}

export default Root
