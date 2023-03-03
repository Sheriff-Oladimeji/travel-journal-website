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
{cards}
    </div>

  )
}

export default App;
