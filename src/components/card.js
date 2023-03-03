import icon from "../images/location.png"
export default function Card(props){
return (
  <div className="card">
<img src={props.card.image} alt=""/>
<article>
  <div className="card-location">
<div>
  <img src={icon} alt=""/><p className="card-country">{props.card.location}</p>
</div>
<a href={props.card.googleMapsUrl}  target="_blank" rel="noreferrer" className="card-link">View on Google Maps</a>
  </div>
  <h2  className="card-title">{props.card.title}</h2>
  <h4 className="card-date">{props.card.startDate}-{props.card.endDate}</h4>
  <p className="card-desc">
    {props.card.description}
  </p>
</article>
  </div>
)
}