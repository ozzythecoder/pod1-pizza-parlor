import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PizzaListItem from "../PizzaListItem/PizzaListItem";

export default function PizzaList() {

  const pizzas = useSelector(store => store.pizzaList)
  const dispatch = useDispatch();

  useEffect(() => { fetchPizzas() }, [])

  const fetchPizzas = () => {

    axios.get('/api/pizza')
      .then(res => {
        console.log('got pizzas:');
        console.table(res.data)
        dispatch({ type: 'SET_PIZZAS', payload: res.data })
      }).catch(err => console.log('fetchPizzas', err))

  }

  const menuList = pizzas.map(pizza => {
    return (
      <PizzaListItem pizza={pizza} />
    )
  })

  return (<div></div>)
}