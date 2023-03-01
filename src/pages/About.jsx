import Banner from "../components/Banner"
import aboutBanner from "../assets/about_img.png"
import Collapse from "../components/Collapse"

function About() {
  const collapseTitles = ["Fiabilité", "Respect", "Service", "Sécurité"]
  return (
    <div className="main-container">
      <Banner source={aboutBanner} altText={`image de montagne`} home={false} />
      <div className="collapse-container">
        {collapseTitles.map((collapseTitle, i) => (
          <Collapse key={collapseTitle + i} collapseTitle={collapseTitle} />
        ))}
      </div>
    </div>
  )
}

export default About
