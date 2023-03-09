import Banner from "../components/Banner"
import homeBanner from "../assets/home_img.png"
import "../styles/pages/home.scss"
import Card from "../components/Card"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "./Root"

function Home() {
  const datas = useContext(DataContext)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 750)
  }, [])

  return (
    <div className="main-container">
      <Banner source={homeBanner} altText={"image de montagne"} home={true} />
      <div className="cards-container">
        {datas.map((data, i) => {
          return <Card key={data.title + i} data={data} isLoading={isLoading} />
        })}
      </div>
    </div>
  )
}

export default Home
