
export default function PizzaListItem({ pizza }) {
  
  return (<div>
    <h3>{pizza.name}</h3>
    <p>{pizza.price}</p>
    <p>{pizza.description}</p>
  </div>)
}