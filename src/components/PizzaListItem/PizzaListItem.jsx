import { useSelector, useDispatch } from "react-redux"

export default function PizzaListItem({ pizza }) {
  
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch({ type: 'ADD_PIZZA',
      payload: {
        id: pizza.id,
        quantity: 1
      }})
  }

  return (<div className="pizza-menu-item">
    <h3 className="pizza-menu-name">{pizza.name}</h3>
    <img className="pizza-menu-image" src={pizza.image_path} width="240px" />
    <p className="pizza-menu-price">{pizza.price}</p>
    <p className="pizza-menu-description">{pizza.description}</p>
    <button onClick={handleClick}>Add</button>
  </div>)
}