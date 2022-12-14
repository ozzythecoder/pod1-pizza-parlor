import { useSelector, useDispatch } from "react-redux"
import "./PizzaListItem.css";

export default function PizzaListItem({ pizza }) {
  
  const dispatch = useDispatch();
  
  // returns boolean - whether or not current pizza exists in order
  const inCurrentOrder = useSelector(store => {
    return store.currentOrder.pizzas.some(p => p.id == pizza.id)
  })

  console.log('pizza', pizza.id, 'in current order:', inCurrentOrder);

  const handleAdd = (evt) => {
    evt.preventDefault();

    dispatch({ type: 'ADD_PIZZA',
      payload: {
        id: pizza.id,
        quantity: 1,
        price: pizza.price
      }})

  }

  const handleRemove = (evt) => {
    evt.preventDefault();

    dispatch({ type: 'REMOVE_PIZZA', payload: {id: pizza.id, price: pizza.price} })
  }

  return (<div className="pizza-menu-item">
    <h3 className="pizza-menu-name">{pizza.name}</h3>
    <img className="pizza-menu-image" src={pizza.image_path} />
    <p className="pizza-menu-price">${pizza.price}</p>
    <p className="pizza-menu-description">{pizza.description}</p>
    {inCurrentOrder ? 
      <button onClick={handleRemove}>Remove</button> :
      <button onClick={handleAdd}>Add</button>}
  </div>)
}