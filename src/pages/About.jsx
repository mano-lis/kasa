import Banner from "../components/Banner"
import aboutBanner from "../assets/about_img.png"
import Collapse from "../components/Collapse"
import "../styles/pages/about.scss"

function About() {
  const collapseTitles = ["Fiabilité", "Respect", "Service", "Sécurité"]
  const text =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  return (
    <div className="main-container">
      <Banner source={aboutBanner} altText={`image de montagne`} home={false} />
      <div className="collapse-container">
        {collapseTitles.map((collapseTitle, i) => (
          <Collapse
            key={collapseTitle + i}
            collapseTitle={collapseTitle}
            content={text}
          />
        ))}
      </div>
    </div>
  )
}

export default About
