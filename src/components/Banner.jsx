function Banner({ source, altText, home }) {
  return (
    <div className="img-container">
      <img src={source} alt={altText} id="banner-img"></img>
      {home && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

export default Banner
