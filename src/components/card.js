import icon from "../images/location.png"
export default function Card(props){
return (
  <div className="card">
<img src={props.card.image} alt=""/>
<article>
  <div className="location">
<div>
  <img src={icon} alt=""/><p>{props.card.location}</p>
</div>
<a href={props.card.googleMapsUrl}  target="_blank">View on Google Maps</a>
  </div>
  <h2>{props.card.title}</h2>
  <h4 className="small">{props.card.startDate}-{props.card.endDate}</h4>
</article>
  </div>
)
}