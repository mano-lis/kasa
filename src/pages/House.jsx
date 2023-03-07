import { useLoaderData, useLocation } from "react-router-dom"
import Collapse from "../components/Collapse"
import SlideShow from "../components/SlideShow"
import Tag from "../components/Tag"
import "../styles/pages/house.scss"
import redStar from "../assets/red-star.png"

function House() {
  const datas = useLoaderData()
  const { state } = useLocation()

  const data = datas.find((data) => data.id === state.houseId)
  const firstName = data.host.name.split(" ")[0]
  const lastName = data.host.name.split(" ")[1]

  return (
    <div className="main-container">
      <SlideShow data={data} />
      <div className="infos-container">
        <div className="house-infos">
          <h1>{data.title}</h1>
          <h2>{data.location}</h2>
          <div className="tags">
            {data.tags &&
              data.tags.map((tag, i) => <Tag key={tag + i} tagName={tag} />)}
          </div>
        </div>
        <div className="renter-infos">
          <div className="renter">
            <div className="renter-name">
              <span>{firstName}</span>
              <span>{lastName}</span>
            </div>
            <img
              src={data.host.picture}
              alt="profil du loueur"
              className="profile-pic"
            ></img>
          </div>
          <div className="stars">
            <img src={redStar} alt="étoile rouge"></img>
            <img src={redStar} alt="étoile rouge"></img>
            <img src={redStar} alt="étoile rouge"></img>
            <img src={redStar} alt="étoile rouge"></img>
            <img src={redStar} alt="étoile rouge"></img>
          </div>
        </div>
      </div>
      <div className="house-collapse-container">
        <div className="collapse-part">
          <Collapse
            collapseTitle={"Description"}
            content={data.description}
            headerLevel={3}
          />
        </div>
        <div className="collapse-part">
          <Collapse
            collapseTitle={"Équipements"}
            content={data.equipments}
            headerLevel={3}
          />
        </div>
      </div>
    </div>
  )
}

export default House
