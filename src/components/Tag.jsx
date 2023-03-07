import "../styles/components/tag.scss"

function Tag({ tagName }) {
  return (
    <div className="tag-container">
      <p>{tagName}</p>
    </div>
  )
}

export default Tag
