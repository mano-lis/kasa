import { useLoaderData, useLocation } from "react-router-dom"
import Collapse from "../components/Collapse"
import SlideShow from "../components/SlideShow"

function House() {
  const datas = useLoaderData()
  const { state } = useLocation()

  const data = datas.find((data) => data.id === state.houseId)
  console.log(data)

  return (
    <div className="main-container">
      <SlideShow data={data} />
      <div>
        <h1>{data.title}</h1>
        <h2>{data.location}</h2>
      </div>
      <div>
        <Collapse
          key={data.title + data.id}
          collapseTitle={`Description`}
          content={data.description}
        />
        <Collapse
          key={data.title + data.tags[0]}
          collapseTitle={`Équipements`}
          content={data.equipments}
        />
      </div>
    </div>
  )
}

export default House
