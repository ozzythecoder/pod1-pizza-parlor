import { useSelector, useDispatch } from "react-redux"

export default function PizzaListItem({ pizza }) {
  
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    console.log('in handleClick', pizza.id);
  }

  return (<div>
    <h3>{pizza.name}</h3>
    <p>{pizza.price}</p>
    <p>{pizza.description}</p>
    <button onClick={handleClick}>Add</button>
  </div>)
}