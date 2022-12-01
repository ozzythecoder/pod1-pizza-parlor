import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function PizzaList() {

  const dispatch = useDispatch();

  useEffect(() => { fetchPizzas() }, [])

  const fetchPizzas = () => {

    axios.get('/api/pizza')
      .then(res => {
        console.log('got pizzas:', res.data);
        dispatch({ type: 'SET_PIZZAS', payload: res.data })
      }).catch(err => console.log('fetchPizzas', err))

  }

  

  return (<div></div>)
}