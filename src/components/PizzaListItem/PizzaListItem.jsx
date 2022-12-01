import { useSelector, useDispatch } from "react-redux"

export default function PizzaListItem({ pizza }) {
  
  const dispatch = useDispatch();

  const inCurrentOrder = useSelector(store => {
    return store.currentOrder.pizzas.some(p => p.id == pizza.id)
  }) // returns boolean
  console.log('pizza', pizza.id, 'in current order:', inCurrentOrder);

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch({ type: 'ADD_PIZZA',
      payload: {
        id: pizza.id,
        quantity: 1
      }})

  }

  const handleRemove = (evt) => {
    evt.preventDefault();
    console.log('in handleRemove');
    dispatch({ type: 'REMOVE_PIZZA',
      payload: pizza.id
    })
  }

  return (<div className="pizza-menu-item">
    <h3 className="pizza-menu-name">{pizza.name}</h3>
    <img className="pizza-menu-image" src={pizza.image_path} width="240px" />
    <p className="pizza-menu-price">{pizza.price}</p>
    <p className="pizza-menu-description">{pizza.description}</p>
    {inCurrentOrder ? 
      <button onClick={handleRemove}>Remove</button> :
      <button onClick={handleClick}>Add</button>}
  </div>)
}