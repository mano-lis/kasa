import Banner from "../components/Banner"
import homeBanner from "../assets/home_img.png"
import "../styles/pages/home.scss"
import { useLoaderData } from "react-router-dom"
import Card from "../components/Card"

function Home() {
  const datas = useLoaderData()
  return (
    <div className="main-container">
      <Banner source={homeBanner} altText={`image de montagne`} home={true} />
      <div className="cards-container">
        {datas.map((data, i) => {
          return <Card key={data.title + i} data={data} />
        })}
      </div>
    </div>
  )
}

export default Home
