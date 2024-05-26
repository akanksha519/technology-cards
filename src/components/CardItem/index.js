// Write your code here.

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl} = cardDetails

  return (
    <li className="card-container">
      <h1 className="heading">{title}</h1>
      <p className="descrip">{description}</p>
      <img src={imgUrl} className="image-style" alt={title} />
    </li>
  )
}

export default CardItem
