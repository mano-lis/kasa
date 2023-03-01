import Banner from "../components/Banner"
import homeBanner from "../assets/home_img.png"
import "../styles/pages/home.scss"
import datas from "../data/logements.json"
import Card from "../components/Card"

function Home() {
  return (
    <div className="main-container">
      <Banner source={homeBanner} altText={`image de montagne`} home={true} />
      <div className="cards-container">
        {datas.map((data, i) => {
          return <Card key={data.title + i} title={data.title} />
        })}
      </div>
    </div>
  )
}

export default Home
