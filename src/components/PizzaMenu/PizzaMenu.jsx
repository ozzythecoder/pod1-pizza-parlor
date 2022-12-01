import axios from "axios";
import { useEffect } from "react";

export default function PizzaMenu() {



  const fetchPizzas = () => {

    axios.get('/api/pizza')
      .then(res => {
        console.log('got pizzas');

      }).catch(err => console.log('fetchPizzas', err))

  }

  useEffect(() => {
    fetchPizzas();
  }, [])

  return (<div>

  </div>)
}