import "../styles/components/banner.scss"

function Banner({ source, sourceMobile, altText, home }) {
  return (
    <div className="img-container">
      {home ? (
        <>
          <img src={source} alt={altText} id="banner-img"></img>
          <h1>Chez vous, partout et ailleurs</h1>
        </>
      ) : (
        <picture>
          <source srcSet={sourceMobile} media="(max-width: 768px)" />
          <img src={source} alt="Logo de Kasa" />
        </picture>
      )}
    </div>
  )
}

export default Banner
