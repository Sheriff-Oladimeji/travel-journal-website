export default function Card(props){
return (
  <div className="card">
<img src={props.card.image} alt=""/>
<article>
  <div className="location">

  </div>
  <h2>{props.card.title}</h2>
</article>
  </div>
)
}