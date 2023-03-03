import NavBar from "./components/nav";
import data from "./data";
import Card from "./components/card";
function App() {
  const cards = data.map(card =>{
   return  <Card
    key={card.id}
    card={card}
    />
  })
  return(
    <div>
<NavBar/>
<main className="card-container">
{cards}
</main>
    </div>

  )
}

export default App;
