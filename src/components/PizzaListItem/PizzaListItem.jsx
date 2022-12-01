import { useSelector, useDispatch } from "react-redux"

export default function PizzaListItem({ pizza }) {
  
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    console.log('in handleClick', pizza.id);
  }

  return (<div className="pizza-menu-item">
    <h3 className="pizza-menu-name">{pizza.name}</h3>
    <p className="pizza-menu-price">{pizza.price}</p>
    <p className="pizza-menu-description">{pizza.description}</p>
    <button onClick={handleClick}>Add</button>
  </div>)
}