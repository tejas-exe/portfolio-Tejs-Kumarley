import "./Card.css"

const Card = (props) => { 
  const className = `card-componant ${!props.className ? "" : props.className}`
  // console.log("-->",className);
  return <div className={className}>{props.children}</div>
}

export default Card;